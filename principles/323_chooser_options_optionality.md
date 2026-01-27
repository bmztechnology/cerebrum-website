# Chooser Options: Buying Optionality

## I. Executive Summary

A **Chooser Option** (or "As You Like It" option) allows the holder to decide, at a specific future date ($T_1$), whether the option is a **Call** or a **Put**. It is essentially an option on an option. This maximizes flexibility in volatile, directionless markets, capitalizing on the assumption that a large move will occur, but the direction is unknown.

## II. Formal Definitions

### Definition 2.1 (Payoff Structure)
At time $T_1$ (Choice Date), Holder chooses $\max(C(T_1), P(T_1))$.
Final Expiry is $T_2$.
Value = Call($T_2$) + Put($T_1$; Strike $X_{put}$ = Call Price at $T_1$)?
Simpler definition: Value = Call($S, K, T_2$) + Put($S, K, T_2$) - Put($S, K, T_2-T_1$)?
It is cheaper than a Straddle (Buy Call + Buy Put) because you have to commit at $T_1$.

### Definition 2.2 (Simple vs Complex)
-   **Simple Chooser:** Call and Put have same Strike and Expiry.
-   **Complex Chooser:** Call has Strike $K_1$, Put has Strike $K_2$. Expiries differ.

## III. Theoretical Framework

### 3.1 Parity Pricing
At $T_1$, if $C > P$, choose Call.
If $C < P$, choose Put.
Value at $T_1 = \max(C, P)$.
Using Put-Call Parity: $\max(C, S - K e^{-rt} + C) = C + \max(0, K e^{-rt} - S)$.
Chooser = Call($T_2$) + Put($T_1$, Strike = $K e^{-r(T_2-T_1)}$).
It decomposes into a Vanilla Call and a Put with shorter expiry.

### 3.2 Volatility Bias
Chooser options are Long Vega.
But specifically, they are **Long Forward Volatility**.
Sensitivity to the volatility between $T_1$ and $T_2$.

## IV. Strategic Applications

### 4.1 Pre-Event Straddle Alternative
election in 1 month ($T_1$).
You want to be long the winner.
Buy Straddle? Expensive (Theta burn).
Buy Chooser (Decide after election).
Cheaper?
Market prices the "Choice" premium.
If Event Vol is priced high, Chooser is expensive.

### 4.2 Corporate Contingency
Company bidding for a project in Japan (Need Yen) or UK (Need GBP).
Doesn't know which one yet.
buys Chooser Option on FX.
Reduces hedging cost vs buying both hedges.

## V. Exercises

**Exercise 1 (Limit Case):**
If $T_1 = T_2$ (Choose at expiry).
Payoff = $\max(S-K, K-S, 0) = |S-K|$.
This is exactly a Straddle.
The Chooser converges to a Straddle as Choice Date approaches Expiry.
The discount comes from the time gap.

**Exercise 2 (Gamma Profile):**
Before choice: Long Gamma (Like Straddle).
After choice: Long Gamma (Like Call or Put).
Always Long Gamma.
No "sign flip" risk.

## VI. References
-   Rubinstein, M. *Options for the Undecided*.
-   Hull, J.C. *Options, Futures, and Other Derivatives*.
