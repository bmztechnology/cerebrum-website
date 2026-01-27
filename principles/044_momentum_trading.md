# Momentum Trading: Newton's First Law in Finance

## I. Executive Summary

Momentum Trading is a strategy that capitalizes on the continuance of existing trends in the market. It is based on the financial corollary to Newton's First Law of Motion: "An object in motion tends to stay in motion unless acted upon by an unbalanced force." In financial terms, an asset that has performed well in the recent past ($t-1$) is statistically likely to perform well in the near future ($t+1$). This phenomenon, observed across asset classes (stocks, forex, commodities) for over 200 years, challenges the Efficient Market Hypothesis (EMH).

## II. Formal Definitions

### Definition 2.1 (Momentum Factor)
The raw momentum $M$ of an asset at time $t$ over a lookback window $k$ (formation period) is defined as:
$$M_t(k) = \ln(P_t) - \ln(P_{t-k})$$
Or simply the Rate of Change:
$$ROC_k = \frac{P_t - P_{t-k}}{P_{t-k}}$$

### Definition 2.2 (Standardized Momentum)
To compare assets with different volatilities, we standardize the momentum score:
$$Z_t = \frac{M_t(k)}{\sigma_t(k)}$$
Where $\sigma_t(k)$ is the volatility of returns over the period $k$.

## III. Theoretical Framework

### 3.1 Behavioral Explanations
Why does Momentum persist?
1.  **Under-reaction (Anchoring):** Investors are slow to update their beliefs when new information arrives. Prices drift slowly toward fair value rather than jumping instantly.
2.  **Over-reaction (Herding):** As the trend becomes obvious, late-stage retail capital chases performance (FOMO), pushing price *beyond* fair value (Overshoot).
3.  **Disposition Effect:** Investors tend to sell winners too early (checking the price rise) and hold losers too long. This selling pressure creates a drag that prolongs the trend.

### 3.2 Mathematical Model (Jegadeesh & Titman, 1993)
Return of a Momentum Strategy ($R_{mom}$):
$$R_{mom} = E[R_{winners} - R_{losers}] > 0$$
Empirically, the "Win-Minus-Lose" portfolio generates significant positive alpha.
$$\alpha_{mom} \approx 1\% \text{ per month}$$

### 3.3 The Momentum Crash
Momentum is not a free lunch. It exhibits "negative skewness." It wins small often, but crashes spectacularly when the market regime shifts (e.g., 2009 rebound).
$$Kurtosis(R_{mom}) \gg 3 \quad \text{(Fat Tails)}$$

## IV. Strategic Implementation

### 4.1 Cross-Sectional Momentum (Relative)
**Rank** all available pairs (e.g., 28 major pairs) based on $ROC(20)$.
-   **Long:** Top Decile (Top 3).
-   **Short:** Bottom Decile (Bottom 3).
*Advantage:* Market Neutral. If the whole market crashes, the shorts hedge the longs.

### 4.2 Time-Series Momentum (Absolute)
For a single asset $i$:
-   **Signal:** If $M_t(k) > 0$ relative to Risk-Free Rate, Go Long.
-   **Signal:** If $M_t(k) < 0$, Go Cash or Short.
*Trend Following* is a form of Time-Series Momentum.

### 4.3 Dual Momentum (Gary Antonacci)
Current industry standard.
Combine both:
1.  **Relative:** Is Asset A stronger than Asset B? (Selection).
2.  **Absolute:** Is Asset A actually rising? (Filter).
*Rule:* Buy the S&P 500 only if it is outperforming Bonds AND above its own MA(200).

## V. Exercises

**Exercise 1 (Calculation):**
Asset A: Price 100 $\to$ 110. Volatility 5%.
Asset B: Price 50 $\to$ 58. Volatility 10%.
Calculate the Standardized Momentum Score ($Z$) for both. Which asset is the better momentum trade?

**Exercise 2 (Portfolio Design):**
Design a "Rotation Strategy."
-   Universe: Audit USD, EUR, JPY, GBP.
-   Lookback: 3 Months.
-   Rebalance: Monthly.
Explain the logic of "switching horses" every month. What is the primary risk? (Hint: Whipsaw/Transaction Costs).

**Exercise 3 (Momentum Life Cycle):**
Describe the volume profile of a momentum Trade.
a) Ignition (High Vol).
b) Drift (Low/Medium Vol).
c) Climax (Extreme Vol).
At which stage does the "Smart Money" exit?

## VI. References
-   Jegadeesh, N., & Titman, S. (1993). *Returns to Buying Winners and Selling Losers*. Journal of Finance.
-   Antonacci, G. (2014). *Dual Momentum Investing*.
-   Moskowitz, T.J., et al. (2012). *Time Series Momentum*.
