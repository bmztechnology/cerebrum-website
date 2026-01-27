# Sortino Ratio Downside Risk: Punishment

## I. Executive Summary

The **Sortino Ratio** improves on the Sharpe Ratio by penalizing only **Downside Volatility**. Volatility to the upside (making large profits) is "Good Volatility" and should not lower the score. Sortino uses **Semi-Deviation** or **Lower Partial Moment** relative to a **Minimum Acceptable Return (MAR)**. Ideally tailored for asymmetric return profiles (Hedge Funds, Options).

## II. Formal Definitions

### Definition 2.1 (Equation)
$$ Sortino = \frac{R_p - MAR}{DD} $$
-   $MAR$: Target Return (e.g., 0% or Rf).
-   $DD$: Downside Deviation.
$$ DD = \sqrt{ \frac{1}{N} \sum_{i=1}^N \min(0, R_i - MAR)^2 } $$
Only sums squared deviations *below* target.

### Definition 2.2 (Comparison)
Strategy: Bitcoin.
Huge Upside Vol. Huge Downside Vol.
Sharpe: Low (punished by upside spikes).
Sortino: Higher (rewards upside spikes).
Strategy: Writing Calls.
Limited Upside. Unlimited Downside.
Sharpe: High (low vol).
Sortino: Low (Downside shocks dominate).

## III. Theoretical Framework

### 3.1 Utility Implication
Assumes investor utility curve is kinked.
Loss Aversion (Kahneman/Tversky).
Pain of loss > Pleasure of gain.
Sortino aligns better with human psychology.

### 3.2 Omega Ratio
Generalization of Sortino.
Ratio of Probability weighted gains to Probability weighted losses.
Captures all moments distribution.

## IV. Strategic Applications

### 4.1 Hedge Fund Marketing
Funds with positive skew (Trend Followers) prefer Sortino.
Funds with negative skew (Arbitrage/Yield) prefer Sharpe.
Know your metric bias.

### 4.2 Optimizing for Sortino
Resulting portfolios hold more "convex" assets (Options/Trend).
Sharpe portfolios hold more "concave" assets (Carry/Yield).

## V. Exercises

**Exercise 1 (MAR Sensitivity):**
If $MAR$ increases (Ambitious target 10%).
Downside Deviation increases (more returns fall below MAR).
Sortino drops.
Setting MAR = 0 (Capital Preservation) is standard.

**Exercise 2 (Frequency):**
High water mark logic.
If looking at Monthly data vs Daily data.
Sortino is unstable with small sample sizes of downside events.

## VI. References
-   Sortino, F. *Managing Downside Risk in Financial Markets*.
-   Kaplan, P. *Kappa: A Generalized Downside Risk-Adjusted Performance Measure*.
