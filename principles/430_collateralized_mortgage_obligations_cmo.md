# Collateralized Mortgage Obligations CMO: Structure

## I. Executive Summary

**CMOs** slice the cash flows of an MBS pool into **Tranches** to redistribute Prepayment Risk. In a **Sequential Pay** structure, Tranche A gets all principal until retired, then Tranche B, etc. This creates Short Duration (A) and Long Duration (Z) bonds from the same pool. **PACs (Planned Amortization Classes)** offer stable cashflows (protected by Support Tranches) for risk-averse investors.

## II. Formal Definitions

### Definition 2.1 (Sequential Pay)
Pool \$100M.
A: \$50M. B: \$30M. Z: \$20M (Accrual).
All prepayments go to A first.
A becomes a 2-year bond. B becomes a 5-year. Z becomes a 20-year.
Transforms "One size fits all" into "Term Structure."

### Definition 2.2 (PAC Bands)
PAC is guaranteed a schedule if PSA stays between (e.g.) 100 and 250 PSA.
**Support Tranche (Companion):** Absorbs the variance.
-   If Prepay > 250 (Fast): Support pays down fast to protect PAC.
-   If Prepay < 100 (Slow): Support waits, to let PAC get paid.
Support Tranche has "Toxic Convexity" (Extension + Contraction risk). PAC has high convexity (Stable).

## III. Theoretical Framework

### 3.1 Z-Tranche (Accrual)
Receives no interest.
Interest is added to Principal (Accretes).
Cashflow starts only after prior tranches retired.
Extreme Duration and Convexity.
"Leveraged play on long rates."

### 3.2 Floating Rate Tranches
Created by combining Fixed Rate MBS with Swaps inside the SPV.
Attracts foreign banks (who fund in Libor).

## IV. Strategic Applications

### 4.1 Structuring Arbitrage
Sum of Parts > Whole.
Insurance companies want Long Duration (Z).
Money Markets want Short Duration (A).
Banks want Stable Duration (PAC).
Hedge Funds take the waste (Support/Residual).
Structuring unlocks value by meeting specific demand.

### 4.2 The Crunch
When Supports are burned out (retired).
PAC becomes a Sequential.
"Broken PAC."
Price drops as it loses protection.

## V. Exercises

**Exercise 1 (Average Life):**
Calculate WAL for Tranche A vs Tranche C.
Sensitivity to PSA speed.
Tranche A WAL shifts from 2.0 to 1.5 yrs.
Tranche C WAL shifts from 10 to 5 yrs.
Junior tranches carry the volatility.

**Exercise 2 (Inverse Floaters):**
Coupon = $20\% - 2 \times SOFR$.
Leveraged bet that rates stay low.
Often carved out of the Interest stream.
Highly toxic liquidity.

## VI. References
-   Fabozzi, F. *The Analysis of CMOs*.
-   Nomura. *CMO Structuring Guide*.
