import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function DELETE(req) {
    let step = "init";
    try {
        step = "auth";
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = user.id;
        console.log(`[DELETE ACCOUNT] Starting deletion for user: ${userId}`);

        // 1. Get user data from Turso
        step = "turso-fetch";
        let dbUser = null;
        try {
            const result = await db.select().from(users).where(eq(users.clerkId, userId));
            dbUser = result[0];
            console.log(`[DELETE ACCOUNT] Turso user found: ${!!dbUser}`);
        } catch (tursoError) {
            console.log(`[DELETE ACCOUNT] Turso fetch failed (continuing): ${tursoError.message}`);
        }

        // 2. Handle Stripe cleanup (if customer exists)
        if (dbUser?.stripeCustomerId) {
            step = "stripe-cancel-subs";
            try {
                const subscriptions = await stripe.subscriptions.list({
                    customer: dbUser.stripeCustomerId,
                    status: "active",
                });
                console.log(`[DELETE ACCOUNT] Found ${subscriptions.data.length} active subscriptions`);

                for (const subscription of subscriptions.data) {
                    await stripe.subscriptions.cancel(subscription.id);
                    console.log(`[DELETE ACCOUNT] Cancelled subscription: ${subscription.id}`);
                }
            } catch (stripeSubError) {
                console.log(`[DELETE ACCOUNT] Stripe subscription cancel failed (continuing): ${stripeSubError.message}`);
            }

            step = "stripe-delete-customer";
            try {
                await stripe.customers.del(dbUser.stripeCustomerId);
                console.log(`[DELETE ACCOUNT] Deleted Stripe customer: ${dbUser.stripeCustomerId}`);
            } catch (stripeDelError) {
                console.log(`[DELETE ACCOUNT] Stripe customer delete failed (continuing): ${stripeDelError.message}`);
            }
        }

        // 3. Delete from Turso
        step = "turso-delete";
        try {
            await db.delete(users).where(eq(users.clerkId, userId));
            console.log(`[DELETE ACCOUNT] Deleted from Turso`);
        } catch (tursoDelError) {
            console.log(`[DELETE ACCOUNT] Turso delete failed (continuing): ${tursoDelError.message}`);
        }

        // 4. Delete from Clerk (this is the critical step)
        step = "clerk-delete";
        const clerk = await clerkClient();
        await clerk.users.deleteUser(userId);
        console.log(`[DELETE ACCOUNT] Deleted from Clerk`);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(`[DELETE ACCOUNT] Failed at step "${step}":`, error);
        return NextResponse.json(
            { error: "Failed to delete account", step, details: error.message },
            { status: 500 }
        );
    }
}
