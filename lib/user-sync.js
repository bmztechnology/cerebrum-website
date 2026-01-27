import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

/**
 * Synchronizes User state across Clerk and Local DB after a successful payment.
 * 
 * @param {string} userId - The Clerk User ID
 * @param {object} session - The Stripe Checkout Session object
 * @param {object} subscription - The Stripe Subscription object
 */
export async function syncUserAfterPayment(userId, session, subscription) {
    if (!userId || !session || !subscription) {
        throw new Error("Missing required parameters for user sync");
    }

    const expiresAt = new Date(subscription.current_period_end * 1000);
    const licenseKey = subscription.id; // Use Subscription ID as License Key standardized
    const customerEmail = session.customer_details?.email;

    console.log(`[SYNC] Starting sync for user ${userId} with License: ${licenseKey}`);

    // 1. Update Clerk Metadata (Frontend Session)
    try {
        await clerkClient().users.updateUser(userId, {
            publicMetadata: {
                subscriptionStatus: "active",
                licenseKey: licenseKey,
                stripeCustomerId: session.customer,
                subscriptionId: subscription.id
            }
        });
        console.log(`[SYNC] Clerk metadata updated for ${userId}`);
    } catch (error) {
        console.error(`[SYNC] Clerk update failed for ${userId}:`, error);
        // We continue because DB update is critical too
    }

    // 2. Update Local Database (Backend Truth)
    try {
        // Check if user exists first
        const existingUser = await db.select().from(users).where(eq(users.id, userId)).get();

        const updateData = {
            stripeCustomerId: session.customer,
            subscriptionStatus: "active",
            subscriptionId: subscription.id,
            licenseKey: licenseKey,
            expiresAt: expiresAt,
            email: customerEmail || "unknown@email.com" // Fallback
        };

        if (existingUser) {
            await db.update(users)
                .set(updateData)
                .where(eq(users.id, userId));
            console.log(`[SYNC] Local DB updated for ${userId}`);
        } else {
            // Upsert / Create if missing (rare but possible)
            await db.insert(users).values({
                id: userId,
                ...updateData
            });
            console.log(`[SYNC] Local DB user created for ${userId}`);
        }
    } catch (error) {
        console.error(`[SYNC] Local DB update failed for ${userId}:`, error);
        throw error; // Re-throw to handle in caller
    }

    return { success: true, licenseKey };
}
