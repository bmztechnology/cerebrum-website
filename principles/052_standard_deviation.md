# Standard Deviation: Measuring Volatility and Risk

## I. Executive Summary

Standard Deviation ($\sigma$) is the premier statistical measure of dispersion in finance. It quantifies the extent to which a set of values (prices or returns) deviates from their mean ($\mu$). In trading, $\sigma$ is synonymous with **Volatilty** and **Risk**. It assumes that market returns follow a Normal (Gaussian) Distribution—an assumption that is useful but dangerously flawed (Tail Risk). It underpins nearly all modern financial theory (MPT, Black-Scholes, Bollinger Bands, Value at Risk).

## II. Formal Definitions

### Definition 2.1 (Population Standard Deviation)
$$\sigma = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2}$$

### Definition 2.2 (Sample Standard Deviation - Unbiased)
Since we estimate based on a sample of history, we use Bessel's Correction ($N-1$):
$$s = \sqrt{\frac{1}{N-1} \sum_{i=1}^{N} (x_i - \bar{x})^2}$$

### Definition 2.3 (Annualized Volatility)
If $\sigma_{daily}$ is the standard deviation of daily log-returns:
$$\sigma_{annual} = \sigma_{daily} \times \sqrt{252}$$

## III. Theoretical Framework: The Normal Distribution

In a Gaussian world:
-   **68.3%** of events fall within $\mu \pm 1\sigma$.
-   **95.5%** of events fall within $\mu \pm 2\sigma$.
-   **99.7%** of events fall within $\mu \pm 3\sigma$.

### 3.1 The "Black Swan" (Kurtosis)
Financial markets are **Leptokurtic** (Fat Tailed).
Extreme events ($>5\sigma$) happen far more frequently than the Normal model predicts.
-   *Normal Model Prediction for 5$\sigma$:* Once every 7,000 years.
-   *Market Reality:* Once every 3-5 years (Flash Crashes, Devaluations).

## IV. Strategic Applications

### 4.1 Bollinger Bands Construction
Use a moving $\sigma$ estimates to define dynamic support/resistance.
$$Upper = SMA_{20} + 2\sigma$$
-   *Logic:* Price is statistically likely (95%) to stay inside. A move outside is an anomaly (Breakout or Overextended).

### 4.2 Volatility-Adjusted Returns (Sharpe Ratio)
Comparing managers A and B.
-   A: Return 20%, $\sigma = 10\%$. Ratio = 2.0.
-   B: Return 20%, $\sigma = 40\%$. Ratio = 0.5.
Manager A is superior because the path was smoother (less probability of hitting a stop or psychological breaking point).

### 4.3 Stop Loss Placement
Placing stops based on pips (e.g., "Standard 20 pips") is flawed because volatility changes.
Placing stops based on $\sigma$ (e.g., $1.5 \times ATR$, where $ATR \approx \sigma$) normalizes risk across different market regimes.

## V. Exercises

**Exercise 1 (Calculation):**
Closing prices: 10, 12, 11, 14, 13.
a) Calculate the Mean ($\bar{x}$).
b) Calculate the Variance ($s^2$).
c) Calculate the Standard Deviation ($s$).

**Exercise 2 (Probability):**
The EUR/USD daily volatility is 100 pips. The current price is 1.1000.
Assuming a 0 mean change and normal distribution, what is the probability that the price will close between 1.0900 and 1.1100 tomorrow? (Hint: $\pm 1\sigma$).

**Exercise 3 (Critique):**
Why is Standard Deviation considered a "symmetric" risk measure? Why might a trader argue that "Upside Volatility" is good and shouldn't be penalized, leading to the usage of **Semi-Deviation** (Sortino Ratio)?

## VI. References
-   Markowitz, H. (1952). *Portfolio Selection*. (Modern Portfolio Theory).
-   Bollinger, J. (2001). *Bollinger on Bollinger Bands*.
-   Taleb, N.N. (2007). *The Black Swan: The Impact of the Highly Improbable*.
