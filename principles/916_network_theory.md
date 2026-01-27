# Network Theory Graph Topology

## I. Executive Summary

Financial Systems are **Networks** (Graphs). Nodes are Banks/Funds; Edges are Loans/Derivatives. The **Topology** of the network determines its stability. **Scale-Free Networks** (Power Law degree distribution) are robust to random failure but fragile to **Targeted Attack** (Hub failure). Systemic Risk is a topological property.

## II. Formal Definitions

### Definition 2.1 (Centrality Measures)
**Degree Centrality:** Number of connections (JPM has high degree).
**Betweenness Centrality:** Bridges between clusters (Shadow Bank connecting EU and US).
**Eigenvector Centrality:** Connected to important people (Google PageRank).
Regulators (FSOC) use these to identify SIFIs (Systemically Important Financial Institutions).

### Definition 2.2 (Core-Periphery Structure)
Global Banking Network.
Core: ~20 G-SIBs (Global Systemically Important Banks). Densely connected.
Periphery: Thousands of small banks. Connect only to Core.
Failure in Periphery is local.
Failure in Core can cascade to everything.

## III. Theoretical Framework

### 3.1 Contagion Metrics
DebtRank (Battiston).
Recursive impact.
If $A$ defaults, $B$ loses equity. If $B$'s equity $< 0$, $B$ defaults, hitting $C$.
Feedback loops.
Simulating "Financial Pandemics."

### 3.2 The Small World Phenomenon
Six Degrees of Separation.
Financial world is "Ultra-Small World."
2-3 hops from a Japanese Pension Fund to a US Subprime Mortgage (via Cayman SPV).
Speed of contagion is instant.
"Too Interconnected to Fail."

## IV. Strategic Applications

### 4.1 Supply Chain Networks
Nodes = Companies.
Edges = Supplier relationships.
Idiosyncratic Shock (Factory fire in Taiwan).
Propagates down the chain (Apple stock drops).
Network mapping allows "Supply Chain Alpha."

### 4.2 Correlation Networks
Build a graph where Edge = Correlation > 0.8.
Minimum Spanning Tree (MST).
Visualize the "Skeleton" of the market.
In crisis, the tree shrinks (Average path length drops).
In calm, the tree expands (Sectors decouple).
Portfolio diversification = Being far apart on the MST.

## V. Exercises

**Exercise 1 (Lehman Brothers):**
Lehman was a Hub in the Repo Network and Derivatives Network.
Topology was not fully understood (OTC opacity).
When Hub failed, network fragmented.
Liquidity evaporated.

**Exercise 2 (Bitcoin Lightning Network):**
Payment channels.
Graph topology.
Hub and Spoke emergence naturally?
Centralization risk in a decentralized protocol.

## VI. References
-   Battiston, S. *The Power of Control: Network Theory*.
-   Haldane, A. *Rethinking the Financial Network*.
