# Numerical Methods: When Formulas Fail

## I. Executive Summary

Most advanced financial models (American Options, Stochastic Volatility, Barrier Options) have no closed-form analytical solution (like Black-Scholes). Instead, we must approximate the solution using computer algorithms. **Numerical Methods**—Monte Carlo, Binomial Trees, and Finite Differences—are the workhorses of the Quant Developer.

## II. Formal Definitions

### Definition 2.1 (Discretization)
Converting continuous Time/Price into discrete steps ($dt, dS$).
Error $\propto \Delta t$.

### Definition 2.2 (Binomial Tree - Cox-Ross-Rubinstein)
Model price evolution as a "Up" or "Down" move every step $\Delta t$.
-   $u = e^{\sigma \sqrt{\Delta t}}$ (Up factor).
-   $d = e^{-\sigma \sqrt{\Delta t}}$ (Down factor).
Price Tree expands forward. Option Valuation folds backward.

## III. Theoretical Framework

### 3.1 Monte Carlo Simulation
Relies on LLN. Average payoff of millions of random paths.
$$V_0 = e^{-rT} \frac{1}{N} \sum_{i=1}^N Payoff_i$$
-   *Advantage:* Easy to code. Handles complex path-dependencies (Asian Options).
-   *Disadvantage:* Slow convergence ($\frac{1}{\sqrt{N}}$). To double accuracy, need 4x simulations.

### 3.2 Finite Difference Method (FDM)
Solves the Partial Differential Equation directly on a grid.
-   **Explicit Method:** Fast but unstable.
-   **Implicit Method:** Solving matrix equations. Stable.
-   **Crank-Nicolson:** Average of both. Best accuracy.

## IV. Strategic Applications

### 4.1 Pricing American Options
American options can be exercised early.
Monte Carlo struggles (Forward looking).
Binomial Trees and FDM work perfectly: At every backward step, check:
$$Value = \max(\text{ContinuationValue}, \text{ExerciseValue})$$

### 4.2 Volatility Surface Calibration
Banks use numerical methods to "fit" their local volatility models to the observed market prices of options (Implied Volatility). This requires running the solver thousands of times inside an optimization loop.

## V. Exercises

**Exercise 1 (Binomial):**
S = 100. u = 1.1, d = 0.9.
Call K=100.
Up State: Price 110. Option 10.
Down State: Price 90. Option 0.
Risk Neutral Prob $p = 0.5$.
Value = $e^{-rt} [0.5(10) + 0.5(0)] = 5$ (discounted).

**Exercise 2 (Monte Carlo):**
Pricing a "Barrier Option" (Knock-out if Price > 150).
Analytic formula is a nightmare.
Code: `if max(path) > 150: payoff = 0`.
Simple.
This is why MC is king for Exotics.

## VI. References
-   Glasserman, P. *Monte Carlo Methods in Financial Engineering*.
-   Wilmott, P. *On Quantitative Finance*.
