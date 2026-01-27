# Cointegration: The Rubber Band Effect

## I. Executive Summary

Correlation is short-term; Cointegration is long-term. Two drunkards walking out of a bar might have 0 correlation in their steps (random walks), but if they are tied together by a bubbly rope (invisible constraint), they cannot drift infinitely apart. This concept, pioneered by Engle and Granger, is the foundation of **Pairs Trading** and **Mean Reversion** strategies in non-stationary markets.

## II. Formal Definitions

### Definition 2.1 (Cointegration)
Two series $X_t, Y_t$ are $I(1)$ (Random Walks).
They are cointegrated if there exists a $\beta$ such that:
$$Z_t = Y_t - \beta X_t$$
is $I(0)$ (Stationary).
$Z_t$ is the **Spread** or Equilibrium Error.

### Definition 2.2 (Error Correction Model - VECM)
If cointegration exists, dynamics are:
$$\Delta Y_t = \alpha (Y_{t-1} - \beta X_{t-1}) + \sum \gamma \Delta Y_{t-i} + \epsilon$$
The $\alpha$ term is the "Speed of Adjustment." It pulls price back to equilibrium.

## III. Theoretical Framework

### 3.1 Engle-Granger 2-Step
1.  Regress $Y$ on $X$ to find $\beta$. Get residuals $e_t$.
2.  Test $e_t$ for stationarity (ADF Test).
    -   If Stationary $\implies$ Cointegrated.
    -   If Unit Root $\implies$ Spurious Regression.

### 3.2 Johansen Test
Multivariate test for $>2$ assets.
Can find multiple cointegrating vectors (e.g., Coke vs Pepsi + DrPepper).
Eigenvalue decomposition of the matrix.

## IV. Strategic Applications

### 4.1 Statistical Arbitrage (StatArb)
1.  Identify pair (e.g., GOOG / GOOGL).
2.  Compute Spread $Z_t$.
3.  Compute Mean $\mu_z$ and StdDev $\sigma_z$.
4.  **Entry:** If $Z_t > \mu_z + 2\sigma_z$, Short Spread (Short GOOG, Long GOOGL).
5.  **Exit:** If $Z_t = \mu_z$.

### 4.2 Triangulation (Forex)
EUR/USD, GBP/USD, EUR/GBP.
Synthetic EUR/GBP = EUR/USD / GBP/USD.
Actual EUR/GBP should match Synthetic.
If spread diverges $\implies$ Triangular Arbitrage.

## V. Exercises

**Exercise 1 (Half-Life):**
The spread follows OU Process: $dZ = -\theta Z dt + \sigma dW$.
$\theta = 0.1$ (daily).
Half-Life $HL = \ln(2) / \theta \approx 0.693 / 0.1 = 6.93$ days.
Expected holding period is ~7 days.
If $HL > 30$ days, the reversion is too slow to cover swap costs.

**Exercise 2 (Risk):**
What kills a Pairs Trade?
(Fundamental structural break. M&A news, Bankruptcy. The "Rubber Band" snaps. Cointegration breaks down, and the spread drifts to infinity).

## VI. References
-   Engle, R.F., & Granger, C.W.J. *Co-integration and Error Correction*.
-   Vidyamurthy, G. *Pairs Trading: Quantitative Methods and Analysis*.
