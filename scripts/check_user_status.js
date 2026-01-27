
import { db } from "../lib/db.js";
import { users } from "../lib/schema.js";
import { like } from "drizzle-orm";

async function main() {
    console.log("🔍 Verifying User Status in DB...");
    const targetName = "%mohammed%";
    const foundUsers = await db.select().from(users).where(like(users.name, targetName));

    if (foundUsers.length === 0) {
        console.log("❌ No user found.");
    } else {
        const u = foundUsers[0];
        console.log(`✅ User Found: ${u.name}`);
        console.log(`   ID: ${u.id}`);
        console.log(`   Status: ${u.subscriptionStatus}`);
        console.log(`   LicenseKey: ${u.licenseKey}`);
        console.log(`   StripeID: ${u.stripeCustomerId}`);
    }
    process.exit(0);
}

main();
