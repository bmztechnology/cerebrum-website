# Bond Immunization Duration Matching: Zero Risk

## I. Executive Summary

**Immunization** is a passive bond strategy designed to shield a portfolio from interest rate risk over a specific horizon. By matching the **Macaulay Duration** of the assets to the investment horizon (or the duration of a liability), the investor ensures that **Price Risk** and **Reinvestment Risk** exactly cancel each other out. If rates rise, price falls but reinvestment income rises.

## II. Formal Definitions

### Definition 2.1 (The Offset)
-   **Price Risk:** Interest Rates Up $\implies$ Bond Price Down. (Bad)
-   **Reinvestment Risk:** Interest Rates Up $\implies$ Coupons reinvested at higher rate. (Good)
At time $t = Duration$, the Loss in Price equals the Gain in Future Value of Coupons.
Portfolio Value is "Immunized."

### Definition 2.2 (Single Period vs Multi-Period)
-   **Single Period:** Lock in a guaranteed return for 5 years. Buy a 5-year Zero Coupon Bond (Duration = 5). Or a 7-year Coupon Bond (Duration = 5).
-   **Multi-Period:** Matching a stream of liabilities. Requires rebalancing not just Duration, but Convexity.

## III. Theoretical Framework

### 3.1 Assumptions
1.  **Parallel Shifts:** Standard Immunization assumes the yield curve shifts in parallel.
2.  **Flat Curve:** Easier to model.
If the curve twists (slope changes), immunization fails.
"Immunization Risk."

### 3.2 Convexity Mismatch
Liability typically has low convexity.
Asset portfolio needs matching convexity.
If Assets have *less* convexity than Liabilities, large rate moves (up or down) will cause Assets < Liabilities.
(Assets fall more when rates rise, rise less when rates fall).

## IV. Strategic Applications

### 4.1 Pension Funds
Simple Immunization: Match Duration of Assets to Duration of Pension Benefit Obligation (e.g., 15 years).
Problem: 30Y Treasury Bond duration is only ~20 years.
Hard to find assets with long enough duration to immunize ultra-long liabilities.
Need Derivatives (Swaps).

### 4.2 Insurance Companies
GIC (Guaranteed Investment Contract). Period 5 years.
Bank buys 5Y Duration portfolio.
Locks in the spread.

## V. Exercises

**Exercise 1 (Drift):**
Time passes. Liability duration shrinks by 1 year.
Asset duration shrinks by $< 1$ year (if coupon bond).
Mismatch emerges.
Must rebalance.

**Exercise 2 (Zero Coupon):**
A Zero Coupon bond held to maturity is the perfect immunization instrument for a single liability.
No Reinvestment Risk (no coupons).
No Price Risk (hold to maturity).

## VI. References
-   Redington, F.M. *Review of the Principles of Life-Office Valuations*.
-   Fabozzi, F. *Bond Markets, Analysis, and Strategies*.
