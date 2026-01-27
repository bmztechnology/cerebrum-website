# Pivot Points: Price Level Calculation Methods

## I. Introduction

Pivot Points are calculated price levels used to identify potential support and resistance. Originally developed for floor traders, they remain popular for intraday trading and defining key price zones.

## II. Standard Pivot Points

### Definition 2.1 (Classic Pivot Point)
$$P = \frac{H + L + C}{3}$$

Where H, L, C are the High, Low, Close of the previous period.

### Definition 2.2 (Support and Resistance Levels)
$$R1 = 2P - L$$
$$S1 = 2P - H$$
$$R2 = P + (H - L)$$
$$S2 = P - (H - L)$$
$$R3 = H + 2(P - L)$$
$$S3 = L - 2(H - P)$$

### Theorem 2.1 (Pivot Range)
The central pivot represents the equilibrium price:
$$P = \frac{H + L + C}{3} \in [L, H]$$

## III. Alternative Pivot Calculations

### 3.1 Woodie Pivot Points
$$P = \frac{H + L + 2C}{4}$$

Gives more weight to closing price.

$$R1 = 2P - L, S1 = 2P - H$$
$$R2 = P + (H - L), S2 = P - (H - L)$$

### 3.2 Camarilla Pivot Points
Based on Fibonacci-like ratios:
$$R4 = C + (H-L) \times 1.1/2$$
$$R3 = C + (H-L) \times 1.1/4$$
$$R2 = C + (H-L) \times 1.1/6$$
$$R1 = C + (H-L) \times 1.1/12$$
$$S1 = C - (H-L) \times 1.1/12$$
$$S2 = C - (H-L) \times 1.1/6$$
$$S3 = C - (H-L) \times 1.1/4$$
$$S4 = C - (H-L) \times 1.1/2$$

### 3.3 Fibonacci Pivot Points
$$P = \frac{H + L + C}{3}$$
$$R1 = P + 0.382(H - L)$$
$$R2 = P + 0.618(H - L)$$
$$R3 = P + 1.000(H - L)$$
$$S1 = P - 0.382(H - L)$$
$$S2 = P - 0.618(H - L)$$
$$S3 = P - 1.000(H - L)$$

### 3.4 DeMark Pivot Points
$$X = \begin{cases}
H + 2L + C & \text{if } C < O \\
2H + L + C & \text{if } C > O \\
H + L + 2C & \text{if } C = O
\end{cases}$$

$$P = X/4$$
$$R1 = X/2 - L$$
$$S1 = X/2 - H$$

## IV. Properties and Applications

### 4.1 Time Periods
| Period | Usage |
|--------|-------|
| Daily | Day trading |
| Weekly | Swing trading |
| Monthly | Position trading |

### 4.2 Confluence Zones
When multiple pivot types align:
$$Confluence = |P_{classic} - P_{woodie}| < \epsilon$$

Stronger S/R zone.

### Theorem 4.1 (Pivot Probability)
Empirically, price tends to test pivot levels:
$$P(Touch_P) > P(Touch_{random})$$

Studies show ~70% of trading days test the pivot.

## V. Trading Strategies

### 5.1 Bounce Strategy
- Buy at S1, S2 with stop below
- Sell at R1, R2 with stop above
- Target: opposite level

### 5.2 Breakout Strategy
- Buy breakout above R1 with retest
- Sell breakout below S1 with retest
- Target: next pivot level

### 5.3 Range Trading
When market opens between S1 and R1:
$$Range Day Probability High$$

Fade extremes, trade back to pivot.

## VI. Exercises

**Exercise 1:** Calculate all classic pivot levels for H=1.1200, L=1.1100, C=1.1150.

**Exercise 2:** Compare Classic vs Woodie pivot for the same OHLC.

**Exercise 3:** Calculate Camarilla R3 and S3 for H=100, L=98, C=99.

**Exercise 4:** Design a trading rule using pivot confluence from two methods.

## VII. References
- Person, J.L. (2004). A Complete Guide to Technical Trading Tactics
- DeMark, T. (1994). The New Science of Technical Analysis
