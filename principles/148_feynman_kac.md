# Feynman-Kac Theorem: The Bridge 

## I. Executive Summary

The **Feynman-Kac Theorem** is the bridge between **Stochastic Differential Equations (SDEs)** and **Partial Differential Equations (PDEs)**. It proves that solving for the Expected Value of a stochastic process (Monte Carlo) is mathematically equivalent to solving a deterministic heat equation (Finite Differences). This duality allows Quants to switch between simulation and analytic methods at will.

## II. Formal Definitions

### Definition 2.1 (The Theorem)
Given the SDE:
$$dX_t = \mu(X,t)dt + \sigma(X,t)dW_t$$
And a function $V(x,t) = E[ e^{-\int r ds} \psi(X_T) | X_t = x ]$.
(The expected discounted payoff).
Then $V(x,t)$ satisfies the PDE:
$$\frac{\partial V}{\partial t} + \mu \frac{\partial V}{\partial x} + \frac{1}{2}\sigma^2 \frac{\partial^2 V}{\partial x^2} - rV = 0$$

## III. Theoretical Framework

### 3.1 Physics vs Finance
Richard Feynman (Physics) used it for Path Integrals in Quantum Mechanics.
Mark Kac (Math) formalized it.
Black & Scholes (Finance) used it (implicitly) to derive their equation.
The "Diffusion" of a particle probability is the "Diffusion" of option value.

### 3.2 Computational Implications
-   **High Dimensions:** PDEs are hard to solve in 5 dimensions (Curse of Dimensionality). Monte Carlo (Expectation) is easy. Use RHS of theorem.
-   **Low Dimensions:** PDEs are fast and exact. Monte Carlo is noisy. Use LHS of theorem.

## IV. Strategic Applications

### 4.1 Grid Computing
If you need to price a Basket Option (10 stocks).
Solving a 10-D PDE grid is impossible ($100^{10}$ points).
Using Feynman-Kac, we simulate the 10 correlated paths and average the payoff.
Justified efficiently by the theorem.

### 4.2 Barrier Options
Solving PDE with boundary conditions (Value = 0 at Barrier) is often easier than simulating paths that "check" the barrier at every step.
Quants choose the method based on the theorem's duality.

## V. Exercises

**Exercise 1 (Drift Removal):**
Note the PDE term $\mu \frac{\partial V}{\partial x}$.
In risk-neutral pricing, $\mu$ becomes $r$ (Risk Free Rate).
The real-world drift of the stock drops out.
Why? Because Feynman-Kac solves for the *discounted* expectation, which equates to the no-arbitrage price.

**Exercise 2 (Heat Eq):**
If $r=0, \mu=0$, the equation becomes $\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 \frac{\partial^2 V}{\partial x^2} = 0$.
Classice Heat Equation.
Time flows backwards in option pricing (Known payoff at $T$, unknown at $t$).

## VI. References
-   Karatzas, I., & Shreve, S. *Brownian Motion and Stochastic Calculus*.
-   Oksendal, B. *Stochastic Differential Equations*.
