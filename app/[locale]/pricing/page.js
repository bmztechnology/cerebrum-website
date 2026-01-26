"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function PricingPage() {
    const t = useTranslations("pricing");

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
        const res = await fetch("/api/checkout", {
            method: "POST",
            body: JSON.stringify({ priceId }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.url) {
            window.location.href = data.url;
        }
    };

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto text-white">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4 gradient-text">{t("title")}</h1>
                <p className="text-xl text-gray-400">{t("subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`p-8 rounded-3xl border ${plan.featured
                            ? "border-orange-500 bg-orange-500/10"
                            : "border-white/10 bg-white/5"
                            } transition-all hover:scale-105 flex flex-col`}
                    >
                        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-gray-400 ml-2">{plan.period}</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <span className="text-orange-500 mr-2">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => handleCheckout(plan.priceId)}
                            className={`w-full py-4 rounded-xl font-bold transition-all ${plan.featured
                                ? "bg-orange-500 hover:bg-orange-600 text-black"
                                : "bg-white/10 hover:bg-white/20"
                                }`}
                        >
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
