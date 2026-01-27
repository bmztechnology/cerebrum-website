# Commodity Curve Strategies: Roll Yield

## I. Executive Summary

Investing in commodities via Futures contracts involves more than just spot price direction. A major component of return is the **Roll Yield** derived from the shape of the forward curve. Strategies distinguish between **Backwardation** (Futures < Spot) and **Contango** (Futures > Spot). Structural carry strategies seek to harvest the roll yield by long-term positioning in backwardated markets (positive carry) and shorting contango markets.

## II. Formal Definitions

### Definition 2.1 (Basis)
$Basis = Spot - Future$.
(Sometimes defined opposite).
Convenience Yield vs Storage Cost.
$F_t = S_t e^{(r+u-y)t}$.
Where $u$ = Storage Cost, $y$ = Convenience Yield.

### Definition 2.2 (Roll Yield)
As contract approaches expiry, $F \to S$.
**Backwardation:** Futures price rolls *up* to Spot. Positive Yield for Longs.
**Contango:** Futures price rolls *down* to Spot. Negative Yield (Cost) for Longs.
USO ETF (Oil) often loses money in Contango even if oil price is flat.

## III. Theoretical Framework

### 3.1 Theory of Storage
Kaldor (1939).
High Inventory $\implies$ Contango (Market pays you to store).
Low Inventory (Scarcity) $\implies$ Backwardation (Market pays you to deliver now).
Carry strategy is ostensibly "Providing Insurance" against scarcity or "Providing Storage" for glut.

### 3.2 Hedging Pressure
Producers (Miners/Farmers) sell futures to hedge suitable prices.
Investors (Speculators) buy futures.
Speculators demand a discount (Risk Premium) to take the risk.
Implies Futures should trade below Expected Spot (Normal Backwardation).

## IV. Strategic Applications

### 4.1 Curve Enhancement
Don't roll blindly effectively on the front month.
"Optimum Roll": Choose the contract on the curve with the most favorable roll down.
Dynamic Roll strategies (Bloomberg BCOM Indices often have "Enhanced" versions).

### 4.2 Financialization
Since 2004, massive inflows into Commodity Indices.
pushed markets into structural Contango?
Returns diminished.
"Congested Trade."

## V. Exercises

**Exercise 1 (Negative Oil 2020):**
WTI Futures -$\$37$.
Storage was full (Cushing).
Cost of storage became infinite relative to value.
Contango became super-steep.
lesson: Delivery mechanics matter.

**Exercise 2 (Diversification):**
Commodities protect against Supply Shock Inflation.
Negative correlation to Bonds.
Positive correlation to unanticipated inflation.

## VI. References
-   Gorton, G. & Rouwenhorst, K. *Facts and Fantasies about Commodity Futures*.
-   Erb, C. & Harvey, C. *The Strategic and Tactical Value of Commodity Futures*.
