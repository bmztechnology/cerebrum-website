# Market Depth and Resilience

## I. Executive Summary

**Market Depth** refers to the volume available at prices beyond the best bid/ask. **Resilience** is the speed at which the order book refills after a liquidity shock (large trade). A market can have tight spreads but thin depth (Fragile), or wide spreads but massive depth (Robust). **Slippage** on large orders is a function of Depth, not Spread.

## II. Formal Definitions

### Definition 2.1 (The Liquidity Profile)
Volume profile $V(p)$.
Cumulative Depth $D(p) = \int_{Best}^{p} V(x) dx$.
Impact Cost $I(S) = \frac{D^{-1}(Size) - BestPrice}{BestPrice}$.
How far do you have to "walk the book" to fill Size $S$?

### Definition 2.2 (Resilience / Refill Rate)
Large Buy consumes Level 1-5.
Price jumps.
How many milliseconds until Limit Sellers repost orders at Level 1?
High Frequency Market Makers provide this resilience.
If Refill Rate is slow, volatility explodes.

## III. Theoretical Framework

### 3.1 Dimensions of Liquidity (Kyle 1985)
1. **Tightness:** (Bid-Ask Spread).
2. **Depth:** (Size absorbed without price move).
3. **Resilience:** (Speed of recovery).
Traders often confuse 1 with 2.
"Flash Crash" markets often have Tightness (1 penny spread) right before they have 0 Depth.

### 3.2 The Mirage
HFTs post liquidity.
Real depth?
Or "Fleeting Orders"?
If a large order arrives, do they cancel? (Fading).
Modern liquidity is often "Ghost Liquidity" that vanishes when needed.

## IV. Strategic Applications

### 4.1 Execution Algorithms (VWAP/TWAP)
Slice large order into "Baby orders."
To avoid consuming Depth.
Letting Resilience refill the bucket between sips.
Trade-off: Taking too long introduces "Timing Risk" (Market drifts).

### 4.2 Detecting Icebergs
Visible Depth: 100 shares.
Trade occurs: 1000 shares execute at that price.
Conclusion: Hidden "Iceberg" order refreshing.
Strategy: Post order *ahead* of the Iceberg. Use it as a wall of support.
"Lean on the liquid."

## V. Exercises

**Exercise 1 (Impact Calculation):**
Order: 50,000 shares.
Avg Daily Volume: 500,000.
Size = 10% ADV.
Impact will be significant (Square Root Rule).
Cost $\approx \sigma \times \sqrt{\frac{Size}{ADV}}$.

**Exercise 2 (The Gap):**
Look at Level 2 during a halt or open.
Gaps in the ladder (e.g., bids at 100, 99, then 95).
Air pockets.
If price hits 99, it teleports to 95.
Understanding "Gappy" books.

## VI. References
-   Kyle, A. *Continuous Auctions and Insider Trading*.
-   Black, F. *Noise*.
