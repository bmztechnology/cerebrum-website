# Peer to Peer P2P Lending Mechanics

## I. Executive Summary

**Peer-to-Peer (P2P) Lending** (LendingClub, Prosper, Funding Circle) disintermediates banks by matching borrowers directly with investors via an online platform. For investors, it creates a new asset class: **Consumer Credit**, previously accessible only to banks. It offers high yields but carries unhedged **Credit Risk** and **Platform Risk**.

## II. Formal Definitions

### Definition 2.1 (Shadow Banking)
Credit intermediation outside the regulated banking system.
No Deposit Insurance (FDIC).
No Capital Requirements (Basel III).
Efficiency gains (lower overhead) vs Stability risks.

### Definition 2.2 (The Waterfall)
Borrower pays Platform.
Platform takes fee.
Platform passes Principal + Interest to Investor.
If Borrower defaults $\implies$ Investor loses.
Platform is agent, not principal (usually).

## III. Theoretical Framework

### 3.1 Adverse Selection
Do good borrowers go to P2P? 
Or do they get cheap loans at banks, leaving P2P with the "Lemons"?
Platforms use "Alternative Data" (Social media, Utility bills) to score better.

### 3.2 Correlation to Macro
Consumer credit is highly correlated to Unemployment.
In a recession, P2P defaults spike.
Liquidity freezes (Investors stop funding new loans).
"Run on the platform."

## IV. Strategic Applications

### 4.1 Automated Investing
Criteria: "FICO > 700, Debt-to-Income < 30%."
Algo builds a portfolio of 1,000 tiny loan slices (\$25 each).
Diversification is the only protection against idiosyncratic default.

### 4.2 Institutionalization
Retail started it.
Hedge Funds took over.
Buying "Whole Loans" via API.
Securitizing them into ABS.
P2P became "Marketplace Lending."

## V. Exercises

**Exercise 1 (Prepayment Risk):**
High interest loans.
If borrower improves credit, they refinance (Prepay).
Investor loses the high yield asset.
"Refinancing Risk."

**Exercise 2 (Platform Bankruptcy):**
If the P2P website goes bust.
Who services the loans?
Backup servicer agreements are critical due diligence items.

## VI. References
-   Rentflow / LendingClub S-1 Filings.
-   Rigbi, O. *The Effects of Usury Laws: Evidence from the Online Loan Market*.
