# Skewness and Kurtosis: Beyond the Bell Curve

## I. Executive Summary

Real financial returns are NOT Normal. They exhibit **Skewness** (asymmetry) and **Kurtosis** (fat tails). Ignoring these higher moments leads to catastrophic risk underestimates (e.g., 2008 Financial Crisis). The savvy quant trader hunts for positive skew (limited loss, infinite gain) and sells negative skew (insurance).

## II. Formal Definitions

### Definition 2.1 (Skewness - 3rd Moment)
$$Skew = E\left[\left(\frac{X-\mu}{\sigma}\right)^3\right]$$
-   **Zero:** Symmetric (Normal).
-   **Negative Skew:** Frequent small wins, rare massive loss (e.g., Selling Options). "Scanning for pennies in front of a steamroller."
-   **Positive Skew:** Frequent small losses, rare massive win (e.g., Trend Following, Buying Lottery Tickets).

### Definition 2.2 (Kurtosis - 4th Moment)
$$Kurt = E\left[\left(\frac{X-\mu}{\sigma}\right)^4\right]$$
-   **Mesokurtic (3):** Normal Distribution.
-   **Leptokurtic (>3):** High Peak, Fat Tails. Markets are Leptokurtic. Extreme events happen far more often than Gaussian models predict.

## III. Theoretical Framework

### 3.1 The Smile
Volatility Smile in options pricing exists because traders bid up OTM Puts (protection against crash). This is the market pricing in Negative Skew and Kurtosis.

### 3.2 Tail Risk
In a logical world, a 10-sigma event happens once in the age of the universe. In finance, it happens every decade (LTCM, Lehman, Covid).
Model Risk: relying on Mean/Variance optimization leads to ruin.

## IV. Strategic Applications

### 4.1 Constructing Positive Skew
-   Cut losses early. (Truncates the left tail).
-   Let winners run. (Extends the right tail).
-   Result: Artificial Positive Skew.

### 4.2 Identifying Skewed Assets
-   **Forex Carry Trade:** Negative Skew. You collect interest daily (small win) but risk devaluation (crash).
-   **VIX Calls:** Positive Skew. You lose premium daily, but if market crashes, you make 1000%.

## V. Exercises

**Exercise 1 (Calculation Logic):**
Why is the exponent odd (3) for Skewness and even (4) for Kurtosis?
(Odd preserves sign: negatives stay negative. Even makes everything positive, focusing on magnitude/distance from mean).

**Exercise 2 (Portfolio):**
Manager A has Sharpe 2.0 but Skew -3.
Manager B has Sharpe 0.8 but Skew +5.
Which one blows up? (Manager A).

## VI. References
-   Taleb, N.N. *Dynamic Hedging*.
-   Mandelbrot, B. *The Misbehavior of Markets*.
