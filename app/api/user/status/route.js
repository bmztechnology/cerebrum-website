import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Fetch fresh data from DB
        const dbUser = await db.query.users.findFirst({
            where: eq(users.id, userId),
            columns: {
                subscriptionStatus: true,
                licenseKey: true,
                stripeCustomerId: true
            }
        });

        if (!dbUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            status: dbUser.subscriptionStatus || "inactive",
            licenseKey: dbUser.licenseKey,
            customer_id: dbUser.stripeCustomerId
        });

    } catch (error) {
        console.error("Status Check Error:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
