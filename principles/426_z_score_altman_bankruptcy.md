# Z Score Altman Bankruptcy: Discrimination

## I. Executive Summary

The **Altman Z-Score** (1968) is a linear discriminant model that predicts bankruptcy probability with >70% accuracy. It combines 5 ratios into a single score. It is the industry standard heuristic for assessing **Distress Risk**. Low scores ($Z < 1.8$) signal imminent failure, often preceding rating downgrades.

## II. Formal Definitions

### Definition 2.1 (The Formula)
$$ Z = 1.2X_1 + 1.4X_2 + 3.3X_3 + 0.6X_4 + 1.0X_5 $$
-   $X_1$: Working Capital / Assets (Liquidity).
-   $X_2$: Retained Earnings / Assets (Cumulative Profitability).
-   $X_3$: EBIT / Assets (ROA - Most powerful factor).
-   $X_4$: Market Value Equity / Book Value Liabilities (Leverage/Market Signal).
-   $X_5$: Sales / Assets (Asset Turnover).

### Definition 2.2 (Zones)
-   **Z > 3.0:** Safe Zone.
-   **1.8 < Z < 3.0:** Grey Zone.
-   **Z < 1.8:** Distress Zone.

## III. Theoretical Framework

### 3.1 Z-Double Prime (Z'')
Original model used "Market Value" of Equity.
For private firms, Z'' uses Book Value of Equity.
Coefficients re-weighted.
Vital for Middle Market lending.

### 3.2 Type I vs Type II Errors
-   Type I: Predicting safe when firm fails (Costly for lender).
-   Type II: Predicting fail when firm survives (Missed opportunity).
Cutoff 1.8 minimizes Type I errors.

## IV. Strategic Applications

### 4.1 Screening Tool
Portfolio Manager screens 1000 bonds.
Filter: Remove all $Z < 1.8$.
Quick quality control.
"Negative Screening."

### 4.2 Distance to Default Mapping
Z-Score correlates with Merton's Distance to Default.
Both capture Leverage and Volatility (proxy).
Z-score is accounting based. Merton is market based.
Best practice: Use both.

## V. Exercises

**Exercise 1 (Tech Companies):**
Low Assets. High R&D (Expenses reduce Retained Earnings).
X2 and X5 might be low.
Z-Score gives false positives for high growth asset-light firms.
Requires sector-specific adjustment.

**Exercise 2 (The Slide):**
Monitor Z-Score trend.
A slide from 4.0 to 2.5 is more alarming than a stable 2.0.
Momentum of deterioration matters.

## VI. References
-   Altman, E.I. *Financial Ratios, Discriminant Analysis and the Prediction of Corporate Bankruptcy*.
-   Moody's. *RiskCalc Methodology*.
