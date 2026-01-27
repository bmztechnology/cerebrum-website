# Skew Dynamics: The Smile in Motion

## I. Executive Summary

The **Volatility Skew** (OTM Put Vol minus OTM Call Vol) is dynamic. It reflects the market's specific fear of downside relative to FOMO of upside. In Equity markets, Skew is typically steep (Crash fear). In Crypto/Gold, Skew can invert (Call Vol > Put Vol). Analyzing changes in Skew provides signals on "Tail Risk Pricing" and Dealer Positioning.

## II. Formal Definitions

### Definition 2.1 (25-Delta Skew)
Metric: $IV(\Delta_{put}=0.25) - IV(\Delta_{call}=0.25)$.
-   Positive: Puts expensive. Bearish sentiment.
-   Flat: Complacency.
-   Negative: Calls expensive. Mania.

### Definition 2.2 (Skew Steepening)
Market falls. Puts get bid up.
Skew steepens.
This helps hedgers (Puts gain value from Delta AND Vega/Skew).
"Double Expansion."
Reason why Puts outperform Short Futures in a crash.

## III. Theoretical Framework

### 3.1 The Sticky Skew Assumption
Does the Skew slide with spot?
-   **Sticky Strike:** Vol at Strike 100 stays fixed even if Spot moves to 90. (Skew moves with price).
-   **Sticky Delta:** Vol at 10% OTM stays fixed. (Skew slides).
Evidence suggests Sticky Delta is more accurate for trending markets, Sticky Strike for rangebound.

### 3.2 The Put-Call Ratio (PCR)
Volume based Skew proxy.
High PCR > 1.0 $\implies$ Bearish? Or Contrarian Bullish (Too much fear)?
Extreme readings are usually contrarian indicators.

## IV. Strategic Applications

### 4.1 Risk Reversal Trade
If Skew is at historic highs.
Puts are super expensive. Calls are cheap.
Sell Put / Buy Call.
Finances a Bullish bet.
If market rallies, you win on Delta + Skew Flattening (Puts lose value fast).
"Catching the falling knife with insurance."

### 4.2 Butterfly skew
If ATM Vol is high but Skew is flat.
Sell ATM Straddle. Buy OTM Strangle.
Betting on "Peakedness" (Kurtosis).
If market rips or crashes, the OTM options are cheap protection.

## V. Exercises

**Exercise 1 (GameStop 2021):**
Call Skew exploded.
Call IV > Put IV.
Market Makers Short Calls.
Gamma Squeeze to upside.
Standard Equity Skew physics inverted.

**Exercise 2 (Pricing Tail Risk):**
Measure slope of Skew deep OTM.
If slope goes vertical, market is pricing a Discontinuity (Jump Diffusion).
Typically seen before BioTech approvals or Earnings.

## VI. References
-   Chapman, P. *Volatility Trading*.
-   Natenberg, S. *Option Volatility and Pricing*.
