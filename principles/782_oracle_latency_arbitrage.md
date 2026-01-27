# Oracle Latency Arbitrage

## I. Executive Summary

**Oracles** (Chainlink, Pyth) bridge off-chain data (Binance price) to on-chain contracts (Perpetuals DEX). **Latency Arbitrage** occurs when the Oracle update lags the real market. If Binance moves +5% and Oracle is stale, a trader can go Long on-chain at the old price, guaranteed to profit when the Oracle updates. Protocols defend with **Max Deviation Thresholds** and **Keeper Incentives**.

## II. Formal Definitions

### Definition 2.1 (The Stale Price Attack)
$P_{Real} = 105$.
$P_{Oracle} = 100$.
Updates every 10 mins or if Deviation > 1%.
Trader sees $P_{Real}$ move to 100.9 (No update trigger).
Trader buys at 100 on-chain.
Real market is 100.9.
 Instant profit? No, requires update.
Attack works best during high volatility when update frequency lags volatility speed.

### Definition 2.2 (Push vs Pull Oracles)
**Push (Chainlink):** Nodes push updates to chain periodically. Slow, expensive.
**Pull (Pyth):** User pushes the price update (signed by Oracle) *with* their transaction.
"Here is my trade, and here is the proof of the current price."
Eliminates latency?
No, still 400ms latency (Block time + Signature generation).

## III. Theoretical Framework

### 3.1 Toxic Flow in Perps
GMX / Synthetix model: "Trade against LP at Oracle Price."
Zero Slippage. Infinite Liquidity.
If Oracle is toxic (lagging), LPs get drained.
"L1 Arbitrage."
HFT firms exploit this relentlessly on new chains.

### 3.2 Confidence Intervals
Pyth provides Price + Confidence ($\sigma$).
$P = 100 \pm 0.5$.
Protocol Logic:
If Long, execute at $100.5$ (Worst Case).
If Short, execute at $99.5$ (Worst Case).
Protects LPs from uncertainty/latency.

## IV. Strategic Applications

### 4.1 Front-Running the Oracle
Mempool has a "Oracle Update Tx."
Trader sees "Price going to 105."
Trader back-runs the update? No, useless.
Trader tries to execute *before* the update in the *same* block?
Flashbots bundles.

### 4.2 Keeper Wars
Keepers are paid to update the Oracle.
If price deviation is huge, reward is huge.
Keepers gas war to be the first to update.
Microstructure of maintenance.

## V. Exercises

**Exercise 1 (The LUNA Crash):**
Oracle stopped updating because price fell below $0.10 (min value hardcoded).
Protocol treated LUNA as worth $0.10 when it was $0.0001.
Attackers deposited worthless LUNA (valued at 0.10) and borrowed real money.
Bad Oracle config = Solvency crisis.

**Exercise 2 (Dark Oracle):**
Using a private Oracle (Uni V3 TWAP) vs Public (Chainlink).
Uni V3 TWAP is manipulatable (Flash Loan).
Chainlink is harder (Consensus of 20 nodes).
Security budget.

## VI. References
-   Chainlink. *Architecture of Decentralized Oracles*.
-   Synthetix. *SIP-12: Oracle Latency*.
