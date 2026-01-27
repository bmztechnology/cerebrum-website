# Position Sizing: Optimal Capital Allocation Theory

## I. Introduction

Position sizing determines how much capital to allocate to each trade. It is often considered more important than entry/exit timing, as improper sizing can lead to ruin even with a profitable strategy.

## II. Basic Position Sizing Models

### Definition 2.1 (Fixed Dollar Risk)
$$PositionSize = \frac{RiskAmount}{StopLossDistance \times PointValue}$$

### Definition 2.2 (Fixed Percentage Risk)
$$RiskAmount = AccountBalance \times RiskPercent$$
$$PositionSize = \frac{AccountBalance \times RiskPercent}{StopLossDistance \times PointValue}$$

### Example 2.1
- Account: $10,000
- Risk: 2% = $200
- Stop Loss: 50 pips
- Point Value: $10/pip (1 standard lot EUR/USD)

$$PositionSize = \frac{200}{50 \times 10} = 0.4 \text{ lots}$$

## III. Kelly Criterion

### Theorem 3.1 (Kelly Formula)
Given:
- p = Probability of winning
- b = Win/Loss ratio (R:R)

The optimal fraction of capital to risk:
$$f^* = \frac{p(b+1) - 1}{b} = p - \frac{1-p}{b}$$

### Proof (Maximum Growth Rate)
We maximize the expected logarithmic growth:
$$G(f) = E[\ln(1 + f \cdot X)]$$

Where X = +b with probability p, X = -1 with probability (1-p).

$$G(f) = p \ln(1 + fb) + (1-p) \ln(1 - f)$$

Taking derivative and setting to zero:
$$G'(f) = \frac{pb}{1+fb} - \frac{1-p}{1-f} = 0$$

Solving: $f^* = \frac{p(b+1) - 1}{b}$ ∎

### Theorem 3.2 (Kelly Properties)
1. f* = 0 when p = 1/(b+1) (break-even edge)
2. f* < 0 when edge is negative (don't trade)
3. f* > 0 when p > 1/(b+1) (positive edge)

### Table 3.1 (Kelly Fractions)
| Win Rate | R:R | Kelly % |
|----------|-----|---------|
| 50% | 2:1 | 25% |
| 60% | 1:1 | 20% |
| 55% | 1.5:1 | 18.3% |
| 40% | 3:1 | 13.3% |

## IV. Fractional Kelly

### Definition 4.1 (Fractional Kelly)
To reduce volatility, use a fraction of full Kelly:
$$f_{fractional} = k \times f^*$$

Common choices:
- Half-Kelly: k = 0.5
- Quarter-Kelly: k = 0.25

### Theorem 4.1 (Growth Rate Trade-off)
Using fraction k of Kelly:
$$G(kf^*) = G(f^*) \times k(2-k)$$

At half-Kelly: G = 0.75 × G_max with significantly lower variance.

## V. Volatility-Based Position Sizing

### Definition 5.1 (ATR-Based Sizing)
$$PositionSize = \frac{RiskAmount}{k \times ATR \times PointValue}$$

Where k is a multiplier (typically 2-3).

### Theorem 5.1 (Volatility Normalization)
ATR-based sizing ensures consistent risk across different volatility regimes:
$$\sigma_{Portfolio} = const \text{ regardless of } \sigma_{Market}$$

## VI. Anti-Martingale Systems

### Definition 6.1 (Fixed Ratio Method)
Increase position by 1 unit after every δ dollars of profit:
$$Units = 1 + \lfloor \frac{Profit}{\delta} \rfloor$$

### Definition 6.2 (Percent Volatility Model)
$$PositionSize = \frac{AccountBalance \times TargetVolatility}{InstrumentVolatility \times PointValue}$$

## VII. Portfolio Position Sizing

### 7.1 Maximum Correlation Limit
When trading multiple positions:
$$TotalRisk = \sum_i Risk_i \times \rho_{ij}$$

If positions are correlated, reduce individual size.

### 7.2 Heat Rule
Maximum total portfolio risk:
$$\sum_{i \in OpenPositions} Risk_i \leq MaxHeat$$

Typical MaxHeat = 6% of account.

## VIII. Survival Probability

### Theorem 8.1 (Ruin Probability)
With edge e > 0 and fraction f per trade, probability of ruin:
$$P_{ruin} \approx \left(\frac{1-e}{1+e}\right)^{B/f}$$

Where B is initial bankroll in risk units.

### Corollary 8.1 (Never Risk Too Much)
Even with positive edge, risking too much leads to eventual ruin:
$$\lim_{f \to 1} P_{ruin} = 1$$

## IX. Practical Guidelines

### 9.1 Risk Limits
| Trader Type | Max Risk/Trade | Max Risk/Day |
|-------------|----------------|--------------|
| Conservative | 0.5% | 1.5% |
| Moderate | 1-2% | 4-6% |
| Aggressive | 2-3% | 6-10% |

### 9.2 Drawdown Recovery
| Drawdown | Gain Needed to Recover |
|----------|------------------------|
| 10% | 11.1% |
| 20% | 25.0% |
| 30% | 42.9% |
| 50% | 100.0% |

## X. Exercises

**Exercise 1:** Calculate Kelly fraction for p=0.55, R:R=1.5:1.

**Exercise 2:** Given $25,000 account, 1.5% risk, 40 pip stop, calculate position size for EUR/USD.

**Exercise 3:** Prove that recovery requirement R after drawdown D is: R = D/(1-D).

**Exercise 4:** Compare equity curves of 1%, 2%, and 5% risk over 100 trades with 55% win rate and 1.5:1 R:R.

## XI. References
- Kelly, J.L. (1956). A New Interpretation of Information Rate
- Vince, R. (1992). The Mathematics of Money Management
- Tharp, V.K. (2007). Trade Your Way to Financial Freedom
