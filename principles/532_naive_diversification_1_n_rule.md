# Naive Diversification 1 N Rule: Heuristic

## I. Executive Summary

The **1/N Rule** (Naive Diversification) assigns equal weight ($w_i = 1/N$) to each of the $N$ available assets. While mathematically "suboptimal" compared to Mean-Variance Optimization (which finds optimal weights based on historical data), empirical research (DeMiguel et al.) shows 1/N often **outperforms** optimized portfolios out-of-sample due to estimation error in the optimizer parameters.

## II. Formal Definitions

### Definition 2.1 (The Allocation)
Assets: US Stocks, Int'l Stocks, Bonds, Gold, REITs. ($N=5$).
Allocation: 20% in each.
Rebalance annually to 20%.

### Definition 2.2 (Estimation Error)
Markowitz: $w^* = \Sigma^{-1} \mu$.
Inverting $\Sigma$ (Covariance) amplifies noise.
Small error in correlation $\implies$ Huge error in weights.
1/N has **Zero Estimation Error** (Weights are fixed, not estimated).
Bias-Variance Tradeoff:
Optimization: Low Bias, High Variance.
1/N: High Bias (wrong weights), Zero Variance.
In noisy markets, Zero Variance wins.

## III. Theoretical Framework

### 3.1 Diversification vs Number of Assets
Standard Deviation decays as $1/\sqrt{N}$.
Most benefit achieved by $N=20$.
1/N exploits this without needing input data.

### 3.2 Menu dependence
1/N depends on how assets are defined.
Menu A: "Stocks," "Bonds." (50/50).
Menu B: "Tech," "Health," "Energy," "Bonds." (75% stocks / 25% bonds).
"Partition Dependence."
The choice of asset classes *is* the active decision.

## IV. Strategic Applications

### 4.1 Plan Sponsor Default
401k Menus.
If you offer 10 Equity funds and 1 Bond fund.
Participants tend to allocate $1/N$ $\implies$ 90% Equity.
Design of the menu nudges the allocation.

### 4.2 Equal Weight Indices
S&P 500 Equal Weight (RSP).
Outperforms Cap Weight historically.
Size factor exposure (1/N overweights small caps).
Contrarian rebalancing (Sell winners, buy losers to reset to 1/N).

## V. Exercises

**Exercise 1 (The Talmud Rule):**
"Let every man divide his money into three parts, and invest a third in land, a third in business, and a third let him keep by him in reserve."
1500 year old 1/N strategy. Real Estate, Equities, Cash.

**Exercise 2 (Turnover):**
1/N requires selling winners.
Cap Weight generally lets winners run (Momentum).
1/N has higher transaction costs and taxes.

## VI. References
-   DeMiguel, V., Garlappi, L., & Uppal, R. *Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?*.
-   Benartzi, S. & Thaler, R. *Naive Diversification Strategies in Defined Contribution Saving Plans*.
