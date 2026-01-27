# HFT Strategies Market Making

## I. Executive Summary

**High Frequency Trading (HFT)** is not a monolith. It comprises distinct strategies, principally **Electronic Market Making** (Providing Liquidity) and **Statistical Arbitrage** (Taking Liquidity). Market Makers earn the spread and rebates, managing inventory risk with speed. Stat Arb bots exploit mean reversion or momentum on millisecond timeframes. Both rely on **automation** and **scale**.

## II. Formal Definitions

### Definition 2.1 (The Maker-Taker Model)
Exchange pays Maker (e.g., 0.2 cents/share).
Exchange charges Taker (e.g., 0.3 cents/share).
Exchange keeps 0.1 cent (Spread).
HFT Market Maker profit = Spread + Rebate - TakerFees (hedging) - FixedCosts.
Rebates are often the primary profit driver.

### Definition 2.2 (Inventory Management)
Objective: Stay flat.
If HFT buys 100 shares, they immediately try to sell 100 shares.
Holding period: Seconds.
Risk: "Toxic Flow" (Inventory moving against you).
Stoikov-Sagan Model: Adjust quotes based on inventory skew.

## III. Theoretical Framework

### 3.1 Adverse Selection Logic
HFT MM does not want to trade with an Informed Trader.
If an order comes from an Informed Trader, price will move against MM.
HFTs use "Flow Classification" (Machine Learning) to identify toxic orders (Large blocks, specific routing IDs) and widen quotes or cancel.

### 3.2 Momentum Ignition
Predatory HFT.
Spiking volume (Aggressive Buying) to trigger other algos/stops.
Creating a mini-momentum wave, then selling into it.
Borderline manipulation.

## IV. Strategic Applications

### 4.1 Layering
Placing bids at 10.00, 9.99, 9.98.
Providing deep liquidity?
Or probing for hidden liquidity?
If 10.00 is hit, instantly cancel 9.99 and 9.98 (Fading).
Resilience is fake.

### 4.2 ETF Arbitrage
SPY vs 500 underlying stocks.
HFT calculates Net Asset Value (NAV) in real time.
If $Price_{SPY} \neq \sum Price_{Stocks}$, HFT buys cheap / sells expensive.
Keeps ETFs efficient.
Massive volume generator.

## V. Exercises

**Exercise 1 (The Rebate Trade):**
Stock A has 0.01 Spread.
Price doesn't move.
HFT buys on Bid (Earns Rebate). Sells on Ask (Earns Rebate).
Profit = Rebate x 2.
Trading for the rebate, not the price move.

**Exercise 2 (Ping functionality):**
Sending a customized IOC order to a dark pool to check for a buyer.
Information gathering.
Cost of ping < Value of Information.

## VI. References
-   Aldridge, I. *High-Frequency Trading: A Practical Guide*.
-   Cartea, A. *Algorithmic and High-Frequency Trading*.
