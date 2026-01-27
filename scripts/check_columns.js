
import { db } from "../lib/db.js";
import { sql } from "drizzle-orm";

async function main() {
    console.log("🔍 Checking 'user' table columns...");
    try {
        const result = await db.run(sql`PRAGMA table_info(user)`);
        console.log("Columns found:", result.rows.map(r => r.name));
    } catch (e) {
        // Fallback if db.run structure varies
        try {
            const result = await db.all(sql`PRAGMA table_info(user)`);
            console.log("Columns found:", result);
        } catch (e2) {
            console.error(e2);
        }
    }
    process.exit(0);
}

main();
