import { db } from "../lib/db.js";
import { users } from "../lib/schema.js";
import { eq } from "drizzle-orm";

async function main() {
    // PARAMETERS TO EDIT
    const userId = "user_2rz9h6rS6Y7S7S7S7S7S7S7S7S7"; // TO BE UPDATED FROM CLERK OR check_user_status.js
    const licenseKey = "sub_1Su0doLBQKj116793m43Mst5";
    const status = "active";

    console.log(`🔧 Fixing license for user ID: ${userId}...`);

    try {
        const result = await db.update(users)
            .set({
                licenseKey: licenseKey,
                subscriptionStatus: status
            })
            .where(eq(users.id, userId));

        console.log("✅ Update successful!");
    } catch (error) {
        console.error("❌ Update failed:", error);
    }

    process.exit(0);
}

main();
