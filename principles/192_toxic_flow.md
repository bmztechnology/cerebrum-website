# Toxic Flow & VPIN: Detecting The Informed

## I. Executive Summary

**Toxic Flow** (Adverse Selection) occurs when you provide liquidity to a trader who knows something you don't. The price moves against you immediately after the trade. Market Makers fear this above all else. **VPIN (Volume-Synchronized Probability of Informed Trading)** is the standard metric for quantifying this toxicity in real-time, functioning as a "Geiger Counter" for market risk.

## II. Formal Definitions

### Definition 2.1 (Toxicity)
A trade is toxic if the mid-quote moves in the direction of the trade shortly after execution.
Buyer initiates $\to$ Price goes Up.
Seller initiates $\to$ Price goes Down.
The Market Maker (Passive side) loses on the inventory.

### Definition 2.2 (VPIN Calculation)
Divide trading day into "Volume Buckets" (e.g., every 10,000 shares).
Not Time Buckets (Time is irrelevant to event time).
For each bucket $i$:
$$OI_i = |V^{Buy}_i - V^{Sell}_i|$$ (Order Imbalance).
$$VPIN = \frac{\sum_{j=1}^n OI_j}{\sum_{j=1}^n V_j}$$ (Rolling average of imbalance).

## III. Theoretical Framework

### 3.1 Flow Classification
-   **Uninformed (Noise):** Retail, Index Funds rebalancing, passive hedgers. (Safe to trade with).
-   **Informed (Toxic):** HFT Arbitrageurs, News Traders, Insider Trading. (Dangerous).
High VPIN $\implies$ High Ratio of Informed Traders.

### 3.2 The Skew
When VPIN is high, Market Makers skew their quotes.
If Toxic Buying is detected:
MM moves Bid UP and Ask UP.
Why? To discourage Buyers (Offering a higher price) and encourage Sellers (Bidding a higher price) to balance inventory.

## IV. Strategic Applications

### 4.1 Volatility Prediction
High VPIN is a leading indicator of Volatility.
Before a crash, informed traders bail out. VPIN spikes.
Volatility follows.
Strategy: Long VIX when VPIN > Threshold.

### 4.2 Execution Timing
Do not execute large passive orders when VPIN is high.
You will be run over.
Wait for VPIN to subside (Noise traders return).

## V. Exercises

**Exercise 1 (Flash Crash):**
1 hour before the 2010 crash, VPIN reached historical highs.
Liquidity Providers saw the toxicity and turned off their machines.
When the large sell order came, the book was empty.
VPIN predicted the liquidity withdrawal.

**Exercise 2 (Calculation):**
Bucket 1: Buy 80, Sell 20. Imbalance 60.
Bucket 2: Buy 90, Sell 10. Imbalance 80.
Avg Imbalance: 70.
Avg Vol: 100.
VPIN = 0.70. (Extremely High).
Expect a price jump.

## VI. References
-   Easley, D., Lopez de Prado, M., & O'Hara, M. *The Microstructure of the "Flash Crash": Flow Toxicity, Liquidity Crashes, and the Probability of Informed Trading*.
-   Lopez de Prado, M. *Advances in Financial Machine Learning*.
