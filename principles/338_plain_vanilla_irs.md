# Plain Vanilla IRS: The Fixed vs Floating

## I. Executive Summary

A **Plain Vanilla Interest Rate Swap (IRS)** is an agreement to exchange cash flows based on a Notional Amount. One party pays a **Fixed Rate** (The Swap Rate) and receives a **Floating Rate** (e.g., SOFR or Euribor). It is the primary tool for hedging interest rate risk (Duration) and the benchmark for determining the cost of borrowing for banks and corporates.

## II. Formal Definitions

### Definition 2.1 (The Swap Rate)
The Rate $S$ that makes the Pay Leg equal to the Receive Leg at inception.
$$ PV(Fixed) = PV(Floating) $$
$$ S \sum \Delta t_i DF(t_i) = \sum \Delta t_j L(t_{j-1}, t_j) DF(t_j) $$
-   $DF(t)$: Discount Factor.
-   $L$: Forward Rate.
-   $\Delta t$: Day count fraction (Act/360 vs 30/360).

### Definition 2.2 (Direction)
-   **Payer Swap:** Pay Fixed / Receive Float. Profitable if Rates Rise. Analogue to Short Bond.
-   **Receiver Swap:** Receive Fixed / Pay Float. Profitable if Rates Fall. Analogue to Long Bond.

## III. Theoretical Framework

### 3.1 Valuation vs Pricing
-   **Pricing:** Determining the Fair Rate $S$ at $t=0$ (NPV = 0).
-   **Valuation:** Determining the NPV at $t > 0$.
As rates move, the Swap develops positive or negative MTM.
Value = $PV_{remaining}(Receive) - PV_{remaining}(Pay)$.

### 3.2 Dual Curve Framework
Pre-2008: Discount and Forward projection used same curve (Libor).
Post-2008:
-   **Projection Curve:** Libor/SOFR (Estimate cashflows).
-   **Discount Curve:** OIS (Risk-free rate for collateralized trades).
The "Spread" between curves represents Liquidity/Credit risk.

## IV. Strategic Applications

### 4.1 Corporate Hedging
Company issues Floating Rate Debt (cheap).
Fears rates rising.
Enters **Payer Swap** (Pay Fixed 4%, Receive Float).
Net Result: Company pays Bond Float + Swap Fixed - Swap Float = Fixed 4%.
Synthetic Fixed Rate Bond.

### 4.2 Asset Swap (ASW)
Investor buys Bond. Sells Receiver Swap (Receives Float, Pays Fixed Coupon).
Net Result: Investor gets Floating Rate + Spread.
Spread = ASW Spread.
Measures the credit risk of bond relative to Swap curve.

## V. Exercises

**Exercise 1 (Negative Swap Spreads):**
Can Treasury Yield > Swap Rate?
Yes (2009-2023).
Implies US Govt is riskier than Banks? No.
Implies Balance Sheet constraints. Banks demand premium to hold Treasuries vs Swaps (which are capital efficient).

**Exercise 2 (Compression):**
Banks have trillion dollar swap books.
Many offsetting trades (Pay 3%, Receive 3.1%).
Net risk is small, but Gross Notional is huge (Regulatory capital hit).
TriOptima runs "Compression cycles" to tear up redundant trades.

## VI. References
-   Corb, H. *Interest Rate Swaps and Other Derivatives*.
-   Isda. *Swap Definition Standard*.
