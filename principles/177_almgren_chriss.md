# Almgren-Chriss Model: Optimal Execution

## I. Executive Summary

VWAP minimizes variance from the average price. But what if the price is drifting up? Waiting costs money. **Almgren-Chriss (2000)** formalized the tradeoff between **Volatility Risk** (Waiting too long) and **Market Impact** (Trading too fast). It provides a closed-form "Efficient Frontier of Execution," allowing traders to choose a trajectory that minimizes total implementation shortfall for a given risk aversion.

## II. Formal Definitions

### Definition 2.1 (Impact Model)
-   Permanent Impact: $g(v) = \gamma v$. (Moves the price forever).
-   Temporary Impact: $h(v) = \epsilon + \eta v$. (Moves price only during trade).
-   $v$: Trading Rate (Shares/sec).

### Definition 2.2 (Cost Function)
$$E[C] = \frac{1}{2} \gamma X^2 + \int_0^T (\epsilon + \eta v(t)) v(t) dt$$
$$Var[C] = \sigma^2 \int_0^T (X - x(t))^2 dt$$
-   $X$: Total shares.
-   $x(t)$: Shares cumulative at time $t$.

## III. Theoretical Framework

### 3.1 The Solution (Hyperbolic Cosine)
The optimal trading trajectory is not linear.
$$x(t) = X \frac{\sinh(\kappa(T-t))}{\sinh(\kappa T)}$$
-   If Risk Aversion $\to 0$: Linearly (TWAP). Minimize Impact.
-   If Risk Aversion $\to \infty$: Sell everything NOW (Initial Program). Minimize Risk.
-   Optimal: Front-loaded. Sell more at start, taper off.

### 3.2 The $\kappa$ Parameter
$$\kappa \propto \sqrt{\frac{\text{RiskAversion} \times \text{Volatility}}{\text{Liquidity}}}$$
High Volatility $\implies$ Trade Faster.
Low Liquidity $\implies$ Trade Slower.

## IV. Strategic Applications

### 4.1 Implementation Shortfall (IS)
The metric is "Arrival Price" (Price when decision was made).
Almgren-Chriss minimizes IS.
It explains why "Fire Sales" happen (High Volatility forces fast liquidation despite massive impact).

### 4.2 Adaptive AC
Update $\sigma$ and Liquidity ($\eta$) in real-time.
If volatility spikes during execution, the Algo accelerates the selling pressure (Panic Selling mathematically justified).

## V. Exercises

**Exercise 1 (Optimization):**
You have 1 hour to sell 1M shares.
Option A: Sell 1M now. Impact $1. Risk $0.
Option B: Sell 1 per second. Impact $0.10. Risk: Price might drop $5.
AC finds the curve between A and B.

**Exercise 2 (Dark Pools):**
Dark Pools have 0 Market Impact (mostly).
AC Model suggests routing 100% to Dark Pool?
No, because Execution Probability is low. Risk is "Non-Execution."
Optimized AC includes Dark Pool probability.

## VI. References
-   Almgren, R., & Chriss, N. *Optimal Execution of Portfolio Transactions*.
-   Cartea, A., et al. *Algorithmic and High-Frequency Trading*.
