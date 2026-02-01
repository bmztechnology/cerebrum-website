/**
 * Fix Stripe Link Payment - Sync subscription to database
 * Run: node scripts/fix_stripe_link_payment.js
 */

import Stripe from 'stripe';
import { db } from '../lib/db.js';
import { users } from '../lib/schema.js';
import { eq } from 'drizzle-orm';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const SUBSCRIPTION_ID = "sub_1Sw0h2LqcjPmp251QncujfpJ";

async function main() {
    console.log("=== Stripe Link Payment Fix ===\n");

    try {
        // 1. Retrieve subscription from Stripe
        console.log(`[1/4] Fetching subscription from Stripe: ${SUBSCRIPTION_ID}`);
        const subscription = await stripe.subscriptions.retrieve(SUBSCRIPTION_ID);

        console.log(`   → Status: ${subscription.status}`);
        console.log(`   → Customer ID: ${subscription.customer}`);
        console.log(`   → Current Period End: ${new Date(subscription.current_period_end * 1000).toISOString()}`);

        // 2. Get customer details
        console.log(`\n[2/4] Fetching customer details...`);
        const customer = await stripe.customers.retrieve(subscription.customer);
        console.log(`   → Email: ${customer.email}`);
        console.log(`   → Name: ${customer.name || 'N/A'}`);

        // 3. Check if user exists in database
        console.log(`\n[3/4] Checking database for user with email: ${customer.email}`);
        let dbUser = await db.query.users.findFirst({
            where: eq(users.email, customer.email)
        });

        if (dbUser) {
            console.log(`   → User FOUND in database!`);
            console.log(`   → Current DB License: ${dbUser.licenseKey || 'NULL'}`);
            console.log(`   → Current DB Status: ${dbUser.subscriptionStatus}`);
        } else {
            console.log(`   → User NOT found in database. Creating new entry...`);
        }

        // 4. Update or create user with proper license
        console.log(`\n[4/4] Syncing license to database...`);

        const updateData = {
            email: customer.email,
            licenseKey: subscription.id,
            subscriptionId: subscription.id,
            stripeCustomerId: subscription.customer,
            subscriptionStatus: subscription.status,
            expiresAt: subscription.current_period_end * 1000, // Convert to ms
        };

        if (dbUser) {
            await db.update(users)
                .set(updateData)
                .where(eq(users.id, dbUser.id));
            console.log(`   ✅ User updated successfully!`);
        } else {
            // Create new user (this case is less common if they used Stripe Link without logging in)
            await db.insert(users).values({
                id: `stripe_${subscription.customer}`,
                ...updateData
            }).onConflictDoUpdate({
                target: users.email,
                set: updateData
            });
            console.log(`   ✅ User created successfully!`);
        }

        // 5. Verify
        console.log(`\n=== VERIFICATION ===`);
        const verifyUser = await db.query.users.findFirst({
            where: eq(users.licenseKey, subscription.id)
        });

        if (verifyUser) {
            console.log(`✅ License ${subscription.id} is now valid!`);
            console.log(`   Email: ${verifyUser.email}`);
            console.log(`   Status: ${verifyUser.subscriptionStatus}`);
            console.log(`   Expires: ${new Date(verifyUser.expiresAt).toISOString()}`);
        } else {
            console.log(`❌ Something went wrong - license not found after update`);
        }

    } catch (error) {
        if (error.code === 'resource_missing') {
            console.error(`❌ Subscription ${SUBSCRIPTION_ID} not found in Stripe!`);
            console.error("   Please verify the subscription ID is correct.");
        } else {
            console.error("Error:", error.message);
        }
    }

    process.exit(0);
}

main();
