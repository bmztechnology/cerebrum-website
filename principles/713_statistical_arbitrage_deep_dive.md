# Statistical Arbitrage Deep Dive

## I. Executive Summary

**Statistical Arbitrage (Stat Arb)** is a class of quantitative strategies that exploit short-term pricing anomalies across a large universe of assets. Unlike Pairs Trading (2 assets), Stat Arb typically trades hundreds or thousands of stocks simultaneously (Long/Short portfolios) to diversify idiosyncratic risk. It relies on **Factor Models**, **Mean Reversion**, and **Momentum**, harvesting small edges with high frequency and high turnover.

## II. Formal Definitions

### Definition 2.1 (PCA Factor Model)
Decompose returns $R_i = \beta_i F + \epsilon_i$.
$F$ = Systematic Factors (Sector, Market, Rates).
$\epsilon_i$ = Idiosyncratic Residual.
Stat Arb bets on the reversion of $\epsilon_i$.
"The stock is 2% up, but the Sector is 0% up and its Beta is 1.0. Therefore $\epsilon = +2\%$. Sell."
Betting that the residual is noise.

### Definition 2.2 (The OU Process)
Ornstein-Uhlenbeck process.
$d \epsilon_t = \theta (\mu - \epsilon_t) dt + \sigma dW_t$.
Models the mean reversion of the residual.
Strategy: Sell when $\epsilon > \text{Threshold}$. Buy when $\epsilon < -\text{Threshold}$.
Halflife of reversion determines holding period (Hours to Days).

## III. Theoretical Framework

### 3.1 Lo & MacKinlay (1990)
Contrarian Profits.
Buying losers / Selling winners.
PnL comes from:
1. Cross-serial correlation (Lead-Lag between big/small stocks).
2. Overreaction (Mean reversion).
Stat Arb industrializes this.

### 3.2 Portfolio Construction
Optimization: Maximize $\alpha^T w - \lambda w^T \Sigma w$.
Subject to: $\sum w_i = 0$ (Market Neutral). $\sum |w_i| = Leverage$.
Using an optimizer (Barra / Axioma) to ensure the bet is purely on the Alphas, minimizing exposure to unwanted Factors (e.g., Oil, Interest Rates).

## IV. Strategic Applications

### 4.1 Dispersion Trading
Selling volatility on the Index (SPX). Buying volatility on Components (AAPL, MSFT...).
If Correlation drops, Components move wildly, Index stays flat.
Stat Arb profits from low correlation environments (Stock Picking environment).

### 4.2 Earnings Drift vs Reversion
Conflict.
Post Earnings Announcement Drift (Momentum) says "Buy the Beat."
Mean Reversion says "Sell the Spike."
Sophisticated Stat Arb models regime-switch: "If News Volume is High, follow Momentum. If News is Silent, follow Mean Reversion."

## V. Exercises

**Exercise 1 (The Z-Score):**
Calculate Rolling Z-score of spread.
$Z = \frac{Price - MA}{StdDev}$.
Signal: Short at $Z > 2$, Cover at $Z = 0$.
Simple, yet the baseline for most strategies.

**Exercise 2 (Survivorship Bias):**
Backtesting Stat Arb on universe.
Must include delisted stocks.
Losers often go to zero.
If excluded, Mean Reversion looks magical (because you only test on survivors).

## VI. References
-   Avellaneda, M. & Lee, J. *Statistical arbitrage in the US equities market*.
-   Pole, A. *Statistical Arbitrage: Algorithmic Trading Insights and Techniques*.
