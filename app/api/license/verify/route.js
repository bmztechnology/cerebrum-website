import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const user = await db.query.users.findFirst({
            where: eq(users.email, email),
        });

        if (!user) {
            return NextResponse.json({
                status: "inactive",
                message: "User not found"
            }, { status: 404 });
        }

        const isActive = user.subscriptionStatus === "active" || user.subscriptionStatus === "trialing";

        // Check if subscription has expired
        if (user.expiresAt && new Date() > new Date(user.expiresAt)) {
            return NextResponse.json({
                status: "expired",
                message: "Subscription expired"
            });
        }

        return NextResponse.json({
            status: isActive ? "active" : "inactive",
            email: user.email,
            expires_at: user.expiresAt,
        });
    } catch (error) {
        console.error("License verification error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
