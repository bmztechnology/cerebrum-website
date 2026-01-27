# The Average Directional Index (ADX): Measuring Trend Strength

## I. Executive Summary

The Average Directional Index (ADX) is a unique technical indicator developed by J. Welles Wilder in 1978. Unlike most oscillators (RSI, Stochastics) which attempt to identify the *direction* of the price or overbought/oversold levels, the ADX measures purely the **strength** of the trend, regardless of valid vector. For the algorithmic trader, ADX is the primary "Regime Filter" that determines whether to deploy a Trend Following system or a Mean Reversion system.

## II. Formal Definitions

### Definition 2.1 (Directional Movement - DM)
Determine the directional bias of the current bar relative to the previous:
-   $UpMove = High_t - High_{t-1}$
-   $DownMove = Low_{t-1} - Low_t$

If $UpMove > DownMove$ and $UpMove > 0$:
$$+DM = UpMove, \quad -DM = 0$$
If $DownMove > UpMove$ and $DownMove > 0$:
$$-DM = DownMove, \quad +DM = 0$$
Otherwise: $+DM = 0, -DM = 0$.

### Definition 2.2 (Directional Indicators - DI)
Smoothed averages of DM, normalized by volatility (TR).
$$+DI_{14} = 100 \times \frac{Smoothed(+DM)}{ATR_{14}}$$
$$-DI_{14} = 100 \times \frac{Smoothed(-DM)}{ATR_{14}}$$

### Definition 2.3 (The ADX Formula)
The DX is the ratio of the difference to the sum:
$$DX = 100 \times \frac{|(+DI) - (-DI)|}{(+DI) + (-DI)}$$
$ADX = \text{Smoothed Moving Average}(DX)$

## III. Theoretical Framework

### 3.1 The Non-Directional Nature
ADX ranges from 0 to 100.
High ADX (50) means Strong Trend. It does NOT say Up or Down.
You must check $(+DI > -DI)$ for Up, or $(-DI > +DI)$ for Down.

### 3.2 The Thresholds (Wilder's Zones)
-   **0-20:** Weak Trend (Chop/Range). **Warning:** Do not trade Breakouts.
-   **20-25:** The "Grey Zone." Trend is birthing.
-   **25-50:** Strong Trend. "The Sweet Spot."
-   **50-75:** Very Strong Trend.
-   **75-100:** Extreme Trend (Climax/Bubble).

## IV. Strategic Applications

### 4.1 The "Holy Grail" Setup (Linda Raschke)
1.  **Condition:** ADX(14) > 30 (Strong Trend established).
2.  **Pullback:** Price retraces to the 20 EMA.
3.  **Trigger:** Price resumes trend.
*Logic:* High ADX confirms the "Tide" is strong enough to lift the "Boat" after a pause.

### 4.2 Divergence on ADX
Price makes a Higher High.
ADX makes a Lower High.
*Interpretation:* The trend is continuing, but the **velocity** of the trend implies exhaustion. It is losing momentum. Prepare for a reversal or consolidation.

## V. Exercises

**Exercise 1 (Calculation Logic):**
Day 1: High 10, Low 8.
Day 2: High 11, Low 9.
a) Calculate UpMove (11-10=1).
b) Calculate DownMove (8-9=-1 $\to$ 0).
c) Result: $+DM = 1, -DM = 0$.
Day 3: High 11, Low 7.
a) UpMove (11-11=0).
b) DownMove (9-7=2).
c) Result: $+DM = 0, -DM = 2$ (Inside bar expansion).

**Exercise 2 (System Design):**
Design a filter.
Strategy A: Moving Average Crossover (Trend).
Strategy B: Bollinger Band Fade (Range).
Code: `if ADX > 25: Trade(Strategy A) else: Trade(Strategy B)`.
What happens if you run Strategy A when ADX is 15? (Whipsaw).

**Exercise 3 (Lag):**
ADX is a smoothed average of a smoothed average of range data. It is extremely slow.
How can this cause losses at the *start* of a V-Shape reversal? (ADX will still be reading "Strong Trend" while price is crashing).

## VI. References
-   Wilder, J.W. (1978). *New Concepts in Technical Trading Systems*.
-   LeBeau, C. & Lucas, D. *Technical Traders Guide to Computer Analysis*.
