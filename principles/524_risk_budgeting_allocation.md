# Risk Budgeting Allocation: Spending Units

## I. Executive Summary

**Risk Budgeting** allocates the portfolio based on **Risk Units** (Contribution to Volatility) rather than Capital Units (Dollars). A manager might have a "Budget" of 10% annual volatility. They "spend" this budget on different asset classes. Unlike Capital Allocation, this ensures that high-volatility assets (Equities) don't dominate the risk profile simply because they have a large dollar weight.

## II. Formal Definitions

### Definition 2.1 (The Budget)
Total Risk Budget: 1000 basis points of Variance.
Allocations:
-   Equity: 400 bps.
-   Rates: 400 bps.
-   Credit: 200 bps.
Determine weights $w_i$ such that $w_i \times MRC_i = Target_i$.

### Definition 2.2 (Risk Parity connection)
Risk Parity is a specific case of Risk Budgeting where the budget is *equal* for all assets.
Risk Budgeting allows unequal targets (e.g., "We are an Equity fund, so 80% of risk should come from Equities").

## III. Theoretical Framework

### 3.1 Factor Budgeting
Instead of Asset Classes, budget risk to Factors (Growth, Inflation, liquidity).
"We want 50% Inflation Risk exposure."
Harder to implement (Mapping assets to factors is unstable).

### 3.2 Dynamic Volatility Scaling
Target Vol = 10%.
If realized vol rises to 20%, cut position size by half.
Keeps risk usage constant.
"Constant Volatility" strategy.
Improves Sharpe Ratio typically (Vol clustering).

## IV. Strategic Applications

### 4.1 Pension Funds
Traditional: 60% Equity / 40% Bond.
Risk Terms: 90% Equity Risk / 10% Bond Risk.
Pension Board thinks they are diversified. Risk Budgeting reveals they are just an Equity fund.
Action: Leverage Bonds or reduce Equity to balance the budget.

### 4.2 Alpha Budgeting
Allocating "Tracking Error" budget to active managers.
Manager A gets 2% TE budget. Manager B gets 4%.
Ensures active risk is distributed efficiently.

## V. Exercises

**Exercise 1 (Correlation effect):**
If Equity-Bond correlation rises.
Portfolio Vol rises.
Breaches Risk Budget.
Must sell both?
De-leveraging in a correlation crisis.

**Exercise 2 (Benchmarks):**
Benchmarked funds risk budget is relative to the index.
"Active Risk Budget."
Absolute return funds risk budget is relative to Cash.
"Total Risk Budget."

## VI. References
-   Meucci, A. *Risk and Asset Allocation*.
-   Roncalli, T. *Introduction to Risk Parity and Budgeting*.
