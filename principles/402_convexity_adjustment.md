# Convexity Adjustment: Curvature

## I. Executive Summary

**Convexity** is the second derivative of the bond price with respect to yield. It measures the curvature of the price-yield relationship. Duration (linear) underestimates price increases when rates fall and overestimates price drops when rates rise. Therefore, **Convexity is valuable** to the bondholder (Positive Gamma).

## II. Formal Definitions

### Definition 2.1 (Taylor Expansion)
$$ \frac{\Delta P}{P} \approx -D_{mod} \Delta y + \frac{1}{2} C (\Delta y)^2 $$
-   $C$: Convexity Measure ($ \frac{1}{P} \frac{d^2P}{dy^2} $).
-   The component $\frac{1}{2} C (\Delta y)^2$ is always positive for standard bonds.

### Definition 2.2 (Value of C)
Long term Zero Coupon bonds have highest Convexity.
$C \approx D^2$.
30Y Zero $\implies$ Huge Convexity.
10Y Coupon $\implies$ Moderate Convexity.

## III. Theoretical Framework

### 3.1 Why is it Positive?
Price-Yield curve is convex to origin.
If rates drop 1%: Price rises X.
If rates rise 1%: Price falls Y.
X > Y.
Asymmetric payoff profile.
"Heads I win big, Tails I lose small."

### 3.2 Negative Convexity
Callable Bonds and MBS.
If rates drop, Issuer Calls the bond. Price capped at Call Price.
Curve becomes concave.
Convexity < 0.
holder *loses* on large moves.
Requires Yield Premium to compensate (MBS yields > Treasury yields).

## IV. Strategic Applications

### 4.1 Barbell Strategy
Buy 2Y and 30Y.
Higher Convexity than buying 10Y (Bullet).
In volatile rate environment, Barbell outperforms Bullet.
Because $\frac{1}{2} C (\Delta y)^2$ gains accumulate from volatility.

### 4.2 Convexity Hedging
Market Makers hedging Swaps.
Use Gamma-neutral hedging.
Must buy options or trade dynamically to manage the convexity gap.

## V. Exercises

**Exercise 1 (The Calculation):**
Duration says -5% for +1% rate.
Convexity adds +0.5%.
Real change -4.5%.
Duration says +5% for -1% rate.
Convexity adds +0.5%.
Real change +5.5%.
Better in both directions.

**Exercise 2 (Cost of Convexity):**
High convexity bonds trade at lower yields.
Trader "Pays for Convexity."
If volatility is low, Convexity is wasted.
Better to sell convexity (Buy MBS) in quiet markets.

## VI. References
-   Burghardt, G. *The Treasury Bond Basis*.
-   Fabozzi, F. *Convexity and Duration*.
