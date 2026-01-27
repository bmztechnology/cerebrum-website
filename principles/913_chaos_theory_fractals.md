# Chaos Theory and Fractals Mandelbrot

## I. Executive Summary

**Chaos Theory** deals with systems that are deterministic but unpredictable due to **Sensitive Dependence on Initial Conditions** (Butterfly Effect). Benoît Mandelbrot showed that markets are **Fractal**: they exhibit **Self-Similarity** across scales. A 1-minute chart looks like a 1-year chart. This invalidates the Normal Distribution and suggests that **Roughness** is the true measure of market state.

## II. Formal Definitions

### Definition 2.1 (The Hurst Exponent - H)
Measure of Long-Term Memory.
$H = 0.5$: Random Walk (Brownian Motion).
$0.5 < H < 1$: Trending (Persistent, Positive Autocorrelation).
$0 < H < 0.5$: Mean Reverting (Anti-persistent).
Mandelbrot found $H \approx 0.7$ for many markets.
Markets "remember" shocks.

### Definition 2.2 (Fractal Dimension - D)
$D = 2 - H$ (for time series).
A straight line has $D=1$. A plane has $D=2$.
A stock chart has $D \approx 1.3$ to $1.7$.
The "Rougher" the chart, the higher the dimension.
High Fractal Dimension $\implies$ Higher probability of reversal? (Debated).

## III. Theoretical Framework

### 3.1 Cotton Prices (1816-1940)
Mandelbrot analyzed cotton.
Found that the "tails" (daily moves > 5%) followed a Power Law (Pareto Distribution) that was scale-invariant.
The risk of a 10% move is much higher than Gaussian models predict.
"Noah Effect" (Discontinuous jumps).
"Joseph Effect" (Persistent trends).

### 3.2 Multifractality
Markets are not just simple fractals (Single H).
They are **Multifractals**: H changes over time.
In calm times, H is high (Trend).
In crash times, H is low (Mean Reversion/Choppiness).
MF-DFA (Multifractal Detrended Fluctuation Analysis) estimates the spectrum of H.

## IV. Strategic Applications

### 4.1 Fractal Market Hypothesis (FMH)
Peters.
Liquidity exists because different timeframes trade against each other.
Day trader sells to Pension Fund.
Crisis occurs when timeframes synchronize (Everyone becomes a Day Trader).
Liquidity vanishes.
Strategy: Monitor timeframe correlation.

### 4.2 Trading the Hurst
If $H > 0.6$: Buy Breakouts (Trend Following).
If $H < 0.4$: Sell Breakouts (Mean Reversion).
Adaptive algo switches logic based on H.
Problem: H is noisy to estimate.

## V. Exercises

**Exercise 1 (Coastline Paradox):**
How long is the coastline of Britain?
Depends on the ruler size.
As ruler gets smaller, length goes to infinity.
Market "Price Path" length also depends on sampling frequency.
High Frequency Trading exploits the "infinite coastline" of price.

**Exercise 2 (Attractors):**
Lorenz Attractor (Butterfly).
Price orbits a "Fair Value" but never settles.
Strange Attractor logic.
Technicals (Support/Resistance) are attempts to map the geometry of the attractor.

## VI. References
-   Mandelbrot, B. *The Fractal Geometry of Nature*.
-   Peters, E. *Fractal Market Analysis*.
