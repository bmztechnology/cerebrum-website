# Best Execution Reg NMS vs MiFID II

## I. Executive Summary

**Best Execution** is the fiduciary mandate that brokers must seek the best possible terms for client orders. In the US, **Reg NMS** focuses on **Price** (NBBO) and speed. In Europe, **MiFID II** focuses on **Total Consideration** (Price, Cost, Probability of Execution, Size). The divergence in regulation leads to different market structures: US is fragmented but linked; Europe is more unbundled.

## II. Formal Definitions

### Definition 2.1 (Reg NMS "Order Protection Rule")
Rule 611.
You must not trade at a price worse than the *displayed* best price on another exchange.
Forces routing to the Best Price.
Heavy reliance on the SIP (Public Feed).
Creates "Latency Arb" opportunities because SIP is slow.

### Definition 2.2 (MiFID II "Unbundling")
Separating Research Payments from Execution Commissions.
Prevents "Soft Dollars" (Overpaying for trades to get free research).
Result: Squeeze on sell-side research.
Best Ex reporting (RTS 28) requires detailed stats on where flow went and quality.

## III. Theoretical Framework

### 3.1 Agency vs Principal
Broker (Agency) should minimize client cost.
Dealer (Principal) maximizes own profit.
Best Ex regulates the Agency conflict.
Does the broker route to Exchange A because it pays a high Rebate, or because it has best liquidity?
Reg NMS doesn't explicitly ban Rebate routing, but Best Ex principles frown on it.

### 3.2 The Multi-Venue Problem
Price is 10.00 on NYSE, 10.00 on NASDAQ.
Where to route?
Reg NMS says either.
Best Ex says: "Which has higher fill probability?" or "Which has lower toxic latency?"
Qualitative factors matter.

## IV. Strategic Applications

### 4.1 TCA as Compliance
TCA is no longer just for performance; it's a legal defense.
"Why did you trade at 10.05?"
"Here is the TCA report showing 10.05 was VWAP at that microsecond."
CYA (Cover Your Assets).

### 4.2 Payment for Order Flow (PFOF)
Wholesalers (Citadel) pay Retail Brokers (Robinhood) for flow.
Is this Best Ex?
Wholesalers argue "Price Improvement" (we execute inside the NBBO).
Critics argue "Stifled Competition" (Orders never hit the Lit market).
MiFID II bans PFOF (mostly). US allows it.

## V. Exercises

**Exercise 1 (The Sweep):**
Router splits order to 5 exchanges.
3 fill, 2 miss.
Did you get Best Ex?
Or did the 2 misses signal information?
Best Ex is an aggregate metric, not just single trade.

**Exercise 2 (Dark Pool Cap):**
MiFID II "Double Volume Cap."
Limits Dark Pool trading to 8% of total volume.
Pushes flow back to Lit markets.
Reg NMS has no such cap.

## VI. References
-   SEC. *Regulation NMS*.
-   ESMA. *MiFID II Best Execution Guidelines*.
