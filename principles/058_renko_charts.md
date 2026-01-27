# Renko Charts: Time-Independent Price Action

## I. Executive Summary

Renko (from Japanese *renga*, meaning "brick") is a chart type that ignores time completely. A new "brick" is drawn only when the price moves by a specific, pre-determined amount (Box Size). If price stays stagnant for 5 hours, the chart does not move. Renko is a pure filter for volatility, removing all temporal noise and side-ways consolidation, isolating the raw trend structure.

## II. Formal Construction

### 2.1 The Box Size ($\delta$)
The user selects a brick size, e.g., 10 pips.

### 2.2 The Drafting Rules
Let $P_t$ be the current price. Let $B_{last}$ be the top/bottom of the previous brick.
1.  **Up Brick:** If $P_t \ge B_{High} + \delta$, draw a new Green brick.
    -   New $B_{High} \leftarrow B_{High} + \delta$.
2.  **Down Brick:** If $P_t \le B_{Low} - \delta$, draw a new Red brick.
3.  **Noise:** If $B_{Low} - \delta < P_t < B_{High} + \delta$, **Do Nothing**.

*Critical:* A reversal requires a move of $2\delta$ (to clear the current brick and print the opposing one).

## III. Theoretical Framework

### 3.1 Discretization of Space
Renko creates a discrete price space. It enforces a "quantized" view of the market.
-   $\Delta P$ is constant.
-   $\Delta t$ is variable. (A brick can take 1 minute or 1 week).

### 3.2 Noise Reduction vs Signal Delay
Larger Box Size ($\delta$) = Less Noise, More Trend, **More Lag**.
Smaller Box Size ($\delta$) = More Noise, Less Lag.
*Optimization problem:* Finding the optimal $\delta$ (Average True Range is often used: $\delta = ATR(14)$).

## IV. Comparison with Time-Based Charts

| Feature | Candlestick (Time) | Renko (Price) |
| :--- | :--- | :--- |
| **X-Axis** | Linear Time | Non-Linear Event Count |
| **Consolidation** | Long clusters of messy bars | Disappears (Single line) |
| **Indicators** | Calculated on Close of Time | Calculated on Brick Close |
| **Wicks** | Show rejection | (Usually) Removed |

## V. Strategic Applications

### 5.1 The Brick Flipping Strategy
-   **Buy:** When specific pattern appears (e.g., 2 consecutive Green bricks after a Red sequence).
-   **Stop Loss:** 2 Bricks below entry ($2\delta$).
-   **Trailing:** Move stop to $B_{Low} - 2\delta$ of the most recent brick.

### 5.2 Renko with Moving Averages
Because Renko smooths price, Moving Averages ($MA$) applied to Renko are exceptionally smooth.
-   **Strategy:** Buy when Price > MA(10). The lack of "wicks" prevents the frequent false crossovers seen in candlesticks.

### 5.3 Divergence Trading
Oscillators (RSI) on Renko charts are clearer.
-   Renko makes a Higher High (New Brick).
-   RSI makes a Lower High.
-   *Reliability:* Higher than time-charts because the "Higher High" required significant price travel to print.

## VI. Exercises

**Exercise 1 (Construction):**
Box Size = 10.
Last Brick: Green (100 to 110).
Price sequence: 112, 115, 118, 105, 121.
Draw the resulting bricks.
(Hint: 112-118 doesn't trigger 120. 105 doesn't trigger 90. 121 triggers 120).

**Exercise 2 (ATR Optimization):**
Why is a fixed pip box size (e.g., 10 pips) dangerous for multi-year analysis? (Hint: Volatility changes. 10 pips in 2005 is not 10 pips in 2024).

**Exercise 3 (Market Microstructure):**
Why do Renko charts "hide" the spread? If you backtest a Renko strategy, why can the results be heavily distorted (phantom fills) if you don't use Tick Data?

## VII. References
-   Nison, S. (1994). *Beyond Candlesticks*.
-   Du Plessis, J. (2012). *Definitive Guide to Point and Figure*. (A cousin of Renko).
