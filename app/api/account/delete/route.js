"use server";

import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = user.id;

        // 1. Get user data from Turso to find Stripe customer ID
        const [dbUser] = await db.select().from(users).where(eq(users.clerkId, userId));

        if (dbUser?.stripeCustomerId) {
            // 2. Cancel all active subscriptions
            const subscriptions = await stripe.subscriptions.list({
                customer: dbUser.stripeCustomerId,
                status: "active",
            });

            for (const subscription of subscriptions.data) {
                await stripe.subscriptions.cancel(subscription.id);
            }

            // 3. Delete Stripe customer
            await stripe.customers.del(dbUser.stripeCustomerId);
        }

        // 4. Delete user from Turso database
        await db.delete(users).where(eq(users.clerkId, userId));

        // 5. Delete user from Clerk
        const clerk = await clerkClient();
        await clerk.users.deleteUser(userId);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting account:", error);
        return NextResponse.json(
            { error: "Failed to delete account", details: error.message },
            { status: 500 }
        );
    }
}
