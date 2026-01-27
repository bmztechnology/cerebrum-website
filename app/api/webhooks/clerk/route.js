import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { db } from '../../../../lib/db';
import { users } from '../../../../lib/schema';
import { eq } from 'drizzle-orm';

export async function POST(req) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        console.warn('CLERK_WEBHOOK_SECRET is missing. Skipping verification (DEV MODE ONLY WARNING).');
    }

    // Get the headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers and we have a secret, error out
    if (WEBHOOK_SECRET && (!svix_id || !svix_timestamp || !svix_signature)) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret.
    let evt;

    if (WEBHOOK_SECRET) {
        const wh = new Webhook(WEBHOOK_SECRET);
        try {
            evt = wh.verify(body, {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature,
            });
        } catch (err) {
            console.error('Error verifying webhook:', err);
            return new Response('Error occured', {
                status: 400
            });
        }
    } else {
        evt = payload;
    }

    // Handle the event
    const eventType = evt.type;
    const { id, email_addresses, first_name, last_name, image_url, phone_numbers, unsafe_metadata } = evt.data;

    const email = email_addresses && email_addresses.length > 0 ? email_addresses[0].email_address : null;
    const name = `${first_name || ''} ${last_name || ''}`.trim();
    const phone = phone_numbers && phone_numbers.length > 0 ? phone_numbers[0].phone_number : (unsafe_metadata?.phone || null);
    const country = unsafe_metadata?.country || null;

    console.log(`Received Clerk Webhook: ${eventType} for user ${id} (${email})`);

    if (eventType === 'user.created' || eventType === 'user.updated') {
        try {
            await db.insert(users).values({
                id: id,
                email: email,
                name: name,
                image: image_url,
                phone: phone,
                country: country,
                subscriptionStatus: 'inactive', // Default
            }).onConflictDoUpdate({
                target: users.id,
                set: {
                    email: email,
                    name: name,
                    image: image_url,
                    phone: phone,
                    country: country,
                    // Preserves subscriptionStatus and licenseKey if they exist
                }
            });
            console.log(`Synced user ${id} to Turso successfully.`);
        } catch (error) {
            console.error('Error syncing user to Turso:', error);
            return new Response('Error processing database update', { status: 500 });
        }
    } else if (eventType === 'user.deleted') {
        try {
            await db.delete(users).where(eq(users.id, id));
            console.log(`Deleted user ${id} from Turso.`);
        } catch (error) {
            console.error('Error deleting user from Turso:', error);
            return new Response('Error processing database delete', { status: 500 });
        }
    }

    return new Response('', { status: 200 });
}
