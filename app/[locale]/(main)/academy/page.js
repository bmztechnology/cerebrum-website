"use client";

import { useTranslations } from "next-intl";
import styles from "./Academy.module.css";
import Link from "next/link";

export default function AcademyPage() {
    const t = useTranslations("academy");

    // Placeholder data for lessons/modules
    const modules = [
        { id: 1, title: "Module 1: Forex Basics", desc: "Understanding currency pairs, pips, and lots.", path: "/academy/basics" },
        { id: 2, title: "Module 2: AI Trading 101", desc: "How Cerebrum AI analyzes market data.", path: "/academy/ai-trading" },
        { id: 3, title: "Module 3: Risk Management", desc: "Protecting your capital with smart tools.", path: "/academy/risk-management" },
    ];

    return (
        <div className={styles.academyPage}>
            <section className={styles.heroSection}>
                <h2 className={styles.title}>{t("title") || "Cerebrum Academy"}</h2>
                <p className={styles.subtitle}>{t("subtitle") || "Master the art of AI-Enhanced Trading."}</p>
            </section>

            <section className={styles.modulesGrid}>
                {modules.map((mod) => (
                    <div key={mod.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.moduleTag}>Module {mod.id}</span>
                            <h3>{mod.title}</h3>
                        </div>
                        <p>{mod.desc}</p>
                        <Link href={mod.path} className={styles.learnBtn}>
                            {t("startBtn") || "Start Learning"} →
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
}
