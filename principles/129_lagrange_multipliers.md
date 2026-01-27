# Lagrange Multipliers: Optimization under Constraint

## I. Executive Summary

We rarely want to just "Maximize Profit." We want to "Maximize Profit *subject to* Maximum Risk = 10%." Or "Minimize Cost *subject to* Volume = 100k." **Lagrange Multipliers** ($\lambda$) provides the calculus framework to solve these constrained optimization problems. It is the core of **Markowitz Portfolio Theory** (Efficient Frontier) and Utility Maximization.

## II. Formal Definitions

### Definition 2.1 (The Lagrangian $\mathcal{L}$)
To maximize $f(x,y)$ subject to constraint $g(x,y) = c$.
Construct:
$$\mathcal{L}(x, y, \lambda) = f(x,y) - \lambda(g(x,y) - c)$$

### Definition 2.2 (First Order Conditions)
Set gradients to 0.
$\nabla \mathcal{L} = 0$.
1.  $\frac{\partial \mathcal{L}}{\partial x} = 0$
2.  $\frac{\partial \mathcal{L}}{\partial y} = 0$
3.  $\frac{\partial \mathcal{L}}{\partial \lambda} = 0 \implies g(x,y) = c$

## III. Theoretical Framework

### 3.1 Interpretation of $\lambda$ (Shadow Price)
$\lambda$ represents the rate of change of the objective function per unit change in the constraint.
In Portfolio Theory: $\lambda$ is the **marginal increase in Return** gained by allowing **1 unit more Variance**.
It effectively measures the "Cost" of the constraint.

### 3.2 The Efficient Frontier
Minimize Variance $\sigma^2$ subject to Expected Return $\mu = Target$.
Solving this Lagrangian for all possible Targets traces the hyperbola known as the Efficient Frontier.

## IV. Strategic Applications

### 4.1 Risk Parity (Dalio)
Allocate weights $w_i$ such that each asset contributes equal risk.
Subject to $\sum w_i = 1$.
Lagrangian optimization ensures that low-volatility assets (Bonds) get higher leverage, while high-vol (Crypto) get lower weights, perfectly balacing the risk budget.

### 4.2 Capital Allocation
Maximize Utility $U = E[R] - \frac{1}{2}A \sigma^2$.
Subject to Margin Constraint $\sum |w_i| \le LeverageLimit$.
If the constraint binds ($\lambda > 0$), you are borrowing.
If $\lambda = 0$, you are unconstrained.

## V. Exercises

**Exercise 1 (Math):**
Max $f(x,y) = xy$. Constraint $x + y = 100$.
$\mathcal{L} = xy - \lambda(x+y-100)$.
$\partial x: y - \lambda = 0 \implies y=\lambda$.
$\partial y: x - \lambda = 0 \implies x=\lambda$.
$\partial \lambda: x+y=100$.
$2\lambda = 100 \implies \lambda = 50$.
$x=50, y=50$. Max Area = 2500.

**Exercise 2 (Finance):**
Mean-Variance Optimization.
Why do we often get "Corner Solutions" (100% in one stock)?
(Because we usually add constraints $w_i \ge 0$ [No Shorting]. The Lagrangian hits the boundary inequality, forcing weights to 0).

## VI. References
-   Boyd, S. *Convex Optimization*.
-   Markowitz, H. *Portfolio Selection*.
