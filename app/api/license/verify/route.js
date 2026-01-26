import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// Basic in-memory rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10;

export async function POST(req) {
    try {
        const ip = req.headers.get("x-forwarded-for") || "anonymous";
        const now = Date.now();

        const userData = rateLimitMap.get(ip) || { count: 0, start: now };

        if (now - userData.start > RATE_LIMIT_WINDOW) {
            userData.count = 1;
            userData.start = now;
        } else {
            userData.count++;
        }

        rateLimitMap.set(ip, userData);

        if (userData.count > MAX_REQUESTS) {
            return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
        }

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
