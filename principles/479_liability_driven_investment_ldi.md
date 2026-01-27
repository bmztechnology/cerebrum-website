# Liability Driven Investment LDI: Funding Ratio

## I. Executive Summary

**Liability Driven Investment (LDI)** marks a paradigm shift for defined benefit pension plans. Instead of maximizing asset return (Total Return), the goal is to manage the **Funding Ratio** (Assets / Liabilities). The primary risk is not asset volatility, but **Liability Volatility** (driven by the discount rate). LDI portfolios use Derivatives (Swaps/Repo) to match the interest rate and inflation sensitivity of the liabilities.

## II. Formal Definitions

### Definition 2.1 (The Liability)
Present Value of future benefits.
Discounted at High Quality Corporate Bond Yield (AA).
If Rates fall 1%, Liability value rises ~20% (if Duration 20).
If Assets don't rise 20%, Funding Ratio collapses.
"The Denominator Effect."

### Definition 2.2 (The Glidepath)
Strategy:
1.  **Underfunded:** Take risk (Equities) to close the gap. Low hedge ratio.
2.  **Fully Funded:** De-risk. Move into Bonds/LDI to lock in the surplus. 100% hedge ratio.
Dynamic rebalancing as funding level changes.

## III. Theoretical Framework

### 3.1 Leverage
Pension Fund has \$100 Assets, \$100 Liabilities.
Duration of Assets = 5.
Duration of Liabilities = 20.
To match Duration of 20 with \$100 assets:
Need $4x$ leverage in duration terms.
Use Interest Rate Swaps (Overlay).
Fund keeps equities for growth, uses Swaps for duration.
"Separating Alpha (Growth) and Beta (Hedging)."

### 3.2 Collateral Management
Swaps require collateral (Variation Margin).
If Rates Rise $\implies$ Swap loses money $\implies$ Call for cash.
Fund must sell assets (Equities/Gilts) to post cash.
**Liquidity Waterfall:** Cash -> Gov Bonds -> Credit -> Equities.
UK Crisis 2022: Rates rose so fast, funds burned through the waterfall.

## IV. Strategic Applications

### 4.1 Corporate Finance
Pension Deficit = Debt of the company.
Volatile deficit makes stock volatile.
LDI stabilizes the balance sheet.
CFOs push for LDI to remove pension noise from earnings.

### 4.2 Cashflow Matching vs Duration Matching
Small plans use Cashflow Matching (Buy bonds to pay specific checks). expensive.
Large plans use Duration Matching (Swaps). Cheaper, but basis risk.

## V. Exercises

**Exercise 1 (Inflation LDI):**
Benefits linked to CPI/RPI.
Must buy Inflation Swaps.
If Inflation rises, Liabs rise. Swaps pay out.

**Exercise 2 (Curve Risk):**
Liabilities driven by 30Y rate.
Assets in 10Y bonds.
Curve Steepener (30Y rate rises less than 10Y rate?).
LDI requires "Key Rate Duration" matching.

## VI. References
-   Amenc, N. *Liability-Driven Investment*.
-   BlackRock. *The LDI Handbook*.
