# Bermudan Swaptions: The Exercise Ladder

## I. Executive Summary

**Bermudan Options** can be exercised on a set of discrete dates (e.g., every coupon payment date), lying between **European** (Expiry only) and **American** (Anytime). They are the standard instrument in **Interest Rate Swaptions** and Callable Bonds. They allow issuers to refinance debt if rates fall, but only on specific anniversary dates.

## II. Formal Definitions

### Definition 2.1 (The Tree)
-   European: 1 Node check at end.
-   American: Check every node (High computational cost).
-   Bermudan: Check specific nodes (e.g., $t=1, 2, 3...$).
Value: $European \le Bermudan \le American$.
Usually Bermudan $\approx$ American in value because optimal exercise points are rare.

### Definition 2.2 (Callable Bond)
Issuer sells Bond.
If rates drop, Issuer Calls bond (Exercise Bermudan Call on Bond price).
Refinances at lower rate.
Investor is Short Val (Short the Swaption).
Yield = Risk Free + Credit Spread + **Volatility Premium**.

## III. Theoretical Framework

### 3.1 Longstaff-Schwartz Algorithm
Least Squares Monte Carlo (LSM).
Used to price Bermudans.
Simulate 10,000 paths.
At each exercise date, compare "Intrinsic Value" (Exercise now) vs "Expected Continuation Value" (Wait).
Continuation Value estimated by regression on current state variables.

### 3.2 Interest Rate Models (Hull-White)
Bermudan Swaptions require a term structure model.
1-Factor or 2-Factor Hull-White.
Standard BSM doesn't work well because it assumes constant rates.
Mean reversion of interest rates is critical.

## IV. Strategic Applications

### 4.1 Mortgage Prepayment
US Mortgages are American Options (Prepay anytime).
European Mortgages are often Bermudan (Prepay penalty except on reset dates).
MBS valuation depends entirely on modeling this option.
"Convexity Hedging" of MBS portfolios drives rate volatility.

### 4.2 Corporate Issuance
Corporates issue Callable Bonds to buy cheap convexity.
If Volatility is undervalued, Issuers profit.
Investors (Bond Funds) are structurally Short Volatility.
They "Sell the Call" to get yield "pick-up."

## V. Exercises

**Exercise 1 (The Canary Option):**
"Bermudan" features, but mostly European.
Example: 10NC1 (10 Year, Non-Call 1).
Callable after 1 year.
Often called a "Canary" because it chirps early?
Actually "Canary" is a different exotic (Quarterly callable).

**Exercise 2 (Monetization):**
If you own a Callable Bond.
Rates fall. Bond Price capped at 100 (Call Price).
Duration shortens (Negative Convexity).
You underperform Treasuries in a rally.
Price of the Bermudan Call limits your upside.

## VI. References
-   Longstaff, F.A., & Schwartz, E.S. *Valuing American Options by Simulation*.
-   Andersen, L. *Pricing Bermudan Swaptions*.
