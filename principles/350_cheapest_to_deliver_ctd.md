# Cheapest to Deliver CTD: Bond Futures

## I. Executive Summary

Treasury Bond Futures are not settled against a single bond, but against a **Basket of Deliverable Bonds**. The Short (Seller) has the **Option** to choose *which* bond to deliver. Naturally, they choose the **Cheapest to Deliver (CTD)**. This option creates complexity: The Futures Price tracks the CTD bond, but the CTD bond can *change* as yields move.

## II. Formal Definitions

### Definition 2.1 (Conversion Factor - CF)
To make bonds comparable (e.g., 6% coupon vs 2% coupon), Exchange publishes CFs.
$Invoice Price = (Futures Price \times CF) + Accrued Interest$.
Goal: Make all bonds "equal."
Reality: High coupon/Low duration bonds behave differently.

### Definition 2.2 (CTD Calculation)
For each bond in basket, calculate:
$Cost = Clean Price - (Futures Price \times CF)$.
The bond with the lowest Cost is CTD.
Usually the bond with the highest Duration (in high rate environment) or lowest Duration (in low rate environment)?
Rule of Thumb: High Coupon/Low Yield $\implies$ Short Duration favored?
Actually: High Yields $\implies$ Long Duration is CTD.

## III. Theoretical Framework

### 3.1 The Switch Option
As yields change, the CTD might switch from Bond A to Bond B.
The Short holds this "Switch Option."
Value of Option reduces Futures Price.
$F_{fair} < F_{theoretical\_no\_option}$.
Long Futures = Long Bond + Short Put option on the Switch.

### 3.2 The Wildcard Option
Futures close at 2:00 PM. Bonds trade until 5:00 PM.
Short can announce delivery until 8:00 PM.
If Bond prices crash between 2:00 and 5:00, Short can buy cheap bonds and deliver them at the 2:00 PM fixed Futures price.
Valuable option.

## IV. Strategic Applications

### 4.1 Basis Risk in Hedging
You hedge a 10Y Corporate Bond with 10Y Treasury Futures.
Futures track the *CTD* (e.g., a 7-year old 10Y bond).
If your Corporate bond correlates with "On-the-Run" 10Y, but Future tracks "Off-the-Run" 7Y.
Hedge slippage.

### 4.2 Net Basis Trade
Buying the CTD Bond and Shorting the Future.
You are Long the Basis.
You are effectively Short the Delivery Options (Switch/Wildcard).
If volatility is low (Options expire worthless), you earn the carry.

## V. Exercises

**Exercise 1 (Short Squeeze):**
Specific CTD bond is in short supply (Repo Special).
Shorts cannot borrow it to deliver.
Futures price squeezes *up* to the price of the "Second Cheapest" bond.
Basis explodes.

**Exercise 2 (Duration Mismatch):**
Futures Duration changes discontinuously when CTD switches.
Hedgers must dynamically adjust "Hedge Ratio" to account for CTD Probability.

## VI. References
-   Burghardt, G. *The Treasury Bond Basis*.
-   CME Group. *Treasury Futures Delivery Process*.
