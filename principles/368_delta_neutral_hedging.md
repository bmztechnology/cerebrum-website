# Delta Neutral Hedging: Dynamic Rebalancing

## I. Executive Summary

**Delta Neutral Hedging** is the process of offsetting the directional risk (Delta) of an option portfolio by trading the underlying asset. Since Delta changes with price (Gamma) and time (Charm), the hedge must be adjusted continuously. This **Dynamic Rebalancing** incurs transaction costs and realizes the **Gamma PnL** (Long Gamma = Buy Low/Sell High; Short Gamma = Buy High/Sell Low).

## II. Formal Definitions

### Definition 2.1 (The Hedge Ratio)
Market Maker sells Call ($Delta = 0.5$).
Hedge: Buy 0.5 Shares.
Net Delta = 0.
If price rises to $S+dS$, Call Delta rises to $0.6$ (Gamma).
Hedge is now short 0.1 Delta ($0.5 shares - 0.6 Call$).
Must Buy 0.1 more shares.

### Definition 2.2 (Gamma Rent)
PnL of Hedged Portfolio $\approx \Theta dt + \frac{1}{2}\Gamma dS^2$.
If you are Long Options (Long Gamma, Negative Theta):
You bleed decay ($\Theta$) every day.
You make money rebalancing ($\Gamma$) if $dS$ is large.
Breakeven when Realized Volatility = Implied Volatility.

## III. Theoretical Framework

### 3.1 Discrete Hedging Error
Black Scholes assumes continuous hedging.
In reality, you hedge once a day (or when Delta moves > x%).
Hedging Error adds variance to the PnL.
Volatility of PnL is proportional to $\sqrt{\Delta t}$.

### 3.2 Transaction Costs
Rebalancing costs spread/commission.
Optimal hedging frequency?
Tradeoff between Gamma Risk (unhedged moves) and Transaction Costs.
Whalley-Wilmott Model: "Hedge Band." Don't hedge if Delta is within $\pm \epsilon$.

## IV. Strategic Applications

### 4.1 Volatility Arbitrage
"Trading Vega."
If Implied Vol (20%) > Realized Vol (10%).
Sell Straddle. Delta Hedge it.
You collect Theta (based on 20%).
You pay Gamma losses (based on 10%).
Profit = Difference.
Requires disciplined Delta hedging to isolate Vol from Direction.

### 4.2 Gamma Scalping
Long Straddle.
Market goes up. You get Long Delta. Sell shares to flatten. (Sell High).
Market goes down. You get Short Delta. Buy shares to flatten. (Buy Low).
"Scalping" the moves against a long option position.

## V. Exercises

**Exercise 1 (The Pin):**
Expiry day. Strike 100.
Stock buffering around 100.
Gamma is infinite.
Delta flips from 0 to 100 instantly.
Hesitation forces Market Maker to buy 100 at 100.01 and sell 100 at 99.99.
Max pain.

**Exercise 2 (Stop Loss vs Put):**
A Stop Loss is a discrete dynamic hedge (Sell 100% if S < K).
A Put is a continuous dynamic hedge (Sell increasing % as S drops).
Stop Loss suffers from Gap Risk (Execution slippage).
Put guarantees the floor (Contractual).

## VI. References
-   Natenberg, S. *Option Volatility and Pricing*.
-   Taleb, N. *Dynamic Hedging*.
