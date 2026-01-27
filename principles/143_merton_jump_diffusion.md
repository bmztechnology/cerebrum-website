# Merton Jump Diffusion: Modeling the Crash

## I. Executive Summary

Standard Black-Scholes assumes prices move continuously (Brownian Motion). But markets gap (Jumps) during news events. Robert Merton (Nobel Prize) extended the GBM model to include a Poisson process for Jumps. This model explains the "Smile" in short-term options and the heavy left tail of returns.

## II. Formal Definitions

### Definition 2.1 (The Process)
$$dS_t = (\mu - \lambda k) S_t dt + \sigma S_t dW_t + (J-1) S_t dN_t$$
-   $dW_t$: Standard Brownian Motion (Normal noise).
-   $dN_t$: Poisson Process ($dN=1$ with prob $\lambda dt$, else 0).
-   $J$: Jump size distribution (usually Lognormal).
-   $\lambda$: Jump intensity (Frequency).
-   $k$: Expected jump size $E[J-1]$.

### Definition 2.2 (The Solution)
The option price is the weighted average of Black-Scholes prices, weighted by the probability of $n$ jumps occurring.
$$Call = \sum_{n=0}^{\infty} \frac{e^{-\lambda' T} (\lambda' T)^n}{n!} BS(Price_n, Vol_n)$$

## III. Theoretical Framework

### 3.1 Bimodal Distribution
Unlike the Bell Curve, Jump Diffusion creates a distribution with two peaks (or a fat tail).
-   Peak 1: "Normal" trading days.
-   Peak 2: "Crash" days.
This matches empirical data: Markets are calm 90% of the time and crazy 10% of the time.

### 3.2 Total Variance
$$TotalVar = \sigma^2 + \lambda \delta^2$$
$\sigma^2$ is the diffusion variance.
$\lambda \delta^2$ is the variance contribution from jumps.
*Implication:* You cannot hedge jump risk with Delta. You need pure Gamma (Options).

## IV. Strategic Applications

### 4.1 Measuring Crash Risk
Calibrate Merton model to Option Prices.
If $\lambda$ (Intensity) rises from 0.1 to 0.5, the market is pricing in a 50% chance of a jump this year.
Strategy: Buy deep OTM Puts (Crash Protection).

### 4.2 Gap Managing
Stop Losses do not work in Jump Diffusion.
If price jumps from 100 to 80, your Stop at 95 triggers at 80.
*Solution:* Position Sizing must be reduced to survive the Jump event, not just the Volatility event.

## V. Exercises

**Exercise 1 (Jump Probability):**
$\lambda = 2$ (2 jumps per year on average).
Prob of 0 jumps in 1 month ($T=1/12$):
$P(N=0) = e^{-\lambda T} = e^{-2/12} = e^{-0.166} \approx 84\%$.
Prob of at least 1 jump: 16%.

**Exercise 2 (Pricing):**
Why are OTM Puts expensive in this model?
(Because the jump term $dN_t$ creates a "Teleportation" effect to the downside, giving OTM puts a much higher probability of ITM payoff than Gaussian theory predicts).

## VI. References
-   Merton, R.C. *Option Pricing when Underlying Stock Returns are Discontinuous*.
-   Cont, R., & Tankov, P. *Financial Modelling with Jump Processes*.
