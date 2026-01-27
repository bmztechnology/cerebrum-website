# Relative Strength Index: Theory and Formalization

## I. Historical Context and Motivation

The Relative Strength Index (RSI), introduced by J. Welles Wilder Jr. in 1978, constitutes a normalized momentum oscillator. Its objective is to quantify the speed and magnitude of price variations to identify overbought and oversold conditions.

## II. Mathematical Construction

### Definition 2.1 (Price Variation)
For a price series {Pₜ}ₜ∈ℕ, we define the variation:
$$\Delta P_t = P_t - P_{t-1}$$

### Definition 2.2 (Gains and Losses)
We decompose the variation into positive and negative components:
$$G_t = \max(\Delta P_t, 0) \quad \text{(Gain)}$$
$$L_t = \max(-\Delta P_t, 0) \quad \text{(Loss)}$$

**Fundamental property:** ∀t, Δ P_t = G_t - L_t and G_t · L_t = 0

### Definition 2.3 (EMA of Gains/Losses)
Let n be the period (typically n=14). We calculate:
$$\overline{G}_n(t) = EMA_n(G_t) = \frac{1}{n}\sum_{i=0}^{n-1} G_{t-i} \quad \text{(Wilder method)}$$
$$\overline{L}_n(t) = EMA_n(L_t) = \frac{1}{n}\sum_{i=0}^{n-1} L_{t-i}$$

### Definition 2.4 (Relative Strength)
$$RS(t) = \frac{\overline{G}_n(t)}{\overline{L}_n(t)}$$

### Definition 2.5 (RSI)
$$RSI(t) = 100 - \frac{100}{1 + RS(t)} = \frac{100 \cdot \overline{G}_n(t)}{\overline{G}_n(t) + \overline{L}_n(t)}$$

## III. Mathematical Analysis

### Theorem 3.1 (RSI Bounds)
∀t ∈ ℕ : RSI(t) ∈ [0, 100]

**Proof:**
By definition, Ḡ_n(t) ≥ 0 and L̄_n(t) ≥ 0.
- If L̄_n(t) = 0 (pure bullish market): RS → +∞, hence RSI → 100
- If Ḡ_n(t) = 0 (pure bearish market): RS = 0, hence RSI = 0
- Otherwise: RS > 0, hence 0 < RSI < 100 ∎

### Theorem 3.2 (Probabilistic Interpretation)
The RSI can be interpreted as an estimate of the probability that the next movement is bullish:
$$RSI(t)/100 \approx P(\Delta P_{t+1} > 0 | \mathcal{F}_t)$$

### Proposition 3.3 (Reversal Symmetry)
If we define P'_t = -P_t, then RSI'(t) = 100 - RSI(t)

**Proof:** 
Gains become losses and vice versa, thus RS' = 1/RS.
$$RSI' = 100 - \frac{100}{1 + 1/RS} = 100 - \frac{100 \cdot RS}{RS + 1} = 100 - RSI$$ ∎

## IV. Critical Zones and Thresholds

### 4.1 Regime Definitions
| RSI Value | Interpretation | Condition |
|-----------|----------------|-----------|
| RSI > 70  | Overbought     | Ḡ >> L̄   |
| RSI < 30  | Oversold       | L̄ >> Ḡ   |
| RSI ≈ 50  | Equilibrium    | Ḡ ≈ L̄    |

### 4.2 Statistical Justification of Thresholds
The choice of 70/30 corresponds approximately to:
- RSI = 70 ⟹ Ḡ/L̄ = 7/3 ≈ 2.33
- RSI = 30 ⟹ Ḡ/L̄ = 3/7 ≈ 0.43

These ratios represent significant asymmetry (> 2σ under normal hypothesis).

## V. Divergences: Formalization

### Definition 5.1 (Bullish Divergence)
A bullish divergence exists if:
$$\exists t_1 < t_2 : P_{t_2} < P_{t_1} \land RSI(t_2) > RSI(t_1)$$

Price makes a lower low while RSI makes a higher low.

### Definition 5.2 (Bearish Divergence)
$$\exists t_1 < t_2 : P_{t_2} > P_{t_1} \land RSI(t_2) < RSI(t_1)$$

### Physical Interpretation
Divergence signals momentum weakening: the trend "engine" is losing power before price reflects this change.

## VI. Extension: Stochastic RSI

### Definition 6.1
$$StochRSI(t) = \frac{RSI(t) - \min_{k \in [t-n, t]}(RSI_k)}{\max_{k \in [t-n, t]}(RSI_k) - \min_{k \in [t-n, t]}(RSI_k)}$$

## VII. Exercises

**Exercise 1:** Prove that if Pₜ follows a symmetric random walk, then E[RSI(t)] = 50.

**Exercise 2:** Calculate RSI(t) for the sequence P = [100, 101, 99, 102, 100] with n=3.

**Exercise 3:** Show that RSI is invariant under positive affine transformation of price.

## VIII. References
- Wilder, J.W. (1978). New Concepts in Technical Trading Systems
- Achelis, S.B. (2001). Technical Analysis from A to Z
