# Butterfly Trades Fixed Income: Curvature

## I. Executive Summary

**Butterfly Trades** allow traders to bet on the **Curvature** of the yield curve, rather than its level or slope. A Long Butterfly involves buying the "Wings" (Short/Long maturities) and selling the "Body" (Intermediate maturity, typically duration weighted to be neutral). It profits if the curve becomes **more convex** (Belly yields rise relative to wings).

## II. Formal Definitions

### Definition 2.1 (The Construct)
Values: 2Y ($y_s$), 5Y ($y_m$), 10Y ($y_l$).
Long Fly: Long 2Y, Short 5Y, Long 10Y.
Weights determined by DV01 neutrality.
e.g., $+100m$ 2Y, $-50m$ 5Y, $+30m$ 10Y.

### Definition 2.2 (Payoff)
Profit $\approx -Change(2y5y10y \text{ Fly Spread})$.
$Fly = 2 \times y_5 - (y_2 + y_{10})$.
If 5Y yield rises relative to 2Y and 10Y $\implies$ Fly Spread increases.
Short Body makes money.
"Selling the Hump."

## III. Theoretical Framework

### 3.1 PCA Factors
Factor 1: Level (Parallel Shift).
Factor 2: Slope (Steep/Flat).
Factor 3: Curvature (Butterfly).
Butterfly is a pure bet on Factor 3.

### 3.2 Mean Reversion
Curvature is highly mean reverting.
The 5Y point can't deviate too far from the line connecting 2Y and 10Y.
Arbitrage forces pull it back.
Statistical Arbitrage strategy.

## IV. Strategic Applications

### 4.1 Fed Hike Cycle
Early cycle: 2Y shoots up. 5Y shoots up. 10Y waits.
Curve Hump worsens (Fly richens).
Late cycle: 2Y/5Y Invert. 10Y Receives.
Fly collapses.

### 4.2 Supply Events
Sovereign issues a new 5Y bond.
Dealer needs to hedge. Sells 5Y.
5Y cheapens.
Butterfly (Long Wings / Short 5Y) profits?
Wait, Short 5Y profits if yield rises.
Yes, "Short the Body" benefits from supply indigestion at the belly.

## V. Exercises

**Exercise 1 (Box Trade):**
Combining two butterflies.
Arbitrage across 2-5-10 and 5-10-30.
Complex relative value.

**Exercise 2 (Vol Convexity):**
Long Fly = Long Gamma?
Yes. owning wings gives convexity.
Short belly (linear).
Net Long Convexity.
Positive carry? Usually negative carry.

## VI. References
-   Fabozzi, F. *Fixed Income Mathematics*.
-   Tuckman, B. *Fixed Income Securities*.
