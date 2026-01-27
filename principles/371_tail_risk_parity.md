# Tail Risk Parity: The Bleed Budget

## I. Executive Summary

**Tail Risk Parity** redefines asset allocation not by Mean Variance (Markowitz), but by **Tail Loss contribution**. A 60/40 portfolio is 90% Equity Risk in the tail (Stocks crash 50%, Bonds rally 10%). Tail Parity seeks to balance the portfolio so that no single risk factor dominates the "Left Tail" outcome. This often involves allocating a specific **Budget** (e.g., 50 bps/year) to buy explicit Tail Hedges.

## II. Formal Definitions

### Definition 2.1 (The Barbell)
98% in Safe Assets (T-Bills, High Grade Credit).
2% in Hyper-Risky Tail Hedges (Deep OTM Puts, VIX Calls).
If Market Flat: Safe Assets yield covers the Hedge Bleed. Net Return $\approx$ 0-2%.
If Market Crimes: Hedge explodes 50x. Portfolio doubles.
Taleb's Strategy.

### Definition 2.2 (Risk Budgeting)
Traditional Risk Parity: Equal Volatility contribution.
Tail Risk Parity: Equal Expected Shortfall (ES) contribution.
Requires leveraging Bonds and Commodities, and buying options on Equities.

## III. Theoretical Framework

### 3.1 The Bleed vs The Crash
Payoff of Hedge = $\max(K-S, 0) - Premium$.
Probability of Crash ($p$) is low.
Premium is high (Skew).
Is $E[Payoff] > 0$? Usually No.
Insurance has negative expected value.
But Utility of Wealth is concave ($U(W)$).
Loss of 50% is infinite pain (Ruin).
Therefore, paying for negative EV insurance is rational to avoid Ruin.

### 3.2 False Diversification
2008 showed that Real Estate, Credit, and Equities are all one asset ("Risk On") in the tail.
Only safe havens (USD, Gold, Treasuries) and Volatility (VIX) work.
Tail Parity forces allocation to these true diversifiers.

## IV. Strategic Applications

### 4.1 The Second Leg
Buying Puts is easy. Monetizing them is hard.
When market crashes 20%, Puts are up 500%.
Do you sell?
If market recovers (V-shape), you look like a genius.
If market goes to -50%, you sold too early.
Strategy: Roll down strikes. Sell the ITM put, buy OTM puts. Lock in profit, maintain hedge.

### 4.2 Inflation Tails
Tail Risk is not just Deflation (1929).
It is also Hyperinflation (1923).
Hedges: TIPS, Gold, Commodity Cals.
A robust Tail Parity portfolio hedges both tails.

## V. Exercises

**Exercise 1 (Kelly Criterion):**
Using Tail Hedges allows higher leverage on the core portfolio.
Because Ruin probability is truncated.
Optimal Bet Size increases.
Cost of hedge is "Cost of Leverage."

**Exercise 2 (Defining the Tail):**
Is a -10% correction a tail?
No, that's noise.
Hedges should only kick in at -15% or -20%.
Paying for -5% protection is too expensive (ATM volatility).

## VI. References
-   Spitznagel, M. *The Dao of Capital*.
-   Asness, C. *Risk Parity*.
