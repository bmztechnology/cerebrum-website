# Queue Reactivity

## I. Executive Summary

**Queue Reactivity** measures how specific levels in the Order Book respond to activities at other levels. If a large Buy order is placed at the Best Bid, do Sellers cancel (Fear)? Do Buyers join (Herding)? Or does it induce Selling (Liquidity provision)? Quantifying these **Hawkes Process** interactions allows traders to distinguish between **Fake Liquidity** (which flees) and **Real Liquidity** (which attracts).

## II. Formal Definitions

### Definition 2.1 (The Reactivity Matrix)
Matrix $A_{ij}$.
Element $i$: Action at Price Level $L$ (e.g., Add Volume).
Element $j$: Reaction at Price Level $K$ (e.g., Cancel Volume).
If I add 100 lots at Bid, and 100 lots subsequently appear at Ask $\implies$ Market Maker maintaining delta neutral spread?
If I add 100 lots at Bid, and 100 lots cancel at Ask $\implies$ Spoofer running away?

### Definition 2.2 (Self-Exciting Processes)
Hawkes Process: $\lambda_t = \mu + \sum \alpha e^{-\beta(t-t_i)}$.
Trading begets trading.
Reactivity captures the "Alpha" term ($\alpha$).
How much DOES one order excite the rest of the book?

## III. Theoretical Framework

### 3.1 Strategic Complementarity vs Substitutability
**Complementarity:** Traders copy each other. (Herding). Reactivity > 0.
**Substitutability:** Traders compete. If you take the Bid, I move to Ask. Reactivity < 0.
Market regimes oscillate between these states.

### 3.2 The Game of Chicken
Level 1 is a standoff.
Traders watch "Queue Reactivity" to judge intent.
If a big order joins the queue and the queue "Accelerates" (others join faster), it's a breakout.
If the queue "Stalls" (rate slows), the big order is isolated and likely to be attacked.

## IV. Strategic Applications

### 4.1 Iceberg Detection via Reactivity
Visible buy order: 100.
Seller hits 100. Order refreshes.
Does the *rest* of the book react?
If Ask side cancels (moving higher), they respect the Iceberg.
If Ask side adds volume (pressing down), they don't fear it.
Crowd wisdom reveals the Iceberg's true size.

### 4.2 Impact Minimization
Place a small child order.
Measure Reactivity.
If High Reactivity (Algos jump in front), stop. Market is "Sensitive."
If Low Reactivity (No one cares), place the rest. Market is "Deep."

## V. Exercises

**Exercise 1 (The Cancel Cascades):**
Identify a sequence where 1 cancel triggers 10 cancels across 10 levels.
Evidence of "Linked Algos" (One firm controlling multiple levels).
Remove one, the whole lattice collapses.

**Exercise 2 (Latency vs Reactivity):**
Reaction time.
If reaction is < 1ms, it's a machine.
If reaction is > 100ms, it's a human (or slow retail algo).
Profiling the counterparty.

## VI. References
-   Bouchaud, J. *Hawkes Processes in Finance*.
-   Huang, W. *Queue Reactivity in Limit Order Books*.
