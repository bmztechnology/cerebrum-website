# Smart Order Routing (SOR): Fragmented Liquidity

## I. Executive Summary

In modern ecosystem, a stock like AAPL trades on 13 exchanges (NYSE, NASDAQ, BATS, IEX...) and 50+ Dark Pools simultaneously. Liquidity is fragmented. **Smart Order Routing (SOR)** is the algorithm that decides *where* to send the order to get the best fill. It battles Latency arbitrageurs who try to pick off stale quotes on slow exchanges.

## II. Formal Definitions

### Definition 2.1 (The Routing Problem)
Minimize $\text{TotalCost} = \sum P_i Q_i + \text{Fees}_i$.
Subject to $\sum Q_i = \text{TotalOrder}$.
Constraint: $Q_i \le \text{AvailableLiquidity}_i$.
Constraint: $P_i \le \text{MaxMark}$.

### Definition 2.2 (Latency Arbitrage)
Price moves on NYSE (Fast). BATS (Slow) hasn't updated yet.
HFT buys stale offer on BATS, sells on NYSE.
Riskless profit.
SOR must account for "Flight Time" to each venue.

## III. Theoretical Framework

### 3.1 Aggressive vs Passive Routing
-   **Aggressive (Take):** Blast all exchanges simultaneously (Intermarket Sweep Order - ISO).
-   **Passive (Post):** Post limit order on the exchange with highest Rebate (Maker-Taker model). Complex fee maximization.

### 3.2 Probability of Fill
Dark Pools have invisible liquidity.
SOR uses Logistic Regression Analysis of historical fills ("Heat Maps") to guess: "Is there likely a seller in SigmaX Pool right now?"
Ping the pool. If no fill, route to lit market.

## IV. Strategic Applications

### 4.1 IEX (The Speed Bump)
IEX introduces a 350-microsecond coil delay.
This neutralizes Latency Arb.
SOR logic: "If I am an institutional investor, route to IEX first to avoid being front-run."

### 4.2 Waterfall Logic
1.  Check Internal Pool (Free).
2.  Check Dark Pools (Cheap, Low Impact).
3.  Check Inverted Exchanges (Rebates).
4.  Check Primary Exchange (Reliable).

## V. Exercises

**Exercise 1 (Phantom Liquidity):**
Quote for 100 shares appears on A and B.
It might be the SAME order echoed.
If you hit both, one cancels. (Liquidity Mirage).
SOR must dedup market data.

**Exercise 2 (Rebates):**
Maker-Taker fees: Pay $0.003 to take, Get $0.002 to make.
Taker-Maker (Inverted): Get $0.002 to take, Pay $0.003 to make.
SOR calculates Net Price = Price + Fee.
Sometimes buying at a higher price on an Inverted venue is cheaper net of rebate.

## VI. References
-   Foucault, T., et al. *Market Liquidity*.
-   Lewis, M. *Flash Boys* (Narrative context).
