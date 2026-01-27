# Fourier Transform: Signal Processing in Finance

## I. Executive Summary

Financial time series look random in the **Time Domain**. But in the **Frequency Domain**, hidden cycles and periodicities appear. The **Fourier Transform** decomposes any complex signal into a sum of simple sine waves. This allows traders to filter noise (High Frequency) and isolate trends (Low Frequency) using Digital Signal Processing (DSP) techniques.

## II. Formal Definitions

### Definition 2.1 (DFT - Discrete Fourier Transform)
$$X_k = \sum_{n=0}^{N-1} x_n e^{-i 2\pi k n / N}$$
-   $x_n$: Price signal at time $n$.
-   $X_k$: Strength (Amplitude/Phase) of frequency $k$.

### Definition 2.2 (FFT - Fast Fourier Transform)
An algorithm (Cooley-Tukey) to compute DFT in $O(N \log N)$ complexity instead of $O(N^2)$. This speed makes real-time DSP possible.

## III. Theoretical Framework

### 3.1 Spectral Density
The "Power Spectrum" reveals which frequencies dominate the market.
-   **White Noise:** Flat spectrum (All frequencies equal).
-   **Market Data:** $1/f$ Noise (Pink Noise). Low frequencies (Trends) have high power; High frequencies (Noise) have low power but are numerous.

### 3.2 The Uncertainty Principle
You cannot know both Time and Frequency perfectly.
-   High precision in Frequency (Cycle length) requires a long Time window (Lag).
-   Low Lag requires a short Time window (poor Frequency resolution).
*Trade-off:* Wavelet Transforms attempt to solve this.

## IV. Strategic Applications

### 4.1 Ehlers Filters (MESA)
John Ehlers applies DSP to trading.
-   **SuperSmoother:** Removes high-frequency Aliasing noise to produce a lag-free MA.
-   **Cycle Mode:** If a dominant cycle is detected (e.g., 20 days), tune oscillators to half that period (10 days).

### 4.2 HFT Signature Detection
Algos often operate on fixed clocks (e.g., VWAP buying every 1 minute).
FFT detects a spike at Frequency = 1/60Hz.
Predatory algos can front-run this periodic liquidity injection.

## V. Exercises

**Exercise 1 (Filtering):**
Raw Signal: Trend + Random Noise.
FFT: Large spike at Low Freq (Trend). Grass at High Freq (Noise).
Strategy: Low-Pass Filter (Cut off high frequencies). Inverse FFT.
Result: Smooth Trend line without lag.

**Exercise 2 (Seasonality):**
Run FFT on 10 years of Wheat futures.
You will see massive spikes at 1 year (Harvest) and 0.5 year frequencies.
This mathematically confirms seasonality.

## VI. References
-   Ehlers, J. *Rocket Science for Traders*.
-   Ehlers, J. *Cycle Analytics for Traders*.
