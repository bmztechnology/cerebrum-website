# Cash Flow Matching Dedication: Exactness

## I. Executive Summary

**Cash Flow Matching (Dedication)** is a stricter immunization strategy where the portfolio's cash inflows (Coupons + Principal) are timed to exactly match the magnitude and timing of Liability outflows. Unlike Duration Matching, it does not rely on yield curve assumptions or rebalancing. It creates a **Defeased** balance sheet, virtually eliminating interest rate risk, but at a higher cost (constraints prevent yield maximization).

## II. Formal Definitions

### Definition 2.1 (The Algorithm)
Linear Programming.
Minimize Cost of Portfolio subject to:
$\forall t: CashIn_t \ge Liability_t$.
Start from last liability (Year T). Buy Zero Coupon bond to match.
Move to T-1. Liability minus Coupon from Bond T. Buy Bond T-1 to match remainder.
Recursive typical backward induction.

### Definition 2.2 (Defeasance)
Legal discharge of debt.
Corporation puts Gov Bonds in trust matched to debt service.
Debt removed from Balance Sheet.
Requires perfect cash flow match (or reasonable assurance).

## III. Theoretical Framework

### 3.1 Cost vs Duration Matching
Duration Match is cheaper. You can pick high yielding points on the curve.
Cash Flow Match forces you to buy specific maturities (even if they are expensive/rich).
"Cost of Dedication."

### 3.2 Horizon Matching
Hybrid.
Cash Flow Match the first 5 years (Short term liquidity).
Duration Match the tail (Years 6-30).
Balances safety with return.

## IV. Strategic Applications

### 4.1 Lottery Winners
Lump sum payout vs Annuity.
Winner takes Lump Sum.
Wants to recreate the Annuity risk-free.
Advisor builds a Treasury Strip Cash Flow Match ladder.
Guaranteed income for 30 years.

### 4.2 Nuclear Decommissioning
Trust Funds to pay for cleanup in 50 years.
Strict regulatory requirement to match cash flows.
Uses TIPS to match inflation-adjusted costs.

## V. Exercises

**Exercise 1 (Constraint):**
Missing securities.
No bond matures in 20.5 years?
Must use closest bond and hold cash?
Reinvestment assumption on cash drag.

**Exercise 2 (Surplus Optimization):**
If $CashIn_t > Liability_t$.
Surplus carried forward.
Reinvestment rate assumption becomes key.
Conservative: Assume 0% reinvestment.

## VI. References
-   Fabozzi, F. *Cash Flow Matching and Dedication*.
-   Kocherlakota, N. *Optimal Cash Flow Matching*.
