# MEV Theory: The Dark Forest

## I. Executive Summary

**Maximal Extractable Value (MEV)** (formerly Miner Extractable Value) is the profit a validator can make by their ability to include, exclude, or reorder transactions within the blocks they produce. It encompasses Front-running, Back-running, and Sandwich Attacks. MEV is the "Invisible Tax" of DeFi, illustrating the adversarial nature of mempool physics.

## II. Formal Definitions

### Definition 2.1 (Sandwich Attack)
Target Victim sends: "Buy 1000 ETH on Uniswap (Slippage 1%)".
Attacker sees this in Mempool.
Attacker constructs bundle:
1.  **Front-run:** Attacker Buys ETH (pushes price up).
2.  **Victim:** Victim Buys ETH (pushes price WAY up, max slippage).
3.  **Back-run:** Attacker Sells ETH (for profit).

### Definition 2.2 (Flashbots)
An auction system to democratize MEV.
Instead of spamming the network (Gas War) to be first, Searchers bid direct payments to Validators:
"If you include my bundle first, I will pay you 0.1 ETH."
Moves the war off-chain.

## III. Theoretical Framework

### 3.1 Time Bandit Attacks
If MEV in the last block was HUGE (e.g., $50M).
Miners might try to "Re-org" the chain (Fork the last block) to steal that MEV.
Destabilizes consensus.
Ethereum PoS (Proposer-Builder Separation) attempts to mitigate this.

### 3.2 The Efficient Market Hypothesis
MEV implies markets are inefficient because "Ordering" is a commodity.
Who owns the "right to be first"? The Validator.
Validators eventually capture all arbitrage profits (Rent Extraction).

## IV. Strategic Applications

### 4.1 Slippage Protection
Set Slippage Tolerance to 0.1%.
Sandwich attacks fail if victim rejects bad price.
Attackers rely on user laziness (Default 1-3% slippage).

### 4.2 Private RPCs
Route transactions through "Falshbots Protect" RPC.
Your transaction is hidden from the public Mempool until it is mined.
Makes you invisible to Sandwich Bots.

## V. Exercises

**Exercise 1 (The Searcher):**
You write a Python bot to scan Mempool.
You see a large swap.
Simulate: "If I buy before, do I profit?"
If Profit > Gas Cost $\implies$ Submit Bundle.
Competition: Other bots see it too. Winner is who pays the Miner the most (90%+ of profit goes to Miner).

**Exercise 2 (Generalized Frontrunner):**
A bot that doesn't understand the contract.
It just sees "Wait, Transaction X made money."
It copies Transaction X, replaces the "To" address with its own, and tries to run it first.
"Ape Bot."

## VI. References
-   Daian, P., et al. *Flash Boys 2.0: Frontrunning, Transaction Reordering, and Consensus Instability in Decentralized Exchanges*.
-   Paradigm Research Papers on MEV.
