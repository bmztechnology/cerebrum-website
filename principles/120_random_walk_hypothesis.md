# Random Walk Hypothesis: Market Efficiency

## I. Executive Summary

The Random Walk Hypothesis (RWH) states that stock price changes have the same distribution and are independent of each other. Past movement or trend of a stock price or market cannot be used to predict its future movement. It is the foundation of the **Efficient Market Hypothesis (EMH)**. If true, Technical Analysis is astrology and Active Management is futile.

## II. Formal Definitions

### Definition 2.1 (The Random Walk Model)
$$P_t = P_{t-1} + \epsilon_t$$
Where $\epsilon_t \sim N(0, \sigma^2)$ (White Noise).
Price today is Price yesterday plus a random shock.

### Definition 2.2 (Efficient Market Hypothesis - Semistrong)
Prices instantly reflect all publicly available information.
Therefore, neither Fundamental nor Technical analysis can generate excess returns (Alpha) consistently.

## III. Theoretical Framework

### 3.1 The Drunkard's Walk
Imagine a drunkard flipping a coin to step left or right.
After $N$ steps, his most likely position is the start (0), but his variance grows with Time.
Price dispersion $\propto \sqrt{Time}$.

### 3.2 Counter-Evidence (Behavioral)
Markets are made of humans (and algos programmed by humans). Humans are predictable.
-   **Momentum:** Trends exist (Violation of Independence).
-   **Mean Reversion:** Overreaction exists.
-   **Seasonality:** Liquidity cycles exist.

## IV. Strategic Applications

### 4.1 Variance Ratio Test (Lo & MacKinlay)
Tests RWH.
If Variance(2 days) equals $2 \times$ Variance(1 day), it's a Random Walk.
If $Var(2) > 2Var(1)$: Positive serial correlation (Trend).
If $Var(2) < 2Var(1)$: Negative serial correlation (Mean Reversion).

### 4.2 Hurst Exponent ($H$)
-   $H = 0.5$: Random Walk (Brownian Motion).
-   $H > 0.5$: Persistent (Trend).
-   $H < 0.5$: Anti-Persistent (Mean Reversion).

## V. Exercises

**Exercise 1 (Philosophy):**
If markets are 100% efficient, why do Prop Firms exist?
(Markets are mostly efficient, but not perfectly efficient. Traders sell "Liquidity" and "Price Discovery" services for a fee, which looks like Alpha).

**Exercise 2 (Options):**
Black-Scholes assumes RWH (Log-Normal prices).
Why does the Volatility Smile exist?
(Because the market creates Fat Tails, proving price is NOT a pure Random Walk).

## VI. References
-   Fama, E. *Efficient Capital Markets*.
-   Malkiel, B. *A Random Walk Down Wall Street*.
-   Lo, A., & MacKinlay, A.C. *A Non-Random Walk Down Wall Street*.
