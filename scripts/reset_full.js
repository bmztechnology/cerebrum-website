import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { users } from "../lib/schema.js";
import { like, eq } from "drizzle-orm";
import { createClerkClient } from '@clerk/backend';

// Manual config since we might be running from root or scripts/
import { config } from "dotenv";
config({ path: ".env.local" });

const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client);

const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
});

async function main() {
    console.log("🚀 Starting COMPLETE subscription reset (DB + Clerk)...");

    try {
        // 1. Find the user in DB
        const targetName = "%mohammed%";
        const found = await db.select().from(users).where(like(users.name, targetName));

        if (found.length === 0) {
            console.log("❌ User not found in DB.");
            return;
        }

        const user = found[0];
        console.log(`✅ Found user: ${user.name} (ID: ${user.id})`);

        // 2. Reset Local DB
        await db.update(users)
            .set({
                subscriptionStatus: 'inactive',
                licenseKey: null,
                subscriptionId: null,
                // stripeCustomerId: null // Optional, keep customer ID for history
            })
            .where(eq(users.id, user.id));

        console.log(`✅ [DB] User ${user.name} reset to INACTIVE.`);

        // 3. Reset Clerk Metadata
        try {
            await clerkClient.users.updateUser(user.id, {
                publicMetadata: {
                    subscriptionStatus: "inactive",
                    licenseKey: null,
                    subscriptionId: null,
                    stripeCustomerId: null
                }
            });
            console.log(`✅ [CLERK] User metadata cleared.`);
        } catch (clerkError) {
            console.error("❌ [CLERK] Failed to update metadata:", clerkError);
        }

    } catch (err) {
        console.error("❌ Error:", err);
    }
}

main();
