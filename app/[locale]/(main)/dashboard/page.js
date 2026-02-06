"use client";

import { useUser } from "@clerk/nextjs";
import { useTranslations } from "next-intl";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import ProfileCard from "./ProfileCard";
import QuickStats from "./QuickStats";
import QuickActions from "./QuickActions";
import MarketWidget from "./MarketWidget";
import TradingChart from "./TradingChart";

export default function DashboardPage() {
    const { isLoaded, isSignedIn, user } = useUser();
    const t = useTranslations("dashboard");
    const { locale } = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showSuccess, setShowSuccess] = useState(false);

    // Start with loading state - don't trust Clerk metadata
    const [subStatus, setSubStatus] = useState("loading");
    const [licenseKey, setLicenseKey] = useState(null);
    const [expiresAt, setExpiresAt] = useState(null);
    const [statusLoaded, setStatusLoaded] = useState(false);

    // Fetch status from DATABASE (source of truth) on mount
    useEffect(() => {
        if (isSignedIn && user && !statusLoaded) {
            fetch("/api/user/status")
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        console.log("Status from DB:", data.status);
                        setSubStatus(data.status);
                        setLicenseKey(data.licenseKey || null);
                        setExpiresAt(data.expiresAt || null);
                    } else if (data.error === "User not found") {
                        console.log("User not in DB - setting inactive");
                        setSubStatus("inactive");
                        setLicenseKey(null);
                    } else {
                        setSubStatus("inactive");
                    }
                    setStatusLoaded(true);
                })
                .catch(err => {
                    console.error("Status check failed:", err);
                    setSubStatus("inactive");
                    setStatusLoaded(true);
                });
        }
    }, [isSignedIn, user, statusLoaded]);

    useEffect(() => {
        const sessionId = searchParams.get("session_id");
        if (searchParams.get("success") === "true" && sessionId && user) {
            setShowSuccess(true);

            fetch("/api/payment/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, userId: user.id })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "active") {
                        setSubStatus("active");
                        setLicenseKey(data.licenseKey);
                        setExpiresAt(data.expiresAt);
                        user.reload();
                    }
                })
                .catch(err => console.error("Verification error:", err));
        }
    }, [searchParams, user]);

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            router.push(`/${locale}/auth/login`);
        }
    }, [isLoaded, isSignedIn, router, locale]);

    if (!isLoaded || !isSignedIn || subStatus === "loading") {
        return (
            <div className={styles.dashboardPage}>
                <div className={styles.container}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            border: '3px solid rgba(255,255,255,0.1)',
                            borderTop: '3px solid #00d4ff',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                    </div>
                </div>
            </div>
        );
    }

    const isActive = subStatus === "active" || subStatus === "trialing";

    const handlePortal = async () => {
        try {
            const res = await fetch("/api/portal", { method: "POST" });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error("Portal error:", error);
        }
    };

    return (
        <div className={styles.dashboardPage}>
            <div className={styles.backgroundEffects}>
                <div className={styles.glowOrb1}></div>
            </div>

            <div className={styles.container}>
                {/* Success Banner */}
                {showSuccess && (
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#10b981',
                        padding: '20px 24px',
                        borderRadius: '16px',
                        marginBottom: '32px',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '16px',
                        animation: 'fadeInUp 0.5s ease-out'
                    }}>
                        🎉 {locale === 'fr' ? 'Paiement réussi ! Bienvenue à bord.' :
                            locale === 'es' ? '¡Pago exitoso! Bienvenido a bordo.' :
                                locale === 'pt' ? 'Pagamento bem-sucedido! Bem-vindo a bordo.' :
                                    'Payment successful! Welcome aboard.'}
                    </div>
                )}

                {/* Header */}
                <div className={styles.header}>
                    <h1 className={`${styles.title} gradient-text`}>{t("title")}</h1>
                    <p className={styles.welcome}>
                        {t("welcome")} <span className={styles.userName}>{user.fullName || user.username || user.primaryEmailAddress?.emailAddress}</span>
                    </p>
                </div>

                {/* Quick Stats Bar */}
                <QuickStats
                    subscriptionStatus={subStatus}
                    licenseKey={licenseKey}
                    expiresAt={expiresAt}
                />

                {/* Main Dashboard Grid */}
                <div className={styles.dashboardGrid}>
                    {/* Profile Card */}
                    <ProfileCard
                        subscriptionStatus={subStatus}
                        isSubActive={isActive}
                        licenseKey={licenseKey}
                        onManageSubscription={handlePortal}
                        locale={locale}
                    />

                    {/* Quick Actions */}
                    <QuickActions
                        isActive={isActive}
                        locale={locale}
                        onManageSubscription={handlePortal}
                    />

                    {/* Market Sessions */}
                    <MarketWidget />

                    {/* Trading Chart */}
                    <TradingChart />
                </div>
            </div>
        </div>
    );
}
