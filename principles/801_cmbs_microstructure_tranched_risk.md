# CMBS Microstructure and Tranched Risk

## I. Executive Summary

**Commercial Mortgage Backed Securities (CMBS)** pool thousands of commercial loans and slice them into **Tranches** (AAA to Unrated Equity). This **Securitization** decouples the Originator (Bank) from the Risk Holder (Bond Investor). The microstructure is defined by the **Waterfall** of payments and the **Special Servicer** who handles defaults.

## II. Formal Definitions

### Definition 2.1 (The Waterfall)
Cashflow from Rents $\to$ Trust $\to$ Tranches.
1.  **Senior (AAA):** Paid first. Yield = Swap + 80bps.
2.  **Mezzanine (BBB):** Paid next. Yield = Swap + 300bps.
3.  **B-Piece (Equity):** Paid last. Takes first loss. Yield = 10-15%.
The B-Piece Buyer (often a Hedge Fund) performs the due diligence ("The gatekeeper").

### Definition 2.2 (Conduit vs SASB)
**Conduit:** Fusion of 50-100 diversified loans. (risk pooling).
**SASB (Single Asset Single Borrower):** One massive loan on a trophy asset (e.g., Willis Tower). (Binary risk).

## III. Theoretical Framework

### 3.1 Credit Enhancement
Subordination: 30% of the deal must default before AAA loses a penny.
Over-collateralization.
Reserve Accounts.
Allows turning BBB loans into AAA bonds (Alchemy?).

### 3.2 The Special Servicer
When a loan defaults, it is transferred to Special Servicing.
Servicer decides: "Foreclose?" "Extend and Pretend?" "Modify?"
Servicer is often owned by the B-Piece Buyer.
Incentive: Maximize recovery for the B-Piece (which might hurt the Borrower).

## IV. Strategic Applications

### 4.1 CMBX Short
CMBX Index tracks baskets of CMBS deals (Series 6 = Retail exposure).
"The Big Short 2.0" (Carl Icahn vs Malls).
Shorting CMBX BBB- tranche.
Betting that Mall defaults will wipe out the lower tranches.

### 4.2 Defeasance
Borrower wants to prepay loan.
CMBS prohibits strict prepayment (Yield Maintenance for bondholders).
Borrower must buy a portfolio of Treasuries that replicates the cashflow and pledge them to the trust.
Deals flow through "Defeasance Consultants."

## V. Exercises

**Exercise 1 (Appraisal Reduction):**
Loan hiccups.
Appraisal ordered. Value drops.
"Appraisal Reduction Amount" (ARA) reduces interest paid to lower tranches *before* realized loss.
Standard mechanism to "Choke" the B-Piece holder.

**Exercise 2 (Extension Risk):**
Balloon payment due at maturity.
Borrower can't refinance (Market frozen).
Servicer grants extension.
Bond duration extends. Convexity risk.

## VI. References
-   Fabozzi, F. *The Handbook of Mortgage-Backed Securities*.
-   Trepp. *CMBS Research*.
