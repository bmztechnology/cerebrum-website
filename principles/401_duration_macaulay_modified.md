# Duration Macaulay Modified: Sensitivity

## I. Executive Summary

**Duration** measures the effective maturity of a bond and its sensitivity to interest rate changes. **Macaulay Duration** is the weighted average time to receive cash flows. **Modified Duration** is the percentage change in price for a 1% change in yield. It is the first derivative (Delta) of the bond pricing function.

## II. Formal Definitions

### Definition 2.1 (Macaulay Duration)
$$ D_{mac} = \frac{\sum t \times PV(CF_t)}{Price} $$
Measured in Years.
For Zero Coupon, $D_{mac} = T$.
For Coupon Bond, $D_{mac} < T$.

### Definition 2.2 (Modified Duration)
$$ D_{mod} = \frac{D_{mac}}{1 + y/n} $$
$$ \frac{dP}{P} \approx - D_{mod} \times dy $$
If $D_{mod} = 5$ and Yield rises 1% (+0.01).
Price falls 5%.

## III. Theoretical Framework

### 3.1 Linear Approximation
Duration provides a linear estimate.
Good for small yield changes (10bps).
Bad for large yield changes (200bps).
Error is due to Convexity.

### 3.2 Portfolio Duration
Weighted average of individual bond durations.
$D_{port} = \sum w_i D_i$.
Allows simplified risk management of complex portfolios.
"Target Duration of 7 years."

## IV. Strategic Applications

### 4.1 Immunization
Matching Asset Duration to Liability Duration.
Pension fund has liabilities due in 15 years.
Buy bonds with Duration 15.
If rates change, Asset Value change cancels Liability Value change.
Net Worth invariant to interest rates.

### 4.2 Duration Buckets
Curve Risk.
Portfolio can have Duration 0 but risk is not 0.
Long 30Y ($D=+20$). Short 2Y ($D=-20$). Net $D=0$.
If Curve steepens (30Y up, 2Y down), Portfolio loses on both sides.
Must measure Duration in buckets (Key Rate Durations).

## V. Exercises

**Exercise 1 (Perpetuity):**
Consol Bond (pays C forever).
$D_{mac} = \frac{1+y}{y}$.
As $y \to 0$, Duration $\to \infty$.
Sensitivity to rates is massive at low yields.

**Exercise 2 (Floating Rate Note):**
Coupon resets with effective rate.
Duration lasts only until next reset date.
$D \approx 0.25$ (for quarterly reset).
Price stays near Par.

## VI. References
-   Macaulay, F.R. *Some Theoretical Problems Suggested by the Movements of Interest Rates*.
-   Redington, F.M. *Review of the Principles of Life-Office Valuations*.
