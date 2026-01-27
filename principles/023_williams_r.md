# Williams %R: Overbought/Oversold Oscillator

## I. Introduction

Williams %R, developed by Larry Williams, is a momentum oscillator measuring the closing price relative to the high-low range. It is essentially an inverted Stochastic Oscillator.

## II. Mathematical Definition

### Definition 2.1 (Williams %R)
$$\%R = \frac{HH_n - C}{HH_n - LL_n} \times (-100)$$

Where:
- HH_n = Highest High over n periods
- LL_n = Lowest Low over n periods
- C = Current Close

### Theorem 2.1 (Relationship to Stochastic)
$$\%R = \%K - 100$$

**Proof:**
$$\%K = \frac{C - LL_n}{HH_n - LL_n} \times 100$$

$$\%R = \frac{HH_n - C}{HH_n - LL_n} \times (-100) = -100 + \frac{C - LL_n}{HH_n - LL_n} \times 100 = \%K - 100$$ ∎

## III. Properties

### Theorem 3.1 (Bounded Range)
$$-100 \leq \%R \leq 0$$

### 3.2 Interpretation
| %R Value | Interpretation |
|----------|----------------|
| 0 to -20 | Overbought |
| -80 to -100 | Oversold |
| -50 | Neutral |

### Theorem 3.2 (Extreme Values)
- %R = 0 ⟺ C = HH_n (close at highest high)
- %R = -100 ⟺ C = LL_n (close at lowest low)

## IV. Trading Signals

### 4.1 Overbought/Oversold
**Buy signal:** %R drops below -80, then rises above -80
**Sell signal:** %R rises above -20, then falls below -20

### 4.2 Failure Swing
**Bullish failure swing:**
1. %R falls below -80
2. Rises above -80
3. Falls again but stays above -80
4. Breaks previous high → Buy

### 4.3 Divergence
Same as RSI/Stochastic divergence interpretation.

## V. Comparison with Stochastic

| Feature | %R | Stochastic |
|---------|-----|-----------|
| Scale | -100 to 0 | 0 to 100 |
| Default Period | 14 | 14 |
| Signal Line | No | %D (smoothed) |
| Noise Level | Higher | Lower (smoothed) |

## VI. Exercises

**Exercise 1:** Calculate %R(14) if HH=105, LL=95, C=100.

**Exercise 2:** %R = -30. What is the equivalent Stochastic %K?

**Exercise 3:** Explain why %R has no signal line unlike Stochastic.

## VII. References
- Williams, L. (1979). How I Made One Million Dollars Last Year Trading Commodities
