# Rainbow Options: Multi-Asset Correlation

## I. Executive Summary

**Rainbow Options** have payoffs contingent on the performance of **multiple underlying assets**. "Best of" (Himalaya), "Worst of" (Altiplano), or "Spread" options. The key pricing parameter is **Correlation ($\rho$)**. They are widely used in thematic investing (e.g., "Best of Tech, Energy, Gold") and allow dealers to trade correlation aggressively.

## II. Formal Definitions

### Definition 2.1 (Best-of Option)
Payoff = $\max(S_{1,T}, S_{2,T}, ... S_{n,T}, K) - K$.
(Assuming prices normalized).
Value increases as Correlation $\rho \to 0$ or $\rho \to -1$.
Why? If assets are uncorrelated, chance that *at least one* moons is high.
If $\rho=1$, they move together, "Best of" is same as "Any of". Option is cheaper.

### Definition 2.2 (Worst-of Option)
Used in "Autocallable Reverse Convertibles".
You get high coupon, unless the *Worst Performing* stock drops < 50%.
You are Short the "Worst Of" Put.
Value of Put increases as $\rho \to 1$.
Why? If $\rho=0$, chance that *one* stock crashes is high.
If $\rho=1$, they crash together.
Actually, Worst-Of Put is most dangerous when $\rho$ is low?
Yes. Diversification works against you here.

## III. Theoretical Framework

### 3.1 Margrabe's Formula
Exchange Option.
Right to exchange Asset A for Asset B.
Payoff = $\max(S_B - S_A, 0)$.
Equivalent to Call on $S_B$ with Strike $S_A$.
Volatility $\sigma = \sqrt{\sigma_A^2 + \sigma_B^2 - 2\rho \sigma_A \sigma_B}$.
Low correlation $\implies$ High Volatility of spread $\implies$ High Option Value.

### 3.2 Correlation Sensitivity
Rainbows are pure "Correlation plays."
Dealer selling "Best Of" is Short Correlation (if $\rho \downarrow$, Option $\uparrow$, Dealer loses).
Dealer must hedge by buying Correlation Swaps or cross-hedging.

## IV. Strategic Applications

### 4.1 "BRICS" Notes
Note pays return of the *Best Performing* BRICS index.
Marketing: "You get the winner!"
Pricing: BRICS correlations are moderate ($0.5$).
Option is expensive.
Bank sells it $\to$ Wants High Correlation.

### 4.2 Spread Options (Energy)
Crack Spread Option (Long Gas / Short Oil).
Spark Spread (Long Electricity / Short Gas).
Real physical assets (Refineries/Power Plants) are essentially Rainbow Options.
Valuing a Power Plant = Valuing a Spark Spread option.

## V. Exercises

**Exercise 1 (2-Asset Barrier):**
Knock-out if *Either* A or B hits barrier.
Probability of touching increases as Correlation decreases.
(Random walks diverge, covering more space).

**Exercise 2 (The "Worst-Of" Trap):**
Yield Enhancement Note on (AAPL, AMZN, TSLA).
Pays 15%.
Risk: You own the WORST stock at strike.
If TSLA -50% and AAPL +20%.
You lose 50% on principal.
You are effectively Short a Put on the *Minimum* of the basket.
Very dangerous.

## VI. References
-   Margrabe, W. *The Value of an Option to Exchange One Asset for Another*.
-   Stulz, R. *Options on the Minimum or the Maximum of Two Risky Assets*.
