# Variance Reduction Techniques: Monte Carlo Optimization

## I. Executive Summary

Standard Monte Carlo converges slowly ($1/\sqrt{N}$). **Variance Reduction** techniques aim to improve precision without increasing simulation count ($N$). They transform the statistical problem to one with a lower variance estimator. Key methods include **Antithetic Variates**, **Control Variates**, **Importance Sampling**, and **Stratified Sampling**.

## II. Formal Definitions

### Definition 2.1 (Importance Sampling)
Change the probability measure to simulate "important" events more often.
Pricing an OTM Put (Crash). In normal MC, 1/1000 paths hit.
Shift the drift $\mu$ to negative (Force the crash).
Weight the payoff by likelihood ratio (Radon-Nikodym derivative).
Result: 500/1000 paths hit. Variance of estimator shrinks massively for rare events.

### Definition 2.2 (Stratified Sampling)
Divide the probability space into "Strata" (Bins).
Sample proportionally from each bin.
Ensures the random generator doesn't "clump" (missing the tails).
Latin Hypercube Sampling.

## III. Theoretical Framework

### 3.1 Control Variates
Use a simpler, correlated asset $Y$ with known price $E[Y]$.
Estimate $X$ using:
$$ X^* = X - \beta(Y - E[Y]) $$
Variance reduces by factor $(1-\rho_{xy}^2)$.
Example: Price Asian Option (X) using Geometric Asian (Y) as control. Highly correlated. Massive speedup.

### 3.2 Quasi-Monte Carlo (Low Discrepancy)
Sobol, Halton, Faure sequences.
Deterministic sequences that fill the hypercube uniformly.
Avoids clusters.
Convergence rate improves to $\approx \mathcal{O}(1/N)$ (for low dimensions).
Standard in banking for high-dim pricing.

## IV. Strategic Applications

### 4.1 Greeks Calculation
Calculating Delta via Finite Difference in MC (Bump and Revalue).
Common Random Numbers (CRN): Use *same* seed/path for $S$ and $S+\epsilon$.
Variance of difference is minimized.
Otherwise, noise dominates the sensitivity.

### 4.2 Pathwise Sensitivity (Malliavin Calculus)
Differentiate the simulation path itself.
Calculate Delta in a single run.
"adjoint differentiation."
Computationally efficient for Greeks of exotics.

## V. Exercises

**Exercise 1 (Antithetic Limits):**
Only works if payoff is monotonic/linearish.
If payoff is symmetric (Straddle), $Payoff(Z)$ and $Payoff(-Z)$ are positively correlated.
Variance *increases*.
Must understand payoff structure.

**Exercise 2 (Drift Shift):**
Importance Sampling requires knowing *where* the importance region is.
If you shift drift the wrong way, variance explodes infinite.
Adaptive Importance Sampling learns the optimal shift.

## VI. References
-   Glasserman, P. *Monte Carlo Methods in Financial Engineering*.
-   L'Ecuyer, P. *Quasi-Monte Carlo Methods*.
