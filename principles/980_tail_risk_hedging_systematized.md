# Tail Risk Hedging Systematized

## I. Executive Summary

**Tail Risk Hedging** (Spitznagel/Taleb) involves buying deep Out-of-the-Money (OTM) Puts to protect against **Black Swans**. Most of the time, this strategy bleeds small amounts of premiums ("Bleed"). When a crash occurs, the Puts explode (100x), covering losses and providing **Dry Powder** to buy the bottom. It turns the portfolio **Antifragile**.

## II. Formal Definitions

### Definition 2.1 (Convexity Payoff)
Linear: Market -10%, Hedge +10%. (Short Futures).
Convex: Market -10%, Hedge +5%. Market -20%, Hedge +50%. Market -30%, Hedge +500%.
Options are convex.
Gamma increases as price drops.
You want Convex protection for Crashes, not Correction protection.

### Definition 2.2 (Cost of Carry)
The "Insurance Premium."
If you spend 2% of NAV per year on/Puts.
And Market is flat.
You drag performance by 2%.
Goal: Minimize Cost of Carry while maintaining Convexity.
Monetizing volatility spikes to fund the protection.

## III. Theoretical Framework

### 3.1 The Universa Strategy
Hold 97% S&P 500 (Passive).
Hold 3% OTM Puts (2-month expiry, rolled constantly).
If Market crashes 30%, Puts cover the *entire* loss.
Result: CAGR of Equity, Volatility of Bonds?
Actually better: "CAGR of Equity + Rebalancing Bonus."
Buying stocks when they are -40% using the Put profits.

### 3.2 VIX Calls vs SPX Puts
Buying VIX Calls is a proxy for Puts.
VIX explodes in crashes.
Often cheaper than SPX Puts (Skew).
But VIX futures have "Roll Yield" drag (Contango).
Timing entry is hard. Systematizing is better.

## IV. Strategic Applications

### 4.1 The Second Leg Down
Tail Hedging is most valuable *after* the initial crash.
Most investors panic sell at bottom.
Tail Hedger sells the Puts (High Profit), buys Stocks.
Psychological advantage: You are rooting for the crash.

### 4.2 Put Spreads (Reducing Cost)
Buy 10% OTM Put. Sell 20% OTM Put.
Capped protection.
Cheaper.
But cuts off the "Extreme Tail" (Antifragility).
Universa rejects spreads. They want the unlimited upside of the crash.

## V. Exercises

**Exercise 1 (March 2020):**
S&P down 34% in 3 weeks.
Tail Funds up 3000-4000%.
Portfolios with 3% allocation were flat or up.
Allowed them to buy Tech stocks at the bottom.
The defining moment for the strategy.

**Exercise 2 (The Bleed Tolerance):**
2010-2019.
Bull Market.
Tail Hedgers looked like idiots (Underperforming S&P by 3% a year).
Career risk.
Requires "Structural Patience."

## VI. References
-   Spitznagel, M. *Safe Haven*.
-   Taleb, N. *Antifragile*.
