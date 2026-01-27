# Iceberg Orders: The Art of Concealment

## I. Executive Summary

An **Iceberg Order** (Reserve Order) displays only a small fraction (VisQty) of its total size (TotalQty) to the public Order Book. When the visible part is filled, a new tranche is "reloaded" from the reserve. This is the standard tool for Institutional Execution to minimize Market Impact. Detecting these orders is the primary goal of HFT "Shark" algorithms.

## II. Formal Definitions

### Definition 2.1 (Structure)
-   **TotalQty:** 10,000 shares.
-   **VisQty (Display):** 100 shares.
-   **HiddenQty:** 9,900 shares.
On Level 2, the market sees "100".
If someone buys 100, the exchange engine instantly refills "100" from Hidden.

### Definition 2.2 (Detection Logic)
If $TradeSize = VisQty$ AND $Price = Bid$ AND $BidSize_{new} = BidSize_{old}$:
$\implies$ **Reload Event.**
Hypothesis: Large Buyer present.
Action: Front-run (Place bid at $Price + 1$ tick).

## III. Theoretical Framework

### 3.1 The Reload Cycle
Sequence:
1.  Bid 100 @ 50.00.
2.  Sell Order 100 hits Bid.
3.  Display drops to 0.
4.  Engine checks Reserve. Reserve > 0.
5.  Engine puts 100 @ 50.00.
Time delta between 3 and 5 is microseconds.
Regular traders don't see it. Computes see "Flicker".

### 3.2 Randomized Icebergs
To defeat detection, Algos randomize the VisQty.
Reload 1: 100.
Reload 2: 75.
Reload 3: 150.
Makes pattern recognition (Periodicity) harder.

## IV. Strategic Applications

### 4.1 "Leaning on the Iceberg"
If you detect an Iceberg Buy at 50.00.
You can buy at 50.01 with confidence.
Why? Because the Iceberg protects you.
If price drops, the Iceberg absorbs the selling pressure.
It acts as a localized "Put Option."

### 4.2 Exhaustion Strategy
If you are a Seller and see an Iceberg Buy.
Do you wait? No.
The Iceberg might pull (Cancel) at any moment.
"Aggressive Sweep": Throw a large sell order to wipe out the entire reserve.
Discovery: "How big is the Iceberg?"

## V. Exercises

**Exercise 1 (Math):**
Visual Bid: 500.
Trades print: 3000 volume at Bid.
Price does not move.
Bid size remains 500.
Conclusion: There is an Iceberg of at least 2500 executed. The support is strong.

**Exercise 2 (The Trap):**
Fake Iceberg.
Algo reloads 3 times to look like a whale.
Baits HFT to buy ahead.
Algo then sells into the HFT buying pressure.
"Layering" strategy.

## VI. References
-   Frey, S., & Sandas, P. *The Impact of Iceberg Orders in Limit Order Books*.
-   Esser, A., & Mönch, B. *The Navigation of an Iceberg*.
