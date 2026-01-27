# Complexity Theory Agent Based Models

## I. Executive Summary

**Complexity Theory** views the market as a **Complex Adaptive System** (CAS). Unlike Equilibrium models (DSGE), CAS models simulate millions of heterogeneous **Agents** (Zero Intelligence, Chartists, Fundamentalists) interacting locally. **Emergent Properties** (Fat tails, Clusters, Crashes) arise from these simple interactions, just as an anthill's intelligence emerges from dumb ants.

## II. Formal Definitions

### Definition 2.1 (Santa Fe Institute)
Brian Arthur.
El Farol Bar Problem.
If everyone goes to the bar, it's crowded (Bad).
If no one goes, it's empty (Bad).
Agent must predict the crowd.
No Equilibrium solution (Expectations loop).
Agents learn and adapt strategies. The system oscillates around a "Self-Organized Criticality."

### Definition 2.2 (Agent-Based Models - ABM)
Simulations code.
`class Agent:`
  `def trade(price):`
    `if trend > x: buy()`
Tune parameters: % of Chartists vs Fundamentalists.
Run Sim.
Result: ABMs naturally reproduce "Vol Clumping" and "Power Laws" that Analytical models fail to predict.

## III. Theoretical Framework

### 3.1 Self-Organized Criticality (SOC)
Bak (Sandpile Model).
Add one grain of sand at a time.
Pile grows steep.
Avalanches occur.
Most are small, some are massive.
The "Cause" of the massive avalanche is not a "Special Grain," but the **Critical State** of the pile.
Markets are always near criticality.

### 3.2 Network Theory
Agents are nodes.
Trades are edges.
"Too Big To Fail" = Hub nodes.
Contagion spreads via the network topology.
Lehman Brothers was a Hub. Its failure caused a topological collapse.

## IV. Strategic Applications

### 4.1 Synthetic Data Generation
Using ABMs to generate 10,000 years of market data.
Train AI on synthetic data (Deep Learning).
Allows testing strategies on "Black Swans" that haven't happened yet.

### 4.2 Identifying Criticality
Sornette (Dragon Kings).
Detecting "Log-Periodic Power Laws" (Oscillations speeding up) prior to a crash.
Predicting the rupture point of the sandpile.

## V. Exercises

**Exercise 1 (The Game of Life):**
Conway.
Simple rules create complex lifelike structures.
Markets are the Game of Life played with money.
Reductionism (studying one pixel) fails. Holism (studying the pattern) succeeds.

**Exercise 2 (Liquidity Cascades):**
In ABM, if 10% of agents follow a "Stop Loss" rule.
A 5% drop triggers the stops $\implies$ 10% sell $\implies$ Price drops 15% $\implies$ Triggers next layer.
Emergent Crash.

## VI. References
-   Arthur, B. *Complexity and the Economy*.
-   Sornette, D. *Why Stock Markets Crash*.
