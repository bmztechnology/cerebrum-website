# Execution Dynamics: Slippage and Latency

## I. Introduction

Slippage refers to the difference between the expected price of a trade and the price at which the trade is actually executed. While often viewed negatively by retail traders as "broker manipulation," slippage is a natural function of market microstructure, resulting from latency, liquidity gaps, and signal propagation time.

## II. Formal Definitions

### Definition 2.1 (Slippage)
Let $P_{expected}$ be the price at the moment the order signal is generated/clicked.
Let $P_{fill}$ be the price confirmed by the exchange/broker.
$$Slippage = |P_{fill} - P_{expected}|$$
*(Directional sign depends on order type: Buying higher or Selling lower = Negative Slippage)*.

### Definition 2.2 (Implementation Shortfall)
A broader metric defined by Perold (1988), capturing total execution friction:
$$IS = ExecutionCost + OpportunityCost + Fees$$
Slippage is the primary component of the Execution Cost.

## III. Causes of Slippage

### 3.1 Latency (Technology)
$$t_{total} = t_{network} + t_{processing} + t_{queue}$$
During the time $t_{total}$ (often 50-200ms for retail, microseconds for HFT), the market price $P(t)$ evolves as a stochastic process:
$$P(t + t_{total}) = P(t) + \int_{t}^{t+t_{total}} dW_t$$
If the price drifts during transport, slippage occurs.

### 3.2 Liquidity Exhaustion (Market Depth)
If an order size $Q$ exceeds the available volume at the Top of Book ($V_{best}$), the order "sweeps the book":
$$P_{avg} = \frac{P_1 V_1 + P_2 V_2 + ... + P_k V_k}{Q}$$
where $\sum V_i = Q$. The difference $P_{avg} - P_1$ is volume-induced slippage.

### 3.3 Protection Slippage (Stop Loss Gaps)
In discontinuous markets (gaps), a Stop Loss order at $P_{stop}$ is triggered but filled at the *next available* price $P_{open}$, which may be significantly worse.
$$P_{fill} \ll P_{stop}$$

## IV. Positive vs Negative Slippage

### 4.1 Negative Slippage
-   **Market Order (Buy):** Fill Price > Quote Price.
-   **Stop Order (Sell):** Fill Price < Stop Price.
Occurs when trading *with* momentum into fading liquidity.

### 4.2 Positive Slippage (Price Improvement)
-   **Limit Order:** Generally not subject to negative slippage (except non-fill risk).
-   **Market Order:** Can receive positive slippage if liquidity is added to the book inside the spread during latency transit. Est. 10-20% of retail market orders receive price improvement.

## V. Mitigation Strategies

### 5.1 Maximum Deviation (Slippage Control)
Setting a `MaxDev` parameter rejects the fill if $P_{fill} - P_{expected} > MaxDev$.
*Risk:* Rejection leads to missed opportunity (Opportunity Cost), which can be more expensive than the slippage itself.

### 5.2 VWAP Execution
Large institutional orders are broken into child orders executed over time to minimize market impact (self-induced slippage).

### 5.3 Limit Orders (Maker)
Trading as a liquidity provider ("Maker") ensures price certainty but introduces execution uncertainty (probability of fill < 1).

## VI. Exercises

**Exercise 1:** A trader places a Market Buy for 10 lots (1M units). The Order Book is:
-   1.2000: 2 lots
-   1.2001: 5 lots
-   1.2003: 10 lots
Calculate the generic VWAP fill price. What is the slippage relative to the "Top of Book" price (1.2000)?

**Exercise 2:** A strategy has a distinct "edge" of 2 pips per trade. The average latency is 200ms. During news, volatility is 10 pips/sec. Is the strategy viable? Calculate expected slippage.

**Exercise 3:** Explain why Stop Loss orders are prone to unbounded slippage during weekend gaps, while Limit orders are safe.

## VII. References
-   Perold, A.F. (1988). *The Implementation Shortfall: Paper versus Reality*.
-   Kissell, R. (2013). *The Science of Algorithmic Trading and Portfolio Management*.
-   Narang, R.K. (2009). *Inside the Black Box*.
