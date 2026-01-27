# Cross Chain Bridges Interoperability

## I. Executive Summary

Blockchains are siloed databases (Ethereum cannot read Solona). **Bridges** are the infrastructure connecting them, allowing asset transfer. They are the **Weakest Link** in crypto security, accounting for the largest hacks ($600M Poly, $300M Wormhole). Mechanisms include **Lock-and-Mint** (Centralized Risk) and **Atomic Swaps** (Trustless but slow).

## II. Formal Definitions

### Definition 2.1 (Lock and Mint)
User sends ETH to Bridge Contract on Ethereum (Lock).
Bridge Oracle sees event.
Bridge mints "Wrapped ETH" (wETH) on Solana to User's address.
Risk: If the Locked ETH on Ethereum is stolen, the wETH on Solana becomes worthless (unbacked).

### Definition 2.2 (Liquidity Pools / Relayers)
User sends USDC to Relayer on Chain A.
Relayer sends USDC to User on Chain B (from their own inventory).
Relayer takes a fee.
No wrapping. Just swapping.
Capital intensive for the Relayer (Must hold inventory on all chains).

## III. Theoretical Framework

### 3.1 The Trilemma of Interoperability
1. **Generalizability:** Can it handle any data?
2. **Extensibility:** Can it support any chain?
3. **Trustlessness:** Does it rely on a 3rd party?
Most bridges sacrifice Trustlessness (using a "Multi-Sig" of 5 people) to achieve Speed and Extensibility.

### 3.2 Canonical Assets vs Wrapped Assets
**Canonical:** The real asset (USDC on Ethereum).
**Wrapped:** A claim on the real asset (USDC.e on Avalanche).
Liquidity fragmentation: User has pure USDC, but DApp requires wrapped USDC.
UX Friction.

## IV. Strategic Applications

### 4.1 Bridge Arbitrage
Price of ETH on Ethereum: 2000.
Price of ETH on Optimism: 2010.
Arb: Bridge ETH to Optimism $\to$ Sell.
Constraint: Bridge delay (7 days for Optimism exit).
The spread represents the "Time Value of Liquidity."

### 4.2 Vampire Attacks via Bridges
Chain A subsidizes bridging.
"Free money if you bridge your assets here."
Sucking TVL (Total Value Locked) from Ethereum.
Incentive driven migration.

## V. Exercises

**Exercise 1 (The Honeypot):**
A Bridge contract holding $1B.
Code is public.
If one bug exists, $1B is lost.
Bridges are the highest value targets in the world.

**Exercise 2 (Layer Zero):**
"Omnichain" messaging.
Sending a message "Vote Yes" from Polygon to a DAO on Ethereum.
Interoperability beyond just tokens.

## VI. References
-   Buterin, V. *Why the future will be multi-chain, but not cross-chain*.
-   Chainalysis. *The State of Crypto Crime (Bridge Hacks)*.
