# Subprime Crisis Mechanics: The CDO Machine

## I. Executive Summary

The **2008 Financial Crisis** was fueled by the securitization chain: **Subprime Mortgages** $\to$ **MBS** $\to$ **CDO** $\to$ **CDO Squared**. The core failure was the underestimation of **Correlation**. Rating agencies assumed regional housing market declines were uncorrelated. When housing crashed nationally, the **Gaussian Copula** models failed, causing "Super Senior" AAA tranches to suffer total loss.

## II. Formal Definitions

### Definition 2.1 (The CDO of ABS)
Collateral: BBB tranches of Subprime MBS (Mezzanine).
Structure:
-   Senior (AAA): 80%.
-   Mezz (BBB): 15%.
-   Equity: 5%.
Alchemy: Taking BBB assets (risky) and turning 80% of them into AAA.
Logic: "Diversification." They won't all default at once.

### Definition 2.2 (Correlation Sensitivity)
Low Correlation $\implies$ Portfolio Variance low $\implies$ AAA safe.
High Correlation $\implies$ Portfolio acts like one asset $\implies$ AAA exposed to tail.
As housing turned, correlation went to 1.0.

## III. Theoretical Framework

### 3.1 The Magnetar Trade
Hedge Fund sponsors CDO.
Buys the Equity (Skin in game).
Buys CDS (Protection) on the Mezzanine tranches.
Net Short.
Rigged the machine to keep it going (supply of BBB bonds needed) to buy more puts.

### 3.2 Synthetic CDOs
Use CDS instead of Cash Bonds.
"Reference Portfolio."
Allowed infinite leverage on the housing market (Not limited by number of actual houses).
Magnified losses systemically (AIG).

## IV. Strategic Applications

### 4.1 Abacus 2007-AC1
Goldman Sachs / Paulson.
Paulson selected toxic assets. Shorted them.
Investors (IKB) Long.
"Adverse Selection" institutionalized.

### 4.2 Lessons Learned
-   Skin in the Game (Risk Retention) now mandatory.
-   Capital Charges for Resecuritization (CDO^2) prohibitive.
-   Agencies allow for "Model Error" margin.

## V. Exercises

**Exercise 1 (The Waterfall Jam):**
When defaults hit triggers.
Cash flow diverted to Super Senior.
Juniors (and CDO managers) starved.
Fire sales of assets.

**Exercise 2 (Rating Arbitrage):**
CDO bought assets yielding L+200 (BBB).
Issued liabs paying L+50 (AAA to BB blended).
Arb Spread locked in.
Relied entirely on the accuracy of the BBB rating.
Garbage In, Garbage Out.

## VI. References
-   Lewis, M. *The Big Short*.
-   Coval, J., et al. *The Economics of Structured Finance*.
