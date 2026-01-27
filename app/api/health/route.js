import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export function GET() {
    return NextResponse.json({
        status: "ok",
        timestamp: new Date().toISOString(),
        env: {
            // Safe to expose boolean, NOT values
            hasClerkSecret: !!process.env.CLERK_SECRET_KEY,
            hasStripeSecret: !!process.env.STRIPE_SECRET_KEY,
            hasTursoUrl: !!process.env.TURSO_DATABASE_URL,
            nodeEnv: process.env.NODE_ENV
        }
    });
}
