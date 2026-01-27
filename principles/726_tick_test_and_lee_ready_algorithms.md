# Tick Test and Lee Ready Algorithms

## I. Executive Summary

To analyze microstructure, one must classify every trade as **Buyer Initiated** or **Seller Initiated**. Since databases often only record Price and Volume (no "Side" flag), classification algorithms are required. The **Tick Test** (Price change) and **Lee-Ready** (Price vs Midpoint) are the standard methods. Accurate classification is prerequisite for calculating OBI, VPIN, and Market Impact.

## II. Formal Definitions

### Definition 2.1 (The Tick Test)
Compare $P_t$ to $P_{t-1}$.
If $P_t > P_{t-1}$ (Uptick) $\implies$ Buyer Initiated (Buy).
If $P_t < P_{t-1}$ (Downtick) $\implies$ Seller Initiated (Sell).
If $P_t = P_{t-1}$ (Zero Tick) $\implies$ Same as last classification (Zero-Uptick / Zero-Downtick).
Simple, essentially looking at color of tape.

### Definition 2.2 (The Lee-Ready Algorithm)
Lee & Ready (1991). Uses Quote Data.
1. Compare $P_t$ to Midpoint $M_t = (Bid+Ask)/2$.
   If $P_t > M_t \implies$ Buy.
   If $P_t < M_t \implies$ Sell.
2. If $P_t = M_t$ (At the Mid), use Tick Test.
Accuracy $\approx 85-90\%$.
Improvements: Ellis-Michaely-O'Hara (EMO).

## III. Theoretical Framework

### 3.1 The Midpoint Problem
Midpoint trades are common in Dark Pools or Hidden Inside Liquidity.
Classifying them is hard.
Are they buys or sells?
Usually Passive match.
Lee-Ready force-classifies them, introducing noise.

### 3.2 Time Stamping Issues
Trades and Quotes come from different feeds.
Timestamps might be misaligned (Price updates 1ms before Trade print?).
"Look-back adjustment."
Lee-Ready recommends comparing Trade at $t$ with Quote at $t - 5\text{sec}$ (in 1991).
In 2024, compare with Quote at $t - 1\text{ms}$.

## IV. Strategic Applications

### 4.1 Order Flow Imbalance (OFI) feature
Calculate OFI = $\sum V_{Buy} - \sum V_{Sell}$ using Lee-Ready tags.
Regress $\Delta Price$ against OFI.
Strong linear relationship ($R^2 > 60\%$ on short horizons).
Fundamental law of microstructure: Flow drives Price.

### 4.2 VWAP Benchmarking
To calculate execution quality, you need to know if you bought when others were buying (following pressure) or selling (absorbing pressure).
Side classification puts the trade in context.

## V. Exercises

**Exercise 1 (The Bulk Classification):**
Volume-Synchronized Probability of Informed Trading (VPIN) relies on Bulk Volume Classification.
Approximates Lee-Ready using Normal Distribution assumption of price changes.
Faster, less data intensive (doesn't need quotes).
Accuracy tradeoff.

**Exercise 2 (Verification):**
Get proprietary data (with Side flag) from a broker.
Run Lee-Ready on the prices.
Compare Predicted Side vs Actual Side.
Analyze where it fails (Fast markets? Crosses?).

## VI. References
-   Lee, C. & Ready, M. *Inferring Trade Direction from Intraday Data*.
-   Ellis, K., Michaely, R. & O'Hara, M. *The Accuracy of Trade Classification Rules*.
