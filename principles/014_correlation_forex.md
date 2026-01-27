# Correlation in Forex: Multi-Asset Risk Analysis

## I. Introduction

Currency pairs exhibit significant correlations due to shared economic relationships. Understanding these correlations is essential for portfolio construction, risk management, and avoiding overexposure.

## II. Mathematical Foundation

### Definition 2.1 (Pearson Correlation Coefficient)
For two return series X and Y:
$$\rho_{XY} = \frac{Cov(X,Y)}{\sigma_X \sigma_Y} = \frac{E[(X-\mu_X)(Y-\mu_Y)]}{\sigma_X \sigma_Y}$$

### Definition 2.2 (Sample Correlation)
$$r_{XY} = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^n (x_i - \bar{x})^2} \sqrt{\sum_{i=1}^n (y_i - \bar{y})^2}}$$

### Theorem 2.1 (Correlation Bounds)
$$-1 \leq \rho_{XY} \leq 1$$

**Interpretation:**
- ρ = 1: Perfect positive correlation
- ρ = 0: No linear correlation
- ρ = -1: Perfect negative correlation

## III. Forex Correlation Patterns

### 3.1 Major Correlations
| Pair 1 | Pair 2 | Typical ρ | Reason |
|--------|--------|-----------|--------|
| EUR/USD | GBP/USD | +0.80 | Both vs USD |
| EUR/USD | USD/CHF | -0.85 | Inverse USD |
| AUD/USD | NZD/USD | +0.90 | Commodity currencies |
| USD/JPY | EUR/JPY | +0.70 | JPY common factor |
| Gold | AUD/USD | +0.60 | Commodity link |

### 3.2 Triangle Arbitrage Relationship
For three currencies A, B, C:
$$\frac{A}{C} = \frac{A}{B} \times \frac{B}{C}$$

This creates inherent correlations among crosses.

## IV. Risk Implications

### 4.1 Portfolio Variance
For n positions with weights w_i:
$$\sigma_P^2 = \sum_{i=1}^n w_i^2 \sigma_i^2 + 2\sum_{i<j} w_i w_j \sigma_i \sigma_j \rho_{ij}$$

### Theorem 4.1 (Diversification Benefit)
Maximum diversification occurs when ρ = -1:
$$\sigma_P = |w_1\sigma_1 - w_2\sigma_2|$$

Minimum diversification when ρ = +1:
$$\sigma_P = w_1\sigma_1 + w_2\sigma_2$$

### 4.2 Effective Number of Positions
Highly correlated positions act as one:
$$N_{effective} = \frac{(\sum_i w_i)^2}{\sum_i w_i^2 + 2\sum_{i<j} w_i w_j \rho_{ij}}$$

## V. Correlation Instability

### 5.1 Time-Varying Correlation
Correlations change over time:
$$\rho_t = DCC-GARCH(\epsilon_t)$$

Dynamic Conditional Correlation models capture this.

### 5.2 Crisis Correlations
During market stress, correlations increase toward 1:
$$\rho_{crisis} >> \rho_{normal}$$

This "correlation breakdown" increases portfolio risk precisely when diversification is most needed.

### Theorem 5.1 (Asymmetric Correlations)
Correlations in down markets exceed those in up markets:
$$E[\rho | R < 0] > E[\rho | R > 0]$$

## VI. Practical Applications

### 6.1 Hedging
To hedge long EUR/USD, consider:
- Short GBP/USD (partial hedge, ~80%)
- Long USD/CHF (strong hedge, ~85%)

### 6.2 Position Sizing Adjustment
If opening correlated positions, reduce size:
$$AdjustedSize = Size \times \sqrt{1 - \rho^2}$$

### 6.3 Correlation Filter
Avoid opening new positions if:
$$\sum_{i \in existing} |\rho_{new,i}| > threshold$$

## VII. Correlation Calculation Methods

### 7.1 Rolling Window
$$r_t = Corr(X_{t-n:t}, Y_{t-n:t})$$

Common windows: 20, 50, 100 periods.

### 7.2 Exponentially Weighted
$$\hat{\rho}_t = \lambda \hat{\rho}_{t-1} + (1-\lambda) \frac{x_t y_t}{\hat{\sigma}_{x,t} \hat{\sigma}_{y,t}}$$

Gives more weight to recent observations.

### 7.3 Rank Correlation (Spearman)
$$r_s = 1 - \frac{6 \sum d_i^2}{n(n^2-1)}$$

Where d_i is the difference in ranks. More robust to outliers.

## VIII. Correlation Matrix Analysis

### 8.1 Eigenvalue Decomposition
The correlation matrix C can be decomposed:
$$C = V \Lambda V^T$$

Where Λ contains eigenvalues and V contains eigenvectors (principal components).

### 8.2 Interpretation
- First eigenvalue = Market factor
- Subsequent eigenvalues = Sector/style factors
- Residual = Idiosyncratic risk

## IX. Exercises

**Exercise 1:** Calculate correlation for:
X = [1%, 2%, -1%, 3%, 0%]
Y = [0.5%, 1.5%, -0.5%, 2%, 0.5%]

**Exercise 2:** Two positions with σ₁ = 10%, σ₂ = 15%, ρ = 0.6. Calculate portfolio σ for equal weights.

**Exercise 3:** Prove that ρ(X, -X) = -1.

**Exercise 4:** Design a correlation-based position filter for a portfolio maximum of 200% total exposure.

## X. References
- Jorion, P. (2007). Value at Risk
- Engle, R. (2002). Dynamic Conditional Correlation
- Rebonato, R. (2004). Volatility and Correlation
