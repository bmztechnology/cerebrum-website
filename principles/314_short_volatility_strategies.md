# Short Volatility Strategies: The Carry Trade

## I. Executive Summary

**Short Volatility** involves selling Options (Puts/Calls/Straddles) to collect Premium. It relies on the **Variance Risk Premium** (IV > RV). It generates steady income ("Yield Enhancement") with high win rates (90%), but carries **Negative Convexity** (Tail Risk). It is famously described as "Eating like a bird and pooping like an elephant."

## II. Formal Definitions

### Definition 2.1 (strategies)
1.  **Covered Call:** Long Stock + Short Call. (Capped upside, buffered downside).
2.  **Cash Secured Put:** Short Put (backed by cash). (Bullish/Neutral).
3.  **Iron Condor:** Short OTM Call + Short OTM Put (Defined Risk).
4.  **Short Straddle:** Short ATM Call + Short ATM Put (Max Aggression).

### Definition 2.2 (The Risk Profile)
Concave.
Small moves = Profit (Theta).
Big moves = Loss (Gamma).
Loss accelerates.
Requires active management (Rolling/Closing) to survive.

## III. Theoretical Framework

### 3.1 The VRP Persistence
Why does VRP exist?
1.  **Demand for Insurance:** Funds buy Puts to hedge. They are price insensitive.
2.  **Lottery Ticket Bias:** Retail buys OTM Calls.
Sellers accommodate this demand and charge a premium.
It is a "Risk Transfer" fee.

### 3.2 Rolling vs Taking the Loss
Stock drops. Short Put is ITM.
Trader "Rolls Down and Out" (Buy back Put, Sell lower strike Put in next month).
Realizes loss closer, extends risk further.
Martingale strategy?
Works if market mean reverts.
Kills you in a sustained trend (2008 or 2022).

## IV. Strategic Applications

### 4.1 Systemic Vol Selling
Pension Funds selling Puts.
"Put Write Indices" (PUT, BXM).
Often outperform S&P 500 on risk-adjusted basis (Sharpe Ratio).
But suffer larger drawdowns during crashes.

### 4.2 0DTE (Zero Days to Expiry) Selling
Selling SPX Options that expire today.
Collecting pure Theta/Gamma.
High turnover.
"Picking up pennies in front of a steamroller moving at light speed."
Flash Crash risk increased.

## V. Exercises

**Exercise 1 (Option Pinning):**
Short Vol traders act as "dampeners."
They buy dips and sell rips (to hedge).
This suppresses realized volatility.
Until the move overcomes their capacity $\to$ Then they must cover $\to$ Volatility explosion.
"Vol Control Funds" dynamic.

**Exercise 2 (Margin Call):**
Short Vol requires Margin.
Crash increases Margin Requirement (Span margin).
Forced liquidation of Short Puts involves BUYING Puts.
Buying Puts increases Vol.
Feedback loop.

## VI. References
-   Ilmanen, A. *Expected Returns*.
-   CBOE. *Benchmark Indexes (BXM, PUT)*.
