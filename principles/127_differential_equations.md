# Differential Equations: The Physics of Finance

## I. Executive Summary

A Differential Equation (DE) relates a function to its derivatives. Since nature (and markets) is governed by rates of change, DEs are the "Source Code" of reality. The Holy Grail of quantitative finance, the **Black-Scholes Equation**, is a Partial Differential Equation (PDE) identical to the Heat Equation in thermodynamics. Solving the DE gives the fair price of the derivative.

## II. Formal Definitions

### Definition 2.1 (Ordinary Differential Equation - ODE)
Contains only one independent variable.
e.g., Malthusian Growth (Compound Interest):
$$\frac{dP}{dt} = rP \implies P(t) = P_0 e^{rt}$$

### Definition 2.2 (Partial Differential Equation - PDE)
Contains partial derivatives (multi-variable).
The Black-Scholes PDE:
$$\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + rS \frac{\partial V}{\partial S} - rV = 0$$

## III. Theoretical Framework

### 3.1 Interpreting Black-Scholes (The Heat Eq)
Terms interpretation:
-   $\frac{\partial V}{\partial t}$: Time Decay (Theta).
-   $\frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2}$: Volatility Risk (Gamma * Variance).
-   $rS \frac{\partial V}{\partial S}$: Drift (Delta * Interest).
-   $rV$: Discounting.
The equation says: **Time Decay + Volatility Gains + Drift = Risk Free Rate.**
If this equation does not hold, an Arbitrage opportunity exists.

### 3.2 Stochastic Differential Equations (SDE)
Combining DEs with Randomness (Brownian Motion).
See Chapter 124. The solution to the SDE follows a probability distribution (Fokker-Planck equation).

## IV. Strategic Applications

### 4.1 Numerical Solutions (Finite Difference Method)
For complex options (American, Exotics) where no analytical formula exists, we solve the PDE numerically.
Discretize time and price into a Grid.
Iterate backwards from Expiration to Today.
This maps the "Value Surface" of the option.

### 4.2 Mean Reversion Models (Ornstein-Uhlenbeck)
To model Rates or Volatility, we use a DE that pulls back to a mean $\mu$.
$$dx_t = \theta (\mu - x_t)dt + \sigma dW_t$$
-   If $x_t > \mu$, drift is negative.
-   If $x_t < \mu$, drift is positive.
-   $\theta$: Speed of reversion.
*Trading:* Estimate $\theta$. If $\theta$ is high, the asset is range-bound. Fade the edges.

## V. Exercises

**Exercise 1 (Compound Interest):**
Solve $\frac{dy}{dt} = 0.05y$.
Separation of variables: $\frac{dy}{y} = 0.05 dt$.
Integrate: $\ln(y) = 0.05t + C$.
Exponentiate: $y = e^{0.05t} e^C = A e^{0.05t}$.
This is the standard Continuous Compounding formula.

**Exercise 2 (Heat Diffusion):**
Why is Option Pricing like Heat Diffusion?
(At expiration, the payoff is a sharp spike [Intrinsic Value]. As time moves backward, this "sharpness" diffuses and smooths out into a bell curve shape due to volatility, just as a hot spot in a metal rod diffuses heat over time).

## VI. References
-   Black, F., & Scholes, M. (1973). *The Pricing of Options and Corporate Liabilities*.
-   Wilmott, P. *This is why you are not a Physicist*.
