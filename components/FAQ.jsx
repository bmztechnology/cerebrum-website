'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './FAQ.module.css';

export default function FAQ() {
    const { locale } = useParams();
    const [openIndex, setOpenIndex] = useState(null);

    const titles = {
        en: 'Frequently Asked Questions',
        fr: 'Questions Fréquemment Posées',
        es: 'Preguntas Frecuentes',
        pt: 'Perguntas Frequentes'
    };

    const subtitles = {
        en: 'Everything you need to know about Cerebrum Forex',
        fr: 'Tout ce que vous devez savoir sur Cerebrum Forex',
        es: 'Todo lo que necesita saber sobre Cerebrum Forex',
        pt: 'Tudo o que você precisa saber sobre Cerebrum Forex'
    };

    const badgeTitles = {
        en: 'Q&A',
        fr: 'S.A.V',
        es: 'S.A.V',
        pt: 'S.A.V'
    };

    const faqs = [
        // General
        {
            category: 'general',
            q: {
                en: 'What is Cerebrum Forex?',
                fr: 'Qu\'est-ce que Cerebrum Forex ?',
                es: '¿Qué es Cerebrum Forex?',
                pt: 'O que é Cerebrum Forex?'
            },
            a: {
                en: 'Cerebrum Forex is an AI-powered trading software that uses 5 machine learning models (XGBoost, LightGBM, RandomForest, CatBoost, and Stacking) to generate EUR/USD trading signals. It integrates with MetaTrader 5 via an Expert Advisor for automated or assisted trading.',
                fr: 'Cerebrum Forex est un logiciel de trading propulsé par IA qui utilise 5 modèles de machine learning (XGBoost, LightGBM, RandomForest, CatBoost et Stacking) pour générer des signaux de trading EUR/USD. Il s\'intègre à MetaTrader 5 via un Expert Advisor.',
                es: 'Cerebrum Forex es un software de trading impulsado por IA que utiliza 5 modelos de machine learning (XGBoost, LightGBM, RandomForest, CatBoost y Stacking) para generar señales de trading EUR/USD. Se integra con MetaTrader 5 a través de un Expert Advisor.',
                pt: 'Cerebrum Forex é um software de trading impulsionado por IA que usa 5 modelos de machine learning (XGBoost, LightGBM, RandomForest, CatBoost e Stacking) para gerar sinais de trading EUR/USD. Integra-se com MetaTrader 5 via Expert Advisor.'
            }
        },
        {
            category: 'security',
            q: {
                en: 'Does Cerebrum Forex have access to my trading account or funds?',
                fr: 'Cerebrum Forex a-t-il accès à mon compte ou mes fonds ?',
                es: '¿Cerebrum Forex tiene acceso a mi cuenta o fondos?',
                pt: 'Cerebrum Forex tem acesso à minha conta ou fundos?'
            },
            a: {
                en: 'No. Cerebrum Forex is a software platform that assists traders. It has NO access to your account, funds, or bank. The only connection is through MetaTrader 5\'s local API for price data and signal execution via the Expert Advisor running on YOUR computer.',
                fr: 'Non. Cerebrum Forex est une plateforme logicielle qui aide les traders. Elle n\'a AUCUN accès à votre compte, vos fonds ou votre banque. La seule connexion se fait via l\'API locale de MetaTrader 5 pour les données de prix et l\'exécution via l\'Expert Advisor sur VOTRE ordinateur.',
                es: 'No. Cerebrum Forex es una plataforma de software que asiste a traders. NO tiene acceso a su cuenta, fondos o banco. La única conexión es a través de la API local de MetaTrader 5 para datos de precios y ejecución vía Expert Advisor en SU computadora.',
                pt: 'Não. Cerebrum Forex é uma plataforma de software que auxilia traders. NÃO tem acesso à sua conta, fundos ou banco. A única conexão é através da API local do MetaTrader 5 para dados de preços e execução via Expert Advisor no SEU computador.'
            }
        },
        {
            category: 'compatibility',
            q: {
                en: 'Is Cerebrum Forex compatible with prop firms like FTMO?',
                fr: 'Cerebrum Forex est-il compatible avec les prop firms comme FTMO ?',
                es: '¿Es Cerebrum Forex compatible con prop firms como FTMO?',
                pt: 'Cerebrum Forex é compatível com prop firms como FTMO?'
            },
            a: {
                en: 'Yes! Cerebrum Forex includes a dedicated Prop Firm mode with built-in risk management: daily loss limits (4-5%), max drawdown protection (8-10%), news filter, and conservative position sizing. Compatible with FTMO, MyForexFunds, The Funded Trader, and more.',
                fr: 'Oui ! Cerebrum Forex inclut un mode Prop Firm dédié avec gestion du risque intégrée : limites de perte journalière (4-5%), protection drawdown max (8-10%), filtre news, et dimensionnement conservateur. Compatible FTMO, MyForexFunds, The Funded Trader, et plus.',
                es: '¡Sí! Cerebrum Forex incluye un modo Prop Firm dedicado con gestión de riesgo integrada: límites de pérdida diaria (4-5%), protección de drawdown máximo (8-10%), filtro de noticias, y tamaño conservador. Compatible con FTMO, MyForexFunds, The Funded Trader, y más.',
                pt: 'Sim! Cerebrum Forex inclui um modo Prop Firm dedicado com gestão de risco integrada: limites de perda diária (4-5%), proteção de drawdown máximo (8-10%), filtro de notícias, e dimensionamento conservador. Compatível com FTMO, MyForexFunds, The Funded Trader, e mais.'
            }
        },
        {
            category: 'technical',
            q: {
                en: 'What are the system requirements?',
                fr: 'Quelles sont les exigences système ?',
                es: '¿Cuáles son los requisitos del sistema?',
                pt: 'Quais são os requisitos do sistema?'
            },
            a: {
                en: 'Windows 10/11, 8GB RAM minimum (16GB recommended), MetaTrader 5 terminal installed, stable internet connection. The software runs locally on your computer - no cloud required.',
                fr: 'Windows 10/11, 8GB RAM minimum (16GB recommandé), terminal MetaTrader 5 installé, connexion internet stable. Le logiciel fonctionne localement sur votre ordinateur - pas de cloud requis.',
                es: 'Windows 10/11, 8GB RAM mínimo (16GB recomendado), terminal MetaTrader 5 instalado, conexión a internet estable. El software funciona localmente en su computadora - no requiere cloud.',
                pt: 'Windows 10/11, 8GB RAM mínimo (16GB recomendado), terminal MetaTrader 5 instalado, conexão de internet estável. O software roda localmente no seu computador - sem cloud necessário.'
            }
        },
        {
            category: 'trading',
            q: {
                en: 'Why only EUR/USD?',
                fr: 'Pourquoi seulement EUR/USD ?',
                es: '¿Por qué solo EUR/USD?',
                pt: 'Por que apenas EUR/USD?'
            },
            a: {
                en: 'We focus exclusively on EUR/USD to maximize model accuracy. This is the most liquid forex pair with tight spreads, making it ideal for AI predictions. Our models are specifically trained on EUR/USD price patterns, providing superior performance compared to generic multi-pair systems.',
                fr: 'Nous nous concentrons exclusivement sur EUR/USD pour maximiser la précision des modèles. C\'est la paire forex la plus liquide avec des spreads serrés, idéale pour les prédictions IA. Nos modèles sont spécifiquement entraînés sur les patterns EUR/USD, offrant une performance supérieure.',
                es: 'Nos enfocamos exclusivamente en EUR/USD para maximizar la precisión del modelo. Es el par forex más líquido con spreads ajustados, ideal para predicciones IA. Nuestros modelos están específicamente entrenados en patrones EUR/USD, proporcionando un rendimiento superior.',
                pt: 'Focamos exclusivamente em EUR/USD para maximizar a precisão do modelo. É o par forex mais líquido com spreads apertados, ideal para previsões IA. Nossos modelos são especificamente treinados em padrões EUR/USD, proporcionando desempenho superior.'
            }
        },
        {
            category: 'accuracy',
            q: {
                en: 'How accurate are the AI predictions?',
                fr: 'Quelle est la précision des prédictions IA ?',
                es: '¿Qué tan precisas son las predicciones de IA?',
                pt: 'Quão precisas são as previsões da IA?'
            },
            a: {
                en: 'Prediction accuracy varies by market conditions and timeframe. The AI uses a consensus voting system across 5 models. You can view individual model confidence levels in the Signal Panel and adjust thresholds in Settings > Logic Tuning. Past performance does not guarantee future results.',
                fr: 'La précision varie selon les conditions de marché et le timeframe. L\'IA utilise un système de vote consensus entre 5 modèles. Vous pouvez voir les niveaux de confiance individuels dans le Panel Signal et ajuster les seuils dans Settings > Logic Tuning. Les performances passées ne garantissent pas les résultats futurs.',
                es: 'La precisión varía según las condiciones del mercado y el timeframe. La IA usa un sistema de votación de consenso entre 5 modelos. Puede ver los niveles de confianza individuales en el Panel de Señales y ajustar umbrales en Settings > Logic Tuning. El rendimiento pasado no garantiza resultados futuros.',
                pt: 'A precisão varia conforme as condições de mercado e timeframe. A IA usa um sistema de votação de consenso entre 5 modelos. Você pode ver os níveis de confiança individuais no Painel de Sinais e ajustar limiares em Settings > Logic Tuning. O desempenho passado não garante resultados futuros.'
            }
        },
        {
            category: 'modes',
            q: {
                en: 'What is the difference between Autonomous, Assisted, and Manual modes?',
                fr: 'Quelle est la différence entre les modes Autonome, Assisté et Manuel ?',
                es: '¿Cuál es la diferencia entre los modos Autónomo, Asistido y Manual?',
                pt: 'Qual é a diferença entre os modos Autônomo, Assistido e Manual?'
            },
            a: {
                en: 'Autonomous Mode: Full automation - configure indicators and strategies, AI handles entry AND exit automatically. Assisted Mode: Semi-auto - AI handles entry, YOU control exit manually via Signal Panel. Manual Mode: Use Cerebrum as information tool only - YOU control both entry and exit.',
                fr: 'Mode Autonome : Automatisation complète - configurez indicateurs et stratégies, l\'IA gère entrée ET sortie automatiquement. Mode Assisté : Semi-auto - l\'IA gère l\'entrée, VOUS contrôlez la sortie manuellement. Mode Manuel : Utilisez Cerebrum comme outil d\'info - VOUS contrôlez entrée et sortie.',
                es: 'Modo Autónomo: Automatización completa - configure indicadores y estrategias, la IA maneja entrada Y salida automáticamente. Modo Asistido: Semi-auto - la IA maneja entrada, USTED controla salida manualmente. Modo Manual: Use Cerebrum como herramienta de info - USTED controla entrada y salida.',
                pt: 'Modo Autônomo: Automatização completa - configure indicadores e estratégias, a IA gerencia entrada E saída automaticamente. Modo Assistido: Semi-auto - a IA gerencia entrada, VOCÊ controla saída manualmente. Modo Manual: Use Cerebrum como ferramenta de info - VOCÊ controla entrada e saída.'
            }
        },
        {
            category: 'installation',
            q: {
                en: 'How do I install Cerebrum Forex?',
                fr: 'Comment installer Cerebrum Forex ?',
                es: '¿Cómo instalo Cerebrum Forex?',
                pt: 'Como instalo Cerebrum Forex?'
            },
            a: {
                en: '1) Install MetaTrader 5 from your broker and keep it running. 2) Run the Cerebrum installer - it will auto-detect MT5. 3) Go to Extraction to download EUR/USD historical data. 4) Train AI models in the Training tab. 5) Configure your risk in EA Manager. 6) Start receiving signals!',
                fr: '1) Installez MetaTrader 5 depuis votre courtier et gardez-le ouvert. 2) Lancez l\'installateur Cerebrum - il détectera MT5 automatiquement. 3) Allez dans Extraction pour télécharger les données EUR/USD. 4) Entraînez les modèles IA dans l\'onglet Training. 5) Configurez votre risque dans EA Manager. 6) Recevez vos signaux !',
                es: '1) Instale MetaTrader 5 de su broker y manténgalo abierto. 2) Ejecute el instalador de Cerebrum - detectará MT5 automáticamente. 3) Vaya a Extraction para descargar datos históricos EUR/USD. 4) Entrene los modelos IA en la pestaña Training. 5) Configure su riesgo en EA Manager. 6) ¡Reciba señales!',
                pt: '1) Instale MetaTrader 5 do seu corretor e mantenha-o aberto. 2) Execute o instalador Cerebrum - ele detectará MT5 automaticamente. 3) Vá para Extraction para baixar dados históricos EUR/USD. 4) Treine os modelos IA na aba Training. 5) Configure seu risco no EA Manager. 6) Receba sinais!'
            }
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>{badgeTitles[locale] || badgeTitles.en}</span>
                    <h2 className={styles.title}>{titles[locale] || titles.en}</h2>
                    <p className={styles.subtitle}>{subtitles[locale] || subtitles.en}</p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <article
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.q[locale] || faq.q.en}</span>
                                <span className={styles.icon}>
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            <div className={styles.answer}>
                                <p>{faq.a[locale] || faq.a.en}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
