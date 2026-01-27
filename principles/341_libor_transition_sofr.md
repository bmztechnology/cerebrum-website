# LIBOR Transition SOFR: The Benchmark Revolution

## I. Executive Summary

The transition from **LIBOR (London Interbank Offered Rate)** to **SOFR (Secured Overnight Financing Rate)** was the largest financial engineering project in history ($300 Trillion affected). LIBOR (unsecured, poll-based, prone to manipulation) was replaced by SOFR (secured, transaction-based, robust). The challenge lies in SOFR being an **overnight retrograde** rate, whereas LIBOR was a **forward-looking term** rate.

## II. Formal Definitions

### Definition 2.1 (SOFR Characteristics)
-   **Secured:** Based on Repo transactions (Treasury collateral).
-   **Risk-Free:** No bank credit risk.
-   **Backward Looking:** "In Arrears." You don't know the coupon until the end of the period.

### Definition 2.2 (Credit Adjustment Spread - CAS)
LIBOR > SOFR (Credit Risk).
To toggle contracts, ISDA defined fixed spreads (e.g., 26 bps for 3M USD).
Fallback Protocol: Upon cessation, LIBOR = SOFR + CAS.

## III. Theoretical Framework

### 3.1 Term SOFR
Market hates "In Arrears." Corporates want to know interest expense in advance.
CME created "Term SOFR" futures.
Prediction of average SOFR over next 3 months.
Allowed forward-looking structure similar to LIBOR.

### 3.2 The Value Transfer
LIBOR was volatile (Spiked in crisis).
SOFR is flat (Central Bank pegged).
Converting legacy LIBOR bonds to SOFR transfers value from Lenders to Borrowers in a crisis?
CAS fixes the mean difference, but not the variance.

## IV. Strategic Applications

### 4.1 Basis Swaps
Trading LIBOR vs SOFR basis during the transition.
Betting on the timing of cessation and the final Spread Calculation.
Liquid liquidity pools migrated date by date.

### 4.2 Legal Risk
"Tough Legacy" contracts.
Bonds with no fallback language requiring 100% consent to change.
Legislative solutions (NY Law) required to prevent mass Litigation.

## V. Exercises

**Exercise 1 (Compounding Mechanics):**
Averages of daily rates vs Daily compounding.
Floating notes use Compounding ($ \prod (1+r) $).
Simple average ($ \sum r / N $) loses the interest-on-interest.
ISDA standard is Compounding.

**Exercise 2 (Ameribor / BSBY):**
Regional banks hated SOFR (Doesn't reflect their funding cost).
Tried to launch credit-sensitive alternatives (BSBY).
Regulators killed them. "SOFR or nothing."

## VI. References
-   ARRC. *User's Guide to SOFR*.
-   ISDA. *IBOR Fallbacks Supplement*.
