export const dynamic = 'force-dynamic';
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users, gifts } from "@/lib/schema";
import { eq, or } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userId } = await auth();
        if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        // 1. Try to find user in Clerk/Stripe table
        const dbUser = await db.query.users.findFirst({
            where: eq(users.id, userId),
        });

        if (dbUser && dbUser.licenseKey) {
            console.log(`[LICENSE] Resetting HWID for Stripe User ${userId}`);
            await db.update(users).set({ hwid: null }).where(eq(users.id, userId));
            return NextResponse.json({ success: true, message: "Stripe License reset successfully." });
        }

        // 2. Fallback: Check if this user is trying to reset a GIFT key (they must be the owner)
        // Note: For gifts, we check the 'gifts' table. 
        // We use the licenseKey provided in the request if available, or scan gifts for this user's email if possible.
        const body = await req.json().catch(() => ({}));
        const licenseKey = body.licenseKey || body.license_key;

        if (licenseKey) {
            const dbGift = await db.query.gifts.findFirst({
                where: eq(gifts.key, licenseKey)
            });

            if (dbGift) {
                console.log(`[LICENSE] Resetting HWID for Gift Key: ${licenseKey}`);
                await db.update(gifts).set({ hwid: null }).where(eq(gifts.id, dbGift.id));
                return NextResponse.json({ success: true, message: "Gift License reset successfully." });
            }
        }

        return NextResponse.json({ error: "No active license found to reset." }, { status: 404 });

    } catch (error) {
        console.error("License Reset Error:", error);
        return NextResponse.json({
            error: "Failed to reset license.",
            details: error.message
        }, { status: 500 });
    }
}
