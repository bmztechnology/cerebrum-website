"use client";

import { useUser } from "@clerk/nextjs";
import { useTranslations } from "next-intl";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import ProfileCard from "./ProfileCard";

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
                    } else if (data.error === "User not found") {
                        // User exists in Clerk but not in DB - they are inactive
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

            // Call verification API to sync status immediately (handles localhost without webhooks)
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
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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
                {showSuccess && (
                    <div style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid #10b981',
                        color: '#10b981',
                        padding: '16px',
                        borderRadius: '12px',
                        marginBottom: '32px',
                        textAlign: 'center',
                        fontWeight: '600',
                        animation: 'fadeInUp 0.5s ease-out'
                    }}>
                        🎉 {locale === 'fr' ? 'Paiement réussi ! Bienvenue à bord.' :
                            locale === 'es' ? '¡Pago exitoso! Bienvenido a bordo.' :
                                locale === 'pt' ? 'Pagamento bem-sucedido! Bem-vindo a bordo.' :
                                    'Payment successful! Welcome aboard.'}
                    </div>
                )}
                <div className={styles.header}>
                    <h1 className={`${styles.title} gradient-text`}>{t("title")}</h1>
                    <p className={styles.welcome}>
                        {t("welcome")} <span className={styles.userName}>{user.fullName || user.username || user.primaryEmailAddress?.emailAddress}</span>
                    </p>
                </div>

                <div className={styles.dashboardContainer}>
                    {/* MASTER CARD: Combines Identity, Status, License, and Details */}
                    <ProfileCard
                        subscriptionStatus={subStatus}
                        isSubActive={isActive}
                        licenseKey={licenseKey}
                        onManageSubscription={handlePortal}
                        locale={locale}
                    />

                    {/* Secondary Grid for Downloads and other tools (if any) */}
                    <div className={styles.secondaryGrid} style={{ marginTop: '32px' }}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                {t("downloadTitle")}
                            </h3>
                            <div className={styles.downloadSection}>
                                <p className={styles.downloadDesc}>{t("downloadDesc") || "Download the latest Windows Installer for Cerebrum Forex."}</p>
                                {isActive ? (
                                    <a href="/downloads/CerebrumSetup_1.2.1.exe" className={styles.downloadBtn} download>
                                        {t("downloadBtn") || "Download Installer (.exe)"}
                                    </a>
                                ) : (
                                    <button className={`${styles.downloadBtn} ${styles.downloadBtnDisabled}`} disabled title="Active subscription required">
                                        {t("downloadBtn") || "Download Installer (.exe)"}
                                    </button>
                                )}
                                <a href="/docs/index.html" target="_blank" className={styles.docsLink} style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '14px', marginTop: '8px', display: 'inline-block' }}>
                                    → {t("docsLink")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
