# Barbell vs Bullet Strategies: Structure

## I. Executive Summary

**Barbell** and **Bullet** are portfolio construction techniques defined by the distribution of maturities. A **Bullet** concentrates holdings at a single point on the yield curve (e.g., all 10 Year). A **Barbell** splits holdings between Short (2 Year) and Long (30 Year) maturities to achieve the same duration. The choice depends on views regarding the **Yield Curve Shape** (Steepening/Flattening) and **Convexity**.

## II. Formal Definitions

### Definition 2.1 (The Barbell)
Weights: 50% in 2Y, 50% in 30Y.
Effective Duration $\approx$ 10Y.
Convexity: High (Duration squared term dominants in 30Y).
View: Curve will **Flatten**. (Long end yields fall, Short end yields rise).

### Definition 2.2 (The Bullet)
Weights: 100% in 10Y.
Effective Duration $\approx$ 10Y.
Convexity: Medium.
View: Curve will **Steepen**. (Intermediate yields stable, Long/Short move apart).

## III. Theoretical Framework

### 3.1 Convexity Advantage
Barbell > Bullet in Convexity.
If Rates move significantly (Up OR Down), Barbell outperforms Bullet.
Why?
-   Rates Down: 30Y part of Barbell rallies massively.
-   Rates Up: 2Y part of Barbell loses little. 30Y loses a lot, but Convexity cushions it.
Cost: Barbell usually has lower Yield (Yield Give). Buying convexity is not free.

### 3.2 Curve Regimes
-   **Bear Flattener:** Fed hikes. Short rates up. Long rates stable. Barbell wins (Short end rolls over, Long end holds).
-   **Bull Steepener:** Fed cuts. Short rates down. Bullet loses (Intermediate lag)?
Generally:
Flattening $\implies$ Barbell.
Steepening $\implies$ Bullet.

## IV. Strategic Applications

### 4.1 Dealer Inventory
Dealers often hold Bullets (Corporate bonds issued at 5Y, 10Y, 30Y points).
Investors construct Barbells to customize exposure.

### 4.2 Negative Rates
In Europe, Front end was -0.50%. Long end +0.50%.
Barbell forced you to hold negative yielding cash.
Cost of carry high.
Bullet preferred.

## V. Exercises

**Exercise 1 (Calculation):**
Portfolio A: \$10M in 5Y.
Portfolio B: \$5M in 1Y + \$5M in 9Y.
Check Duration match.
Check Convexity ($Duration^2$).

**Exercise 2 (Volatility):**
Barbell is "Long Volatility" (via Convexity).
Bullet is "Short Volatility" (relative to Barbell).
If rate vol is cheap, switch to Barbell.

## VI. References
-   Tuckman, B. *Fixed Income Securities*.
-   Ilmanen, A. *Expected Returns*.
