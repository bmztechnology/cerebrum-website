# Sharpe Ratio Mechanics: Reward to Variability

## I. Executive Summary

The **Sharpe Ratio** is the industry standard for measuring Risk-Adjusted Return. It calculates the **Excess Return** generated per unit of **Total Risk** (Standard Deviation). A higher Sharpe Ratio implies better portfolio efficiency. However, it assumes normal distribution of returns, making it dangerous when evaluating options or strategies with negative skew (tail risk).

## II. Formal Definitions

### Definition 2.1 (Ex-Post Sharpe)
$$ SR = \frac{\bar{R}_p - \bar{R}_f}{\sigma_p} $$
-   $\bar{R}_p$: Average Portfolio Return.
-   $\sigma_p$: Sample Standard Deviation of Portfolio Return.
Annualized: $SR_{annual} = SR_{monthly} \times \sqrt{12}$.

### Definition 2.2 (The Limit)
Market Sharpe Ratio $\approx 0.4$ to $0.5$ (Long Term).
Warren Buffett / Renaissance Medallion > 1.0.
"Good" Strategy > 0.7.
Bernie Madoff = Infinite (No volatility, until he went to jail). "The Smoothing Bias."

## III. Theoretical Framework

### 3.1 Ranking
Asset A: Return 10%, Vol 20%. SR = 0.5.
Asset B: Return 6%, Vol 5%. SR = 1.2.
Which is better?
Asset B. You can leverage Asset B 4x to get Return 24%, Vol 20%.
Dominates Asset A.
Core principle of Risk Parity.

### 3.2 Time Aggregation
SR rises with time horizon?
No, Return scales with $T$. Vol scales with $\sqrt{T}$.
$SR \sim \sqrt{T}$.
A "High Frequency" Sharpe of 2.0 (Daily) might degrade if holding period lengthens (Mean reversion).

## IV. Strategic Applications

### 4.1 Manipulation
Writing Puts.
Small gains (Premium) every month. No volatility.
Sharpe Ratio looks huge (3.0).
Then Market crash. Loss -100%.
Sharpe Ratio ignores the "Third Moment" (Skewness) and "Fourth Moment" (Kurtosis).

### 4.2 Illiquidity Smoothing
Private Equity / Real Estate.
Assets not marked to market daily.
Vol appears artificially low.
SR inflated.
Desmoothing required for fair comparison.

## V. Exercises

**Exercise 1 (Negative Sharpe):**
If Return < Risk Free Rate.
SR is negative.
Higher Volatility computes to a "Less Negative" (higher) Sharpe?
Mathematical Quirk.
If Excess Return is negative, increasing risk increases the ratio (e.g., -5/10 = -0.5. -5/20 = -0.25).
Don't use Sharpe for losing portfolios.

**Exercise 2 (Relative Sharpe):**
Comparing Manager vs Benchmark.
Information Ratio is usually better.
Sharpe compares to Cash.

## VI. References
-   Sharpe, W. *The Sharpe Ratio*.
-   Lo, A. *The Statistics of Sharpe Ratios*.
