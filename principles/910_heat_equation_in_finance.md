# The Heat Equation in Finance

## I. Executive Summary

The **Black-Scholes Equation** is a partial differential equation (PDE) identical to the **Heat Equation** in Physics. Why? Because Information (Price Variance) diffuses through a market like Heat diffuses through a metal bar. This analogy allows physicists to solve financial problems using **Green's Functions** and **Boundary Conditions**.

## II. Formal Definitions

### Definition 2.1 (Feynman-Kac Formula)
Connects PDEs to Stochastic Processes.
To solve the PDE: $\frac{\partial V}{\partial t} + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + r S \frac{\partial V}{\partial S} - rV = 0$.
You can simulate millions of random paths (Monte Carlo) and take the average.
$V(t, S) = E_Q [ e^{-r(T-t)} \Phi(S_T) ]$.
Duality: Simulation vs Analytical Solution.

### Definition 2.2 (Diffusion Coefficient)
In Physics: $k$ (Thermal Conductivity).
In Finance: $\sigma^2$ (Volatility).
High Volatility $\implies$ Fast Diffusion of probability.
The bell curve spreads out wider and faster.

## III. Theoretical Framework

### 3.1 Time Reversal
Heat flows from Hot to Cold. Entropy increases. Information is lost.
Can you run the Heat Equation backwards?
"Inverse Problem."
Given the Option Price (Result), find the Volatility (Input).
Implied Volatility.
But running diffusion backwards is unstable (Noise explodes).
Why Implied Volatility surfaces are jagged.

### 3.2 Boundary Conditions
Call Option: $V(S, T) = \max(S-K, 0)$. (Terminal Condition).
Barrier Option: $V(H, t) = 0$. (Absorbing Boundary).
Physics: "Ice cube at the boundary."
PDE solvers (Finite Difference Method) handle these boundaries naturally.

## IV. Strategic Applications

### 4.1 Finite Difference Method (FDM)
Grid: Time steps $\times$ Price steps.
Calculate value at each node.
Used for American Options (Early Exercise).
"Free Boundary Problem."
Physics equivalent: Melting Stefan Problem.

### 4.2 Reaction-Diffusion Models
Biology: Predators and Prey interact while moving.
Finance: Price (Prey) and Volatility (Predator) interact.
Local Volatility models.
$\sigma(S, t)$.
Volatility depends on Price level.

## V. Exercises

**Exercise 1 (Smoothing):**
The Heat Equation smooths rough initial conditions.
A sharp "Kink" in the payoff (Strike K) becomes a smooth curve in the Option Price.
Gamma (Curvature) is highest at the kink.
Diffusion erodes the Gamma over time.

**Exercise 2 (Dimensionality Curse):**
1 Asset: 1D Heat Equation. Easy.
10 Assets (Basket Option): 10D Heat Equation. Impossible for PDE solvers.
Must use Monte Carlo.
Why correlation matrices are hard.

## VI. References
-   Wilmott, P. *The Mathematics of Financial Derivatives*.
-   Derman, E. *The Physics of Wall Street*.
