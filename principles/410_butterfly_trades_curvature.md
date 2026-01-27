# Butterfly Trades Curvature: The Belly

## I. Executive Summary

The **Butterfly** trade bets on the **Curvature** of the yield curve, specifically the relation between 2Y, 5Y, and 10Y yields. A **Long Butterfly** (Long 2Y, Short 5Y, Long 10Y) profits if the curve becomes more convex (Hump decreases / Belly yields rise relative to wings). It is a mean-reverting trade designed to be Level and Slope neutral.

## II. Formal Definitions

### Definition 2.1 (Weighting)
Must satisfy:
1.  $\sum Weights \times DV01 = 0$ (Duration Neutral).
2.  $\sum Weights = 0$ (Capital Neutral).
3.  Usually 50/50 Body vs Wings: Weight 2Y ($\approx 0.6$) + Weight 10Y ($\approx 0.4$) vs Weight 5Y (1.0).

### Definition 2.2 (Fly Spread)
$Fly = 2 \times Y_{5Y} - (Y_{2Y} + Y_{10Y})$.
If $Fly > 0$: Humped (Concave).
If $Fly < 0$: Dished (Convex).
Long Fly profits if spread *decreases* (Wings outperform Belly). Wait, convention varies.
Let's define trade: Long Wings / Short Belly.
Profits if 5Y yield rises relative to average of 2Y/10Y.

## III. Theoretical Framework

### 3.1 Volatility Impact
Butterfly is often a **Vol Trade**.
Short Belly (5Y) $\approx$ Short Volatility?
No, 5Y has more convexity than linear combo of 2Y/10Y?
Actually, Wings (Barbell) have more convexity than Body (Bullet).
So Long Wings = Long Convexity.
Profits from high volatility.

### 3.2 Supply Dynamics
Treasury issuance patterns affect the Fly.
If Treasury issues massive 5Y notes $\implies$ 5Y Yield Up $\implies$ Fly Cheapens.
Traders front-run auction supply.

## IV. Strategic Applications

### 4.1 PCA Factor 3
Purest expression of the 3rd Principal Component.
Uncorrelated to market direction.
True "Alpha" source.

### 4.2 Cash Neutrality
Usually done with Swaps to avoid Repo complexity.
Pay Fixed 5Y. Rec Fixed 2Y & 10Y.
Zero initial cash.

## V. Exercises

**Exercise 1 (PCA Loading):**
Loadings on Factor 3: 2Y (+), 5Y (-), 10Y (+).
Trade aligns with factor weights.

**Exercise 2 (Negative Fly):**
Can 5Y yield be *lower* than both 2Y and 10Y?
Yes, curve inversion + cut expectations.
"Kinked Curve."

## VI. References
-   Fabozzi, F. *The Handbook of Fixed Income Securities*.
-    Burghardt, G. *The Treasury Bond Basis*.
