# Granger Causality: The Direction of Information

## I. Executive Summary

Clive Granger (Nobel Prize) formulated a statistical definition of causality: "Variable X causes Variable Y if predictions of Y based on the history of both X and Y are better than predictions based solely on the history of Y." It does not prove philosophical causality, but it proves **Predictive Utility**. It is the tool to map the "Food Chain" of global markets.

## II. Formal Definitions

### Definition 2.1 (The Test)
Compare two VAR models:
1.  Restricted: $Y_t = \sum \alpha Y_{t-i} + \epsilon_1$ (Only history of Y).
2.  Unrestricted: $Y_t = \sum \alpha Y_{t-i} + \sum \beta X_{t-i} + \epsilon_2$ (History of Y + X).
F-Test: If RSS (Residual Sum Squares) of (2) is significantly lower than (1), then $X \to Y$.

### Definition 2.2 (Instantaneous Causality)
If correlation of residuals $\epsilon_1, \epsilon_2$ is non-zero.
Happens when causation is faster than the data frequency (e.g., within the same 1-minute bar).

## III. Theoretical Framework

### 3.1 The Information Cascade
Information flows from Liquid to Illiquid assets.
Futures $\to$ Spot.
Large Cap $\to$ Small Cap.
US Markets $\to$ Emerging Markets.
Granger Causality maps this directed graph.

### 3.2 Spurious Causality
If both X and Y are driven by Z (Common Factor), X might appear to "Granger Cause" Y.
Essential to include Z in the VAR model (Multivariate Granger Causality).

## IV. Strategic Applications

### 4.1 Leading Indicators Identification
Run matrix of pairwise Granger tests on 50 assets.
Identify the "Source" nodes (Assets that cause others but are not caused by others).
*Example:* 10Y Treasury Yield often Granger-causes USDJPY.
*Strategy:* Watch Yields. Trade Yen.

### 4.2 Crypto Markets
Bitcoin $\to$ Altcoins.
Granger test confirms lag is ~10-60 minutes during hype cycles.
Strategy: Momentum transmission. If BTC breaks out, buy strong Alts immediately.

## V. Exercises

**Exercise 1 (Logic):**
Does the Rooster crowing *cause* the Sunrise?
Granger Test: Yes. Crowing precedes Sunrise and predicts it.
Philosophical Truth: No.
*Lesson:* We are traders, not philosophers. We trade the prediction, not the metaphysical truth.

**Exercise 2 (Latency):**
If market is efficient, Granger Causality should fade to 0 lag.
Why does it persist?
(Institutional friction, manual execution delays, diffusion of information through supply chains).

## VI. References
-   Granger, C.W.J. *Investigating Causal Relations by Econometric Models*.
-   Hamilton, J.D. *Time Series Analysis*.
