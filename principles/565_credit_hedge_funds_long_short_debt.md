# Credit Hedge Funds: Long Short Debt

## I. Executive Summary

**Credit Hedge Funds** focus on the debt markets: Corporate Bonds, Loans, CDOs, and Sovereigns. Unlike Fixed Income Arbitrage (which is math/rates focused), Credit Funds are **Fundamental**. They analyze creditworthiness, default probability, and recovery rates. Strategies include **Long/Short Credit**, **Capital Structure Arbitrage**, and **Distressed**.

## II. Formal Definitions

### Definition 2.1 (Spread Trading)
Betting on Credit Spreads (Yield - Risk Free Rate).
Long High Yield Bond (Short Credit protection).
Hedge Interest Rate risk with Treasuries.
Net result: Bet that the company will not default and spread will tighten.

### Definition 2.2 (Negative Basis)
CDS trades tighter than the Bond spread.
Arbitrage: Buy Bond, Buy CDS.
Lock in risk-free profit?
Counterparty risk in CDS and Liquidity risk in Bond prevent perfect arb.

## III. Theoretical Framework

### 3.1 The Credit Cycle
Expansion: Easy money, low defaults, spreads tight.
Downturn: Defaults rise, spreads blow out.
Credit funds maximize beta in expansion, switch to Short/Distressed in downturn.
Timing the "Credit Event."

### 3.2 Asymmetry of Credit
Upside: Coupons (Yield). Limited capital gain (Par).
Downside: Default (0).
"Picking pennies in front of steamroller" applies here too.
Shorting is hard (High carry cost of paying coupons).
Best short: CDS (Pay premium, huge payout on default).

## IV. Strategic Applications

### 4.1 Structured Credit
CLOs (Collateralized Loan Obligations).
Buying the Equity Tranche (First loss, high yield).
Buying the AAA Tranche (Leveraged yield).
"The Arbitrage" is the difference between asset yield and liability cost in the SPV.

### 4.2 Direct Lending
Banks retreated after 2008 (Regulations).
Hedge Funds / Private Credit filled the void.
Lending directly to middle-market companies.
Illiquid, high yield, "Shadow Banking."

## V. Exercises

**Exercise 1 (Recovery Rate):**
Senior Secured vs Unsecured.
In default, Secured gets 80c, Unsecured gets 10c.
Pair trade: Long Senior / Short Junior.

**Exercise 2 (Duration Hedging):**
Pure credit exposure requires stripping out the Treasury curve.
$Yield_{corp} = Yield_{tsy} + Spread$.
Short Treasury futures against the bond holding.

## VI. References
-   Caouette, J. *Managing Credit Risk*.
-   Fabozzi, F. *Handbook of Fixed Income Securities*.
