# Stochastic Oscillator: Probability and Momentum Analysis

## I. Introduction

The Stochastic Oscillator, developed by George Lane in the 1950s, measures the position of closing price relative to the high-low range over a given period. It is based on the observation that in uptrends, prices tend to close near the high.

## II. Mathematical Construction

### Definition 2.1 (Fast Stochastic %K)
$$\%K_n(t) = \frac{C_t - L_n(t)}{H_n(t) - L_n(t)} \times 100$$

Where:
- C_t = Current closing price
- L_n(t) = Lowest low over last n periods
- H_n(t) = Highest high over last n periods

### Definition 2.2 (Slow Stochastic %D)
$$\%D_m(t) = SMA_m(\%K_n(t))$$

Typically m = 3 (3-period simple moving average of %K).

### Definition 2.3 (Full Stochastic)
- %K (Slow) = SMA_m of Fast %K
- %D = SMA_m of Slow %K

Standard parameters: (14, 3, 3)

## III. Theoretical Properties

### Theorem 3.1 (Bounded Domain)
∀t: 0 ≤ %K_n(t) ≤ 100

**Proof:**
By definition, L_n(t) ≤ C_t ≤ H_n(t).
Therefore: 0 ≤ C_t - L_n(t) ≤ H_n(t) - L_n(t)
Dividing: 0 ≤ (C_t - L_n(t))/(H_n(t) - L_n(t)) ≤ 1 ∎

### Theorem 3.2 (Extreme Values)
- %K = 100 ⟺ C_t = H_n(t) (close at highest high)
- %K = 0 ⟺ C_t = L_n(t) (close at lowest low)

### Proposition 3.3 (Probabilistic Interpretation)
Under uniform distribution of closes within the range:
$$E[\%K] = 50$$

The stochastic oscillator measures the percentile rank of the closing price.

### Theorem 3.4 (Trend Behavior)
In a perfect uptrend with C_t = H_t ∀t:
$$\%K_n(t) = 100 - \frac{H_n(t) - C_t}{H_n(t) - L_n(t)} \times 100 = 100$$

Conversely, in a perfect downtrend with C_t = L_t ∀t:
$$\%K_n(t) = 0$$

## IV. Signal Generation

### 4.1 Overbought/Oversold Zones
| Zone | %K Range | Interpretation |
|------|----------|----------------|
| Overbought | > 80 | Momentum exhaustion (sell zone) |
| Neutral | 20-80 | Normal trading range |
| Oversold | < 20 | Momentum exhaustion (buy zone) |

### 4.2 Crossover Signals
**Bullish Signal:**
$$\%K(t^-) < \%D(t^-) \land \%K(t^+) > \%D(t^+) \land \%K(t) < 20$$

**Bearish Signal:**
$$\%K(t^-) > \%D(t^-) \land \%K(t^+) < \%D(t^+) \land \%K(t) > 80$$

### 4.3 Divergences
**Bullish Divergence:**
$$Price_{t_2} < Price_{t_1} \land \%K_{t_2} > \%K_{t_1}$$

**Bearish Divergence:**
$$Price_{t_2} > Price_{t_1} \land \%K_{t_2} < \%K_{t_1}$$

## V. Comparison with RSI

### 5.1 Structural Differences
| Aspect | Stochastic | RSI |
|--------|-----------|-----|
| Measures | Price position in range | Gain/loss ratio |
| Input | High, Low, Close | Close only |
| Sensitivity | Higher | Lower |
| Noise | More | Less |
| Best for | Ranging markets | All conditions |

### 5.2 Mathematical Relationship
Both are bounded oscillators but measure different phenomena:
- Stochastic: Where is price within its range?
- RSI: What is the relative strength of gains vs losses?

## VI. Advanced Variants

### 6.1 Williams %R
$$\%R = \frac{H_n - C}{H_n - L_n} \times (-100) = \%K - 100$$

Williams %R is simply an inverted stochastic.

### 6.2 Stochastic RSI
$$StochRSI = \frac{RSI - RSI_{min}}{RSI_{max} - RSI_{min}}$$

Combines both indicators' strengths.

### 6.3 Double Smoothed Stochastic
$$DSS = SMA_m(SMA_k(\%K))$$

Reduces noise further with double averaging.

## VII. Parameter Optimization

### 7.1 Standard Parameters
- Lane's original: (14, 3, 3)
- Short-term: (5, 3, 3)
- Long-term: (21, 5, 5)

### 7.2 Optimization Criterion
Minimize false signals while maintaining responsiveness:
$$\min_{n,m} \sum_{i} |Signal_i - TrueReversal_i|$$

## VIII. Exercises

**Exercise 1:** Calculate %K(5) for the data:
Closes: [100, 102, 99, 103, 101]
Highs: [101, 103, 100, 104, 102]
Lows: [99, 100, 98, 101, 99]

**Exercise 2:** Prove that %K is invariant under positive linear transformation of prices.

**Exercise 3:** Show that Fast %K is always more volatile than Slow %K.

**Exercise 4:** Calculate %D given %K = [30, 45, 60, 75, 90] with m=3.

## IX. References
- Lane, G. (1984). Lane's Stochastics
- Murphy, J.J. (1999). Technical Analysis of the Financial Markets
