# Quantum Finance

## I. Executive Summary

**Quantum Computing** promises to solve problems that are intractable for Classical Computers. In Finance, this applies to **Optimization** (Portfolio Selection), **Simulation** (Monte Carlo), and **Encryption** (Post-Quantum Cryptography). The synthesis argues that Quantum is the "Nuclear Option" of finance: the first player to achieve **Quantum Supremacy** in arbitrage wins everything.

## II. Formal Definitions

### Definition 2.1 (Qubits and Superposition)
Classical Bit: 0 or 1.
Qubit: $\alpha|0\rangle + \beta|1\rangle$.
Exists in both states simultaneously.
$N$ Qubits represent $2^N$ states at once.
Parallel processing of *all possible portfolios* (Universe of solutions) in one shot.

### Definition 2.2 (Quantum Annealing)
Finding the global minimum of a complex energy landscape.
Portfolio Optimization is finding the minimum variance.
Classical computers get stuck in "Local Minima."
Quantum computers "Tunnel" through barriers to find the Global Minimum.
D-Wave systems used for this.

## III. Theoretical Framework

### 3.1 Quantum Monte Carlo
Pricing exotic derivatives requires millions of path simulations.
Takes hours on GPU clusters.
Quantum Amplitude Estimation (QAE) algorithm.
Quadratic speedup ($\sqrt{N}$).
Reduces simulation time from hours to seconds.
Real-time pricing of complex risks.

### 3.2 Shor's Algorithm (The Threat)
Factoring large primes.
Breaks RSA encryption (Basis of all banking security).
If a rogue state gets a Quantum Computer, they can steal all deposits / forge all signatures.
"Post-Quantum Cryptography" (Lattice-based) is the defense race.

## IV. Strategic Applications

### 4.1 Arbitrage Identification
Looking for loops in FX rates or cross-asset mispricing.
A combinatorial problem (Traveling Salesman variations).
Quantum algorithms can scan the entire graph instantly.
Hyper-efficient markets.

### 4.2 Feature Selection in ML
Choosing best 10 features out of 1000.
Combintorial explosion.
Quantum computing solves this selection problem efficiently.
Enhances classical AI models ("Quantum Machine Learning").

## V. Exercises

**Exercise 1 (The Grover Search):**
Unsorted database of N items.
Find one item.
Classical: $N/2$ steps.
Quantum: $\sqrt{N}$ steps.
Searching for "The Needle in the Haystack" (The profitable trade).

**Exercise 2 (Quantum Advantage timeline):**
Currently NISQ era (Noisy Intermediate-Scale Quantum).
Errors are high.
Error Correction is the bottleneck.
Finance will likely be the first commercial adopter once stability is reached.

## VI. References
-   Orus, R. *Quantum Computing for Finance*.
-   Lopez de Prado, M. *Tactical Investment Algorithms*.
