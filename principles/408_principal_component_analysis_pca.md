# Principal Component Analysis PCA: Factor Model

## I. Executive Summary

**Principal Component Analysis (PCA)** decomposes the movements of the Yield Curve into independent factors. Empirical analysis consistently shows that 3 factors explain >95% of variance: **Level** (Parallel shift), **Slope** (Steepening/Flattening), and **Curvature** (Butterfly). This decomposition allows traders to isolate specific risks and construct hedged portfolios (e.g., Level-Neutral Steepener).

## II. Formal Definitions

### Definition 2.1 (Eigenvalues)
Covariance matrix of yield changes for tenors (2Y, 5Y, 10Y, 30Y).
-   **PC1 (Level):** $\approx 90\%$ variance. All rates move same direction. Vector [1, 1, 1, 1].
-   **PC2 (Slope):** $\approx 5-8\%$ variance. Short vs Long. Vector [-1, -0.5, 0.5, 1].
-   **PC3 (Curvature):** $\approx 1-2\%$ variance. Ends vs Middle. Vector [1, -1, -1, 1].

### Definition 2.2 (Factor Loadings)
Sensitivity of each bond to the PC factors.
Bond $i$ return $\approx \beta_{i,L} F_L + \beta_{i,S} F_S + \beta_{i,C} F_C$.
Heding requires neutralizing the Betas.

## III. Theoretical Framework

### 3.1 Mean Reversion of PCA
PC scores tend to mean revert.
If Slope score is +3 sigma (Extreme Steepness), expect flattening.
If Level score is +3 sigma, rates might trend? (Level is often a Random Walk).
Slope and Curvature are stationary.

### 3.2 Residuals
PCA explains 99%.
The remaining 1% is "Idiosyncratic Noise" or "Rich/Cheap."
Stat arb traders bet on residuals reverting to zero.

## IV. Strategic Applications

### 4.1 Hedging
Duration Hedging only neutralizes PC1 (Level).
A Duration-Neutral portfolio may still have massive PC2 (Slope) risk.
"Immunization" requires hedging first 3 PCs.
Requires 3 distinct instruments (e.g., 2Y, 10Y, 30Y).

### 4.2 Value at Risk (VaR)
Using PCA for VaR reduces dimensionality from 30 points to 3 factors.
Simplifies computation.
"Factor VaR."

## V. Exercises

**Exercise 1 (The Butterfly):**
PC3 trade.
Long Wings (2Y, 30Y). Short Body (10Y).
Betting on Curvature increasing (Hump decreasing?).
Weights must be PC1 and PC2 neutral.

**Exercise 2 (Crisis Behavior):**
In crisis, correlation $\to$ 1.
PC1 variance explains 99%. Slope and Curvature vanish.
"One factor market."
PCA weights shift during regimes.

## VI. References
-   Litterman, R., & Scheinkman, J. *Common Factors Affecting Bond Returns*.
-   Jolliffe, I. *Principal Component Analysis*.
