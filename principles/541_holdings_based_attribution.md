# Holdings Based Attribution: Campisi Model

## I. Executive Summary

**Holdings-Based Attribution** uses the line-item details of a portfolio to decompose returns. In Fixed Income, the **Campisi Model** is the standard. It breaks bond returns into: **Income** (Coupon), **Treasury Effect** (Yield Curve shift), **Spread Effect** (Credit spread change), and **Selection** (Idiosyncratic). This granularity is essential because "Total Return" in bonds obscures the source of risk (e.g., Duration vs Credit).

## II. Formal Definitions

### Definition 2.1 (The Decomposition)
$$ Total Return = Income + Price_{Rates} + Price_{Spread} + Residual $$
1.  **Income:** Coupon / Price.
2.  **Treasury Effect:** $-Duration \times \Delta TreasuryYield$.
3.  **Spread Effect:** $-Duration_{Spread} \times \Delta CreditSpread$.
4.  **Selection:** Specific bond pricing anomalies.

### Definition 2.2 (Yield Curve Decomposition)
Further break Treasury Effect into:
-   **Shift:** Parallel move.
-   **Twist:** Flattening/Steepening.
-   **Butterfly:** Curvature.
Key Rate Duration attribution.

## III. Theoretical Framework

### 3.1 Duration Times Spread (DTS)
For Credit, Spread Return is proportional to $Duration \times Spread$.
Attribution adjusts for risk.
Did manager beat benchmark by taking more Spread Duration (Beta) or by picking better credits (Alpha)?

### 3.2 Equity Holdings Attribution
Factor attribution models (Barra).
Loadings on Size, Momentum, Value of *each stock*.
Aggregated to portfolio level.
"Active Exposure."

## IV. Strategic Applications

### 4.1 Drift Analysis
Campisi attribution over time reveals style drift.
Manager usually generates alpha via Credit (Spread Effect).
Suddenly generates alpha via Rates (Treasury Effect).
Manager is becoming a Macro Trader.

### 4.2 Currency Effect
Global Bond Portfolio.
$Return = LocalReturn + CurrencyReturn + (Local \times Currency)$.
Currency management is a distinct skill.
Attribution isolates it.

## V. Exercises

**Exercise 1 (Residual):**
Large residual in Campisi?
Usually pricing errors or convexity (Campisi is linear duration model).
High convexity bonds (MBS) break the model.

**Exercise 2 (Carry):**
Income Effect + Roll Down.
Often grouped as "Carry."
The stable part of return.
Price effects are the volatile part.

## VI. References
-   Campisi, S. *Primer on Fixed Income Performance Attribution*.
-   Menchero, J. *Optimized Stratified Sampling for Attribution*.
