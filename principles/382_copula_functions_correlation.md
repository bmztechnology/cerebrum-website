# Copula Functions Correlation: Dependency Structure

## I. Executive Summary

**Copulas** are mathematical functions that couple separate marginal distributions (e.g., Returns of Stock A and Stock B) into a **Multivariate Distribution**. They allow the modeling of **Dependency** separately from the individual behaviors. This is vital because linear correlation (Pearson) captures only the center of the distribution, whereas Copulas can model **Tail Dependence** (Stocks crash together but rise independently).

## II. Formal Definitions

### Definition 2.1 (Sklar's Theorem)
Any multivariate joint distribution $H(x,y)$ can be written as:
$$ H(x,y) = C(F(x), G(y)) $$
-   $F, G$: Marginal Cumulative Distribution Functions (CDFs).
-   $C$: Copula Function (mapping $[0,1]^2 \to [0,1]$).
The Copula *is* the dependency structure.

### Definition 2.2 (Types)
-   **Gaussian Copula:** Implies zero tail dependence. (Used in 2008 CDOs). "Correlation is constant."
-   **t-Copula:** Has tail dependence. (Variables can have extreme events together).
-   **Clayton/Gumbel:** Asymmetric dependence (Crash together, rally separately).

## III. Theoretical Framework

### 3.1 Limitations of Linear Correlation
Correlation $\rho$ is a measure of linear dependence.
If $Y = X^2$, $\rho \approx 0$ (even though perfectly dependent).
Correlation is not invariant to transformation.
Copula dependence (Rank Correlation - Kendall's Tau) is invariant.

### 3.2 Tail Dependence Coefficient
$\lambda_L = \lim_{u \to 0} P(U < u | V < u)$.
Given Stock A crashes (bottom 1%), prob Stock B crashes?
Gaussian: $\lambda_L = 0$ (Unless perfect correlation).
Student-t: $\lambda_L > 0$.
Markets exhibit significant Tail Dependence.

## IV. Strategic Applications

### 4.1 CDO Pricing
The standard Gaussian Copula model (Li) failed because it assumed defaults were independent in the tail.
When House Prices fell 20% (Tail), Defaults correlated perfectly.
Model said probability was $10^{-6}$. Reality was 1.

### 4.2 Multi-Asset Options
Rainbow Options (Best of / Worst of).
Pricing depends heavily on correlation.
Using a Gaussian Copula underestimates the value of "Worst-Of" Puts in a crisis (since assets crash together more often than Gaussian predicts).
Conservative traders use t-Copulas or "Stochastic Correlation."

## V. Exercises

**Exercise 1 (Calibration):**
Calibrate marginals first (fit distributions to S&P and FTSE).
Then transform data to Uniform $[0,1]$.
Then fit Copula to the Uniform data (Maximum Likelihood).
Two-step process.

**Exercise 2 (Vine Copulas):**
High dimensional dependency (> 3 assets).
Build "Vines" (trees of pair-copulas).
Models complex relationships (A depends on B, B depends on C...).

## VI. References
-   Li, D.X. *On Default Correlation: A Copula Function Approach*.
-   Nelsen, R.B. *An Introduction to Copulas*.
