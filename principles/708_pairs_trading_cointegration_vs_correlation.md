# Pairs Trading Cointegration vs Correlation

## I. Executive Summary

**Pairs Trading** is the grandfather of Statistical Arbitrage. It involves identifying two assets that move together (e.g., KO/PEP, RDS-A/RDS-B) and trading the **Spread** between them. A critical distinction is between **Correlation** (Directional similarity) and **Cointegration** (Stationary spread). High correlation does *not* guarantee mean reversion of the spread; only cointegration does. This distinction separates professional Quants from amateurs.

## II. Formal Definitions

### Definition 2.1 (Cointegration)
Engle & Granger.
Two non-stationary series $X_t, Y_t$ (Random Walks) are cointegrated if a linear combination $Z_t = Y_t - \beta X_t$ is stationary (Mean reverting).
Stationarity implies $E[Z_t] = \mu$ and $Var(Z_t) = \sigma^2$.
If $Z_t$ deviates from $\mu$, it *must* return. This is the Arb.

### Definition 2.2 (The Spread trade)
Buy $Y$, Sell $\beta X$.
Profit = Spread Convergence.
Market Neutral: Beta to the market is zero (if hedge ratio $\beta$ is calculated correctly).
Risk: "Break in Cointegration" (Fundamental divergence, e.g., M&A).

## III. Theoretical Framework

### 3.1 Distance Method (Gatev)
Sum of Squared Differences (SSD).
Simple, non-parametric.
Normalize prices. Calculate Euclidean distance.
Trade when distance $> 2\sigma$.
Robust but ignores the dynamic relationship.

### 3.2 Error Correction Model (ECM)
$\Delta Y_t = \alpha (Y_{t-1} - \beta X_{t-1}) + \epsilon_t$.
$\alpha$ is the speed of mean reversion.
Higher $\alpha \implies$ Faster profit, Lower risk.
Lower $\alpha \implies$ "Widow maker" trade (Drift).

## IV. Strategic Applications

### 4.1 Hedge Ratio Calculation
Using OLS regression: $Y = \beta X + \epsilon$.
Problem: OLS assumes static Beta.
Solution: **Kalman Filter**.
Updates the Beta $\beta_t$ dynamically with every Tick.
Essential for HFT pairs trading where relationships evolve intraday.

### 4.2 Risk Management
Stop Loss on a Mean Reversion strategy?
Theory says: "If it diverges further, it's an even better entry."
Reality says: "The relationship broke."
Hard stop at $4\sigma$ deviation is standard practice.
"Don't catch a falling knife" applies even to pairs.

## V. Exercises

**Exercise 1 (Spurious Correlation):**
Generate two Random Walks.
Calculate correlation.
Often high (0.9) just by chance.
Test for Cointegration (Augmented Dickey-Fuller).
Likely fails.
Trading them leads to ruin (spread walks away randomly).

**Exercise 2 (The Royal Dutch Shell Arb):**
Twin shares.
Deviated by 15% from parity.
LTCM bet big on convergence.
It diverged further.
"Markets can remain irrational longer than you can remain solvent."

## VI. References
-   Vidyamurthy, G. *Pairs Trading: Quantitative Methods and Analysis*.
-   Engle, R. & Granger, C. *Co-integration and Error Correction*.
