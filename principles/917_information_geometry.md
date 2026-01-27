# Information Geometry

## I. Executive Summary

**Information Geometry** applies **Differential Geometry** (Riemannian Manifolds) to Probability Distributions. The "Distance" between two financial models is not Euclidean (straight line) but the **Fisher Information Metric**. This advanced math allows quantifying the "Curvature" of the statistical manifold, offering a rigorous definition of **Model Risk** and **Market Regimes**.

## II. Formal Definitions

### Definition 2.1 (The Statistical Manifold)
Consider the family of Normal Distributions $N(\mu, \sigma)$.
It forms a 2D surface (Manifold).
Coordinates: $(\mu, \sigma)$.
Metric Tensor $g_{ij}$: Fisher Information Matrix.
Measures how "distinguishable" two distributions are.
Distance between $N(0, 1)$ and $N(0.1, 1)$ is small.
Distance between $N(0, 1)$ and $N(0, 0.1)$ is huge (variance collapse).

### Definition 2.2 (Kullback-Leibler Divergence)
"Relative Entropy."
$D_{KL}(P || Q)$.
Asymmetric "distance" from True distribution P to Model Q.
Information Geometry shows that $D_{KL}$ approximates the geodesic distance on the manifold.
Used in Machine Learning (Variational Inference).

## III. Theoretical Framework

### 3.1 The Geometry of Arbitrage
If the Market Manifold has "curvature," linear models (CAPM) fail locally.
Arbitrage follows the "Geodesic" (Shortest path) between priced states.
curvature $\implies$ Interaction terms (Correlation dynamics).

### 3.2 Maximum Entropy (MaxEnt)
Jaynes.
Given constraints (Mean return, Variance), what is the "least committed" distribution?
The one maximizing Entropy.
In Geometry: The "flattest" distribution.
Provides the most robust prior for trading models.

## IV. Strategic Applications

### 4.1 Regime Detection
Moving along the manifold.
Sudden jump in Geodesic distance.
Signals regime shift (e.g., from Correlation=0 to Correlation=0.8).
Geometric anomaly detection.

### 4.2 Portfolio Optimization on Manifolds
Covariance matrices live on the SPD (Symmetric Positive Definite) Manifold.
Not a vector space (Can't subtract matrices blindly).
"Riemannian Optimization."
Geometrically correct way to average covariance matrices or move towards a target.
Better stability than standard linear shrinkage.

## V. Exercises

**Exercise 1 (The VIX Curvature):**
VIX is derived from option strip.
It represents the "Distance" in probability space?
Actually, variance swap is the "Log Contract."
Information Geometry links volatility to the curvature of the statistical space.

**Exercise 2 (Model Risk):**
How far is Model A (Gaussian) from Model B (Student-t) on the manifold?
If close, model choice doesn't matter.
If far, model risk is high.
Geometric auditing.

## VI. References
-   Amari, S. *Information Geometry and Its Applications*.
-   Meucci, A. *Risk and Asset Allocation (Geometric Approach)*.
