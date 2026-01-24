'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './docs.module.css';

const docSections = [
    {
        id: 'quickstart',
        icon: '🚀',
        title: { en: 'Quick Start', fr: 'Démarrage Rapide', es: 'Inicio Rápido', pt: 'Início Rápido' },
        description: {
            en: 'Get up and running in less than 10 minutes. Connect to MT5, extract data, train models, and start predictions.',
            fr: 'Soyez opérationnel en moins de 10 minutes. Connectez-vous à MT5, extrayez les données, entraînez les modèles et lancez les prédictions.',
            es: 'Comienza a operar en menos de 10 minutos. Conéctate a MT5, extrae datos, entrena modelos y comienza las predicciones.',
            pt: 'Comece a operar em menos de 10 minutos. Conecte-se ao MT5, extraia dados, treine modelos e inicie previsões.'
        }
    },
    {
        id: 'installation',
        icon: '📦',
        title: { en: 'Installation', fr: 'Installation', es: 'Instalación', pt: 'Instalação' },
        description: {
            en: 'Prerequisites: Python 3.10+, MetaTrader 5, Windows 10/11. Download and run CerebrumSetup.exe or install from source.',
            fr: 'Prérequis: Python 3.10+, MetaTrader 5, Windows 10/11. Téléchargez et exécutez CerebrumSetup.exe ou installez depuis les sources.',
            es: 'Requisitos: Python 3.10+, MetaTrader 5, Windows 10/11. Descarga y ejecuta CerebrumSetup.exe o instala desde el código fuente.',
            pt: 'Requisitos: Python 3.10+, MetaTrader 5, Windows 10/11. Baixe e execute CerebrumSetup.exe ou instale a partir do código-fonte.'
        }
    },
    {
        id: 'dashboard',
        icon: '📊',
        title: { en: 'Dashboard', fr: 'Tableau de Bord', es: 'Panel de Control', pt: 'Painel de Controle' },
        description: {
            en: 'Main window displaying MT5 account info, open positions, charts, trading zones, and economic calendar.',
            fr: 'Fenêtre principale affichant les informations du compte MT5, les positions ouvertes, les graphiques et le calendrier économique.',
            es: 'Ventana principal que muestra información de la cuenta MT5, posiciones abiertas, gráficos y calendario económico.',
            pt: 'Janela principal exibindo informações da conta MT5, posições abertas, gráficos e calendário econômico.'
        }
    },
    {
        id: 'prediction',
        icon: '🤖',
        title: { en: 'AI Predictions', fr: 'Prédictions IA', es: 'Predicciones IA', pt: 'Previsões IA' },
        description: {
            en: 'Live prediction pipeline: SYNC TIMING → HARDWARE → LOAD OHLC → INDICATORS → XGBOOST/LIGHTGBM/RANDOMFOREST/CATBOOST/STACKING',
            fr: 'Pipeline de prédiction en direct: SYNC TIMING → HARDWARE → LOAD OHLC → INDICATORS → XGBOOST/LIGHTGBM/RANDOMFOREST/CATBOOST/STACKING',
            es: 'Pipeline de predicción en vivo: SYNC TIMING → HARDWARE → LOAD OHLC → INDICATORS → XGBOOST/LIGHTGBM/RANDOMFOREST/CATBOOST/STACKING',
            pt: 'Pipeline de previsão ao vivo: SYNC TIMING → HARDWARE → LOAD OHLC → INDICATORS → XGBOOST/LIGHTGBM/RANDOMFOREST/CATBOOST/STACKING'
        }
    },
    {
        id: 'ea-manager',
        icon: '⚙️',
        title: { en: 'EA Manager', fr: 'Gestionnaire EA', es: 'Gestor EA', pt: 'Gerenciador EA' },
        description: {
            en: 'Configure MT5 Expert Advisor: Orders, Positions, Risk, Prop Firm rules, Trailing Stop, Logs, and Analytics.',
            fr: 'Configurez l\'Expert Advisor MT5: Ordres, Positions, Risque, règles Prop Firm, Trailing Stop, Logs et Analytics.',
            es: 'Configura el Expert Advisor MT5: Órdenes, Posiciones, Riesgo, reglas de Prop Firm, Trailing Stop, Logs y Analytics.',
            pt: 'Configure o Expert Advisor MT5: Ordens, Posições, Risco, regras de Prop Firm, Trailing Stop, Logs e Analytics.'
        }
    },
    {
        id: 'risk',
        icon: '🛡️',
        title: { en: 'Risk Management', fr: 'Gestion du Risque', es: 'Gestión de Riesgo', pt: 'Gestão de Risco' },
        description: {
            en: 'Configure Risk/Trade (0.5-2%), Max Drawdown (3-5%), Stop after Loss, Equity Hard Stop, Max Positions, Trading Sessions.',
            fr: 'Configurez Risque/Trade (0.5-2%), Max Drawdown (3-5%), Stop après Perte, Equity Hard Stop, Max Positions, Sessions Trading.',
            es: 'Configura Riesgo/Trade (0.5-2%), Max Drawdown (3-5%), Stop después de Pérdida, Equity Hard Stop, Max Posiciones, Sesiones de Trading.',
            pt: 'Configure Risco/Trade (0.5-2%), Max Drawdown (3-5%), Stop após Perda, Equity Hard Stop, Max Posições, Sessões de Trading.'
        }
    },
    {
        id: 'propfirm',
        icon: '🏆',
        title: { en: 'Prop Firm Mode', fr: 'Mode Prop Firm', es: 'Modo Prop Firm', pt: 'Modo Prop Firm' },
        description: {
            en: 'Strict rules for FTMO/MFF challenges: Max Daily Loss 4-5%, Max Drawdown 8-10%, Risk 0.5%, Profit Target 8-10%, News Filter.',
            fr: 'Règles strictes pour les challenges FTMO/MFF: Max Daily Loss 4-5%, Max Drawdown 8-10%, Risk 0.5%, Profit Target 8-10%, News Filter.',
            es: 'Reglas estrictas para desafíos FTMO/MFF: Max Daily Loss 4-5%, Max Drawdown 8-10%, Risk 0.5%, Profit Target 8-10%, News Filter.',
            pt: 'Regras rígidas para desafios FTMO/MFF: Max Daily Loss 4-5%, Max Drawdown 8-10%, Risk 0.5%, Profit Target 8-10%, News Filter.'
        }
    },
    {
        id: 'training',
        icon: '🧠',
        title: { en: 'Model Training', fr: 'Entraînement des Modèles', es: 'Entrenamiento de Modelos', pt: 'Treinamento de Modelos' },
        description: {
            en: 'Train ML models: Data → Features → Labels → Normalize → XGBoost → LightGBM → RandomForest → CatBoost → Stacking',
            fr: 'Entraînez les modèles ML: Data → Features → Labels → Normalize → XGBoost → LightGBM → RandomForest → CatBoost → Stacking',
            es: 'Entrena modelos ML: Data → Features → Labels → Normalize → XGBoost → LightGBM → RandomForest → CatBoost → Stacking',
            pt: 'Treine modelos ML: Data → Features → Labels → Normalize → XGBoost → LightGBM → RandomForest → CatBoost → Stacking'
        }
    }
];

