# Quantum Computing Risks and Post Quantum Cryptography

## I. Executive Summary

**Quantum Computing** poses an existential threat to the **Cryptography** underpinning finance (ECDSA in Bitcoin, RSA in Banking). Shor's Algorithm can factor large numbers, potentially breaking private keys. Simultaneously, **Quantum Finance** offers exponential speedup for **Optimization** (Portfolio, Arbitrage) and **Monte Carlo** simulations. The race is between the Quantum Hacker and the Post-Quantum Upgrade.

## II. Formal Definitions

### Definition 2.1 (Shor's Algorithm)
Factors integers $N$ in $O((\log N)^3)$.
Classical: $O(e^{N^{1/3}})$.
Exponential speedup.
Breaks RSA and Elliptic Curve (ECC).
Bitcoin keys (Secp256k1) vulnerable if Public Key is exposed (Address reuse).

### Definition 2.2 (Grover's Algorithm)
Search unsorted database in $O(\sqrt{N})$.
Quadratic speedup.
Attacks Hash Functions (SHA-256).
Bitcoin Mining: Grover gives a quadratic advantage.
Proof-of-Work difficulty would skyrocket.

## III. Theoretical Framework

### 3.1 Post-Quantum Cryptography (PQC)
NIST Standards (Kyber, Dilithium).
Lattice-based cryptography.
Resistant to Quantum attack.
Upgrade path: Blockchains must Hard Fork to PQC signatures.
Banking systems must migrate certs.
Y2K event but with cryptography.

### 3.2 Quantum Advantage in Trading
Quantum Annealing (D-Wave).
Solving "Knapsack Problem" (Portfolio Selection).
Solving "Traveling Salesman" (Arb Path).
Finding the Global Minimum of the Loss Surface instantly.
The first firm with a Quantum Computer dominates the market.

## IV. Strategic Applications

### 4.1 The Harvest Now, Decrypt Later Attack
Hackers steal encrypted data today (Bank comms, Government secrets).
Store it.
Wait 10 years for Quantum Computer.
Decrypt.
Forward Secrecy is essential.

### 4.2 Quantum HFT
Quantum sensors? Atomic Clocks?
Synchronization of time to femtoseconds.
Relativistic trading infrastructure.

## V. Exercises

**Exercise 1 (Bitcoin Vulnerability):**
P2PKH (Pay to PubKey Hash).
Public Key is Hashed (SHA-256).
Grover only reduces security to 128-bit (Safe).
BUT, once you spend, PubKey is revealed.
Mempool vulnerability?
Miner could crack Key before tx confirms?
Quantum Miner Front-running.

**Exercise 2 (Transition Risk):**
Migrating the entire financial internet to PQC.
Costly, buggy, dangerous.
Crypto agility.

## VI. References
-   NIST. *Post-Quantum Cryptography Standardization*.
-   Lopez de Prado, M. *Quantum Computing in Finance*.
