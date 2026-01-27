# Insurance Linked Securities Cat Bonds

## I. Executive Summary

**Insurance Linked Securities (ILS)**, primarily **Catastrophe (Cat) Bonds**, transfer Peak Peril risks (Hurricanes, Earthquakes) from Insurers to Capital Markets. The microstructure operates on a **Binary Payout**: If a Trigger Event occurs (Wind Speed > X), investors lose principal. If not, they earn a high spread (Risk-Free + Risk Premium). This asset class offers **Zero Correlation** to equities/bonds.

## II. Formal Definitions

### Definition 2.1 (The Trigger Mechanism)
**Indemnity Trigger:** Based on Insurer's *actual losses*. (Moral Hazard issues, long settlement).
**Parametric Trigger:** Based on physical data (Wind speed at station). (Basis Risk, fast settlement).
**Industry Loss Trigger:** Based on total industry loss (PCS Index).
Investors prefer Parametric (Transparent). Insurers prefer Indemnity (Basis Risk protection).

### Definition 2.2 (The SPV Structure)
Sponsor (Allstate) pays premiums to SPV.
Investors buy Bonds issued by SPV.
SPV buys high-quality collateral (T-Bills).
If No Event: SPV returns Principal + Interest.
If Event: SPV pays Principal to Sponsor.

## III. Theoretical Framework

### 3.1 The Zero Beta Anomaly
Hurricanes don't care about the S&P 500.
Correlation = 0.0.
Portfolio Theory: Adding a zero-correlation asset with positive expectation reduces portfolio variance.
"The ultimate diversifier."
Exception: 2008. Lehman Brothers was the Swap Counterparty for the collateral. Credit risk infected Pure Risk. (Collateral generally moved to T-Bills since).

### 3.2 Expected Loss (EL) vs Spread
Ratio: $Multiple = Spread / EL$.
Typical Multiple: 2.0x - 3.0x.
If EL = 2% (1 in 50 year storm), Spread should be 4-6%.
Hard Market (post-Ian): Multiple expands.
Soft Market: Multiple compresses.

## IV. Strategic Applications

### 4.1 Sidecars
Quota Share Reinsurance.
Hedge Fund (Stone Ridge) sets up a "Sidecar" vehicle.
Takes 20% of the Insurer's book (Premiums and Losses).
Equity-like participation in underwriting results.
Not a bond, but an equity partnership.

### 4.2 Live Cat Trading
Hurricane approaching Florida.
Cat Bonds trade in secondary market.
Price drops from 100 to 60.
Tracker: "Forecast says it misses Miami."
Hedge Funds buy at 60.
Storm misses. Price snaps to 98.
Binary Event Arbitrage.

## V. Exercises

**Exercise 1 (Trapped Capital):**
Event occurs (Hurricane Ian).
Losses uncertain.
Collateral is "Trapped" in SPV until loss is finalized (can take years).
Investor liquidity blocked.
"Trap Risk" premium.

**Exercise 2 (Climate Change Pricing):**
Models (RMS/AIR) use historical data (100 years).
Climate Change implies non-stationarity. History under-predicts frequency.
Market pricing requires "Climate Loading" (Adding 10-20% to the model EL).

## VI. References
-   Lane, M. *Alternative Risk Strategies*.
-   Swiss Re. *The ILS Market Report*.
