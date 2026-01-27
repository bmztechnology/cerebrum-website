# Basis Basis Bond vs CDS Arbitrage

## I. Executive Summary

The **Basis** measures the difference between the **Synthetic Market** (CDS) and the **Cash Market** (Bonds).
$$ Basis = CDS Spread - Bond Spread $$
A **Negative Basis** (CDS < Bond Spread) implies bonds are "cheap" (high yield). An arbitrageur **Buys the Bond** and **Buys CDS** protection, theoretically locking in a risk-free spread. Microstructure friction (Funding Cost, Repo) prevents perfect convergence.

## II. Formal Definitions

### Definition 2.1 (The Negative Basis Trade)
Scenario:
Bond Yield (ASW): L+150.
CDS Spread: 100bps.
Trade: Buy Bond (Earn L+150). Buy CDS (Pay 100).
Net: Earn L+50 Risk Free.
Why does it exist?
1. Balance Sheet scarcity (Banks can't hold bonds).
2. Liquidity Premium on bonds.

### Definition 2.2 (Funding Cost Adjustment)
Trader borrows cash to buy bond (Repo).
Repo Rate: SOFR + 10bps.
Cost of carry reduces the arb.
If Repo markets freeze (2008), funding spikes.
Trader force-liquidates bond. Basis blows out.
"The Basis Trade blew up in 2008."

## III. Theoretical Framework

### 3.1 "Cheapest to Deliver" (CTD) Option
CDS buyer has option to deliver *any* bond of the issuer.
They will deliver the cheapest one (Lowest Price).
CDS prices based on the CTD bond.
Bond position is in a specific bond.
Basis risk: Mismatch between your bond and the CTD bond.

### 3.2 The Leverage Factor
Hedge funds leverage this trade 10x.
Returns 50bps x 10 = 5%.
Safety?
If mark-to-market diverges (Bond drops, CDS doesn't rise enough), Margin Call.
Liquidity risk, not Credit risk.

## IV. Strategic Applications

### 4.1 Positive Basis (Capital Structure Arb)
CDS > Bond Spread.
Sell Protection (Short CDS). Sell Bond (Short).
Hard to Short Bonds (Repo market tight).
Usually implies LBO rumors (Bonds will be refinanced at Par, CDS will spike).

### 4.2 Regulatory Basis
Banks buying Negative Basis packages to reduce Risk Weighted Assets (RWA).
"Bond + CDS" = 0 risk weight?
Basel III rules (CVA risk) complicated this.
Regulatory Arbitrage.

## V. Exercises

**Exercise 1 (The Deutsche Bank Basis):**
Look at DB Bonds vs DB CDS.
During panic, Basis widens.
Bonds sell off faster (illiquid). CDS reacts slower.
Opportunity for liquidity providers.

**Exercise 2 (Sovereign Basis):**
Argentina Bond vs CDS.
Bond prices factor in Recovery Value distinctively (Legal jurisdiction).
CDS factors in ISDA auction outcome.
Huge basis during default negotiation (2000bps).

## VI. References
-   Choudhry, M. *The Credit Default Swap Basis*.
-   Barclays. *Credit Strategy: Trading the Basis*.
