# Bollinger Bands: Statistical Analysis and Applications

## I. Introduction

Bollinger Bands, developed by John Bollinger in the 1980s, constitute a volatility analysis tool based on statistical confidence interval theory applied to financial time series.

## II. Theoretical Framework

### 2.1 Working Hypothesis
We assume that logarithmic returns approximately follow a normal distribution:
$$r_t = \ln(P_t/P_{t-1}) \sim \mathcal{N}(\mu, \sigma^2)$$

While this hypothesis is imperfect (existence of fat tails), it provides a useful first approximation.

## III. Formal Construction

### Definition 3.1 (Middle Band)
The middle band is defined as a simple moving average of period n:
$$MB(t) = SMA_n(P_t) = \frac{1}{n}\sum_{i=0}^{n-1} P_{t-i}$$

### Definition 3.2 (Rolling Standard Deviation)
We define the empirical rolling standard deviation:
$$\sigma_n(t) = \sqrt{\frac{1}{n}\sum_{i=0}^{n-1}(P_{t-i} - MB(t))^2}$$

### Definition 3.3 (Upper and Lower Bands)
For a factor k ∈ ℝ⁺ (typically k=2):
$$UB(t) = MB(t) + k \cdot \sigma_n(t) \quad \text{(Upper Band)}$$
$$LB(t) = MB(t) - k \cdot \sigma_n(t) \quad \text{(Lower Band)}$$

### Definition 3.4 (Band Width)
$$BW(t) = UB(t) - LB(t) = 2k \cdot \sigma_n(t)$$

## IV. Statistical Properties

### Theorem 4.1 (Probabilistic Interpretation under Gaussian Hypothesis)
If {Pₜ} follows a normal distribution, then for k=2:
$$P(LB(t) \leq P_t \leq UB(t)) \approx 0.9545$$

**Proof:**
Under the Gaussian hypothesis, P_t ~ N(μ, σ²).
The interval [μ - 2σ, μ + 2σ] contains 95.45% of the standard normal distribution.
By the central limit theorem, MB(t) estimates μ and σ_n(t) estimates σ. ∎

### Corollary 4.2 (Probabilities for Different k Values)
| k | % within bands (normal law) |
|---|----------------------------|
| 1 | 68.27% |
| 2 | 95.45% |
| 3 | 99.73% |

## V. Derived Indicators

### Definition 5.1 (%B - Percent Bandwidth)
$$\%B(t) = \frac{P_t - LB(t)}{UB(t) - LB(t)} = \frac{P_t - MB(t) + k\sigma_n(t)}{2k\sigma_n(t)}$$

**Interpretation:**
- %B > 1: Price above upper band
- %B < 0: Price below lower band
- %B = 0.5: Price on moving average

### Definition 5.2 (Bandwidth Indicator)
$$BWI(t) = \frac{UB(t) - LB(t)}{MB(t)} = \frac{2k\sigma_n(t)}{MB(t)}$$

## VI. Market Phenomena

### 6.1 Squeeze (Contraction)
**Definition:** A squeeze occurs when BWI(t) reaches a local minimum.
$$\frac{d(BWI)}{dt} = 0 \land \frac{d^2(BWI)}{dt^2} > 0$$

**Interpretation:** Low volatility period typically preceding a significant directional movement.

### 6.2 Walking the Bands
In strong trends, price can "walk" along a band:
- Uptrend: P_t remains close to UB(t)
- Downtrend: P_t remains close to LB(t)

## VII. Model Limitations

### 7.1 Critique of Gaussian Hypothesis
Financial returns exhibit:
- **Leptokurtosis:** Kurtosis > 3 (fat tails)
- **Asymmetry:** Skewness ≠ 0
- **Volatility clustering:** σ(t) correlated with σ(t-1)

## VIII. Exercises

**Exercise 1:** Prove that E[%B(t)] = 0.5 under the assumption that E[P_t] = MB(t).

**Exercise 2:** If P_t follows geometric Brownian motion, express σ_n(t) in terms of instantaneous volatility σ.

**Exercise 3:** Prove that Bollinger Bands are translation invariant.

## IX. References
- Bollinger, J. (2001). Bollinger on Bollinger Bands
- Mandelbrot, B. (1963). The Variation of Certain Speculative Prices
