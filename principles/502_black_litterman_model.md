# Black Litterman Model: Bayesian Views

## I. Executive Summary

The **Black-Litterman Model** (Goldman Sachs, 1990) solves the "Corner Solution" problem of Markowitz MPT (where optimizers output extreme weights like 100% Emerging Markets, -500% Bonds). It combines a **Market Equilibrium Prior** (Reverse Optimized CAPM) with **Investor Views** (Subjective Forecasts) using **Bayesian Statistics**. The output is a stable, diversified set of optimal weights centered around the market benchmark.

## II. Formal Definitions

### Definition 2.1 (The Master Equation)
$$ E[R] = [(\tau \Sigma)^{-1} + P^T \Omega^{-1} P]^{-1} [(\tau \Sigma)^{-1} \Pi + P^T \Omega^{-1} Q] $$
-   $\Pi$: Implied Equilibrium Returns (The Prior).
-   $Q$: Vector of Views (e.g., "US outperforms EU by 2%").
-   $P$: Matrix mapping views to assets.
-   $\Omega$: Uncertainty of Views (Confidence).
-   $\tau$: Scalar.
Intuition: Posterior Return is weighted average of Market Equilibrium and My View.
If Confidence high ($\Omega$ small), weight moves to View.
If Confidence low ($\Omega$ large), weight stays at Market Cap.

### Definition 2.2 (Reverse Optimization)
Start with Market Cap Weights ($w_{mkt}$).
Assume Market is efficient MPT portfolio.
Solve for Returns: $\Pi = \lambda \Sigma w_{mkt}$.
These are the returns the market *expects* to justify current prices.
Use these as the baseline.

## III. Theoretical Framework

### 3.1 The Value of Humility
Standard MPT assumes we know Returns perfectly.
BL assumes we have "Vague" views.
Output portfolios are "shrunk" towards the benchmark.
Reduces turnover and extreme leverage.

### 3.2 Confidence ($\Omega$)
How to set diagonal of $\Omega$?
Often proportional to Variance of asset.
Or user input (0-100% confidence).

## IV. Strategic Applications

### 4.1 Asset Allocation
Global Macro Fund.
Baseline: MSCI World Weights.
View 1: "Bullish Japan" (Japan +5%). confidence 50%.
View 2: "Bearish Oil" (Energy -3%). confidence 20%.
BL Model tilts the portfolio slightly to Japan, barely touches Energy.
Robust construction.

### 4.2 Robo-Advisors
Many use Black-Litterman.
Prior: Passive Index.
Views: Valuation signals (CAPE ratio) or Momentum.
Allows systematic tilting without betting the farm.

## V. Exercises

**Exercise 1 (Neutral View):**
If View = Equilibrium Return.
Portfolio = Market Portfolio.
Passive investing is the special case where View = Market Price.

**Exercise 2 (Tau Scaling):**
Parameter $\tau$ is controversial.
Represents "Weight on views vs Weight on Prior."
Walters suggest setting $\tau$ based on sample size.

## VI. References
-   Black, F. & Litterman, R. *Global Portfolio Optimization*.
-   Idzorek, T. *A Step-by-Step Guide to the Black-Litterman Model*.
