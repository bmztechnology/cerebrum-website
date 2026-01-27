# Market Fragmentation: Reg NMS and the SIP

## I. Executive Summary

US Equity markets are **Fragmented**. There is no single "Stock Market." There are 16 exchanges (NYSE, NASDAQ, BATS...) and 50+ ATS. **Regulation NMS (National Market System)** binds them together, mandating that orders must be routed to the venue with the Best Price (NBBO). This structure creates complexity, data discrepancies, and arbitrage opportunities.

## II. Formal Definitions

### Definition 2.1 (NBBO - National Best Bid and Offer)
The highest bid and lowest ask across ALL lit exchanges.
Protected Quote: You cannot trade through it (Trade-through rule).
If NYSE has 10.00 and NASDAQ has 10.01, you MUST buy from NYSE first.

### Definition 2.2 (The SIP - Securities Information Processor)
The government-mandated consolidated feed.
It collects quotes from all exchanges, calculates NBBO, and broadcasts it.
**Problem:** It is slow (calculation latency).
**Direct Feeds:** Proprietary feeds from exchanges are fast.
HFTs use Direct Feeds to calculate a "Synthetic NBBO" faster than the SIP.

## III. Theoretical Framework

### 3.1 Quote Stuffing & Flickering
Exchanges pay for order flow (Rebates).
This encourages "Quote Flickering" (rapid updates).
The SIP gets overwhelmed.
Latency between Direct Feed and SIP spikes.
Arb Opportunity: Trade against bots relying on the stale SIP price.

### 3.2 Sub-Penny Trading
NMS bans sub-penny quotes (except for stocks < $1.00).
But Dark Pools allow sub-penny *execution* (Price Improvement).
Retail Wholesalers (Citadel, Virtu) give retail 10.0001 (Winning the trade against the Exchange 10.00).
Fragmentation segments Flow: "Dumb" retail flows to Wholesalers; "Toxic" flow goes to Lit Exchanges.

## IV. Strategic Applications

### 4.1 Exchange Selection
Why route to BATS Y over NASDAQ?
Pricing.
BATS Y might offer a rebate to *remove* liquidity (inverted).
If you need to buy aggressive but save costs, Route to BATS Y.

### 4.2 Intermarket Sweep Orders (ISO)
A special order type.
"I promise I have already checked the other exchanges."
Allows executing at a worse price on one exchange (ignoring NBBO protection) to grab size fast.
Essential for institutional block execution.

## V. Exercises

**Exercise 1 (The SIP Lag):**
SIP says NBBO is 100.00 / 100.01.
Direct Feed says BATS just updated to 100.02 Bid.
SIP hasn't seen it yet.
If you sell at 100.01 (SIP Ask), you are selling below the new Bid (100.02).
You just sold $0.01 cheap.

**Exercise 2 (Consolidation):**
Europe (MiFID II) has similar fragmentation but no central SIP.
Building a "Consolidated Tape" is a massive technical challenge in EU.

## VI. References
-   SEC Regulation NMS Full Text.
-   O'Hara, M., & Ye, M. *Is Market Fragmentation Harming Market Quality?*.
