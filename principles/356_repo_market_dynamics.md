# Repo Market Dynamics: The Plumbing

## I. Executive Summary

**Repurchase Agreements (Repo)** are effectively collateralized loans. One party sells an asset (Treasury) and agrees to buy it back later at a higher price. The difference is the **Repo Rate**. It is the lubricant of the entire financial system, allowing banks/hedge funds to fund positions. **Reverse Repo (RRP)** is the opposite (Lending cash, taking collateral).

## II. Formal Definitions

### Definition 2.1 (GC vs Specials)
-   **General Collateral (GC):** "Any Treasury will do." Rate $\approx$ Fed Funds / SOFR. Pured funding trade.
-   **Specials:** "I need THIS specific bond." Rate < GC. Deviation = "Specialness."
-   Why? To cover a Short Position. If you are Short a bond, you must Reverse Repo it (Borrow it). High demand $\implies$ You lend cash at 0% or negative rates just to get the bond.

### Definition 2.2 (Haircut)
Value of Collateral = \$102.
Cash Lent = \$100.
Haircut = 2%.
Protects Lender against collateral price drop.
In crisis, Haircuts increase $\implies$ Margin Call / De-leveraging.

## III. Theoretical Framework

### 3.1 The Shadow Banking Run
2008 Crisis was a "Run on Repo."
Banks stopped accepting MBS as Repo collateral (or demanded 40% haircuts).
Lehman couldn't fund its book. Default.
Repo market is essentially a Deposit market for Institutions.

### 3.2 Fed RRP Facility
Fed sets a floor on rates by offering Reverse Repo (Taking Cash) at Fixed Rate.
Money Market Funds park trillions at the Fed RRP.
Drains liquidity from banking system?
Sterilization tool.

## IV. Strategic Applications

### 4.1 Basis Trade Funding
Hedge Fund buys Bond, Shorts Future.
Funds the Bond via Repo.
Profit depends on Repo Rate stability.
September 2019 "Repo Spike" (Rates hit 10%).
Blew up Basis Traders. Fed forced to intervene.

### 4.2 Short Squeezing via Repo
Corner the float of a specific bond.
Repo rate goes to -3% (Fails charge).
Shorts must pay 3% per day to borrow the bond.
Forces buy-in.

## V. Exercises

**Exercise 1 (Rehypothecation):**
Broker takes client collateral. Repos it to Bank. Bank repos it to Mutual Fund.
Chain of ownership.
Lehman UK assets were rehypothecated and lost.
Rule 15c3-3 limits this in US.

**Exercise 2 (Fails to Deliver):**
If you don't return the bond in Repo.
Penalty.
"Fails Charge."
Keeps market disciplined.

## VI. References
-   Gorton, G. *Slapped by the Invisible Hand*.
-   Stigum, M. *The Money Market*.
