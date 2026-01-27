'use client';

import { useState } from 'react';
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
                    <span className={styles.tagline}>
                        <span className={styles.taglineIcon}>⚡</span>
                        {t('hero.tagline')}
                    </span>

                    <h1 className={styles.title}>
                        <span className={styles.titleMain}>{t('hero.title')}</span>
                        <span className={styles.titleSub}>{t('hero.subtitle')}</span>
                    </h1>

                    <p className={styles.description}>
                        {t('hero.description')}
                    </p>

                    <div className={styles.actions}>
                        <Link href={`/${locale}/pricing`} className={styles.ctaPrimary}>
                            <span>{t('hero.cta')}</span>
                            <svg className={styles.arrow} viewBox="0 0 24 24" width="20" height="20">
                                <path fill="currentColor" d="M5 12h14m-6-6l6 6-6 6" />
                            </svg>
                        </Link>
                        <Link href={`/${locale}#architecture`} className={styles.ctaSecondary}>
                            {t(`nav.features`)}
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

                <div className={styles.visual}>
                    <div className={styles.chartMockup}>
                        <div className={styles.chartHeader}>
                            <span className={styles.chartPair}>EUR/USD</span>
                            <span className={styles.chartSignal}>
                                <span className={styles.signalDot}></span>
                                BUY 87%
                            </span>
                        </div>
                        <div className={styles.chartBody}>
                            <svg className={styles.chartSvg} viewBox="0 0 400 200" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(0, 212, 255, 0.4)" />
                                        <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,150 Q50,120 100,130 T200,100 T300,80 T400,50"
                                    fill="none"
                                    stroke="var(--accent-primary)"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M0,150 Q50,120 100,130 T200,100 T300,80 T400,50 V200 H0 Z"
                                    fill="url(#chartGradient)"
                                />
                            </svg>
                            <div className={styles.chartOverlay}>
                                <div className={styles.entryZone}>
                                    <span>Entry Zone</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
