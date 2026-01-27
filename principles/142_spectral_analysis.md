# Spectral Analysis: The Periodogram

## I. Executive Summary

Spectral Analysis focuses on estimating the **Power Spectral Density (PSD)** of a time series. It answers: "How much of the variance is explained by cycle X?" While Fourier gives the raw spectrum, Estimators like **Welch's Method** or **Lomb-Scargle** (for unevenly spaced data) provide statistically robust estimates of market cycles, filtering out noise to reveal the "Alpha Pulse."

## II. Formal Definitions

### Definition 2.1 (The Periodogram)
Estimate of PSD.
$$I(\omega) = \frac{1}{N} \left| \sum_{t=1}^N x_t e^{-i \omega t} \right|^2$$
Problem: It is an inconsistent estimator (Variance does not decrease as $N \to \infty$).

### Definition 2.2 (Welch's Method)
1.  Split data into overlapping segments.
2.  Apply Window function (Hamming/Hanning) to reduce leakage.
3.  Compute Periodogram for each.
4.  Average them.
Result: Smooth, consistent spectrum.

## III. Theoretical Framework

### 3.1 Aliasing (Nyquist Frequency)
Maximum detectable frequency is $f_s / 2$.
If you sample daily (Close), you cannot see intraday cycles.
If high frequency cycles exist (HFT), they "Alias" into lower frequencies, distorting the daily data.
*Solution:* Filter high frequencies before sampling.

### 3.2 Spectral Leakage
Finite data creates fake frequencies ("Side Lobes") around the main peak.
Window functions (tapering the edges of data to 0) solve this.

## IV. Strategic Applications

### 4.1 Dominant Cycle Tuning
Algorithm:
1.  Compute Welch PSD on last 500 bars.
2.  Find Peak Frequency $\omega_{peak}$.
3.  Set RSA/Stochastics lookback period $P = \frac{2\pi}{\omega_{peak}} / 2$.
*Adaptive Indicators:* The indicator breathes with the market.

### 4.2 Lomb-Scargle for Tick Data
Tick data is not evenly spaced (1s, 1.2s, 5s...). FFT fails.
Lomb-Scargle Periodogram handles irregular spacing.
Essential for analyzing "Time between Trades" (Duration) spectra.

## V. Exercises

**Exercise 1 (Cycle Hunting):**
Gold typically has an 11-month cycle?
Run PSD. Peak at $f = 1/(11 \times 22 \text{days})$.
If Peak is statistically significant (F-test), trade it.

**Exercise 2 (Noise):**
White Noise PSD is flat constant.
Random Walk PSD falls off as $1/f^2$.
If your asset slope is $1/f^{1.5}$, it has memory ($H > 0.5$).
Spectral Slope is a proxy for Hurst Exponent.

## VI. References
-   Stoica, P., & Moses, R. *Spectral Analysis of Signals*.
-   Kay, S.M. *Modern Spectral Estimation*.
