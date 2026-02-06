"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import styles from "./Pricing.module.css";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function PricingPage() {
    const { locale } = useParams();
    const { isSignedIn, isLoaded, user } = useUser();
    const router = useRouter();
    const t = useTranslations("pricing");
    const searchParams = useSearchParams();
    const [showCanceled, setShowCanceled] = useState(false);
    const [loadingPlan, setLoadingPlan] = useState(null);

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
            title: t("monthly.title") || "Monthly Pro",
            price: t("monthly.price") || "29$",
            period: t("monthly.period") || "/ month",
            cta: t("monthly.cta") || "Start Trading",
            features: [
                "Full AI Signal Access",
                "MT5 Master EA Included",
                "All Trading Modes",
                "Email Support",
                "Regular Updates"
            ],
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY,
            icon: "⚡"
        },
        {
            id: "yearly",
            title: t("yearly.title") || "Yearly Elite",
            price: t("yearly.price") || "290$",
            period: t("yearly.period") || "/ year",
            cta: t("yearly.cta") || "Get Elite Access",
            features: [
                "Everything in Monthly",
                "Priority Support",
                "Early Access to Beta Features",
                "2 Months Free (Save 58$)",
                "Elite Trading Community"
            ],
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY,
            featured: true,
            icon: "🏆"
        },
    ];

    const handleCheckout = async (priceId, planId) => {
        if (!isLoaded) return;

        if (!isSignedIn) {
            router.push(`/${locale}/auth/login?callbackUrl=/${locale}/pricing`);
            return;
        }

        setLoadingPlan(planId);
        try {
            console.log("Initiating checkout with Price ID:", priceId);
            const res = await fetch("/api/checkout", {
                method: "POST",
                body: JSON.stringify({
                    plan: planId, // Send planId (monthly/yearly)
                    priceId: String(priceId),
                    locale
                }),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("Checkout error details:", data);
                alert(`Checkout Error: ${data.details || data.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("A network error occurred. Please check your connection.");
        } finally {
            setLoadingPlan(null);
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
                    <div className={styles.alertCanceled}>
                        ❌ {locale === 'fr' ? 'Le paiement a été annulé.' :
                            locale === 'es' ? 'El pago fue cancelado.' :
                                locale === 'pt' ? 'O paiement foi cancelado.' :
                                    'Payment was canceled.'}
                    </div>
                )}

                <div className={styles.header}>
                    <div className={styles.premiumBadge}>VIP TRADING PLANS</div>
                    <h1 className={`${styles.title} gradient-text`}>
                        {isSignedIn ? (
                            locale === 'fr' ? `Prêt pour l'élite, ${user.firstName || 'Trader'} ?` :
                                `Ready for Elite, ${user.firstName || 'Trader'}?`
                        ) : t("title")}
                    </h1>
                    <p className={styles.subtitle}>
                        {isSignedIn
                            ? (locale === 'fr' ? 'Choisissez votre plan et débloquez la puissance de l\'IA Cerebrum.' : 'Select your plan and unlock the full power of Cerebrum AI.')
                            : t("subtitle")}
                    </p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${styles.card} ${plan.featured ? styles.featuredCard : ""}`}
                        >
                            {plan.featured && <div className={styles.popularTag}>BEST VALUE</div>}
                            <div className={styles.cardHeader}>
                                <div className={styles.planIcon}>{plan.icon}</div>
                                <h3 className={styles.planTitle}>{plan.title}</h3>
                                <div className={styles.priceWrapper}>
                                    <span className={styles.price}>{plan.price}</span>
                                    <span className={styles.period}>{plan.period}</span>
                                </div>
                            </div>

                            <ul className={styles.featuresList}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.checkSvg}>
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleCheckout(plan.priceId, plan.id)}
                                disabled={loadingPlan !== null}
                                className={`${styles.ctaButton} ${plan.featured ? styles.ctaFeatured : ""}`}
                            >
                                {loadingPlan === plan.id ? (
                                    <span className={styles.loader}></span>
                                ) : plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.trustFooter}>
                    <div className={styles.trustItem}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        Secure Stripe Payment
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.trustItem}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        Instant Account Activation
                    </div>
                </div>
            </div>
        </div>
    );
}

