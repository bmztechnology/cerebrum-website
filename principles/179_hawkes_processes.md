# Hawkes Processes: Modeling Market Excitement

## I. Executive Summary

Earthquakes come in clusters: a main shock is followed by aftershocks. Financial trades behave the same way. A large buy order triggers algos to buy, triggering stops, triggering FOMO. The **Hawkes Process** is a "Self-Exciting Point Process" used to model buy/sell arrival times. It captures the **Endogeneity** of market volatility—volatility begets volatility.

## II. Formal Definitions

### Definition 2.1 (Intensity Function $\lambda(t)$)
The probability of an event happening right now.
$$\lambda(t) = \mu + \sum_{t_i < t} \alpha e^{-\beta(t - t_i)}$$
-   $\mu$: Baseline intensity (Exogenous news).
-   $\alpha$: Excitement (How much one event increases prob of next).
-   $\beta$: Decay (How fast excitement fades).

### Definition 2.2 (Branching Ratio $n$)
$n = \alpha / \beta$.
-   If $n < 1$: Stable (Sub-critical). Shocks die out.
-   If $n > 1$: Unstable (Super-critical). One trade triggers infinite trades. **Flash Crash.**

## III. Theoretical Framework

### 3.1 Hard vs Soft Response
-   **Hard:** Flash Crash. Feedback loop. Algos reacting to Algos.
-   **Soft:** Normal volatility clustering.
Hawkes allows us to measure the "Reflexivity" of the market quantitatively.

### 3.2 Order Book Dynamics
Buy orders excite Buy orders (Momentum).
Sell orders excite Sell orders (Panic).
Buy orders *inhibit* Sell orders (sometimes).
Multivariate Hawkes Processes model this interplay.

## IV. Strategic Applications

### 4.1 Crash Prediction
Monitor the Branching Ratio $n$ in real-time tick data.
If $n$ approaches 1.0, the market is becoming critical.
*Signal:* Stop trading. Pull quotes.
(Many HFTs use this to avoid getting run over).

### 4.2 Optimal Execution Timing
Don't trade when intensity $\lambda(t)$ is high (Aftershock zone).
Wait for $\lambda(t)$ to decay to $\mu$.
Trade in the quiet gaps between clusters.

## V. Exercises

**Exercise 1 (Viral Marketing):**
Hawkes processes also model Retweets on Twitter.
A Tweet is "Exogenous." Retweets are "Endogenous."
In Finance, News is Exogenous. HFT volume is Endogenous.
Estimates say 70-80% of volume is Endogenous (Self-generated noise).

**Exercise 2 (Calibration):**
Fit to arrival times.
If $\alpha$ is high, the market is "Jumpy."
If $\beta$ is low, the market has "Long Memory" of shocks.

## VI. References
-   Hawkes, A.G. *Spectra of some self-exciting and mutually exciting point processes*.
-   Bacry, E., et al. *Hawkes processes in finance*.
