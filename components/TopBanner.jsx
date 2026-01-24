'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import styles from './TopBanner.module.css';

const translations = {
    en: {
        text: "Cerebrum Forex is a software platform that assists traders. It has no access to your trading account, funds, or bank. Your MT5 platform connects directly to your broker.",
        close: "Understood"
    },
    fr: {
        text: "Cerebrum Forex est une plateforme logicielle qui aide les traders. Elle n'a aucun accès à votre compte de trading, vos fonds ou votre banque. Votre plateforme MT5 se connecte directement à votre courtier.",
        close: "Compris"
    },
    es: {
        text: "Cerebrum Forex es una plataforma de software que asiste a los traders. No tiene acceso a su cuenta de trading, fondos o banco. Su plataforma MT5 se conecta directamente a su broker.",
        close: "Entendido"
    },
    pt: {
        text: "Cerebrum Forex é uma plataforma de software que auxilia traders. Não tem acesso à sua conta de trading, fundos ou banco. Sua plataforma MT5 se conecta diretamente ao seu corretor.",
        close: "Entendido"
    }
};

export default function TopBanner() {
    const { locale } = useParams();
    const [isVisible, setIsVisible] = useState(true);
    const t = translations[locale] || translations.en;

    if (!isVisible) return null;

    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.icon}>ℹ️</div>
                <p className={styles.text}>{t.text}</p>
                <button
                    className={styles.closeBtn}
                    onClick={() => setIsVisible(false)}
                    aria-label="Close banner"
                >
                    {t.close}
                </button>
            </div>
        </div>
    );
}
