# Levy Processes and Fat Tails

## I. Executive Summary

**Levy Processes** generalize the concept of Random Walks. While Brownian Motion has Gaussian increments (Thin tails), Levy Processes (e.g., Variance Gamma, NIG) allow for **Heavy Tailed** distributions and **Infinite Activity** (small jumps happening all the time). This math captures the **Fractal** nature of market time, where trading activity clusters and gaps naturally.

## II. Formal Definitions

### Definition 2.1 (Stable Distributions)
Alpha ($\alpha$) parameter.
Gaussian: $\alpha = 2$.
Cauchy: $\alpha = 1$ (Undefined Mean/Variance).
Market Turns: $\alpha \approx 1.7$.
Result: Variance is infinite?
Standard Deviation is a meaningless metric for risk if $\alpha < 2$.
Use "Tail Exponent" instead.

### Definition 2.2 (Subordination)
Time Change.
$X(t) = W(\tau(t))$.
Price is a Brownian Motion $W$ running on a "Business Time" clock $\tau$.
When Volume is high, the clock runs fast (High Volatility).
When Volume is low, simple clock runs slow.
$\tau(t)$ follows a Levy Process (Gamma subordinator).

## III. Theoretical Framework

### 3.1 Infinite Divisibility
A process is infinitely divisible if it can be decomposed into sum of independent parts.
Allows scaling from 1-second returns to 1-year returns.
Self-Similarity.
Fractal Dimension.
Markets look the same at all time scales (roughly).

### 3.2 Kurtosis Risk
Kurtosis > 3.
"Peakiness."
High probability of small moves + High probability of massive moves.
Low probability of "average" moves.
Option traders selling Straddles are short Kurtosis.
They win mostly, but die occasionally.

## IV. Strategic Applications

### 4.1 Variance Gamma (VG) Model
Madan/Seneta.
Pure jump process (no diffusion).
Infinite number of small jumps.
Captures the "Skew" and "Kurtosis" elegantly with 3 parameters.
Used for pricing FX Options.

### 4.2 Power Laws in High Frequency
Order book sizes follow Power Law.
Price impact follows Square Root law.
Inter-arrival times follow Weibull?
HFT algos assume Non-Gaussian microstructure.
Mean Reversion is faster in Levy models.

## V. Exercises

**Exercise 1 (The 10-Sigma Move):**
In Normal world: Probability $10^{-24}$. (Never in universe lifetime).
In Power Law world: Probability $10^{-3}$. (Once a decade).
If you see a "10-Sigma" event, your model is wrong, not the data.

**Exercise 2 (Value at Risk - VaR):**
Gaussian VaR underestimates tail loss by 50%.
Levy/EVT (Extreme Value Theory) VaR is required for Basel III compliance (Expected Shortfall).

## VI. References
-   Applebaum, D. *Levy Processes and Stochastic Calculus*.
-   Mandelbrot, B. *The Misbehavior of Markets*.
