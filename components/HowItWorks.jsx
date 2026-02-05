'use client';

import { useParams } from 'next/navigation';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    const { locale } = useParams();

    const titles = {
        en: 'How It Works',
        fr: 'Comment Ça Marche',
        es: 'Cómo Funciona',
        pt: 'Como Funciona'
    };

    const badgeTitles = {
        en: 'Guide',
        fr: 'Guide',
        es: 'Guía',
        pt: 'Guia'
    };

    const subtitles = {
        en: 'Start trading with AI in 4 simple steps',
        fr: 'Commencez à trader avec l\'IA en 4 étapes simples',
        es: 'Comience a operar con IA en 4 simples pasos',
        pt: 'Comece a negociar com IA em 4 passos simples'
    };

    const steps = [
        {
            number: '01',
            icon: '💻',
            titles: {
                en: 'Install MetaTrader 5',
                fr: 'Installer MetaTrader 5',
                es: 'Instalar MetaTrader 5',
                pt: 'Instalar MetaTrader 5'
            },
            descriptions: {
                en: 'Download MT5 from your broker. Install, login to your account, and keep MT5 running. MT5 must be open during Cerebrum installation.',
                fr: 'Téléchargez MT5 depuis votre courtier. Installez, connectez-vous à votre compte, et gardez MT5 ouvert. MT5 doit être lancé pendant l\'installation de Cerebrum.',
                es: 'Descargue MT5 de su broker. Instale, inicie sesión en su cuenta, y mantenga MT5 abierto. MT5 debe estar ejecutándose durante la instalación de Cerebrum.',
                pt: 'Baixe MT5 do seu corretor. Instale, faça login na sua conta, e mantenha MT5 aberto. MT5 deve estar rodando durante a instalação do Cerebrum.'
            }
        },
        {
            number: '02',
            icon: '📥',
            titles: {
                en: 'Install Cerebrum Forex',
                fr: 'Installer Cerebrum Forex',
                es: 'Instalar Cerebrum Forex',
                pt: 'Instalar Cerebrum Forex'
            },
            descriptions: {
                en: 'Run the Cerebrum installer. The app will auto-detect your MT5 installation and deploy the Expert Advisor automatically.',
                fr: 'Lancez l\'installateur Cerebrum. L\'app détectera automatiquement votre installation MT5 et déploiera l\'Expert Advisor automatiquement.',
                es: 'Ejecute el instalador de Cerebrum. La app detectará automáticamente su instalación MT5 y desplegará el Expert Advisor automáticamente.',
                pt: 'Execute o instalador do Cerebrum. O app detectará automaticamente sua instalação MT5 e implantará o Expert Advisor automaticamente.'
            }
        },
        {
            number: '03',
            icon: '📊',
            titles: {
                en: 'Extract & Train',
                fr: 'Extraire & Entraîner',
                es: 'Extraer y Entrenar',
                pt: 'Extrair e Treinar'
            },
            descriptions: {
                en: 'Download EUR/USD historical data via the Extraction tab. Train all 5 AI models with one click using Smart Train.',
                fr: 'Téléchargez les données historiques EUR/USD via l\'onglet Extraction. Entraînez les 5 modèles IA en un clic avec Smart Train.',
                es: 'Descargue datos históricos EUR/USD a través de la pestaña Extraction. Entrene los 5 modelos IA con un clic usando Smart Train.',
                pt: 'Baixe dados históricos EUR/USD através da aba Extraction. Treine os 5 modelos IA com um clique usando Smart Train.'
            }
        },
        {
            number: '04',
            icon: '🚀',
            titles: {
                en: 'Start Trading (Scalping)',
                fr: 'Commencer à Trader (Scalping)',
                es: 'Comenzar a Operar (Scalping)',
                pt: 'Começar a Negociar (Scalping)'
            },
            descriptions: {
                en: 'Match your App Timeframe with MT5. Scan M1/M5/M15 for signals. Click the TF button to enter on non-neutral signals, then exit manually via MT5 after a small gain.',
                fr: 'Alignez le Timeframe de l\'App avec MT5. Scannez M1/M5/M15. Cliquez sur le bouton TF pour entrer sur un signal actif, puis sortez manuellement via MT5 après un gain rapide.',
                es: 'Sincronice el Timeframe de la App con MT5. Escanee M1/M5/M15. Haga clic en el botón TF para entrar en señales activas y salga manualmente vía MT5 tras una ganancia rápida.',
                pt: 'Sincronize o Timeframe do App com MT5. Escaneie M1/M5/M15. Clique no botão TF para entrar em sinais ativos e saia manualmente via MT5 após um ganho rápido.'
            }
        }
    ];

    return (
        <section className={styles.section} id="how-it-works">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>{badgeTitles[locale] || badgeTitles.en}</span>
                    <h2 className={styles.title}>{titles[locale] || titles.en}</h2>
                    <p className={styles.subtitle}>{subtitles[locale] || subtitles.en}</p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <article key={index} className={styles.step}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepContent}>
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <h3 className={styles.stepTitle}>
                                    {step.titles[locale] || step.titles.en}
                                </h3>
                                <p className={styles.stepDescription}>
                                    {step.descriptions[locale] || step.descriptions.en}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={styles.connector}></div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
