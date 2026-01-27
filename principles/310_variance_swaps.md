# Variance Swaps: Pure Convexity

## I. Executive Summary

A **Variance Swap** is an OTC derivative that allows investors to trade **Realized Volatility** directly against a fixed Strike. Unlike VIX options (which trade Implied Vol), Variance Swaps settle based on the squared returns of the realization. This creates a **Convex Payoff**: Long Variance makes massive profits if Vol explodes, much more than a Volatility Swap or Straddle.

## II. Formal Definitions

### Definition 2.1 (Payoff Function)
$$ Payoff = N_{var} \times (\sigma_{realized}^2 - K_{var}^2) $$
-   $N_{var}$: Variance Notional (Vega Notional / 2K).
-   $\sigma_{realized}$: Annualized Realized Vol over the period.
-   $K_{var}$: Strike Volatility.
Key: Payoff is linear in Variance ($\sigma^2$), which means it is **Quadratic** in Volatility.

### Definition 2.2 (Replication)
You can replicate a Variance Swap by holding a portfolio of Options across All Strikes ($1/K^2$ weighting).
This "Log Contract" captures all convexity.
Market Makers hedge Var Swaps by buying such a strip of options.

## III. Theoretical Framework

### 3.1 Convexity Benefit
If you Buy Vol Swap at 20%. Realized = 40%. Profit = 20 points.
If you Buy Var Swap at 20%. Realized = 40%.
$40^2 - 20^2 = 1600 - 400 = 1200$ points.
The "Square" term amplifies the win.
Ideal for Tail Hedging.

### 3.2 Capped Variance Swaps
Because payoff can be infinite.
Dealers often sell "Capped" swaps (Max Vol = 60%).
Limits the convexity payoff.
Cheaper to buy.

## IV. Strategic Applications

### 4.1 Short Variance Income
Selling Variance (Short Vol).
Consistent income (VRP).
Risk: If Vol spikes, you owe $\sigma^2$.
Blowup risk is extreme.
Used by Pension Funds to enhance yield (implicitly or explicitly).

### 4.2 Dispersion via Variance
Sell Index Variance.
Buy Single Stock Variance.
Betting that Stocks will move, but Index won't (Low Correlation).
Variance Swaps are the cleanest instrument for this because they remove Delta risk perfectly (no path dependency if hedged continuously).

## V. Exercises

**Exercise 1 (2020 Covid Calculation):**
Strike = 20.
Realized = 80.
Vol profit: $80 - 20 = 60$.
Var profit: $6400 - 400 = 6000$.
Factor of 100x vs 3x.
This is why Var Swaps are the "Nuclear Weapon" of hedging.

**Exercise 2 (Mark to Market):**
Swap value changes daily as Realized Vol accumulates.
$Value_t = w(Realized) + (1-w)(Implied)$.
Weighting shifts from Implied to Realized over time.

## VI. References
-   Demeterfi, K., et al. *More Than You Ever Wanted to Know About Volatility Swaps*.
-   Bossu, S. *Advanced Equity Derivatives*.
