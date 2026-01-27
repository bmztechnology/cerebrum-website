# Volatility Control Funds: Target Volatility

## I. Executive Summary

**Volatility Control (Vol Control)** strategies dynamically adjust exposure to the risky asset (Equity) to maintain a constant portfolio volatility (e.g., 10%). If realized volatility rises, the fund de-leverages (Sells). If volatility falls, it re-leverages (Buys). This creates a better risk-adjusted return (Sharpe Ratio) due to the **Volatility Drag** effect, but introduces path-dependent behavior.

## II. Formal Definitions

### Definition 2.1 (The Algorithm)
Target $\sigma_{tgt} = 10\%$.
Measured $\sigma_{recent}$ (e.g., 20-day rolling).
Exposure $w_t = \min(\frac{\sigma_{tgt}}{\sigma_{recent}}, Cap)$.
if $\sigma_{recent} = 5\% \implies w = 200\%$ (Leverage).
if $\sigma_{recent} = 20\% \implies w = 50\%$ (Cash).

### Definition 2.2 (Volatility Drag)
$CAGR \approx \mu - \frac{1}{2} \sigma^2$.
High volatility reduces compounded returns.
By capping $\sigma$, Vol Control increases CAGR for the same arithmetic mean return.
Avoiding the "50% drawdown requires 100% gain" math.

## III. Theoretical Framework

### 3.1 The Leverage Trap
In low vol regimes (2017), funds lever up to 150%.
Sudden crash (Feb 2018).
Loss is amplified by leverage.
Fund must de-leverage *after* the loss (Sell into the hole).
"Buy High, Sell Low."
Vol Control strategies are effectively Short Gamma / Momentum following.

### 3.2 Signal Lag
Using 20-day historical vol.
Crash happens on Day 1.
Vol measure doesn't spike until Day 2.
Reaction is delayed.
Some funds use Intraday Vol or VIX to speed up reaction.

## IV. Strategic Applications

### 4.1 Insurance Wrappers (Variable Annuities)
Insurers sell guarantees on funds.
They mandate Vol Control Indices.
Reduces the cost of the Put Option the Insurer is implicitly short.
"Smart Beta" for Insurance.

### 4.2 Risk Parity
Risk Parity is essentially Vol Control applied to every asset class individually.
Normalize Bonds to 10% Vol.
Normalize Stocks to 10% Vol.
Then weight equally.

## V. Exercises

**Exercise 1 (The Feedback Loop):**
Trillions of dollars in Vol Control.
Market drops $\implies$ Vol Spikes $\implies$ Funds Sell $\implies$ Market drops more.
Systemic instability.
1987 Portfolio Insurance redux.

**Exercise 2 (Whipsaw):**
Market crashes (Sell).
Market V-shapes back up (Buy back higher).
Vol Control underperforms in chopped/V-shape markets.
Outperforms in long trending Bull or Bear markets.

## VI. References
-   Papenbrock, J. *Volatility Targeting*.
-   Moreira, A., & Muir, T. *Volatility Managed Portfolios*.
