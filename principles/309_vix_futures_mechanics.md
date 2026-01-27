# VIX Futures Mechanics: Trading Pure Fear

## I. Executive Summary

The **VIX (Volatility Index)** is non-investable (it's a math calculation). To trade it, one uses **VIX Futures**. Crucially, VIX Futures converge to the VIX Index at expiry, but trade independently before then. This creates a basis risk and a **Term Structure** (Contango/Backwardation) that bleeds generic Long Volatility products (VXX/UVXY) to death over time.

## II. Formal Definitions

### Definition 2.1 (Cash Settlement)
You cannot deliver "Volatility."
At expiry, Payoff = $Multiplier \times (VIX_{final} - Futures_{entry})$.
$VIX_{final}$ is determined by a Special Opening Quotation (SOQ) of SPX options.

### Definition 2.2 (The Roll Yield Cost)
ETF (VXX) holds Month 1 Futures.
Every day, it sells M1 (Price 15) and Buys M2 (Price 16).
"Buy High, Sell Low."
Cost of Carry in Contango.
Annual drag $\approx$ 50%+.
Long VIX is a tactical trade (days), never an investment (years).

## III. Theoretical Framework

### 3.1 Mean Reversion Speed
Stocks follow Random Walk (Unbounded).
VIX is Mean Reverting (Bounded 10 - 80).
VIX > 40 $\implies$ High probability of drop.
VIX < 12 $\implies$ High probability of rise.
Strategies must account for this "Elastic" force.

### 3.2 Convexity of VIX
S&P drops 10% $\implies$ VIX rises 5 points?
S&P drops 20% $\implies$ VIX rises 20 points?
Reaction function is non-linear.
Panic accelerates VIX.
Slow selling barely moves VIX.

## IV. Strategic Applications

### 4.1 Shorting VIX (The Widowmaker)
Short UVXY.
Profits from Contango + Mean Reversion.
Result: 99% Win Rate.
Risk: 1% event (Volmageddon Feb 2018). VIX doubles overnight.
Account zeroed.
Must use Defined Risk (Put Spreads on VIX).

### 4.2 Hedging with VIX Calls
Buy VIX Calls (Cash settled).
Cost: High premium.
Payoff: Explosive in crash.
Often cheaper than SPX Puts because VIX Calls isolate Vega/Gamma without Delta bleeding?
Actually, VIX Calls are expensive.
Better hedge: VIX Call Backspreads.

## V. Exercises

**Exercise 1 (XIV Collapse 2018):**
XIV (Inverse VIX ETF).
Rebalanced daily to maintain -1x exposure.
VIX rose 100% in one day (15 to 30).
Result: $-1 \times 100\% = -100\%$.
Fund wiped out.
Liquidation triggered VIX buying $\implies$ VIX went to 50.

**Exercise 2 (Futures Basis):**
VIX Spot = 20. VIX Future = 22.
Basis = -2.
If Spot jumps to 30. Future might jump to 28.
Basis flips positive.
Uninformed traders lose money because Future didn't move as much as Spot.

## VI. References
-   CBOE. *VIX Futures Contract Specifications*.
-   Zhang, J.E. *The Structure of VIX Futures*.
