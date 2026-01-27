# IO PO Strips Mortgage: Deconstructed

## I. Executive Summary

**Interest Only (IO)** and **Principal Only (PO)** strips are created by separating the cash flows of a Mortgage-Backed Security. The **IO** receives all interest (Notional declines as pool pays down). The **PO** receives all principal (scheduled + prepayments). They exhibit opposing sensitivities to Interest Rates and Prepayment Speeds, serving as potent tools for hedging and speculation.

## II. Formal Definitions

### Definition 2.1 (PO Mechanics)
Like a Zero Coupon Bond, but timing uncertain.
Total Cash Flow is fixed (The Principal Face Value).
Variable is *Timing*.
-   Fast Prepay (Rates Down): Get cash sooner. Yield rises. Price Rises drastically.
-   Slow Prepay (Rates Up): Get cash later. Yield falls. Price crashes (Discount effect).
PO is "Super Long Duration" + "Long Convexity."

### Definition 2.2 (IO Mechanics)
Cash Flow depends on Principal *Outstanding*.
-   Fast Prepay (Rates Down): Notional disappears. Cash flow stops. Value crashes.
-   Slow Prepay (Rates Up): Notional stays intact. Cash flow continues. Value rises.
IO has **Negative Duration**.
IO is one of the few assets that rises when rates rise.

## III. Theoretical Framework

### 3.1 The "Death" of the IO
If prepayment speed is infinite (instant refi), IO pays 0.
Price $\to$ 0.
"Burnout" saves the IO (some borrowers never refinance).

### 3.2 Hedging Construction
Portfolio: Long Bonds (Positive Duration) + Long IO (Negative Duration).
Net Duration = 0.
Yield = Bond Yield + IO Yield.
Yield Enhancement strategy.
Risk: "Bear Flattening"?
Risk is Prepayment Model failure.

## IV. Strategic Applications

### 4.1 Trust IO vs Excess Servicing IO
Trust IO: Securitized. Liquid.
Excess Servicing IO: Retained by issuer. Illiquid.

### 4.2 Support Tranches
CMO Structuring.
PAC (Planned Amortization Class) protected by Support Tranches.
Support Tranches are often IO/PO structures absorbing the variance.
"Toxic Waste" or "High Octane"?

## V. Exercises

**Exercise 1 (Floor):**
IO usually trades with a high yield (10%+).
Why?
Prepayment risk premium.
Negative convexity risk.

**Exercise 2 (PO as Deflation Hedge):**
In deflation, rates collapse.
House prices might crash (preventing refi), BUT...
If rates go to 0, PO is worth Par.
Bought at 60.
Upside cap is Par.

## VI. References
-   Fabozzi, F. *The Handbook of Mortgage-Backed Securities*.
-   Bear Stearns. *The IO/PO Market*.
