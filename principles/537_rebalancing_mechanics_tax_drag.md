# Rebalancing Mechanics Tax Drag: Discipline

## I. Executive Summary

**Rebalancing** is the process of restoring a portfolio to its target allocation. It forces the investor to "Buy Low and Sell High" (selling winners, buying losers), generating a **Rebalancing Bonus** (volatility pumping) in mean-reverting markets. However, in trending markets, it creates drag. In taxable accounts, the **Tax Cost** of rebalancing can outweigh the benefits, necessitating smarter strategies like **Cash Flow Rebalancing** and **Tax Loss Harvesting**.

## II. Formal Definitions

### Definition 2.1 (Rebalancing Bonus)
Geometric Return of Rebalanced Portfolio > Weighted Average Geometric Return of Assets.
For two assets with variance $\sigma^2$:
Bonus $\approx \frac{1}{2} \sigma^2 (1 - \rho)$.
Depends on Volatility and Low Correlation.
High Vol + Low Corr = High Bonus.

### Definition 2.2 (Methods)
1.  **Calendar:** Every Quarter. (Simple, ignores market moves).
2.  **Threshold (Tolerance Bands):** If weight $\pm$ 5% from target. (optimal).
Rebalances only when necessary.

## III. Theoretical Framework

### 3.1 Momentum Conflict
Rebalancing fights Momentum.
Momentum: Winners keep winning.
Rebalancing: Sell winners.
In strong trends, Rebalancing reduces return (but reduces risk).
Solution: Wider bands let momentum run a bit.

### 3.2 Tax Alpha
Selling winners triggers Capital Gains Tax.
Cost: $Gain \times TaxRate$.
Benefit: Risk reduction + Rebalancing Bonus.
If Cost > Benefit, don't sell.
Strategy: Rebalance with *New Cash* (Inflows). Buy the underweight asset.
Strategy: Rebalance with Dividends.

## IV. Strategic Applications

### 4.1 Tax Loss Harvesting (TLH)
Asset A is down.
Sell Asset A to realize loss (offsets gains).
Buy Asset B (highly correlated substitute) to maintain exposure.
"Wash Sale Rule": Cannot buy "Substantially Identical" asset for 30 days.
Swap Coke for Pepsi. Swap S&P 500 for Russell 1000.
Generates "Tax Alpha" (deferral of tax liability).

### 4.2 Direct Indexing
Own 500 stocks instead of ETF.
Harvest losses on individual losers even if index is up.
Higher TLH yield.

## V. Exercises

**Exercise 1 (The 2009 Bottom):**
Market crashed 50%.
Bonds rallied.
Rebalancing (Threshold) forced selling Bonds and buying Stocks in March 2009.
Captured the entire recovery.
Psychologically difficult ("Catching a falling knife").
Automated rules saved the portfolio.

**Exercise 2 (Optimal Width):**
Transaction Costs vs Tracking Error.
Illiquid assets (PE/Real Estate) cannot be rebalanced easily.
Use liquid proxy? Or wider bands.

## VI. References
-   Bernstein, W. *The Rebalancing Bonus*.
-   Kitces, M. *Optimal Rebalancing Time Horizons*.
