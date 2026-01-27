# Keltner Channels: Volatility-Adaptive Technical Envelopes

## I. Introduction

Keltner Channels are a volatility-based envelope indicator that creates an adaptive channel around price movement. Originally introduced by Chester Keltner in the 1960s using High-Low ranges, they were later modified by Linda Raschke to use the Average True Range (ATR), becoming the modern standard. Unlike Bollinger Bands which use standard deviation (assuming normal distribution), Keltner Channels use absolute volatility measures, providing a more stable envelope less prone to "ballooning" during extreme variance.

## II. Formal Definitions

### Definition 2.1 (Center Line)
The central axis of the Keltner Channel is typically an Exponential Moving Average (EMA) of the closing prices:

$$CenterLine_n(t) = EMA_n(P_{close}, t)$$

Where $n$ is typically 20 periods.

### Definition 2.2 (Channel Bands)
The Upper ($B_U$) and Lower ($B_L$) bands are displaced from the center line by a multiple $k$ of the Average True Range (ATR):

$$B_U(t) = CenterLine_n(t) + k \cdot ATR_m(t)$$
$$B_L(t) = CenterLine_n(t) - k \cdot ATR_m(t)$$

Standard parameters: $n=20$ (EMA period), $m=10$ (ATR period), $k=2.0$ or $2.5$ (Multiplier).

## III. Analytical Properties

### 3.1 Volatility Sensitivity
Since ATR measures absolute price movement rather than variance from the mean (like Standard Deviation), Keltner Channels react linearly to volatility increases.

**Proposition:** For a given price series $P_t$, Keltner Channels ($KC$) are generally narrower than Bollinger Bands ($BB$) during expansion phases if $P_t$ follows a leptokurtic distribution (fat tails), as $\sigma$ expands quadratically relative to outlier magnitude, while ATR expands linearly.

### 3.2 Trend Identification
-   **Ascending Channel:** $\frac{d}{dt} CenterLine(t) > 0$
-   **Descending Channel:** $\frac{d}{dt} CenterLine(t) < 0$

## IV. Applications in Quantitative Trading

### 4.1 Trend Following (The "Keltner Breakout")
A close above the Upper Band indicates strength that exceeds typical volatility, suggesting a continuation of momentum rather than an overbought condition.

**Signal:**
$$P_{close}(t) > B_U(t) \land P_{close}(t-1) \le B_U(t-1)$$

### 4.2 Mean Reversion (Trend Pullback)
In a defined strong trend (e.g., $ADX > 25$), price retracements to the Center Line or Lower Band (in an uptrend) offer high-probability entry points.

**Strategy:**
1.  Identify Uptrend ($Slope(EMA_{20}) > \theta$).
2.  Wait for $Low(t) \le CenterLine(t)$.
3.  Enter Long on confirmation (e.g., candlestick pattern).

### 4.3 TTM Squeeze (Volatility Compression)
A consolidated market state is defined when Bollinger Bands move *inside* the Keltner Channels.
$$BB_{Width}(t) < KC_{Width}(t)$$
This signals a period of extremely low volatility, often preceding a major explosive move.

## V. Exercises

**Exercise 1:** calculate the width of the Keltner Channel for a stock with $ATR_{10} = 2.50$ and multiplier $k=2$. How much does the price need to move from the EMA to touch the upper band?

**Exercise 2:** Compare the Keltner Channel and Bollinger Band widths. Prove that if the price action consists of alternating $+ \Delta$ and $- \Delta$ moves (constant volatility), $KC_{width}$ is constant, whereas $BB_{width}$ depends on the calculation window of $\sigma$.

**Exercise 3:** Modify the Keltner Channel formula to use a 'Median Price' $\frac{High+Low}{2}$ instead of Close for the Center Line. How does this affect signal latency?

## VI. References
-   Keltner, C. (1960). *How To Make Money in Commodities*.
-   Raschke, L.B., & Connors, L.A. (1996). *Street Smarts: High Probability Short Term Trading Strategies*.
-   Carter, J. (2012). *Mastering the Trade*.
