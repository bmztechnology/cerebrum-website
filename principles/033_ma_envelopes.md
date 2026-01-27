# Moving Average Envelopes: Percentage Band Analysis

## I. Introduction

Moving Average Envelopes are a technical indicator consisting of two bands plotted at a fixed percentage deviation above and below a central Moving Average. They are precursors to Bollinger Bands and Keltner Channels, providing a straightforward method to identify overbought/oversold conditions and trend limits based on percentage relativity rather than volatility metrics.

## II. Formal Definitions

### Definition 2.1 (Envelope Construction)
Let $MA_n(t)$ be a Moving Average (Simple or Exponential) of period $n$.
Let $x$ be the percentage deviation (e.g., 0.02 for 2%).

The bands are defined as:
$$UpperBand(t) = MA_n(t) \times (1 + x)$$
$$LowerBand(t) = MA_n(t) \times (1 - x)$$

## III. Analytical Properties

### 3.1 Linearity vs Volatility
Unlike Bollinger Bands, which expand and contract with realized volatility ($\sigma$), Envelopes remain at a constant relative distance.
-   **Advantage:** Stable boundaries that don't whipsaw during brief volatility spikes.
-   **Disadvantage:** Can lag significantly if the market structural volatility shifts permanently (e.g., from quiet summer trading to crisis mode).

### 3.2 The Normality Assumption
Envelopes assume that price action is generally contained ($P \approx 90-95\%$) within a certain percentage drift from the mean trend.
Excursions outside the bands represent $\alpha$-events or statistical anomalies.

## IV. Optimization of Parameters

### 4.1 Determining the coefficient $x$
The value of $x$ is asset-dependent.
-   **EUR/USD:** Low volatility $\implies x \approx 0.5\% - 1.0\%$
-   **GBP/JPY:** High volatility $\implies x \approx 1.5\% - 3.0\%$
-   **Crypto:** Extreme volatility $\implies x \approx 5.0\% - 10.0\%$

**Procedure:**
Adjust $x$ historically so that the bands contain approximately 90% of price action, leaving only significant extremes as signals.

## V. Trading Strategies

### 5.1 Mean Reversion (Range Market)
In a sideways market (Slope of MA $\approx 0$):
-   **Sell** when Price touches Upper Band.
-   **Buy** when Price touches Lower Band.

### 5.2 Breakout Filter (Trending Market)
In a strong trend, the bands act as entry zones.
-   **Wait** for a pullback to the MA or Lower Band (in uptrend).
-   **Breakout:** A sustained close *outside* the envelope may indicate a "paradigm shift" or extreme momentum, but usually warrants caution relative to regression risk.

## VI. Exercises

**Exercise 1:** Calculate the Upper and Lower Envelope values for a price of 1.2000 using a 20-period SMA of 1.1950 and a deviation factor of 0.5%.

**Exercise 2:** Prove that for small values of $x$, the width of the envelope ($Upper - Lower$) is approximately proportional to the Moving Average value.
$$Width \approx 2 \cdot x \cdot MA$$

**Exercise 3:** You are trading a pair where daily volatility has doubled due to a central bank crisis. What happens to the reliability of your fixed-percentage Envelopes? How should you adjust $x$?

## VII. References
-   Appel, G. (2005). *Technical Analysis: Power Tools for Active Investors*.
-   Pring, M.J. (2002). *Technical Analysis Explained*.
