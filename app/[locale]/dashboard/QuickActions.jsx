"use client";

import styles from "./Dashboard.module.css";
import { useTranslations } from "next-intl";

export default function QuickActions({ isActive, locale, onManageSubscription }) {
    const t = useTranslations("dashboard");

    const actions = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            ),
            label: "Download App",
            sublabel: "v1.2.0 • 45 MB",
            href: isActive ? "https://github.com/bmztechnology/cerebrum-website/releases/download/v1.2.0/CerebrumSetup_1.2.0.exe" : null,
            disabled: !isActive,
            download: true,
            color: "primary"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
            ),
            label: "Documentation",
            sublabel: "User Guide & API",
            href: "/docs/index.html",
            target: "_blank",
            color: "secondary"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            ),
            label: "Trading Academy",
            sublabel: "Learn Forex",
            href: `/${locale}/academy`,
            color: "tertiary"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            ),
            label: "Contact Support",
            sublabel: "24/7 Help",
            href: "mailto:support@cerebrumfx.com",
            color: "quaternary"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            label: "Manage Subscription",
            sublabel: "Billing & Plan",
            onClick: onManageSubscription,
            disabled: !isActive,
            color: "primary"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            label: "Upgrade Plan",
            sublabel: "Go Premium",
            href: `/${locale}/pricing`,
            hidden: isActive,
            color: "upgrade"
        }
    ];

    return (
        <div className={styles.quickActionsCard}>
            <h3 className={styles.widgetTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Quick Actions
            </h3>
            <div className={styles.actionsGrid}>
                {actions.filter(a => !a.hidden).map((action, index) => (
                    action.onClick ? (
                        <button
                            key={index}
                            onClick={action.onClick}
                            disabled={action.disabled}
                            className={`${styles.actionItem} ${styles[`action${action.color}`]} ${action.disabled ? styles.actionDisabled : ''}`}
                        >
                            <div className={styles.actionIcon}>{action.icon}</div>
                            <div className={styles.actionText}>
                                <span className={styles.actionLabel}>{action.label}</span>
                                <span className={styles.actionSublabel}>{action.sublabel}</span>
                            </div>
                        </button>
                    ) : (
                        <a
                            key={index}
                            href={action.disabled ? undefined : action.href}
                            target={action.target}
                            download={action.download}
                            className={`${styles.actionItem} ${styles[`action${action.color}`]} ${action.disabled ? styles.actionDisabled : ''}`}
                            onClick={action.disabled ? (e) => e.preventDefault() : undefined}
                        >
                            <div className={styles.actionIcon}>{action.icon}</div>
                            <div className={styles.actionText}>
                                <span className={styles.actionLabel}>{action.label}</span>
                                <span className={styles.actionSublabel}>{action.sublabel}</span>
                            </div>
                        </a>
                    )
                ))}
            </div>
        </div>
    );
}
