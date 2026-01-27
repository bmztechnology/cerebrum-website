# CDO Tranching Structure: The Waterfalls

## I. Executive Summary

A **Collateralized Debt Obligation (CDO)** pools hundreds of bonds/loans and slices the risk into **Tranches**. Detailed "Waterfall" rules dictate who gets paid first. **Senior Tranches (AAA)** get paid first and are safe unless defaults are massive. **Equity Tranches** get paid last (High yield, high risk) and typically hold the "first loss" piece.

## II. Formal Definitions

### Definition 2.1 (Tranche Hierarchy)
1.  **Senior (AAA):** Attachment 30%. Detachment 100%. Protected by 30% subordination.
2.  **Mezzanine (BBB):** Attachment 10%. Detachment 30%.
3.  **Equity (Unrated):** Attachment 0%. Detachment 10%. Absorbs the first 10% of losses.

### Definition 2.2 (Correlation Sensitivity)
-   **Equity Tranche:** Long Correlation. Wants assets to default *together* (or not at all). If uncorrelated, small defaults wipe it out guaranteed. If correlated, chance of "Zero Defaults" exists.
-   **Senior Tranche:** Short Correlation. Wants diversification. High correlation means "Tail Risk" that wipes out everything.

## III. Theoretical Framework

### 3.1 Gaussian Copula (Li's Model)
Used to model the joint default distribution.
Parameter $\rho$ determines clustering.
The model allowed AAA ratings on Subprime CDOs by assuming low correlation between housing markets in Florida vs California.
Model failed when $\rho \to 1$.

### 3.2 The Arbitrage
Yield(Assets) > Yield(Liabilities).
Weighted Avg Coupon of Loans = 8%.
Weighted Cost of CDO Tranches = 6%.
Manager keeps the 2% Net Interest Margin (NIM).
Incentive to buy risky, high-yielding junk to fill the CDO.

## IV. Strategic Applications

### 4.1 Relative Value
Buy Information (Equity). Sell Insurance (Senior).
Betting on Low Correlation.
Or Buy Junior / Sell Senior?
Trading the "Capital Structure."

### 4.2 Distressed CDOs
2009-2011.
AAA CDOs trading at 20 cents.
Underlying assets recovered to 60 cents.
Massive profit for distressed funds buying the "toxic waste."

## V. Exercises

**Exercise 1 (The Cliff):**
Mezzanine Tranche.
If Defaults < 10%: Return 100%.
If Defaults > 30%: Return 0%.
Binary payout profile over the range.
Highly leveraged bet on macro economy.

**Exercise 2 (Correlation Smile):**
Equity Tranche implies Correlation of 0.8.
Senior Tranche implies Correlation of 0.4.
Market expects idiosyncratic risk (bad for equity) but fears systemic risk (bad for senior)?
Base correlation skew.

## VI. References
-   Duffie, D., & Garleanu, N. *Risk and Valuation of Collateralized Debt Obligations*.
-   Lewis, M. *The Big Short*.
