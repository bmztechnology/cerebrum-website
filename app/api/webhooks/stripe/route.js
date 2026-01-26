import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

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
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
    }

    const session = event.data.object;

    if (event.type === "checkout.session.completed") {
        const subscription = await stripe.subscriptions.retrieve(session.subscription);

        await db.update(users)
            .set({
                stripeCustomerId: session.customer,
                subscriptionId: session.subscription,
                subscriptionStatus: "active",
                expiresAt: new Date(subscription.current_period_end * 1000),
            })
            .where(eq(users.email, session.customer_details.email));
    }

    if (event.type === "invoice.payment_succeeded") {
        const subscription = await stripe.subscriptions.retrieve(session.subscription);

        await db.update(users)
            .set({
                subscriptionStatus: "active",
                expiresAt: new Date(subscription.current_period_end * 1000),
            })
            .where(eq(users.subscriptionId, session.subscription));
    }

    if (event.type === "customer.subscription.deleted") {
        await db.update(users)
            .set({
                subscriptionStatus: "canceled",
            })
            .where(eq(users.subscriptionId, session.id));
    }

    return new NextResponse(null, { status: 200 });
}
