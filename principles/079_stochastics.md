# Stochastics: The Momentum Oscillator

## I. Executive Summary

The Stochastic Oscillator, developed by George Lane in the 1950s, is based on a foundational observation of momentum physics: "Momentum changes direction before price." It compares the Closing Price of an asset to its Price Range over a given period of time. It is a bound oscillator (0-100) used primarily to identify Overbought/Oversold conditions and Divergences in non-trending (mean-reverting) markets.

## II. Formal Definitions

### Definition 2.1 (The %K Line)
The fast-moving main signal line.
$$\%K = 100 \times \frac{C_t - L_n}{H_n - L_n}$$
Where:
-   $C_t$ = Current Close.
-   $L_n$ = Lowest Low in lookback period $n$ (default 14).
-   $H_n$ = Highest High in lookback period $n$.

### Definition 2.2 (The %D Line)
The signal line (Moving Average of %K).
$$\%D = SMA_3(\%K)$$

### Definition 2.3 (Slow Stochastics)
To reduce noise, modern traders use the "Slow" version:
-   New %K = Old %D.
-   New %D = $SMA_3(\text{New } \%K)$.

## III. Theoretical Framework

### 3.1 The Closing Logic
-   **Uptrend:** Price tends to close near the High of the periodic range.
-   **Downtrend:** Price tends to close near the Low.
-   **Turning Point:** If price makes a new High but closes near the Low of the day, Stopschastics drops rapidly, signaling shifting momentum.

### 3.2 Zones
-   **80-100 (Overbought):** Accumulation of selling pressure potential.
-   **0-20 (Oversold):** Accumulation of buying pressure potential.
*Criticism:* In a strong trend, price can stay Overbought (Stoch > 80) for weeks. Selling purely because "Stoch is 80" is a bankruptcy strategy ("The Oscillator Trap").

## IV. Strategic Applications

### 4.1 Crossover Strategy (Range Only)
1.  **Context:** Market is in a Range (ADX < 20).
2.  **Signal:** %K crosses above %D from *below* the 20 level.
3.  **Trade:** Go Long. Target 80 level.

### 4.2 The "Pop" Technique (Trend)
Contrary to the "Fade" logic.
1.  **Signal:** Stoch crosses *above* 80.
2.  **Concept:** This indicates extreme momentum impulse.
3.  **Trade:** Buy the breakout. Hold until Stoch crosses back below 80.

## V. Exercises

**Exercise 1 (Calculation):**
Lookback 5 days.
Prices Highs: 10, 12, 11, 14, 13. ($H_5 = 14$).
Prices Lows: 8, 9, 8, 10, 9. ($L_5 = 8$).
Current Close: 11.
Calculate %K.
$$K = 100 \times \frac{11 - 8}{14 - 8} = 100 \times \frac{3}{6} = 50$$
Interpretation: Price closed exactly in the middle of the range. Neutral.

**Exercise 2 (Divergence):**
Price makes a Double Top.
Peak 1: 1.2000, Stoch 95.
Peak 2: 1.2000, Stoch 80.
Is this divergence? (Yes, Bearish). Why is the oscillator lower? (Because the Close relative to the High/Low range was weaker on the second attempt).

**Exercise 3 (False Signals):**
Market crashes. Stoch hits 5 (Oversold).
Market crashes more. Stoch stays at 2.
Why didn't it bounce? (Because $C_t$ kept closing at $L_n$, pinning the formula to 0).

## VI. References
-   Lane, G. (1984). *Lane's Stochastics*.
-   Murphy, J.J. *Technical Analysis of the Financial Markets*.
