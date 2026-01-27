# Correlation & Covariance: Portfolio Mathematics

## I. Executive Summary

Correlation measures the linear relationship between two variables. Covariance measures how they move together in absolute terms. These metrics are the engine of **Modern Portfolio Theory (MPT)**. The "Only Free Lunch in Finance" is Diversification, which relies mathematically on combining assets with correlation $\rho < 1$.

## II. Formal Definitions

### Definition 2.1 (Covariance)
$$Cov(X,Y) = E[(X-\mu_X)(Y-\mu_Y)]$$
-   Positive: Move together.
-   Negative: Move opposite.
-   Zero: Independent.

### Definition 2.2 (Pearson Correlation $\rho$)
Standardized Covariance.
$$\rho_{X,Y} = \frac{Cov(X,Y)}{\sigma_X \sigma_Y}$$
Rank: $-1 \le \rho \le 1$.

## III. Theoretical Framework

### 3.1 Modern Portfolio Theory (Markowitz)
Portfolio Variance ($\sigma_p^2$) is NOT the weighted average of asset variances.
$$\sigma_p^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B\sigma_A\sigma_B\rho_{AB}$$
*Key Insight:* If $\rho < 1$, the portfolio risk is *lower* than the individual assets. If $\rho = -1$, risk can theoretically be eliminated.

### 3.2 Breakdown in Crisis
Correlations are non-stationary.
"In a crisis, all correlations go to 1."
When panic hits, traders sell *everything* (Stocks, Gold, Crypto) to raise Cash. Diversification fails when you need it most.

## IV. Strategic Applications

### 4.1 Pairs Trading (Statistical Arb)
Find two assets with historical $\rho > 0.9$ (e.g., Coke & Pepsi, or EURUSD & GBPUSD).
-   If spread widens (correlation breaks), Short the winner / Buy the loser.
-   Bet on convergence.

### 4.2 The Beta Hedge
Hedging explicit market risk.
$\beta = \frac{Cov(Asset, Market)}{Var(Market)}$.
To hedge a stock portfolio (Beta 1.5): Short S&P 500 futures equal to $1.5 \times Value$.

## V. Exercises

**Exercise 1 (Math):**
Asset A Vol: 10%. Asset B Vol: 10%. Correlation: 0.
Portfolio 50/50.
$\sigma_p = \sqrt{0.5^2(0.01) + 0.5^2(0.01)} = \sqrt{0.0025 + 0.0025} = \sqrt{0.005} \approx 7.07\%$.
Result: Risk reduced from 10% to 7%.

**Exercise 2 (Spurious Correlation):**
"Ice cream sales correlate with Shark attacks."
Why? (Both driven by Summer/Heat).
This is "Confounding Variable." Always check causality.

## VI. References
-   Markowitz, H. (1952). *Portfolio Selection*.
-   Alexander, C. *Market Models*.
