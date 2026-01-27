# Primary Dealer Auctions: Dutch Mechanics

## I. Executive Summary

Sovereign debt is issued via **Auctions**, where Primary Dealers bid for supply. The most common format is the **Single-Price Dutch Auction**: All successful bidders pay the same price (the stop-out yield). Key metrics like **Bid-to-Cover Ratio** and the **Tail** (spread between average and stop-out yield) indicate market demand and dealer stress.

## II. Formal Definitions

### Definition 2.1 (The Bid Stack)
Bids are ordered by Yield (Low to High).
Auctioneer fills demand starting from lowest yield.
Cut-off point (Stop-Out Yield) clears the entire supply.
**Winner's Curse** mitigated: Everyone pays the Stop-Out price, even if they bid more aggressively.

### Definition 2.2 (The Tail)
$$ Tail = Yield_{StopOut} - Yield_{Average} $$
Small Tail (< 0.5 bps): Strong auction. Consensus pricing.
Large Tail (> 2.0 bps): Weak auction. Demand fell off a cliff. Price discovery failed until lower levels.

## III. Theoretical Framework

### 3.1 Primary Dealers
Banks obligated to bid.
"Market Makers of Last Resort."
They buy inventory at auction and distribute to Buy Side (Pension Funds, Central Banks) in the secondary market.
If dealers can't distribute (Supply Indigestion), yields spike.

### 3.2 When-Issued (WI) Market
Trading starts *before* the auction settles.
"Shorting the WI" hedging dealer inventory.
The WI price predicts the Auction stop.

## IV. Strategic Applications

### 4.1 Auction Cycles
Treasury refunds quarterly.
Huge supply events.
Term Structure of Volatility spikes around 1pm EST on auction days.
"Concession": Yields rise before auction (Dealers cheapen bonds to attract buyers).

### 4.2 Squeeze
If a specific CUSIP is shorted heavily ( WI shorts).
Dealers who own the float can "Squeeze" the shorts in the Repo market.
Repo rate drops to 0% (Special).
Short sellers forced to cover at premium prices.

## V. Exercises

**Exercise 1 (Indirect Bidders):**
Proxy for Foreign Central Banks.
High Indirect % (e.g., 60%) $\implies$ Strong foreign demand.
Low Indirect % $\implies$ Relying on domestic dealers. Bearish signal.

**Exercise 2 (Tapping):**
Re-opening an existing CUSIP.
Increases liquidity (Issue size grows from \$20B to \$60B).
On-the-Run premium persists longer.

## VI. References
-   Garbade, K. *Treasury Securities*.
-   Bammann, H. *Auction Theory and Practice*.
