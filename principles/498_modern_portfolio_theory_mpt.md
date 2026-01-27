# Modern Portfolio Theory MPT: Markowitz Algorithm

## I. Executive Summary

**Modern Portfolio Theory (MPT)**, pioneered by Harry Markowitz (1952), revolutionized finance by quantifying the benefits of diversification. It demonstrates that an investor can maximize **Expected Return** for a given level of **Risk** (Variance) by holding a portfolio of assets with imperfect correlations. The set of optimal portfolios forms the **Efficient Frontier**.

## II. Formal Definitions

### Definition 2.1 (Portfolio Variance)
For a 2-asset portfolio ($w_1, w_2$):
$$ \sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\rho_{1,2}\sigma_1\sigma_2 $$
Key Insight: If $\rho_{1,2} < 1$, $\sigma_p$ is less than the weighted average volatility.
Risk is destroyed through diversification.

### Definition 2.2 (The Optimization Problem)
Maximize $w^T \mu$ subject to $w^T \Sigma w = \sigma_{target}^2$ and $\sum w_i = 1$.
-   $\mu$: Vector of Expected Returns.
-   $\Sigma$: Covariance Matrix.
-   $w$: Vector of weights.
Quadratic Programming problem.

## III. Theoretical Framework

### 3.1 Assumptions
1.  **Normality:** Returns are Gaussian. (MPT fails if tails are fat).
2.  **Rationality:** Investors maximize Utility (Mean-Variance).
3.  **Frictionless:** No transaction costs/taxes.

### 3.2 The Efficient Frontier
The hyperbola in Risk/Return space.
Top half: **Efficient** (Max return for risk).
Bottom half: **Inefficient** (Min return for risk).
**Global Minimum Variance Portfolio (GMV):** The leftmost point on the curve (Lowest possible risk).

## IV. Strategic Applications

### 4.1 Estimation Error
"Garbage In, Garbage Out."
MPT is hypersensitive to $\mu$ (Expected Returns).
Small change in estimated return $\implies$ Huge change in Optimal Weight (Corner Solutions).
Analysts often use MPT for *Risk* (Min Variance) but ignore it for *Return*.

### 4.2 Diversification Ratio
$DR = \frac{\sum w_i \sigma_i}{\sigma_p}$.
Measure of diversification benefit.
If $\rho = 1$, $DR = 1$.
Optimizers target high DR.

## V. Exercises

**Exercise 1 (Correlation Shock):**
In crisis, $\rho \to 1$.
Diversification vanishes when needed most.
$\sigma_p$ Spikes.
The "Tail Risk" of MPT.

**Exercise 2 (Constraint Effect):**
Long Only constraint ($w_i \ge 0$).
Shrinks the Efficient Frontier.
Shorting allows hedging, pushing the frontier left (lower risk).

## VI. References
-   Markowitz, H. *Portfolio Selection*.
-   Meucci, A. *Risk and Asset Allocation*.
