'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import styles from './PositionCalculator.module.css';

export default function PositionCalculator() {
    const { locale } = useParams();

    const [accountSize, setAccountSize] = useState(10000);
    const [riskPercent, setRiskPercent] = useState(1);
    const [stopLossPips, setStopLossPips] = useState(50);
    const [pipValue, setPipValue] = useState(0);
    const [lotSize, setLotSize] = useState(0);
    const [maxLoss, setMaxLoss] = useState(0);

    useEffect(() => {
        // Standard lot pip value for EUR/USD = $10 per pip
        const standardPipValue = 10;
        const riskAmount = (accountSize * riskPercent) / 100;
        const calculatedLotSize = riskAmount / (stopLossPips * standardPipValue);
        const actualPipValue = calculatedLotSize * standardPipValue;

        setLotSize(Math.round(calculatedLotSize * 100) / 100);
        setPipValue(Math.round(actualPipValue * 100) / 100);
        setMaxLoss(Math.round(riskAmount * 100) / 100);
    }, [accountSize, riskPercent, stopLossPips]);

    const titles = {
        en: 'Position Size Calculator',
        fr: 'Calculateur de Taille de Position',
        es: 'Calculadora de Tamaño de Posición',
        pt: 'Calculadora de Tamanho de Posição'
    };

    const badgeTitles = {
        en: 'Risk',
        fr: 'Risque',
        es: 'Riesgo',
        pt: 'Risco'
    };

    const subtitles = {
        en: 'Calculate your optimal lot size based on risk management',
        fr: 'Calculez votre taille de lot optimale selon la gestion du risque',
        es: 'Calcule su tamaño de lote óptimo según la gestión de riesgo',
        pt: 'Calcule seu tamanho de lote ótimo baseado na gestão de risco'
    };

    const labels = {
        accountSize: { en: 'Account Size ($)', fr: 'Taille du Compte ($)', es: 'Tamaño de Cuenta ($)', pt: 'Tamanho da Conta ($)' },
        riskPercent: { en: 'Risk per Trade (%)', fr: 'Risque par Trade (%)', es: 'Riesgo por Operación (%)', pt: 'Risco por Trade (%)' },
        stopLoss: { en: 'Stop Loss (pips)', fr: 'Stop Loss (pips)', es: 'Stop Loss (pips)', pt: 'Stop Loss (pips)' },
        lotSize: { en: 'Recommended Lot Size', fr: 'Taille de Lot Recommandée', es: 'Tamaño de Lote Recomendado', pt: 'Tamanho de Lote Recomendado' },
        pipValue: { en: 'Pip Value ($)', fr: 'Valeur du Pip ($)', es: 'Valor del Pip ($)', pt: 'Valor do Pip ($)' },
        maxLoss: { en: 'Maximum Loss ($)', fr: 'Perte Maximale ($)', es: 'Pérdida Máxima ($)', pt: 'Perda Máxima ($)' }
    };

    return (
        <section className={styles.section} id="calculator">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>🧮 {badgeTitles[locale] || badgeTitles.en}</span>
                    <h2 className={styles.title}>{titles[locale] || titles.en}</h2>
                    <p className={styles.subtitle}>{subtitles[locale] || subtitles.en}</p>
                </div>

                <div className={styles.calculator}>
                    <div className={styles.inputs}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>
                                {labels.accountSize[locale] || labels.accountSize.en}
                            </label>
                            <div className={styles.inputWrapper}>
                                <span className={styles.prefix}>$</span>
                                <input
                                    type="number"
                                    value={accountSize}
                                    onChange={(e) => setAccountSize(Number(e.target.value))}
                                    min="100"
                                    max="10000000"
                                    className={styles.input}
                                />
                            </div>
                            <input
                                type="range"
                                value={accountSize}
                                onChange={(e) => setAccountSize(Number(e.target.value))}
                                min="100"
                                max="100000"
                                step="100"
                                className={styles.slider}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>
                                {labels.riskPercent[locale] || labels.riskPercent.en}
                            </label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="number"
                                    value={riskPercent}
                                    onChange={(e) => setRiskPercent(Number(e.target.value))}
                                    min="0.1"
                                    max="10"
                                    step="0.1"
                                    className={styles.input}
                                />
                                <span className={styles.suffix}>%</span>
                            </div>
                            <input
                                type="range"
                                value={riskPercent}
                                onChange={(e) => setRiskPercent(Number(e.target.value))}
                                min="0.1"
                                max="5"
                                step="0.1"
                                className={styles.slider}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>
                                {labels.stopLoss[locale] || labels.stopLoss.en}
                            </label>
                            <div className={styles.inputWrapper}>
                                <input
                                    type="number"
                                    value={stopLossPips}
                                    onChange={(e) => setStopLossPips(Number(e.target.value))}
                                    min="5"
                                    max="500"
                                    className={styles.input}
                                />
                                <span className={styles.suffix}>pips</span>
                            </div>
                            <input
                                type="range"
                                value={stopLossPips}
                                onChange={(e) => setStopLossPips(Number(e.target.value))}
                                min="5"
                                max="200"
                                step="5"
                                className={styles.slider}
                            />
                        </div>
                    </div>

                    <div className={styles.results}>
                        <div className={styles.resultCard}>
                            <span className={styles.resultLabel}>
                                {labels.lotSize[locale] || labels.lotSize.en}
                            </span>
                            <span className={styles.resultValue}>{lotSize.toFixed(2)}</span>
                            <span className={styles.resultUnit}>lots</span>
                        </div>

                        <div className={styles.resultCard}>
                            <span className={styles.resultLabel}>
                                {labels.pipValue[locale] || labels.pipValue.en}
                            </span>
                            <span className={styles.resultValue}>${pipValue.toFixed(2)}</span>
                            <span className={styles.resultUnit}>per pip</span>
                        </div>

                        <div className={styles.resultCard}>
                            <span className={styles.resultLabel}>
                                {labels.maxLoss[locale] || labels.maxLoss.en}
                            </span>
                            <span className={`${styles.resultValue} ${styles.loss}`}>${maxLoss.toFixed(2)}</span>
                            <span className={styles.resultUnit}>if SL hit</span>
                        </div>
                    </div>

                    <p className={styles.disclaimer}>
                        * EUR/USD standard lot = $10/pip. For micro accounts, divide lot size by 100.
                    </p>
                </div>
            </div>
        </section>
    );
}
