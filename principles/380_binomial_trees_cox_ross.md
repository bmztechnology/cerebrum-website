# Binomial Trees Cox Ross: Lattice Models

## I. Executive Summary

The **Cox-Ross-Rubinstein (CRR) Binomial Tree** models asset price dynamics as a discrete random walk where price can move **Up** ($u$) or **Down** ($d$) at each step. By constructing a recombining tree (Lattice) and working backward from maturity (Backward Induction), it provides an intuitive and powerful method for pricing **American Options** and visualization of the pricing process.

## II. Formal Definitions

### Definition 2.1 (Parameters)
In limit $\Delta t \to 0$, must match geometric Brownian motion.
$$ u = e^{\sigma \sqrt{\Delta t}} $$
$$ d = e^{-\sigma \sqrt{\Delta t}} = 1/u $$
$$ p = \frac{e^{r \Delta t} - d}{u - d} $$ (Risk Neutral Probability).

### Definition 2.2 (Backward Induction)
1.  Calculate terminal payoffs at $T$.
2.  Step back to $T-1$:
    $V_{node} = e^{-r \Delta t} [p V_{up} + (1-p) V_{down}]$.
3.  Check Early Exercise: $V_{node} = \max(V_{node}, Intrinsic)$.
4.  Repeat to $t=0$.

## III. Theoretical Framework

### 3.1 Convergence to Black-Scholes
As steps $N \to \infty$, the Binomial distribution converges to Log-normal.
CRR price converges to BSM price.
However, convergence is oscillatory ("Sawtooth pattern").
Depending on whether Strike falls on a node or between nodes.
Modifications (Tian, Leisen-Reimer) smooth the convergence.

### 3.2 Trinomial Trees
Allow 3 moves: Up, Flat, Down.
More flexibility to match mean/variance.
Better stability.
Matrix form is Tridiagonal (similar to Explicit Finite Difference).

## IV. Strategic Applications

### 4.1 Teaching Tool
Explains "Risk Neutral Valuation" perfectly to non-quants.
"We hedge the risk, so probability doesn't matter, we use pseudo-probabilities."
Visualizes the Delta (Spread of option values / Spread of underlying).

### 4.2 Dividend Handling
Discrete Dividends break the recombining tree (Mesh gets messy).
Price drops by $D$ at ex-date.
Requires "Bushy Trees" (Non-recombining) or sophisticated coordinate shifts.

## V. Exercises

**Exercise 1 (Delta Calculation):**
Delta at node is simply $\frac{V_{up} - V_{down}}{S_{up} - S_{down}}$.
Gamma is difference of Deltas.
Greeks come for free in the tree.

**Exercise 2 (Impossible Probabilities):**
If $\sigma$ is very low or $r$ very high?
$p$ can go outside $[0, 1]$?
Violates No Arbitrage condition ($d < e^{rt} < u$).
Step size constraints.

## VI. References
-   Cox, J., Ross, S., & Rubinstein, M. *Option Pricing: A Simplified Approach*.
-   Rubinstein, M. *Implied Binomial Trees*.
