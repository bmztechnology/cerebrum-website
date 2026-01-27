# Floating Rate Notes FRN: Discount Margin

## I. Executive Summary

**Floating Rate Notes (FRNs)** pay coupons linked to a reference rate (e.g., SOFR + 100bps). Unlike Fixed Rate bonds, their price remains close to Par (100) because the coupon resets to market rates periodically. Valuation focuses on the **Discount Margin (DM)**—the effective spread over the index required by the market—rather than YTM.

## II. Formal Definitions

### Definition 2.1 (Coupon Formula)
$$ C_t = Index_{t-1} + QuotedMargin $$
Reset in advance, Pay in arrears.
Quoted Margin (QM) is fixed at issuance.

### Definition 2.2 (Discount Margin - DM)
Price FRN by assuming Future Index Rates = Forward Rates.
Discount cashflows at $Forward + DM$.
Solve for DM.
If $Price < 100$, $DM > QM$.
If $Price > 100$, $DM < QM$.

## III. Theoretical Framework

### 3.1 Duration of FRN
Modified Duration is very low.
Sensitivity is only to the time until next reset (max 3 months).
$D \approx 0.25$.
However, **Credit Duration** (Spread Duration) is high.
Price sensitive to changes in DM (Credit quality of issuer).

### 3.2 Cap/Floor Embedded
Many FRNs have Caps (Max rate) or Floors (Min rate).
"Floored FRNs" valuable in zero rate world.
Valuation requires volatility model (Black's Model) to price the embedded Caplets/Floorlets.

## IV. Strategic Applications

### 4.1 Defensive Asset
In Rising Rate environment (2022).
Fixed Income crashes.
FRNs hold value (Coupons rise).
"Inflation Hedge."

### 4.2 Liability Management
Banks issue FRNs to match their Floating Rate Loans assets.
Eliminates interest rate risk naturally.

## V. Exercises

**Exercise 1 (Simple Margin):**
Index = 5%. QM = 1%. Total = 6%.
Market demands 7% return (Credit worsened).
Effective DM required = 2%.
Step 1: Coupon stays 6%.
Step 2: Price must drop below Par to generate extra 1% yield.
Price $\approx 100 - Duration \times 1\%$. (But Duration is tiny?)
No, Price $\approx 100 - SpreadDuration \times 1\%$.
Spread Duration $\approx$ Maturity. Price drops significantly.

**Exercise 2 (Reset Risk):**
Index usage. LIBOR to SOFR transition.
New Fallback language.
Basis risk if index definition changes.

## VI. References
-   Choudhry, M. *Analysing and Interpreting the Yield Curve*.
-   Duffie, D., & Singleton, K. *Credit Risk*.
