# Partial Derivatives: Multi-Variable Optimization

## I. Executive Summary

Markets are multi-dimensional. A portfolio's value depends on the S&P 500, Interest Rates, Oil Prices, and Inflation simultaneously. Single-variable calculus ($dy/dx$) is insufficient. We need **Partial Derivatives** ($\partial z / \partial x$) to isolate the effect of one variable while holding others constant. This is the math of the **Gradient Vector** and Portfolio Optimization.

## II. Formal Definitions

### Definition 2.1 (Partial Derivative)
Let $f(x, y)$ be a function of two variables.
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x,y)}{h}$$
Interpretation: Slope in the $x$-direction (East-West), ignoring $y$ (North-South).

### Definition 2.2 (The Gradient $\nabla f$)
The vector of all partial derivatives.
$$\nabla f = \begin{bmatrix} \frac{\partial f}{\partial x_1} \\ \frac{\partial f}{\partial x_2} \\ \vdots \\ \frac{\partial f}{\partial x_n} \end{bmatrix}$$
*Property:* The Gradient points in the direction of steepest ascent.

## III. Theoretical Framework

### 3.1 The Total Differential
Changes in $V(S, r, \sigma)$ come from all sources:
$$dV = \frac{\partial V}{\partial S}dS + \frac{\partial V}{\partial r}dr + \frac{\partial V}{\partial \sigma}d\sigma$$
*Risk Management:* To hedge a portfolio, you must neutralize the terms you don't want (e.g., make $\frac{\partial V}{\partial r} = 0$ by selling bonds) while keeping the terms you want.

### 3.2 The Jacobian and Hessian
-   **Jacobian ($J$):** First derivative matrix (Slope map).
-   **Hessian ($H$):** Second derivative matrix (Curvature map).
    $$H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$$
    Used to check if a portfolio allocation is a Maximum (Peak), Minimum (Valley), or Saddle Point.

## IV. Strategic Applications

### 4.1 Portfolio Variance Minimization
Objective: Minimize $\sigma_p^2 = w^T \Sigma w$.
Subject to constraint: $\sum w_i = 1$.
We take the partial derivatives with respect to each weight $w_i$ and set to 0.
This solves for the **Global Minimum Variance Portfolio**.

### 4.2 Cross-Gamma
$\frac{\partial^2 V}{\partial S_1 \partial S_2}$.
How does the delta of Asset 1 change when Asset 2 moves?
*Example:* USD/JPY options might be sensitive to Gold prices.
Ignoring Cross-Gamma leads to "Correlation Breakdown" losses.

## V. Exercises

**Exercise 1 (Gradient Ascent):**
Profit Function $P(x,y) = -x^2 -y^2 + 10$. (A hill with peak at 0,0).
$\nabla P = [-2x, -2y]$.
Current position $(1, 2)$.
$\nabla P = [-2, -4]$.
Result: To increase profit, reduce $x$ and reduce $y$ (move towards 0,0).
The vector $(-2, -4)$ tells the algo exactly which way to trade.

**Exercise 2 (Hedging):**
You have $1M exposure to Equity Risk and $500k to Rate Risk.
Calculus says:
$dL = \Delta_{Eq} dS + \Delta_{Rate} dr$.
You buy S&P Puts to kill $\Delta_{Eq}$.
You Short Treasuries to kill $\Delta_{Rate}$.
Total Differential $dL \approx 0$. (Perfect Hedge).

## VI. References
-   Marsden, J. *Vector Calculus*.
-   Meucci, A. *Risk and Asset Allocation*.
