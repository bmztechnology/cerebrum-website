# The Alpha Factory Process

## I. Executive Summary

**Alpha** is not a stock pick; it is a **Process**. The **Alpha Factory** (Millennium, Citadel) is an industrial system for **Generating**, **Testing**, and **Deploying** trading signals. It treats strategies as perishable inventory. The synthesis outlines the workflow: **Data Ingestion $\to$ Feature Engineering $\to$ Backtesting $\to$ Risk Management $\to$ Allocation**.

## II. Formal Definitions

### Definition 2.1 (IS/OOS - In-Sample / Out-of-Sample)
Golden Rule: Never test on training data.
Train on 2010-2018.
Test on 2019-2023.
If performance holds, it *might* be real.
"Walk-Forward Optimization."

### Definition 2.2 (P-Hacking)
Running 1000 backtests.
Finding 1 that works by chance.
Selection Bias.
Alpha Factory defense: "Deflated Sharpe Ratio." Adjusting expectations based on number of trials.
Paper trading for 6 months before risking real capital (Incubation).

## III. Theoretical Framework

### 3.1 The Fundamental Law of Active Management
$IR = IC \times \sqrt{BR}$.
Information Ratio (Risk adj return).
Information Coefficient (Skill).
Breadth (Number of bets).
Alpha Factories focus on **Breadth**.
Thousands of small strategies (Weak IC) combining into a high IR.
Diversification of Alphas.

### 3.2 Decay of Alpha
Alpha is competition.
Once discovered, others find it.
Returns decay.
Half-life of a signal: Days to Months.
The Factory must run 24/7 to replace dying signals.
"Red Queen Race."

## IV. Strategic Applications

### 4.1 Pod Shops (Multi-Manager)
Allocating capital to 100 independent teams ("Pods").
Tight risk limits.
If a Pod loses 5%, they are fired.
If they win, they get huge payouts.
Darwinian evolution of strategies inside the firm.
Net result: High Sharpe, Low Beta.

### 4.2 Automation Pipeline
Data cleaning is 80% of the work.
Automated ingestion of tick data / alt data.
Unified simulation engine.
Researcher focuses only on logic ("If X then Y"), infrastructure handles the rest.

## V. Exercises

**Exercise 1 (The False Discovery):**
Strategy: "Buy on full moon."
Backtest shows 2.0 Sharpe.
Reason: Random chance.
Sanity check: Is there an economic rationale? No.
Reject.

**Exercise 2 (Correlation Check):**
New Strategy Y.
Looks good.
But Correlation(Y, Existing Strategy X) = 0.9.
Value added = 0.
Factory only pays for *Uncorrelated* Alpha.

## VI. References
-   Lopez de Prado, M. *Advances in Financial Machine Learning*.
-   Grinold & Kahn. *Active Portfolio Management*.
