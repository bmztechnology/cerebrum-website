# Heston Model Stochastic Vol: Dynamics

## I. Executive Summary

The **Heston Model** extends Black-Scholes by allowing Volatility ($\sigma$) to be stochastic (random) rather than constant. It models volatility as a mean-reverting proccess (CIR), and importantly, allows for **Correlation ($\rho$)** between spot price moves and volatility moves. This correlation generates the **Skew** observed in equity markets (Price Down $\implies$ Vol Up).

## II. Formal Definitions

### Definition 2.1 (SDEs)
$$ dS_t = \mu S_t dt + \sqrt{\nu_t} S_t dW_1 $$
$$ d\nu_t = \kappa(\theta - \nu_t)dt + \xi \sqrt{\nu_t} dW_2 $$
$$ E[dW_1 dW_2] = \rho dt $$
-   $\nu_t$: Instantaneous Variance.
-   $\kappa$: Speed of mean reversion.
-   $\theta$: Long run variance.
-   $\xi$: Vol of Vol.

### Definition 2.2 (Feller Condition)
$2\kappa\theta > \xi^2$.
Ensures variance $\nu_t$ stays strictly positive.
If violated, zero boundary is accessible (Technical issues in simulation involving negative variance).

## III. Theoretical Framework

### 3.1 Generating the Skew
-   If $\rho < 0$ (Equities): $S \downarrow \implies \nu \uparrow$. Downside options become more expensive (Skew).
-   If $\rho > 0$ (Commodities/FX sometimes): $S \uparrow \implies \nu \uparrow$. Inverse Skew.
-   If $\xi$ (Vol of Vol) $\uparrow$: Smile curvature increases (Fat tails).

### 3.2 Pricing
Characteristic function exists (Heston 93).
Used with FFT.
Popular because it is "Analytically Tractable" unlike many other Stoch Vol models.

## IV. Strategic Applications

### 4.1 Forward Smile
Heston produces a "Forward Smile" that decays with time.
Term structure of Skew.
Short term skew is steep. Long term skew flattens.
Matches market reality reasonably well (though underestimates short-term skew steepness).

### 4.2 Hedging
In Heston, you have two risks: Delta (Spot) and Vega (Vol).
You cannot hedge perfectly with just the Stock.
You need to trade Options (delta-neutral) to hedge the Vega risk.
"Incomplete Market."

## V. Exercises

**Exercise 1 (Calibration Failure):**
Heston struggles to fit very short maturity smiles (e.g., 1 week).
Explosive vol of vol needed.
Solution: "Heston + Jumps" (Bates Model). Jumps handle the short-term tail risk, Heston handles the long-term volatility dynamics.

**Exercise 2 (Simulation):**
Euler discretization can lead to negative variance.
Full Truncation or Reflection schemes: $\nu = \max(\nu, 0)$ or $\nu = |\nu|$.
Broadie-Kaya "Exact Simulation" is preferred but slower.

## VI. References
-   Heston, S. *A Closed-Form Solution for Options with Stochastic Volatility*.
-   Gatheral, J. *The Volatility Surface*.
