# Random Walk Theory: Market Efficiency Hypothesis

## I. Introduction

Random Walk Theory suggests that stock price changes are random and unpredictable. This has profound implications for technical analysis and trading strategy development.

## II. Mathematical Foundation

### Definition 2.1 (Random Walk)
A price series follows a random walk if:
$$P_t = P_{t-1} + \epsilon_t$$

Where ε_t is white noise: E[ε_t] = 0, Var(ε_t) = σ², Cov(ε_t, ε_s) = 0 for t ≠ s.

### Definition 2.2 (Random Walk with Drift)
$$P_t = \mu + P_{t-1} + \epsilon_t$$

Where μ is the drift (trend).

### Theorem 2.1 (Non-Predictability)
If prices follow a random walk:
$$E[P_{t+1} | P_t, P_{t-1}, ...] = P_t + \mu$$

Past prices provide no additional predictive power beyond current price.

## III. Efficient Market Hypothesis (EMH)

### 3.1 Forms of Efficiency
**Weak Form:** Prices reflect all historical price information
**Semi-Strong:** Prices reflect all public information
**Strong Form:** Prices reflect all information (public and private)

### 3.2 Implications for Trading
| EMH Form | Technical Analysis | Fundamental Analysis |
|----------|-------------------|---------------------|
| Weak | Useless | May work |
| Semi-Strong | Useless | Useless |
| Strong | Useless | Useless |

## IV. Statistical Tests

### 4.1 Runs Test
Tests for non-random patterns in price sequences.
$$Z = \frac{R - E[R]}{\sigma_R}$$

Where R = number of runs.

### 4.2 Autocorrelation Test
$$\rho_k = \frac{Cov(r_t, r_{t-k})}{Var(r_t)}$$

Random walk implies ρ_k = 0 for all k ≠ 0.

### 4.3 Variance Ratio Test
$$VR(q) = \frac{Var(r_t(q))}{q \cdot Var(r_t)}$$

Random walk implies VR(q) = 1.

## V. Evidence Against Pure Random Walk

### 5.1 Documented Anomalies
- Momentum effect
- Mean reversion
- Calendar effects
- Volatility clustering

### 5.2 Interpretation
Markets are approximately efficient but not perfectly so, allowing skilled traders potential edge.

## VI. Exercises

**Exercise 1:** If returns are random walk, what is best forecast for tomorrow's return?

**Exercise 2:** Calculate autocorrelation for returns [1%, -1%, 1%, -1%, 1%].

**Exercise 3:** Discuss implications of random walk for Sharpe ratio of any strategy.

## VII. References
- Fama, E. (1965). Random Walks in Stock Market Prices
- Lo, A. & MacKinlay, C. (1999). A Non-Random Walk Down Wall Street
- Malkiel, B. (1973). A Random Walk Down Wall Street
