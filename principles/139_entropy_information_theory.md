# Shannon Entropy: Information Theory in Finance

## I. Executive Summary

Claude Shannon (1948) defined Entropy as a measure of "Uncertainty" or "Information Content." In finance, Entropy quantifies the randomness of a price signal. A market with Low Entropy is predictable (ordered); a market with High Entropy is random (efficient). Traders use Entropy metrics to detect the breakdown of structure (Maximum Entropy = Crash or Reversal).

## II. Formal Definitions

### Definition 2.1 (Shannon Entropy $H$)
For a discrete probability distribution $P(x)$:
$$H(X) = - \sum_{i=1}^n p(x_i) \log_2 p(x_i)$$
-   Measured in **Bits**.
-   Max Entropy occurs when $p(x)$ is Uniform (Total Randomness).

### Definition 2.2 (Approximate Entropy - ApEn)
Measures the regularity of a time series. Allows comparison of "complexity" between two assets (e.g., Bitcoin vs Gold).

## III. Theoretical Framework

### 3.1 The EMH Connection
Efficient Market Hypothesis $\implies$ Prices are Random Walk $\implies$ Entropy should be Maximum.
Technical Analysis $\implies$ Patterns exist $\implies$ Entropy should be Lower.
Trading edge exists in "pockets of low entropy."

### 3.2 Kullback-Leibler Divergence (Relative Entropy)
Measures distance between two distributions $P$ and $Q$.
$$D_{KL}(P || Q) = \sum P(x) \log \frac{P(x)}{Q(x)}$$
Used to detect **Regime Shifts** (Current distribution $P$ diverges from historical distribution $Q$).

## IV. Strategic Applications

### 4.1 Trend Reversal Warning
During a strong trend, price is ordered (Low Entropy).
At the top, volatility expands and price churns (Entropy Spikes).
*Signal:* If Entropy breaks out, the Trend is dead.

### 4.2 Feature Selection for ML
When training a Neural Network, calculate Mutual Information (Entropy reduction) between Feature $X$ and Target $Y$.
$$I(X;Y) = H(X) - H(X|Y)$$
Select features with high Information Gain. Eliminate features with 0 Gain (Noise).

## V. Exercises

**Exercise 1 (Calculation):**
Coin Toss.
Fair Coin (50/50): $H = -(0.5 \log 0.5 + 0.5 \log 0.5) = 1$ bit.
Biased Coin (90/10): $H = -(0.9 \log 0.9 + 0.1 \log 0.1) \approx 0.47$ bits.
The Biased coin has *less* uncertainty. We can predict it better.

**Exercise 2 (Trading):**
Why does "Maximum Entropy" usually coincide with "Maximum Liquidity"?
(In equilibrium, buyers and sellers are equal, distribution of trades is uniform. When entropy drops, one side dominates).

## VI. References
-   Shannon, C.E. *A Mathematical Theory of Communication*.
-   Cover, T.M. *Elements of Information Theory*.
