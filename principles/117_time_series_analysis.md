# Time Series Analysis: Stationarity & Integration

## I. Executive Summary

Financial data is Time Series data. But standard statistical tests (Linear Regression) fail on financial data because it is **Non-Stationary** (mean and variance change over time). Understanding Stationarity, Unit Roots, and Cointegration is essential for building robust econometric models (ARIMA, GARCH) that don't spurious results.

## II. Formal Definitions

### Definition 2.1 (Stationarity)
A process is (weakly) stationary if:
1.  Mean is constant ($E[X_t] = \mu$).
2.  Variance is constant ($Var(X_t) = \sigma^2$).
3.  Autocovariance relies only on lag $k$, not time $t$.

### Definition 2.2 (Integration I(d))
-   **I(0):** Stationary (White Noise).
-   **I(1):** Random Walk (Price). $P_t = P_{t-1} + \epsilon$.
    -   To make I(1) stationary, you must difference it once: $\Delta P = P_t - P_{t-1} = Returns$.

## III. Theoretical Framework

### 3.1 The Random Walk Hypothesis
If prices are I(1), the best predictor of tomorrow's price is today's price.
$E[P_{t+1}|P_t] = P_t$.
Result: You cannot forecast price levels using regression. You must forecast *returns* or *volatility*.

### 3.2 Spurious Regression
Regressing two random walks (e.g., AAPL price vs Bitcoin Price) will often give High $R^2$ just because both are trending up. This is fake.
*Solution:* Test residuals for stationarity.

## IV. Strategic Applications

### 4.1 Augmented Dickey-Fuller (ADF) Test
The industry standard test for Unit Roots.
-   $H_0$: Series is Non-Stationary (Has Unit Root).
-   $H_1$: Series is Stationary.
-   *Algo Rule:* Never feed raw prices into a neural network. Feed log-returns or differenced data if ADF p-value < 0.05.

### 4.2 Cointegration
If two Non-Stationary series $X_t, Y_t$ have a linear combination that IS Stationary ($\epsilon_t = Y_t - \beta X_t$ is I(0)).
-   These assets are "tied together" fundamentally.
-   Strategy: Trade the spread $\epsilon_t$ as Mean Reversion.

## V. Exercises

**Exercise 1 (Differentiation):**
Price: 100, 102, 101, 105.
First Difference (I(1)): 2, -1, 4.
Second Difference (I(2)): -3, 5.
Usually, returns (I(1)) are enough to induce stationarity.

**Exercise 2 (Logic):**
Why do Neural Networks fail on raw price?
(Because the distribution of inputs [1000, 2000] in training is completely different from test set [5000, 6000]. This is "Covariate Shift").

## VI. References
-   Hamilton, J.D. *Time Series Analysis*.
-   Box, G.E.P., & Jenkins, G.M. *Time Series Analysis: Forecasting and Control*.
