# Implied Volatility Theory: The Market's Fear Gauge

## I. Executive Summary

**Implied Volatility (IV)** is the only unobservable parameter in the Black-Scholes model. It is effectively determined by plugging the Market Price into the equation and solving for $\sigma$. It represents the market's **consensus expectation** of future volatility, including tail risk and panic. It acts as a **mean-reverting asset Class** that is negatively correlated with the market.

## II. Formal Definitions

### Definition 2.1 (Inverse Function)
$$ Price_{observed} = BS(S, K, T, r, \sigma_{implied}) $$
We know everything except $\sigma_{implied}$.
We iterate numerically (Newton-Raphson method) until equality is found.
IV is the "Price of the Option" standardized for Time and Moneyness.

### Definition 2.2 (Realized vs Implied)
-   **RV (Realized Vol):** How much the stock *actually* moves (Historical).
-   **IV (Implied Vol):** How much the market *thinks* it will move.
-   **Variance Risk Premium (VRP):** $IV - RV > 0$.
Generally, IV overstates RV. Sellers of Volatility harvest this premium (Selling Insurance).

## III. Theoretical Framework

### 3.1 The Volatility Smile/Skew
Before 1987, IV was flat across strikes.
After 1987 (Crash), OTM Puts trade at HUGE IV premiums.
"Skew."
Fear of downside crash > Fear of upside meltup.
The Smile implies Non-Normal Distribution (Fat Tails).

### 3.2 Sticky Strike vs Sticky Delta
-   **Sticky Strike:** As stock moves, IV at Strike X stays constant.
-   **Sticky Delta:** As stock moves, IV at "25 Delta" stays constant.
Traders must guess which regime applies to hedge correctly.

## IV. Strategic Applications

### 4.1 IV Rank / Percentile
Stock XYZ has IV of 50%. Is that high?
If XYZ usually has IV 20% $\implies$ High (Sell Vol).
If XYZ usually has IV 100% $\implies$ Low (Buy Vol).
Use IV Rank (0-100 relative to past year) to contextualize "Expensive."

### 4.2 Earnings Plays
Straddles are priced to move $X$.
If you think Move < $X$, sell Straddle.
You are betting IV is "Too High."
If you think Move > $X$, buy Straddle.
Betting IV is "Too Low."
Pure bet on expectation vs reality.

## V. Exercises

**Exercise 1 (The VIX):**
VIX is 30-day IV of S&P 500 options.
NOT a prediction. A reflection of the price of Puts.
VIX Calculation: Weighted average of OTM Puts/Calls.
Model-free variance.

**Exercise 2 (Skew Trade):**
Buy OTM Put (High IV) / Sell ATM Put (Lower IV)?
Ratio Spread.
Betting that Skew is too steep.
Panic often flattens the skew (everything goes to high vol).

## VI. References
-   Derman, E. *The Volatility Smile*.
-   CBOE. *The VIX Whitepaper*.
