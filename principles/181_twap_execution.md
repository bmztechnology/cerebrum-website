# TWAP Execution: Time Weighted Average Price

## I. Executive Summary

**TWAP** is the simplest execution benchmark. It executes the order evenly over a specific time period (e.g., "Buy 1000 shares every minute for 6 hours"). Unlike VWAP, it ignores Volume. It is distinctively useful for thin assets (Crypto Altcoins, Small Caps) where volume patterns are erratic or unknown, providing a "Uniform" invisibility cloak.

## II. Formal Definitions

### Definition 2.1 (The Schedule)
Total Size $X$. Time $T$. Number of slices $N$.
Slice Size $q = X/N$.
Execute $q$ at $t_1, t_2, \dots, t_N$.

### Definition 2.2 (Randomized TWAP)
To avoid HFT detection ("Gaming"), impose jitter.
Execute $q + \epsilon$ at $t + \delta$.
Where $\epsilon \sim N(0, \sigma_q)$ and $\delta \sim U(-\text{sec}, +\text{sec})$.

## III. Theoretical Framework

### 3.1 TWAP vs VWAP
-   **VWAP:** "Behave like the Crowd." (Good for Liquid stocks).
-   **TWAP:** "Behave like a Clock." (Good when there is no Crowd).
In a crash, VWAP sells MORE (because volume is high). TWAP sells CONSTANTLY.
TWAP is less pro-cyclical.

### 3.2 Impact Analysis
Impact accumulates linearly with rate.
Since Rate is constant ($X/T$), Market Impact is constant.
TWAP is the strategy of maximum patience.

## IV. Strategic Applications

### 4.1 Crypto Market Making
Whales slowly accumulate BTC via TWAP over weeks.
"Buying $10k every 5 minutes."
This creates a "Support Wall" or drift.
Retail traders see the price holding up and join in.

### 4.2 Basis Trading
Buying Spot / Selling Future.
Must execute both legs simultaneously to lock spread.
TWAP is safer than VWAP because you need the legs to match perfectly in time, not volume.

## V. Exercises

**Exercise 1 (Signaling):**
If you run a perfect TWAP (100 shares every 60s exactly).
HFT detects the periodicity (Fourier Transform).
HFT steps in front of you at second 59.
ALWAYS randomize interval.

**Exercise 2 (Comparison):**
Asset trades 100k shares at Open, 1k shares at Lunch.
You run TWAP (10k/hour).
At Open: You are 10% of volume. Minimal impact.
At Lunch: You are 1000% of volume. Massive impact. You crash the price.
**Danger:** TWAP ignores liquidity droughts.

## VI. References
-   Bertsimas, D., & Lo, A.W. *Optimal control of execution costs*.
-   Guéant, O. *The Financial Mathematics of Market Liquidity*.
