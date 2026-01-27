# Local Volatility Dupire: The Implied Tree

## I. Executive Summary

**Local Volatility** assumes that volatility is a deterministic function of Price and Time: $\sigma(S, t)$. Unlike Heston (Stochastic), Local Vol creates a **Unique** diffusion process that *perfectly* matches the entire market Implied Volatility Surface. It is the "Implied Tree" (Derman-Kani) or "Implied Surface" (Dupire). It is the standard for pricing **Exotics** consistent with vanillas.

## II. Formal Definitions

### Definition 2.1 (Dupire's Formula)
Expresses Local Vol $\sigma_{loc}$ in terms of Call Prices $C(K, T)$:
$$ \sigma_{loc}^2(K, T) = \frac{\frac{\partial C}{\partial T} + rK \frac{\partial C}{\partial K}}{ \frac{1}{2}K^2 \frac{\partial^2 C}{\partial K^2} } $$
Numerator: Time decay (Theta).
Denominator: K-convexity (Density).
If we know $C(K,T)$ for all $K, T$, we know $\sigma_{loc}$.

### Definition 2.2 (The Concept)
"Instantaneous volatility conditional on $S_t = K$."
If Market Skew makes low strikes expensive, Dupire implies higher volatility at lower prices.
$\sigma(S)$ curve opposes the price action.

## III. Theoretical Framework

### 3.1 Dynamics
Local Vol fits the *current* surface perfectly.
But how does the surface evolve?
Local Vol assumes the skew "slides" with the spot price.
Sticky Strike vs Sticky Delta.
Local Vol implies "Sticky Local Vol" (Volatility at Price Level $X$ is fixed).
This often predicts *less* future volatility of volatility than reality.

### 3.2 Stability
Dupire's formula involves 2nd derivatives of market data.
Market data is noisy.
Differentiation amplifies noise.
Requires heavy smoothing (Regularization) of the input surface before applying Dupire.

## IV. Strategic Applications

### 4.1 Barrier Pricing
Pricing an Update-and-Out Call.
Heston and Local Vol might be calibrated to same Vanillas.
But produce different Barrier prices.
Local Vol generally produces *lower* prices for One-Touch options?
Model Risk relies on checking both.

### 4.2 Use Case
Standard model for Equity Exotics (Autocallables).
Fast calibration (Analytic or single time step bootstrap).
No extra parameters to optimize (Non-parametric).

## V. Exercises

**Exercise 1 (Forward Vol):**
Local Vol is related to Forward Volatility.
$E[\int \sigma^2 dt]$.
Dupire extracts the "market implied average vol path."

**Exercise 2 (Bad Pars):**
Arbitrage in input data (Calendar spread arbitrage).
$\frac{\partial C}{\partial T} < 0$.
Implies $\sigma^2 < 0$.
Imaginary volatility.
Surfaces must be arbitrage-free before Dupire calculation.

## VI. References
-   Dupire, B. *Pricing with a Smile*.
-   Derman, E., & Kani, I. *The Volatility Smile and Its Implied Tree*.
