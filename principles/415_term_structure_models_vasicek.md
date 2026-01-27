# Term Structure Models Vasicek: Mean Reversion

## I. Executive Summary

The **Vasicek Model** (1977) was the first to model interest rate evolution as a stochastic process with **Mean Reversion**. It assumes rates follow an Ornstein-Uhlenbeck process. While analytically tractable (closed form bond prices), it has a major flaw: it allows **Negative Interest Rates** (which was a flaw until 2015, then became a feature).

## II. Formal Definitions

### Definition 2.1 (SDE)
$$ dr_t = \alpha(b - r_t)dt + \sigma dW_t $$
-   $r_t$: Short rate.
-   $b$: Long term mean level.
-   $\alpha$: Speed of reversion.
-   $\sigma$: Volatility (Constant).
-   Drift $\alpha(b - r_t)$ pulls rate back to $b$.

### Definition 2.2 (Bond Pricing)
$$ P(t, T) = A(t, T) e^{-B(t, T) r_t} $$
Affine Term Structure model.
$A, B$ are deterministic functions of parameters.
Yield Curve shape is determined by $r_t$ relative to $b$.

## III. Theoretical Framework

### 3.1 Normal Distribution
$r_t$ is normally distributed.
Probability of $r_t < 0$ is $> 0$.
Analytic solutions for options (Jamshidian's decomposition).

### 3.2 Limitations
1. Constant Volatility: Real markets have vol skew and vol clustering.
2. Constant Mean: Central banks shift the "Neutral Rate" ($r^*$).
3. One Factor: Entire curve moves based on $r_t$. Perfect correlation.

## IV. Strategic Applications

### 4.1 Relative Value
Compare Market Yields to Vasicek Theoretical Yields.
Identify Humps/Dips that deviate from the smooth model curve.
Arbitrage? Or Model Error?

### 4.2 Risk Management
Simulate thousands of paths of $r_t$.
Calculate VaR.
Simple, fast, robust approximation.

## V. Exercises

**Exercise 1 (Calibration):**
Fit $\alpha, b, \sigma$ to current yield curve and volatility.
Often poor fit to current curve (Model is "Endogenous").
To fit perfectly, $b$ must be time-dependent ($b_t$). (Hull-White Extended Vasicek).

**Exercise 2 (Speed of Reversion):**
If $\alpha$ is high, curve is flat (Rates return to $b$ quickly).
If $\alpha$ is low, curve is steep.
$\alpha$ controls the "Slope."

## VI. References
-   Vasicek, O. *An Equilibrium Characterization of the Term Structure*.
-   Brigo, D., & Mercurio, F. *Interest Rate Models*.
