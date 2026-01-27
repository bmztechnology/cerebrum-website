# Ho Lee Arbitrage Free: Fitting the Curve

## I. Executive Summary

**Ho-Lee** (1986) was the first **Arbitrage-Free** model. Unlike Equilibrium models (Vasicek) which produce a theoretical curve that might not match market prices, Ho-Lee takes the **Current Market Yield Curve** as an input. It introduces a time-dependent drift parameter $\theta(t)$ to force the model to price all zero-coupon bonds correctly.

## II. Formal Definitions

### Definition 2.1 (SDE)
$$ dr_t = \theta(t) dt + \sigma dW_t $$
$\theta(t)$ is calibrated to the initial forward rate curve $f^*(0, t)$.
$$ \theta(t) = \frac{\partial f^*(0, t)}{\partial t} + \sigma^2 t $$
Drift = Slope of Forward Curve + Convexity Correction.

### Definition 2.2 (Arbitrage Free)
Model Price of Bond = Market Price of Bond.
Ensures no arbitrage opportunities at $t=0$.
Crucial for pricing derivatives (Swaptions) consistent with the underlying curve.

## III. Theoretical Framework

### 3.1 Normal Rates
Ho-Lee assumes constant volatility $\sigma$.
Rates are normally distributed.
Can go negative.
Basically "Vasicek with time-dependent mean."

### 3.2 Binomial Implementation
Ho-Lee is often implemented as a recombining Binomial Tree.
Drift shifts the tree up/down to match the spot curve at each step.
First step towards Black-Derman-Toy (BDT) and Hull-White.

## IV. Strategic Applications

### 4.1 Valuing American Options on Bonds
Analytical formulas fail for American options.
Ho-Lee Tree allows backward induction.
Consistent with current term structure.

### 4.2 Critique
Lack of Mean Reversion.
$r_t$ is a Random Walk with drift.
Variance grows linearly with $t$ ($Var = \sigma^2 t$).
unrealistic for long maturities (Rates don't wander to infinity).
Hull-White (Mean Reverting + Arbitrage Free) superseded Ho-Lee.

## V. Exercises

**Exercise 1 (Calibration):**
Input: Zero Prices $P(0, 1) = 0.95, P(0, 2) = 0.90$.
$\sigma = 1\%$.
Calculate $\theta(0)$ and $\theta(1)$ to hit these prices.
Bootstrapping the drift.

**Exercise 2 (Volatility Term Structure):**
Ho-Lee assumes flat vol $\sigma$.
Market often has humped vol structure (Swaption Vol surface).
Model error.

## VI. References
-   Ho, T.S.Y., & Lee, S.B. *Term Structure Movements and Pricing Interest Rate Contingent Claims*.
-   Hull, J., & White, A. *Pricing Interest-Rate-Derivative Securities*.
