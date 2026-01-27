# Transaction Cost Analysis (TCA): The Feedback Loop

## I. Executive Summary

**TCA** is the forensic science of trading. It answers: "Did the execution desk add value or destroy it?" TCA analyzes trades against benchmarks (Arrival Price, VWAP, Close) to identify systemic leaks. It is the feedback loop that optimizes the Smart Order Router (SOR) and Algo Wheel logic.

## II. Formal Definitions

### Definition 2.1 (Benchmarks)
-   **Arrival Price (AP):** Mid-price at order generation. (Measures IS).
-   **PWP (Participate with Price):** Average price over the interval weighted by participation.
-   **Interval VWAP:** VWAP during the life of the order.

### Definition 2.2 (Cost Breakdown)
$$\text{Total Cost} = \text{Spread} + \text{Impact} + \text{Trend} + \text{Delay}$$
TCA isolates "Trend" (Beta) from "Impact" (Alpha decay).
If you buy and price goes up because the whole market went up, that's not your fault (that's Trend).
If you buy and price goes up *only* in your stock, that's Impact (Your fault).

## III. Theoretical Framework

### 3.1 Pre-Trade vs Post-Trade
-   **Pre-Trade:** Estimating expected cost before trading (to set limits). "Expected Impact = 10bps."
-   **Post-Trade:** Measuring actual cost. "Actual Impact = 15bps."
-   **Optimization:** If Actual > Expected persistently, change the Algo.

### 3.2 Outlier Analysis
The "Fat Tail" of execution.
95% of trades strictly follow the model.
5% of trades suffer massive slippage (liquidity droughts).
TCA focuses on the 5%. Fixing these outliers improves performance more than tweaking the average.

## IV. Strategic Applications

### 4.1 Broker Evaluation
Broker A: $0.005/share comm. Impact 2bps.
Broker B: $0.001/share comm. Impact 10bps.
Retail chooses B (Low comms).
Pro chooses A (Low Total Cost).
Impact > Commissions for large size.

### 4.2 Algorithm Selection
Use TCA to classify volatility regimes.
Regime 1 (Low Vol): Use Limit Orders (Passive).
Regime 2 (High Vol): Use Aggressive IS Algos (Get out).
Automate this switch.

## V. Exercises

**Exercise 1 (The Hidden Cost):**
Trade 10,000 shares.
Broker "Free" (PFOF).
Execution Price: $50.05. (Mid was $50.00).
Cost = $500.
Commission would have been $5.
"Free" trading cost you $495.

**Exercise 2 (Decomposition):**
Buy Order.
Price rises $0.10 before order starts (Alpha? No, Delay Cost).
Price rises $0.05 during trade (Impact).
Total IS = $0.15.
TCA tells you: "Your latency is too high. Fix the Delay."

## VI. References
-   Kissell, R. *The Science of Algorithmic Trading*.
-   Transaction Performance Analysis norms (FIX Protocol).
