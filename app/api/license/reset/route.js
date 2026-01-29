export const dynamic = 'force-dynamic';
import { stripe } from "@/lib/stripe";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userId } = await auth();
        if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        // Get user's license key from DB
        let dbUser = await db.query.users.findFirst({
            where: eq(users.id, userId),
            columns: { licenseKey: true, subscriptionStatus: true }
        });

        if (!dbUser || !dbUser.licenseKey) {
            // Attempt Self-Healing: Check Clerk Metadata
            try {
                console.log(`[LICENSE-DEBUG] local DB missing license for ${userId}. Checks Clerk...`);
                // const client = await clerkClient(); // Attempt to await if it's a promise in this version?
                // Let's stick to the pattern used in user-sync.js: clerkClient().users...
                const clerkUser = await clerkClient().users.getUser(userId);

                console.log(`[LICENSE-DEBUG] Clerk User Metadata:`, JSON.stringify(clerkUser.publicMetadata, null, 2));

                const clerkLicense = clerkUser.publicMetadata?.licenseKey;
                console.log(`[LICENSE-DEBUG] Found License in Clerk: ${clerkLicense}`);

                if (clerkLicense) {
                    console.log(`[LICENSE] Self-healing: Found license ${clerkLicense} in Clerk for user ${userId}. Updating DB.`);

                    // Update DB with found license
                    await db.update(users)
                        .set({ licenseKey: clerkLicense })
                        .where(eq(users.id, userId));

                    // Use this license for the rest of the request
                    if (!dbUser) {
                        dbUser = {
                            licenseKey: clerkLicense,
                            subscriptionStatus: clerkUser.publicMetadata?.subscriptionStatus || "active"
                        };
                    } else {
                        dbUser.licenseKey = clerkLicense;
                    }
                } else {
                    console.warn(`[LICENSE-DEBUG] License NOT found in Clerk metadata.`);
                    return NextResponse.json({ error: "No license found" }, { status: 404 });
                }
            } catch (err) {
                console.error("Self-healing failed:", err);
                return NextResponse.json({ error: "No license found: " + err.message }, { status: 404 });
            }
        }

        if (dbUser.subscriptionStatus !== 'active' && dbUser.subscriptionStatus !== 'trialing') {
            return NextResponse.json({ error: "Subscription inactive" }, { status: 403 });
        }

        console.log(`[LICENSE] Resetting HWID for user ${userId}, License: ${dbUser.licenseKey}`);

        // Update Stripe Metadata to clear HWID
        try {
            await stripe.subscriptions.update(dbUser.licenseKey, {
                metadata: { cerebrum_hwid: "" }
            });
            console.log(`[LICENSE] Successfully cleared HWID for ${dbUser.licenseKey}`);
        } catch (stripeError) {
            console.error(`[LICENSE] Stripe Update Failed for ${dbUser.licenseKey}:`, stripeError.message);

            // SOFT FAIL: If key is not found or other non-critical Stripe errors
            const isNotFoundError = stripeError.code === 'resource_missing' || stripeError.status === 404;
            const isInvalidRequest = stripeError.type === 'StripeInvalidRequestError';

            if (isNotFoundError || isInvalidRequest) {
                console.warn(`[LICENSE] Proceeding with soft-fail for reset. Key might be from different env or already deleted.`);
            } else {
                throw stripeError; // Re-throw critical errors (network, auth, etc.)
            }
        }

        return NextResponse.json({ success: true, message: "License reset successfully. You can now login on a new device." });

    } catch (error) {
        console.error("License Reset Error:", error);
        return NextResponse.json({
            error: "Failed to reset license.",
            details: error.message
        }, { status: 500 });
    }
}
