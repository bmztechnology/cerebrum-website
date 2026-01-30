/**
 * sync_stripe_turso.js
 * 
 * This script syncs the Turso database with Stripe.
 * It checks all users with an active subscription and verifies they still exist in Stripe.
 * If a customer or subscription is missing/canceled in Stripe, their status is set to 'inactive' in Turso.
 * 
 * Run with: node scripts/sync_stripe_turso.js
 */

import "dotenv/config";
import { config } from "dotenv";
config({ path: ".env.local" });

import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { users } from "../lib/schema.js";
import { eq, ne } from "drizzle-orm";
import Stripe from "stripe";

const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function syncStripeWithTurso() {
    console.log("🔄 Starting Stripe <-> Turso Sync...\n");

    // Get all users who appear to be active or trialing
    const activeUsers = await db.select().from(users).where(
        ne(users.subscriptionStatus, "inactive")
    );

    console.log(`Found ${activeUsers.length} users with non-inactive status in Turso.\n`);

    let invalidatedCount = 0;
    let validCount = 0;
    let errorCount = 0;

    for (const user of activeUsers) {
        console.log(`Checking user: ${user.email} (ID: ${user.id})`);

        try {
            // Check if the Stripe customer exists
            if (!user.stripeCustomerId) {
                console.log(`  ⚠️  No Stripe Customer ID - Invalidating.`);
                await invalidateUser(user);
                invalidatedCount++;
                continue;
            }

            let customer;
            try {
                customer = await stripe.customers.retrieve(user.stripeCustomerId);
            } catch (stripeErr) {
                if (stripeErr.code === 'resource_missing') {
                    console.log(`  ❌ Stripe customer not found (deleted) - Invalidating.`);
                    await invalidateUser(user);
                    invalidatedCount++;
                    continue;
                }
                throw stripeErr; // Re-throw other errors
            }

            // Check if the customer was deleted
            if (customer.deleted) {
                console.log(`  ❌ Stripe customer marked as deleted - Invalidating.`);
                await invalidateUser(user);
                invalidatedCount++;
                continue;
            }

            // Check subscriptions
            const subscriptions = await stripe.subscriptions.list({
                customer: user.stripeCustomerId,
                status: 'all',
                limit: 10,
            });

            const activeSub = subscriptions.data.find(
                sub => sub.status === 'active' || sub.status === 'trialing'
            );

            if (!activeSub) {
                console.log(`  ❌ No active subscription found in Stripe - Invalidating.`);
                await invalidateUser(user);
                invalidatedCount++;
            } else {
                console.log(`  ✅ Valid subscription found: ${activeSub.id} (${activeSub.status})`);
                validCount++;
            }

        } catch (error) {
            console.error(`  ⚠️  Error checking user ${user.email}:`, error.message);
            errorCount++;
        }
    }

    console.log("\n========================================");
    console.log("📊 SYNC COMPLETE");
    console.log("========================================");
    console.log(`✅ Valid Users: ${validCount}`);
    console.log(`❌ Invalidated: ${invalidatedCount}`);
    console.log(`⚠️  Errors: ${errorCount}`);
    console.log("========================================\n");

    process.exit(0);
}

async function invalidateUser(user) {
    await db.update(users).set({
        subscriptionStatus: "inactive",
        licenseKey: null,
        hwid: null,
        expiresAt: null,
        subscriptionId: null,
    }).where(eq(users.id, user.id));
    console.log(`     -> User ${user.email} invalidated in Turso.`);
}

syncStripeWithTurso().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
