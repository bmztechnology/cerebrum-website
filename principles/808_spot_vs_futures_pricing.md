# Spot vs Futures Pricing Models

## I. Executive Summary

**Commodities** differ from financial assets because they must be **physically stored**. The relationship between the **Spot Price** ($S_t$) and the **Futures Price** ($F_{t,T}$) is defined by the **Cost of Carry** and the **Convenience Yield**. The curve shape (**Contango** vs **Backwardation**) signals the physical supply/demand balance: Contango implies oversupply (cost to store), Backwardation implies shortage (panic buying).

## II. Formal Definitions

### Definition 2.1 (The Cost of Carry Model)
$$ F_{t,T} = S_t e^{(r+u-y)(T-t)} $$
$r$: Risk-free interest rate (Capital cost).
$u$: Storage cost (Warehousing, Insurance).
$y$: Convenience yield (Benefit of physical possession).
If $F > S$: **Contango** (Market pays you to store).
If $F < S$: **Backwardation** (Market pays you to deliver now).

### Definition 2.2 (The Basis)
$$ Basis = S_t - F_{t,T} $$
Convergence: Basis $\to$ 0 as $t \to T$.
Hedgers trade the Basis. Speculators trade the Price.
"Buy the Basis" = Buy Spot, Sell Futures (Cash and Carry).

## III. Theoretical Framework

### 3.1 The Theory of Storage (Kaldor/Working)
Inventory is an Option.
If Shortage $\implies$ $y$ spikes $\implies$ Backwardation.
If Glut $\implies$ $y \to 0$ $\implies$ Contango ($F \approx S + \text{Full Carry}$).
The curve shape is a direct readout of Global Inventory levels.

### 3.2 Hedging Pressure Hypothesis
Producers (Miners) sell futures to hedge. (Short pressure).
Consumers (Airlines) buy futures to hedge. (Long pressure).
Typically Producers > Consumers $\implies$ Net Short Hedging $\implies$ Futures trade at discount (Normal Backwardation).
Speculators earn the risk premium by being Long.

## IV. Strategic Applications

### 4.1 Rolling Yield
Long Commodity ETF (USO).
Rolls futures monthly.
If Market in Contango: Sell Cheap Spot / Buy Expensive Future. Negative Roll Yield (Bleed).
If Market in Backwardation: Sell Expensive / Buy Cheap. Positive Roll Yield.
Strategy: "Curve Carry." Long Backwardated commodities / Short Contango commodities.

### 4.2 The Super-Contango (April 2020)
Oil Price = $-\$37$.
Why? Storage full (Cushing capacity 100%).
$u$ (Storage cost) became infinite?
Or rather, holders *had* to pay someone to take delivery because they had no tank.
Microstructure breakdown.

## V. Exercises

**Exercise 1 (Cash and Carry Arb):**
Gold Futures \$2000. Spot \$1950.
Interest + Storage = \$40.
Profit = \$10.
Buy Spot. Lease Vault. Sell Future. Wait.
Risk-free.
Sets the upper bound of the futures price.

**Exercise 2 (Scarcity Signals):**
Copper curve flips from Contango to Backwardation.
Dr. Copper looks weak on spot, but curve signals "The mine is empty."
Leading indicator of Industrial Production?

## VI. References
-   Working, H. *The Theory of Price of Storage*.
-   Pindyck, R. *The Dynamics of Commodity Spot and Futures Markets*.
