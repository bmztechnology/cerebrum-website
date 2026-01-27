# Returns Based Style Analysis RBSA: The Forensic

## I. Executive Summary

**Returns-Based Style Analysis (RBSA)** (Sharpe, 1992) infers a fund's effective asset allocation by regressing its historical returns against a set of style indices (Large Value, Small Growth, etc.). Unlike **Holdings-Based Analysis** (which looks at actual positions), RBSA is "forensic"—it reveals how the fund *behaved*, regardless of what the manager claimed to own. It suffers from **Multicollinearity** but detects **Style Drift** effectively.

## II. Formal Definitions

### Definition 2.1 (Quadratic Programming)
Minimize variance of tracking error:
$$ \min Var(R_p - \sum w_i R_i) $$
Subject to:
$\sum w_i = 1$ (Fully invested).
$w_i \ge 0$ (Long only constraint).
The resulting weights $w_i$ represent the "Effective Mix."

### Definition 2.2 (R-Squared)
$R^2$ of the regression measures how much of the return is explained by Style Factors.
$1 - R^2$ = Selection Return (Alpha).
If $R^2 = 99\%$, the manager is a "Closet Indexer."

## III. Theoretical Framework

### 3.1 Holdings vs Returns
Holdings: Snapshot at month end.
Returns: Activity during the month.
Window Dressing: Manager buys Apple on Dec 31 to show it in annual report. RBSA ignores this (since returns didn't reflect Apple).
RBSA reveals the truth.

### 3.2 Determining the Basis
Indices must be:
1.  Mutually Exclusive.
2.  Exhaustive.
3.  Liquid.
Standard Sharpe Basis: Bills, Intermediate Bonds, Long Bonds, Corp Bonds, Large Value, Large Growth, Med Cap, Small Cap, Non-US. (12 Factors).

## IV. Strategic Applications

### 4.1 Style Drift Detection
Fund labeled "Small Cap Value."
RBSA shows coefficients shifting to "Large Cap Growth" over time.
Manager is chasing hot stocks.
Warning signal.

### 4.2 Fee Justification
If RBSA shows portfolio can be replicated by 60% SPY + 40% AGG with $R^2=98\%$.
Fee should be 10bps.
If Manager charges 1.5%, they are extracting value.

## V. Exercises

**Exercise 1 (Leverage):**
If Fund is 1.5x levered S&P 500.
Constraint $\sum w_i = 1$ forces RBSA to break.
Must relax constraints (allow sum > 1) or include "Leverage Factor".

**Exercise 2 (Shorting):**
Hedge Funds.
Need unconstrained regression (allow negative weights).
"Long/Short" RBSA.

## VI. References
-   Sharpe, W. *Asset Allocation: Management Style and Performance Measurement*.
-   Lucas, L. & Riepe, M. *The Role of Returns-Based Style Analysis*.
