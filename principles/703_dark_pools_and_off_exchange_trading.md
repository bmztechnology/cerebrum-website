# Dark Pools and Off Exchange Trading

## I. Executive Summary

**Dark Pools** (ATS - Alternative Trading Systems) are private exchanges where order book depth is not visible to the public. Originally designed for **Institutional Block Trading** to minimize **Market Impact**, they now account for ~40% of US volume. While they reduce transaction costs for large institutions, they raise concerns about **Price Discovery** and **Two-Tiered Markets**.

## II. Formal Definitions

### Definition 2.1 (Pre-Trade Transparency vs Post-Trade Transparency)
**Lit Exchange (NYSE):** Pre-Trade Transparent (LOB visible). Post-Trade Transparent (Tape visible).
**Dark Pool:** Pre-Trade Opaque (No LOB). Post-Trade Transparent (Must report to TRF within 10 seconds).
The "Darkness" refers only to the pre-trade quote.

### Definition 2.2 (The Matching Mechanism)
Dark pools typically match at the **Midpoint** of the NBBO from Lit Exchanges.
Bid = 10.00, Ask = 10.02. Mid = 10.01.
Buyer gets 10.01 (saves 0.01). Seller gets 10.01 (saves 0.01).
Win-Win, assuming the Lit price is accurate.
Parasitic? They treat the Lit price as a public good without contributing to it.

## III. Theoretical Framework

### 3.1 Adverse Selection in the Dark
If a Dark Pool is full of Uninformed Flow (Retail/Index Funds), it is a safe haven for Market Makers.
If a Dark Pool is toxic (HFTs sniffing for orders), Institutional orders get "Pinged" and front-run on the Lit market.
"Gaming" the Dark Pool.

### 3.2 Fragmentation
Volume moving Dark thins the Lit Book.
Thin Lit Book $\implies$ Higher Volatility $\implies$ Less valid Reference Price.
Feedback loop: As Lit depth vanishes, the "Midpoint" becomes noisier.

## IV. Strategic Applications

### 4.1 Order Routing Logic
Smart Order Router (SOR).
Step 1: Ping Dark Pools (Cheap, low impact).
Step 2: If no fill, route to Lit Exchanges (Expensive, high impact).
Dark Aggregators try to find liquidity across 40+ dark pools simultaneously.

### 4.2 Counterparty Segmentation
Broker-Dealer pools (e.g., Goldman Sigma X).
Brokers segment flow.
"We won't let HFTs into this pool. Only long-only fills."
Selling "Clean" liquidity at a premium.

## V. Exercises

**Exercise 1 (The ISO Sweep):**
HFT detects a large buyer in a Dark Pool (via probabilistic pinging).
HFT buys all Lit liquidity instantly (ISO order).
HFT then sells to the Dark Buyer at the *new, higher* midpoint.
Latency Arb between Dark and Lit.

**Exercise 2 (Wasting Liquidity):**
Sending an order to a Dark Pool that has no volume.
You miss the trade on the Lit exchange while waiting.
"Opportunity Cost of Dark."

## VI. References
-   Mittal, H. *Are You Playing in a Toxic Pool?*.
-   Zhu, H. *Do Dark Pools Harm Price Discovery?*.
