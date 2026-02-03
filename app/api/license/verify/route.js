import { db } from "@/lib/db";
import { users, gifts } from "@/lib/schema";
import { eq, or, and } from "drizzle-orm";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const body = await req.json();
        const licenseKey = body.licenseKey || body.license_key;
        const hwid = body.hwid;

        if (!licenseKey) {
            return NextResponse.json({ valid: false, message: "Missing license key" }, { status: 400 });
        }

        console.log(`[LICENSE] Verifying: ${licenseKey}, HWID: ${hwid || 'N/A'}`);

        // 1. Search in Users (Stripe Automated)
        let dbUser = await db.query.users.findFirst({
            where: eq(users.licenseKey, licenseKey)
        });

        if (dbUser) {
            // Check Status for automated user
            const isValidStatus = ["active", "trialing"].includes(dbUser.subscriptionStatus);
            if (!isValidStatus) {
                return NextResponse.json({ valid: false, message: "Subscription inactive", status: dbUser.subscriptionStatus });
            }

            // HWID Lock for automated user
            if (hwid) {
                if (dbUser.hwid && dbUser.hwid !== hwid) {
                    return NextResponse.json({
                        valid: false,
                        message: "Device Mismatch! Please go to your online profile to 'Reset PC Lock'.",
                        code: "HWID_CONFLICT"
                    }, { status: 403 });
                }
                if (!dbUser.hwid) {
                    await db.update(users).set({ hwid: hwid }).where(eq(users.id, dbUser.id));
                }
            }

            return NextResponse.json({
                valid: true,
                status: dbUser.subscriptionStatus,
                expiry: dbUser.expiresAt ? Math.floor(dbUser.expiresAt / 1000) : null,
                plan: "Pro"
            });
        }

        // 2. Search in Gifts (Manual Admin)
        const dbGift = await db.query.gifts.findFirst({
            where: eq(gifts.key, licenseKey)
        });

        if (dbGift) {
            // Check Status and Expiration for Gift
            if (dbGift.status !== "active") {
                return NextResponse.json({ valid: false, message: `Gift key ${dbGift.status}` });
            }

            if (dbGift.expiresAt && dbGift.expiresAt < new Date()) {
                // Auto-expire gift in DB if checked after expiration
                await db.update(gifts).set({ status: "expired" }).where(eq(gifts.id, dbGift.id));
                return NextResponse.json({ valid: false, message: "Gift key expired" });
            }

            // HWID Lock for Gift
            if (hwid) {
                if (dbGift.hwid && dbGift.hwid !== hwid) {
                    return NextResponse.json({
                        valid: false,
                        message: "Device Mismatch! This gift key is locked to another computer.",
                        code: "HWID_CONFLICT"
                    }, { status: 403 });
                }
                if (!dbGift.hwid) {
                    console.log(`[LICENSE] Binding Gift to HWID: ${hwid}`);
                    await db.update(gifts).set({ hwid: hwid }).where(eq(gifts.id, dbGift.id));
                }
            }

            return NextResponse.json({
                valid: true,
                status: "active",
                expiry: dbGift.expiresAt ? Math.floor(dbGift.expiresAt / 1000) : null,
                plan: `Gift (${dbGift.type})`
            });
        }

        // 3. Fallback: Not found anywhere
        console.warn(`[LICENSE] Invalid Key: ${licenseKey}`);
        return NextResponse.json({ valid: false, message: "Invalid License Key" }, { status: 404 });

    } catch (error) {
        console.error("[LICENSE] Error:", error);
        return NextResponse.json({ valid: false, message: "Internal Server Error" }, { status: 500 });
    }
}
