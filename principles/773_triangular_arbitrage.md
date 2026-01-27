# Triangular Arbitrage Speed vs Logic

## I. Executive Summary

**Triangular Arbitrage** is the enforcement of consistency between cross-rates. In a perfectly efficient market, the direct exchange rate ($A/C$) must equal the synthetic rate via a bridge currency ($A/B \times B/C$). **HFTs** continuously monitor these loops. While "Risk-Free" in theory, in practice, **Execution Risk** (Legging risk) dominates, as one leg might fail or slip while the other fills.

## II. Formal Definitions

### Definition 2.1 (The Triangle Inequality)
Pairs: EUR/USD ($P_1$), USD/JPY ($P_2$), EUR/JPY ($P_3$).
No Arb Condition: $P_3 = P_1 \times P_2$.
Spread: $S = P_3 - (P_1 \times P_2)$.
If $|S| > \text{Transaction Costs}$, Trade.
Buy EUR/JPY, Sell EUR/USD, Sell USD/JPY. (Circulation).

### Definition 2.2 (Latency Geometry)
Exchange A (NY) has EUR/USD.
Exchange B (Tokyo) has USD/JPY.
Exchange C (London) has EUR/JPY.
Arb requires speed of light transmission.
Microwave networks link NY-LDN-TYO to capture these fractions.

## III. Theoretical Framework

### 3.1 Currency Strength Indices
Triangular consistency implies that a "Global Dollar Strength" factor drives all pairs.
If USD moves, EUR/USD and USD/JPY move.
EUR/JPY might stay flat.
The cross-rate is the residual of the majors.

### 3.2 Legging Risk
You hit the Bid on Leg 1.
Price moves on Leg 2.
You hit Leg 2 at worse price.
Arb profit becomes loss.
"Atomic Execution" (Smart Contracts) fixes this, but in traditional FX, it's probabilistic.

## IV. Strategic Applications

### 4.1 Statistical Triangle Arb
Instead of hard arbitrage (taking liquidity), provide liquidity.
Post Limit Orders on all 3 pairs.
If filled on Leg 1, aggress on Leg 2 and 3?
Or skew quotes on Leg 2 and 3 to get filled passively.
Market Making the triangle.

### 4.2 Crypto Triangles
USDT / BTC / ETH.
USDT-BTC-ETH-USDT loop.
Inefficiencies are larger in crypto (fragmented exchanges).
Bots spam these trades continuously.

## V. Exercises

**Exercise 1 (The Matrix):**
Construct the Adjacency Matrix of currencies.
Edges are Exchange Rates.
Find the path with product > 1.0 (after fees).
Bellman-Ford algorithm (Negative cycle detection using log rates).

**Exercise 2 (Synthetic Liquidity):**
If EUR/NOK is illiquid.
But EUR/USD and USD/NOK are liquid.
Synthesize the EUR/NOK book using the legs.
Most "Exotic" pairs are purely synthetic.

## VI. References
-   Fenn, D. *Temporal synchronization of the FX market*.
-   Aiba, Y. *Triangular arbitrage as an interaction among foreign exchange rates*.
