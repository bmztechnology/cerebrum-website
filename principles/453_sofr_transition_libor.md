# SOFR Transition LIBOR: Risk Free Rate

## I. Executive Summary

The transition from **LIBOR** (London Interbank Offered Rate) to **SOFR** (Secured Overnight Financing Rate) was the largest financial plumbing overhaul in history ($400T in contracts). LIBOR was based on **expert judgment** and unsecured lending (which vanished after 2008), making it prone to manipulation (LIBOR Scandal). SOFR is a transaction-based, secured (Repo) overnight rate, robust but lacking a **Credit Sensitivity** component.

## II. Formal Definitions

### Definition 2.1 (LIBOR vs SOFR)
| Feature | LIBOR | SOFR |
| :--- | :--- | :--- |
| **Tenors** | 1D, 1M, 3M, 6M, 12M | Overnight only (Term SOFR derived via Futures) |
| **Credit Risk** | Bank Credit (Unsecured) | Risk Free (Treasury Collateral) |
| **Input** | Quotes/Estimates | Actual Repo Transactions |
| **Timing** | Forward Looking (Term) | Backward Looking (Compounded in Arrears) |

### Definition 2.2 (Credit Spread Adjustment - CSA)
To make SOFR Contracts equivalent to Legacy LIBOR.
$LIBOR \approx SOFR + Spread$.
ISDA Fallback Protocol fixed this spread (historical median over 5 years).
e.g., 3M LIBOR Fallback = 3M SOFR + 26.161 bps.

## III. Theoretical Framework

### 3.1 The Term Structure Problem
Borrowers want to know their payment in advance ("Term Rate").
SOFR is overnight.
"SOFR Compounded in Arrears": You only know the interest due at the *end* of the period.
Problematic for corporate treasurers.
Solution: **CME Term SOFR** (derived from Futures forward curve).

### 3.2 BSBY / Ameribor
Attempts to create credit-sensitive alternatives.
Regulators (SEC/Fed) shot them down.
"We want volume-based benchmarks, not fragile credit indices."
SOFR is the only game in town.

## IV. Strategic Applications

### 4.1 Basis Swaps
Trading Term SOFR vs Compounded SOFR.
Trading SOFR vs Fed Funds.
New basis risks emerged.

### 4.2 Contract Remediation
Fallback language insertion.
"Zombie LIBOR" (Synthetic LIBOR) published for tough legacy contracts.
Litigation risk minimized by Federal legislation (LIBOR Act).

## V. Exercises

**Exercise 1 (Hedge Effectiveness):**
Bank funding cost = Unsecured (Credit sensitive).
Asset yield = SOFR (Risk free).
In crisis: Funding cost rises, Asset yield falls (Flight to safety).
Basis risk opens up. Banks must use Credit Default Swaps to hedge the gap.

**Exercise 2 (Daily Simple SOFR):**
Used in loans. No compounding. Just arithmetic average.
Simpler for IT systems.

## VI. References
-   Federal Reserve Bank of New York. *SOFR User Guide*.
-   Alternative Reference Rates Committee (ARRC). *Transition Reports*.
