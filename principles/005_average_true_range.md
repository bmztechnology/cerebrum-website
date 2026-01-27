# Average True Range: Volatility Measurement Theory

## I. Introduction and Historical Context

The Average True Range (ATR), developed by J. Welles Wilder Jr. in 1978, represents one of the most robust measures of market volatility. Unlike standard deviation which assumes normal distribution, ATR directly measures price range, making it more appropriate for financial markets exhibiting fat tails.

## II. Mathematical Foundation

### Definition 2.1 (True Range)
The True Range (TR) at time t is defined as:
$$TR_t = \max\{H_t - L_t, |H_t - C_{t-1}|, |L_t - C_{t-1}|\}$$

Where:
- H_t = High price at time t
- L_t = Low price at time t
- C_{t-1} = Close price at time t-1

### Theorem 2.1 (True Range Components)
The True Range can be decomposed into three scenarios:
1. **Normal day:** TR = H_t - L_t (gap within previous close)
2. **Gap up:** TR = H_t - C_{t-1} (gap above previous close)
3. **Gap down:** TR = C_{t-1} - L_t (gap below previous close)

**Proof:**
Consider three cases based on gap direction:
- Case 1: L_t ≤ C_{t-1} ≤ H_t → TR = H_t - L_t
- Case 2: C_{t-1} < L_t (gap up) → TR = H_t - C_{t-1}
- Case 3: H_t < C_{t-1} (gap down) → TR = C_{t-1} - L_t

The maximum function ensures we capture the full price movement including overnight gaps. ∎

### Definition 2.2 (Average True Range)
The ATR over period n is computed using Wilder's smoothing:
$$ATR_n(t) = \frac{(n-1) \cdot ATR_n(t-1) + TR_t}{n}$$

Alternative (Simple Average):
$$ATR_n(t) = \frac{1}{n}\sum_{i=0}^{n-1} TR_{t-i}$$

### Proposition 2.3 (Wilder Smoothing Equivalence)
Wilder's smoothing is equivalent to an EMA with α = 1/n, giving more weight to recent volatility:
$$ATR_n(t) = (1 - \frac{1}{n}) \cdot ATR_n(t-1) + \frac{1}{n} \cdot TR_t$$

## III. Statistical Properties

### Theorem 3.1 (Non-Negativity)
∀t: ATR_n(t) ≥ 0

**Proof:**
By definition, TR_t ≥ 0 (maximum of absolute values and non-negative differences).
Since ATR is a weighted average of non-negative terms, ATR_n(t) ≥ 0. ∎

### Theorem 3.2 (Bounds)
Let H_max = max{H_t} and L_min = min{L_t} over the lookback period.
$$0 \leq ATR_n(t) \leq H_{max} - L_{min}$$

### Proposition 3.3 (Volatility Clustering)
ATR exhibits autocorrelation, capturing the well-documented volatility clustering phenomenon:
$$Corr(ATR_t, ATR_{t-1}) > 0$$

This reflects the empirical observation that high volatility periods tend to cluster together.

## IV. Applications in Trading

### 4.1 Stop-Loss Placement
**ATR-Based Stop Formula:**
$$SL = Entry \pm k \cdot ATR_n$$

Where k is a multiplier:
| k Value | Stop Type | Use Case |
|---------|-----------|----------|
| 1.0 | Tight | Scalping |
| 1.5 | Normal | Day trading |
| 2.0 | Wide | Swing trading |
| 3.0 | Very wide | Position trading |

### 4.2 Position Sizing
Using ATR for volatility-adjusted position sizing:
$$Position Size = \frac{Risk Amount}{k \cdot ATR_n \cdot Point Value}$$

This ensures consistent dollar risk regardless of market volatility.

### 4.3 Trend Strength Assessment
- Rising ATR during trend = Strong momentum
- Falling ATR during trend = Weakening momentum
- Low ATR = Potential breakout preparation

## V. Comparative Analysis

### 5.1 ATR vs Standard Deviation
| Aspect | ATR | Standard Deviation |
|--------|-----|-------------------|
| Gap handling | ✓ Includes | ✗ Ignores |
| Distribution assumption | None | Gaussian |
| Outlier sensitivity | Moderate | High |
| Interpretability | Direct (price units) | Abstract |

### 5.2 Normalized ATR (NATR)
$$NATR_t = \frac{ATR_n(t)}{C_t} \times 100$$

Allows comparison across different price levels and instruments.

## VI. Advanced Extensions

### 6.1 Keltner Channels
Using ATR to construct volatility bands:
$$Upper = EMA_n + k \cdot ATR_n$$
$$Lower = EMA_n - k \cdot ATR_n$$

### 6.2 ATR Trailing Stop
Dynamic stop that follows price:
$$Trailing Stop_t = \max\{Trailing Stop_{t-1}, C_t - k \cdot ATR_n\}$$

## VII. Exercises

**Exercise 1:** Calculate TR and ATR(3) for the following data:
| Day | High | Low | Close |
|-----|------|-----|-------|
| 0 | - | - | 100 |
| 1 | 103 | 99 | 102 |
| 2 | 105 | 101 | 104 |
| 3 | 106 | 102 | 103 |

**Exercise 2:** Prove that ATR is invariant under translation: if P'_t = P_t + c for all prices, then ATR' = ATR.

**Exercise 3:** Derive the half-life of ATR response to a volatility shock using Wilder's smoothing.

## VIII. References
- Wilder, J.W. (1978). New Concepts in Technical Trading Systems
- Schwager, J.D. (1996). Technical Analysis
