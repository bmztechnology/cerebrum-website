# Electricity Trading Power Pools

## I. Executive Summary

**Electricity** is the ultimate perishable commodity. It must be generated and consumed instantly (Grid frequency 60Hz). Markets are organized as **Power Pools** (PJM, ERCOT) using **Locational Marginal Pricing (LMP)**. Prices can be negative (Wind subsidy) or infinite (VOLL). The Grid is a physical network where **Congestion** creates price separation between nodes, solved by **Financial Transmission Rights (FTRs)**.

## II. Formal Definitions

### Definition 2.1 (The Merit Order Stack)
Supply Curve: Ordered by Marginal Cost.
1. Renewables (Wind/Solar): MC $\approx$ 0.
2. Nuclear: MC Low (Baseload).
3. Coal/Gas CCGT: MC Medium.
4. Gas Peaker: MC High.
Demand intersects Supply $\implies$ LMP.
The "Marginal Unit" sets the price for everyone (Pay-as-Clear).

### Definition 2.2 (LMP Components)
$$ LMP_{node} = Energy + Congestion + Loss $$
**Energy:** System-wide price.
**Congestion:** Cost of transmission constraints. If Line A is full, expensive local gen must run.
**Loss:** Heat loss in wires ($I^2 R$).

## III. Theoretical Framework

### 3.1 The Duck Curve
Solar floods grid at noon. Net Load drops. Price $\to$ 0.
Sun sets. Net Load ramps vertically. Peakers start. Price $\to$ \$1000.
Volatility is intraday.
Requires flexible ramping (Batteries/Gas).

### 3.2 Capacity Markets vs Energy-Only
**Capacity Market (PJM):** Pay generators just to "exist" (Steel in the ground). Insurance against blackout.
**Energy-Only (ERCOT):** Pay only for kWh produced.
ERCOT implies higher scarcity pricing (Price cap \$5000) to incentivize investment.
Fragility: If scarcity pricing fails (political intervention), no investment $\implies$ Blackouts (Winter Storm Uri).

## IV. Strategic Applications

### 4.1 FTR Arbitrage
Financial Transmission Rights.
User bets on the spread between Node A and Node B.
If congestion is high, spread widens. FTR pays out.
"Virtual Bidding" (Virtuals):
Trader bids "Virtual Supply" at A and "Virtual Demand" at B to arb the Day-Ahead vs Real-Time spread.

### 4.2 Curtailment Alpha
Wind farm pays negative price?
Tax Credit (PTC) = \$23/MWh.
Wind farm bids $-\$20$. Still makes \$3 profit.
Prices go negative.
Battery buys at $-\$10$. Getting paid to charge.

## V. Exercises

**Exercise 1 (The Texas Hedge):**
Retail plans linked to Spot Price (Griddy).
Storm Uri. Spot = \$9000/MWh.
Bill = \$15,000 for one month.
Microstructure failure at retail interface.

**Exercise 2 (Data Centers):**
Bitcoin Miners / AI Clusters.
Load Responsive.
"Demand Response" program.
Shut down when price > \$500.
Sell "Negawatts" (Non-usage) back to grid.

## VI. References
-   Stoft, S. *Power System Economics*.
-   Biggar, D. *Economics of Electricity Markets*.
