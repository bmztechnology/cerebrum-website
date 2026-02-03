import { stripe } from "@/lib/stripe";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const { userId } = await auth();
        const user = await currentUser();
        const { priceId: rawPriceId, plan, locale } = await req.json();

        let priceId = rawPriceId;

        // If a plan is passed (monthly/yearly), resolve it to a Price ID using server-side env vars
        // This is much more robust than relying on NEXT_PUBLIC_ vars baked into the client at build time.
        if (plan === 'monthly') {
            priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY;
        } else if (plan === 'yearly') {
            priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY;
        }

        if (!priceId || priceId === "undefined" || priceId === "null") {
            // Fallback for direct usage or missing plan
            priceId = process.env.STRIPE_PRICE_ID;
        }

        if (!priceId) {
            console.error("Checkout Error: Price ID not configured. Received plan:", plan, "rawPriceId:", rawPriceId);
            return NextResponse.json({
                error: "Price ID not configured",
                details: "The system could not resolve a Stripe Price ID for this selection."
            }, { status: 500 });
        }

        if (!userId || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const email = user.emailAddresses?.[0]?.emailAddress;

        const effectiveLocale = locale || 'en';

        const checkoutSession = await stripe.checkout.sessions.create({
            mode: "subscription",
            customer_email: email,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/${effectiveLocale}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/${effectiveLocale}/pricing?canceled=true`,
            metadata: {
                userId: userId,
            },
        });

        return NextResponse.json({ url: checkoutSession.url });
    } catch (error) {
        console.error("Stripe Checkout Session Error:", error);
        return NextResponse.json({
            error: "Checkout failed",
            details: error.message,
            code: error.code
        }, { status: 500 });
    }
}
