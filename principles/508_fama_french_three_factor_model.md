# Fama French Three Factor Model: Dimensions

## I. Executive Summary

The **Fama-French Three Factor Model** (1993) expanded CAPM by adding two specific risk factors that empirically drive stock returns: **Size (SMB: Small Minus Big)** and **Value (HML: High Minus Low)**. It argues that the outperformance of Small Caps and Value stocks is not "Alpha" (skill), but compensation for systematic risks (distress risk, illiquidity) that Beta captures imperfectly.

## II. Formal Definitions

### Definition 2.1 (The Regression Equation)
$$ R_i - R_f = \alpha + \beta_1(R_m - R_f) + \beta_2 SMB + \beta_3 HML + \epsilon $$
-   **SMB:** Return of Small Cap stocks minus Big Cap stocks.
-   **HML:** Return of High Book-to-Market (Value) minus Low Book-to-Market (Growth).
-   **Alpha:** Should be zero if the model holds.

### Definition 2.2 (Interpretation)
Portfolio A has 15% return. Market 10%.
CAPM Alpha = 5%.
Fama-French: Portfolio A is 100% Small Cap Value.
Predicted Return = $R_f + 1.0(MRP) + 0.5(SMB) + 0.8(HML) = 15\%$.
FF Alpha = 0%.
The manager took factor risk, didn't generate skill.

## III. Theoretical Framework

### 3.1 Distress Risk
Why does Value (HML) pay a premium?
Fama/French argue Value stocks are distressed companies with high cost of capital.
In a depression, they die first.
Investors demand a premium to hold them.

### 3.2 The Disappearance of Size?
Post-1980s, the Size premium (SMB) has been weak or non-existent in US large markets.
However, it persists in controlling for Quality (QMJ). "Junk Small Caps" drag down the average. "Quality Small Caps" outperform.

## IV. Strategic Applications

### 4.1 Style Box Investing
Morningstar Style Box (Large/Small vs Value/Growth).
Direct application of Fama-French.
Ensures diversification not just across stocks, but across Factors.

### 4.2 Portable Beta
You can replicate a "Star Manager" who buys Small Value stocks by just buying an SMB ETF and an HML ETF.
"Factor Zoos."

## V. Exercises

**Exercise 1 (Negative Loadings):**
Growth Fund Beta to HML?
Negative.
Growth stocks correspond to the "L" in HML (Low Book to Market).
When Value rallies, Growth lags.

**Exercise 2 (The 5 Factor Model):**
Added **RMW** (Robust Minus Weak - Profitability) and **CMA** (Conservative Minus Aggressive - Investment).
Value (HML) loses explanatory power to Investment (CMA).
"Value companies are just those that don't over-invest."

## VI. References
-   Fama, E. & French, K. *Common Risk Factors in the Returns on Stocks and Bonds*.
-   Cochrane, J. *Asset Pricing*.
