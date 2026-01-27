# Duration Hedging Fixed Income: Immunization

## I. Executive Summary

**Duration Hedging** is the primary technique for managing Interest Rate Risk. By matching the **Duration** (sensitivity to rates) of Assets and Liabilities, a portfolio can be **Immunized** against small parallel shifts in the Yield Curve. For larger moves, **Convexity** matching is required. This is critical for Pension Funds (LDI) and Banks.

## II. Formal Definitions

### Definition 2.1 (Macaulay Duration)
Weighted average time to receive cashflows.
$D = \frac{\sum t_i PV(CF_i)}{Price}$.
Zero Coupon Bond $D = T$.
Coupon Bond $D < T$.

### Definition 2.2 (Modified Duration)
$\Delta P \approx - D_{mod} \times \Delta y \times P$.
Linear approximation.
Hedge Ratio: $N_{hedge} = -\frac{D_{portfolio} \times V_{portfolio}}{D_{instrument} \times V_{instrument}}$.

## III. Theoretical Framework

### 3.1 Convexity Adjustment
Duration is the first derivative (Slope).
Convexity is the second derivative (Curvature).
$\Delta P \approx -D \Delta y + \frac{1}{2} C (\Delta y)^2$.
Long Convexity is beneficial (Price falls less when rates rise, rises more when rates fall).
T-Bonds have positive convexity.
MBS have negative convexity (Prepayment risk).

### 3.2 Yield Curve Twist Risk
Immunization assumes Parallel Shift ($y$ changes by same amount everywhere).
If Curve Twists (Short rates up, Long rates down).
Duration Neutral portfolio can lose money.
"Key Rate Duration" (KRD) hedging matches sensitivities at 2Y, 5Y, 10Y, 30Y points.

## IV. Strategic Applications

### 4.1 DV01 Hedging
"Dollar Value of a 1 basis point move."
Trading desk standard.
Net DV01 = 0.
Trader buys \$100M 10Y ($DV01 = \$8k$).
Sells \$200M 5Y ($DV01 = \$8k$).
Curve trade (Steepener).
Flat Directional risk.

### 4.2 Mortgage Servicing (Negative Convexity)
MBS duration extends as rates rise.
Hedge needs to *sell more* as rates rise.
"Dynamic Hedging" of MBS portfolios amplifies market moves.
"Convexity Vortex."

## V. Exercises

**Exercise 1 (The Barbell vs Bullet):**
Bullet: Hold 10Y bonds. ($D=8$).
Barbell: Hold 2Y and 30Y. ($Avg D=8$).
Same Duration.
Different Convexity. Barbell has higher convexity.
Different Curve risk.

**Exercise 2 (Inflation):**
Duration measures Nominal Rate sensitivity.
Real Rate sensitivity?
Inflation-linked bonds have "Real Duration."

## VI. References
-   Fabozzi, F. *Fixed Income Mathematics*.
-   Redington, F.M. *Review of the Principles of Life-Office Valuations*.
