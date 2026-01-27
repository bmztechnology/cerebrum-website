# Kalman Filters: Dynamic State Estimation

## I. Executive Summary

The Kalman Filter (1960) is the algorithm that guided Apollo 11 to the moon. In finance, it separates the "Signal" (True Price/Trend) from the "Measurement Noise" (Bid-Ask bounce, market microstructure). Unlike Moving Averages which have fixed lag, Kalman Filters adaptively update their gain based on the uncertainty of the system, providing the **Optimal Linear Estimator** for dynamic hedge ratios and betas.

## II. Formal Definitions

### Definition 2.1 (State Space Model)
1.  **State Equation (Hidden):** $x_k = F x_{k-1} + w_k$ (Process Noise).
2.  **Measurement Equation (Observed):** $z_k = H x_k + v_k$ (Measurement Noise).
In trading: $x_k$ is the "True Hedge Ratio" (Beta). $z_k$ is the observed price returns.

### Definition 2.2 (The Update Cycle)
1.  **Predict:** Estimate next state based on physics (model).
2.  **Measure:** Get new data.
3.  **Update:** Compute **Kalman Gain** $K$.
    $$x_{new} = x_{pred} + K (z - H x_{pred})$$
    If Measurement Noise $v_k$ is high, $K \to 0$ (Trust Model).
    If Process Noise $w_k$ is high, $K \to 1$ (Trust Data).

## III. Theoretical Framework

### 3.1 Adaptive Beta
Standard OLS calculates $\beta$ using a fixed window (e.g., 60 days).
Kalman Filter assumes $\beta$ is a "Random Walk" that evolves.
It updates $\beta$ instantly on every tick.
*Result:* Superior hedging performance during regime shifts.

### 3.2 Pairs Trading Application
Spread $y_t = \beta_t x_t + \epsilon_t$.
Use Kalman Filter to estimate $\beta_t$ dynamically.
Entry Signal: $z\text{-score} = (y_t - \hat{\beta}_t x_t) / \sqrt{Var(Prediction)}$.

## IV. Strategic Applications

### 4.1 HFT Market Making
True Price $P^*$ is hidden.
Observed Trades $P_{obs}$ include noise.
Kalman Filter estimates $P^*$ and Velocity $v^*$.
Market Maker sets quotes around $P^*$, not $P_{obs}$, avoiding adverse selection from noise traders.

### 4.2 Mean Reversion Speed Estimation
Estimate the $\theta$ (Mean Reversion Speed) as a state variable.
If $\theta$ drops near 0, stop mean reversion trading (Process is becoming Random Walk).

## V. Exercises

**Exercise 1 (Gain Logic):**
Volatility spikes massive (Data is noisy).
What happens to Kalman Gain?
(Gain decreases. The filter "slows down" reaction to avoid chasing noise).
Volatility drops (Data is clean).
What happens to Gain?
(Gain increases. Filter converges rapidly to new value).

**Exercise 2 (Comparison):**
EMA vs Kalman.
EMA is a special case of Kalman Filter where the Noise Ratio is constant.
Kalman is "Smart EMA" that changes its alpha automatically.

## VI. References
-   Kalman, R.E. *A New Approach to Linear Filtering and Prediction*.
-   Chan, E. *Algorithmic Trading* (Python implementation).
