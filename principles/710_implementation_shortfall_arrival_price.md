# Implementation Shortfall Arrival Price

## I. Executive Summary

**Implementation Shortfall (IS)** (Perold, 1988) is the holy grail of transaction cost measurement. It measures the difference between the **Decision Price** (when the PM said "Buy") and the **Final Execution Price**. Unlike VWAP (which can be gamed), IS captures the total cost of the idea, including **Delay Cost** (opportunity cost of not filling) and **Market Impact**. Only IS optimization maximizes total Portfolio Alpha.

## II. Formal Definitions

### Definition 2.1 (The IS Equation)
$IS = P_{Execute} - P_{Arrival}$.
Expanded:
$IS = \text{Execution Cost} + \text{Opportunity Cost}$.
Execution: Slippage on filled shares.
Opportunity: Profit missed on unfilled shares (if price moved away).
A "Patient" algo has low Execution Cost but high Opportunity Cost.
An "Aggressive" algo has high Execution Cost but low Opportunity Cost.

### Definition 2.2 (The Efficient Frontier)
Plotting Standard Deviation of Cost vs Expected Cost.
Trader chooses a point on the frontier based on Urgency.
High Alpha (Information is short lived) $\implies$ High Urgency $\implies$ Accept High Cost (Market Order).
Low Alpha (Value) $\implies$ Low Urgency $\implies$ Accept Risk (Limit Order).

## III. Theoretical Framework

### 3.1 Almgren-Chriss Model (2000)
Optimal Execution of Portfolio.
Assumes Brownian Motion + Linear Impact.
Result: Optimal Trajectory.
Trade faster if:
1. Volatility is High (Risk of price drift is high).
2. Risk Aversion is High.
3. Liquidity is High.

### 3.2 The Winner's Curse of Passive Execution
Posting Limit orders to minimize IS.
You get filled when the market moves against you (Buying on the way down).
You don't get filled when the market moves away (Buying on the way up).
Passive execution effectively selects for "Adverse Fills" and "Missed Opportunities."
IS measures this pain accurately.

## IV. Strategic Applications

### 4.1 Alpha Profiling
Calibrating the Algo to the Alpha.
Mean Reversion Alpha? Use Passive/Limit orders (Fade the move).
Momentum Alpha? Use Aggressive/Market orders (Catch the move).
Using VWAP for Momentum Alpha is disastrous (The price runs away while you wait).

### 4.2 Pre-Trade Analytics
Software estimating expected IS before trading.
"To buy 1M shares of AAPL, expected Impact is 5bps, Risk is 10bps."
Helps PM decide sizing.
If Expected Alpha < Expected IS, don't do the trade.

## V. Exercises

**Exercise 1 (The Clean Up):**
Algo trades 90% passive. Price moves away.
Panic buys the last 10% Aggressively.
The last 10% destroys the average price.
IS reveals the failure of the "Patient" strategy.

**Exercise 2 (Arrival Price baseline):**
Fund Manager marks PnL from Arrival Price.
Trader marks PnL from VWAP.
Trader is "Green" (Beat VWAP). Manager is "Red" (Price moved up before trade started).
Alignment warning.

## VI. References
-   Perold, A. *The Implementation Shortfall: Paper versus Reality*.
-   Almgren, R. & Chriss, N. *Optimal Execution of Portfolio Transactions*.
