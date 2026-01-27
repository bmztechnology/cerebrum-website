# Normal Distribution: The Bell Curve

## I. Executive Summary

The Normal (Gaussian) Distribution is the bedrock of classical finance (Black-Scholes, CAPM). It assumes that returns are symmetrically distributed around a mean ($\mu$) with a specific "width" defined by standard deviation ($\sigma$). While markets often exhibit "Fat Tails" (Kurtosis), understanding the Normal model is prerequisite to spotting deviations from it.

## II. Formal Definitions

### Definition 2.1 (PDF)
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$$

### Definition 2.2 (Standard Normal $Z$)
$$Z = \frac{X - \mu}{\sigma}$$
$Z \sim N(0,1)$.

## III. Theoretical Framework

### 3.1 The 68-95-99.7 Rule
-   **68%** of data falls within $\pm 1\sigma$.
-   **95%** of data falls within $\pm 2\sigma$.
-   **99.7%** of data falls within $\pm 3\sigma$.
*Market Implication:* A move $> 3\sigma$ (3 Standard Deviations) is statistically a "Black Swan" under Gaussian theory (0.3% probability).

### 3.2 The Central Limit Theorem (CLT)
The sum of many independent random variables tends toward a normal distribution, regardless of the original distribution. This justifies using Gaussian models for aggregated monthly/yearly returns.

## IV. Strategic Applications

### 4.1 Mean Reversion (Bollinger Bands)
If Price hits $+2\sigma$, it is in the 95th percentile.
Probability of reversion to Mean ($\mu$) is high.
*Warning:* In non-normal (trending) markets, price can "surf" the $2\sigma$ line, defying the probability.

### 4.2 Value at Risk (VaR)
"What is the worst loss I can expect with 95% confidence?"
Using Normal tables: 95% confidence = $-1.65\sigma$.
$VaR = 1.65 \times \sigma \times PortfolioValue$.

## V. Exercises

**Exercise 1 (Z-Score):**
Mean Daily Return = 0%.
Volatility = 1%.
Today's Return = +3%.
$Z = (3 - 0) / 1 = 3$.
This is a 3-Sigma event. Rare.

**Exercise 2 (Probability):**
What is the probability of a return between $-1\sigma$ and $+1\sigma$?
(Approx 68%).
This is the "Noise Zone."

## VI. References
-   Gauss, C.F. *Theoria Motus*.
-   Hull, J. *Options, Futures, and Other Derivatives*.
