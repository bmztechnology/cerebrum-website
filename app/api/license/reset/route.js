export const dynamic = 'force-dynamic';
import { stripe } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userId } = await auth();
        if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        // Get user's license key from DB
        const dbUser = await db.query.users.findFirst({
            where: eq(users.id, userId),
            columns: { licenseKey: true, subscriptionStatus: true }
        });

        if (!dbUser || !dbUser.licenseKey) {
            return NextResponse.json({ error: "No license found" }, { status: 404 });
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
        } catch (stripeError) {
            // SOFT FAIL: If key is from Test but env is Live (or vice versa), ignore the error.
            if (stripeError.code === 'resource_missing') {
                console.warn(`[LICENSE] Mismatch: License Key ${dbUser.licenseKey} not found in current Stripe Env. Skipping metadata update.`);
                // We proceed to return success so the user UI doesn't show "Error".
            } else {
                throw stripeError; // Re-throw real errors
            }
        }

        return NextResponse.json({ success: true, message: "License reset successfully. You can now login on a new device." });

    } catch (error) {
        console.error("License Reset Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
