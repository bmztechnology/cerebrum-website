# CTA Trend Following Managed Futures

## I. Executive Summary

**CTAs (Commodity Trading Advisors)** use systematic **Trend Following** models to trade Futures across all asset classes (Equities, Bonds, Commodities, FX). The philosophy is **Price Action** driver: "If it's going up, buy it. If it's going down, sell it." CTAs provide **Crisis Alpha** because they naturally short crashing markets (Downtrend) and long rallying safe havens (bonds).

## II. Formal Definitions

### Definition 2.1 (The Moving Average Crossover)
Signal: SMA(50) crosses above SMA(200) $\implies$ Buy.
Signal: SMA(50) crosses below SMA(200) $\implies$ Sell.
Trend Lengths: Short-term (days), Medium-term (months), Long-term (years).
Diversification: Trade 100 markets. If 90 are flat (Whipsaw losses), but 10 trend hard (Big wins), the fund profits.

### Definition 2.2 (Lookback Bias)
Optimizing parameters on past data.
"Fitting the curve."
Does a 43-day MA work better than 40-day?
Danger.
Robust systems use ensembles of parameters to avoid overfitting.

## III. Theoretical Framework

### 3.1 Divergent vs Convergent
**Convergent:** Mean Reversion. Profits if market is stable. (Short Vol).
**Divergent:** Trend Following. Profits if market moves to new unknown levels. (Long Vol).
CTAs are Divergent.
Autocorrelation of returns is positive.

### 3.2 Capacity Constraints
Can a Trend Follower run \$100B?
Yes, in deep markets (Treasuries, Eurodollar, S&P).
No, in shallow markets (Cocoa, Lumber).
Large CTAs (Man AHL, Winton) forced to slow down models to reduce slippage.

## IV. Strategic Applications

### 4.1 The 60/40 Hedge
2022: Stocks down, Bonds down. 60/40 Portfolio crashed.
CTAs: Shorted Stocks. Shorted Bonds (Inflation trend).
Up +30%.
CTAs replaced Bonds as the diversifier.

### 4.2 Time Series Momentum (TSMOM)
Moskowitz paper.
Asset's own past return predicts future return.
Distinct from Cross-Sectional Momentum (Stock A vs Stock B).
TSMOM works because of behavioral herding and anchor bias.

## V. Exercises

**Exercise 1 (The Whipsaw):**
Market goes up 5%. Signal Buy.
Market goes down 5%. Signal Sell.
Range-bound market kills CTAs.
"Death by a thousand cuts."

**Exercise 2 (Volatility Targeting):**
Adjust position size based on current Vol.
If Vol doubles, halve the position.
Keeps risk constant.
Allows surviving the tails.

## VI. References
-   Greyserman, A. *Trend Following with Managed Futures*.
-   Covel, M. *Trend Following*.
