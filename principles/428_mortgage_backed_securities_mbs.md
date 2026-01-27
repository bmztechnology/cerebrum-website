# Mortgage Backed Securities MBS: Pass Through

## I. Executive Summary

**Agency MBS** pool thousands of residential mortgages into a single security. The cash flows (Principal + Interest) are **Passed Through** to investors pro-rata. Because the US Agencies (Fannie Mae, Freddie Mac, Ginnie Mae) guarantee the credit, there is no default risk. The primary risk is **Prepayment Risk**: Homeowners can refinance at any time (Call Option), creating Negative Convexity for the investor.

## II. Formal Definitions

### Definition 2.1 (TBA Market)
"To Be Announced."
MBS trade forward. Buyer knows the Coupon, Issuer, and Maturity, but not the specific pools.
Allows for massive liquidity (most liquid bond market after Treasuries).
"Cheapest to Deliver" capability for sellers.

### Definition 2.2 (The Guarantees)
-   **Ginnie Mae:** Full Faith and Credit of US Govt (Explicit).
-   **Fannie/Freddie:** Government Sponsored Enterprise (Implicit, now effectively Explicit under conservatorship).
Guarantees timely payment of P&I, even if homeowner defaults (Agency buys the loan out of the pool).

## III. Theoretical Framework

### 3.1 Negative Convexity
Price-Yield curve is concave.
-   Rates Drop $\implies$ Price Rises, but Refinancing starts. Price capped at $\approx 104-106$?
-   Rates Rise $\implies$ Refinancing stops (Extension Risk). Duration increases. Price crashes.
MBS investors are **Short Straddles** on rates? No, Short Calls?
More accurately: Short Prepayment Options.

### 3.2 Spread to Treasuries
MBS Yield = Treasury + OAS (Option Adjusted Spread).
OAS compensates for Liquidity and Model Risk (Prepayment Model error).
Nominal Spread is meaningless because of the option cost.

## IV. Strategic Applications

### 4.1 The Dollar Roll
Repo trade in TBA market.
Sell current month delivery, Buy next month delivery.
Drop (Price difference) vs Financing cost.
If implied financing rate is well below Libor, the Roll is "Special."
Primary way hedge funds lever MBS.

### 4.2 Specified Pools
"Call Protection" pools.
-   Low Loan Balance (LLB): Borrowers unlikely to refi for small savings.
-   Geography (NY/CA): High costs to refi? Or other behaviors.
-   Credit Scores: Low FICO refi slower (Burnout).
Pay up for "Slower" pools (Pay-up).

## V. Exercises

**Exercise 1 (Extension Risk):**
Yield 4%. Duration 4.
Rates rise 2%.
Refi activity stops. Duration extends to 6.
Price drops $6 \times 2\% = 12\%$.
Worse than the initial Duration of 4 suggested ($4 \times 2\% = 8\%$).

**Exercise 2 (Burnout):**
Rates drop. 50% of pool refis.
Rates drop again.
Remaining 50% are "Burned Out" (Inattentive, unable to qualify).
Prepayment speed slows down despite incentive.
Path dependency.

## VI. References
-   Fabozzi, F. *The Handbook of Mortgage-Backed Securities*.
-   Bhattacharya, A. *Fixed Income Analysis*.
