import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        // Support both naming conventions just in case
        const licenseKey = body.licenseKey || body.license_key;
        const hwid = body.hwid;

        if (!licenseKey) {
            return NextResponse.json({ valid: false, message: "Missing license key" }, { status: 400 });
        }

        console.log(`[LICENSE] Verifying: ${licenseKey}, HWID: ${hwid || 'N/A'}`);

        // 1. Retrieve Subscription directly from Stripe
        let subscription;
        try {
            subscription = await stripe.subscriptions.retrieve(licenseKey);
        } catch (error) {
            console.warn(`[LICENSE] Invalid Key: ${licenseKey}`);
            return NextResponse.json({ valid: false, message: "Invalid License Key" }, { status: 404 });
        }

        // 2. Check Status
        // Active or Trialing = Valid
        const isValidStatus = ["active", "trialing"].includes(subscription.status);

        if (!isValidStatus) {
            console.warn(`[LICENSE] Inactive Subscription: ${subscription.status}`);
            return NextResponse.json({
                valid: false,
                message: "Subscription inactive",
                status: subscription.status
            });
        }

        // 3. HWID Lock (Strict Mode)
        if (hwid) {
            const currentLock = subscription.metadata?.cerebrum_hwid;

            if (currentLock && currentLock !== hwid) {
                console.warn(`[LICENSE] HWID Mismatch! Locked: ${currentLock}, Incoming: ${hwid}`);
                return NextResponse.json({
                    valid: false,
                    message: "License already used on another machine (HWID mismatch).",
                    code: "HWID_CONFLICT"
                }, { status: 403 });
            }

            if (!currentLock) {
                console.log(`[LICENSE] Binding License to HWID: ${hwid}`);
                await stripe.subscriptions.update(licenseKey, {
                    metadata: { cerebrum_hwid: hwid }
                });
            }
        }

        // 4. Success
        return NextResponse.json({
            valid: true,
            status: "active",
            expiry: subscription.current_period_end,
            plan: subscription.plan?.nickname || "Pro"
        });

    } catch (error) {
        console.error("[LICENSE] Error:", error);
        return NextResponse.json({ valid: false, message: "Internal Server Error" }, { status: 500 });
    }
}
