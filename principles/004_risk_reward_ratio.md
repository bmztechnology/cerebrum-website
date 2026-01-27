# Risk Management: Risk-Reward Ratio

## I. Introduction to Financial Decision Theory

Risk management constitutes the fundamental pillar of all trading activity. The Risk-Reward Ratio (R:R) mathematically formalizes the trade-off between potential gain and potential loss.

## II. Probabilistic Framework

### 2.1 Trade Modeling
Let a trade be characterized by:
- X: Random variable representing profit/loss
- p: Probability of success (profit)
- R: Gain in case of success (Reward)
- r: Loss in case of failure (Risk)

### Definition 2.1 (Risk-Reward Ratio)
$$RRR = \frac{R}{r}$$

Conventionally expressed as R:r (e.g., 3:1 means RRR = 3).

### Definition 2.2 (Trade Distribution)
$$X = \begin{cases} +R & \text{with probability } p \\ -r & \text{with probability } 1-p \end{cases}$$

## III. Mathematical Expectation and Decision

### Theorem 3.1 (Trade Expectation)
$$E[X] = p \cdot R - (1-p) \cdot r$$

### Corollary 3.2 (Profitability Condition)
A trade is profitable in expectation if and only if:
$$E[X] > 0 \iff p > \frac{r}{R + r} = \frac{1}{1 + RRR}$$

**Proof:**
$$p \cdot R > (1-p) \cdot r$$
$$p(R + r) > r$$
$$p > \frac{r}{R+r} = \frac{1}{1 + R/r}$$ ∎

### Table 3.1 (Break-Even Threshold by RRR)
| RRR | p_min (break-even threshold) |
|-----|------------------------------|
| 1:1 | 50.0% |
| 2:1 | 33.3% |
| 3:1 | 25.0% |
| 5:1 | 16.7% |

## IV. RRR Optimization

### 4.1 The High RRR Paradox
Increasing RRR decreases p_min but also increases the probability that stop-loss is hit before take-profit.

### Theorem 4.1 (RRR/Probability Trade-off)
Under the symmetric random walk hypothesis, the probability of reaching take-profit before stop-loss is:
$$p_{hit} = \frac{r}{R + r} = \frac{1}{1 + RRR}$$

### Corollary 4.2 (Neutrality in Random Walk)
Under the pure random walk hypothesis:
$$E[X] = p_{hit} \cdot R - (1-p_{hit}) \cdot r = 0$$

**Implication:** Without an edge (statistical advantage), no RRR generates profit.

## V. Edge and Its Quantification

### Definition 5.1 (Edge)
$$Edge = p_{actual} - p_{theoretical} = p_{actual} - \frac{1}{1+RRR}$$

### Definition 5.2 (Expectancy)
$$Expectancy = \frac{E[X]}{r}$$

### Theorem 5.3 (Expectancy as Function of Edge)
$$Expectancy = Edge \cdot (1 + RRR)$$

## VI. Kelly Criterion: Optimal Position Sizing

### Theorem 6.1 (Kelly Formula)
The optimal fraction of capital to risk:
$$f^* = \frac{p \cdot (RRR + 1) - 1}{RRR} = p - \frac{1-p}{RRR}$$

### 6.2 Practical Kelly Fraction
In practice, use half-Kelly or quarter-Kelly to reduce capital volatility.

## VII. Practical Application

### 7.1 Stop-Loss and Take-Profit Calculation
- Stop-Loss: SL = Entry ± k · ATR (k ∈ [1, 3])
- Take-Profit: TP depends on chosen RRR

### 7.2 Numerical Example
- Entry: 1.1000 (buy EUR/USD)
- ATR(14): 0.0050 (50 pips)
- k = 1.5 → Stop-Loss: 1.0925 (75 pips)
- RRR = 2:1 → Take-Profit: 1.1150 (150 pips)

## VIII. Fundamental Theorem of Risk Management

### Theorem 8.1 (Long-Term Survival)
Even with a positive edge, excessive position sizing leads to certain ruin.

## IX. Exercises

**Exercise 1:** Given p = 0.65 and RRR = 1.5. Calculate expectancy and Kelly fraction.

**Exercise 2:** Prove that Expectancy = 0 ⟹ Edge = 0.

**Exercise 3:** A trader has 60% win rate. What minimum RRR ensures positive expectancy?

## X. References
- Kelly, J.L. (1956). A New Interpretation of Information Rate
- Thorp, E.O. (1969). Optimal Gambling Systems for Favorable Games
- Van Tharp, R. (2007). Trade Your Way to Financial Freedom
