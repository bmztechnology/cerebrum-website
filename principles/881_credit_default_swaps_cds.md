# Credit Default Swaps CDS Big Short Mechanics

## I. Executive Summary

A **Credit Default Swap (CDS)** is insurance against default. The **Protection Buyer** pays a quarterly spread (e.g., 500bps) to the **Protection Seller**. If a **Credit Event** (Bankruptcy, Failure to Pay) occurs, Seller pays Buyer (Par - Recovery). Microstructure involves the **ISDA Master Agreement**, the **Determination Committee**, and **Auctions** to settle the price.

## II. Formal Definitions

### Definition 2.1 (The Standard Contract)
Notional: \$10M.
Spread: 100bps (Investment Grade) or 500bps (High Yield).
Payment: Quarterly.
Trigger: **Bankruptcy** or **Failure to Pay**. (Restructuring is optional - "Mod R").
Settlement: **Physical** (Deliver bond, get Par) or **Cash** (Get Par - Auction Price).

### Definition 2.2 (The Auction)
When Lehman failed. \$400B CDS outstanding. Lehman had \$30B bonds.
Not enough bonds for Physical Settlement.
ISDA created the Auction protocol.
Dealers bid on the bonds to set the "Final Price" (e.g., 8 cents).
CDS Payout = $100 - 8 = 92$.
Cash settlement became standard.

## III. Theoretical Framework

### 3.1 Basis Trade
CDS Spread $\not\approx$ Bond Z-Spread.
**Positive Basis:** CDS > Bond Spread. (Protection expensive).
**Negative Basis:** CDS < Bond Spread. (Protection cheap).
Arbitrage: Buy Bond / Buy CDS (Negative Basis trade). Risk-free yield?
Risks: Counterparty risk, Funding risk, Repo cost.

### 3.2 Distressed CDS
When default is imminent, CDS trades on "Points Upfront."
"50 points upfront + 500bps running."
Price reflects probability of jump to default.
PD $\approx$ Spread / (1 - Recovery).

## IV. Strategic Applications

### 4.1 Manufactured Default
Hedge Fund buys CDS.
Lends money to company.
Conditions loan on company intentionally defaulting on a small payment.
Triggers CDS payout.
Windfall.
"Hovnanian / GSO" case.
ISDA modified rules to ban "Narrowly Tailored Credit Events" (NTCE).

### 4.2 Naked CDS
Buying insurance on a house you don't own.
Pure speculation.
Driven by "The Big Short" logic.
Limited downside (Premium).
Infinite upside (Par).
Asymmetric.

## V. Exercises

**Exercise 1 (Curve Inversion):**
Short-term CDS > Long-term CDS.
Signal: "They are going bust this week."
If they survive this week, they might survive 5 years.
Distressed signal.

**Exercise 2 (Counterparty Risk):**
You bought CDS from AIG.
Lehman defaults. Payday!
But AIG is bankrupt.
You don't get paid.
"Wrong Way Risk" (Correlation between reference entity and protection seller).

## VI. References
-   Zuckerman, G. *The Greatest Trade Ever*.
-   ISDA. *Credit Derivatives Definitions*.
