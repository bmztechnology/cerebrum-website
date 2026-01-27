# Backtesting Tick Data Microstructure

## I. Executive Summary

**Backtesting** HFT and Microstructure strategies requires **Tick Data** (Level 1/2/3). Standard OHLC bars hide the critical information (Spread width, Queue position, Order imbalances). Simulating execution realistically involves modeling **Latency**, **Queue Priority**, and **Market Impact**. Naive backtests (assuming fills at Midpoint) often show 10 Sharpe Ratios that equate to substantial losses in reality.

## II. Formal Definitions

### Definition 2.1 (Tick-to-Trade Latency)
Simulation must respect time.
Event: Tick arrives $t=0$.
Signal generated $t=1ms$.
Order sent $t=2ms$.
Order arrives at exchange $t=5ms$.
Sim must match order against the book state at $t=5ms$, not $t=0$.
"Data Snooping" in microstructure = ignoring latency.

### Definition 2.2 (Fill Probability Model)
Limit orders don't always fill.
Naive: "Low price touched my bid $\implies$ Fill."
Realistic: "Price traded *through* my bid $\implies$ Fill." OR "Volume traded at my price > Queue ahead of me."
Conservative sim forces "Trade Through" logic.

## III. Theoretical Framework

### 3.1 Event Driven Simulation
Loop through events (Quote updates, Trade updates).
Not "For loop over bars."
State machine for Order Management System (Placing, Ack, Fill, Cancel).
Complexity orders of magnitude higher than bar testing.

### 3.2 The Simulator as a Matching Engine
To test effectively, the simulator must *reconstruct* the LOB.
It acts as a virtual exchange.
Tracks the strategy's orders in the queue.
Adjusts the book for the strategy's impact (Removal of liquidity).

## IV. Strategic Applications

### 4.1 Sensitivity Analysis
Test profitability vs Latency.
"If my ping increases by 1ms, does the edge vanish?"
If strategy is robust to 10ms delay, it is actionable.
If it dies at 1ms, it is a pipe dream (Competition too fierce).

### 4.2 Impact Modeling
Simulating Limit Order placement.
Does placement induce "Pennying" (Algos jumping in front)?
Hard to backtest (Adversarial Selection).
Live Pilot (Paper trading in prod) is often the only validation.

## V. Exercises

**Exercise 1 (The Mismatch):**
Test a strategy on 1-min bars. Result: \$1M profit.
Test on Tick data. Result: -\$100k loss.
Difference: Spreads and Intra-bar noise.
OHLC assumes you bought the Low, but the Spread might have been wide at the Low.

**Exercise 2 (Data Cleaning):**
Ticks contain errors (Bad prints).
Filtering outliers.
Handling "Condition Codes" (Derivatives pricing, off-exchange).
Garbage In, Garbage Out is amplified in Tick data.

## VI. References
-   Lopez de Prado, M. *Advances in Financial Machine Learning*.
-   Cartea, A. *Algorithmic Trading & High Frequency Trading*.
