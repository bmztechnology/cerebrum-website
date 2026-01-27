import { stripe } from "@/lib/stripe";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const session = await auth();

        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // 1. Find customer by email
        const customers = await stripe.customers.list({
            email: session.user.email,
            limit: 1,
            expand: ['data.subscriptions']
        });

        if (customers.data.length === 0) {
            return NextResponse.json({ status: "no_customer_found" });
        }

        const customer = customers.data[0];
        const subscriptions = customer.subscriptions?.data || [];
        const activeSub = subscriptions.find(sub => sub.status === 'active' || sub.status === 'trialing');

        if (activeSub) {
            // 2. Update DB
            await db.update(users)
                .set({
                    stripeCustomerId: customer.id,
                    subscriptionId: activeSub.id,
                    subscriptionStatus: activeSub.status,
                    expiresAt: new Date(activeSub.current_period_end * 1000),
                })
                .where(eq(users.email, session.user.email));

            return NextResponse.json({
                status: "synced",
                subscriptionStatus: activeSub.status
            });
        }

        return NextResponse.json({ status: "no_active_subscription" });

    } catch (error) {
        console.error("Stripe Sync Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
