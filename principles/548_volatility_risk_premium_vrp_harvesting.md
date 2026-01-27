# Volatility Risk Premium VRP Harvesting: Selling Fear

## I. Executive Summary

The **Volatility Risk Premium (VRP)** is the systematic tendency for **Implied Volatility** (Option Price) to exceed **Realized Volatility** (Actual Movement). Investors pay a premium for insurance (Puts), creating a structural edge for sellers of volatility. VRP harvesting strategies (Short Straddles, Variance Swaps, Iron Condors) capture this spread, acting as the "Insurance Companies" of the market.

## II. Formal Definitions

### Definition 2.1 (The Spread)
$$ VRP = IV_{t} - RV_{t, t+\tau} $$
Ideally > 0.
Historically, S&P 500 VRP $\approx$ 3-4% points.
Why?
1.  **Risk Aversion:** Investors hate crashes more than they love rallies.
2.  **Hedging Demand:** Institutions *must* buy puts regardless of price (Mandates).
3.  **Supply Constraints:** Selling vol is dangerous (unlimited loss). Few sellers $\implies$ High Price.

### Definition 2.2 (Variance Swap Payoff)
Pays $N_{var} \times (\sigma_{realized}^2 - K_{var}^2)$.
Seller receives Fixed ($K$), pays Floating ($\sigma$).
Direct exposure to variance.
Convex payout to the buyer. Seller faces immense gap risk.

## III. Theoretical Framework

### 3.1 The "Short Vol" Profile
Small constant gains (collecting theta).
Occasional massive loss (Gamma explosion).
Negative Skew.
"Eating like a bird, pooping like an elephant."
Risk Management: Stop losses? Buying Wings (Iron Condor)?

### 3.2 Path Dependence
Standard options delta hedge PnL depends on path.
VRP strategies usually assume delta hedging (capturing the difference between IV and RV).
If not delta-hedged (Naked Short Put), it's just a Leveraged Equity bet.

## IV. Strategic Applications

### 4.1 Dispersion Trading
Sell Index Vol (Expensive due to hedging demand).
Buy Single Stock Vols (Cheaper).
Bet: Correlation breaks down. Stocks move, but Index stays flat.
VRP arbitrage within the index.

### 4.2 Capped Call Writing (Covered Calls)
Retail "Income" strategy.
Selling upside vol.
Captures a portion of VRP.
Underperforms in strong Bull markets (capped upside).
Outperforms in flat/bear markets.

## V. Exercises

**Exercise 1 (Volmageddon 2018):**
XIV ETF (Short VIX Futures).
VIX spiked from 10 to 50 in hours.
XIV went to zero.
Lesson: Shorting Volatility via Futures is different from Shorting Options. Futures have daily rebalancing leverage.

**Exercise 2 (Put Selling vs Bond):**
Short Put $\approx$ Covered Call $\approx$ Long Equity - Call.
Not a bond replacement.
Correlation to Equity is 0.8.
Don't confuse VRP yield with Interest Rate yield.

## VI. References
-   Carr, P. & Wu, L. *Variance Risk Premiums*.
-   Ilmanen, A. *Expected Returns: Volatility Selling*.
