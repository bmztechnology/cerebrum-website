# Gradient Boosting (XGBoost): The Kaggle Killer

## I. Executive Summary

While Random Forest builds independent trees (Bagging), **Gradient Boosting** builds sequential trees (Boosting). Each new tree explicitly attempts to correct the errors (residuals) of the previous tree. It is an optimization algorithm (Gradient Descent) in function space. **XGBoost**, **LightGBM**, and **CatBoost** are the dominant implementations, winning 80% of structured data competitions and dominating modern Quant Finance.

## II. Formal Definitions

### Definition 2.1 (The Additive Model)
$$F_{m}(x) = F_{m-1}(x) + \nu \cdot h_m(x)$$
-   $F_{m-1}$: Current ensemble prediction.
-   $h_m$: New weak learner (tree).
-   $\nu$: Learning rate (shrinkage).

### Definition 2.2 (Fitting Residuals)
The new tree $h_m$ is trained on the residuals $r_i = y_i - F_{m-1}(x_i)$.
It focuses "attention" on the hard-to-predict examples.

## III. Theoretical Framework

### 3.1 Bias-Variance Profile
-   Random Forest: Reduces Variance (good for noisy data).
-   Boosting: Reduces Bias (good for finding subtle patterns).
*Risk:* Boosting can overfit noise effectively if not regularized (Early Stopping).

### 3.2 XGBoost Innovations
-   **Regularization:** L1/L2 penalties built into the tree splitting objective.
-   **Sparsity Aware:** Handles missing data automatically.
-   **Weighted Quantile Sketch:** Fast approximate splitting for massive data.

## IV. Strategic Applications

### 4.1 Alpha Combination
Input: 100 weak signals (MA Cross, RSI, Sentiment...).
Target: Forward Return.
XGBoost figures out the non-linear "Recipe":
"If Sentiment is High, ignore RSI. If Sentiment Low, weight RSI x2."
It acts as a dynamic Meta-Model.

### 4.2 Feature Interactions
SHAP (Shapley Additive Explanations) values derived from Boosting models show *how* features interact.
"RSI is bullish, but its contribution is cancelled out by High Volatility."

## V. Exercises

**Exercise 1 (Learning Rate):**
Low learning rate ($\nu = 0.01$) needs many trees (10,000). High accuracy.
High learning rate ($\nu = 0.1$) needs fewer trees (100). Fast, but less accurate.
Always optimize $\nu$ vs $N\_estimators$.

**Exercise 2 (Overfitting):**
Boosting continues to minimize Train Error until 0.
Validation Error usually dips then rises (U-shape).
**Early Stopping:** Stop training when Validation Error rises for 10 rounds.

## VI. References
-   Chen, T., & Guestrin, C. *XGBoost: A Scalable Tree Boosting System*.
-   Friedman, J. *Greedy Function Approximation: A Gradient Boosting Machine*.
