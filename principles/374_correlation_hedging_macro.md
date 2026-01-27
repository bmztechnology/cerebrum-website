# Correlation Hedging Macro: The Proxy

## I. Executive Summary

**Correlation Hedging** (or Macro Hedging) uses broad Asset Class relationships to hedge specific risks. Instead of buying expensive Puts on a specific stock, a trader Shorts a correlated Index, Currency, or Sector. It relies on the stability of **Statistical Correlation**. The risk is **Basis Risk**: The correlation breaks down exactly when the hedge is needed.

## II. Formal Definitions

### Definition 2.1 (The Proxy)
Portfolio: Long Tech Stocks.
Hedge: Short QQQ (Direct). Expensive/Hard to borrow?
Hedge: Long USD/JPY?
Theory: Tech Rally $\implies$ Risk On $\implies$ JPY Weakens (USD/JPY Up).
Tech Crash $\implies$ Risk Off $\implies$ JPY Strengthens (USD/JPY Down).
Shorting JPY is a "Proxy Hedge" for Long Tech.

### Definition 2.2 (Cross-Asset Correlation Matrix)
Risk Managers monitor the $N \times N$ matrix.
Regime Switching:
-   **Normal:** Correlations low. Diversification works.
-   **Panic:** Correlations $\to$ 1. "All correlations go to 1 in a crisis."
-   **Exceptions:** USD and Treasuries (Negative correlation).

## III. Theoretical Framework

### 3.1 Conditional Correlation
$\rho(Stock, Bond)$ changes.
1980-2000: Positive (Inflation focus).
2000-2020: Negative (Growth focus. "Fed Put").
2022-Present: Positive (Inflation focus).
Heding Stocks with Bonds is dangerous if correlation regime flips positive.

### 3.2 Implied Correlation
vte. Index Volatility vs Single Stock Volatility.
If Index Vol is high relative to Stock Vols, Market expects high correlation.
Trade: Long Index Options / Short Stock Options. (Dispersion Trade).

## IV. Strategic Applications

### 4.1 The "AUD/JPY" Risk Metric
Australian Dollar (Growth/Commodities) vs Japanese Yen (Safe Haven).
A pure barometer of Global Risk Sentiment.
If Equity Portfolio is dropping, Short AUD/JPY is often a cleaner, more liquid hedge than selling the stocks.

### 4.2 Oil as a Hedge
For Airline: Oil is a cost (Hedge: Long Oil Futures).
For Russia ETF: Oil is revenue (Hedge: Short Oil Futures).
Macro hedges must align with the fundamental drivers of the PnL.

## V. Exercises

**Exercise 1 (Idiosyncratic Break):**
Long Facebook. Hedge: Short Nasdaq.
Facebook earnings miss (-20%). Nasdaq flat.
Hedge provides no relief.
"Basis Risk" realized.

**Exercise 2 (Flight to Quality):**
Crisis hits.
Junk Bonds crash. Treasuries rally.
Hedge High Yield portfolio with Treasury Futures?
Usually works.
Unless crisis is a Sovereign Debt Downgrade (US downgrade). Then both crash.

## VI. References
-   Mecci, J.P. *Correlation Trading*.
-   Engle, R. *Dynamic Conditional Correlation*.
