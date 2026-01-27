# Smart Contract Risk and Audits

## I. Executive Summary

In execution, **Code is Law**. But if the code has a bug, the law allows theft. **Smart Contract Risk** is the operational risk of DeFi. Hacks, Re-entrancy attacks, and Oracle manipulations have drained billions. **Audits** (by firms like OpenZeppelin, Trail of Bits) mitigate but do not eliminate risk. Users effectively underwrite this technology risk.

## II. Formal Definitions

### Definition 2.1 (Re-entrancy Attack)
The DAO Hack (2016).
Contract function: `withdraw()`.
Steps: 1. Check Balance. 2. Send ETH. 3. Update Balance.
Attacker calls `withdraw`.
In Step 2 (Send ETH), the Attacker's fallback function calls `withdraw` *again*.
Since Step 3 (Update Balance) hasn't happened yet, Step 1 passes again.
Loops until vault is empty.
Fix: Checks-Effects-Interactions pattern.

### Definition 2.2 (Oracle Manipulation)
Protocol relies on Spot Price from a DEX.
Attacker uses Flash Loan to pump DEX price.
Protocol reads pumped price $\implies$ Under-collateralized loan / Liquidations.
Attacker profits.
Fix: Use TWAP Oracles or Chainlink (Decentralized Oracle).

## III. Theoretical Framework

### 3.1 Immutability Dilemma
Code is immutable (Unchangeable).
Good: No one can rug pull.
Bad: If a bug is found, you can't patch it easily.
Upgrade patterns (Proxy Contracts) exist but introduce centralization risk (Admin Keys).

### 3.2 Formal Verification
Mathematical proof of code correctness.
Unlike testing (trying inputs), verification proves inputs *cannot* violate invariants.
Expensive, rare, but the gold standard for high-value contracts.

## IV. Strategic Applications

### 4.1 Insurance (Nexus Mutual)
Buying cover on smart contracts.
Pricing the risk of a hack.
If Cover Cost > Yield, the trade is negative EV.
Smart Money often ignores yield farms without audits.

### 4.2 The Dark Forest
Mempool monitoring.
If you try to "Rescue" or "Whitehat" a vulnerable contract, bots see your transaction.
They copy it (Front-run), replace your address with theirs, and steal the funds first.
Generalized Front-running.

## V. Exercises

**Exercise 1 (Reading the Audit):**
"2 Critical, 3 Major Issues Found."
Were they fixed?
Check the Github commit hash.
Projects often launch with "Acknowledged" but unfixed risks.

**Exercise 2 (Rug Pull Detection):**
Check Liquidity Lock.
Is the LP token locked?
Check Ownership Renounced.
Can the dev mint infinite tokens?
Basic due diligence scripts.

## VI. References
-   Antonopoulos, A. *Mastering Ethereum*.
-   Consensys. *Smart Contract Best Practices*.
