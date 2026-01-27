# Market Microstructure: Kyle's Lambda

## I. Executive Summary

Albert Kyle (1985) formalized the game between three players: **Informed Traders** (know the true price), **Noise Traders** (random), and **Market Makers** (provide liquidity). The model defines **Market Liquidity** not just as volume, but as "The cost of trading a specific size." **Kyle's Lambda ($\lambda$)** measures this cost: How much does price move in response to $1 of Order Flow?

## II. Formal Definitions

### Definition 2.1 (The Linear Price Impact Model)
$$P_t = P_{t-1} + \lambda Q_t + \epsilon_t$$
-   $P_t$: Price change.
-   $Q_t$: Net Order Flow (Buy Vol - Sell Vol).
-   $\lambda$: Illiquidity Parameter (Slope).
-   $\epsilon$: Noise.

### Definition 2.2 (Kyle's Lambda)
$$\lambda = \frac{1}{2} \sqrt{\frac{\sigma_v^2}{\sigma_u^2}}$$
-   $\sigma_v^2$: Variance of the Asset Value (Fundamental Volatility).
-   $\sigma_u^2$: Variance of Noise Trading (Liquidity).
Insight: Liquidity ($\lambda$ low) is high when Noise Trading is high. If only Informed traders exist, $\lambda \to \infty$ (Market collapses).

## III. Theoretical Framework

### 3.1 Adverse Selection
Market Makers lose money to Informed Traders.
They recoup this loss from Noise Traders via the Spread.
The Spread is the "Insurance Premium" against the risk of trading with someone smarter than you.

### 3.2 The VPIN Metric
Volume-Synchronized Probability of Informed Trading.
High VPIN $\implies$ Toxic Flow (Informed traders are aggressive).
Market Makers widen spreads.
Historically, VPIN spiked 1 hour before the 2010 Flash Crash.

## IV. Strategic Applications

### 4.1 Estimating Lambda
Regress $\Delta P$ against Net Volume over 1-minute bars.
Slope = $\lambda$.
If $\lambda$ is rising, the market is becoming fragile (Volume is drying up or Volatility is expected).
**Action:** Reduce trade size.

### 4.2 Stealth Trading
Informed traders split orders to minimize impact ($\lambda Q$).
"Iceberg Orders."
Strategy: Detect Icebergs. If a small bid refreshes instantly 10 times, assume a Whale is there. Front-run the Whale.

## V. Exercises

**Exercise 1 (Impact):**
$\lambda = 0.0001$ per share.
You buy 10,000 shares.
Impact = $0.0001 \times 10,000 = \$1.00$.
Price moves up by $1.
If spread is only $0.01, your own impact is $100x$ the spread. You destroyed the trade.

**Exercise 2 (News):**
Before earnings, $\sigma_v$ (Fundamental uncertainty) is high.
Therefore $\lambda$ is high.
Spreads widen.
After news, $\sigma_v$ collapses. Liquidity returns.

## VI. References
-   Kyle, A.S. *Continuous Auctions and Insider Trading*.
-   Hasbrouck, J. *Empirical Market Microstructure*.
