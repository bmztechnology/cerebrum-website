# Multi Factor Portfolio Construction: Mixing

## I. Executive Summary

**Multi-Factor Investing** combines single factors (Value, Momentum, Quality, Low Vol) into a unified portfolio. The "Holy Grail" is that these factors are often **uncorrelated** or negatively correlated (e.g., Value crashes when Momentum rallies). By combining them, investors can achieve a higher Sharpe Ratio than any single factor alone. The construction method (Mix of Funds vs Integrated Scoring) matters significantly.

## II. Formal Definitions

### Definition 2.1 (Mix of Funds / Top Down)
Allocation: 25% Value ETF + 25% Momentum ETF + 25% Quality ETF + 25% Low Vol ETF.
Simple to implement.
Problem: **Interaction Effect**.
Value ETF buys Stock A (Cheap). Momentum ETF shorts Stock A (Loser).
Net position: 0.
You pay fees to both funds to cancel each other out. "Wash trading" at portfolio level.

### Definition 2.2 (Integrated Scoring / Bottom Up)
For each stock, calculate Composite Z-Score:
$Z_{total} = 0.25 Z_{val} + 0.25 Z_{mom} + 0.25 Z_{qual} + 0.25 Z_{vol}$.
Rank stocks by $Z_{total}$.
Buy the top decile.
Avoids conflicting trades. Holds stocks that are "Reasonably Cheap AND Trending Up."
Empirically superior specific risk reduction.

## III. Theoretical Framework

### 3.1 Factor Cyclicality
Factors have "Seasons."
Value wins in recovery. Momentum wins in expansion. Low Vol wins in contraction.
Diversification smooths the ride.
Timing factors? Very hard to predict factor cycles. Even harder than timing the market.

### 3.2 Fama-French 5-Factor Regression
Analyze the portfolio:
$R_p = \beta_{mkt} + \beta_{SMB} + \beta_{HML} + \beta_{RMW} + \beta_{CMA}$.
Good Multi-Factor fund has positive loadings on all $\beta$ with no large negative exposures.

## IV. Strategic Applications

### 4.1 Enhanced Indexing
Start with S&P 500 weights.
Tilt weights towards High Factor Score stocks.
Target Tracking Error 1-2%.
Result: "Index Plus" return.

### 4.2 Long/Short Factor Neutral
Go Long Multi-Factor Portfolio.
Short Market Index.
Isolate pure Factor Premia.
Market Neutral setup.
High Sharpe, but low total return (Cash + Alpha).

## V. Exercises

**Exercise 1 (Rebalancing):**
Value stocks become Momentum stocks (as they go up).
Momentum stocks become Expensive (Growth).
Integrated portfolio naturally rotates.
Sell Winners (Value becomes Expensive) or Keep Winners (Value becomes Momentum)?
Momentum signal overrides Value signal to let winners run.

**Exercise 2 (Turnover):**
Momentum turnover: 100%/year.
Value turnover: 20%/year.
Multi-factor turnover is driven by the fastest factor.
Cost management is critical.

## VI. References
-   Bender, J. *Foundations of Factor Investing*.
-   Ang, A. *Asset Management: A Systematic Approach*.
