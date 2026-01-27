# VWAP and TWAP Execution Algorithms

## I. Executive Summary

**Execution Algorithms** are designed to minimize **Implementation Shortfall** (Slippage) when moving large size. **VWAP** (Volume Weighted Average Price) targets the market's average price by slicing orders proportional to historical volume profiles. **TWAP** (Time Weighted Average Price) slices orders linearly over time. These are "Schedule Based" algos used by institutions to execute passively without alerting HFT predators.

## II. Formal Definitions

### Definition 2.1 (VWAP Benchmark)
$$ VWAP = \frac{\sum P_i V_i}{\sum V_i} $$
Traders are judged against this benchmark.
Beat VWAP $\implies$ Good execution.
Algo Logic: "Volume Curve."
If 10% of Daily Volume happens at 10:00-10:15, the algo executes 10% of the parent order then.
Participate with the liquidity.

### Definition 2.2 (TWAP Logic)
Execute $Size / N$ every $T$ minutes.
Used for assets with flat volume profiles (Currencies) or when volume prediction is unreliable.
Risk: Predictable.
"Gamable" by predatory algos who time the slices.
Defense: Randomize the time interval and size (Jitter).

## III. Theoretical Framework

### 3.1 The "Smile" Curve
US Equities Volume Profile.
High at Open (9:30-10:00).
Low at Lunch (12:00-1:00).
High at Close (3:30-4:00).
VWAP Algos trade heavily at the wings and sleep in the middle.
Trading against the VWAP (buying at lunch) creates high impact.

### 3.2 Schedule Deviation
"Aggressive in the Money."
If Price < Benchmark, trade faster (Secure the good price).
If Price > Benchmark, trade slower (Wait for reversion).
Adds "Alpha" to the execution, but variance to the benchmark tracking.

## IV. Strategic Applications

### 4.1 Hiding in the Noise
VWAP orders are usually broken into "Child Orders" sent to Dark Pools and Lit Exchanges.
Algo goal: "Be invisible."
Max participation rate (e.g., 5% of volume).
If volume dries up, VWAP algo stops trading.

### 4.2 Guaranteed VWAP
Broker guarantees VWAP flat.
Risk transfer from Client to Broker.
Broker uses their own Capital and Algo.
If they beat VWAP, they keep the profit.
If they miss, they eat the loss.
Client gets certainty.

## V. Exercises

**Exercise 1 (The Loop):**
Large VWAP Buy order drives price up.
Higher price $\implies$ Higher VWAP calculation.
Benchmark chases the trade.
Self-fulfilling benchmark success?
Why Arrival Price is a better benchmark for true cost.

**Exercise 2 (Lunchtime Liability):**
Placing a TWAP during lunch on a thin stock.
Impact is magnified.
Price drifts in your direction (Adverse).
TWAP is "Dumb" to liquidity conditions.

## VI. References
-   Kissell, R. *The Science of Algorithmic Trading and Portfolio Management*.
-   Madhavan, A. *VWAP Strategies*.
