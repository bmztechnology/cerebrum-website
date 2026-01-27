# Strategic vs Tactical Allocation: Drift

## I. Executive Summary

**Strategic Asset Allocation (SAA)** sets the long-term targets (e.g., 60/40) based on risk tolerance and capital market expectations ($E[R]$, $\sigma$, $\rho$). **Tactical Asset Allocation (TAA)** involves active deviations from these targets (e.g., 70/30) to exploit short-term market dislocations or valuation signals. SAA is the anchor; TAA is the sail.

## II. Formal Definitions

### Definition 2.1 (Policy Portfolio)
The Benchmark.
"If we did nothing active, this is what we hold."
Reference point for risk and performance.
SAA is passive *allocation* (constant mix).

### Definition 2.2 (Rebalancing Bands)
SAA Target: 60% Equity.
Drift: Market Rally $\implies$ Equity 65%.
Strict Rebalancing: Sell 5%.
Band Rebalancing: "Allow drift up to 65%. Sell if > 65%."
TAA: "Market is undervalued. Widen band to 70%."

## III. Theoretical Framework

### 3.1 Mean Reversion vs Momentum
TAA strategies fall into two camps:
1.  **Valuation (Mean Reversion):** Buy when P/E low. (Contrarian).
2.  **Trend (Momentum):** Buy when price high.
Conflict: In a bubble, Valuation says Sell, Trend says Buy.
Successful TAA requires distinct time horizons (Trend = Months, Value = Years).

### 3.2 The Cost of TAA
Active management decision.
Track record of TAA funds is poor.
Most investors destroy value trying to time the market.
SAA captures the risk premium. TAA tries to capture the error term.

## IV. Strategic Applications

### 4.1 Overlay Strategies
Institutional TAA.
Keep underlying managers fully invested.
Use Futures (S&P 500, Treasuries) at the plan level to adjust Beta.
Cheap and efficient.

### 4.2 Glidepath as Dynamic SAA
Target Date Fund.
SAA changes deterministically over time (Equity $\downarrow$).
This is not TAA (not reacting to market), but Dynamic SAA.

## V. Exercises

**Exercise 1 (Performance Attribution):**
$R_p - R_b = (w_p - w_b) \times R_asset + Selection$.
Allocation Effect ($w_p - w_b$) measures TAA skill.
Selection Effect measures Stock Picking skill.

**Exercise 2 (Black-Litterman):**
SAA = Equilibrium Prior.
TAA = Views.
Mathematically consistent framework for mixing SAA and TAA.

## VI. References
-   Brinson, G. *Determinants of Portfolio Performance* (1986). (90% of variance comes from SAA).
-   Singer, B. *Dynamic Asset Allocation*.
