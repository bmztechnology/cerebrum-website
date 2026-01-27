# Liquidation Cascades in Lending markets

## I. Executive Summary

**Liquidation Cascades** are the primary mechanism of Deleveraging in DeFi. When collateral value falls, **Liquidator Bots** seize the collateral, selling it on DEXs to repay the debt. This selling pressure drives prices lower, triggering more liquidations. Unlike traditional margin calls (human intervention), Smart Contract liquidations are **Algorithmic** and **Ruthless**, causing "Wick" events where prices momentarily collapse 50%+.

## II. Formal Definitions

### Definition 2.1 (Health Factor $H_f$)
$$ H_f = \frac{\sum Collateral \times LiquidationThreshold}{\sum Debt} $$
If $H_f < 1.0$, account is insolvent.
Liquidator calls `liquidationCall()`.
Repays 50% of debt.
Seizes Collateral + Bonus ($5 - 10\%$).
Profit = Bonus - Gas - Swap Costs.

### Definition 2.2 (The Auction Mechanism)
**Instant (Aave):** Fixed bonus. First to click wins.
**Dutch Auction (MakerDAO):** Price starts high, drops over time until someone bids.
Minimizes the "Bad Debt" left in system.
Instant is faster (better for volatility) but leaks value to liquidators.

## III. Theoretical Framework

### 3.1 On-Chain Volatility vs Off-Chain
If CEX price crashes, DEX price lags.
Liquidations happen on-chain based on Oracle price.
If Oracle updates, massive block of liquidations hits DEX.
DEX price crashes *below* CEX price.
Arb bots buy DEX, sell CEX.
Liquidity transfer.

### 3.2 Bad Debt Creation
If Price gaps down (Flash Crash) faster than liquidators can act.
Collateral Value < Debt Value.
Liquidator won't liquidate (Negative Profit).
Protocol is stuck with Bad Debt.
Socialized Loss (Insurance Fund).

## IV. Strategic Applications

### 4.1 Hunting Whales
Monitoring large positions (CRV Founder).
"Liquidation Price: $0.30."
Market predators Short the token to push price to $0.29.
Trigger the cascade.
Cover Short into the liquidation volume (High liquidity event).
"Squeezing the Longs."

### 4.2 Defensive Deleveraging
Auto-repay bots (DeFi Saver).
If $H_f < 1.2$, Flash Loan:
Borrow Collateral $\to$ Sell Collateral $\to$ Repay Debt.
Unwinds position *before* liquidation penalty kicks in.
"Self-Liquidation."

## V. Exercises

**Exercise 1 (Gas War):**
Profitable liquidation detected ($100k profit).
10 bots submit tx.
Priority Fee bids escalate to $99k.
Miner captures 99% of the value (MEV).
Liquidator gets minimal profit.

**Exercise 2 (The Wick):**
ETH drops from 2000 to 1800.
Liquidations push it to 1400 on Uniswap for 1 block.
Quickly reverts to 1800.
Limit orders at 1400 get filled.
"Stink Bids."

## VI. References
-   Aave. *Risk Framework*.
-   MakerDAO. *The Auctions Module*.
