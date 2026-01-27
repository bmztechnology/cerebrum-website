# Bayesian Networks: Probabilistic Reasoning

## I. Executive Summary

Frequentist ML (Neural Nets) gives a point prediction: "Price will be 105." **Bayesian Networks** give a distribution: "Price will be 105 with $\sigma=2$, given that Inflation is High." They model the **Causal Graph** of the market ($X \to Y \to Z$). They allow us to reason under uncertainty, handle missing data, and incorporate **Prior Beliefs** (Expert knowledge).

## II. Formal Definitions

### Definition 2.1 (Directed Acyclic Graph - DAG)
Nodes = Variables (Inflation, Rates, SPX).
Edges = Conditional Dependencies ($P(Rates | Inflation)$).
Joint Probability:
$$P(X_1, \dots, X_n) = \prod_{i=1}^n P(X_i | Parents(X_i))$$

### Definition 2.2 (Inference)
Given Evidence $E$ (Result), what is the probability of Cause $C$?
$$P(C|E) = \frac{P(E|C)P(C)}{P(E)}$$
(Bayes Rule applied to the graph).

## III. Theoretical Framework

### 3.1 Markov Blanket
The set of parents, children, and children's parents of a node.
Only variables in the Markov Blanket are informative.
All other variables are conditionally independent.
*Value:* Feature Selection. Don't look at entire macro economy, only the Markov Blanket of AAPL.

### 3.2 Parameter Learning vs Structure Learning
-   **Parameter:** Given the graph (Expert says "Rates hit Stocks"), learn the strength.
-   **Structure:** Learn the graph itself from data. (Granger Causality on steroids).

## IV. Strategic Applications

### 4.1 Stress Testing (Counterfactuals)
Graph: Oil $\to$ CPI $\to$ Fed $\to$ Rates $\to$ TechStocks.
Query: "What if Oil hits $150?"
Propagate simple probabilities through the graph.
Result: TechStocks down 15%.
Neural Nets cannot explain *why*. Bayes Net shows the path.

### 4.2 Missing Data Imputation
If "CPI" data is delayed.
Bayes Net infers the likely CPI from "Oil" and "Wages" (Parents).
Use this inferred value to trade before the official release.

## V. Exercises

**Exercise 1 (Prior Belief):**
Data says "Tech goes up when Rates go up" (Spurious regime 2024).
Expert Prior: "Tech goes down when Rates go up."
Bayesian update: Weighted average.
The Prior prevents the model from overfitting a short-term anomaly.

**Exercise 2 (Complexity):**
Exact inference is NP-Hard.
Use Approximate Inference (MCMC - Markov Chain Monte Carlo) or Variational Inference for large graphs.

## VI. References
-   Pearl, J. *Probabilistic Reasoning in Intelligent Systems*.
-   Koller, D., & Friedman, N. *Probabilistic Graphical Models*.
