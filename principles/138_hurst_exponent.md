# Hurst Exponent: Fractal Dimension and Memory

## I. Executive Summary

The Hurst Exponent ($H$) is a measure of the "Long Memory" of a time series. Originally developed by Harold Hurst to study Nile River floods, it quantifies the tendency of a time series to regress to the mean or cluster in a direction. In finance, it distinguishes a Random Walk ($H=0.5$) from a Trending Market ($H>0.5$) or a Mean Reverting Market ($H<0.5$), enabling "Regime Selection" for algo strategies.

## II. Formal Definitions

### Definition 2.1 (Rescaled Range R/S)
Analysis of the range of cumulative deviations from the mean.
$$(R/S)_n = c \times n^H$$
-   $R$: Range of cumulative deviations.
-   $S$: Standard deviation.
-   $n$: Time period.
-   $H$: Hurst Exponent (Slope of log-log plot).

### Definition 2.2 (Classification)
-   $0 < H < 0.5$: **Anti-Persistent** (Mean Reversion). "Pink Noise." An Up move is likely followed by Down.
-   $H = 0.5$: **Random Walk** (Brownian Motion). "White Noise." No memory.
-   $0.5 < H < 1$: **Persistent** (Trend). "Black Noise." An Up move is likely followed by Up.

## III. Theoretical Framework

### 3.1 Fractal Dimension ($D$)
$D = 2 - H$.
-   Rougher series (Mean Reversion) have higher Dimension ($D \to 2$).
-   Smoother series (Trends) have lower Dimension ($D \to 1$).

### 3.2 Validity of Efficient Markets
If EMH is true, $H$ must be 0.5 everywhere.
Empirical studies show $H$ fluctuates.
-   Crypto: $H \approx 0.6$ (Strong Trend).
-   Forex Majors: $H \approx 0.45$ (Mean Reversion).
This proves markets are **Fractal**, not Efficient.

## IV. Strategic Applications

### 4.1 Dynamic Algo Selection
Compute Rolling Hurst (window 100).
-   `if H > 0.6: Deploy TrendFollowing_Algo()`
-   `if H < 0.4: Deploy MeanReversion_Algo()`
-   `if 0.4 < H < 0.6: Cash (Random Noise)`
*Result:* Avoids using Trend algos in Chop.

### 4.2 Timeframe Selection
Compute $H$ for M1, M5, H1, D1.
Trade the timeframe with the highest $|H - 0.5|$.
If D1 has $H=0.8$ and M5 has $H=0.5$, trade Daily. Don't scalp noise.

## V. Exercises

**Exercise 1 (Calculation):**
Log-Log Plot.
X-axis: $\log(Time)$.
Y-axis: $\log(R/S)$.
Slope = 0.75.
Interpretation? (Strongly persistent trend. Momentum strategies will work).

**Exercise 2 (Stability):**
Why is Hurst hard to estimate?
(Requires large N. For small N, the estimator is biased. R/S analysis is sensitive to short-term anomalies).

## VI. References
-   Mandelbrot, B. *The Fractal Geometry of Nature*.
-   Peters, E. *Fractal Market Analysis*.
