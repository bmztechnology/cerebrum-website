# CDS Mechanics: Insurance on Bond Defaults

## I. Executive Summary

A **Credit Default Swap (CDS)** is a bilateral contract where the **Protection Buyer** pays a periodic fee (Premium) to the **Protection Seller**. In exchange, the Seller agrees to compensate the Buyer if a **Credit Event** (Default, Bankruptcy) occurs on the **Reference Entity**. Ideally, it functions as insurance against bond default, but unlike insurance, you do not need to own the bond to buy the CDS (Naked CDS).

## II. Formal Definitions

### Definition 2.1 (The Flows)
-   **Premium Leg:** Buyer pays $S$ (Spread in bps) $\times$ Notional quarterly.
-   **Protection Leg:** If Default, Seller pays $(100 - R) \times$ Notional.
-   $R$: Recovery Rate (Auction determined value of defaulted bond).
-   If no default, Seller keeps premium.

### Definition 2.2 (Credit Events ISDA)
1.  **Bankruptcy:** Legal insolvency.
2.  **Failure to Pay:** Missed coupon (after grace period).
3.  **Restructuring:** Changing terms unfavorable to holders (Haircut).
Note: "Greek Bailout 2012" famously triggered CDS only after "Voluntary" restructuring was deemed mandatory.

## III. Theoretical Framework

### 3.1 Valuation (Reduced Form)
Value = PV(Premium Leg) - PV(Protection Leg).
PV(Prem) depends on Survival Probability $P(t)$.
PV(Prot) depends on Hazard Rate $\lambda \times (1-R)$.
Breakeven Spread $S \approx \lambda (1-R)$.
If Protection > Premium $\implies$ CDS has positive MTM for Buyer.

### 3.2 The Basis Trade
Bond Yield = $Risk Free + Spread$.
CDS Spread = Cost of Protection.
Ideally, $Bond Spread \approx CDS Spread$.
**Negative Basis:** CDS < Bond Spread. Buy Bond, Buy CDS. Locked in Arbitrage?
**Positive Basis:** CDS > Bond Spread. Sell Bond, Sell CDS.

## IV. Strategic Applications

### 4.1 Naked Shorts
You think Company X will fail.
Shorting Bonds is hard (Hard to borrow).
Buying CDS is easy.
If Company X survives but Spreads widen, you profit (MTM gain).
If Company defaults, massive payout.
"The Big Short" strategy.

### 4.2 Capital Relief
Bank owns \$1B of IBM Loan.
Regulatory Capital req is high.
Bank buys CDS on IBM from AIG.
Risk transferred. Capital requirement drops.
"Synthetic Securitization."
Risk: Counterparty Risk (AIG might fail).

## V. Exercises

**Exercise 1 (Auction Settlement):**
Lehman Defaults.
Bonds trade at 8 cents ($R=8$).
CDS Seller pays $100 - 8 = 92$ cents on the dollar.
If physical settlement: Buyer hands over bond, gets Par ($100). Same economic result.

**Exercise 2 (Small Bang):**
Restructuring triggers CDS, but only for "modified" contracts.
Maturity limiting restructuring.
ISDA rules are complex (Mod-Mod-R).

## VI. References
-   O'Kane, D. *Modelling Single Name and Multi-name Credit Derivatives*.
-   ISDA. *Credit Derivatives Definitions*.
