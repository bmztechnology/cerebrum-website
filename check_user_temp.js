import { config } from 'dotenv';
config({ path: '.env.local' });

async function main() {
    try {
        console.log('Loading modules...');
        // Dynamic imports to ensure env vars are loaded first
        const { db } = await import('./lib/db.js');
        const { users } = await import('./lib/schema.js');
        const { eq } = await import('drizzle-orm');

        console.log('Connecting to DB...');
        console.log('TURSO_DATABASE_URL defined:', !!process.env.TURSO_DATABASE_URL);

        console.log('Searching for user: mzzh78@gmail.com');

        const result = await db.select().from(users).where(eq(users.email, 'mzzh78@gmail.com'));

        if (result.length === 0) {
            console.log('User NOT FOUND in database.');
        } else {
            const u = result[0];
            console.log('--- USER FOUND ---');
            console.log(`ID: ${u.id}`);
            console.log(`Email: ${u.email}`);
            console.log(`Status: ${u.subscriptionStatus}`);
            console.log(`LicenseKey: ${u.licenseKey}`);
            console.log('------------------');
        }
    } catch (e) {
        console.error('Error executing query:', e);
    }
}

main();
