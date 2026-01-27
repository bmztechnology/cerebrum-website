# Yield to Maturity YTM: The IRR

## I. Executive Summary

**Yield to Maturity (YTM)** is the single discount rate that equates the present value of a bond's cash flows to its market price. It is the **Internal Rate of Return (IRR)** of the bond. While widely quoted, YTM relies on strong assumptions: that the bond is held to maturity and that all coupons are **Reinvested** at the YTM rate.

## II. Formal Definitions

### Definition 2.1 (Equation)
Solve for $y$:
$$ Price = \sum_{t=1}^{T} \frac{C}{(1+y)^t} + \frac{100}{(1+y)^T} $$
No analytical solution (unless $T=1$).
Must be solved numerically (Newton-Raphson method).

### Definition 2.2 (Reinvestment Assumption)
Compound interest formula assumes coupons earn interest.
If rates drop, you reinvest coupons at a lower rate.
Actual realized return < YTM.
"Reinvestment Risk."

## III. Theoretical Framework

### 3.1 Yield vs Coupon
-   $Price = 100 \iff YTM = Coupon$.
-   $Price < 100 \iff YTM > Coupon$ (Discount).
-   $Price > 100 \iff YTM < Coupon$ (Premium).
YTM normalizes bonds of different coupons/prices to a common metric.

### 3.2 Yield vs Return
YTM is an *ex-ante* promise.
Realized Return is *ex-post* reality.
If you sell early, outcome depends on Price at sale.
If rates rise, Price falls $\implies$ Realized Return can be negative even if YTM specific positive.

## IV. Strategic Applications

### 4.1 Comparing YTMs
2Y Note at 4%.
10Y Note at 4%.
Same YTM. Different Risk.
10Y has much higher Duration Risk.
YTM does not adjust for risk.

### 4.2 Current Yield
$CY = \frac{Annual Coupon}{Price}$.
Simple yield. Ignores amortization of premium/discount.
Misleading for Zero Coupon bonds ($CY=0$).

## V. Exercises

**Exercise 1 (The Zero):**
Zero Coupon Bond Price 80. Maturity 5 years.
$80 = 100 / (1+y)^5$.
$(1+y)^5 = 1.25$.
$1+y = 1.0456$.
$y = 4.56\%$.
No reinvestment risk (No coupons). YTM is accurate.

**Exercise 2 (Callable YTM):**
If bond is Callable.
Calculate **Yield to Call (YTC)**.
Quote "Yield to Worst" (YTW) = $\min(YTM, YTC)$.
Prudent convention.

## VI. References
-   Standard & Poor's. *Guide to Bond Yield Calculations*.
-   Fabozzi, F. *Bond Markets, Analysis, and Strategies*.
