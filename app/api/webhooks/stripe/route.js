import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
import { sendWelcomeEmail } from "@/lib/email";
import { syncUserAfterPayment } from "@/lib/user-sync";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature");

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        console.error("Webhook signature verification failed:", error.message);
        return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
    }

    // Handle CHECKOUT SESSION COMPLETED
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        console.log(`[STRIPE] Payment completed for session: ${session.id}`);

        const userId = session.metadata?.userId;
        const customerEmail = session.customer_details?.email;
        const customerName = session.customer_details?.name || "Trader";

        try {
            // Retrieve full subscription to get current_period_end
            let subscription = session.subscription;
            if (subscription && typeof subscription === 'string') {
                subscription = await stripe.subscriptions.retrieve(subscription);
            }

            // 1. Sync User State (Clerk + Local DB)
            const licenseKey = subscription ? subscription.id : session.id;

            if (userId && subscription) {
                await syncUserAfterPayment(userId, session, subscription);
                console.log(`[WEBHOOK] User ${userId} fully synced.`);
            } else {
                console.warn(`[WEBHOOK] Missing userId (${userId}) or subscription (${subscription?.id}). Skipping full sync.`);
            }

            // 2. Send Welcome Email
            if (customerEmail) {
                const emailSent = await sendWelcomeEmail(customerEmail, customerName, licenseKey);
                if (emailSent) console.log(`[EMAIL] Welcome email sent to ${customerEmail}`);
            }
        } catch (err) {
            console.error("[WEBHOOK] Processing failed:", err);
            // Don't fail the webhook response, we want to acknowledge receipt
        }
    }
    // Handle SUBSCRIPTION DELETED
    else if (event.type === "customer.subscription.deleted") {
        const subscription = event.data.object;
        console.log(`[STRIPE] Subscription deleted: ${subscription.id}`);

        // Try to find user by metadata
        let userId = subscription.metadata?.userId;

        // Fallback: Find by Subscription ID in DB
        if (!userId) {
            try {
                const dbUser = await db.query.users.findFirst({
                    where: eq(users.subscriptionId, subscription.id),
                    columns: { id: true }
                });
                if (dbUser) userId = dbUser.id;
            } catch (err) {
                console.error("[WEBHOOK] DB lookup failed:", err);
            }
        }

        if (userId) {
            console.log(`[WEBHOOK] Deactivating user ${userId}...`);

            // 1. Update Clerk Metadata
            try {
                await clerkClient().users.updateUser(userId, {
                    publicMetadata: {
                        subscriptionStatus: "inactive",
                        licenseKey: null
                    }
                });
            } catch (err) {
                console.error("[WEBHOOK] Clerk deactivation failed:", err);
            }

            // 2. Update Local DB
            try {
                await db.update(users)
                    .set({
                        subscriptionStatus: "inactive",
                        licenseKey: null,
                        subscriptionId: null
                    })
                    .where(eq(users.id, userId));
                console.log(`[WEBHOOK] User ${userId} deactivated in DB.`);
            } catch (err) {
                console.error("[WEBHOOK] DB deactivation failed:", err);
            }
        } else {
            console.warn(`[WEBHOOK] Could not find user for cancelled subscription: ${subscription.id}`);
        }
    }
    // Handle CUSTOMER DELETED (when customer is manually deleted from Stripe Dashboard)
    else if (event.type === "customer.deleted") {
        const customer = event.data.object;
        console.log(`[STRIPE] Customer deleted: ${customer.id}`);

        try {
            // Find user by stripeCustomerId
            const dbUser = await db.query.users.findFirst({
                where: eq(users.stripeCustomerId, customer.id),
            });

            if (dbUser) {
                console.log(`[WEBHOOK] Found user ${dbUser.email} for deleted customer. Invalidating...`);

                // Update Local DB - full invalidation
                await db.update(users)
                    .set({
                        subscriptionStatus: "inactive",
                        licenseKey: null,
                        hwid: null,
                        subscriptionId: null,
                        stripeCustomerId: null,
                        expiresAt: null,
                    })
                    .where(eq(users.id, dbUser.id));

                console.log(`[WEBHOOK] User ${dbUser.email} fully invalidated after customer deletion.`);

                // Also update Clerk if possible
                try {
                    await clerkClient().users.updateUser(dbUser.id, {
                        publicMetadata: {
                            subscriptionStatus: "inactive",
                            licenseKey: null
                        }
                    });
                } catch (clerkErr) {
                    console.warn("[WEBHOOK] Clerk update failed (may be expected):", clerkErr.message);
                }
            } else {
                console.warn(`[WEBHOOK] No user found for deleted customer: ${customer.id}`);
            }
        } catch (err) {
            console.error("[WEBHOOK] Customer deletion handling failed:", err);
        }
    }

    return NextResponse.json({ received: true });
}
