# Last Look in FX Markets

## I. Executive Summary

**Last Look** is a controversial mechanism in FX where a Liquidity Provider (LP) has the option to **Reject** an order *after* the client attempts to trade at the LP's quoted price. Originally designed to protect LPs from **Latency Arbitrage**, it effectively gives the LP a **Free Option** to profit from price moves during the "Look Time" (holding window). It is the source of significant friction and distrust in ECNs.

## II. Formal Definitions

### Definition 2.1 (The Look Window)
Quote: EUR/USD 1.1000 / 1.1001.
Client sends "Buy" at 1.1001.
LP holds order for $T$ milliseconds (e.g., 200ms).
If Price moves to 1.0999 (LP can buy cheaper), LP Fills client (Profits).
If Price moves to 1.1002 (LP would lose), LP Rejects client ("price changed").
Asymmetric P&L.

### Definition 2.2 (Hold Time vs Reject Rate)
Client monitors:
1. **Fill Rate:** How often do I get filled?
2. **Rejection Latency:** How long until I get the 'No'?
3. **Price Improvement:** Does the LP pass on better prices? (Rarely).

## III. Theoretical Framework

### 3.1 The need for Last Look
Without Last Look, LPs must widen spreads to account for "Stale Quote" risk against faster HFTs.
Last Look allows LPs to quote tighter spreads (since they have a safety valve).
Trade-off: Tighter spreads vs Certainty of Execution.

### 3.2 Pre-Hedging (Front Running?)
LP sees the order during the Look Window.
LP hedges *before* accepting?
If he hedges and decides to reject?
He moved the market against the client, then rejected.
Illegal under Global FX Code.
"Do not use client information from rejected orders."

## IV. Strategic Applications

### 4.1 Toxic Flow Detection
LPs use the Look Window to check if the trade is toxic.
Compare incoming trade with price action on Primary venues (EBS).
If correlated, Reject.
"Defensive Last Look."

### 4.2 Client Counter-Strategy
"Zero Hold" pools.
Clients demand "No Last Look" / "Firm Liquidity."
Spreads are wider, but execution is guaranteed.
Cost of Reject > Cost of Spread?
Depends on Alpha decay.

## V. Exercises

**Exercise 1 (Rejection Analysis):**
Send 1000 orders.
Plot Rejection Rate vs Price Move.
If Rejections cluster *only* when market moves against LP $\implies$ Abusive Last Look.
If Rejections are random $\implies$ Tech issues.

**Exercise 2 (The BARX Fine):**
Barclays fined for abusing Last Look.
They introduced unnecessary delays to increase the optionality.
Regulatory crackdown.

## VI. References
-   Cartea, A. & Jaimungal, S. *Foreign Exchange Markets with Last Look*.
-   Global FX Code. *Principle 17: Last Look*.
