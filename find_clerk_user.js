
import { createClerkClient } from '@clerk/backend';
import { config } from 'dotenv';
config({ path: '.env.local' });

async function main() {
    try {
        const secretKey = process.env.CLERK_SECRET_KEY;
        const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

        if (!secretKey) {
            console.error("Missing CLERK_SECRET_KEY");
            return;
        }

        console.log("Initializing Clerk...");
        const clerk = createClerkClient({ secretKey, publishableKey });

        const email = "mzzh78@gmail.com";
        console.log(`Searching for ${email}...`);

        const users = await clerk.users.getUserList({ emailAddress: [email] });

        if (users.data.length > 0) {
            const u = users.data[0];
            console.log("--- CLERK USER FOUND ---");
            console.log(`ID: ${u.id}`);
            console.log(`Email: ${u.emailAddresses[0].emailAddress}`);
            console.log(`Metadata:`, u.publicMetadata);
        } else {
            console.log("User not found in Clerk.");
        }

    } catch (e) {
        console.error("Error:", e);
    }
}

main();
