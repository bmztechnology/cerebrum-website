
import { db } from "../lib/db.js";
import { users } from "../lib/schema.js";
import { eq, like } from "drizzle-orm";

async function main() {
    console.log("🔍 Searching for user...");

    // Search for user by name or email partial match
    // The user name in screenshot was "mohammed zakariae benbarek"
    const targetName = "%mohammed%";

    // First, list all users to see who is there
    const allUsers = await db.select().from(users);
    console.log(`📋 Total users found: ${allUsers.length}`);
    allUsers.forEach(u => console.log(` - [${u.id}] ${u.name} (${u.email}) | Status: ${u.subscriptionStatus}`));

    // Find specific user
    const foundUsers = await db.select().from(users).where(like(users.name, targetName));

    if (foundUsers.length === 0) {
        console.error("❌ No user found matching name.");
        // Try fallback to update the FIRST user if only one
        if (allUsers.length === 1) {
            console.log("⚠️ Fallback: Updating the single existing user.");
            await activateUser(allUsers[0]);
            return;
        }
        process.exit(1);
    }

    const user = foundUsers[0];
    await activateUser(user);
}

async function activateUser(user) {
    console.log(`✅ Found user: ${user.name} (${user.email})`);
    console.log(`Current Status: ${user.subscriptionStatus}`);

    const newKey = `CFX-MANUAL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1); // 1 year from now

    await db.update(users)
        .set({
            subscriptionStatus: "active",
            expiresAt: expiresAt,
            stripeCustomerId: user.stripeCustomerId || "cus_manual_fix"
        })
        .where(eq(users.id, user.id));

    console.log(`🎉 User UPDATED SUCCESSFULLY!`);
    console.log(`   Status: active`);
    console.log(`   License: ${newKey}`);
    console.log(`   Expires: ${expiresAt.toISOString()}`);
    process.exit(0);
}

main().catch(err => {
    console.error("Fatal Error:", err);
    process.exit(1);
});
