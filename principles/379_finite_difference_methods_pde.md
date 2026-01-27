# Finite Difference Methods PDE: The Grid

## I. Executive Summary

**Finite Difference Methods (FDM)** solve the Black-Scholes **Component Partial Differential Equation (PDE)** numerically by discretizing Time ($t$) and Price ($S$) into a Grid / Mesh. Unlike Monte Carlo (which simulates paths), FDM solves for the price of the option across the *entire grid* simultaneously using backward induction. It is ideal for **American Options** and Barriers.

## II. Formal Definitions

### Definition 2.1 (Discretization)
Derivative approximations:
$$ \frac{\partial V}{\partial t} \approx \frac{V_{i, j+1} - V_{i, j}}{\Delta t} $$
$$ \frac{\partial V}{\partial S} \approx \frac{V_{i+1, j} - V_{i-1, j}}{2 \Delta S} $$
Substitute into Black-Scholes PDE.
Results in a system of linear equations: $A V_{j} = V_{j+1}$.

### Definition 2.2 (Schemes)
-   **Explicit:** Simple to code. Calculate $t$ from $t+1$ directly. Unstable if steps too large (Courant condition).
-   **Implicit:** Solves matrix equation. Stable for any step size.
-   **Crank-Nicolson:** Average of Explicit and Implicit. 2nd order accuracy. The Gold Standard.

## III. Theoretical Framework

### 3.1 Boundary Conditions
Must specify value at edges of Grid:
-   $S=0$: Option Value $\approx$ Payoff (0 for Call).
-   $S \to \infty$: Asymptotic behavior (Call $\approx S - Ke^{-rT}$).
-   $t=T$: Payoff Function (Terminal Condition).

### 3.2 Stability and Convergence
Explicit method explodes (Oscillates to infinity) if $\Delta t > \frac{1}{2} \Delta S^2$.
Implicit methods dampen errors.
Grid density matters. Too coarse $\approx$ bad price. Too fine $\approx$ slow.

## IV. Strategic Applications

### 4.1 Barrier Options
FDM handles barriers naturally.
Set Grid points at Barrier Level.
Enforce Boundary Condition $V_{barrier} = 0$ (for Knock Out).
No need for Brownian Bridge. Very accurate.

### 4.2 Local Volatility Surface
Using Dupire's equation.
PDE allows variable $\sigma(S, t)$.
Can price exotics using the full Skew/Smile surface embedded in the grid.

## V. Exercises

**Exercise 1 (American Early Exercise):**
At each time step $j$, check:
$V_{i,j} = \max(\text{Continuation Value}, \text{Intrinsic Value})$.
Simple `max()` operation in the loop.
Makes FDM superior to basic Monte Carlo for American Puts.

**Exercise 2 (High Dimensions):**
FDM suffers "Curse of Dimensionality."
1 Asset (1D Grid) = Fast.
2 Assets (2D Grid) = Manageable.
3 Assets (3D Grid) = Slow.
10 Assets = Impossible. (Use Monte Carlo).

## VI. References
-   Duffy, D.J. *Finite Difference Methods in Financial Engineering*.
-   Wilmott, P. *On Quantitative Finance*.
