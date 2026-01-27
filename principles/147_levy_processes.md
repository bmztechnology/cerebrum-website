# Levy Processes: Heavy Tails and Infinite Activity

## I. Executive Summary

Brownian Motion assumes prices are continuous. Merton Jump Diffusion assumes rare jumps. **Levy Processes** generalize this to allow for "Infinite Activity" jumps—prices that move *mostly* by small jumps rather than continuous paths. Distributions like the **Variance Gamma (VG)** and **Normal Inverse Gaussian (NIG)** capture the peakedness and fat tails of financial returns better than any diffusion model.

## II. Formal Definitions

### Definition 2.1 (Levy Process Characteristic Function)
$$E[e^{iuX_t}] = e^{t \Psi(u)}$$
Where $\Psi(u)$ is the Levy Exponent (Levy-Khintchine Formula).
It decomposes drift, diffusion, and a "Jump Measure" $\nu(dx)$.

### Definition 2.2 (Variance Gamma - VG)
A Brownian Motion evaluated at a random "business time" gamma process.
-   Time speeds up (high volatility) and slows down (low volatility).
-   Result: A distribution with sharp peak (high kurtosis) and heavy tails.

## III. Theoretical Framework

### 3.1 Infinite Divisibility
A distribution is infinitely divisible if it can be expressed as the sum of $n$ i.i.d random variables for any $n$.
This is required for a consistent process at 1-min, 1-hour, and 1-day timeframes.
The Student-t distribution is NOT infinitely divisible (cannot be a Levy process).
VG and NIG ARE.

### 3.2 The Tail Index ($\alpha$)
From Stable Distributions (Pareto).
$P(X > x) \sim x^{-\alpha}$.
-   Gaussian: Decays exponentially $e^{-x^2}$. (Thin).
-   Levy/Power Law: Decays polynomially $x^{-\alpha}$. (Fat).
-   $\alpha \approx 3$ for Stocks. Finite variance, but huge kurtosis.

## IV. Strategic Applications

### 4.1 Tail Risk Hedging
Gaussian VaR says a 10% drop happens once in 1000 years.
Levy VaR says it happens once in 10 years.
Strategy: Buy far OTM Puts. Levy Pricing Models show they are "fairly" priced, whereas Black-Scholes says they are "expensive."

### 4.2 High Frequency Modeling
On a tick-by-tick level, prices are pure jumps ($+1$ tick, $-1$ tick).
Pure Jump Levy processes model microstructure flow accurately without needed artificial "diffusion."

## V. Exercises

**Exercise 1 (Time Subordination):**
Imagine "Market Time" runs faster when volume is high.
$S(t) = B(\tau(t))$.
If $\tau(t)$ is a Gamma process, you get Variance Gamma.
This explains why markets look fractal.

**Exercise 2 (Simulation):**
How to simulate Levy?
You cannot just add Normal randoms.
You must simulate the Jump Measure (Poisson series of various sizes).
Requires advanced algorithms (Rosinski Rejection Method).

## VI. References
-   Applebaum, D. *Levy Processes and Stochastic Calculus*.
-   Carr, P., & Madan, D. *Option Valuation Using the Fast Fourier Transform*.
