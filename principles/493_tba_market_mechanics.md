# TBA Market Mechanics: The Forward

## I. Executive Summary

The **"To-Be-Announced" (TBA)** market is the forward market for Agency MBS (Fannie/Freddie/Ginnie). It allows trading of mortgage pools without specifying the exact pool number, only the Agency, Coupon, and Settlement Month. This standardization creates massive liquidity ($200B+ daily), making MBS the second most liquid market after Treasuries. Sellers have a **Cheapest-to-Deliver (CTD)** option, delivering the worst-performing pools to the buyer.

## II. Formal Definitions

### Definition 2.1 (TBA Contract Specs)
-   **Product:** FNMA 30 Year.
-   **Coupon:** 5.5%.
-   **Settlement:** Month Class A (e.g., Nov 14th).
-   **Variance:** +/- 0.01% of par amount delivery.
"Generic" trade.
48 Hours before settlement ("48 Hour Day"), Seller tells Buyer exactly which pools (CUSIPs) will be delivered.

### Definition 2.2 (The Drop)
Price difference between Front Month and Back Month.
Represents the "Cost of Carry" (Repo rate for MBS) minus the "Paydown" (Principal returned).
"Dollar Roll": Selling Front Month / Buying Back Month. Financing trade.
If Dollar Roll trades "Special" (Implied financing < Repo), demand for immediate pools is high.

## III. Theoretical Framework

### 3.1 Cheapest to Deliver (CTD)
Seller will deliver pools with:
1.  **Fastest Prepayment:** (Burnout).
2.  **Worst Characteristics:** (High loan balance, geo concentration).
Buyer prices TBA assuming CTD delivery.
"Specified Pools" (Specific CUSIPs with good traits like Low Loan Balance) trade at a "Pay-up" over TBA.

### 3.2 Hedging Pipeline
Originator locks rate for borrower today.
Borrower closes loan in 45 days.
Originator sells TBA today (Short).
When loan closes, Originator delivers loan into TBA (or swaps for MBS and delivers).
TBA locks the price.

## IV. Strategic Applications

### 4.1 Dollar Roll Specialness
Fed buying MBS (QE) creates shortage of settlement pools.
TBA Roll becomes "Special."
Investors execute Rolls to capture the financing advantage.
Outperform holding the bond.

### 4.2 Stipulations (Stips)
Trading TBA with Stips.
"Max 3 pools per million."
"No high LTV."
Reduces the seller's delivery option.
Trades at premium.

## V. Exercises

**Exercise 1 (Pair-Off):**
Most TBAs never settle.
Trader buys \$100M FNMA 5.5.
Sells \$100M FNMA 5.5 before settlement.
Nets the cash difference.
Pure interest rate/spread bet.

**Exercise 2 (Convexity hedging):**
TBA market used to hedge negative convexity.
Dynamic hedging by servicers adds volatility to rates.
"Convexity Vortex."

## VI. References
-   Vickery, J. *TBA Trading and Liquidity in the Agency MBS Market*.
-   SIFMA. *Uniform Practices for the Clearance and Settlement of Mortgage-Backed Securities*.
