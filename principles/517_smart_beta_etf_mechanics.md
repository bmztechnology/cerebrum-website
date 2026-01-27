# Smart Beta ETF Mechanics: Implementation

## I. Executive Summary

**Smart Beta** (Strategic Beta) bridges Active and Passive management. It uses rules-based indices to capture Factor Premia (Value, Mom, etc.) or exploit anomalies (Low Vol, Equal Weight). Unlike Market-Cap weighted indices (S&P 500), Smart Beta breaks the link between Price and Weight, avoiding the "Buy High" bias of cap-weighting. However, it introduces **Rebalancing Drag**, **Capacity constraints**, and **Model Risk**.

## II. Formal Definitions

### Definition 2.1 (Fundamental Indexing)
Robert Arnott.
Weight by Sales, Cash Flow, Dividends, or Book Value.
Not Price.
Effect: Contra-trading against the market.
If Stock Price doubles (Multiples expand), Market Cap weight doubles. Fundamental weight stays same $\implies$ Smart Beta Sells.
Systematic "Buy Low, Sell High."
Value Tilt.

### Definition 2.2 (Equal Weighting)
S&P 500 Equal Weight (RSP).
1/500 in each.
Small Cap Tilt + Value Tilt (relative to Cap Weight).
Outperforms Cap Weight in long run, but higher volatility and turnover.

## III. Theoretical Framework

### 3.1 Capacity
Cap-Weighted: "Macro Consistent." Everyone can hold the market portfolio.
Smart Beta: deviate from market weights.
If *everyone* indexed fundamentally, prices would shift to eliminate the alpha.
Smart Beta requires "Dumb Beta" investors on the other side.

### 3.2 Front Running
Indices are transparent (Rules published).
Rebalancing dates known.
HFT/Hedge Funds front-run the rebalance (buy likely additions, sell deletions).
"Index Drag."
Smart Beta funds try to randomize execution to hide intent.

## IV. Strategic Applications

### 4.1 Dividend Aristocrats
NOBL / VIG.
Rules: "Raised dividends for 25 years."
Factor exposures: Quality + Low Vol + Value.
Marketing genius: Selling factors as simple stories.

### 4.2 Factor Timing
Switching between VLUE and MTUM ETFs based on economic cycle.
Research suggests Factor Timing destroys value (investors chase performance).
"Diversify and Hold" is superior.

## V. Exercises

**Exercise 1 (Expense Ratios):**
SPY: 3bps.
Smart Beta: 20-40bps.
Is the Alpha > Fees?
Factor premiums are compressing.
Fee hurdle is real.

**Exercise 2 (Sector Biases):**
Low Vol ETF loads up on Utilities (40% weight?).
Unintended sector bet.
"Constrained" Smart Beta forces sector neutrality (Pick lowest vol stocks *within* each sector).

## VI. References
-   Arnott, R. *Fundamental Indexation*.
-   BlackRock. *Factor Investing and Smart Beta*.
