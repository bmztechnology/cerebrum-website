# Order Flow Toxicity VPIN

## I. Executive Summary

**Order Flow Toxicity** refers to the presence of Informed Traders who exploit Market Makers. When flow is toxic, MMs unknowingly take the other side of a winning trade, incurring losses (Adverse Selection). **VPIN (Volume-Synchronized Probability of Informed Trading)** is a metric developed (Easley, Lopez de Prado, O'Hara) to measure toxicity in real-time. High VPIN reliably predicts **Flash Crashes** and liquidity dry-ups.

## II. Formal Definitions

### Definition 2.1 (PIN - Probability of Informed Trading)
Original Model (Easley et al 1996).
Static parameter estimated daily.
Ineffective for HFT.
VPIN adapts this to "Volume Time" (Buckets of volume rather than clock time).
$VPIN = \frac{\sum |V_{Buy} - V_{Sell}|}{\text{Total Volume}}$.
Intuitively: Order Imbalance on a volume clock.

### Definition 2.2 (Toxic Flow)
Flow that is highly correlated directionally.
"Buying, Buying, Buying."
Implies "One Sided Information."
MMs provide liquidity to "Two Sided Flow" (Noise).
One Sided Flow runs over the MM.

## III. Theoretical Framework

### 3.1 Volume Buckets
Clock time is irrelevant in HFT.
Some seconds have 0 trades, some have 10,000.
Volume Buckets (e.g., every 10,000 shares) normalize the data sampling.
VPIN is calculated on rolling window of 50 buckets.

### 3.2 The Crash Predictor
May 6, 2010.
VPIN spiked *hours* before the crash.
Why? Informed traders (and Hedgers) were aggressively selling.
MMs didn't see the price drop yet, but VPIN saw the imbalance.
MMs then widened quotes / shut down $\implies$ Crash.

## IV. Strategic Applications

### 4.1 Risk Management for MMs
Control Dashboard.
If VPIN > Threshold (e.g., 0.8):
1. Widen Spreads (Charge more or AdSel).
2. Reduce Size (Limit Exposure).
3. Halt Trading (Kill Switch).

### 4.2 Alpha Signal
High VPIN usually precedes volatility.
Long Volatility strategy triggered by VPIN spike.
Also directional signal: If VPIN is high and Imbalance is Sell $\implies$ Short.

## V. Exercises

**Exercise 1 (Bulk Classification):**
How to classify Buy vs Sell volume?
Aggressor side.
Tick Test (Uptick = Buy).
Bulk Volume Classification (BVC) for probabilistic assignment.
VPIN accuracy depends on classification accuracy.

**Exercise 2 (False Positives):**
Index Rebalancing.
Massive one-sided flow.
VPIN spikes.
Is it "Toxic"?
Yes, in the sense that MMs will lose money if they stand in front of it.
No, in the sense that there is no "News" (Fundamental change).
MM doesn't care; loss is loss.

## VI. References
-   Easley, D., Lopez de Prado, M. & O'Hara, M. *The Microstructure of the "Flash Crash": Flow Toxicity, Liquidity Crashes, and the Probability of Informed Trading*.
-   Andersen, T. & Bondarenko, O. *VPIN and the Flash Crash*.
