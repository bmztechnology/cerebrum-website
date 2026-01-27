# GARCH Models: Volatility Clustering

## I. Executive Summary

Financial volatility is not constant (Homoscedastic); it comes in waves (Heteroscedastic). Quiet periods are followed by quiet periods; shocks are followed by more shocks. **GARCH (Generalized Autoregressive Conditional Heteroscedasticity)** models this phenomenon. It predicts *future volatility* based on past volatility and past shocks. It is the industry standard for Risk Management (VaR).

## II. Formal Definitions

### Definition 2.1 (The ARCH Effect)
Engle (Nobel Prize) observed that large residuals tend to cluster.
$$Var_t = \omega + \alpha \epsilon_{t-1}^2$$

### Definition 2.2 (GARCH(1,1))
Bollerslev generalized it.
$$\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2$$
-   $\omega$: Baseline variance (Long Run Average).
-   $\alpha$: Reaction to recent shock (The "Spike").
-   $\beta$: Persistence (Memory). How long the shock lasts.
-   Constraint: $\alpha + \beta < 1$ for stability.

## III. Theoretical Framework

### 3.1 Mean Reverting Volatility
If $\sigma_t$ spikes high, the term $(1 - \alpha - \beta)$ pulls it back to long-run $\omega$.
Volatility always reverts to the mean eventually. (Unlike Price).

### 3.2 Leverage Effect (EGARCH)
Standard GARCH assumes variance reacts equally to positive and negative shocks ($\epsilon^2$).
In reality, Crashes (negative returns) spike vol more than Rallies. **EGARCH** models this asymmetry.

## IV. Strategic Applications

### 4.1 Dynamic Stop Losses
Don't use fixed stops (e.g., 50 pips).
Use GARCH-predicted volatility.
If GARCH says tomorrow's range will be high, Widen Stops.
If GARCH says low, Tighten Stops.

### 4.2 Pricing Options
If GARCH predicts rising volatility, Options are cheap today. Buy Straddles.
If GARCH predicts falling volatility, Sell Straddles.

## V. Exercises

**Exercise 1 (Persistence):**
Model A: $\alpha=0.1, \beta=0.8$. Sum=0.9.
Model B: $\alpha=0.2, \beta=0.4$. Sum=0.6.
Which market remembers a shock longer?
(Model A. High Beta means the "Half-Life" of the shock is long using $\ln(0.5)/\ln(\alpha+\beta)$).

**Exercise 2 (Input):**
What do you feed into GARCH? Prices?
(No. You feed in the **Residuals** or Returns of the asset).

## VI. References
-   Bollerslev, T. (1986). *Generalized Autoregressive Conditional Heteroscedasticity*.
-   Engle, R.F. *Autoregressive Conditional Heteroscedasticity with Estimates of the Variance of United Kingdom Inflation*.
