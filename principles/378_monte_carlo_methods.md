# Monte Carlo Methods: Stochastic Simulation

## I. Executive Summary

**Monte Carlo Simulation** estimates the value of complex derivatives by simulating thousands of random price paths and averaging the discounted payoffs. It is the method of choice for **Path Dependent** options (Asians, Lookbacks) and high-dimensional problems where analytical formulas (Black-Scholes) don't exist. Central Limit Theorem dictates that error scales with $\frac{1}{\sqrt{N}}$.

## II. Formal Definitions

### Definition 2.1 (Geometric Brownian Motion Simulation)
Discrete time step $\Delta t$.
$$ S_{t+\Delta t} = S_t \exp\left( (r - \frac{1}{2}\sigma^2)\Delta t + \sigma \sqrt{\Delta t} Z \right) $$
$Z \sim N(0,1)$ (Standard Normal Random Variable).
Generate $Z$ using Box-Muller or Inverse Transform.

### Definition 2.2 (Pricing)
$V_0 = e^{-rT} \frac{1}{N} \sum_{i=1}^{N} Payoff(Path_i)$.
Standard Error $SE = \frac{std(Payoffs)}{\sqrt{N}}$.
To reduce error by 10x, must increase $N$ by 100x.

## III. Theoretical Framework

### 3.1 Variance Reduction
"Brute force" Monte Carlo is slow.
Techniques to reduce variance ($\sigma^2$) without increasing $N$:
1.  **Antithetic Variates:** For every path $Z$, simulate $-Z$. Negative correlation reduces variance of the average.
2.  **Control Variates:** Use a correlated asset with known price (e.g., Geometric Asian) to adjust the estimate of the unknown asset (Arithmetic Asian).

### 3.2 Random Number Generation (RNG)
Pseudo-Random Numbers (Mersenne Twister).
True Randomness not required, just uniform distribution properties.
**Low Discrepancy Sequences (Sobol):** "Quasi-Monte Carlo." Fills space more evenly than random. Convergence $O(1/N)$. Faster.

## IV. Strategic Applications

### 4.1 CVA Calculation
Credit Valuation Adjustment requires simulating portfolio value at all future time steps across thousands of scenarios.
"Monte Carlo on Monte Carlo."
Massive computational burden (Grid Computing).

### 4.2 American Options
Longstaff-Schwartz (Least Squares Monte Carlo).
Backward induction on simulated paths.
Regress continuation value against state variables.
Solved the "American Option Monte Carlo" problem.

## V. Exercises

**Exercise 1 (The Seed):**
For reproducibility (auditing), the Random Seed must be fixed.
If code runs twice with different seeds, prices differ.
"Monte Carlo Noise."
Traders hate noise (PnL fluctuates due to RNG).

**Exercise 2 (Discretization Bias):**
Simulating a Barrier Option.
If $\Delta t$ is large (Daily), price path might "jump" over the barrier relative to continuous time.
Requires "Brownian Bridge" interpolation to check probability of hitting barrier *between* steps.

## VI. References
-   Glasserman, P. *Monte Carlo Methods in Financial Engineering*.
-   Jaeckel, P. *Monte Carlo Methods in Finance*.
