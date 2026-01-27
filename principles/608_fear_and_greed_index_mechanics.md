# Fear and Greed Index Mechanics

## I. Executive Summary

**Fear and Greed** are the twin engines of market volatility. While amorphous emotions, they can be quantified using indicators like the **VIX**, **Put/Call Ratio**, and **Market Momentum**. The **Fear and Greed Index** (CNN) aggregates these signals to gauge market sentiment. Extreme Fear ($<20$) often signals a bottom (Capitulation), while Extreme Greed ($>80$) signals a top (Euphoria).

## II. Formal Definitions

### Definition 2.1 (VIX - The Fear Gauge)
Implied Volatility of S&P 500 options.
High VIX ($>30$) $\implies$ High cost of insurance $\implies$ Fear.
Low VIX ($<12$) $\implies$ Complacency.
It is mean-reverting.

### Definition 2.2 (Put/Call Ratio)
$Ratio = Volume_{Puts} / Volume_{Calls}$.
Ratio $> 1.0$: Bearish sentiment (Hedging dominant).
Ratio $< 0.6$: Bullish sentiment (Speculation dominant).
Contrarian Signal: If Ratio hits 1.5, market is oversold.

## III. Theoretical Framework

### 3.1 The Cycle of Emotions
1.  **Optimism:** Trend starts.
2.  **Excitement:** Momentum builds.
3.  **Euphoria:** Max financial risk (Greed).
4.  **Anxiety:** First dip.
5.  **Panic:** Crash (Fear).
6.  **Despondency:** Max financial opportunity.

### 3.2 Safe Haven Flows
Fear triggers flow from "Risk On" (Stocks, Crypto, EM) to "Risk Off" (USD, Treasuries, Gold).
Correlations converge to 1 in Risk Assets, -1 to Safe Havens.
"Flight to Quality."

## IV. Strategic Applications

### 4.1 Fading Extremes
Strategy:
Buy SPY when Fear Index < 10.
Sell SPY when Fear Index > 90.
Requires "catching a falling knife."
Psychologically difficult but statistically profitable.

### 4.2 Junk Bond Demand
Spread between Junk Bonds and Investment Grade.
Narrow Spread $\implies$ Greed (Reaching for Yield).
Wide Spread $\implies$ Fear (Credit stress).
Using Credit Spreads as a leading indicator for Equities.

## V. Exercises

**Exercise 1 (VIX Term Structure):**
Contango (Normal): Spot VIX < Future VIX. Fear is low.
Backwardation (Crisis): Spot VIX > Future VIX. Panic is present.
Trading VIX ETPs (VXX) depends on this roll yield.

**Exercise 2 (Momentum vs Sentiment):**
Momentum says "Buy Strength."
Sentiment says "Sell Euphoria."
Conflict?
Momentum works in the middle of the cycle (20-80). Sentiment works at the tails (0-20, 80-100).

## VI. References
-   Lo, A. *The Adaptive Markets Hypothesis*.
-   CNN Money *Fear & Greed Index Methodology*.
