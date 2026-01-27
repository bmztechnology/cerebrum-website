# Principal Protected Notes PPN: The Guarantee

## I. Executive Summary

**Principal Protected Notes (PPNs)** offer investors the upside potential of a risky asset (Equity/Index) while guaranteeing the return of the initial capital (Principal) at maturity. They are constructed using a **Zero Coupon Bond** (to secure the principal) and a **Call Option** (to provide the upside). The effectiveness depends on Interest Rates: High rates allow cheaper ZCBs, leaving more budget for Options.

## II. Formal Definitions

### Definition 2.1 (The Formula)
$$ PPN = ZCB + Option $$
-   $ZCB$: Pays $100$ at $T$. Price today = $100 e^{-rT}$.
-   $Budget$: $100 - ZCB Price$.
-   **Participation Rate:** $Budget / Call Option Price$.

### Definition 2.2 (Scenario)
-   Rates = 5%. T = 5 Years.
-   $ZCB = 100 e^{-0.25} \approx 78$.
-   Budget = 22.
-   ATM Call Price (5Y) = 15.
-   Participation = $22/15 = 146\%$.
-   Result: Guarantee Principal + 146% of Index Upside. (Great Product).

## III. Theoretical Framework

### 3.1 The Low Rate Problem
-   Rates = 1%. T = 5 Years.
-   $ZCB \approx 95$.
-   Budget = 5.
-   Call Price = 15.
-   Participation = $33\%$.
-   Result: Guarantee Principal + 33% of Upside. (Terrible Product).
-   Solution: Add risk ("Capital at Risk") or use "Asian Options" (cheaper).

### 3.2 Credit Risk
The "Guarantee" is only as good as the Issuer (Lehman Brothers).
PPNs are unsecured debt obligations.
If Issuer defaults, Principal is lost.
"Principal Protected" is a misnomer in bankruptcy.

## IV. Strategic Applications

### 4.1 Retail Sales
Sold to risk-averse savers.
"Stock market participation without the crash risk."
Hidden Fees: The bank usually prices the option with a 2-3% markup, reducing the Participation Rate.

### 4.2 Constant Protection (CPPI)
PPN is "Static Protection."
CPPI is "Dynamic Protection."
PPN allows you to buy the option and go to sleep.

## V. Exercises

**Exercise 1 (Capped PPN):**
To increase Participation, Bank sells a Call at a higher strike (Call Spread).
Upside is capped at 150%.
Participation rises to 200%.
"Marketing gimmick."

**Exercise 2 (Dividends):**
The Investor usually does NOT get dividends.
The Bank keeps dividends to fund the Option premium.
If Dividend Yield is high, PPN pricing improves dramatically (Cheaper Call).

## VI. References
-   Baubonis, C., et al. *Structured Products and Related Credit Derivatives*.
-   Hernandez, R. *Principal Protected Notes*.
