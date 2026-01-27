# Mean Reversion: Statistical Arbitrage and Elasticity

## I. Executive Summary

Mean Reversion is the financial theory suggesting that asset prices, volatility, and historical returns will eventually return to the long-run mean or average level of the entire dataset. It is the antithesis of Momentum. While Momentum assumes $P_{t+1}$ depends positively on $P_t - P_{t-1}$, Mean Reversion assumes a negative dependence. "What goes up must come down." Strategies here are often likened to "picking up nickels in front of a steamroller"—high win rates, small wins, but potentially catastrophic tail risk.

## II. Formal Definitions

### Definition 2.1 (Ornstein-Uhlenbeck Process)
The standard mathematical model for mean-reverting series.
$$dP_t = \theta (\mu - P_t)dt + \sigma dW_t$$
-   $\mu$: Long-term mean (equilibrium).
-   $\theta$: Rate of mean reversion (gravity).
-   $\sigma$: Volatility.
-   $dW_t$: Wiener process (noise).

### Definition 2.2 (Stationarity)
A time series is stationary if its statistical properties (mean, variance) are constant over time.
Tests: **Augmented Dickey-Fuller (ADF)** Test.
-   $p < 0.05 \implies$ Stationary (Mean Reverting).
-   $p > 0.05 \implies$ Non-Stationary (Random Walk/Trend).

## III. Theoretical Framework

### 3.1 The Rubber Band Analogy
Prices can stretch away from the moving average, but tension increases with distance (Z-score).
$$Force_{restore} \propto Distance$$
Eventually, the force of valuation/arbitrage overcomes the momentum, snapping price back.

### 3.2 Bollinger Band Strategy
Using standard deviation bands:
-   **Upper Band ($+2\sigma$):** Overbought. Signal to Short.
-   **Lower Band ($-2\sigma$):** Oversold. Signal to Buy.
*Critical Flaw:* In a strong trend, price "rides the bands" (The Walk). Shorting continuously at $+2\sigma$ leads to ruin (The Steamroller).

### 3.3 RSI (Relative Strength Index)
$$RSI = 100 - \frac{100}{1+RS}$$
Values > 70 suggest overextension.
*Advanced:* "RSI 2" strategy (Larry Connors). Extreme short-term mean reversion. Buy if RSI(2) < 5. Exit if price > SMA(5).

## IV. Determining the "Mean"

### 4.1 Fixed Mean (For Ranges)
During consolidation, the mean is a horizontal line (e.g., Pivot Point).
Strategies: Buy Support, Sell Resistance.

### 4.2 Moving Mean (For Trends)
In a trend, the "mean" is dynamic (e.g., EMA 20).
Strategy: "Pullback Trading."
-   The asset is not reverting to a fixed price, but to a *value zone*. Buy the dip to the EMA.

## V. Statistical Arbitrage Models

### 5.1 Z-Score Signal
$$Z_t = \frac{P_t - MA_n(t)}{\sigma_n(t)}$$
-   Entry: $|Z_t| > 2.0$.
-   Exit: $Z_t \approx 0$.
-   Stop: $|Z_t| > 4.0$ (Regime shift / Stop Loss).

### 5.2 Half-Life Calculation
From the Ornstein-Uhlenbeck fit ($\theta$):
$$HalfLife = \frac{\ln(2)}{\theta}$$
This tells you the expected time for the price to revert halfway to the mean.
*Insight:* Ideally, hold the trade for $\approx$ Half-Life.

## VI. Exercises

**Exercise 1 (Z-Score):**
Price = 105. SMA(20) = 100. StdDev(20) = 2.
a) Calculate Z.
b) Is this a high-probability short entry?
c) If Price jumps to 110, what is the new Z? (assume SMA/StdDev constant for simplicity).

**Exercise 2 (The Widow-Maker Trade):**
You are shorting a mean-reverting pair. It goes against you ($Z=3$). You double down (Martingale). It goes to $Z=4$.
Explain the mathematical risk of "Gambler's Ruin" in Mean Reversion strategies without a hard stop.

**Exercise 3 (Regime Filter):**
Why does Mean Reversion fail when ADX > 30?
(Hint: Use the definitions of Stationarity vs Random Walk).

## VII. References
-   Chan, E. (2013). *Algorithmic Trading: Winning Strategies and Their Rationale*.
-   Thorp, E.O. (1967). *Beat the Market*.
-   Connors, L. (2009). *Short Term Trading Strategies That Work*.
