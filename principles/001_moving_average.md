# Moving Average: Mathematical Foundations and Applications

## I. Introduction and Motivation

The Moving Average (MA) constitutes one of the fundamental tools in quantitative analysis of financial time series. Its importance derives from its ability to filter stochastic noise inherent in market data while preserving the underlying trend characteristics of the signal.

## II. Formal Definitions

### Definition 2.1 (Price Time Series)
Let (Ω, F, P) be a probability space. We define a price time series as a stochastic process {Pₜ}ₜ∈ℕ where Pₜ : Ω → ℝ⁺ represents the asset price at time t.

### Definition 2.2 (Simple Moving Average - SMA)
For a window of size n ∈ ℕ*, we define the Simple Moving Average at time t by:

$$SMA_n(t) = \frac{1}{n} \sum_{i=0}^{n-1} P_{t-i}$$

**Alternative notation:** SMA_n(t) = ⟨P⟩_n(t)

### Definition 2.3 (Exponential Moving Average - EMA)
The Exponential Moving Average with smoothing factor α ∈ ]0,1[ satisfies the recurrence relation:

$$EMA_\alpha(t) = \alpha \cdot P_t + (1-\alpha) \cdot EMA_\alpha(t-1)$$

where α = 2/(n+1) for an equivalent period n.

### Definition 2.4 (Weighted Moving Average - WMA)
$$WMA_n(t) = \frac{\sum_{i=0}^{n-1} w_i \cdot P_{t-i}}{\sum_{i=0}^{n-1} w_i}$$

with w_i = n - i (linearly decreasing weights).

## III. Analytical Properties

### Theorem 3.1 (Linearity of SMA)
The SMA_n operator is linear:
∀ a,b ∈ ℝ, ∀ {Xₜ}, {Yₜ} time series:
$$SMA_n(aX + bY) = a \cdot SMA_n(X) + b \cdot SMA_n(Y)$$

**Proof:**
By definition of SMA and linearity of summation:
$$SMA_n(aX + bY)(t) = \frac{1}{n}\sum_{i=0}^{n-1}(aX_{t-i} + bY_{t-i}) = a\frac{1}{n}\sum_{i=0}^{n-1}X_{t-i} + b\frac{1}{n}\sum_{i=0}^{n-1}Y_{t-i}$$ ∎

### Theorem 3.2 (EMA Convergence)
The EMA can be expressed as an infinite series:
$$EMA_\alpha(t) = \alpha \sum_{k=0}^{\infty} (1-\alpha)^k P_{t-k}$$

This series converges since |1-α| < 1.

### Proposition 3.3 (Phase Lag)
The SMA_n introduces a lag of (n-1)/2 periods relative to the original signal. This lag constitutes the fundamental trade-off between smoothing and reactivity.

**Corollary:** The EMA exhibits less lag than the SMA for the same effective period.

## IV. Signal Processing Interpretation

### 4.1 Transfer Function
In the frequency domain (discrete Fourier transform), the SMA_n acts as a low-pass filter with transfer function:

$$H(f) = \frac{\sin(\pi n f)}{n \sin(\pi f)}$$

### 4.2 Spectral Analysis
- **Cutoff frequency:** f_c ≈ 0.44/n
- **Attenuation:** -20 dB/decade in the transition band

## V. Applications in Quantitative Trading

### 5.1 Trend Detection
**Definition (Trend Regime):**
- Bullish trend: P_t > SMA_n(t) ∧ dSMA_n/dt > 0
- Bearish trend: P_t < SMA_n(t) ∧ dSMA_n/dt < 0

### 5.2 Crossover Strategy
Let SMA_m (short period) and SMA_n (long period) with m < n.

**Buy signal:** SMA_m(t) crosses above SMA_n(t)
$$\exists t_0 : SMA_m(t_0^-) < SMA_n(t_0^-) \land SMA_m(t_0^+) > SMA_n(t_0^+)$$

### 5.3 Dynamic Support/Resistance
The SMA acts as a price attractor, creating dynamic support (in uptrend) or resistance (in downtrend) levels.

## VI. Exercises

**Exercise 1:** Prove that lim_{α→1} EMA_α(t) = P_t

**Exercise 2:** Calculate the variance of SMA_n(t) given that Var(P_t) = σ² (assuming independence of P_i).

**Exercise 3:** Prove that WMA with weights w_i = (n-i) has denominator n(n+1)/2.

## VII. References
- Murphy, J.J. (1999). Technical Analysis of the Financial Markets
- Hamilton, J.D. (1994). Time Series Analysis
- Oppenheim, A.V. (1999). Discrete-Time Signal Processing
