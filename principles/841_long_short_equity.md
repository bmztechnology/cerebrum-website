# Long Short Equity Fundamental vs Quant

## I. Executive Summary

**Long/Short Equity** is the classic Hedge Fund strategy. **Fundamental** managers (Tiger Cubs) Analyze businesses to find undervalued (Long) and overvalued (Short) stocks. **Quant** managers (AQR, Two Sigma) use factors (Momentum, Value, Quality) and statistical models. The goal is to remove Market Beta and capture **Idiosyncratic Alpha**.

## II. Formal Definitions

### Definition 2.1 (Net and Gross Exposure)
Long: \$100M. Short: \$60M.
**Gross Exposure:** \$160M (Leverage metric).
**Net Exposure:** \$40M (Market Direction metric).
**Beta Adjusted Net:** Adjusting for Beta of shorts vs longs.
Objective: Net Beta $\approx$ 0 (Market Neutral).

### Definition 2.2 (The Fundamental Short)
Accounting Fraud (Enron).
Obsolete Tech (Kodak).
Fads (Loop).
Difficult game: Maximum upside 100% (Price to 0). Maximum downside Infinite.
Crowded Shorts: When heavily shorted stocks rally (GameStop), L/S funds face ruin.

## III. Theoretical Framework

### 3.1 Factor Neutrality (Quant)
Don't just be Market Neutral.
Be Sector Neutral (Long Tech / Short Tech).
Be Size Neutral.
Be Momentum Neutral.
Isolate pure Alpha.
"Residualizing the return."

### 3.2 Tiger Cub Model
Concentrated Longs (10 stocks).
Diversified Shorts (Basket).
Leverage.
High Volatility.
Betting on stock selection skills.
Risk: Correlation 1.0 in Tech sell-off (2022).

## IV. Strategic Applications

### 4.1 Pair Trading
Coca-Cola (KO) vs Pepsi (PEP).
Statistical cointegration.
If Spread widens $> 2\sigma$, Short winner / Buy loser.
Mean Reversion.
Breaking the pair: Structural change (e.g., one buys a snack company) kills the cointegration.

### 4.2 The Pod Shop (Multi-Manager)
Citadel / Millennium.
Hundreds of separate PMs (Portfolio Managers).
Tight Risk Limits: "If you lose 5%, you are fired."
Result: High Sharpe Ratio, Low Volatility.
Strategy: Neutralizing all factors, harvesting scraps of Alpha.

## V. Exercises

**Exercise 1 (Identifying a Short Squeeze):**
High Short Interest (> 20% of Float).
High Cost to Borrow (> 50% fee).
Catalyst (Good news).
Rush to cover.
L/S Manger must manage borrow risk.

**Exercise 2 (Earnings Drift):**
Post-Earnings Announcement Drift (PEAD).
Quant signal.
Stock beats earnings $\implies$ Buy.
Drift continues for weeks.
Persistence of information.

## VI. References
-   Grinold, R. *Active Portfolio Management*.
-   Einhorn, D. *Fooling Some of the People All of the Time*.
