# Key Rate Duration KRD: Hedging Buckets

## I. Executive Summary

**Key Rate Duration (KRD)** (or Partial Duration) measures the sensitivity of a bond or portfolio to shifts in specific points on the yield curve (e.g., 2Y, 5Y, 10Y, 30Y). Unlike Effective Duration (which assumes parallel shifts), KRD allows risk managers to identify and hedge **Non-Parallel Shifts** (Twists/Butterflies) and ensure true immunization across the entire term structure.

## II. Formal Definitions

### Definition 2.1 (The Vector)
Duration is a scalar $D$.
KRD is a vector $\vec{D} = [D_{2Y}, D_{5Y}, D_{10Y}, D_{30Y}]$.
$\sum KRD_i \approx D_{eff}$.
A Zero Coupon Bond maturing in 10Y has $KRD_{10Y} = 10$ and all other KRDs = 0.
A Coupon Bond has KRDs distributed across all coupon dates (mostly at maturity).

### Definition 2.2 (Hedging Algorithm)
To hedge Portfolio $P$ with Instrument Set $I$.
Solve $w_i$ such that:
$$ \sum w_i KRD_i(I) = - KRD(P) $$
System of linear equations.
Requires as many hedge instruments as Key Rates (Linear Algebra).

## III. Theoretical Framework

### 3.1 Shaping Risk
Portfolio: Long 30Y Zero ($D=30$).
Hedge: Short 30Y Treasury ($D=20$). Weight 1.5x.
Net Duration = 0.
KRD Profile: Short 2Y-20Y (Coupons of hedge), Long 30Y (Principal of Asset).
If Curve Steepens (30Y up, Short rates down), Hedge gains, Asset loses.
KRD mismatch reveals the "Curve Risk."

### 3.2 Ho-Lee Model Application
KRD is equivalent to the sensitivity to the initial forward rate curve perturbations in No-Arbitrage models.
Mathematical dual to the bootstrapping process.

## IV. Strategic Applications

### 4.1 LDI (Liability Driven Investment)
Pension Fund Liabilities are modeled as a stream of KRDs.
Assets must match this KRD profile exactly.
Use STRIPS (Zeroes) for precision matching.
Mismatch $\implies$ Funding Ratio Volatility.

### 4.2 Barbell vs Bullet
Bullet (10Y) has KRD concentrated at 10Y.
Barbell (2Y + 30Y) has KRDs at 2Y and 30Y.
If 10Y rate moves independently (Butterfly), their performance diverges.

## V. Exercises

**Exercise 1 (Calculation):**
Shift the 5Y point on the curve by 1 bps (Linear interpolation for neighbors).
Re-price bond.
Difference = KRD(5Y).
Repeat for all points.

**Exercise 2 (Negative KRD):**
Can a bond have negative KRD?
Mortgages (MBS).
If 10Y rates drop, prepayments spike. 30Y principal is returned early.
KRD at 30Y might decrease or turn negative?
Complexity of "shifting weights" in prepaid assets.

## VI. References
-   Ho, T.S.Y. *Key Rate Durations*.
-   Tuckman, B. *Fixed Income Securities*.
