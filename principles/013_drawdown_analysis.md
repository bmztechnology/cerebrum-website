# Drawdown Analysis: Risk Metrics and Recovery

## I. Introduction

Drawdown measures the peak-to-trough decline in portfolio value. It is one of the most important risk metrics as it captures the actual pain experienced by traders during losing periods.

## II. Formal Definitions

### Definition 2.1 (Drawdown)
At time t, the drawdown is:
$$DD_t = \frac{Peak_t - V_t}{Peak_t} \times 100\%$$

Where:
$$Peak_t = \max_{s \leq t}(V_s)$$

### Definition 2.2 (Maximum Drawdown)
$$MDD = \max_t(DD_t) = \max_t\left(\frac{Peak_t - V_t}{Peak_t}\right)$$

### Definition 2.3 (Drawdown Duration)
The time from peak to recovery:
$$Duration = t_{recovery} - t_{peak}$$

Where:
$$t_{recovery} = \min\{t > t_{peak} : V_t \geq V_{t_{peak}}\}$$

## III. Drawdown Characteristics

### Theorem 3.1 (Recovery Requirement)
To recover from drawdown D%, the required gain R% is:
$$R = \frac{D}{1-D}$$

**Proof:**
Starting capital: C
After drawdown: C(1-D)
To recover: C(1-D)(1+R) = C
Therefore: R = 1/(1-D) - 1 = D/(1-D) ∎

### Table 3.1 (Recovery Requirements)
| Drawdown | Recovery Needed |
|----------|-----------------|
| 5% | 5.26% |
| 10% | 11.11% |
| 20% | 25.00% |
| 30% | 42.86% |
| 40% | 66.67% |
| 50% | 100.00% |
| 75% | 300.00% |
| 90% | 900.00% |

### Corollary 3.1 (Asymmetric Risk)
Drawdown impact is asymmetric:
$$\frac{dR}{dD} = \frac{1}{(1-D)^2} > 1 \text{ for } D > 0$$

Larger drawdowns require disproportionately larger recoveries.

## IV. Statistical Properties

### 4.1 Expected Maximum Drawdown

For a random walk with drift μ and volatility σ over T periods:
$$E[MDD] \approx \sqrt{\frac{2T}{\pi}} \cdot \sigma - \mu T$$

### 4.2 Drawdown Distribution

Under certain assumptions, MDD follows a Gumbel distribution for extreme values.

### Theorem 4.1 (Time to Drawdown)
The expected time to first hit drawdown D from peak:
$$E[T_D] \propto \frac{1}{p(1-p)}$$

Where p is the probability of a losing trade.

## V. Drawdown-Based Risk Measures

### Definition 5.1 (Calmar Ratio)
$$Calmar = \frac{AnnualReturn}{MDD}$$

Higher is better. Measures return per unit of maximum pain.

### Definition 5.2 (Sterling Ratio)
$$Sterling = \frac{AnnualReturn}{AvgDrawdown + 10\%}$$

### Definition 5.3 (Burke Ratio)
$$Burke = \frac{AnnualReturn}{\sqrt{\sum DD_i^2 / n}}$$

Uses RMS of drawdowns.

### Definition 5.4 (Ulcer Index)
$$UI = \sqrt{\frac{\sum DD_t^2}{n}}$$

Measures depth and duration of drawdowns.

## VI. Drawdown Control Strategies

### 6.1 Maximum Loss Rules
Stop trading when:
$$DD_t > DD_{max}$$

Common thresholds: 10%, 15%, 20%

### 6.2 Volatility Reduction
Reduce position size proportionally to drawdown:
$$Size_t = Size_0 \times \left(1 - \frac{DD_t}{DD_{max}}\right)$$

### 6.3 Portfolio Insurance
Use options or dynamic hedging:
$$Hedge_{ratio} = f(DD_t)$$

## VII. Psychological Impact

### 7.1 Risk Tolerance Erosion
Psychological capacity to continue trading often fails before mathematical ruin:
$$P(Stop | DD > D_{psychological}) >> P(Stop | DD < D_{psychological})$$

### 7.2 Recovery Time Damage
Opportunity cost of recovery:
$$OpportunityCost = \int_{t_{peak}}^{t_{recovery}} Returns_{alternative} \, dt$$

## VIII. Monte Carlo Simulation

### 8.1 Simulating Drawdowns
Given win rate p and R:R ratio b:
1. Generate N sequences of W trades
2. For each sequence, calculate equity curve
3. Compute MDD for each sequence
4. Analyze MDD distribution

### 8.2 Confidence Intervals
95% worst-case MDD can be derived from simulations:
$$MDD_{95\%} = Percentile_{95}(MDD_{simulated})$$

## IX. Exercises

**Exercise 1:** Calculate MDD for the equity sequence: [1000, 1100, 950, 1050, 900, 1100].

**Exercise 2:** A trader has 60% win rate with 1.5:1 R:R. Estimate expected MDD over 100 trades using simulation.

**Exercise 3:** Prove that for D = 50%, R = 100%, confirming the table.

**Exercise 4:** If average monthly return is 3% with MDD of 15%, calculate the Calmar ratio (annualized).

**Exercise 5:** Design a position sizing rule that targets a maximum 10% drawdown.

## X. References
- Chekhlov, A. et al. (2005). Drawdown Measure in Portfolio Optimization
- Magdon-Ismail, M. et al. (2004). Maximum Drawdown
- Bacon, C. (2008). Practical Portfolio Performance
