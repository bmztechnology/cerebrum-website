import { stripe } from "@/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await db.query.users.findFirst({
            where: eq(users.id, userId),
        });

        if (!user || !user.stripeCustomerId) {
            return NextResponse.json({ error: "Customer not found" }, { status: 404 });
        }

        const createParams = {
            customer: user.stripeCustomerId,
            return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
        };

        try {
            const portalSession = await stripe.billingPortal.sessions.create(createParams);
            return NextResponse.json({ url: portalSession.url });
        } catch (initialError) {
            // AUTO-REPAIR: If customer doesn't exist (e.g. switched Test<->Live), create a new one.
            if (initialError.code === 'resource_missing') {
                console.log("[Portal] Customer ID mismatch. Auto-repairing...");

                const newCustomer = await stripe.customers.create({
                    email: user.email,
                    name: user.name,
                    metadata: { userId: user.id }
                });

                // Update DB with new valid ID
                await db.update(users)
                    .set({ stripeCustomerId: newCustomer.id })
                    .where(eq(users.id, userId));

                // Retry portal creation
                const retrySession = await stripe.billingPortal.sessions.create({
                    customer: newCustomer.id,
                    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
                });
                return NextResponse.json({ url: retrySession.url });
            }
            throw initialError;
        }

    } catch (error) {
        console.error("Stripe Portal Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
