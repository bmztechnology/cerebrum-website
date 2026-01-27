# Market Regime Detection: The Context Filter

## I. Executive Summary

A trading strategy is rarely universally robust. A Trend Following system fails in chop. A Mean Reversion system fails in a crash. **Regime Detection** is the meta-level analysis that classifies the current market state to determine *which* strategy to deploy (or whether to stay cash). The failure to identify regime shifts (e.g., Low Volatility $\to$ High Volatility) is the primary cause of algorithmic drawdown.

## II. Formal Definitions

### Definition 2.1 (The Four Primary Regimes)
1.  **Bull Trend:** High Drift (+), Average Volatility.
2.  **Bear Trend:** High Drift (-), High Volatility.
3.  **Quiet Range:** Low Drift, Low Volatility.
4.  **Volatile Range (Chop):** Low Drift, High Volatility. (The most dangerous).

### Definition 2.2 (The ADF Test)
Augmented Dickey-Fuller test for Stationarity.
-   $H_0$ (Unit Root): Market is Trending.
-   $H_1$ (Stationary): Market is Ranging (Mean Reverting).

## III. Quantitative Indicators

### 3.1 ADX (Average Directional Index)
-   $ADX < 20$: Range Regime. $\to$ Activate Oscillators (Stoch, RSI).
-   $ADX > 25$: Trend Regime. $\to$ Activate Moving Averages.
-   $ADX > 50$: Overheated Trend (Climax). $\to$ Tighten Stops.

### 3.2 Volatility Ratio ($V_{ratio}$)
$$V_{ratio} = \frac{ATR(5)}{ATR(20)}$$
-   $V_{ratio} > 1.0$: Volatility Expanding (Breakout/Crisis).
-   $V_{ratio} < 1.0$: Volatility Contracting (Consolidation).

## IV. Strategic Applications

### 4.1 Regime Filtering
Strategy Code Structure:
`if Regime == TREND: Run_MA_Crossover()`
`elif Regime == RANGE: Run_Bollinger_Bounce()`
`else: Cash()`

### 4.2 The "Hurst Exponent" ($H$)
A measure of long-term memory of a time series.
-   $0 < H < 0.5$: Mean Reverting.
-   $H = 0.5$: Random Walk (Brownian Motion).
-   $0.5 < H < 1$: Trending (Persistent).

## V. Exercises

**Exercise 1 (Classification):**
Price moves: +10, -8, +9, -7, +8.
ADX is 12.
Volatility is low.
Classify the regime. Which strategy type should be active? (Scalping/Mean Reversion).

**Exercise 2 (Transition Risk):**
The market is in a "Quiet Range." You are selling Tops and buying Bottoms.
Suddenly, a Catalyst (War) hits.
Regime shifts to "Bear Trend" instantly.
What happens to your "Buy Bottom" value trade? (It catches a falling knife).
How does a volatility filter protect you?

**Exercise 3 (Fractal Regimes):**
Can the Weekly Chart be in a "Range" while the Hourly Chart is in a "Bull Trend"?
Yes. How do you trade this? (Trade the trend *of* the timeframe you execute on, but target the *bounds* of the higher timeframe).

## VI. References
-   Kaufman, P. (2013). *Trading Systems and Methods*.
-   Mandelbrot, B. (1997). *Fractals and Scaling in Finance*.
