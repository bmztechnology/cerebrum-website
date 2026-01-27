# Latency Arbitrage Race to Zero

## I. Executive Summary

**Latency Arbitrage** is the practice of exploiting infinitesimal time differences (Microseconds $\mu s$) in the dissemination of price data between exchanges. A High Frequency Trader (HFT) detects a price move on Exchange A (Chicago) and races to execute stale orders on Exchange B (New Jersey) before Exchange B updates its quotes. This is a risk-free profit derived from the laws of physics (Speed of Light).

## II. Formal Definitions

### Definition 2.1 (The Latency Delta)
$\Delta t = t_{ExchangeB} - t_{ExchangeA}$.
Speed of Light in fiber $\approx 200,000$ km/s.
Distance CHI to NY $\approx 1200$ km.
Theoretical min time = 6ms.
If HFT is faster than the SIP (Securities Information Processor - public feed), HFT sees the future.
Profit = $|P_{New} - P_{Stale}|$.

### Definition 2.2 (Co-Location)
Placing servers *inside* the exchange data center.
Reducing cable length from kilometers to meters.
"The length of the cable determines your PnL."
Microwave towers reduce latency further (Light travels faster in air than glass).

## III. Theoretical Framework

### 3.1 The Tax on Liquidity
Budish, Cramton, Shim (2015).
Latency Arb is a tax on non-HFT liquidity providers.
MMs must widen spreads to account for the risk of being "picked off" by faster traders.
If Latency Arb was eliminated (Frequent Batch Auctions), spreads would tighten.

### 3.2 Arms Race (Prisoner's Dilemma)
Firm A spends \$100M to save 1ms.
Firm B must spend \$100M to keep up.
Relative speed remains same.
Socially wasteful investment?
Zero-sum game for the fastest players; negative-sum for the ecosystem?

## IV. Strategic Applications

### 4.1 Hide Not Slide
Order type: "Do not display if locked."
Preventing orders from executing against known stale quotes?
Exchanges offer native protection against Latency Arb (Discretionary Peg).

### 4.2 IEX (The Speed Bump)
The "Magic Shoebox."
38 miles of coiled fiber cable.
Delays all incoming orders by 350 $\mu s$.
Ensures the Exchange processes price updates *before* HFT orders arrive.
Eliminates Latency Arb.

## V. Exercises

**Exercise 1 (The Inter-Exchange Arb):**
SPY (ETF) trades on NYSE.
ES (Future) trades on CME.
Correlation = 1.0.
CME moves first (Leverage leader).
HFT buys SPY on NYSE milliseconds later.
Statistical Arb becomes Deterministic Arb at high speed.

**Exercise 2 (Geographic Alpha):**
Where is the price discovery?
It is in the microwave beam over Ohio.
Price is a wave propagating through space.

## VI. References
-   Lewis, M. *Flash Boys* (Narrative account).
-   Budish, E. *The High-Frequency Trading Arms Race: Frequent Batch Auctions as a Market Design Response*.
