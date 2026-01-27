# Credit Barbell Strategy: Optimization

## I. Executive Summary

A **Credit Barbell** combines **Short-Duration High Yield** (or Credit) bonds with **Long-Duration High Quality** (Treasuries/Munis) bonds. The strategy seeks to capture two independent risk premia: the **Credit Spread** at the short end (where default risk is priced but rate risk is low) and the **Duration Premium** (or hedge value) at the long end. It creates a robust portfolio that can perform in growth (Credit wins) and recession (Treasuries win).

## II. Formal Definitions

### Definition 2.1 (The Mix)
-   **Asset A:** 2-Year High Yield Corp (BB). Yield 7%. Duration 1.8.
-   **Asset B:** 30-Year Treasury. Yield 4%. Duration 18.
-   **Portfolio:** 70% Asset A / 30% Asset B.
Yield $\approx 6\%$. Duration $\approx 6.5$.

### Definition 2.2 (Correlation Benefit)
Correlation(HY, Treasuries) $\approx -0.4$.
Risk On: HY Tightens, Treasuries Sell off.
Risk Off: HY Widens, Treasuries Rally.
Diversification reduces portfolio volatility compared to a Bullet corporate bond.

## III. Theoretical Framework

### 3.1 Efficiency Frontier
Why short HY?
HY Credit curves are often flat or inverted (spreads wide at short end due to immediate bankruptcy fears).
You get "Equity-like" returns for short risk.
Why Long Treasury?
Max convexity. Max hedge effectiveness.
Middle of the curve (10Y BBB) is "Dead Money" (High rate risk + Medium credit risk + High correlation).

### 3.2 Smart Beta
Constructing a "Better Aggregate Index."
Most indices are weighted by issuance (Long debt $\implies$ High weight).
Credit Barbell optimizes for Sharpes Ratio.

## IV. Strategic Applications

### 4.1 2008 and 2020 Performance
Credit Barbell outperformed.
The Long Treasury leg offset the HY crash.
Rebalancing (Selling rallied Treasuries to buy cheap HY) generated huge alpha in recovery.

### 4.2 Inflation Risk
Achilles Heel: Stagflation.
Rates Rise (Treasuries fall).
Economy Slows (HY falls).
Both legs lose.
(See: 2022).
Need to add TIPS or Commodities to the Barbell.

## V. Exercises

**Exercise 1 (Muni Barbell):**
Short HY Muni (Tobacco). Long AAA Muni (GO).
Tax efficient version.
High income + Safety.

**Exercise 2 (Volatility Dampener):**
Adjusting the ratio.
If VIX spikes, shift to Long Treasuries.
If VIX falls, shift to Short HY.

## VI. References
-   Ilmanen, A. *Time Variation in Asset Returns*.
-   Leibowitz, M. *The Endowment Model of Investing*.
