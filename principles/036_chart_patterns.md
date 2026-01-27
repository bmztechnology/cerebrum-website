# Classical Chart Patterns: Geometry of Market Psychology

## I. Executive Summary

Classical Chart Patterns form the bedrock of technical analysis. They represent recurring geometric configurations in price time series that signal the potential future direction of the asset. Unlike random noise, these patterns emerge from the collective psychology of market participants (greed, fear, uncertainty, and consensus). This chapter categorizes patterns into **Reversal** and **Continuation** structures and analyzes them through the lens of supply/demand imbalances and volume validation.

## II. Historical Context

The study of chart patterns dates back to the early 20th century, with Charles Dow establishing the premise that "price discounts everything." However, it was **Richard W. Schabacker** in the 1930s who systematized pattern recognition, calling it "technical analysis." His work was later standardized by **Edwards and Magee** in their 1948 seminal work, *Technical Analysis of Stock Trends*, which remains the academic standard for classical patterning.

## III. Formal Definitions

A chart pattern is defined by a set of local extrema:
1.  **Local Maxima ($H_i$):** Peaks representing resistance (Supply > Demand).
2.  **Local Minima ($L_i$):** Troughs representing support (Demand > Supply).
3.  **Neckline/Boundary:** A linear regression or trendline connecting these extrema.

### Definition 3.1 (Breakout)
A pattern is "completed" or "valid" only when price $P(t)$ significantly penetrates the boundary line $B(t)$ with expanded volume $V(t) > \bar{V}$.

## IV. Reversal Patterns (Trend Termination)

Reversal patterns indicate a shift in the underlying trend regime (e.g., from Bull to Bear).

### 4.1 Head and Shoulders (H&S)
The most reliable reversal pattern ($Success Rate \approx 83\%$).
-   **Structure:**
    1.  **Left Shoulder (LS):** Rally to peak A, decline to B.
    2.  **Head (H):** Rally to higher peak C, decline to D.
    3.  **Right Shoulder (RS):** Rally to lower peak E, decline to Neckline.
-   **Neckline:** The line connecting B and D.
-   **Psychology:** The failure of the Right Shoulder to make a new high (E < C) indicates the bulls are exhausted. The break of the neckline indicates bears have seized control.
-   **Projected Target:** $Target = P_{breakout} - (P_{Head} - P_{Neckline})$.

### 4.2 Double Top / Double Bottom ("M" and "W")
-   **Double Top:** Two peaks at approximately the same level.
    -   *Mechanics:* Price hits resistance ($R$), retreats, retests $R$ (Bulls try one last time), fails, and breaks the intervening trough.
-   **Validation:** The peaks must be separated by time (at least 2-4 weeks for Daily charts) to be significant.
-   **Volume Profile:** Volume on the second peak should be significantly lower than the first (Divergence), confirming lack of conviction.

### 4.3 Rising/Falling Wedge
-   **Rising Wedge:** Higher Highs and Higher Lows, but the range is contracting (slope of lows > slope of highs).
    -   *Implication:* Bearish Reversal. Although price is rising, the momentum is fading.
-   **Falling Wedge:** Lower Highs and Lower Lows, contracting range.
    -   *Implication:* Bullish Reversal. Selling pressure is drying up.

## V. Continuation Patterns (Trend Pauses)

Continuation patterns represent periods of consolidation or "digestion" of gains/losses before the primary trend resumes.

### 5.1 The Flag and Pennant
-   **The Pole:** A sharp, nearly vertical price move on high volume.
-   **The Flag:** A rectangular channel sloping against the trend.
-   **The Pennant:** A small symmetrical triangle.
-   **Duration:** Short-term (1-3 weeks).
-   **Dynamics:** Profit-taking by early entrants + Value buying by late entrants.
-   **Target:** Measured Move = Length of Pole projected from Breakout.

### 5.2 Symmetrical Triangle (Coil)
-   **Structure:** Lower Highs and Higher Lows converging to a vertex.
-   **Psychology:** Compression of energy. Volatility ($\sigma$) decreases as the market awaits a catalyst.
-   **Breakout:** Can be in either direction, but usually follows the prior trend.

### 5.3 Cup and Handle (O'Neil)
A specific long-term bullish continuation pattern.
-   **Cup:** Round "U" shape bottom (accumulation).
-   **Handle:** Slight downward drift (shaking out weak hands).
-   **Breakout:** Above the rim of the cup.

## VI. Theoretical Framework: Volume Validation

Volume acts as the vector of truth.
$$Force = Mass \times Acceleration$$
$$MarketForce = Volume \times PriceChange$$

1.  **Confirmation:** A breakout on low volume is likely a **False Breakout** (Trap).
2.  **Advance/Decline:** In an uptrend, volume should increase on rallies and decrease on pullbacks ("Volume goes with the trend").
3.  **Climax:** Excessive volume at a pattern boundary without price progress indicates "Churn" (Smart money exiting).

## VII. Practical Application

### 7.1 Entry Tactics
1.  **Aggressive:** Enter *within* the pattern near the boundary (Trendline bounce). Higher R:R, lower Win Rate.
2.  **Breakout:** Enter when price crosses the neckline. Prone to "whipsaws."
3.  **Retest (Conservative):** Wait for price to break, then return to the neckline (now reversed Support/Resistance). Enter on rejection.

### 7.2 The "Throwback" and "Pullback"
-   **Throwback:** Price breaks resistance, then falls back to test it from above.
-   **Pullback:** Price breaks support, then rises to test it from below.
*Statistic:* Occurs in ~40-60% of major breakouts.

## VIII. Case Studies

### 8.1 The "Bull Trap" of 2008 (S&P 500)
In late 2007, the S&P 500 formed a massive Head & Shoulders top. The breakout occurred in Jan 2008. Many traders bought the "cheap" prices during the volatility, ignoring the structural breakdown. The result was a 50% decline.

### 8.2 The "Bitcoin" Pennants (2017)
During the 2017 run-up, BTC repeatedly formed Bull Pennants. Each "Pole" was followed by a brief consolidation, and then an exact Measured Move extension, demonstrating the fractal nature of crowd mania.

## IX. Exercises

**Exercise 1 (Target Calculation):**
An Inveres Head & Shoulders forms.
Left Shoulder Low: 1.1000
Head Low: 1.0800
Right Shoulder Low: 1.1050
Neckline (Resistance): 1.1200
a) Calculate the Minimum Price Target.
b) If the breakout happens at 1.1200, where should the Stop Loss be placed for a conservative trade?

**Exercise 2 (Volume Analysis):**
You observe a Symmetrical Triangle. As price approaches the apex, volume is rising steadily. Is this normal? What does it suggest about the potential breakout? (Hint: Compare to standard "declining volume" theory).

**Exercise 3 (Failure Analysis):**
Define a "Failed Pattern." If a Double Top breaks the neckline but then immediately reverses and closes above the peaks, what psychological shift has occurred? (Short Squeeze mechanics).

## X. References
-   Edwards, R.D., & Magee, J. (1948). *Technical Analysis of Stock Trends*.
-   Bulkowski, T.N. (2005). *Encyclopedia of Chart Patterns*. (The data bible for statistics).
-   Murphy, J.J. (1999). *Technical Analysis of the Financial Markets*.
-   Schabacker, R.W. (1932). *Stock Market Theory and Practice*.
