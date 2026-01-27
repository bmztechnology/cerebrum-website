import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { syncUserAfterPayment } from "@/lib/user-sync";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const { sessionId, userId } = await req.json();

        if (!sessionId || !userId) {
            return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
        }

        // 1. Retrieve session from Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status === 'paid') {
            // 2. Retrieve extra details for sync
            let subscription = session.subscription;
            if (subscription && typeof subscription === 'string') {
                subscription = await stripe.subscriptions.retrieve(subscription);
            }

            if (!subscription) {
                console.error("No subscription found for session", sessionId);
                return NextResponse.json({ error: "No subscription" }, { status: 400 });
            }

            // 3. Sync User State (Clerk + Local DB)
            const result = await syncUserAfterPayment(userId, session, subscription);

            return NextResponse.json({
                status: "active",
                licenseKey: result.licenseKey
            });
        } else {
            return NextResponse.json({ status: "pending" });
        }
    } catch (error) {
        console.error("Payment verification failed:", error);
        return NextResponse.json({ error: "Verification Failed" }, { status: 500 });
    }
}
