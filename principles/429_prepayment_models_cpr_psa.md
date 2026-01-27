# Prepayment Models CPR PSA: The S Curve

## I. Executive Summary

Valuing MBS requires predicting the **Prepayment Speed**. The industry standard metric is **CPR** (Conditional Prepayment Rate), an annualized percentage of the pool paid off early. The **PSA** (Public Securities Association) benchmarks this speed against a standard curve. The relationship between Refinancing Incentive (Rate Spread) and CPR is an **S-Curve**: slow response for small incentives, rapid acceleration, then plateauing due to capacity/burnout.

## II. Formal Definitions

### Definition 2.1 (SMM to CPR)
Single Monthly Mortality (SMM).
$$ SMM = \frac{Prepayments}{Balance_{start} - ScheduledPrincipal} $$
$$ CPR = 1 - (1 - SMM)^{12} $$
100 PSA = 0.2% CPR month 1, rising linearly to 6% CPR month 30, then flat.
200 PSA = 2x that speed.

### Definition 2.2 (Refi Incentive)
$$ Incentive = WAC - (CurrentRate + Costs) $$
-   WAC: Weighted Average Coupon of pool.
-   Gap > 50bps usually triggers refi wave.
-   "Media Effect": Headlines about low rates drive behavior.

## III. Theoretical Framework

### 3.1 Turnover vs Refi
Base CPR (Turnover) $\approx 6-8\%$. (People moving houses, divorce, death).
Occurs regardless of rates.
Refi CPR depends on rates.
Total CPR = Turnover + Refi.

### 3.2 Seasoning
New loans don't prepay (Paperwork fatigue).
"Ramp" period (0-30 months).
Seasoned loans prepay efficiently.

## IV. Strategic Applications

### 4.1 Servicing Rights (MSR)
Mortgage Servicer receives 0.25% fee.
Long MSR asset = Short Prepayment.
If Rates Rise $\implies$ Prepay Slows $\implies$ MSR Value Rises.
MSR is a natural hedge for Originators (Who lose volume when rates rise).

### 4.2 PO and IO Strips
-   **PO (Principal Only):** Long Duration. Wants Fast Prepay (Get \$100 back early). Bearish on rates? No, Bullish (Rates Down $\to$ Fast Prepay).
-   **IO (Interest Only):** Negative Duration. Wants Slow Prepay. If Prepay is instant, IO gets zero cash. Value crashes. Rates Up $\to$ Slow Prepay $\to$ IO Rallies.
IO strips are one of the few assets with negative duration.

## V. Exercises

**Exercise 1 (Premium Burn):**
Buy MBS at 105.
CPR = 40% (Super fast).
You lose the 5 points of premium rapidly.
Yield crashes.

**Exercise 2 (Cusp Coupons):**
Bond with Coupon = Current Rate.
Slight drop in rates pushes it onto the "Steep" part of S-Curve.
Max Negative Convexity.
Most dangerous bond to hold.

## VI. References
-   Hayre, L. *Salomon Smith Barney Guide to Mortgage-Backed Securities*.
-   Davidson, A. *Mortgage Valuation Models*.
