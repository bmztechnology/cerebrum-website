"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import styles from "./Pricing.module.css";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function PricingPage() {
    const { locale } = useParams();
    const { isSignedIn, isLoaded } = useUser();
    const router = useRouter();
    const t = useTranslations("pricing");
    const searchParams = useSearchParams();
    const [showCanceled, setShowCanceled] = useState(false);

    useEffect(() => {
        if (searchParams.get("canceled") === "true") {
            setShowCanceled(true);
            const timer = setTimeout(() => setShowCanceled(false), 8000);
            return () => clearTimeout(timer);
        }
    }, [searchParams]);

    const plans = [
        {
            id: "monthly",
            title: t("monthly.title"),
            price: t("monthly.price"),
            period: t("monthly.period"),
            cta: t("monthly.cta"),
            features: [
                "Full AI Signal Access",
                "MT5 Master EA Included",
                "All Trading Modes",
                "Email Support",
                "Regular Updates"
            ],
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY,
        },
        {
            id: "yearly",
            title: t("yearly.title"),
            price: t("yearly.price"),
            period: t("yearly.period"),
            cta: t("yearly.cta"),
            features: [
                "Everything in Monthly",
                "Priority Support",
                "Early Access to Beta Features",
                "2 Months Free Savings"
            ],
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY,
            featured: true,
        },
    ];

    const handleCheckout = async (priceId) => {
        if (!isLoaded) return;

        if (!isSignedIn) {
            router.push(`/${locale}/auth/login?callbackUrl=/${locale}/pricing`);
            return;
        }

        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                body: JSON.stringify({ priceId, locale }),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("Checkout error:", data);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <div className={styles.pricingPage}>
            <div className={styles.backgroundEffects}>
                <div className={styles.glowOrb1}></div>
                <div className={styles.glowOrb2}></div>
            </div>

            <div className={styles.container}>
                {showCanceled && (
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid #ef4444',
                        color: '#ef4444',
                        padding: '16px',
                        borderRadius: '12px',
                        marginBottom: '32px',
                        textAlign: 'center',
                        fontWeight: '600',
                        animation: 'fadeInUp 0.5s ease-out'
                    }}>
                        ❌ {locale === 'fr' ? 'Le paiement a été annulé.' :
                            locale === 'es' ? 'El pago fue cancelado.' :
                                locale === 'pt' ? 'O pagamento foi cancelado.' :
                                    'Payment was canceled.'}
                    </div>
                )}
                <div className={styles.header}>
                    <h1 className={`${styles.title} gradient-text`}>{t("title")}</h1>
                    <p className={styles.subtitle}>{t("subtitle")}</p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${styles.card} ${plan.featured ? styles.featuredCard : ""}`}
                        >
                            <div className={styles.cardHeader}>
                                <h3 className={styles.planTitle}>{plan.title}</h3>
                                <div className={styles.priceWrapper}>
                                    <span className={styles.price}>{plan.price}</span>
                                    <span className={styles.period}>{plan.period}</span>
                                </div>
                            </div>

                            <ul className={styles.featuresList}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <span className={styles.checkIcon}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleCheckout(plan.priceId)}
                                className={`${styles.ctaButton} ${plan.featured ? styles.ctaFeatured : ""}`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
