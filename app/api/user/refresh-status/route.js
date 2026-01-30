import { stripe } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // 1. Get current data from DB
        const dbUser = await db.query.users.findFirst({
            where: eq(users.id, userId),
        });

        if (!dbUser || !dbUser.subscriptionId) {
            return NextResponse.json({
                status: "inactive",
                message: "No subscription found in database to refresh."
            });
        }

        let stripeStatus = "inactive";
        let subscription = null;

        try {
            // 2. Fetch fresh status from Stripe
            subscription = await stripe.subscriptions.retrieve(dbUser.subscriptionId);

            if (subscription && (subscription.status === 'active' || subscription.status === 'trialing')) {
                stripeStatus = "active";
            } else {
                stripeStatus = "inactive";
            }
        } catch (stripeErr) {
            console.error("[REFRESH] Stripe retrieval failed (ID likely invalid for this environment):", stripeErr.message);
            stripeStatus = "inactive"; // Treat as inactive if not found in Stripe
        }

        // 3. Sync Clerk & DB if status has changed
        if (stripeStatus !== dbUser.subscriptionStatus) {
            console.log(`[REFRESH] Status change detected for ${userId}: ${dbUser.subscriptionStatus} -> ${stripeStatus}`);

            // Update Clerk
            await clerkClient().users.updateUser(userId, {
                publicMetadata: {
                    ...dbUser.publicMetadata,
                    subscriptionStatus: stripeStatus,
                    licenseKey: stripeStatus === 'active' ? dbUser.subscriptionId : null
                }
            });

            // Update DB
            await db.update(users)
                .set({
                    subscriptionStatus: stripeStatus,
                    licenseKey: stripeStatus === 'active' ? dbUser.subscriptionId : null
                })
                .where(eq(users.id, userId));
        }

        return NextResponse.json({
            status: stripeStatus,
            message: "Status successfully synced with Stripe."
        });

    } catch (error) {
        console.error("Deep Refresh Error:", error);
        return NextResponse.json({ error: "Internal Error during refresh" }, { status: 500 });
    }
}
