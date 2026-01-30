export const dynamic = 'force-dynamic';
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userId } = await auth();
        if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        // Get user from DB
        const dbUser = await db.query.users.findFirst({
            where: eq(users.id, userId),
            columns: { id: true, licenseKey: true, subscriptionStatus: true, hwid: true }
        });

        if (!dbUser || !dbUser.licenseKey) {
            return NextResponse.json({ error: "No license found" }, { status: 404 });
        }

        if (dbUser.subscriptionStatus !== 'active' && dbUser.subscriptionStatus !== 'trialing') {
            return NextResponse.json({ error: "Subscription inactive" }, { status: 403 });
        }

        console.log(`[LICENSE] Resetting HWID for user ${userId}, License: ${dbUser.licenseKey}`);

        // Update DB to clear HWID
        await db.update(users)
            .set({ hwid: null })
            .where(eq(users.id, userId));

        console.log(`[LICENSE] Successfully cleared HWID for ${dbUser.licenseKey} in DB`);

        return NextResponse.json({ success: true, message: "License reset successfully. You can now login on a new device." });

    } catch (error) {
        console.error("License Reset Error:", error);
        return NextResponse.json({
            error: "Failed to reset license.",
            details: error.message
        }, { status: 500 });
    }
}
