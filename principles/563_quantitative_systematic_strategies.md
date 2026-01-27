# Quantitative Systematic Strategies: The Black Box

## I. Executive Summary

**Quantitative Strategies** (Quant) use mathematical models and automated algorithms to identify and execute trades. Unlike discretionary managers, Quants rely on **Backtesting**, **Signal Processing**, and **Statistical Inference**. Strategies range from **High Frequency Trading (HFT)** (microseconds) to **Statistical Arbitrage (Stat Arb)** (days) to **Systematic Trend** (months). The core belief is that market inefficiencies are small, fleeting, but statistically significant when harvested at scale.

## II. Formal Definitions

### Definition 2.1 (The Signal)
$S_t = f(X_t)$.
$X_t$: Input vectors (Price, Volume, Earnings, Twitter sentiment).
$f$: The model (Linear Regression, Neural Network, Decision Tree).
Signal strength determines position size.

### Definition 2.2 (Execution Cost)
Quants often trade small edges. Slippage kills the alpha.
$Alpha_{net} = Alpha_{gross} - TC$.
TC (Transaction Costs) includes Commission, Spread, and Market Impact.
Algo execution models (VWAP/TWAP) are crucial.

## III. Theoretical Framework

### 3.1 Mean Reversion vs Momentum
Most Quant strategies boil down to:
1.  **Mean Reversion:** Price moved too far, will snap back (Liquidity Provision).
2.  **Momentum:** Price is moving, will continue (Information Diffusion).
Frequency separates them. (HFT is mean reversion, Trend is momentum).

### 3.2 Overfitting
The cardinal sin.
Mining data until you find a pattern that is just noise.
In-Sample vs Out-of-Sample testing.
"P-Hacking."

## IV. Strategic Applications

### 4.1 Statistical Arbitrage (Stat Arb)
Long/Short Equity but with 1,000+ names.
Pairs trading on steroids (PCA based factors).
Rebalancing daily.
Targeting Sharpe > 2.0.

### 4.2 Alternative Data
Satellite imagery (Walmart parking lots).
Credit Card data.
Web scraping.
Edge comes from unique data, not just unique models.
"Information asymmetry."

## V. Exercises

**Exercise 1 (Sharpe Ratio Decay):**
Strategies decay as AUM grows.
Market Impact increases.
"Capacity" of a strategy.
Why Medallion Fund is closed to outsiders.

**Exercise 2 (Correlation Breakdown):**
Quant Quake 2007.
Deleveraging event.
All Quants held the same positions (Crowding).
Liquidation by one fund caused losses for all.
Model risk.

## VI. References
-   Lopez de Prado, M. *Advances in Financial Machine Learning*.
-   Narang, R. *Inside the Black Box*.
