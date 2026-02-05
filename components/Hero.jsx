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
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

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
                        <Link href={`/${locale}/download`} className={styles.ctaPrimary}>
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
                            <span className={styles.chartPair}>Best practices</span>
                            <button className={styles.zoomBtn} onClick={toggleZoom} title="Zoom">
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                    <path fill="currentColor" d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                                </svg>
                            </button>
                        </div>
                        <div className={styles.chartBody}>
                            <video
                                className={styles.chartVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster="/images/p10.jpg"
                            >
                                <source src="/videos/stra_v122.mp4?v=2" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zoom Modal */}
            {isZoomed && (
                <div className={styles.zoomModal} onClick={toggleZoom}>
                    <div className={styles.zoomContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={toggleZoom}>×</button>
                        <video
                            className={styles.zoomedVideo}
                            controls
                            autoPlay
                            src="/videos/stra_v122.mp4?v=2"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
}