const signalGuide = {
    en: { buy: 'Bullish trend predicted - Consider buying', sell: 'Bearish trend predicted - Consider selling', neutral: 'No clear signal - Wait' },
    fr: { buy: 'Tendance haussière prédite - Envisagez d\'acheter', sell: 'Tendance baissière prédite - Envisagez de vendre', neutral: 'Pas de signal clair - Attendez' },
    es: { buy: 'Tendencia alcista predicha - Considera comprar', sell: 'Tendencia bajista predicha - Considera vender', neutral: 'Sin señal clara - Espera' },
    pt: { buy: 'Tendência de alta prevista - Considere comprar', sell: 'Tendência de baixa prevista - Considere vender', neutral: 'Sem sinal claro - Aguarde' }
};

export default function DocsPage() {
    const { locale } = useParams();
    const lang = locale || 'en';

    const pageTitle = { en: 'Documentation', fr: 'Documentation', es: 'Documentación', pt: 'Documentação' };
    const pageSubtitle = {
        en: 'Complete guide to Cerebrum Forex AI trading platform',
        fr: 'Guide complet de la plateforme de trading Cerebrum Forex AI',
        es: 'Guía completa de la plataforma de trading Cerebrum Forex AI',
        pt: 'Guia completo da plataforma de trading Cerebrum Forex AI'
    };

    return (
        <section className={styles.docs}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{pageTitle[lang]}</h1>
                    <p className={styles.subtitle}>{pageSubtitle[lang]}</p>
                </div>

                {/* Signal Guide */}
                <div className={styles.signalGuide}>
                    <h2 className={styles.sectionTitle}>
                        {lang === 'en' ? 'Signal Interpretation' : lang === 'fr' ? 'Interprétation des Signaux' : lang === 'es' ? 'Interpretación de Señales' : 'Interpretação de Sinais'}
                    </h2>
                    <div className={styles.signals}>
                        <div className={styles.signalCard} data-type="buy">
                            <span className={styles.signalIcon}>🟢</span>
                            <span className={styles.signalLabel}>BUY</span>
                            <span className={styles.signalDesc}>{signalGuide[lang].buy}</span>
                        </div>
                        <div className={styles.signalCard} data-type="sell">
                            <span className={styles.signalIcon}>🔴</span>
                            <span className={styles.signalLabel}>SELL</span>
                            <span className={styles.signalDesc}>{signalGuide[lang].sell}</span>
                        </div>
                        <div className={styles.signalCard} data-type="neutral">
                            <span className={styles.signalIcon}>⚪</span>
                            <span className={styles.signalLabel}>NEUTRAL</span>
                            <span className={styles.signalDesc}>{signalGuide[lang].neutral}</span>
                        </div>
                    </div>
                </div>

                {/* Documentation Sections */}
                <div className={styles.grid}>
                    {docSections.map((section) => (
                        <div key={section.id} className={styles.card}>
                            <div className={styles.cardIcon}>{section.icon}</div>
                            <h2 className={styles.cardTitle}>{section.title[lang]}</h2>
                            <p className={styles.cardText}>{section.description[lang]}</p>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className={styles.disclaimer}>
                    <p>
                        {lang === 'en' && '⚠️ Predictions are provided for informational purposes only. They do not constitute investment advice.'}
                        {lang === 'fr' && '⚠️ Les prédictions sont fournies à titre informatif uniquement. Elles ne constituent pas des conseils en investissement.'}
                        {lang === 'es' && '⚠️ Las predicciones se proporcionan solo con fines informativos. No constituyen asesoramiento de inversión.'}
                        {lang === 'pt' && '⚠️ As previsões são fornecidas apenas para fins informativos. Elas não constituem aconselhamento de investimento.'}
                    </p>
                </div>
            </div>
        </section>
    );
}
