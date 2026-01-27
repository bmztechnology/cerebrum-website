# Fibonacci Retracement: The Golden Ratio in Markets

## I. Executive Summary

Fibonacci analysis applies the mathematical sequence discovered by Leonardo of Pisa (c. 1200) to financial time series. The core premise is that crowd behavior, like natural phenomena, unfolds in fractal patterns governed by the Golden Ratio ($\phi \approx 1.618$). In trading, these ratios define high-probability areas of structural support during a trend correction (Retracement) or expansion targets (Extension).

## II. Formal Definitions

### 2.1 The Sequence
$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, \dots$
$$F_n = F_{n-1} + F_{n-2}$$

### 2.2 The Key Ratios
-   **$\phi$ (Golden Ratio):** $F_n / F_{n-1} \to 1.618$ (Expansion).
-   **Inverse $\phi$:** $F_{n-1} / F_n \to 0.618$ (Retracement).
-   **Secondary Ratios:**
    -   $0.382$ ($1 - 0.618$ or $F_{n-2}/F_n$).
    -   $0.236$ ($F_{n-3}/F_n$).
    -   $0.50$ (Dow 50% retracement - technically not Fibonacci, but included).

### 2.3 Construction
To draw a Retracement Grid:
1.  Identify Swing Low ($0\%$) and Swing High ($100\%$).
2.  The lines are drawn at 23.6%, 38.2%, 50%, and 61.8% of the vertical distance.

## III. Theoretical Framework

### 3.1 The Self-Fulfilling Prophecy
Why does price stop at 61.8%?
-   **Behavioral:** Traders "feel" price is cheap enough.
-   **Algorithmic:** Thousands of bots have Limit Buy orders hard-coded at `High - (Range * 0.618)`.
-   **Liquidity:** The "Golden Pocket" (61.8% - 78.6%) is where the risk/reward for trend continuation is mathematically optimal.

### 3.2 The Shallow vs Deep Correction
-   **38.2%:** Indicates strong trend. Price barely dips. Continuation likely impulsive.
-   **61.8%:** Deep correction. Indicates heavier profit taking.
-   **>78.6%:** Trend integrity threatened. Structure likely to break.

## IV. Strategic Applications

### 4.1 The "Golden Pocket" Entry
1.  Wait for impulse leg.
2.  Draw Fib.
3.  Place Buy Limit at 61.8%.
4.  Stop Loss below 78.6% or Swing Low.
5.  Target: -27% (Extension) or Previous High.

### 4.2 Confluence Trading
A 61.8% Retracement level *alone* is weak.
A 61.8% Retracement that aligns with:
-   A previous Swing High (Support turned Resistance).
-   A Moving Average (EMA 50).
-   A Round Number (1.1000).
This is a **High Probability Cluster**.

## V. Exercises

**Exercise 1 (Math):**
Swing Low: 1.0000. Swing High: 1.1000.
Range = 0.1000 (1000 pips).
Calculate the 38.2% Retracement Price.
$$P = High - (Range \times 0.382) = 1.1000 - 0.0382 = 1.0618$$
Calculate the 161.8% Extension Price (Target).
$$P = Low + (Range \times 1.618) = 1.0000 + 0.1618 = 1.1618$$

**Exercise 2 (Pattern Recognition):**
Price retraces to 50% and stalls.
Then it drops to 61.8% and engulfs.
Why is the "Stop Hunt" below the 50% level common? (Because early buyers put stops just below 50%).

**Exercise 3 (Time):**
Fibonacci Time Zones exist (Vertical lines).
If leg 1 took 10 bars. Leg 2 might take 16 bars ($10 \times 1.618$).
Do you trust Time Fibs? (Generally less reliable than Price Fibs).

## VI. References
-   Fisher, R. (1993). *Fibonacci Applications and Strategies for Traders*.
-   Prechter, R. *The Elliott Wave Principle*.
