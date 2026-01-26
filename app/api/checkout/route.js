import { stripe } from "@/lib/stripe";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const session = await auth();
        const { priceId } = await req.json();

        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const checkoutSession = await stripe.checkout.sessions.create({
            mode: "subscription",
            customer_email: session.user.email,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
            metadata: {
                userId: session.user.id,
            },
        });

        return NextResponse.json({ url: checkoutSession.url });
    } catch (error) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
