# Fast Fourier Transform Pricing: Characteristic Functions

## I. Executive Summary

**Fast Fourier Transform (FFT)** methods (Carr-Madan) price options by transforming the problem from the Price Domain to the **Frequency Domain**. Many advanced stochastic models (Heston, Variance Gamma) have analytical **Characteristic Functions** ($\phi$) even if they lack analytical Probability Density Functions (PDF). Integrating the Characteristic Function via FFT allows pricing an entire chain of strikes in milliseconds.

## II. Formal Definitions

### Definition 2.1 (The Characteristic Function)
Fourier transform of the PDF.
$\phi(u) = E[e^{iu x}]$.
For Heston (Stoch Vol), $\phi(u)$ is a known semi-closed form solution (Complex numbers).

### Definition 2.2 (Carr-Madan Formula)
Call Price $C(k)$ is obtained by inverse Fourier transform of:
$$ \frac{e^{-\alpha k} \phi(v - (\alpha + 1)i)}{\alpha^2 + \alpha - v^2 + i(2\alpha + 1)v} $$
$\alpha$: Dampening factor (to ensure integrability).
Using FFT algorithm ($\mathcal{O}(N \log N)$), we get prices for $N$ strikes simultaneously.

## III. Theoretical Framework

### 3.1 Speed Advantage
BSM: 1 calculation per strike.
Monte Carlo: Slow per strike.
FFT: 4096 strikes in same time as 1 strike.
Critical for **Calibration** (Fitting model to volatility surface requires minimizing error across hundreds of options in real-time).

### 3.2 The Levy Family
FFT enables pricing for "Levy Processes" (Jump diffusion, Infinite activity jumps).
CGMY, Variance Gamma, NIG.
These models capture Skew and Kurtosis (Fat tails) better than BSM.

## IV. Strategic Applications

### 4.1 Volatility Surface Calibration
Traders run an optimizer (Levenberg-Marquardt).
Loop:
1.  Guess Heston Params ($\kappa, \theta, \sigma, \rho$).
2.  Generate Model Prices via FFT.
3.  Compare to Market Prices.
4.  Adjust Params.
FFT makes this loop fast enough for trading Desks.

### 4.2 Limitation
FFT gives prices on a regular grid of *Log-Strikes*.
Market strikes are arithmetic (100, 105, 110).
Requires interpolation of the FFT output.
Usually cubic spline interpolation.

## V. Exercises

**Exercise 1 (The Dampening Factor):**
Call option value doesn't decay to 0 as $k \to -\infty$ (Deep ITM).
Fourier integral diverges.
Multiply payoff by $e^{\alpha k}$ ($\alpha > 0$) to make it square-integrable.
Crucial numerical trick.

**Exercise 2 (Model Risk):**
Different models (Heston vs Bates) might fit the surface equally well (Calibration).
But they give different prices for Exotics (Barrier/Cliquet).
"Calibration is necessary but not sufficient."

## VI. References
-   Carr, P., & Madan, D. *Option Valuation Using the Fast Fourier Transform*.
-   Lewis, A. *Option Valuation under Stochastic Volatility*.
