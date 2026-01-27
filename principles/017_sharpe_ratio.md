# Sharpe Ratio: Risk-Adjusted Performance Measurement

## I. Introduction

The Sharpe Ratio, developed by William Sharpe in 1966, measures excess return per unit of risk. It is the most widely used risk-adjusted performance metric in finance.

## II. Mathematical Definition

### Definition 2.1 (Sharpe Ratio)
$$SR = \frac{E[R_p] - R_f}{\sigma_p}$$

Where:
- R_p = Portfolio return
- R_f = Risk-free rate
- σ_p = Portfolio standard deviation

### Definition 2.2 (Ex-Post Sharpe Ratio)
$$\hat{SR} = \frac{\bar{R}_p - R_f}{s_p}$$

Where:
- R̄_p = Sample mean return
- s_p = Sample standard deviation

### 2.3 Annualization
$$SR_{annual} = SR_{period} \times \sqrt{n}$$

Where n = number of periods per year.
- Daily: n = 252
- Weekly: n = 52
- Monthly: n = 12

## III. Properties and Interpretation

### Theorem 3.1 (Scale Invariance)
The Sharpe Ratio is invariant to leverage:
$$SR(\lambda \cdot R_p) = SR(R_p) \text{ for } \lambda > 0$$

**Proof:**
$$SR(\lambda R_p) = \frac{\lambda E[R_p] - R_f}{\lambda \sigma_p} \approx \frac{\lambda(E[R_p] - R_f)}{\lambda \sigma_p} = SR(R_p)$$

(Assumes R_f scaling with position) ∎

### 3.2 Interpretation Guidelines
| Sharpe Ratio | Quality |
|--------------|---------|
| < 0 | Negative (worse than risk-free) |
| 0 - 0.5 | Poor |
| 0.5 - 1.0 | Acceptable |
| 1.0 - 2.0 | Good |
| 2.0 - 3.0 | Excellent |
| > 3.0 | Exceptional (verify) |

### Theorem 3.2 (Relationship to Information Ratio)
If benchmark is risk-free rate:
$$IR = SR$$

## IV. Statistical Significance

### 4.1 Standard Error of Sharpe Ratio
$$SE(SR) \approx \sqrt{\frac{1 + \frac{SR^2}{2}}{n}}$$

For large n: SE(SR) ≈ 1/√n

### 4.2 Confidence Interval
$$SR \pm z_{\alpha/2} \times SE(SR)$$

### Theorem 4.1 (Minimum Track Record)
To distinguish SR from zero at 95% confidence:
$$n > \frac{3.84}{SR^2}$$

For SR = 0.5: need ~15 years of data!

## V. Limitations

### 5.1 Assumptions
1. Returns are normally distributed (violated in practice)
2. Past predicts future (not guaranteed)
3. Standard deviation captures all risk (ignores tail risk)

### 5.2 Manipulation Susceptibility
Sharpe Ratio can be artificially inflated by:
- Selling OTM options (collect premium, hide tail risk)
- Illiquid investments (smoothed returns)
- Leverage timing

### 5.3 Time Aggregation Bias
Averaging effect:
$$Var(R_{long}) < n \times Var(R_{short})$$ if returns are autocorrelated.

## VI. Alternative Measures

### Definition 6.1 (Sortino Ratio)
$$Sortino = \frac{E[R_p] - R_f}{Downside Deviation}$$

$$DD = \sqrt{E[\min(R - R_f, 0)^2]}$$

Only penalizes downside volatility.

### Definition 6.2 (Calmar Ratio)
$$Calmar = \frac{Annual Return}{Maximum Drawdown}$$

### Definition 6.3 (Omega Ratio)
$$\Omega(\theta) = \frac{\int_\theta^\infty (1 - F(r))dr}{\int_{-\infty}^\theta F(r)dr}$$

Ratio of probability-weighted gains to losses above/below threshold θ.

## VII. Practical Application

### 7.1 Strategy Comparison
Compare strategies using:
$$Decision = \arg\max_i SR_i$$

Subject to statistical significance.

### 7.2 Portfolio Optimization
Maximize Sharpe Ratio:
$$\max_w \frac{w^T \mu - R_f}{\sqrt{w^T \Sigma w}}$$

Solution: Tangency portfolio.

### 7.3 Trading System Evaluation
For a trading system:
$$SR = \frac{Expectancy \times \sqrt{TradesPerYear}}{\sigma_{per\_trade}}$$

## VIII. Exercises

**Exercise 1:** Calculate annualized Sharpe Ratio for monthly returns with mean 2%, std 5%, risk-free 0.5%.

**Exercise 2:** How many years of data needed to confirm SR = 1.0 is statistically significant at 95%?

**Exercise 3:** Compare strategies: A has SR = 1.2 over 3 years, B has SR = 0.8 over 10 years. Which is more reliable?

**Exercise 4:** Prove that adding a risk-free asset to a portfolio doesn't change its Sharpe Ratio.

## IX. References
- Sharpe, W. (1966). Mutual Fund Performance
- Lo, A. (2002). The Statistics of Sharpe Ratios
- Bailey, D. & López de Prado, M. (2012). The Sharpe Ratio Efficient Frontier
