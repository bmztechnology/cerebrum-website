# Basis Swaps Tenor Currency: The Spread

## I. Executive Summary

**Basis Swaps** exchange two floating rates. They price the difference in credit/liquidity risk between markets. **Tenor Basis Swaps** (3M LIBOR vs 6M LIBOR) reflect interbank credit stress. **Cross-Currency Basis Swaps** (USD Rates vs EUR Rates + FX exchange) price the scarcity of USD funding globally. The **Cross-Currency Basis** (XCCY) is the single most important monitor of global dollar liquidity.

## II. Formal Definitions

### Definition 2.1 (Tenor Basis)
Bank loans 6M cash. Funds with 3M deposits.
Risk: In 3 months, cannot roll funding? Or rate spikes?
Spread required = 6M - 3M Basis.
Historically ~1bp.
2008 Crisis: Spiked to 200bps.
Indicator of banking system trust.

### Definition 2.2 (CIP Violation)
Covered Interest Parity (CIP):
$F = S \times \frac{1+r_d}{1+r_f}$.
Forward Premium = Interest Differential.
In Basis Swap: Exchange notionals. Pay $r_d$, Rec $r_f + Basis$.
If Basis $\ne 0$, CIP is violated.
Since 2008, Basis is consistently negative for EUR, JPY.
Meaning: You must pay a premium (negative spread) to borrow USD.

## III. Theoretical Framework

### 3.1 Demand for Dollars
Global Banks/Corporates have USD assets.
Funding them in local currency needs Swaps.
Excess demand for USD Swaps pushes Basis negative.
Fed Swap Lines (Central Bank Liquidity) cap the basis blowouts.

### 3.2 SOFR Basis
SOFR vs Fed Funds.
SOFR (Repo/Secured) usually < Fed Funds (Unsecured).
Basis Swap trades the spread.
Used by Banks to hedge IORB vs Repo activity.

## IV. Strategic Applications

### 4.1 Cheap Funding
US Corporate issues debt in Euros (Reverse Yankee).
Swaps back to USD.
If XCCY Basis is negative (EUR holder pays USD holder), the US Corp *receives* the premium.
Lowers effective USD cost of debt.

### 4.2 Treasury Basis
Cash Treasury vs Futures.
"Basis Trade" (Hedge Fund usage).
Buying Cash, Shorting Futures.
Capturing the funding spread (Repo vs Implied Futures Financing).
Blow-up risk (Liquidity dries up, Repo spikes, Basis widens).

## V. Exercises

**Exercise 1 (JPY Basis):**
Japan has massive USD assets (Life Insurers).
Needs massive USD hedging.
JPY Basis is structurally huge (-50bps).
Major cost for Japanese investors.
Reduces yield on Treasuries for them.

**Exercise 2 (Turn-of-Year):**
Balance sheet constraints at year-end.
Basis blowouts in December.
Mean reversion trade for Jan 1.

## VI. References
-   Borio, C. *Covered Interest Parity Lost*.
-   Duffie, D. *Capital of Structure and Asset Pricing*.
