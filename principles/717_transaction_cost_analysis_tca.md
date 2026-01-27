# Transaction Cost Analysis TCA

## I. Executive Summary

**Transaction Cost Analysis (TCA)** is the forensic accounting of trading execution. It dissects **Slippage** into components: **Spread Capture**, **Market Impact**, **Delay Cost**, and **Trend**. TCA is the feedback loop that tells PMs if their Alphas are tradeable and tells Traders if their Algos are performing. In a low-return world, minimizing TCA cost is often easier than generating new Alpha.

## II. Formal Definitions

### Definition 2.1 (Benchmarks)
**Arrival Price:** $P_{Decision}$. (Gold standard).
**VWAP:** Market Average. (Easy to beat).
**PWP (Participate with Price):** Hybrid.
**Close:** $P_{Close}$. (Used for mutual funds).
Performance = $P_{Exec} - Benchmark$. (In bps).

### Definition 2.2 (Reversion Analysis)
What happened to the price *after* you traded?
**T+1min, T+5min, T+Day.**
If Price reverts (Returns to start) $\implies$ Your Impact was temporary (Liquidity consumption).
If Price continues (Trends) $\implies$ Your Impact was permanent (Information leak or you are trading with Momentum).
Ideally, you want minimal Reversion (Temporary Impact).

## III. Theoretical Framework

### 3.1 The Heisenberg Principle of Trading
Measuring the market (Trading) changes the market.
TCA attempts to quantify the disturbance.
High Impact costs suggest "Capacity Constraints."
Fund is too big for the strategy.

### 3.2 Attribution
Was the bad execution due to:
1. **Trader Error:** Selected wrong algo.
2. **Algo Poor Logic:** Passive algo chased price.
3. **Market Conditions:** High Volatility / News.
TCA normalizing for Volatility/Liquidity separates Skill from Luck.

## IV. Strategic Applications

### 4.1 Broker Review
Ranking brokers.
"Goldman's Dark Pool gave 2bps improvement. Morgan Stanley's gave 0bps."
Route more flow to Goldman.
Data-driven vendor management.

### 4.2 Optimization
Feedback loop.
"We consistently lose 5bps in the first 30 mins."
Action: Stop trading the Open.
"We pay too much spread in Small Caps."
Action: Use Limit orders more aggressively in Small Caps.

## V. Exercises

**Exercise 1 (The Venue Analysis):**
Breakdown fills by venue.
Exchange A: High Fill Rate, Toxic (Price moves against immediately).
Exchange B: Low Fill Rate, Benign.
Exchange A allows predatory HFTs.
Action: Block Exchange A in the router.

**Exercise 2 (Outlier Detection):**
Top 10 worst trades of the month.
Analyzing the tape.
"We tried to buy 20% of ADV in 1 hour."
Liquidity violation.
Process fix: Hard size limits.

## VI. References
-   Kissell, R. *The Science of Algorithmic Trading and Portfolio Management*.
-   Economou, F. *Transaction Cost Analysis*.
