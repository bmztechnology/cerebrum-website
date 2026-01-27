# Fokker-Planck Equation: Probability Evolution

## I. Executive Summary

While SDEs describe the path of a single particle (price), the **Fokker-Planck Equation** (or Kolmogorov Forward Equation) describes the evolution of the **entire probability density function (PDF)** over time. It tells us how the "Cloud of Probability" diffuses and drifts as time passes. It is essential for modelling how risk (VaR) evolves into the future.

## II. Formal Definitions

### Definition 2.1 (The PDE)
For a process $dX_t = \mu(x,t)dt + \sigma(x,t)dW_t$, the density $p(x,t)$ evolves as:
$$\frac{\partial p}{\partial t} = -\frac{\partial}{\partial x}[\mu(x,t)p] + \frac{1}{2}\frac{\partial^2}{\partial x^2}[\sigma^2(x,t)p]$$
-   Term 1: **Advection** (Drift moves the cloud).
-   Term 2: **Diffusion** (Volatility spreads the cloud).

## III. Theoretical Framework

### 3.1 Relation to Heat Equation
If $\mu=0$ and $\sigma=1$, Fokker-Planck becomes:
$\frac{\partial p}{\partial t} = \frac{1}{2} \frac{\partial^2 p}{\partial x^2}$.
Standard Diffusion. The bell curve widens with $\sqrt{t}$.

### 3.2 Stationary Distribution
As $t \to \infty$, does the probability stabilize?
Set $\frac{\partial p}{\partial t} = 0$.
Solve the ODE.
For Mean Reverting processes (OU), yes. It converges to a stable Gaussian.
For Random Walk, no. It spreads to infinity (0 density everywhere).

## IV. Strategic Applications

### 4.1 Value at Risk Forecasting
Start with today's price cloud (a Delta function at $S_0$).
Evolve it forward 10 days using Fokker-Planck.
The resulting shape $p(x, 10)$ gives the exact tail probabilities for VaR.
More accurate than assuming "Normal Distribution scaling."

### 4.2 Optimal Control (HJB Equation)
Hamilton-Jacobi-Bellman equation is related to the dual of Fokker-Planck.
Used to solve "Lifetime Portfolio Choice" problems (Merton Problem).
How much to consume/save/invest to maximize probability of wealth condition.

## V. Exercises

**Exercise 1 (Drift Effect):**
If $\mu > 0$, the $-\frac{\partial}{\partial x}[\mu p]$ term pushes the peak of the PDF to the right.
The "Most Likely Price" increases over time.

**Exercise 2 (Conservation of Mass):**
$\int_{-\infty}^{\infty} p(x,t) dx = 1$.
The equation conserves probability.
The cloud changes shape, but total probability is always 100%.
This is a useful check for numerical solvers.

## VI. References
-   Risken, H. *The Fokker-Planck Equation*.
-   Gardiner, C. *Stochastic Methods*.
