import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { users } from "../lib/schema.js";

// Manual config loading
import { config } from "dotenv";
config({ path: ".env.local" });

const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client);

async function main() {
    console.log("🔍 Listing ALL Users in DB...");

    try {
        const allUsers = await db.select().from(users).all();

        if (allUsers.length === 0) {
            console.log("❌ No users found in DB.");
        } else {
            console.log(`✅ Found ${allUsers.length} users:`);
            allUsers.forEach(u => {
                console.log(`--------------------------------------------------`);
                console.log(`ID: ${u.id}`);
                console.log(`Name: ${u.name || u.firstName || 'N/A'}`);
                console.log(`License: ${u.licenseKey}`);
                console.log(`Status: ${u.subscriptionStatus}`);
            });
            console.log(`--------------------------------------------------`);
        }
    } catch (error) {
        console.error("💥 Query failed:", error);
    } finally {
        process.exit(0);
    }
}

main();
