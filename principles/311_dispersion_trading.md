# Dispersion Trading: Correlation Arbitrage

## I. Executive Summary

**Dispersion Trading** exploits the pricing inefficiency between Index Options (e.g., S&P 500) and the Options of its constituent stocks (e.g., Apple, Microsoft). Typically, Index Implied Volatility is *lower* than the weighted average of Constituent Volatilities due to **Correlation**. If Correlation is overpriced, one sells Index Vol and buys Constituent Vol.

## II. Formal Definitions

### Definition 2.1 (The Relationship)
$$ \sigma_{index}^2 \approx \sum w_i^2 \sigma_i^2 + \sum \sum w_i w_j \sigma_i \sigma_j \rho_{ij} $$
Basically: Index Var = Weighted Stock Vars + **Correlation Term**.
If $\rho = 1$, Index Vol = Avg Stock Vol.
If $\rho = 0$, Index Vol < Avg Stock Vol (Diversification).
Dispersion trades the difference between Implied Correlation ($\rho_{implied}$) and Realized Correlation ($\rho_{realized}$).

### Definition 2.2 (The Trade Structure)
-   **Short:** S&P 500 Straddle (Short Index Vol).
-   **Long:** Straddles on Top 50 Stocks (Long Stock Vol).
-   **Vega Neutral:** Weights adjusted so net Vega = 0.
-   **Profit:** You want Stocks to move violently (High Stock Vol) but in opposite directions so Index stays flat (Low Index Vol).

## III. Theoretical Framework

### 3.1 Implied Correlation Index (COR3M / KCDE)
Market prices correlation.
In Panic, Cor $\to$ 1.
In Bull Market, Cor $\to$ 0.3.
Dispersion is "Short Correlation."
Best time to enter: When Index Vol is expensive relative to components (High Implied Correlation) $\to$ Bet on normalization.

### 3.2 Earnings Season
Stocks move on earnings (High Idiosyncratic Vol).
Index doesn't move as much (Earnings cancel out).
Dispersion thrives during earnings season.

## IV. Strategic Applications

### 4.1 The "Dirty" Dispersion
Instead of buying all 500 stocks options.
Buy options on the "Top 5" (AAPL, MSFT, NVDA, AMZN, GOOG).
Sell SPY options.
Proxy dispersion.
Risk: The Top 5 *are* the index. Correlation is naturally high.

### 4.2 Merger Arbitrage
Merger targets have high idiosyncratic risk.
Index has none.
Including targets in the "Long Vol" basket boosts dispersion returns.

## V. Exercises

**Exercise 1 (The Correlation Crash):**
If you are Short Correlation (Long Dispersion).
And Market Crashes.
Correlation goes to 1.
Your Hedge ratio breaks.
You lose on the Short Index Vol MORE than you make on the Long Stock Vol.
Dispersion has "sysytemic tail risk."

**Exercise 2 (Pricing Skew):**
Index Puts are bid up by hedgers (High Skew).
Stock Puts are less bid up (Lower Skew).
Selling Index Puts funds the purchase of Stock Puts.
Capturing the "Skew Premium" differential.

## VI. References
-   Driessen, J., et al. *The Smile, the Skew and the Term Structure of Implied Volatility Patterns*.
-   CBOE. *Implied Correlation Indices*.
