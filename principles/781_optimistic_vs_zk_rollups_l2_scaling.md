# Optimistic vs ZK Rollups L2 Scaling

## I. Executive Summary

**Layer 2 (L2)** solutions scale Ethereum by executing transactions off-chain and posting compressed data (Blobs) on-chain. **Optimistic Rollups** (Arbitrum, Optimism) assume validity unless challenged (**Fraud Proofs**), requiring a 7-day withdrawal delay. **ZK Rollups** (zkSync, Starknet) cryptographically prove validity (**Zero-Knowledge Proofs**) instantly, offering immediate finality but higher compute cost.

## II. Formal Definitions

### Definition 2.1 (Optimistic Assumption)
Sequencer bundles 1000 txs. Posts Root.
"I claim this is valid."
Challenge Period (7 Days).
Verifier (Watchtower) can check.
If invalid, Verifier submits Fraud Proof (Execution Trace).
Sequencer slashed.
If no challenge, state finalized.
Microstructure: "Optimistic" $\implies$ Faster/Cheaper, but slow exit.

### Definition 2.2 (ZK Validity Proof)
Sequencer bundles 1000 txs.
Generates SNARK/STARK proof: "I executed these correctly."
Posts Proof + Data to L1.
L1 Smart Contract verifies Proof.
Finality: 15 minutes (Proof generation time).
Microstructure: "Trustless" $\implies$ Mathematical certainty, instant exit.

## III. Theoretical Framework

### 3.1 The Sequencer Monopoly
Currently, most L2s have 1 centralized Sequencer.
If Sequencer goes down, L2 stops.
Sequencer has monopoly on MEV (Can reorder).
"Shared Sequencing" (Espresso) aims to decentralize this.

### 3.2 Data Availability (DA)
L2s must post data to L1 so users can reconstruct state (if L2 dies).
Cost of L1 storage is the bottleneck.
EIP-4844 (Proto-Danksharding) lowers DA cost.
"Validium": ZK Rollup that stores data off-chain (Centralized DA) for ultra-low fees.

## IV. Strategic Applications

### 4.1 Fast Exit Bridges
Optimistic Rollup exit takes 7 days.
Liquidity Providers (Hop, Connext) offer "Fast Exit."
User sends L2 funds to LP.
LP sends L1 funds to User (minus fee).
LP takes the 7-day inventory risk.
Microstructure: Trading Time for Liquidity.

### 4.2 App-Chains (L3)
Rollup on top of a Rollup.
Specific to one app (e.g., dYdX, Gaming).
Custom fee token. Custom logic.
Fractal scaling.

## V. Exercises

**Exercise 1 (The Force Exit):**
If Sequencer censors you (refuses your tx).
You can send your tx directly to the L1 Inbox contract.
Sequencer *must* include it within 24 hours.
Censorship resistance mechanism.

**Exercise 2 (Prover Cost):**
ZK Proof generation requires massive RAM/GPU.
"Prover Market."
Outsourced proving.
Microstructure of computational commodities.

## VI. References
-   Buterin, V. *An Incomplete Guide to Rollups*.
-   Matter Labs. *zkSync Architecture*.
