# Regularization: Taming the Model

## I. Executive Summary

When a model has too many parameters (Freedom), it overfits. **Regularization** imposes a penalty on complexity, forcing the model to be "simple" unless the data screams otherwise. It is the mathematical implementation of Occam's Razor. In quantitative finance, LASSO and Ridge regression are standard tools to select factors without fitting noise.

## II. Formal Definitions

### Definition 2.1 (Cost Function with Penalty)
$$J(\theta) = \text{MSE}(\theta) + \lambda \cdot P(\theta)$$
-   $\lambda$: Regularization Strength (Hyperparameter).

### Definition 2.2 (Ridge Regression - L2)
$P(\theta) = \sum \theta_i^2$.
Shrinks all coefficients towards zero but not *to* zero.
Good for correlated factors (Multicollinearity).

### Definition 2.3 (LASSO Regression - L1)
$P(\theta) = \sum |\theta_i|$.
Forces weak coefficients to **exactly zero**.
Performs **Feature Selection** automatically.

## III. Theoretical Framework

### 3.1 Geometric Interpretation
-   **Ridge:** Intersection of Ellipse (MSE) and Circle (L2). Touch point is rarely on axis.
-   **Lasso:** Intersection of Ellipse and Diamond (L1). Corners of diamond are on the axis ($\theta_i=0$).
This sparsity makes Lasso ideal for interpreting "What matters" in a macro model with 100 inputs.

### 3.2 Elastic Net
Combines L1 and L2.
$\lambda_1 \sum |\theta| + \lambda_2 \sum \theta^2$.
Best of both worlds: Selection (L1) + Stability (L2).

## IV. Strategic Applications

### 4.1 Factor Zoo Taming
You have 100 potential predictors (Momentum, Value, Volatility, Sentiment...).
Run LASSO.
It sets 95 coefficients to 0.
It tells you: "Only Momentum and Sentiment matter right now."
This prevents "Over-betting" on redundant indicators.

### 4.2 Portfolio Optimization
Markowitz tends to produce extreme weights (-300% Short, +400% Long).
Add L2 Regularization to the weights: $\min w^T \Sigma w + \lambda \sum w_i^2$.
Result: A diversified portfolio with reasonable weights.

## V. Exercises

**Exercise 1 (Limit):**
If $\lambda \to \infty$:
Coefficients $\theta \to 0$.
Model becomes a flat line (Mean).
Bias is Maximum. Variance is 0.

**Exercise 2 (Scale):**
Why standardize inputs ($Z$-score) before Regularization?
(If $X_1$ is Price (1000) and $X_2$ is Yield (0.05), a small $\theta_1$ has huge effect. The penalty $\theta^2$ treats them equally. Unscaled data breaks Ridge/Lasso).

## VI. References
-   Tibshirani, R. (1996). *Regression Shrinkage and Selection via the Lasso*.
-   Zou, H., & Hastie, T. *Regularization and Variable Selection via the Elastic Net*.
