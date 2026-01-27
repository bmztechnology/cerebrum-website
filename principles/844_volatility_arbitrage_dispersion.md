# Volatility Arbitrage Dispersion Trading

## I. Executive Summary

**Volatility Arbitrage** trades the spread between **Implied Volatility (IV)** (Option Price) and **Realized Volatility (RV)** (Actual movement). **Dispersion Trading** is a specific structural arbitrage: Shorting Index Volatility (e.g., S&P 500) and Longing Component Volatility (e.g., Apple, Amazon). It bets that correlation between stocks is lower than the market implies.

## II. Formal Definitions

### Definition 2.1 (The Correlation Trade)
$$ \sigma_{Index}^2 = \sum w_i^2 \sigma_i^2 + \sum \sum w_i w_j \sigma_i \sigma_j \rho_{ij} $$
If $\rho_{ij}$ (Correlation) drops, Index Volatility drops, even if Component Volatility stays high.
Dispersion Trader: Sell Index Straddle (Short Correlation). Buy Stock Straddles (Long Idiosyncratic risk).
Profits if stocks move wildly in *opposite* directions (Flat Index).

### Definition 2.2 (Variance Risk Premium)
Historically IV > RV.
Selling options generates positive yield.
"Insurance Selling."
Dispersion captures this premium on the Index leg, while hedging the Gamma risk with valid stock options.

## III. Theoretical Framework

### 3.1 Earnings Season
Individual stocks jump on earnings (High Component Vol).
Index doesn't jump (moves cancel out).
Dispersion profitability peaks during earnings.
"Gamma harvesting."

### 3.2 The Index Skew
Index Puts are expensive (Crash protection).
Single Stock Puts are cheaper.
Buying Stock Puts / Selling Index Puts $\implies$ Arbitraging the Skew.

## IV. Strategic Applications

### 4.1 VIX Arbitrage
VIX Futures vs S&P 500 Options.
If VIX Future trades at 20, but synthesized VIX from SPX options is 18.
Sell Future / Buy SPX Straddle.
Convergence trade.

### 4.2 Correlation Breakdown
2022 Market.
Tech down, Energy up.
Index flat(-ish).
Dispersion funds minted money.
Stocks moving independently.

## V. Exercises

**Exercise 1 (Gamma Scalping):**
Long Straddle on Apple.
Apple moves +5%. Delta $\uparrow$. Sell Stock.
Apple moves -5%. Delta $\downarrow$. Buy Stock.
Locked in profit from the move.
Pays for the Theta decay.

**Exercise 2 (Short Vol Blowout):**
XIV Fund (Short VIX).
Feb 2018 ("Volmageddon").
VIX doubled in one day.
XIV went to zero.
Short Vol is "Picking up pennies in front of a steamroller."

## VI. References
-   Sinclair, E. *Volatility Trading*.
-   Bennett, C. *Trading Volatility*.
