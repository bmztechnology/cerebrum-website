# Spread Modeling ACD and GARCH

## I. Executive Summary

**Spread Modeling** treats the Bid-Ask Spread and Duration (time between trades) as dynamic time-series variables. **ACD (Autoregressive Conditional Duration)** models the arrival times of trades (Clustered activity), while **Intraday GARCH** models the volatility of the spread. Understanding these dynamics is crucial for Algorithmic Execution: knowing *when* to trade (during tight spreads/high activity) minimizes cost.

## II. Formal Definitions

### Definition 2.1 (ACD - Autoregressive Conditional Duration)
Engle & Russell (1998).
duration $x_i = t_i - t_{i-1}$.
$E[x_i | x_{i-1}, ...] = \psi_i$.
$\psi_i = \omega + \alpha x_{i-1} + \beta \psi_{i-1}$.
Like GARCH, but for Time.
Short durations (Fast trading) tend to cluster. Long durations (Lulls) cluster.
Fast trading $\implies$ Informed trading? $\implies$ Volatility.

### Definition 2.2 (The Spread-Volume-Volatility Relation)
High Volatility $\implies$ High Spread (Risk).
High Volume $\implies$ Low Spread (Economies of scale)? OR High Spread (Informed flow)?
Empirics:
Spread widens after a short duration trade (ACD logic).
Fast trading scares MMs.

## III. Theoretical Framework

### 3.1 Liquidity Climates
Market segments into "Regimes."
1. **Fast/Tight:** Algo battles. High volume.
2. **Slow/Wide:** Lunchtime. Retail flow.
3. **Fast/Wide:** Crash/News. Toxic flow.
ACD models characterize the transition probabilities between these states.

### 3.2 Volume Duration (VD)
Time it takes to trade a specific volume (Time to fill bucket).
Standardizes "Activity" better than clock time.
VD is the inverse of Liquidity Velocity.

## IV. Strategic Applications

### 4.1 Optimal Timing
VWAP/TWAP schedules are static.
"Smart" Algos use ACD forecasts.
"Expect a lull in 5 minutes (Long Duration). Trade NOW while market is active."
Or: "Expect Spreads to narrow in 2 minutes. Wait."
Capturing the Micro-Alpha of execution timing.

### 4.2 Triggering Strategies
If spread narrows suddenly $\implies$ Sign of agreement?
If spread widens suddenly $\implies$ Sign of disagreement/risk?
Using spread changes as a signal for Directional entry.

## V. Exercises

**Exercise 1 (The Lunch Dip):**
Plot Time-Between-Trades (Duration) vs Time of Day.
U-Shape (inverted).
Short durations at Open/Close. Long at Lunch.
Spread U-Shape.
Correlated.

**Exercise 2 (Fitting ACD):**
Use Python `statsmodels` or specialized library.
Fit ACD(1,1) to IBM ticks.
Predict time to next trade.
If Prediction error is large (Trade happens unexpectedly fast) $\implies$ News Arrival?

## VI. References
-   Engle, R. & Russell, J. *Autoregressive Conditional Duration: A New Model for Irregularly Spaced Transaction Data*.
-   Pacurar, M. *Autoregressive Conditional Duration Models in Finance: A Survey*.
