# Clustering (K-Means / DBSCAN): Unsupervised Structure

## I. Executive Summary

Supervised learning requires Labels (which are hard to define in finance). **Unsupervised Learning** (Clustering) finds hidden structures in unlabeled data. It groups assets into **Sectors, Regimes, or Styles** solely based on their statistical properties. It is the primary tool for Portfolio Diversification (defining "True" sectors vs "Nominal" sectors) and Regime Identification.

## II. Formal Definitions

### Definition 2.1 (K-Means)
Partition data into $K$ clusters by minimizing variance within clusters.
Algorithm:
1.  Guess $K$ centroids.
2.  Assign points to nearest centroid.
3.  Move centroid to mean of points.
4.  Repeat.

### Definition 2.2 (DBSCAN)
Density-Based Spatial Clustering of Applications with Noise.
Groups points that are packed closely together.
Points in low-density regions are marked as **Noise** (Outliers).
*Advantage:* Does not need to know $K$ beforehand. Handles weird shapes.

## III. Theoretical Framework

### 3.1 The Silhouette Score
How good is the cluster?
$$S = \frac{b - a}{\max(a, b)}$$
-   $a$: Mean distance to own cluster (Compactness).
-   $b$: Mean distance to neighbor cluster (Separation).
-   $S \to 1$: Perfect.

### 3.2 Hierarchical Clustering (Dendrogram)
Builds a tree of assets.
Top: Market.
Branch 1: Equities / Bonds.
Branch 2: Tech / Energy.
Branch 3: AAPL / MSFT.
Allows "cutting" the tree at any correlation level to define sectors.

## IV. Strategic Applications

### 4.1 Statistical Industry Classification
GICS says "Amazon is Consumer Discretionary."
Correlations say "Amazon is Tech."
Cluster on Correlations.
Result: A "True" Tech sector ETF that hedges properly.
Avoids "Fake Diversification" (Buying AMZN and MSFT thinking they are different sectors).

### 4.2 Market Regime Clustering
Cluster daily features (Vol, Trend, Spread).
Three clusters emerge:
1.  Low Vol, Positive Trend (Bull).
2.  High Vol, Negative Trend (Crash).
3.  Low Vol, No Trend (Chop).
Train separate Algos for each cluster.

## V. Exercises

**Exercise 1 (K-Means Failure):**
K-Means assumes spherical clusters.
If correlations form a "Banana Shape" (Non-linear dependence), K-Means chops it wrongly.
Use Spectral Clustering or DBSCAN.

**Exercise 2 (Pairs Selection):**
Cluster 500 stocks into 50 clusters.
Pick pairs *within* clusters.
These are the most mean-reverting candidates.

## VI. References
-   MacQueen, J. *Some Methods for classification and Analysis of Multivariate Observations*.
-   Ester, M., et al. *A Density-Based Algorithm for Discovering Clusters*.
