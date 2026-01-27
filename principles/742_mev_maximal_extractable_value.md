# MEV Maximal Extractable Value

## I. Executive Summary

**MEV** (formerly Miner Extractable Value) is the profit that can be extracted from block production by including, excluding, or **reordering** transactions. It is the invisible tax of DeFi. Bots (Searchers) scan the Mempool for opportunities (Arb, Liquidations, Sandwich attacks) and bribe Validators (via Flashbots) to execute them. It is the **HFT** of the blockchain.

## II. Formal Definitions

### Definition 2.1 (The Sandwich Attack)
User sends transaction: Buy 1000 ETH for USDC. (High slippage tolerance).
Searcher sees it.
Bundle:
1. Searcher Buys ETH (Front-run). Pushes price up.
2. User Buys ETH (Victim). Pushes price up further.
3. Searcher Sells ETH (Back-run). Profit.
Risk-free if Miner guarantees the bundle order.

### Definition 2.2 (Flashbots)
Private communication channel between Searchers and Validators.
Bypasses the public Mempool "Priority Gas Auction" (PGA).
"I will pay you (Validator) 0.1 ETH to mine this bundle."
Prevents network clogging and failed transactions.
Professionalization of MEV.

## III. Theoretical Framework

### 3.1 Consensus Instability
If MEV in a block > Block Reward.
Miners might "Time Bandit" attack (Re-org the chain to steal the MEV from the previous miner).
Threatens blockchain security.
Proposer-Builder Separation (PBS) in Ethereum separates the "Building" (MEV extraction) from "Proposing" (Consensus).

### 3.2 The MEV Supply Chain
User $\to$ Wallet $\to$ Searcher $\to$ Builder $\to$ Validator.
Who captures the value?
Currently, Searchers and Validators.
Wallets/DEXs starting to protect users (MEV blockers) or rebate the value.

## IV. Strategic Applications

### 4.1 Liquidation Sniping
Lending protocol (Aave).
Loan health < 1.0.
First to call `liquidate()` gets 5% bonus.
MEV bots race to trigger it.
Gas wars.
Ensures protocol solvency (Good MEV).

### 4.2 JIT Liquidity
See Chapter 741.
Providing liquidity for 1 block to capture fees.
Discounts the user's trade (Good MEV?) but hurts passive LPs.

## V. Exercises

**Exercise 1 (Visualize the Dark Forest):**
Watch a pending transaction on Etherscan.
See the bots swarm.
Transaction replaced with higher gas.
The PVP nature of mempool.

**Exercise 2 (Slippage Setting):**
Set slippage to 0.1%.
Sandwich fails (Reverts).
Set slippage to 5%.
Sandwich succeeds.
User education is the best defense.

## VI. References
-   Daian, P. *Flash Boys 2.0: Frontrunning, Transaction Reordering, and Consensus Instability*.
-   Flashbots Docs. *The MEV Supply Chain*.
