# Wavelet Analysis: Time-Frequency Localization

## I. Executive Summary

Fourier Transform (FFT) has a fatal flaw: it loses time information. It tells you "There is a cycle" but not "When it happened." **Wavelet Transform** solves this by using variable-sized windows. It decomposes the signal into "Wavelets" (Packet waves) that are localized in both time and frequency. This allows traders to detect **Transient Anomalies** (Flash Crashes, News Spikes) that FFT misses.

## II. Formal Definitions

### Definition 2.1 (Continuous Wavelet Transform CWT)
$$W(a,b) = \frac{1}{\sqrt{a}} \int_{-\infty}^{\infty} f(t) \psi^*\left(\frac{t-b}{a}\right) dt$$
-   $a$: Scale (Frequency inverse).
-   $b$: Translation (Time shift).
-   $\psi$: Mother Wavelet (e.g., Morlet, Mexican Hat).

### Definition 2.2 (Discrete Wavelet Transform DWT)
Uses dyadic scales ($2^j$). Very fast.
Decomposes signal into:
-   **Approximation ($A$):** Trend (Low Freq).
-   **Details ($D$):** Noise (High Freq).

## III. Theoretical Framework

### 3.1 Multiresolution Analysis (MRA)
Financial data contains structure at different scales.
-   Intraday: Microstructure noise.
-   Daily: Swing trends.
-   Monthly: Macro cycles.
MRA separates these layers perfectly. We can de-noise the signal by deleting the $D_1$ (High Freq) coefficient and reconstructing the signal.

### 3.2 The Mexican Hat
A wavelet that looks like a hat (Second derivative of Gaussian).
Perfect for detecting "Peaks" and "Edges" in price data (Singularity detection).

## IV. Strategic Applications

### 4.1 Wavelet De-Noising
1.  Run DWT.
2.  Thresholding: Set small coefficients (Noise) to 0.
3.  Inverse DWT.
4.  Result: A clean price curve that preserves sharp edges (Jumps) unlike Moving Averages which blur edges. **Zero-Lag Smoothing.**

### 4.2 Fractal Singularity Trading
Hurst Exponent can be estimated locally using Wavelets.
Detect sudden changes in local regularity (Hölder exponent).
Predicts volatility explosions before they happen.

## V. Exercises

**Exercise 1 (Visualizing):**
FFT gives a 2D plot (Freq vs Power).
Wavelet gives a 3D plot (Time vs Scale vs Power).
You can see the "heartbeat" of the market changing over the day (Open/Close volatility vs Lunch lull).

**Exercise 2 (Filter Bank):**
Separate a price signal into 3 bands.
Band 1: HFT Noise. (Ignore).
Band 2: Daily Swing. (Trade).
Band 3: Secular Trend. (Hold).
Wavelets do this mathematically perfectly with orthogonal basis functions.

## VI. References
-   Daubechies, I. *Ten Lectures on Wavelets*.
-   Percival, D.B. *Wavelet Methods for Time Series Analysis*.
