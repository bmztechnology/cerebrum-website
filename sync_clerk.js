import { config } from 'dotenv';
config({ path: '.env.local' });

async function main() {
    const secretKey = process.env.CLERK_SECRET_KEY;
    if (!secretKey) {
        console.error('❌ Error: CLERK_SECRET_KEY is missing in .env.local');
        return;
    }

    const email = 'mzzh78@gmail.com';
    // Data found in DB
    const dbStatus = 'active';
    const dbLicense = 'sub_1Su0doLBQKj116793m43Mst5';

    try {
        // 1. Get User ID by Email
        console.log(`🔍 Searching Clerk user for: ${email}...`);
        const searchRes = await fetch(`https://api.clerk.com/v1/users?email_address=${encodeURIComponent(email)}`, {
            headers: { 'Authorization': `Bearer ${secretKey}` }
        });

        if (!searchRes.ok) {
            throw new Error(`Clerk API Error: ${searchRes.status} ${searchRes.statusText}`);
        }

        const users = await searchRes.json();
        if (!users || users.length === 0) {
            console.log('❌ User not found in Clerk.');
            return;
        }

        const user = users[0];
        console.log(`✅ Found Clerk User: ${user.id} (${user.first_name} ${user.last_name})`);

        // 2. Update Metadata
        console.log(`🔄 Updating metadata to: Status=${dbStatus}, License=${dbLicense}...`);
        const updateRes = await fetch(`https://api.clerk.com/v1/users/${user.id}/metadata`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${secretKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                public_metadata: {
                    subscriptionStatus: dbStatus,
                    licenseKey: dbLicense
                }
            })
        });

        if (updateRes.ok) {
            console.log('✨ Success! Metadata updated. Dashboard should now be ACTIVE.');
        } else {
            console.error('❌ Update failed:', await updateRes.text());
        }
    } catch (e) {
        console.error('❌ Script Error:', e);
    }
}

main();
