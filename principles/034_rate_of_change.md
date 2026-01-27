# Rate of Change (ROC): Momentum Velocity

## I. Introduction

The Rate of Change (ROC) is a pure momentum oscillator that measures the percentage change in price between the current period and a defined period in the past. It essentially calculates the **velocity** of price movement. Unlike range-bound indicators (RSI, Stochastic), ROC is unbounded, making it a powerful tool for identifying the strength of a trend and potential divergences.

## II. Formal Definitions

### Definition 2.1 (Rate of Change)
For a time series $P_t$ and a lag period $n$:
$$ROC_n(t) = \frac{P_t - P_{t-n}}{P_{t-n}} \times 100$$

### Definition 2.2 (Momentum - Absolute)
Usually distinguished from ROC, simple Momentum is the absolute difference:
$$M_n(t) = P_t - P_{t-n}$$
ROC normalizes this by the base price $P_{t-n}$.

## III. Physical Analogy (Kinematics)

If Price $P(t)$ is Position:
1.  **Velocity ($v$):** $ROC \approx \frac{dP}{dt}$. It shows how fast price is changing.
2.  **Acceleration ($a$):** The slope of the ROC line ($\frac{dROC}{dt}$) indicates acceleration/deceleration.

-   $ROC > 0, Slope > 0$: Price rising, accelerating (Strong Bull).
-   $ROC > 0, Slope < 0$: Price rising, decelerating (Weakening Bull).
-   $ROC < 0, Slope < 0$: Price falling, accelerating (Strong Bear).
-   $ROC < 0, Slope > 0$: Price falling, decelerating (Weakening Bear).

## IV. Signal Processing

### 4.1 Zero-Line Cross
-   **Crossing 0 from below:** $P_t > P_{t-n}$. Bullish confirmation.
-   **Crossing 0 from above:** $P_t < P_{t-n}$. Bearish confirmation.

### 4.2 Divergence
Divergence between Price and ROC is a leading indicator of trend reversal.
-   **Bearish Divergence:** Price makes Higher High ($HH$), ROC makes Lower High ($LH$).
    -   *Interpretation:* The "velocity" of the buying is fading even though price is still drifting up.
-   **Bullish Divergence:** Price makes Lower Low ($LL$), ROC makes Higher Low ($HL$).

## V. Strategic Applications

### 5.1 Trend Verification
Use ROC(12) or ROC(21) on Daily charts.
-   Trade only in the direction of ROC relative to Zero.
-   Ignore short-term noise if ROC is strongly positioned.

### 5.2 Overbought/Oversold (Relative)
Although unbound, historical analysis reveals "extreme" levels for each asset.
-   Identify historical localized maxima (e.g., +5%).
-   Fade moves that exceed these statistical boundaries.

## VI. Exercises

**Exercise 1:** Calculating ROC.
$P_{today} = 1.1200$. $P_{10\_days\_ago} = 1.1000$.
Calculate the 10-period ROC.

**Exercise 2:** Relate ROC to the mathematical derivative. If we approximate the derivative as a finite difference, show that ROC is the log-return discrete derivative approximation:
$$ROC \approx \ln(P_t / P_{t-n}) \times 100$$ (for small changes).

**Exercise 3:** Why is ROC preferred over simple Momentum ($P_t - P_{t-n}$) for comparing different assets (e.g., EURUSD vs Gold)?

## VII. References
-   Pring, M.J. (2002). *Momentum Explained*.
-   Achelis, S.B. (2000). *Technical Analysis from A to Z*.
