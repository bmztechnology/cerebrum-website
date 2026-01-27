# Tail Risk Hedging Taleb and Universa

## I. Executive Summary

**Tail Risk Hedging** (Black Swan Protection) involves buying deep **Out-of-the-Money (OTM) Puts** to profit from extreme market crashes (3-sigma events). Unlike insurance (which has a negative expectation), Tail Hedging aims to provide **Convexity**: small bleed in calm markets, massive exponential payout in crashes. This liquidity injection allows the portfolio to rebalance (buy cheap stocks) at the bottom.

## II. Formal Definitions

### Definition 2.1 (The Bleed)
Cost of Carry.
Buying 20% OTM Puts every month.
Cost $\approx$ 50-100bps per year (drag).
Psychology: Can you endure 10 years of small losses for 1 day of 5000% gain?
Most investors capitulate before the crash.

### Definition 2.2 (Convexity $\Gamma$)
Payoff profile is non-linear.
Linear Short: Market down 10%, Short up 10%.
Convex Put: Market down 10%, Put up 50%. Market down 20%, Put up 300%.
This convexity combats "Correlation Breakdown" (where diversification fails).

## III. Theoretical Framework

### 3.1 The Barbell Strategy
90% Safe Assets (T-Bills).
10% Hyper-Aggressive (Tail Hedge + VC).
Expected Return: Low Volatility, High Geometric Mean.
Avoids the "Middle" (Moderate Risk / Moderate Return) which is vulnerable to blowups.

### 3.2 Implied Volatility Surface
Skew.
OTM Puts trade at premium to ATM Puts.
"Crashophobia."
Hedger checks: Is the Skew too steep?
If Skew is vertical, Puts are too expensive.
Switch to Put Spreads? (Caps the convexity, but reduces cost).

## IV. Strategic Applications

### 4.1 Monetization
When do you sell the Puts?
VIX spikes to 80 (2020 COVID).
Market liquidity evaporates.
Tail Fund sells Puts. Cash flood.
Reinvests cash into S&P 500 at bottom.
"Liquidity Provider of Last Resort."

### 4.2 Indirect Hedges
VIX Calls.
Long Dollar (USD usually spikes in crisis).
Long Gold?
Correlation reliability issue.
Only Puts are guaranteed to payout on price drop.

## V. Exercises

**Exercise 1 (The Cost of Wait):**
Universa returned 3600% in March 2020.
AUM \$4B $\implies$ \$144B gain?
No, returns are on *invested capital* (The tiny premium), not notional.
The actual cash impact on the total portfolio is what matters.

**Exercise 2 (Second Order Greeks):**
Vanna (Sensitivity of Delta to Vol).
Volga (Sensitivity of Vega to Vol).
In a crash, Vanna and Volga accelerate the Put values.

## VI. References
-   Taleb, N. *The Black Swan*.
-   Spitznagel, M. *The Dao of Capital*.
