# Recovery Rate Modeling: Loss Given Default

## I. Executive Summary

**Recovery Rate ($R$)** is the percentage of par value recovered by bondholders after a default. **Loss Given Default (LGD = $1-R$)** determines the severity of the loss. Recovery rates are stochastic, cyclical (lower in recessions), and dependent on the seniority of the debt (Senior Secured > Subordinated). Incorrect recovery assumptions led to massive mispricing in the 2008 crisis.

## II. Formal Definitions

### Definition 2.1 (Seniority Ladder)
-   **Super Senior / DIP Financing:** 100% Recovery.
-   **Senior Secured (1st Lien):** 60-80%.
-   **Senior Unsecured:** 30-50% (Standard CDS measures this).
-   **Subordinated:** 0-20%.
-   **Equity:** 0%.

### Definition 2.2 (The Auction Mechanism)
CDS settles via auction.
Buyers and Sellers submit limit orders for the defaulted bonds.
Final Price sets the cash settlement.
Cheapest-to-Deliver (CTD) option: If company has multiple bonds, the cheapest one sets the price.

## III. Theoretical Framework

### 3.1 Recovery-Default Correlation
$\rho(PD, LGD) > 0$.
When defaults are high (Recession), asset values are low, so Recoveries are low.
Double whammy.
Models that assume constant Recovery (40%) underestimate tail risk.

### 3.2 Implied Recovery
If we have CDS and Bond prices, can we solve for $PD$ and $R$?
No. $Spread \approx PD \times (1-R)$.
Infinitely many pairs of $(PD, R)$ satisfy the equation.
Need "Digital Default Swaps" or different seniority CDS to isolate variables.
Standard convention: Fix $R=40\%$ and solve for $PD$.

## IV. Strategic Applications

### 4.1 Recovery Swaps
Pure bet on Recovery Rate.
Fixed Recovery vs Realized Recovery.
Seller of Swap pays Realized, receives Fixed (e.g., 40%).
If Realized is 10%, Seller wins.
Used by distressed funds betting on asset liquidation values.

### 4.2 Capital Structure Arb
Long Senior Bond / Short Junior Bond.
Betting on Recovery gap widening.
In bankruptcy, Senior gets equity in NewCo, Junior gets wiped out.
Spread between them reflects the "Option on solvency."

## V. Exercises

**Exercise 1 (The GM Default):**
Senior Unsecured.
GM bondholders got "Old GM" claims.
Recovery was effectively warrants + small cash.
Total value evolved over years.
CDS settled immediately at auction price (~12 cents).
Holdouts often got more later.

**Exercise 2 (Zero Recovery):**
Financials (Banks).
Lehman.
Assets are intangible/derivative. Evaporate instantly.
Bank recovery rates are historically lower than Industrials (tangible factories).
Subordinated Bank Debt (CoCos) designed to have Zero recovery (Write-down).

## VI. References
-   Altman, E.I. *Default Recovery Rates and LGD in Credit Risk Modeling*.
-   Moody’s. *Annual Default Study*.
