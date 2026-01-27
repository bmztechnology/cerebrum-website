# Girsanov Theorem: Changing the Measure

## I. Executive Summary

Girsanov Theorem enables the **Change of Measure**. In Finance, we mostly care about moving from the **Physical Measure ($\mathbb{P}$)**—where good stocks go up and bad stocks go down—to the **Risk-Neutral Measure ($\mathbb{Q}$)**—where *all* assets grow at the risk-free rate $r$. This transformation removes the need to estimate "Alpha" or "Drift" when pricing derivatives.

## II. Formal Definitions

### Definition 2.1 (Radon-Nikodym Derivative)
To change likelihoods from $\mathbb{P}$ to $\mathbb{Q}$, we introduce a density process (Z):
$$\frac{d\mathbb{Q}}{d\mathbb{P}} = Z_t = \exp\left( -\int \theta dW_t - \frac{1}{2} \int \theta^2 dt \right)$$
where $\theta$ is the Market Price of Risk.

### Definition 2.2 (Girsanov's Result)
If $W_t^\mathbb{P}$ is a Brownian Motion under $\mathbb{P}$, then:
$$W_t^\mathbb{Q} = W_t^\mathbb{P} + \int \theta ds$$
is a Brownian Motion under $\mathbb{Q}$.
This "shifts the drift" of the process.

## III. Theoretical Framework

### 3.1 Eliminating Drift
Real World SDE: $dS = \mu S dt + \sigma S dW^\mathbb{P}$.
We want SDE: $dS = r S dt + \sigma S dW^\mathbb{Q}$.
We set $\theta = \frac{\mu - r}{\sigma}$ (Sharpe Ratio).
Girsanov proves mathematically that we can view the world through "Risk Neutral Goggles" where the drift is $r$.

### 3.2 Completeness
If we can find a unique measure $\mathbb{Q}$ (via Girsanov), the market is **Complete** (All payoffs can be replicated).
If $\sigma$ is stochastic or jumps exist, there are infinite $\mathbb{Q}$s. The market is Incomplete. Pricing is non-unique.

## IV. Strategic Applications

### 4.1 Quant Trading
Quants do NOT predict $\mu$ (Direction).
They price relative value using $\mathbb{Q}$.
If Market Price $\ne$ Model Price($\mathbb{Q}$), arbitrage exists.
This is pure math arbitrage, relying on Girsanov validity.

### 4.2 Measure Choice
-   **Risk Neutral measure ($\mathbb{Q}$):** For Pricing.
-   **Physical measure ($\mathbb{P}$):** For Risk Management (VaR).
*Fatal Error:* Using $\mathbb{Q}$ to calculate Real World Value at Risk. (Underrates the drift risk of crashing assets).

## V. Exercises

**Exercise 1 (Sharpe Ratio):**
The "Kernel" $\theta = (\mu - r) / \sigma$.
This is the Market Price of Risk.
Girsanov says we "eat" the drift by changing the probability weights of the paths.
High drift paths become less probable in $\mathbb{Q}$.

**Exercise 2 (Logic):**
Does Girsanov change the Volatility?
(No. Volatility $\sigma$ describes the quadratic variation. It is invariant under measure change. Only Drift changes).

## VI. References
-   Musiela, M., & Rutkowski, M. *Martingale Methods in Financial Modelling*.
-   Baxter, M., & Rennie, A. *Financial Calculus*.
