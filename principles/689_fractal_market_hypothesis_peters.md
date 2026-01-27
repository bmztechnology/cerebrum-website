# Fractal Market Hypothesis Peters

## I. Executive Summary

The **Fractal Market Hypothesis (FMH)** (Edgar Peters) challenges the Gaussian (Bell Curve) assumptions of MPT. It posits that markets are **Fractal**: they exhibit **Self-Similarity** across time scales (Intraday looks like Monthly). Volatility is not Random Walk, but exhibits **Long Memory** (Hurst Exponent > 0.5). Market stability relies on a diverse ecosystem of **Time Horizons** (Day traders + Pension Funds).

## II. Formal Definitions

### Definition 2.1 (Fractal Dimension)
Mandelbrot.
Coastlines are fractal (Infinite length in finite space).
Price charts are fractal.
$D \approx 1.5$.
Roughness is consistent regardless of zoom level.

### Definition 2.2 (Liquidity Failure)
FMH Crisis Model:
Liquidity exists when Day Traders buy from Weekly Traders buy from Monthly Traders.
Crash happens when *Time Horizons Collapse*.
If Long Term investors become Short Term panic sellers, diversity vanishes.
Everyone tries to sell at the same time scale. Liquidity $\to$ 0.

## III. Theoretical Framework

### 3.1 The Hurst Exponent ($H$)
$H = 0.5$: Random Walk (Efficient).
$0.5 < H < 1.0$: Persistent (Trend / Memory).
$0 < H < 0.5$: Mean Reverting.
Markets typically show $H \approx 0.7$.
Past prices influence future prices (violation of Weak Form Efficiency).

### 3.2 Heavy Tails
Fractal distributions (Pareto/Levy) have infinite variance.
"3-Sigma" events happen every few years, not every million years.
Risk models based on Normal Distribution underestimate ruin risk by orders of magnitude.

## IV. Strategic Applications

### 4.1 Rescaled Range Analysis (R/S)
Tool to calculate Hurst Exponent.
Input: Time series.
Output: Tendency to trend.
If $H$ is rising, Trend is strengthening.
If $H$ drops near 0.5, Market is becoming random/choppy.

### 4.2 Multi-Fractal Models
Switching trading frequency based on fractal volatility.
Position sizing based on "Tail Risk" (Power Law) rather than Std Dev.
Acknowledging that the "Big One" is always possible.

## V. Exercises

**Exercise 1 (Zoom Test):**
Remove axis labels from a 1-minute chart and a 1-month chart.
Can you tell the difference?
Often No.
Self-similarity property.

**Exercise 2 (The 2008 Crash):**
Volatility didn't just spike; correlations converged.
Value investors (Long horizon) became Day Traders (Short horizon) due to margin calls.
FMH explains the liquidity black hole better than EMH.

## VI. References
-   Peters, E. *Fractal Market Analysis*.
-   Mandelbrot, B. *The Misbehavior of Markets*.
