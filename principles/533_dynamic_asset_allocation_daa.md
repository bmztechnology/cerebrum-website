# Dynamic Asset Allocation DAA: Trend Rules

## I. Executive Summary

**Dynamic Asset Allocation (DAA)** (or Tactical Asset Allocation with rules) adjusts weights systematically based on market conditions, typically using **Trend Following** (Momentum) or **Volatility** signals. Unlike discretionary TAA (prediction-based), DAA is reactive and rule-based. Its primary goal is **Drawdown Protection** ("Avoid the Bear Market") rather than outperformance in Bull Markets.

## II. Formal Definitions

### Definition 2.1 (Moving Average Crossover)
Rule:
-   If Price > 200-Day Moving Average: 100% Equity.
-   If Price < 200-Day Moving Average: 100% Cash (or Bonds).
Historically avoids major crashes (2000, 2008).
Pays "Whipsaw Tax" in choppy markets.

### Definition 2.2 (Dual Momentum - GEM)
Gary Antonacci.
1.  **Absolute Momentum:** Is Asset Positive vs Cash? (Trend).
2.  **Relative Momentum:** Is US better than Int'l? (Selection).
Allocation: Buy the winner, IF the winner is positive. Else Cash.

## III. Theoretical Framework

### 3.1 Convexity Profile
DAA looks like a **Long Straddle** or Protective Put.
Participates in upside (mostly).
Cuts downside.
Payoff profile is convex.
Cost: Whipsaws (False signals).
Whipsaws > Option Premium?
Empirically, DAA is cheaper than buying Puts.

### 3.2 Correlation Management
In crashes, correlations go to 1.
Diversification fails.
DAA works because it *exits* the asset class entirely.
Cash allows correlation to go to zero.

## IV. Strategic Applications

### 4.1 Ivy Portfolio / GTAA
Meb Faber.
5 Asset Classes (US, EAFE, REIT, Comm, Bond).
Buy those > 10M MA. Cash those < 10M MA.
Simple, robust.
Reduces drawdown from 50% to 15-20%.

### 4.2 Risk On / Risk Off ETF
RORO.
Allocates based on VIX / Currencies.
Attempts to capture the "Regime."

## V. Exercises

**Exercise 1 (Lag):**
MA is a lagging indicator.
Crash 1987 (1 day -20%).
MA strategy sells *after* the crash.
Fails against "Flash Crashes."
Works against "Slow Grinding Bears" (2000, 2008).

**Exercise 2 (Taxes):**
High turnover. Short-term gains.
Inefficient in taxable accounts.
Best for IRAs.

## VI. References
-   Faber, M. *The Ivy Portfolio*.
-   Antonacci, G. *Dual Momentum Investing*.
