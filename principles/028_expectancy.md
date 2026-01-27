# Expectancy: Trading System Evaluation

## I. Introduction

Expectancy measures the average amount you expect to win (or lose) per trade. It is the most important metric for evaluating a trading system's profitability.

## II. Mathematical Definition

### Definition 2.1 (Expectancy)
$$E = (W \times \bar{w}) - (L \times \bar{l})$$

Where:
- W = Win rate (probability of winning)
- w̄ = Average win size
- L = Loss rate (1 - W)
- l̄ = Average loss size

### Definition 2.2 (Expectancy per Dollar Risked)
$$E_R = W \times RR - L$$

Where RR = Average Win / Average Loss (R:R ratio).

### 2.3 Alternative Formula
$$E_R = (1 + RR) \times W - 1$$

## III. Interpretation

### 3.1 Profitability Condition
$$E > 0 \iff W > \frac{\bar{l}}{\bar{w} + \bar{l}} = \frac{1}{1 + RR}$$

### Table 3.1 (Expectancy Examples)
| Win Rate | R:R | Expectancy/R |
|----------|-----|--------------|
| 50% | 2:1 | 0.50 |
| 40% | 3:1 | 0.60 |
| 60% | 1:1 | 0.20 |
| 30% | 4:1 | 0.50 |

### 3.2 Interpretation Scale
| E/R | System Quality |
|-----|----------------|
| < 0 | Losing system |
| 0-0.2 | Marginal |
| 0.2-0.4 | Good |
| 0.4-0.6 | Very good |
| > 0.6 | Excellent |

## IV. Total System Performance

### Definition 4.1 (R-Expectancy)
Express all results in R-multiples (units of risk):
$$R = \frac{Profit}{InitialRisk}$$

### Definition 4.2 (System Quality Number - SQN)
$$SQN = \frac{E_R}{\sigma_R} \times \sqrt{n}$$

Where σ_R is standard deviation of R-multiples, n is number of trades.

### Table 4.1 (SQN Interpretation)
| SQN | System Quality |
|-----|----------------|
| 1.6-2.0 | Below average |
| 2.0-2.5 | Average |
| 2.5-3.0 | Good |
| 3.0-5.0 | Excellent |
| 5.0-7.0 | Superb |
| > 7.0 | Holy Grail |

## V. Opportunity and Total Return

### 5.1 Trading Frequency Matters
$$Total E = E_{per\ trade} \times N_{trades}$$

A system with lower expectancy but more trades may outperform.

### 5.2 Annual Expectancy
$$E_{annual} = E_{per\ trade} \times Trades_{per\ year}$$

## VI. Exercises

**Exercise 1:** Calculate expectancy for 55% win rate, average win $150, average loss $100.

**Exercise 2:** Two systems: A has E=0.3R with 20 trades/month, B has E=0.5R with 8 trades/month. Which is better?

**Exercise 3:** Derive the minimum win rate for positive expectancy given R:R = 2.5:1.

**Exercise 4:** If SQN = 3.5 over 100 trades with E_R = 0.4, what is σ_R?

## VII. References
- Van Tharp, R. (2007). Trade Your Way to Financial Freedom
- Van Tharp, R. (2008). The Definitive Guide to Position Sizing
