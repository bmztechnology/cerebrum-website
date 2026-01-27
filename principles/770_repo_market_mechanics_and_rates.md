# Repo Market Mechanics and Rates

## I. Executive Summary

The **Repo (Repurchase Agreement)** market is the plumbing of the financial system. It is a **Secured Loan** market where cash is borrowed against collateral (Treasuries). Rates (SOFR) are determined by the supply of Cash vs the supply of Collateral. Microstructure breakdowns in Repo (e.g., Sept 2019 spike) freeze the entire banking mechanism, necessitating Fed intervention.

## II. Formal Definitions

### Definition 2.1 (The Repo Transaction)
Borrower (Hedge Fund) sells Bond to Lender (Bank) for \$100.
Agrees to buy it back tomorrow for \$100.01.
Implied Interest Rate = Repo Rate.
Collateral reduces Credit Risk.
**Haircut:** Bank might only lend \$98 on a \$100 bond (Over-collateralization).

### Definition 2.2 (Reverse Repo - RRP)
Checking account for Money Market Funds at the Fed.
MMFs lend cash to Fed. Fed gives Collateral.
Sets the "Floor" on interest rates.
If Fed RRP = 5.30%, no one lends below 5.30%.

## III. Theoretical Framework

### 3.1 Specialness
General Collateral (GC): Any Treasury bond. Rate = SOFR.
Special Collateral: A specific bond (e.g., the new 10Y).
If Demand to **Short** the 10Y is high, Short Sellers need to Borrow it.
They lend Cash at 0% (or negative!) to get the Bond.
The bond trades "Special."
The "Repo Benefit" accrues to the bond holder.

### 3.2 The Zero Lower Bound
If Cash > Collateral.
Repo rates can go negative.
"I will pay you to hold my cash because I need the collateral (Safety)."
Definition of a flight-to-safety crisis.

## IV. Strategic Applications

### 4.1 Matched Book Trading
Dealer borrows cash at 5.00% (Repo).
Lends cash at 5.05% (Reverse Repo) to another client.
Extracts 5bps spread.
Balance Sheet constrained.
Leverage Ratio (SLR) limits how large the book can grow.
When SLR limits hit, Dealers stop intermediating $\implies$ Repo Spike.

### 4.2 Carry Trade Financing
Buy High Yield Bond (8%).
Finance via Repo (5%).
Net Carry = 3% $\times$ Leverage.
If Repo Rate spikes to 10%?
Trade blows up.
Funding Risk.

## V. Exercises

**Exercise 1 (The 2019 Spike):**
Repo spiked to 10%.
Tax payments drained Cash. Treasury issuance flooded Collateral.
Imbalance.
Fed had to inject liquidity (restart QE).
Repo is the "pulse" of liquidity.

**Exercise 2 (Fails):**
"Fail to Deliver."
You sold the bond but couldn't borrow it in Repo.
Penalty fees.
Chains of fails (A fails to B, B fails to C...).

## VI. References
-   Stigum, M. *The Money Market*.
-   Copeland, A. *Repo Runs*.
