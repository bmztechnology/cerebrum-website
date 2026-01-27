# Stochastic Processes: Brownian Motion

## I. Executive Summary

A Stochastic Process is a collection of random variables representing the evolution of a system of random values over time. The most famous is **Geometric Brownian Motion (GBM)**, the standard model for asset prices in continuous time statistics. Understanding the stochastic differential equation (SDE) gives insight into the interplay of Drift (Trend) and Diffusion (Volatility).

## II. Formal Definitions

### Definition 2.1 (Wiener Process $W_t$)
Standard Brownian Motion.
1.  $W_0 = 0$.
2.  Differences $W_{t+u} - W_t$ are independent.
3.  $W_{t+u} - W_t \sim N(0, u)$.

### Definition 2.2 (Geometric Brownian Motion - GBM)
$$dS_t = \mu S_t dt + \sigma S_t dW_t$$
-   $dS_t$: Change in price.
-   $\mu S_t dt$: Determinstic Drift (Trend part).
-   $\sigma S_t dW_t$: Stochastic Diffusion (Volatility/Noise part).

## III. Theoretical Framework

### 3.1 Ito's Lemma
In standard calculus, $df(x) = f'(x)dx$.
In stochastic calculus, because $dW_t$ is so jagged ($\sqrt{dt}$), second order terms matter.
$$df(S,t) = \left( \frac{\partial f}{\partial t} + \mu S \frac{\partial f}{\partial S} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 f}{\partial S^2} \right)dt + \sigma S \frac{\partial f}{\partial S} dW_t$$
This extra term ($\frac{1}{2}\sigma^2$) is why volatility creates "Time Decay" or "Convexity."

### 3.2 Log-Normality
Since prices cannot be negative, we model Log Returns.
Solving GBM:
$$S_t = S_0 \exp\left( (\mu - \frac{1}{2}\sigma^2)t + \sigma W_t \right)$$

## IV. Strategic Applications

### 4.1 Volatility Drag
Note the term $(\mu - \frac{1}{2}\sigma^2)$.
High volatility REDUCES the geometric growth rate.
*Example:* +50% then -50%. Mean return = 0%. Real return = -25%.
Minimizing $\sigma$ is mathematically vital for long-term compounding.

### 4.2 Monte Carlo Simulation
We cannot predict the future path $W_t$.
But we can simulate 10,000 paths using a random number generator for $W_t$.
This creates a "Fan Chart" of probable futures.

## V. Exercises

**Exercise 1 (Simulation):**
$\mu = 0$. $\sigma = 10\%$.
Path 1: $Z=1$. $dS = 0 + 10\%$. Price 110.
Path 2: $Z=-1$. $dS = 0 - 10\%$. Price 90.
Is the mean 100?
(Arithmetic Mean yes. Geometric Mean $\approx 99.5$ due to drag).

**Exercise 2 (Scale):**
Why does volatility scale with $\sqrt{T}$?
(Because variance scales linearly with $T$. Volatility is $\sqrt{Var}$).

## VI. References
-   Shreve, S. *Stochastic Calculus for Finance II*.
-   Wilmott, P. *Paul Wilmott on Quantitative Finance*.
