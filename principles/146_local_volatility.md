# Local Volatility: The Dupire Equation

## I. Executive Summary

Stochastic Volatility (Heston) is elegant but hard to calibrate perfectly to today's market prices. Bruno Dupire (1994) asked: "Is there a *deterministic* volatility function $\sigma(S, t)$ that perfectly recovers the observed market prices of all options?" The answer is **Local Volatility**. It fits the Smile perfectly by assuming Volatility is a function of Price Level and Time.

## II. Formal Definitions

### Definition 2.1 (The Dupire Formula)
$$\sigma_{loc}^2(K, T) = \frac{\frac{\partial C}{\partial T} + rK \frac{\partial C}{\partial K}}{ \frac{1}{2} K^2 \frac{\partial^2 C}{\partial K^2} }$$
-   $C(K,T)$: Call Prices in the market.
-   Requires a smooth surface of option prices.

### Definition 2.2 (Implied vs Local)
-   **Implied Vol:** Average volatility over the life of the option.
-   **Local Vol:** Instantaneous volatility *at* that specific strike/time.
*Analogy:* Implied is "Average Speed" of a trip. Local is "Speedometer reading" at mile marker K.

## III. Theoretical Framework

### 3.1 The Calibration Problem
Banks have thousands of option quotes.
Local Volatility is the unique surface that hits every quote.
It creates a "Tree" where nodes have different volatilities.

### 3.2 Dynamics (The Flaw)
Local Vol predicts the smile *moves* with the spot price.
-   If Spot falls, the local vol at the new spot is high.
-   Reality: The smile "floats" or stays relative to moneyness.
-   Result: Local Vol hedges are unstable dynamically.

## IV. Strategic Applications

### 4.1 Barrier Option Pricing
Standard Black-Scholes fails for Barriers because it assumes flat vol.
Local Vol accurately prices the "Vol Skew" at the Barrier level.
e.g., Down-and-Out Put. If vol is high at the barrier (low price), likelihood of Knock-out is higher $\implies$ Option is cheaper.

### 4.2 Sticky Delta vs Sticky Strike
Dupire assumes **Sticky Strike** (Vol depends on fixed K).
Markets often follow **Sticky Delta** (Vol depends on Moneyness S/K).
Traders mix Local and Stochastic Vol (LSV Models) to fix this.

## V. Exercises

**Exercise 1 (Denominator):**
Look at Dupire's denominator: $\frac{\partial^2 C}{\partial K^2}$ (Butterfly Spread density).
If the density is small (low probability of ending there), Local Vol must be HUGE to explain why the option has value.
This is why Local Vol explodes in the wings.

**Exercise 2 (Arbitrage):**
If $\frac{\partial C}{\partial T} < 0$ (Calendar Spread negative), $\sigma^2$ becomes negative. Impossible.
This implies Static Arbitrage exists in the market data (e.g., Bad quotes).

## VI. References
-   Dupire, B. *Pricing with a Smile*.
-   Derman, E., & Kani, I. *The Volatility Smile and Its Implied Tree*.
