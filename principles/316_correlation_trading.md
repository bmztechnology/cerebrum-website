# Correlation Trading: The Implied Link

## I. Executive Summary

**Correlation Trading** treats the correlation coefficient ($\rho$) between assets as a tradable parameter. It is the sophisticated cousin of Pairs Trading. In Options, it manifests as the difference between Index Volatility and Constituent Volatility. "Trading the basket vs the pieces." Strategies include Dispersion (Short Correlation) and Correlation Swaps.

## II. Formal Definitions

### Definition 2.1 (Implied Correlation)
Reverse engineered from Option Prices.
If AAPL Vol = 20, MSFT Vol = 20.
S&P 500 Vol = 15.
Implied $\rho \approx 0.5$.
If S&P 500 Vol = 20, Implied $\rho = 1.0$.
Formula involves variance weights.

### Definition 2.2 (Market Regimes via Rho)
-   $\rho \to 1$: Panic / Systemic Risk (Macro dominates). Stocks move together.
-   $\rho \to 0$: Stock Picker's Market (Idiosyncratic dominates). Dispersion high.
Trading the Transition between regimes.

## III. Theoretical Framework

### 3.1 Correlation Swap
OTC Product.
Payoff = $Notional \times (\rho_{realized} - K_{rho})$.
Pure bet on correlation structure.
Used by Multi-Strategy Funds to hedge portfolio diversification failure.
(If stocks all fall together, diversification fails. Long Correlation Swap pays out).

### 3.2 The Diversification Benefit
Why is Index Vol < Avg Stock Vol?
Because stocks cancel out.
Long Energy / Short Tech. Index flat.
Sellers of Index Options benefit from this cancellation.
Buyers of Dispersion benefit when cancellation *doesn't* happen (or happens less than expected).

## IV. Strategic Applications

### 4.1 Long Correlation Trade
Buy Index Calls. Sell Stock Calls.
Bet: Index Rallies, but specific stocks lag?
Or rather: Betting that a rally will be Broad-Based (Sector Rotation correlates).
Cheap way to get index leverage if $\rho$ is low.

### 4.2 Sector Dispersion
Trading Correlation within a Sector (e.g., XLF Financials).
JPM vs BAC vs C.
Easier to manage than S&P 500 dispersion.
Macro trade: Rates up $\implies$ All Banks up ($\rho \to 1$).
Micro trade: Credit loss specific to one bank ($\rho \to 0$).

## V. Exercises

**Exercise 1 (The 2008 Crash):**
Correlations went to 1.0.
Dispersion traders (Short Correlation) got wiped out.
Index Vol exploded, Stock Vols exploded, but linkage tightened.
Short Index / Long Stock assumes Index won't outpace stocks.
In 2008, Index Puts repriced aggressively (Skew).

**Exercise 2 (Pair Correlation):**
Gold vs Silver.
Trade the correlation breakdown?
Statistical Arbitrage (Cointegration).
Is technically a linear version of correlation trading.

## VI. References
-   Meissner, G. *Correlation Trading*.
-   CBOE. *CBOE S&P 500 Implied Correlation Index*.
