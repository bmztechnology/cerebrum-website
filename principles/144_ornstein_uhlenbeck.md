# Ornstein-Uhlenbeck: The Physics of Mean Reversion

## I. Executive Summary

Asset prices like Stocks or Crypto tend to drift (Random Walk). But variables like **Volatility (VIX)**, **Interest Rates**, and **Forex Crosses** tend to revert to a long-term average. The **Ornstein-Uhlenbeck (OU)** process is the standard SDE for modeling this elasticity. It behaves like a spring (Hooke's Law): the further it stretches, the stronger the force pulling it back.

## II. Formal Definitions

### Definition 2.1 (The Vasicek Model SDE)
$$dx_t = \theta (\mu - x_t) dt + \sigma dW_t$$
-   $\mu$: Long term mean (The Anchor).
-   $\theta$: Rate of mean reversion (The Spring Constant). High $\theta \implies$ Fast reversion.
-   $\sigma$: Volatility of the shock.

### Definition 2.2 (The Solution)
$$E[x_t] = x_0 e^{-\theta t} + \mu (1 - e^{-\theta t})$$
As $t \to \infty$, $E[x_t] \to \mu$.

## III. Theoretical Framework

### 3.1 Stationary Distribution
Unlike GBM (where variance grows $\propto T$), OU variance is bounded.
$$Var(x_t) \to \frac{\sigma^2}{2\theta} \text{ as } t \to \infty$$
We can calculate confident "Bands" (e.g., Bollinger Bands) that technically hold forever.

### 3.2 Half-Life
How long does it take to recover half the distance to the mean?
$$t_{1/2} = \frac{\ln(2)}{\theta}$$
Critical metric for Pairs Trading. If $t_{1/2}$ is longer than your capital holding period capacity, the trade is dead.

## IV. Strategic Applications

### 4.1 Statistical Arbitrage Entry/Exit
1.  Fit OU parameters to the Spread.
2.  Calculate $Z = (Spread - \mu) / \sqrt{Var}$.
3.  Entry: $Z > 2$.
4.  Exit: $E[T] = t_{1/2}$. (Expect to hold for the half-life).

### 4.2 Interest Rate Modeling (Vasicek)
Rates cannot go to infinity (usually).
OU models rates better than Random Walk.
*Flaw:* Standard OU allows negative interest rates. (Which turned out to be true in 2015-2020 for EUR/JPY!).

## V. Exercises

**Exercise 1 (Calibration):**
Regress $x_{t+1} - x_t$ against $x_t$.
$\Delta x = A + B x_t + \epsilon$.
Compare to $dx = \theta\mu dt - \theta x_t dt$.
So slope $B = -\theta \Delta t$.
Intercept $A = \theta \mu \Delta t$.
This simple OLS regression gives you the Alpha parameters for an algo.

**Exercise 2 (Risk):**
What if $\theta \approx 0$?
(The process is a Random Walk. Mean Reversion strategies will lose money indefinitely. Always test $H_0: \theta = 0$ [ADF Test] before trading).

## VI. References
-   Uhlenbeck, G.E., & Ornstein, L.S. *On the Theory of Brownian Motion*.
-   Vasicek, O. *An Equilibrium Characterization of Term Structure*.
