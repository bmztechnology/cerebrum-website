# Integrals: Accumulation and Pricing

## I. Executive Summary

Integration is the inverse of differentiation. While derivatives measure rates of change, integrals measure **Accumulation**. In trading, integration is used to calculate Total Volume (VWAP), Probability (Area under PDF), and the Fair Value of derivatives (Discounted Expectations). The Fundamental Theorem of Calculus links the flow (Marginal PnL) to the stock (Total Equity).

## II. Formal Definitions

### Definition 2.1 (Definite Integral)
The area under the curve $f(x)$ from $a$ to $b$.
$$\int_a^b f(x) dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*) \Delta x$$
(Riemann Sum).

### Definition 2.2 (Expectation as Integral)
The Expected Value of a random variable $X$ with PDF $f(x)$:
$$E[X] = \int_{-\infty}^{\infty} x \cdot f(x) dx$$
*Trading:* To price a stock, we integrate all future cash flows discounted to today.

## III. Theoretical Framework

### 3.1 Option Pricing (The Risk-Neutral Densities)
The price of a Call Option $C$ is the integral of the payoff $\max(S-K, 0)$ weighted by the probability density of the stock price $\phi(S)$.
$$C = e^{-rt} \int_K^{\infty} (S - K) \phi(S) dS$$
This integral essentially sums up every possible uniform where the option finishes In-The-Money.

### 3.2 Volume Weighted Average Price (VWAP)
Calculated by integrating Price $\times$ Volume over Time, divided by Total Volume.
$$VWAP = \frac{\int_0^T P(t)V(t) dt}{\int_0^T V(t) dt}$$
algo Benchmark: If you buy below the integral (VWAP), you beat the market average.

## IV. Strategic Applications

### 4.1 Accumulation/Distribution
If Price is flat but the Integral of Volume (On Balance Volume) is rising, it implies "Smart Money" is accumulating inventory.
$\int V \cdot \text{sign}(\Delta P) dt$.

### 4.2 Probability Cones
Integrate the Normal Distribution from $-1\sigma$ to $+1\sigma$.
Result: 0.682.
Translation: There is a 68.2% chance price lands in this cone at expiration.
Strategy: Sell Iron Condors outside the integration limits.

## V. Exercises

**Exercise 1 (Area under Curve):**
Cost of Carry.
Interest Rate $r(t)$ is rising linearly. $r(t) = 0.01 + 0.01t$.
Total Cost over 1 year?
$\int_0^1 (0.01 + 0.01t) dt = [0.01t + 0.005t^2]_0^1 = 0.01 + 0.005 = 0.015$.
Total Rate paid is 1.5%.

**Exercise 2 (Probability of Profit):**
Current Price 100. Call Strike 110. Volatility 20%.
PDF is LogNormal.
Probability ITM = $\int_{110}^{\infty} PDF(S) dS$.
Use `scipy.stats.norm.cdf(d2)`.
This integral tells you the Win Rate of the trade.

## VI. References
-   Stewart, J. *Calculus*.
-   Natenberg, S. *Option Volatility and Pricing*.
