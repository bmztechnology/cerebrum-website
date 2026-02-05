'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './Hero.module.css';

const disclaimerTexts = {
    en: { text1: "Cerebrum Forex is a software platform that assists traders. It has no access to your account, funds, or bank. Our market interface is", mt5: "MetaTrader 5", btn: "Understood" },
    fr: { text1: "Cerebrum Forex est une plateforme logicielle qui aide les traders. Elle n'a aucun accès à votre compte, vos fonds ou votre banque. Notre interface avec le marché est", mt5: "MetaTrader 5", btn: "Compris" },
    es: { text1: "Cerebrum Forex es una plataforma de software que asiste a traders. No tiene acceso a su cuenta, fondos o banco. Nuestra interfaz con el mercado es", mt5: "MetaTrader 5", btn: "Entendido" },
    pt: { text1: "Cerebrum Forex é uma plataforma de software que auxilia traders. Não tem acesso à sua conta, fundos ou banco. Nossa interface com o mercado é o", mt5: "MetaTrader 5", btn: "Entendido" }
};

export default function Hero() {
    const { locale } = useParams();
    const t = useTranslations();
    const [showBanner, setShowBanner] = useState(true);
    const disclaimer = disclaimerTexts[locale] || disclaimerTexts.en;



    return (
        <section className={styles.hero}>
            <div className={styles.backgroundEffects}>
                <div className={styles.glowOrb1}></div>
                <div className={styles.glowOrb2}></div>
                <div className={styles.gridLines}></div>
            </div>

            {/* Disclaimer Banner */}
            {showBanner && (
                <div className={styles.disclaimerBanner}>
                    <div className={styles.disclaimerContent}>
                        <span className={styles.disclaimerIcon}>⚠️</span>
                        <p className={styles.disclaimerText}>
                            {disclaimer.text1}{' '}
                            <a href="https://www.metatrader5.com" target="_blank" rel="noopener noreferrer" className={styles.mt5Link}>
                                {disclaimer.mt5}
                            </a>.
                        </p>
                        <button className={styles.disclaimerBtn} onClick={() => setShowBanner(false)}>
                            {disclaimer.btn}
                        </button>
                    </div>
                </div>
            )}

            <div className={styles.container}>
                <div className={styles.content}>

                    <h1 className={styles.title}>
                        <span className={styles.titleMain}>{t('hero.title')}</span>
                        <span className={styles.titleSub}>{t('hero.subtitle')}</span>
                    </h1>

                    <p className={styles.description}>
                        {t('hero.description')}
                    </p>

                    <div className={styles.actions}>
                        <Link href={`/${locale}/download`} className={styles.ctaPrimary}>
                            <span>{t('hero.cta')}</span>
                            <svg className={styles.arrow} viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor" d="M5 12h14m-6-6l6 6-6 6" />
                            </svg>
                        </Link>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>EUR/USD</span>
                            <span className={styles.statLabel}>Optimized Pair</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>6</span>
                            <span className={styles.statLabel}>Timeframes</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>AI+EA</span>
                            <span className={styles.statLabel}>Hybrid System</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
