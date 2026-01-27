
import { db } from "../lib/db.js";
import { sql } from "drizzle-orm";

async function main() {
    console.log("🏥 Starting System Health Check...");

    // 1. Check DB Connection
    try {
        const start = Date.now();
        await db.run(sql`SELECT 1`);
        const duration = Date.now() - start;
        console.log(`✅ Database Connection: OK (${duration}ms)`);
        console.log(`   (Token in .env.local is VALID)`);
    } catch (err) {
        console.error("❌ Database Connection: FAILED");
        console.error(err);
        process.exit(1);
    }

    console.log("🚀 System Status: HEALTHY");
    process.exit(0);
}

main();
