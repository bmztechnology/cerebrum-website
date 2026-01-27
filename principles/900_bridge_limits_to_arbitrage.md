# The Bridge Limits to Arbitrage

## I. Executive Summary

**Limits to Arbitrage** (Shleifer & Vishny) is the bridge that explains why inefficiencies persist. Rational Arbitrageurs *want* to correct the price, but they face **Constraints**: **Noise Trader Risk**, **Funding Risk** (Margin Calls), **Horizon Risk**, and **Agency Risk**. The market stays irrational longer than you can stay solvent.

## II. Formal Definitions

### Definition 2.1 (Noise Trader Risk)
You short a bubble stock at \$100 (Fair Value \$50).
Noise Traders buy it up to \$200.
You are right fundamentally, but bankrupt mark-to-market.
Rational arbitrageurs avoid "Open-Ended" arbitrage where divergence can widen.
They only trade "Convergent" arbitrage (Merger Arb, Bonds).

### Definition 2.2 (Agency Capital)
Hedge Fund Managers manage other people's money (O.P.M.).
If the Arb trade goes against them temporarily (Drawdown), Investors redeem.
Manager forced to liquidate at the bottom.
Prices diverge *further* due to forced selling.
Systemic instability.

## III. Theoretical Framework

### 3.1 Implementation Costs
Shorting costs (Borrow fee).
Bid-Ask spread.
Impact cost.
If Mispricing < Costs, no one trades.
"Corridor of Inefficiency."
Within the corridor, price is random walk.

### 3.2 Synchronization Risk
Abebooks Anomaly (2007).
Two algo bots bidding against each other raised the price of a biology textbook to \$23 million.
No human intervened.
Arbitrage requires a human (or smarter algo) to step in.
If capital is fragmented, correction is delayed.

## IV. Strategic Applications

### 4.1 Siamese Twin Trade (Royal Dutch / Shell)
Same cash flows. Different trading tickers.
Should trade at parity ratio.
Diverged by 30%.
LTCM bet on convergence.
Divergence widened. LTCM blew up.
Lesson: Convergence is not guaranteed in your timeframe.

### 4.2 The Liquidity Black Hole
Arbitrage provides liquidity (Selling high, Buying low).
When Arbitrageurs hit Limits (VaR limits maxed out), they withdraw.
Liquidity vanishes.
Flash Crash.
Limits to Arb cause Fragility.

## V. Exercises

**Exercise 1 (Negative Stub):**
3Com / Palm spinoff.
Palm shares worth more than parent 3Com.
Implied value of 3Com's core business = Negative \$20B.
Why didn't Arbs fix it?
Short availability on Palm dried up.
Cost of borrow > Expected Arb profit.
Constraint binding.

**Exercise 2 (ETF Arb limits):**
Corporate Bond ETF (HYG) discount to NAV 5%.
Why?
Underlying bonds are frozen. Arbs cannot buy the basket and create shares.
Arbitrage mechanism breaks down in stress.

## VI. References
-   Shleifer, A. *Inefficient Markets*.
-   Mitchell, M. *Slow Moving Capital*.
