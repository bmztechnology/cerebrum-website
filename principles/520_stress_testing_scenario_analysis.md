# Stress Testing Scenario Analysis: Hypothetical

## I. Executive Summary

**Stress Testing** complements statistical measures (VaR/ES) by evaluating portfolio performance under specific, extreme hypothetical scenarios. Regulators (CCAR in US, EBA in EU) mandate stress tests (e.g., "Severely Adverse Scenario": Unemployment 10%, Stocks -50%). It identifies vulnerabilities that historical data (used in VaR) might miss due to structural breaks or unprecedented events.

## II. Formal Definitions

### Definition 2.1 (Types of Scenarios)
1.  **Historical:** Replay 2008 Lehman, 1987 Black Monday, 2020 Covid.
2.  **Hypothetical:** "US-China War," "Cyber Attack Grid Down," "Bitcoin to Zero."
3.  **Reverse Stress Test:** "What scenario would break the bank?" (Kill shot analysis).

### Definition 2.2 (Sensitivity Analysis)
Single factor shocks.
-   Rates +200bps.
-   VIX +20 points.
-   Oil -50%.
Linear approximation ("Greeks") vs Full Revaluation.
Full Revaluation is required for options (Gamma/Convexity).

## III. Theoretical Framework

### 3.1 Macro-Financial Linkages
How to translate "GDP down 5%" into "Defaults in Commercial Real Estate"?
Satellite Models.
GDP $\to$ Unemployment $\to$ Vacancy Rates $\to$ CRE Prices $\to$ Loan Losses.
Model Risk is high in these transmission mechanisms.

### 3.2 Correlation Breakdown
Stress tests must assume correlations go to 1.0 (or -1.0 depending on exposure).
Diversification benefit set to zero.
"Stress VaR" usually calculated using 2008 correlations.

## IV. Strategic Applications

### 4.1 Capital Planning
If Stress Test shows capital falls below minimum (CET1 4.5%).
Bank must suspend dividends/buybacks.
Fed CCAR process determines shareholder payout capacity.

### 4.2 Liquidity Stress Test
LCR (Liquidity Coverage Ratio).
Scenario: 3 notch rating downgrade + 10% deposit run.
Do we have enough HQLA (High Quality Liquid Assets) to survive 30 days?

## V. Exercises

**Exercise 1 (Crowded Trades):**
Stress testing "Fire Sale."
If we sell \$10B of High Yield.
Price impact model.
Feedback loop: Price drops $\implies$ Margin Call $\implies$ More selling.

**Exercise 2 (Wrong Way Risk):**
Counterparty correlation.
You bought Put Options on S&P 500 from Lehman Brothers.
Scenario: S&P 500 crashes.
Put Option is ITM (You win).
But Lehman defaults (You lose).
Net result: Loss.

## VI. References
-   Federal Reserve. *Dodd-Frank Act Stress Test (DFAST) Methodology*.
-   Borio, C. *Stress Testing Macro Stress Testing*.
