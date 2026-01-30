import { config } from 'dotenv';
config({ path: '.env.local' });

async function main() {
    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) {
        console.error('❌ Error: CLERK_SECRET_KEY is missing in .env.local');
        return;
    }

    const licenseToUse = process.env.LICENSE_KEY || "sub_1StydrLBQKj11679RS6TaKsF";

    try {
        // 1. Get User ID from Clerk to stay clean
        console.log(`🔍 Searching Clerk user for: ${email}...`);
        const searchRes = await fetch(`https://api.clerk.com/v1/users?email_address=${encodeURIComponent(email)}`, {
            headers: { 'Authorization': `Bearer ${secretKey}` }
        });

        if (!searchRes.ok) throw new Error(`Clerk API Error: ${searchRes.status}`);

        const usersList = await searchRes.json();
        let userId;

        if (!usersList || usersList.length === 0) {
            console.log('⚠️ User not found in Clerk. Using fallback ID.');
            userId = "user_" + Math.random().toString(36).substr(2, 9);
        } else {
            userId = usersList[0].id;
            console.log(`✅ Found Clerk User: ${userId}`);
        }

        // 2. Insert/Update into Turso
        console.log("Connecting to DB...");
        const { db } = await import('./lib/db.js');
        const { users } = await import('./lib/schema.js');
        const { eq } = await import('drizzle-orm');

        console.log(`💾 Upserting user into Turso...`);
        console.log(`ID: ${userId}`);
        console.log(`License: ${licenseToUse}`);

        // Check exist
        const existing = await db.select().from(users).where(eq(users.email, email));

        if (existing.length > 0) {
            console.log("User exists, updating...");
            await db.update(users).set({
                id: userId, // Ensure ID matches Clerk if it was different
                licenseKey: licenseToUse,
                subscriptionStatus: 'active',
                hwid: null // Reset HWID to be safe
            }).where(eq(users.email, email));
        } else {
            console.log("User missing, inserting...");
            await db.insert(users).values({
                id: userId,
                email: email,
                name: "Admin User",
                licenseKey: licenseToUse,
                subscriptionStatus: 'active',
                hwid: null
            });
        }

        console.log("✅ Database synced successfully.");


    } catch (e) {
        console.error('❌ Script Error:', e);
    }
}

console.log("Starting sync_clerk.js...");
main()
    .then(() => console.log("Script finished."))
    .catch(err => console.error("Fatal Error:", err));
