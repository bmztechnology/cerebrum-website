import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const dynamic = 'force-dynamic';

export async function GET(req) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Fetch fresh data from DB
        const dbUser = await db.query.users.findFirst({
            where: eq(users.id, userId),
            columns: {
                id: true,
                subscriptionStatus: true,
                licenseKey: true,
                stripeCustomerId: true,
                subscriptionId: true
            }
        });

        if (!dbUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // REAL-TIME STRIPE VALIDATION
        // If user appears active but has a Stripe Customer ID, verify with Stripe
        if (dbUser.stripeCustomerId && dbUser.subscriptionStatus !== "inactive") {
            try {
                // Check if customer still exists
                const customer = await stripe.customers.retrieve(dbUser.stripeCustomerId);

                if (customer.deleted) {
                    // Customer was deleted in Stripe - invalidate locally
                    console.log(`[REALTIME-SYNC] Customer ${dbUser.stripeCustomerId} was deleted. Invalidating user.`);
                    await invalidateUser(dbUser.id);
                    return NextResponse.json({
                        status: "inactive",
                        licenseKey: null,
                        customer_id: null,
                        synced: true
                    });
                }

                // Check subscriptions
                const subscriptions = await stripe.subscriptions.list({
                    customer: dbUser.stripeCustomerId,
                    status: 'all',
                    limit: 5,
                });

                const activeSub = subscriptions.data.find(
                    sub => sub.status === 'active' || sub.status === 'trialing'
                );

                if (!activeSub) {
                    // No active subscription - invalidate locally
                    console.log(`[REALTIME-SYNC] No active subscription for customer ${dbUser.stripeCustomerId}. Invalidating.`);
                    await invalidateUser(dbUser.id);
                    return NextResponse.json({
                        status: "inactive",
                        licenseKey: null,
                        customer_id: dbUser.stripeCustomerId,
                        synced: true
                    });
                }

                // User is valid - return current data
                return NextResponse.json({
                    status: dbUser.subscriptionStatus || "inactive",
                    licenseKey: dbUser.licenseKey,
                    customer_id: dbUser.stripeCustomerId,
                    synced: true
                });

            } catch (stripeErr) {
                if (stripeErr.code === 'resource_missing') {
                    // Customer doesn't exist in Stripe - invalidate
                    console.log(`[REALTIME-SYNC] Customer ${dbUser.stripeCustomerId} not found in Stripe. Invalidating.`);
                    await invalidateUser(dbUser.id);
                    return NextResponse.json({
                        status: "inactive",
                        licenseKey: null,
                        customer_id: null,
                        synced: true
                    });
                }
                // Other Stripe error - fall back to DB data
                console.error("[REALTIME-SYNC] Stripe check failed:", stripeErr.message);
            }
        }

        // Return DB data (for users without Stripe customer or already inactive)
        return NextResponse.json({
            status: dbUser.subscriptionStatus || "inactive",
            licenseKey: dbUser.licenseKey,
            customer_id: dbUser.stripeCustomerId
        });

    } catch (error) {
        console.error("Status Check Error:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}

// Helper function to invalidate user in DB
async function invalidateUser(userId) {
    await db.update(users).set({
        subscriptionStatus: "inactive",
        licenseKey: null,
        hwid: null,
        subscriptionId: null,
        expiresAt: null,
    }).where(eq(users.id, userId));
}
