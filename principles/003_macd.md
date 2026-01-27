# MACD: Moving Average Convergence Divergence

## I. Genesis and Objective

The MACD (Moving Average Convergence Divergence), developed by Gerald Appel in 1979, aims to detect trend momentum changes by analyzing the relationship between two exponential moving averages of different periods.

## II. Fundamental Definitions

### Definition 2.1 (EMA Recall)
The exponential moving average of period n is defined recursively:
$$EMA_n(t) = \alpha P_t + (1-\alpha) EMA_n(t-1)$$
where α = 2/(n+1) is the smoothing coefficient.

### Definition 2.2 (MACD Line)
Let two periods m < n (conventionally m=12, n=26).
$$MACD(t) = EMA_m(P_t) - EMA_n(P_t)$$

### Definition 2.3 (Signal Line)
The signal line is the EMA of the MACD line itself:
$$Signal(t) = EMA_s(MACD_t)$$
where s = 9 (standard period).

### Definition 2.4 (MACD Histogram)
$$Histogram(t) = MACD(t) - Signal(t)$$

## III. Mathematical Analysis

### Theorem 3.1 (Interpretation of MACD as Smoothed Derivative)
The MACD can be interpreted as an approximation of the smoothed price derivative:
$$MACD(t) \propto \frac{d}{dt}[EMA_n(P_t)]$$

**Proof (outline):**
The short EMA reacts faster than the long EMA. Their difference thus captures the rate of change:
$$MACD = EMA_m - EMA_n \approx (1 - \frac{m}{n}) \cdot \tau \frac{dP}{dt}$$
where τ is a characteristic time constant. ∎

### Theorem 3.2 (Analytical Expression)
The MACD can be expressed as a weighted sum of past prices:
$$MACD(t) = \sum_{k=0}^{\infty} (w_k^{(m)} - w_k^{(n)}) P_{t-k}$$
where $w_k^{(p)} = \alpha_p(1-\alpha_p)^k$ with $\alpha_p = 2/(p+1)$

## IV. Trading Signals

### 4.1 MACD/Signal Crossover

**Definition (MACD Golden Cross):**
$$\exists t_0 : MACD(t_0^-) < Signal(t_0^-) \land MACD(t_0^+) > Signal(t_0^+)$$
Potential buy signal.

**Definition (MACD Death Cross):**
$$\exists t_0 : MACD(t_0^-) > Signal(t_0^-) \land MACD(t_0^+) < Signal(t_0^+)$$
Potential sell signal.

### 4.2 Zero Line Crossover
**Theorem 4.1:** MACD(t) = 0 ⟺ EMA_m(t) = EMA_n(t)

### 4.3 Divergences
**Definition (Bullish Divergence):**
$$\exists t_1 < t_2 : P_{t_2} < P_{t_1} \land MACD(t_2) > MACD(t_1)$$

## V. Histogram Analysis

### Proposition 5.1 (Momentum of Momentum)
The histogram represents the MACD derivative:
$$Histogram(t) = MACD(t) - EMA_9(MACD) \approx \tau' \frac{d(MACD)}{dt}$$

### Proposition 5.2 (Anticipated Reversal)
The histogram reaches its extremum BEFORE the MACD itself.

## VI. Parameter Optimization

### 6.1 Standard Parameters
- Fast EMA: m = 12
- Slow EMA: n = 26
- Signal: s = 9

### 6.2 Overfitting Warning
Optimization on historical data risks overfitting. Use temporal cross-validation (walk-forward analysis).

## VII. Limitations

### 7.1 Inherent Lag
MACD is a lagging indicator because it is built on moving averages.

### 7.2 False Signals in Range
In sideways markets, MACD generates many contradictory signals (whipsaws).
**Solution:** Filter by ADX > 25 (confirmed trend).

## VIII. Exercises

**Exercise 1:** Prove that MACD(t) → 0 when P_t = constant.

**Exercise 2:** If P_t = at + b (linear trend), show that MACD(t) → k for t → ∞ with k ≠ 0.

**Exercise 3:** Calculate MACD(5) for P = [100, 102, 101, 103, 105, 104] with m=3, n=5.

## IX. References
- Appel, G. (2005). Technical Analysis: Power Tools for Active Investors
- Murphy, J.J. (1999). Technical Analysis of the Financial Markets
