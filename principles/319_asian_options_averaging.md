# Asian Options: The Averaging Effect

## I. Executive Summary

**Asian Options** payoff depends on the **Average Price** of the underlying asset over the option's life, rather than the final price. This averaging mechanism significantly reduces **Volatility** (since averages fluctuate less than spot prices), making Asian Options **cheaper** than Vanillas. They are standard in Commodities (Oil, Metals) to hedge average procurement costs.

## II. Formal Definitions

### Definition 2.1 (Arithmetic vs Geometric)
-   **Arithmetic Average:** $\frac{1}{N} \sum S_i$. (Hard to price - Sum of Lognormals is not Lognormal).
-   **Geometric Average:** $(\prod S_i)^{1/N}$. (Easy to price - Product of Lognormals is Lognormal).
Real world uses Arithmetic (Geometric is purely academic convenience).

### Definition 2.2 (Payoff Formula)
$Payoff = \max(A - K, 0)$.
Where $A$ is the average.
Or "Average Strike": $\max(S_T - A, 0)$.
Floating Strike Asian.

## III. Theoretical Framework

### 3.1 Volatility Dampening
$\sigma_{asian} \approx \sigma / \sqrt{3}$.
Volatility of the average is much lower.
Therefore, Vega is lower.
Option Premium is approx 50% of Vanilla.
Ideal for end-users (Airlines) who buy fuel every day, not just on expiry.

### 3.2 Delta Behavior
At start ($t=0$), Delta is small.
As $t \to T$, the Average becomes "fixed" (Past prices don't change).
Uncertainty collapses.
Towards the end, Delta $\to$ 0 (if OTM) or 1 (if ITM).
The option behaves like a Forward.

## IV. Strategic Applications

### 4.1 Commodity Hedging
Refinery buys crude oil constantly.
If they hedge with Vanilla Puts, they have "Basis Risk" (Price on Expiry might not yield realized cost).
Asian Put matches their accounting reality (Monthly Average Price).
Perfect Hedge.

### 4.2 Manipulation Resistance
Vanilla Options are prone to "Banging the Close" (Manipulating Spot at expiry).
Asian Options are immune.
Manipulating one day's price only affects $1/30$th of the average.
Preferred by Regulators.

## V. Exercises

**Exercise 1 (Pricing the Arithmetic):**
Use Moment Matching (Turnbuli-Wakeman).
Match the first two moments (Mean, Variance) of the Arithmetic Sum to a Lognormal distribution.
Then use Black-Scholes.
Accuracy is usually sufficient.

**Exercise 2 (Sampling Frequency):**
Daily vs Weekly vs Monthly averaging.
More frequent sampling $\implies$ Lower Volatility $\implies$ Cheaper Option.
Continuous sampling is theoretical limit.

## VI. References
-   Kemna, A.G.Z., & Vorst, A.C.F. *A Pricing Method for Options Based on Average Asset Values*.
-   Curran, M. *Valuing Asian Options*.
