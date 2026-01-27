# Swap Execution Facilities SEFs

## I. Executive Summary

Post-2008 (Dodd-Frank), OTC Swaps (Interest Rate Swaps, CDS) were mandated to trade on regulated platforms called **SEFs (Swap Execution Facilities)** and clear through **CCPs** (Central Clearing). This shifted microstructure from opaque bilateral phone deals to potentially transparent **Order Books (CLOB)** or **RFQ** systems. However, the market bifurcated into **Dealer-to-Dealer** (D2D) and **Dealer-to-Client** (D2C) segments.

## II. Formal Definitions

### Definition 2.1 (Required Transactions)
"Made Available to Trade" (MAT).
Liquid swaps (e.g., 5Y USD IRS) *must* trade on SEF.
Illiquid custom swaps can still be OTC.
SEF protocols:
1. **CLOB:** Limit Order Book (Rarely used for Swaps).
2. **RFQ-to-3:** Request quote from min 3 dealers. (Dominant).

### Definition 2.2 (Compression)
Swaps accumulate notional.
Traders have Long \$100M and Short \$99M. Net \$1M risk, but \$199M notional capital charge.
"Compression Cycles" (TriOptima).
Algorithm cancels offsetting trades across the network.
Reduces systemic risk and capital usage.

## III. Theoretical Framework

### 3.1 Two-Tier Liquidity
**D2D:** Inter-dealer brokers (ICAP/Tullett). Anonymous CLOBs. High velocity.
**D2C:** RfQ (Tradeweb/Bloomberg). Name Disclosed. Relationship based.
Why hasn't D2C moved to CLOB?
Clients fear information leakage and lack credit lines to trade anonymously with everyone.

### 3.2 The Futurization of Swaps
Standardized Swaps look like Futures.
ERIS Futures.
Move to "Swap Futures" to avoid SEF complexity?
Failed to gain traction. Liquidity stuck in OTC/SEF ecosystem due to bank dominance.

## IV. Strategic Applications

### 4.1 Curve Trading on SEF
Buying 2Y Swap / Selling 10Y Swap.
Executing via "List Trading" (Contingent RFQ).
"Price me the spread."
Dealers price the package.

### 4.2 Credit Value Adjustment (CVA)
Pricing the counterparty risk.
On SEF (Centrally Cleared), CVA $\approx 0$ (CCP risk only).
OTC (Bilateral), CVA is high.
Price difference encourages Clearing.

## V. Exercises

**Exercise 1 (The MAT determination):**
CFTC decides which swap is MAT.
When a swap becomes MAT, volume shifts to SEF.
Spreads tighten (Transparency).
Dealers lose margin.

**Exercise 2 (Order Book Failure):**
Why did CLOB fail for Swaps?
"Work ups."
Dealers prefer to negotiate size after fixing price.
Fixed Income culture vs Equity culture.

## VI. References
-   Giancarlo, C. *Swaps Regulation*.
-   Riggs, L. *Swap Trading after Dodd-Frank*.
