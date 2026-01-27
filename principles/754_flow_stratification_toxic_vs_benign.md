# Flow Stratification Toxic vs Benign

## I. Executive Summary

Not all volume is equal. **Flow Stratification** classifies trades based on their **Information Content**. **Toxic Flow** (Informed) predicts permanent price moves and hurts Market Makers. **Benign Flow** (Uninformed/Retail) is mean-reverting and profitable for MMs. Discriminative algorithms (using Trade Size, Venue, and Timing) allow traders to selectively interact with Benign flow while dodging Toxic flow.

## II. Formal Definitions

### Definition 2.1 (Informedness Metric)
$I(Trade) = \text{Corr}(Trade_{sign}, Price_{t+k} - Price_t)$.
If Correlation is positive for large $k$ (Permanent Impact) $\implies$ Toxic.
If Correlation is zero or negative (Reversion) $\implies$ Benign.
HFTs track this per Order Entry Gateway.

### Definition 2.2 (The Retail Whitelist)
"Robinhood Flow."
Highly Benign. Uncorrelated.
Wholesalers (Citadel) pay (PFOF) to interact with this exclusively.
They avoid the "Open Exchange" where Toxic HFTs live.
Segmentation of liquidity.

## III. Theoretical Framework

### 3.1 Adverse Selection Probability
Trade arrives.
$P(Toxic | Attributes)$.
Attributes:
1. **Size:** Odd lots (Retail) vs Max allowed (Inst/HFT).
2. **Venue:** Inverted venue (Toxic?) vs Dark (Variegated).
3. **Speed:** Latency arb signature.
Bayesian update of Quote.

### 3.2 The Poisoning Effect
If a Dark Pool admits 1% Toxic Flow.
The MMs in that pool get run over.
They widen spreads or leave.
Pool quality degrades.
Gresham's Law: "Bad money drives out good." "Toxic flow drives out liquidity."

## IV. Strategic Applications

### 4.1 Anti-Gaming Logic (Market Making)
"If I get hit on Bid by known toxic counterparty, immediately Cancel Ask."
Don't be the "Exit Liquidity" for their arbitrage.
Move the price immediately.

### 4.2 Alpha filtering
Stratify volume bars.
"Only buy if *Toxic Buy Volume* is high."
Ignore Retail buying (Noise).
Follow the Smart Money.

## V. Exercises

**Exercise 1 (Venue Analysis):**
Compare reversion of trades on "Maker-Taker" vs "Taker-Maker" exchanges.
Taker-Maker often has more informed flow (willing to pay higher fee to take).
Maker-Taker has more passive flow.

**Exercise 2 (The Sweep):**
A sweep order hits 10 exchanges simultaneously.
Highly Toxic. (Removing all liquidity).
Single isolated trade.
Less Toxic.

## VI. References
-   Duarte, J. *Order Flow Toxicity*.
-   Easley, D. *Flow Toxicity and Volatility*.
