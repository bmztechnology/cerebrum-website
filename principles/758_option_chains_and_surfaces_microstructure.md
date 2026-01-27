# Option Chains and Surface Microstructure

## I. Executive Summary

The **Option Chain** is not just a list of prices; it is a **Risk Surface**. Microstructure in options differs from equities because liquidity is fragmented across thousands of strikes and expirations. **Market Makers** do not post independent quotes; they post a **Vol Surface** ($\sigma(K, T)$) and an algorithmic engine generates thousands of limit orders. Trading one option updates the entire surface.

## II. Formal Definitions

### Definition 2.1 (The Surface Parameterization)
Instead of quoting 1000 prices, MM quotes 5 parameters of a curve (e.g., SVI model).
$$ \sigma_{BS}(k) = a + b(\rho(k-m) + \sqrt{(k-m)^2 + \sigma^2}) $$
The "Engine" translates this curve into Bid/Ask limit orders for every strike $K$.
If Underlying Price $S$ moves, *all* quotes move instantly (Delta adjustment).

### Definition 2.2 (Quote Width and Greek Limits)
Widening spread based on Vega risk.
Spread $\propto$ Vega $\times$ Vol of Vol.
Deep OTM options have low Vega but high Gamma/Speed risk.
MMs often "Reference" the futures market for delta hedging.

## III. Theoretical Framework

### 3.1 The "Width" of the Surface
In equities, spread is 1-2 ticks.
In options, spread can be 10-20% of premium.
Why?
1. **Adverse Selection:** Informed traders know the jump risk.
2. **Hedging Cost:** Hedging Gamma is expensive (Slippage).
3. **Inventory Risk:** It's hard to flatten a specific strike position.

### 3.2 Volatility Smoothing
Arbitrage prevents "Kinks" in the chain.
Butterfly Arb: Buy $K-1$, Sell $2K$, Buy $K+1$. Cost must be $> 0$.
If a single retail order pushes one strike out of line, HFT bots arb it back to the smooth curve ms.

## IV. Strategic Applications

### 4.1 "Leaning" on the Chain
If Call Skew steepens (OTM Calls get expensive).
Signal: Whales buying upside tails.
Delta-adjusted interpretation: Bullish sentiment or just Short Covering?
Microstructure of the skew tells the story.

### 4.2 Detecting "Sweep" vs "Retail"
Retail trades 1 lot.
Institutions Sweep the chain (Buy Strike K, K+1, K+2).
"Rolling Thunder."
The Surface "Lifts" (Parallel shift up).
Profound signal for Spot direction.

## V. Exercises

**Exercise 1 (Put-Call Ratio Microstructure):**
Standard PCR is Volume based.
Micro-PCR is Liquidity based.
Compare *Depth* on Puts vs *Depth* on Calls.
If Put Depth vanishes $\implies$ Market Makers fear a crash.

**Exercise 2 (The Mid-Price Illusion):**
Option Spread: 1.00 - 1.20. Mid = 1.10.
Fair Value might be 1.05.
MM logic: "I am long inventory, so I skew my quote lower (0.95 - 1.15) to attract buys."
The "Mid" is biased by inventory.

## VI. References
-   Gatheral, J. *The Volatility Surface*.
-   Cont, R. *Modeling the Dynamics of the Limit Order Book for Options*.
