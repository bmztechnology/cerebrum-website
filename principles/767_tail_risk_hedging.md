# Tail Risk Hedging

## I. Executive Summary

**Tail Risk Hedging** focuses on protecting portfolios from **Black Swans** (3+ Sigma events). Unlike standard diversification (which fails when correlations $\to$ 1), Tail Hedging uses **Convex Derivatives** (Deep OTM Puts, VIX Calls) that pay off exponentially in a crash. The challenge is **Negative Carry**: the cost of bleeding premiums while waiting for the apocalypse.

## II. Formal Definitions

### Definition 2.1 (Bleed vs Convexity)
**Bleed:** The daily cost of the hedge (Theta).
**Convexity:** The non-linear payout.
Goal: Minimize Bleed, Maximize Convexity.
Universa Investments (Spitznagel) philosophy.

### Definition 2.2 (The 1-N Strategy)
Invest 97% in S&P 500.
Invest 3% in Deep OTM Puts (2-year expiry).
If market flat: Lose 3% (approx). Net +5% (Equity moves).
If market crashes 50%:
Equity drops 48.5%.
Puts explode 1000% $\to$ 30% of portfolio.
Total Portfolio flat or up.
Beats "Bond Diversification" in inflation crashes.

## III. Theoretical Framework

### 3.1 Cost of Carry Optimization
Buying short-dated puts? High Gamma, High Theta. Extreme bleed.
Buying long-dated puts? Low Gamma, Low Theta. Low Convexity?
Solution: Far out-of-the-money long-dated puts?
Or "Rolling" strategies?
Or VIX Calls (Pure Vol exposure).

### 3.2 Monetization
Crucial step.
The hedge pays off *during* the crash.
You must **Sell** the hedge (Monetize) and **Buy** the undervalued equity.
Rebalancing at the bottom.
Psychologically difficult (Selling the only green thing on screen).

## IV. Strategic Applications

### 4.1 VIX Futures Contracts
Long VIX ETPs (VXX).
Problem: Contango roll yield destroys value (-5% per month).
Only viable for ultra-short term tactical hedges.
Not a strategic hold.

### 4.2 Ratio Backspreads
Sell 1 ATM Put. Buy 2 OTM Puts.
Fund the toxic wings with the body.
Zero cost?
Risk: Market falls slightly (to the short strike). You lose.
Profit: Market falls massively. You win.
"Valley of Death" P&L profile.

## V. Exercises

**Exercise 1 (The 2020 Payoff):**
Calculate return of 1-month 30-delta Puts vs 1-year 10-delta Puts during March 2020.
Gamma of short-dated puts captured the move best.
Long-dated puts reacted slower (Vega driven).

**Exercise 2 (Carry Trade funding):**
Selling Volatility (Iron Condors) to fund the Tail Hedge?
"Spitznagel's Barbell."
Risk-free tail protection?
Complexity increases fragility.

## VI. References
-   Spitznagel, M. *Safe Haven*.
-   Bhansali, V. *Tail Risk Hedging*.
