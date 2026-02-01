import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const body = await req.json();
        // Support both naming conventions
        const licenseKey = body.licenseKey || body.license_key;
        const hwid = body.hwid;

        if (!licenseKey) {
            return NextResponse.json({ valid: false, message: "Missing license key" }, { status: 400 });
        }

        console.log(`[LICENSE] Verifying: ${licenseKey}, HWID: ${hwid || 'N/A'}`);

        // 1. Retrieve User from DB by License Key
        const dbUser = await db.query.users.findFirst({
            where: eq(users.licenseKey, licenseKey)
        });

        if (!dbUser) {
            console.warn(`[LICENSE] Invalid Key (Not found in DB): ${licenseKey}`);
            return NextResponse.json({ valid: false, message: "Invalid License Key" }, { status: 404 });
        }

        // 2. Check Status
        // Active or Trialing = Valid
        const isValidStatus = ["active", "trialing"].includes(dbUser.subscriptionStatus);

        if (!isValidStatus) {
            console.warn(`[LICENSE] Inactive Subscription: ${dbUser.subscriptionStatus}`);
            return NextResponse.json({
                valid: false,
                message: "Subscription inactive",
                status: dbUser.subscriptionStatus
            });
        }

        // 3. HWID Lock (Strict Mode via DB)
        if (hwid) {
            const currentLock = dbUser.hwid;

            if (currentLock && currentLock !== hwid) {
                console.warn(`[LICENSE] HWID Mismatch! Locked: ${currentLock}, Incoming: ${hwid}`);
                return NextResponse.json({
                    valid: false,
                    message: "Device Mismatch! Please go to your online profile at cerebrumfx.com to 'Reset PC Lock'.",
                    code: "HWID_CONFLICT"
                }, { status: 403 });
            }

            if (!currentLock) {
                console.log(`[LICENSE] Binding License to HWID: ${hwid}`);
                await db.update(users)
                    .set({ hwid: hwid })
                    .where(eq(users.id, dbUser.id));
            }
        }

        // 4. Success- Return format matching previous API
        return NextResponse.json({
            valid: true,
            status: "active",
            // expiresAt is ms, Stripe current_period_end is seconds. We return standard timestamp in ms or ISO?
            // Python app likely expects compatible format.
            // Previous code: expiry: subscription.current_period_end (Seconds)
            // DB expiresAt: ms.
            // Let's return seconds to maintain compatibility if Python app expects it.
            expiry: dbUser.expiresAt ? Math.floor(dbUser.expiresAt / 1000) : null,
            plan: "Pro" // Plan name not stored in DB currently, hardcoded or retrieved from internal logic? defaulting to "Pro" as per schema comment? No, schema has no plan. Stripe has.
        });

    } catch (error) {
        console.error("[LICENSE] Error:", error);
        return NextResponse.json({ valid: false, message: "Internal Server Error" }, { status: 500 });
    }
}
