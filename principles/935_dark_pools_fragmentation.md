# Dark Pools and Fragmentation

## I. Executive Summary

**Dark Pools** are private exchanges (ATS) where order books are **hidden** (Pre-trade opacity). They were designed for Institutions to trade large blocks without **Market Impact**. HFTs infiltrated them to sniff out flow ("Ping"). Market Structure is now **Fragmented** across 16 Exchanges and 50+ Dark Pools, creating a complex web of **Routing Logic** (SOR).

## II. Formal Definitions

### Definition 2.1 (Smart Order Router - SOR)
Algo that breaks a parent order into child orders and sprays them across venues.
Logic: "Check Dark Pool A (cheaper). Then Dark Pool B. Then Lit Exchange (displayed)."
Goal: Best Execution (Reg NMS).
Risk: Information Leakage. If you ping pool A, HFT sees it and races to Exchange to move the price.

### Definition 2.2 (Midpoint Peg)
Standard Dark Order.
"Buy at (Bid+Ask)/2."
Price Improvement for both sides.
Buyer saves half spread. Seller saves half spread.
Everyone wins?
Only if the "Reference Price" (Lit Exchange) is accurate.
If HFT manipulates Lit Price, Dark Price moves.

## III. Theoretical Framework

### 3.1 Toxicity of Dark Flow
Retail Flow (Robinhood) and Institutional Flow (BlackRock) goes to Dark Pools / Wholesalers.
Only "Sharp Flow" (Hedge Funds/Informed) goes to Lit Exchanges.
Lit Exchanges become "Toxic" (Adverse Selection central).
Spreads widen on Lit.
Pricing quality degrades.
"Cream Skimming."

### 3.2 The Flywheel of Fragmentation
Exchanges compete for volume.
Open new order types.
Market fragments.
SORs become more complex.
Interconnection risk increases.
Reg NMS (National Market System) forces linkage but creates latency arb.

## IV. Strategic Applications

### 4.1 IEX D-Peg
Discretionary Peg.
"Peg to Midpoint, BUT if you detect a 'Crumbling Quote' (HFT attack), back off."
Predictive defense.
Wait for the price to drop, then buy.
Protecting the Institutional Investor.

### 4.2 Conditional Orders
"I want to sell 100k shares. But I don't want to post it."
Place "Conditional Indication" in 5 pools.
If a match is found in pool A, auto-cancel others ("Firm Up").
Prevents over-execution.
The "Tinder" of block trading.

## V. Exercises

**Exercise 1 (Pipeline Trading Scandal):**
Dark Pool claimed to be "anonymous."
Actually, a prop desk (Affiliate) was trading against the clients.
Conflict of Interest.
SEC fine.
Trust is the currency of Dark Pools.

**Exercise 2 (Off-Exchange Volume):**
Now > 40-50%.
Price Discovery is happening on Lit (Minority of volume).
Is the tail wagging the dog?
Regulatory concern: Should trading be forced back to Lit venues?

## VI. References
-   Patterson, S. *Dark Pools*.
-   SEC. *Concept Release on Equity Market Structure*.
