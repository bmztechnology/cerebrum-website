# Decision Trees: The Flowchart of Alpha

## I. Executive Summary

A **Decision Tree** learns a hierarchy of if/else questions to classify data or predict values. Unlike black-box Neural Nets, Trees are "White Box"—interpretable. We can see exactly *why* the model made a trade ("Because RSI > 70 AND Vol < 10%"). While a single tree is weak and prone to overfitting, it is the building block of state-of-the-art Ensembles (Random Forest, XGBoost).

## II. Formal Definitions

### Definition 2.1 (Splitting Criterion - Entropy)
Information Gain.
$$Gain(S, A) = Entropy(S) - \sum \frac{|S_v|}{|S|} Entropy(S_v)$$
Select the feature $A$ that maximizes Information Gain (e.g., "Is RSI > 50?").
Reduces uncertainty the most.

### Definition 2.2 (Gini Impurity)
Alternative to Entropy (Used in CART).
$$Gini = 1 - \sum p_i^2$$
Faster to compute.
0 = Pure Node (All samples are same class).
0.5 = Random Node.

## III. Theoretical Framework

### 3.1 Recursive Partitioning
The algorithm greedily splits the space into rectangles.
High Variance: If you let the tree grow deep, it isolates every single data point (Overfitting).
Pruning: Cut branches that don't add significant Gain.

### 3.2 Non-Linear Interaction
Trees automatically capture interactions.
"If Vol > 20, then RSI behaves like X."
"If Vol < 20, then RSI behaves like Y."
Linear Regression cannot do this without manual interaction terms.

## IV. Strategic Applications

### 4.1 Regime Definition
Train a Tree to predict "Is Strategy Profitable?"
Features: VIX, Time, Spread.
Tree Output:
-   Node 1: VIX > 25 $\implies$ Loss.
-   Node 2: VIX < 25 AND Spread < 1 $\implies$ Profit.
Rule: "Only trade when VIX < 25 and Spread < 1."

### 4.2 Categorical Data
Trees handle categorical data (Monday, Tuesday...) natively.
Neural Nets require One-Hot Encoding.
Trees are robust to outliers (splitting at $X=100$ is same if outlier is 1000 or 1M).

## V. Exercises

**Exercise 1 (Greedy Logic):**
Why is a Tree "Greedy"?
(It picks the best split *now*. It does not look ahead to see if a sub-optimal split now leads to a perfect split later. This is why it is heuristic).

**Exercise 2 (Instability):**
Change one data point.
The whole tree structure can change.
This high variance is solved by Bagging (Random Forest).

## VI. References
-   Breiman, L. *Classification and Regression Trees*.
-   Quinlan, J.R. *C4.5: Programs for Machine Learning*.
