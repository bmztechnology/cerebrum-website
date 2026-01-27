# ARIMA Models: Forecasting the Future

## I. Executive Summary

ARIMA (AutoRegressive Integrated Moving Average) is the gold standard for forecasting stationary time series. It decomposes a signal into its past values (AR), past errors (MA), and the differencing required to make it stationary (I). While classic ARIMA fails in chaotic nonlinear markets, it remains the benchmark against which all ML models (LSTM, Transformers) must be compared.

## II. Formal Definitions

### Definition 2.1 (AR(p) - AutoRegressive)
Current value depends on $p$ past values.
$$X_t = c + \sum_{i=1}^p \phi_i X_{t-i} + \epsilon_t$$

### Definition 2.2 (MA(q) - Moving Average)
Current value depends on $q$ past shocks (errors).
$$X_t = \mu + \epsilon_t + \sum_{j=1}^q \theta_j \epsilon_{t-j}$$

### Definition 2.3 (ARIMA(p,d,q))
Combines AR, MA, and Differencing order $d$.
$$(1 - \sum_{i=1}^p \phi_i L^i) (1 - L)^d X_t = (1 + \sum_{j=1}^q \theta_j L^j) \epsilon_t$$
Where $L$ is the Lag operator ($L X_t = X_{t-1}$).

## III. Theoretical Framework

### 3.1 The Box-Jenkins Method
1.  **Identification:** Use ACF (AutoCorrelation Function) and PACF (Partial ACF) to estimate $p, d, q$.
    -   Sharp cutoff in PACF at lag $k \implies AR(k)$.
    -   Sharp cutoff in ACF at lag $k \implies MA(k)$.
2.  **Estimation:** Maximum Likelihood Estimation (MLE) for coefficients.
3.  **Diagnostic:** Check residuals. They must be White Noise.

### 3.2 Seasonal ARIMA (SARIMA)
Markets have seasonality (Day/Night, Monday/Friday).
SARIMA adds $(P, D, Q)_s$ terms to model cycles of length $s$.

## IV. Strategic Applications

### 4.1 Mean Reversion Trading
If an asset follows an AR(1) process: $X_t = 0.8 X_{t-1} + \epsilon$.
Long-term mean is 0.
If $X_t = 2.0$, the model predicts $X_{t+1} = 1.6$.
Prediction: Market will drop. Short.

### 4.2 The "Random Walk" Test
If best fit is ARIMA(0,1,0), then $X_t = X_{t-1} + \epsilon$.
This is a Random Walk.
Forecast is a flat line.
*Conclusion:* Discard the strategy. No edge exists.

## V. Exercises

**Exercise 1 (Manual Forecast):**
Model: $X_t = 0.5 X_{t-1} - 0.2 X_{t-2}$.
$X_{t-1} = 10, X_{t-2} = 8$.
$X_t = 0.5(10) - 0.2(8) = 5 - 1.6 = 3.4$.
The market is dampening.

**Exercise 2 (Stationarity):**
Why is $d$ important?
If you fit AR(1) to a Trending series (Non-stationary), $\phi_1 \to 1$.
The model becomes unstable.
Always differentiate until ADF Test passes ($d=1$).

## VI. References
-   Box, G.E.P., & Jenkins, G.M. *Time Series Analysis*.
-   Hyndman, R.J. *Forecasting: Principles and Practice*.
