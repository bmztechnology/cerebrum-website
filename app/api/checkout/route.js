import { stripe } from "@/lib/stripe";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const { userId } = await auth();
        const user = await currentUser();
        const { priceId: rawPriceId, locale } = await req.json();

        // Hardcoded fallbacks in case environment variables are missing on server
        const FALLBACK_MONTHLY = "price_1StdnvLBQKj11679zzcNfx1R";
        const FALLBACK_YEARLY = "price_1Stvv7LBQKj11679Wxa984m3";

        let priceId = rawPriceId;
        if (!priceId || priceId === "undefined" || priceId === "null") {
            // Try to infer from environment or use fallback
            priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY || FALLBACK_MONTHLY;
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
