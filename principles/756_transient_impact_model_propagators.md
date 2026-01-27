# Transient Impact Model Propagators

## I. Executive Summary

The **Transient Impact Model** (Bouchaud et al.) challenges the idea of Permanent Market Impact. It posits that *all* trade impact is temporary and decays over time (Propagator function). Price changes are the sum of the **decaying impacts** of all past trades. If trading stops, price reverts. This model explains **Long Memory** in order flow and why markets are resilient.

## II. Formal Definitions

### Definition 2.1 (The Propagator Model)
$$ P_t = P_0 + \sum_{t'<t} G(t - t') \cdot \epsilon_{t'} \cdot V_{t'} $$
$\epsilon$: Sign of trade.
$V$: Volume.
$G(\tau)$: Decay kernel (Propagator).
Typically $G(\tau) \propto \tau^{-\gamma}$ (Power law decay).
Impact is "History Dependent."

### Definition 2.2 (Efficiency Condition)
If Order Flow is highly correlated (Long Memory), why is Price a Random Walk (Efficient)?
Because the *Impact Decay* perfectly cancels the *Flow Correlation*.
"The market creates resistance to trending flow."
A "Buy" pushes price up, but the impact decays, creating a downward force (reversion) that fights the next "Buy."

## III. Theoretical Framework

### 3.1 Mechanical Reversion
Why does impact decay?
Liquidity refill.
Limit orders eventually step in to close the gap created by the Market order.
The "Event" is digested.

### 3.2 Square Root Law Derivation
The Transient Impact model *predicts* the Square Root Law for meta-orders.
The accumulation of decaying impacts results in a concave price trajectory.
Unifies Microstructure (Ticks) with Macroscopic laws (Cost).

## IV. Strategic Applications

### 4.1 Optimal Trading Schedule
If impact decays, you should trade, wait, trade, wait.
Let the market "Heal."
The Propagator function $G(\tau)$ tells you exactly how long to wait.
Optimization: Maximize speed subject to Impact/Decay constraints.

### 4.2 Alpha Decay
Alpha also has a propagator.
Signal decays.
Trading too slow $\implies$ Miss Alpha.
Trading too fast $\implies$ Pay Impact.
Golden Mean found via Propagator calibration.

## V. Exercises

**Exercise 1 (Calibration):**
Fit $G(\tau)$ to tick data.
Is it Power Law?
Yes, usually $\tau^{-0.5}$.
Impact lasts a long time (days).

**Exercise 2 (The Reversion Trade):**
After a massive trade (Block), price is displaced.
Propagator says it must decay.
Strategy: Fade the block?
Risk: Information content (Permanent Impact).
Propagator models assume "Zero Information" (Liquidity only).
Hybrid model required.

## VI. References
-   Bouchaud, J. *Trades, Quotes and Prices*.
-   Gatheral, J. *No-Dynamic-Arbitrage and Market Impact*.
