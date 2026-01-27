import { db } from "../lib/db.js";
import { users, accounts, sessions, verificationTokens } from "../lib/schema.js";
import { sql } from "drizzle-orm";

async function reset() {
    console.log("⚠️  Starting Database Reset...");
    try {
        console.log("Deleting verificationTokens...");
        await db.delete(verificationTokens);

        console.log("Deleting sessions...");
        await db.delete(sessions);

        console.log("Deleting accounts...");
        await db.delete(accounts);

        console.log("Deleting users...");
        await db.delete(users);

        console.log("✅ Database successfully cleared.");
    } catch (error) {
        console.error("❌ Error resetting database:", error);
    }
}

reset();
