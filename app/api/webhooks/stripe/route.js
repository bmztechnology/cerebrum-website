import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
import { sendWelcomeEmail } from "@/lib/email";
import { syncUserAfterPayment } from "@/lib/user-sync";

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

    const session = event.data.object;
    const userId = session.metadata?.userId;

    if (event.type === "checkout.session.completed") {
        console.log(`[STRIPE] Payment completed for session: ${session.id}`);

        const customerEmail = session.customer_details?.email;
        const customerName = session.customer_details?.name || "Trader";

        try {
            // Retrieve full subscription to get current_period_end
            let subscription = session.subscription;
            if (subscription && typeof subscription === 'string') {
                subscription = await stripe.subscriptions.retrieve(subscription);
            }

            // 1. Sync User State (Clerk + Local DB)
            // Use subscription ID as license key if available, otherwise session ID
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


    return NextResponse.json({ received: true });
}
