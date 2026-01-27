# Hypothesis Testing: Statistical Significance

## I. Executive Summary

Hypothesis testing provides a framework to distinguish "Skill" from "Luck." In trading, a "Null Hypothesis" usually posits that a strategy has no edge (Profit = 0). We only trade if we can reject this Null with high confidence (Statistics Significance). P-Hacking (testing millions of things until one works by chance) is the primary sin of Algo Trading.

## II. Formal Definitions

### Definition 2.1 (Null and Alternative)
-   $H_0$: $\mu = 0$ (Strategy has 0 expectancy).
-   $H_1$: $\mu > 0$ (Strategy has positive expectancy).

### Definition 2.2 (The T-Statistic)
$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$$
-   $\bar{x}$: Sample mean return.
-   $s$: Sample volatility.
-   $n$: Number of trades.

### Definition 2.3 (Types of Error)
-   **Type I (Alpha):** False Positive. You believe a bad strategy is good. (Cost: You lose money trading it).
-   **Type II (Beta):** False Negative. You reject a good strategy. (Cost: Opportunity cost).

## III. Theoretical Framework

### 3.1 P-Value
The probability of observing these results *if* the Null Hypothesis were true.
-   $p < 0.05$: Standard threshold (5%). "Statistically Significant."
-   *Warning:* In finance, with terabytes of data, finding $p < 0.05$ is easy. Bonferroni Correction requires adjustment for multiple tests.

### 3.2 Sample Size Power
Look at the formula for $t$. It has $\sqrt{n}$ in the numerator.
Even a tiny edge becomes "Significant" if $n$ is huge (HFT).
Conversely, a massive edging might fail significance if $n$ is small (Weekly trend following).

## IV. Strategic Applications

### 4.1 The t-test for Sharpe Ratio
Can we trust a Sharpe of 2.0?
If Track Record = 3 years.
Confidence Interval is tight.
If Track Record = 3 months.
Confidence Interval is huge. It could be luck.

### 4.2 Out-of-Sample (OOS) Testing
The ultimate hypothesis test.
1.  Optimize on 2010-2018 ($H_1$ found).
2.  Test on 2019-2023.
3.  If performance holds, $H_1$ is robust. If not, it was overfitting.

## V. Exercises

**Exercise 1 (Significance):**
System makes \$100/trade. Volatility \$500/trade.
After 25 trades.
$t = (100 - 0) / (500 / \sqrt{25}) = 100 / 100 = 1.0$.
Is this significant?
(No. T-stat of 1.0 implies $p \approx 0.16$. 16% chance this is pure luck).

**Exercise 2 (Type I vs II):**
Which is worse for a Prop Firm?
Type I (Allocating \$10M to a lucky idiot).
Type II (Firing a skilled trader during a drawdown).
(Type I is usually worse because of Leverage).

## VI. References
-   Aronson, D. *Evidence-Based Technical Analysis*.
-   Lopez de Prado, M. *Advances in Financial Machine Learning* (Deflated Sharpe Ratio).
