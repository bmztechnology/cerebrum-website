# Treasury Inflation Protected Securities TIPS: Real Rates

## I. Executive Summary

**TIPS** protect investors from inflation by adjusting the **Principal** value of the bond based on the **Consumer Price Index (CPI-U)**. The Coupon Rate is fixed, but applied to the rising Principal. The Yield on TIPS is the **Real Yield** (Growth purchasing power). They are the risk-free benchmark for real returns.

## II. Formal Definitions

### Definition 2.1 (The Index Ratio)
$$ IR_t = \frac{CPI_t}{CPI_{base}} $$
$$ Principal_t = Face \times IR_t $$
Coupon Payment = $FixedCoupon \times Principal_t$.
Adjusted daily (interpolation of monthly CPI releases - lagged 3 months).

### Definition 2.2 (Fisher Equation)
$$ (1 + i) = (1 + r)(1 + \pi) $$
Approx: $i \approx r + \pi$.
-   $i$: Nominal Yield (Standard Treasury).
-   $r$: Real Yield (TIPS).
-   $\pi$: Expected Inflation.

## III. Theoretical Framework

### 3.1 Cash Flow Structure
Standard Bond: Fixed Cash Flows. Real Value erodes with inflation.
TIPS: Growing Cash Flows (if $\pi > 0$). Real Value constant.
TIPS are "Real Annuities."

### 3.2 Supply/Demand
Fed owns massive % of TIPS market.
Pension Funds need TIPS to hedge COLA (Cost of Living Adjustment) liabilities.
Supply is limited (10% of total debt).
Scarcity premium leads to lower real yields?

## IV. Strategic Applications

### 4.1 Negative Real Yields
2012-2022: TIPS Yields were negative (e.g., -1.0%).
Meaning: You guarantee a loss of purchasing power, but a *smaller* loss than holding Cash (if Cash yields 0% and Inflation is 2%).
"Insurance Premium" against hyperinflation.

### 4.2 Duration
TIPS Duration > Nominal Duration?
Complicated.
Lower Yield $\implies$ Higher Duration (Macaulay).
But Cashflows grow $\implies$ Back-loaded.
Generally, TIPS have high duration risk if *Real Rates* rise (e.g., 2022 "Taper Tantrum 2.0").

## V. Exercises

**Exercise 1 (The Lag):**
CPI indexation is lagged 3 months.
If inflation spikes today, TIPS principal adjusts in 3 months.
Short term trading requires forecasting the "Fixings."

**Exercise 2 (Carry):**
Inflation Carry.
If next month CPI is seasonal high (+0.5%).
TIPS accrue massive principal.
Buy seasonal bottoms, sell seasonal tops.

## VI. References
-   Roll, R. *The Treasury Inflation-Protected Securities Market*.
-   Deacon, M. *Inflation-Indexed Securities*.
