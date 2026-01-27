# Market Making Models Avellaneda Stoikov

## I. Executive Summary

**Market Making Models** (e.g., Avellaneda & Stoikov, 2008) provide the mathematical framework for HFT liquidity provision. They solve the control problem: Given Inventory $q$, Market Volatility $\sigma$, and Order Arrival intensity $\lambda$, where should I place my Bid ($r_b$) and Ask ($r_a$)? The solution demonstrates that MMs should **skew** quotes based on inventory to mean-revert to zero, effectively managing the risk of ruin.

## II. Formal Definitions

### Definition 2.1 (The Reservations Price)
Price where MM is indifferent between buying/selling.
$r = S - q \gamma \sigma^2 (T-t)$.
$S$ = Mid Price.
$q$ = Current Inventory (Signed).
$\gamma$ = Risk Aversion.
If $q > 0$ (Long), $r$ shifts down (Sell cheaper, Buy cheaper).
If $q < 0$ (Short), $r$ shifts up.
The quote is centered around $r$, not $S$.

### Definition 2.2 (Quote Width)
Spread $\delta = r_a - r_b = \frac{2}{\gamma} \ln(1 + \frac{\gamma}{k})$.
Depends on Order Intensity $k$ (Liquidity demand).
Higher Volatility $\implies$ Wider Spread.
Lower Liquidity $\implies$ Wider Spread.

## III. Theoretical Framework

### 3.1 Inventory Risk vs Adverse Selection
Classic models (Ho & Stoll) focused on Inventory Risk.
Glosten & Milgrom focused on Adverse Selection.
Modern HFT models combine "Inventory Skewing" (Stoikov) with "Toxic Flow detection" (VPIN).
If Flow is toxic, widen spread.
If Inventory is high, skew spread.

### 3.2 The Probability of Fill
Limit orders have probability $P(Fill) = e^{-k \delta}$.
Placing order deeper reduces fill prob.
MM optimizes Expected Value = $P(Fill) \times Spread$.
Tradeoff: Wide spread = High margin / Low volume. Tight spread = Low margin / High volume.

## IV. Strategic Applications

### 4.1 Asymmetric Liquidity
When inventory is +1000.
Bid Size: 100 (Don't want more).
Ask Size: 5000 (Please take it).
And Price Skewed down.
This creates " Selling Pressure" validly reflecting the MM's need.

### 4.2 The Gamma Parameter
Tuning Risk Aversion.
High $\gamma$ $\implies$ MM panics quickly with inventory $\implies$ Aggressive skewing $\implies$ dumps positions.
Low $\gamma$ $\implies$ MM tolerates big swings $\implies$ collects more spread.
HFT firms optimize $\gamma$ based on Capital constraints.

## V. Exercises

**Exercise 1 (Simulating Stoikov):**
Python Sim.
Random Walk Price.
Poisson Order Arrival.
Implement the formula.
Observe Inventory mean-reverting path.
Observe PnL growth (Spread capture).

**Exercise 2 (The Stopping Time):**
End of Day liquidation.
As $t \to T$, the "Urgency" term in the formula explodes.
MM dumps everything to go flat.
Microstructure effect at 3:55pm.

## VI. References
-   Avellaneda, M. & Stoikov, S. *High-frequency trading in a limit order book*.
-   Ho, T. & Stoll, H. *Optimal Dealer Pricing Under Transactions and Return Uncertainty*.
