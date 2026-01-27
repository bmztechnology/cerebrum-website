# Risk Adjusted Performance Measures RAPM: Metrics

## I. Executive Summary

**RAPM** metrics normalize returns by the amount of risk taken. Beyond Sharpe and Treynor, advanced measures like **Modigliani-Modigliani ($M^2$)** express risk-adjusted performance in units of *Return* (percentage), making them intuitive. **Calmar Ratio** (Return / Max Drawdown) focuses on tail risk. **Omega Ratio** considers the entire distribution moments. The choice of metric dictates the optimal strategy (e.g., Calmar favors trend following).

## II. Formal Definitions

### Definition 2.1 ($M^2$ Measure)
Leverages the portfolio to match the Benchmark Volatility.
$$ M^2 = R_p^* - R_b $$
Where $R_p^*$ is the return of the levered portfolio ($SR_p \times \sigma_b + R_f$).
Result is in %.
"If the Portfolio had the same risk as the S&P 500, it would have earned X%."

### Definition 2.2 (Calmar Ratio)
$$ Calmar = \frac{CAGR}{MaxDrawdown} $$
Time horizon matters (usually 3 years).
Managed Futures target Calmar > 2.0.
Very hard to sustain.

## III. Theoretical Framework

### 3.1 The Denominator Problem
Sharpe/Treynor/Sortino all divide by Risk.
When Risk $\to$ 0, Ratio $\to$ Infinity.
Short Term Treasuries have huge Sharpe.
Does not imply they are the best investment for growth.
RAPM must be paired with Absolute Return targets.

### 3.2 Sterling Ratio
Variation of Calmar.
Uses "Average Drawdown" + "10% Cushion".
Less sensitive to single outlier crash.

## IV. Strategic Applications

### 4.1 Hedge Fund Screening
Investors screen by Sharpe > 1, Sortino > 1.5.
Managers engineer strategies to game these stats (e.g., selling far OTM puts).
"Sharpe Engineering."
Look for "Goosing the Sharpe" (smoothing returns).

### 4.2 Incentive Fees
If Performance Fee is based on Absolute Return.
Manager takes excessive risk.
If Fee is based on RAPM (Alpha).
Manager optimizes trade-off.
Rare in practice (computationally complex).

## V. Exercises

**Exercise 1 (Ranking Consistency):**
Does ranking funds by Sharpe give same order as Information Ratio?
No.
Sharpe rewards Low Vol.
Information Ratio rewards Tracking Error efficiency.
Benchmark constraint changes the hierarchy.

**Exercise 2 (Leverage Constraints):**
If investor cannot leverage ($M^2$ is theoretical).
Then standard Sharpe ranking holds.
High Sharpe Low Vol fund is useless if you can't lever it to meet return target.

## VI. References
-   Modigliani, F. & Modigliani, L. *Risk-Adjusted Performance*.
-   Bacon, C. *Practical Portfolio Performance Measurement and Attribution*.
