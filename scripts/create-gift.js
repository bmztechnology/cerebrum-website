import { config } from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
config({ path: '.env.local' });

async function createGift() {
    const key = process.argv[2];
    const type = process.argv[3] || 'monthly'; // monthly, yearly, lifetime
    const months = parseInt(process.argv[4]) || 1;

    if (!key) {
        console.log('❌ Error: Missing license key.');
        console.log('Usage: node scripts/create-gift.js <KEY> [type] [months]');
        console.log('Example: node scripts/create-gift.js GIFT-1234 yearly 12');
        return;
    }

    try {
        const { db } = await import('../lib/db.js');
        const { gifts } = await import('../lib/schema.js');

        let expiresAt = null;
        if (type !== 'lifetime') {
            expiresAt = new Date();
            expiresAt.setMonth(expiresAt.getMonth() + months);
        }

        console.log(`💾 Inserting gift key: ${key} (${type})...`);

        await db.insert(gifts).values({
            id: uuidv4(),
            key: key,
            type: type,
            status: 'active',
            expiresAt: expiresAt,
        });

        console.log('✅ Gift key created successfully.');
        if (expiresAt) {
            console.log(`📅 Expiration: ${expiresAt.toLocaleDateString()}`);
        } else {
            console.log('♾️  Duration: Lifetime');
        }

    } catch (e) {
        console.error('❌ Script Error:', e);
    }
}

createGift();
