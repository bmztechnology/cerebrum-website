# Gas Auction Microstructure EIP 1559

## I. Executive Summary

Blockspace is a scarce resource. **Gas Auctions** determine inclusion. Prior to **EIP-1559**, Ethereum used a **First-Price Auction** (Pay what you bid), leading to massive overpayment and volatility. EIP-1559 introduced a **Base Fee** (Burned) and a **Priority Fee** (Tip to Validator). This makes fee estimation predictable but creates a new microstructure game: **Priority Gas Auction (PGA)** for MEV.

## II. Formal Definitions

### Definition 2.1 (EIP-1559 Mechanics)
Block Target: 15M Gas. Max: 30M Gas.
If Block Full > Target: Base Fee $\uparrow$ 12.5%.
If Block Full < Target: Base Fee $\downarrow$ 12.5%.
**Base Fee:** Mandatory fee to network (Burned).
**Priority Fee:** Voluntary tip to Miner ($MinerReward$).
User Cost = Base + Priority.

### Definition 2.2 (The Spam Vector)
If Base Fee is low (e.g., Solana), cost of spam is near zero.
Bots spam networks to capture arbitrage.
Network congestion (DDoS).
Fee Markets are defense mechanisms against spam.

## III. Theoretical Framework

### 3.1 Demand Inelasticity
Users executing swaps are price insensitive during crashes.
"I must exit at any cost."
Gas demand curve is vertical (Inelastic).
Fees spike to 5000 Gwei ($200 per tx).
Microstructure of panic.

### 3.2 The Oracle Problem
Wallets estimate fees based on *past* blocks.
In a sudden spike (NFT Mint), past blocks are irrelevant.
Wallets under-price $\to$ Tx Stuck.
"Stuck Transaction" anxiety is a major UX friction.

## IV. Strategic Applications

### 4.1 Front-Running via Priority Fee
MEV Bot detects victim.
Simulates victim's trade.
Submits identical trade with higher Priority Fee.
Miner includes Bot first.
Microstructure ordering is purely financial.

### 4.2 Gas Tokens (Obsolete)
Storing gas when cheap (CHI Token).
Releasing it when expensive.
Arbitraging time-value of blockspace.
EIP-1559 mostly killed this (Refund limits).

## V. Exercises

**Exercise 1 (The Burn Rate):**
Watch `ultrasound.money`.
Verify correlation between Volatility and Burn Rate.
High Vol $\implies$ High Arb activity $\implies$ High Fees $\implies$ High Burn.
ETH is a "Long Volatility" asset relative to supply?

**Exercise 2 (Blob Space - EIP-4844):**
L2 data posted as "Blobs" (Temporary data).
Separate fee market from Execution gas.
Reduces cost for Rollups.
2-Dimensional Fee Market.

## VI. References
-   Buterin, V. *EIP-1559 Specification*.
-   Roughgarden, T. *Transaction Fee Mechanism Design*.
