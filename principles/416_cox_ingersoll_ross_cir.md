# Cox Ingersoll Ross CIR: Square Root Process

## I. Executive Summary

The **Cox-Ingersoll-Ross (CIR)** model (1985) improves on Vasicek by precluding negative interest rates. It models volatility as proportional to the **Square Root** of the rate ($\sigma \sqrt{r_t}$). As rates approach zero, volatility vanishes, preventing the rate from crossing into negative territory (assuming Feller condition met).

## II. Formal Definitions

### Definition 2.1 (SDE)
$$ dr_t = \alpha(b - r_t)dt + \sigma \sqrt{r_t} dW_t $$
Non-central Chi-squared distribution for $r_t$.
Fat tails (Right skew). Higher rates has higher vol.

### Definition 2.2 (Feller Condition)
$2\alpha b \ge \sigma^2$.
If hold, $r_t$ never touches zero.
If violated, $r_t$ can touch zero (reflecting boundary).

## III. Theoretical Framework

### 3.1 Volatility Structure
Vasicek: Vol constant (Absolute).
CIR: Vol proportional to $\sqrt{r}$ (Relative?).
Black-Derman-Toy (Log-normal): Vol proportional to $r$.
CIR captures the "Level Effect" (High rates are more volatile).

### 3.2 Affine Class
Like Vasicek, CIR leads to $P(t, T) = A e^{-B r}$.
Closed form solutions exist.
Easy to calculate bond prices.

## IV. Strategic Applications

### 4.1 Modeling Inflation
Inflation cannot be negative? (Well, Deflation).
Nominal rates usually lower bounded at zero (Cash).
CIR ideal for modeling Nominal Rates in normal times.

### 4.2 Heston Analogy
The variance process in Heston Model is a CIR process.
CIR is ubiquitous in finance for modeling positive quantities (Rates, Variance, Default Intensity).

## V. Exercises

**Exercise 1 (The Zero Bound):**
In 2015-2021, rates went negative.
CIR broke.
Vasicek (or Shifted Lognormal) became preferred.
"Displaced Diffusion" ($r_t + c$).

**Exercise 2 (Simulation):**
Euler scheme for CIR can produce negative values due to discretization step.
Requires special schemes (Milstein, QE Scheme).

## VI. References
-   Cox, J., Ingersoll, J., & Ross, S. *A Theory of the Term Structure of Interest Rates*.
-   Glasserman, P. *Monte Carlo Methods*.
