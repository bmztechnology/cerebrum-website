# Triparty Repo Mechanics: Clearing

## I. Executive Summary

**Triparty Repo** introduces a third agent (Clearing Bank: **BNY Mellon**, formerly also JP Morgan) between Borrower and Lender. The Clearing Bank manages collateral valuation, margin calls, and settlement. Crucially, it provides **Intraday Credit** to dealers to facilitate potential "unwinds" and substitutions. The reform of Triparty (reducing intraday credit reliance) was a major post-2008 stability project.

## II. Formal Definitions

### Definition 2.1 (The Daily Cycle)
1.  **Morning:** Dealer gets unwind? (Old model). Now: Collateral stays locked.
2.  **Day:** Dealer trades. Substitutes collateral in the shell.
3.  **Night:** Repo trade settles. Clearing Bank moves cash from Lender to Dealer, moves Securities to segregated account.

### Definition 2.2 (Collateral Schedules)
Lender (MMF) specifies acceptable collateral.
"Treasury Only." "Agency MBS." "Equities."
Triparty system auto-selects cheapest eligible collateral from Dealer's box to pledge.
Efficiency optimization.

## III. Theoretical Framework

### 3.1 Intraday Risk
Pre-reform: Banks extended massive overdrafts to Dealers during the day (while Repo was unwound).
Risk: Dealer defaults at noon. Clearing Bank holding the bag.
Reform: "Rolling Settlement." Collateral stays pledged unless specifically substituted. Cap on intraday credit.

### 3.2 GCF Repo (General Collateral Finance)
Inter-dealer derivative of Triparty.
Cleared by FICC (DTCC).
Netting anonymity.
Allows dealers to trade inventory without moving securities daily.

## IV. Strategic Applications

### 4.1 The Fed's Window
Fed RRP uses Triparty plumbing.
Fed is the Lender. Counterparties are Borrowers? No, Fed borrows cash.
Fed uses BNY Mellon to manage the collateral posted to MMFs.

### 4.2 Default Management
If Dealer defaults (Lehman).
Clearing Bank has right to seize and liquidate collateral.
Triparty agent tries to auction collateral systematically to avoid crashing the market.
Lehman weekend: JPM demanded extra collateral to cover intraday risk, draining Lehman's liquidity.

## V. Exercises

**Exercise 1 (Optimization):**
Dealer has Treasury (1%) and Corp Bond (5%).
Repo Buyer accepts both.
Dealer pledges Corp Bond. Keeps Treasury for other use (rehypothecation).
"Cheapest to Deliver" logic in collateral management.

**Exercise 2 (Sponsored Repo):**
FICC allows MMFs to clear Repo directly (Sponsored by a Bank).
Relieves Dealer balance sheet constraints.
Expanding central clearing to buy-side.

## VI. References
-   Federal Reserve Bank of New York. *Tri-Party Repo Infrastructure Reform*.
-   Copeland, A. *The Tri-Party Repo Market before the 2010 Reforms*.
