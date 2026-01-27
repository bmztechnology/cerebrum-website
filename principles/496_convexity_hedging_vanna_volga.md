# Convexity Hedging Vanna Volga: The Wings

## I. Executive Summary

**Convexity Hedging** involves managing the non-linear risks of a portfolio. Standard Duration hedging (Delta) works for small moves. Large moves require **Gamma/Convexity** coverage. Traders use **Vanna** (Sensitivity of Vega to Spot) and **Volga** (Sensitivity of Vega to Vol) to manage the "Wings" or tails of the distribution. In MBS, "Negative Convexity" is the monster that must be fed with Swaptions.

## II. Formal Definitions

### Definition 2.1 (The Greeks Recap)
-   **Delta:** First derivative (Price/Rate).
-   **Gamma:** Second derivative (Convexity).
-   **Vega:** Volatility sensitivity.
-   **Vanna:** $\frac{\partial Vega}{\partial Spot}$. (Does Vol rise when Rates fall?).
-   **Volga:** $\frac{\partial Vega}{\partial Vol}$. (Convexity of Volatility). Long Volga = Long Tails.

### Definition 2.2 (The Convexity Vortex)
1. Rates Fall.
2. MBS Prepay. Duration Shortens.
3. Investors (who need duration) must BUY Bonds (or Rec Swaps).
4. Buying Bonds lowers Rates further.
5. Loop repeats.
Self-reinforcing feedback loop caused by convexity hedging.

## III. Theoretical Framework

### 3.1 Buying Wings
To hedge negative convexity (MBS), buy Straddles/Strangles (Swaptions).
Long Gamma profile.
If Rates stable: Theta burn (Time decay) hurts. High cost of carry.
If Rates break out: Gamma profits offset MBS losses.

### 3.2 Skew Trading
Vanna measures the Skew (Payer Vol vs Receiver Vol).
If Payer Skew is high (Market fears rate hike), buying Payers is expensive.
Hedge with Receivers? Or sell Payers and buy Delta?

## IV. Strategic Applications

### 4.1 Delta-Hedging Volatility
Selling a Straddle.
Re-hedging Delta daily.
If realized volatility < Implied volatility sold $\implies$ Profit.
"Short Gamma" strategy.
Profitable in quiet markets. Suicide in crashes.

### 4.2 Rebalancing Frequency
Gamma hedging requires frequent rebalancing.
Transaction costs vs Hedge Safety.
"Whalley-Wilmott" Optimal Hedging Band.

## V. Exercises

**Exercise 1 (The Smile):**
Long Volga trade: Buy OTM Strangle / Sell ATM Straddle.
Vega neutral.
Profits if Smile steepens (Wings get expensive).
Crisis hedge.

**Exercise 2 (Realized vs Implied):**
MBS Investors are implicitly "Short Volatility."
If they buy Swaptions (Long Vol) to hedge.
They are locking in the "Vol Risk Premium."
Usually expensive.
Many run naked convexity risk to earn yield.

## VI. References
-   Taleb, N. *Dynamic Hedging*.
-   Wystup, U. *Vanna-Volga Pricing*.
