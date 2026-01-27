# Drawdown Control Algorithms: CPPI

## I. Executive Summary

**Drawdown Control** strategies aim to strictly limit the maximum peak-to-trough decline of a portfolio. Algorithms like **CPPI (Constant Proportion Portfolio Insurance)** and **TIPP (Time Invariant Portfolio Protection)** dynamically shift assets between a Risky Asset (Equities) and a Safe Asset (Cash/Bonds) based on the "Cushion" (Portfolio Value - Floor). They provide a synthetic Put Option profile.

## II. Formal Definitions

### Definition 2.1 (CPPI Mechanics)
$$ Exposure = Multiplier \times (Assets - Floor) $$
-   **Floor:** Minimum value (e.g., \$80 on \$100 portfolio).
-   **Cushion:** $A - F = \$20$.
-   **Multiplier (m):** Leverage factor (e.g., 4).
Exposure = $4 \times 20 = 80$.
Allocation: \$80 Equity / \$20 Cash.
If Equity drops 10% ($\$8$ loss). Assets = \$92. Cushion = \$12.
New Exposure = $4 \times 12 = 48$.
Sell \$32 of Equity.
"Sell low." Option replication.

### Definition 2.2 (Gap Risk)
If Market gaps down 25% overnight (overwhelms the cushion $1/m$).
Cushion goes negative.
Floor is breached.
CPPI fails.
Solution: Gap Options or lower Multiplier.

## III. Theoretical Framework

### 3.1 TIPP (Time Invariant)
Floor Ratchets up.
Floor = max(Initial Floor, 90% of High Water Mark).
Locks in gains.
"Trailing Stop" at portfolio level.
Protect profits.

### 3.2 Option Theory
CPPI replicates a Long Call Option (Convex payoff).
You pay for it by "Selling Low and Buying High" (Volatility Drag).
In a oscillating flat market, CPPI gets "Whipsawed" and loses value.
Cash Lock: If Cushion hits 0, portfolio goes 100% Cash. Game over.

## IV. Strategic Applications

### 4.1 Principal Protected Notes (PPN)
Bank guarantees Principal (\$100).
Uses Zero Coupon Bond (\$80) + Call Option (\$20).
OR Uses CPPI algorithm to dynamically trade.
CPPI is cheaper (no option premium), but carries Gap Risk.

### 4.2 Variable Annuities
Rider guarantees.
Insurer uses dynamic hedging (CPPI-like) to manage the guarantee.
2008 failure: Volatility exploded, gap risk realized.

## V. Exercises

**Exercise 1 (Multiplier calibration):**
Max Drop = 20%.
To be safe, Multiplier = $1 / 0.20 = 5$.
If you use m=6, a 20% drop breaches floor.

**Exercise 2 (De-risking path):**
As Value approaches Floor.
Exposure goes to 0 linearly.
Soft landing.
Vs Stop Loss (Binary 0 or 1).

## VI. References
-   Black, F. & Jones, R. *Simplifying Portfolio Insurance*.
-   Bertrand, P. *Portfolio Insurance Strategies*.
