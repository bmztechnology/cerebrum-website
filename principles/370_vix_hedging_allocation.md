# VIX Hedging Allocation: Negative Beta

## I. Executive Summary

**VIX (Volatility Index)** derivatives offer a unique hedging property: They are highly **Negatively Correlated** to the S&P 500, especially in crashes. While Puts hedge via Delta, VIX Calls hedge via **Vega** and Delta. A small allocation (e.g., 1-2%) to VIX Calls can offset losses in a 98% Equity portfolio during a selloff because VIX can explode (Spike from 15 to 80).

## II. Formal Definitions

### Definition 2.1 (VIX Futures Profile)
VIX is mean reverting.
Futures in Contango (Cost to hold).
Roll Yield is negative (-5% per month).
VIX ETPs (VXX) decay towards zero.
Holding Long VIX is a "Bleed" strategy.

### Definition 2.2 (The Convexity)
S&P drops 5%. VIX jumps 20%.
S&P drops 20%. VIX jumps 100%.
The hedge payoff is convex.
Allows a small position to hedge a large portfolio.

## III. Theoretical Framework

### 3.1 Term Structure Hedging
Front Month VIX (Spot Vol) reacts most to crashes.
Back Month VIX (Expected Vol) is sticky.
Hedge with Front Month? High Beta, High Roll Cost.
Hedge with Back Month? Low Beta, Low Roll Cost.
Optimal: Short Term Calls (Gamma of Volatility).

### 3.2 The Cost of Carry
Dedicate 1% per year to buying Strike 20 VIX Calls.
In a Bull Market: Loss 1% (Insurance Premium).
In a Crash (2008): VIX goes to 80. Calls go 60x.
Portfolio Impact: +60%.
Equity Impact: -40%.
Net: +20%.

## IV. Strategic Applications

### 4.1 Tail Risk Funds
Funds dedicated to buying OTM VIX Calls.
Clients pay a fee to hold this "Anti-Asset."
Hard to maintain discipline during 10-year bull market (2009-2019).
"Bleeding to death waiting for the apocalypse."

### 4.2 VIX Squeeze
Feb 2018 (Volmageddon).
Inverse VIX (XIV) blew up.
Dealers hedging Short Gamma in VIX products exacerbated the spike.
VIX futures doubled in one day.
Demonstrated the power of VIX as a hedge (and the danger of shorting it).

## V. Exercises

**Exercise 1 (Roll Down):**
VIX Spot 15. Future 18.
If nothing happens, Future goes to 15.
Loss of 3 points.
Options on Futures Decay + Roll Decay.
Expensive hedge.

**Exercise 2 (Diversification Failure):**
Bonds usually hedge Stocks.
In Inflationary Crash (2022), Stocks Down / Bonds Down.
VIX was the only asset Up.
True Diversifier.

## VI. References
-   CBOE. *VIX Whitepaper*.
-   Bhansali, V. *Tail Risk Hedging*.
