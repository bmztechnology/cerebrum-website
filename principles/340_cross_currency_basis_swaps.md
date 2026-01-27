# Cross Currency Basis Swaps: The Dollar Shortage

## I. Executive Summary

A **Cross Currency Basis Swap (XCCY)** involves exchanging principal and interest payments in two different currencies (e.g., EUR and USD). Crucially, the floating rates exchanged are **LIBOR + Basis**. Theoretically, Basis should be zero (Covered Interest Parity). In reality, the Basis is negative for non-USD currencies (e.g., EURIBOR + (-20bps) vs USD LIBOR flat). This reflects the structural **Global Dollar Shortage**.

## II. Formal Definitions

### Definition 2.1 (The Flows)
1.  Start: Exchange Notional (Receive \$100M / Pay €90M) at Spot rate.
2.  During:
    -   Pay USD LIBOR flat.
    -   Receive EUR LIBOR + **Basis**.
3.  End: Re-exchange Notional at **Original Spot Rate**.

### Definition 2.2 (CIP Violation)
$Forward = Spot \times \frac{1+r_{dom}}{1+r_{for}}$.
If this breaks, arbitrage exists.
XCCY Basis is the "Cost to borrow USD via FX Swaps."
Negative Basis $\implies$ expensive to borrow USD.

## III. Theoretical Framework

### 3.1 Demand for Dollars
Global Banks need USD to fund assets.
Non-US Banks issue EUR bonds (easy local funding), Swap to USD.
Massive one-way flow: Issuing EUR / Swapping to USD.
Creates imbalance.
Dealers charge a premium (the Basis) to lend the USD.

### 3.2 Counterparty Risk
Principal exchange at end implies massive FX Credit Risk.
If EUR crashes 50%, the €90M returned is worth way less than the \$100M owed.
Mark-to-Market resets (Murex) are required to mitigate this.

## IV. Strategic Applications

### 4.1 Issuance Arbitrage (Reverse Yankee)
US Company (Apple) issues Bond in EUR.
Yield in EUR is 1%.
Swaps to USD.
Basis is negative (Apple *receives* premium).
All-in USD cost < Issuing directly in USD.
"Arbitraging the Basis."

### 4.2 Banking Stress Indicator
Eur/Usd Basis widening (-50bps $\to$ -100bps).
Sign that European banks are starved of USD liquidity.
Fed opens "Swap Lines" to fix this.

## V. Exercises

**Exercise 1 (The 2008 Spike):**
Basis hit -300 bps.
You could lend USD and lock in 3% risk-free over Treasuries.
Only constraint: Balance Sheet capacity (SLR).

**Exercise 2 (Japan):**
JPY Basis is perenially negative.
Japanese insurers buy US Treasuries.
Need to hedge FX.
Sell USD / Buy JPY creates basis pressure.
Hedge cost eats the Yield Pickup.

## VI. References
-   Borio, C., et al. *Covered Interest Parity Lost*.
-   Baba, N., et al. *Spillover Effects of the US Credit Crisis*.
