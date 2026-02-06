"use client";

import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

export default function QuickStats({ subscriptionStatus, licenseKey, expiresAt }) {
    const [marketStatus, setMarketStatus] = useState({ isOpen: false, session: "Closed", nextEvent: "" });

    // Calculate days remaining
    const daysRemaining = expiresAt
        ? Math.max(0, Math.ceil((new Date(expiresAt) - new Date()) / (1000 * 60 * 60 * 24)))
        : 0;

    // Market session logic
    useEffect(() => {
        const checkMarketStatus = () => {
            const now = new Date();
            const utcHour = now.getUTCHours();
            const utcDay = now.getUTCDay();

            // Weekend check
            if (utcDay === 0 || utcDay === 6) {
                setMarketStatus({ isOpen: false, session: "Weekend", nextEvent: "Opens Monday 22:00 UTC" });
                return;
            }

            // Session times (UTC)
            if (utcHour >= 22 || utcHour < 7) {
                setMarketStatus({ isOpen: true, session: "Sydney", nextEvent: "Tokyo opens soon" });
            } else if (utcHour >= 0 && utcHour < 9) {
                setMarketStatus({ isOpen: true, session: "Tokyo", nextEvent: "London opens " + (8 - utcHour) + "h" });
            } else if (utcHour >= 8 && utcHour < 12) {
                setMarketStatus({ isOpen: true, session: "London", nextEvent: "NY opens " + (13 - utcHour) + "h" });
            } else if (utcHour >= 13 && utcHour < 17) {
                setMarketStatus({ isOpen: true, session: "New York", nextEvent: "Peak hours" });
            } else if (utcHour >= 17 && utcHour < 22) {
                setMarketStatus({ isOpen: true, session: "NY Close", nextEvent: "Sydney opens soon" });
            } else {
                setMarketStatus({ isOpen: true, session: "Active", nextEvent: "" });
            }
        };

        checkMarketStatus();
        const interval = setInterval(checkMarketStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const isActive = subscriptionStatus === "active" || subscriptionStatus === "trialing";
    const licenseHealth = licenseKey ? "Bound" : "Unbound";

    return (
        <div className={styles.quickStatsBar}>
            <div className={styles.statItem}>
                <div className={styles.statIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                <div className={styles.statContent}>
                    <span className={styles.statLabel}>Status</span>
                    <span className={`${styles.statValue} ${isActive ? styles.statActive : styles.statInactive}`}>
                        {isActive ? "ACTIVE" : "INACTIVE"}
                    </span>
                </div>
            </div>

            <div className={styles.statDivider}></div>

            <div className={styles.statItem}>
                <div className={styles.statIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                </div>
                <div className={styles.statContent}>
                    <span className={styles.statLabel}>Days Left</span>
                    <span className={styles.statValue}>
                        {isActive ? (daysRemaining > 365 ? "∞" : daysRemaining) : "—"}
                    </span>
                </div>
            </div>

            <div className={styles.statDivider}></div>

            <div className={styles.statItem}>
                <div className={styles.statIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </div>
                <div className={styles.statContent}>
                    <span className={styles.statLabel}>License</span>
                    <span className={`${styles.statValue} ${licenseKey ? styles.statHealthy : styles.statWarning}`}>
                        {licenseHealth}
                    </span>
                </div>
            </div>

            <div className={styles.statDivider}></div>

            <div className={styles.statItem}>
                <div className={styles.statIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </div>
                <div className={styles.statContent}>
                    <span className={styles.statLabel}>Market</span>
                    <span className={`${styles.statValue} ${marketStatus.isOpen ? styles.statActive : styles.statInactive}`}>
                        {marketStatus.session}
                    </span>
                </div>
            </div>
        </div>
    );
}
