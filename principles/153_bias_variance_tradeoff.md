# Bias-Variance Tradeoff: The Modeling Dilemma

## I. Executive Summary

Every predictive model suffers from two sources of error: **Bias** (Underfitting) and **Variance** (Overfitting). The search for Alpha is the search for the sweet spot between these two. A simple model (MA Cross) has high bias but valid variance. A complex model (Deep Neural Net) has low bias but high variance (it memorizes noise). "Generalization" is the art of balancing them.

## II. Formal Definitions

### Definition 2.1 (Error Decomposition)
Expected Error $E[(y - \hat{y})^2] = Bias^2 + Variance + IrreducibleNoise$.
-   **Bias:** $E[\hat{y}] - y$. (Simplicity error).
-   **Variance:** $E[(\hat{y} - E[\hat{y}])^2]$. (Sensitivity to noise).

### Definition 2.2 (The Tradeoff)
-   Increase Model Complexity $\implies$ Bias $\downarrow$, Variance $\uparrow$.
-   Decrease Model Complexity $\implies$ Bias $\uparrow$, Variance $\downarrow$.

## III. Theoretical Framework

### 3.1 Overfitting in Finance
Financial data has low Signal-to-Noise Ratio (SNR).
Complex models (Polynomial Regression, large LSTM) optimize $R^2 \to 1$ on Training Data.
But on Test Data, $R^2 \to -1$.
Why? The model learned the noise (Variance).
*Rule:* In finance, generally prefer High Bias / Low Variance models (Linear/Logistic) over complex ones unless you have massive data.

### 3.2 Detection
-   **High Bias:** Training Error High. Test Error High. (Dumb model).
-   **High Variance:** Training Error Low. Test Error High. (Hallucinating model).

## IV. Strategic Applications

### 4.1 Cross-Validation (K-Fold)
Never train on 100% of data.
Split into 5 Folds.
Train on 4, Test on 1. Repeat.
If Performance varies wildly between folds, Variance is too high.
*Action:* Reduce parameters.

### 4.2 Ensemble Methods (Bagging)
Averages multiple high-variance trees (Random Forest).
$Variance(Mean) = \frac{1}{N} Variance(Individual)$.
Averaging kills variance while preserving bias.
This is why Ensembles dominate Kaggle and Quant funds.

## V. Exercises

**Exercise 1 (Curve Fitting):**
Fit a 10-degree polynomial to 11 price points.
$R^2 = 1.0$. Perfect fit.
Predict point 12.
The polynomial likely shoots to $\pm \infty$.
This is "Runge's Phenomenon" (Extreme Variance).

**Exercise 2 (Data Size):**
As dataset size $N \to \infty$, Variance $\to 0$.
If you have infinite data, you can use infinite complexity.
HFT has data. Daily trading does not.
HFT can use Deep Learning. Daily strategies cannot.

## VI. References
-   Hastie, T., Tibshirani, R. *The Elements of Statistical Learning*.
-   Bishop, C. *Pattern Recognition and Machine Learning*.
