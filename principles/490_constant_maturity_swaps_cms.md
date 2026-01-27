# Constant Maturity Swaps CMS: Curve Products

## I. Executive Summary

A **Constant Maturity Swap (CMS)** is a swap where one leg pays a fixed or floating rate, and the other leg pays a rate linked to a specific point on the Swap Curve (e.g., the **10-Year Swap Rate**) rather than a short-term rate like SOFR. CMS products allow investors to take views on the **Slope** and **Convexity** of the yield curve.

## II. Formal Definitions

### Definition 2.1 (The Fixing)
Floating Leg: Resets every 6 months.
Rate: The 10Y Swap Rate observed on that day.
Not the 6M rate.
The "Constant Maturity" means the index duration is always 10 Years.

### Definition 2.2 (CMS Convexity Adjustment)
Forward 10Y Swap Rate < Expected Future 10Y Swap Rate.
Why?
Payoff is linear in Rate, but Value of 10Y bond is non-linear (Duration/Convexity).
Bond math implies that to replicate a CMS payment, you need to hedge with convexity.
convexity Adjustment adds basis points to the CMS rate.
$CMS_{Rate} = Forward_{Swap} + Convexity$.

## III. Theoretical Framework

### 3.1 Steepener Notes
Popular structured product.
Coupon = $Leverage \times (CMS_{30y} - CMS_{2y})$.
Bet: Curve Steepens.
Investor sells volatility (Caps on the coupon).
Investor is Short Convexity.

### 3.2 Hedging CMS
Dealer sells CMS Swap.
Dealer buys long-term Swaps to hedge delta.
Dealer buys Swaptions to hedge Gamma (convexity).
CMS desk is a major consumer of Swaption inventory.

## IV. Strategic Applications

### 4.1 Flattening Hedge
Corporation has long-term fixed debt.
Fears curve inversion.
Enters CMS Swap: Pay 3M SOFR, Rec 10Y CMS.
If Curve inverts (Short > Long), trade loses.
Wait, Pay Short, Rec Long.
If Curve Flattens (Short rises, Long falls), Trade loses.
This is a Steepener trade.
To hedge flattening, Pay 10Y CMS, Rec 3M SOFR.

### 4.2 Ratchets
Coupon pays previous coupon + spread, capped by CMS.
Path dependent.

## V. Exercises

**Exercise 1 (CMS Cap):**
Cap on the 10Y Rate.
Cheaper than holding a 10Y Put Option on bonds?
Equivalent to a Payer Swaption strip.

**Exercise 2 (Spread Option):**
Option on $(CMS_{10} - CMS_{2})$.
Value depends on correlation between 2Y and 10Y points.
If correlation drops, Option value rises.

## VI. References
-   Hagan, P. *Convexity Conundrums: Pricing CMS Swaps*.
-   Mercurio, F. *LIBOR Market Models for CMS*.
