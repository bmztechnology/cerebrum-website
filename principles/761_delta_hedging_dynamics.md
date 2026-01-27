# Delta Hedging Dynamics

## I. Executive Summary

**Delta Hedging** is the active process of maintaining a risk-neutral position by trading the underlying asset. Theoretical "Continuous Hedging" is impossible due to transaction costs. **Discrete Hedging** introduces **Path Dependence**. The microstructure of hedging flows—how and when dealers rebalance—creates predictable **Liquidity Demands** that savvy traders can front-run.

## II. Formal Definitions

### Definition 2.1 (The Rebalancing Rule)
Fixed Interval: Hedge every 1 hour.
Fixed Band: Hedge when $|\Delta_{net}| > Threshold$.
Utility Based: Hedge when value of risk reduction > cost of trade.
(Whalley-Wilmott model).

### Definition 2.2 (Hedging Error)
Tracking error between Option payoff and Hedge portfolio.
Sources:
1. Discrete trading (Gamma leakage).
2. Transaction costs (Friction).
3. Model Mis-specification (Vol is not constant).

## III. Theoretical Framework

### 3.1 Positive vs Negative Gamma Hedging
**Long Gamma (Positive):** Buy Low, Sell High.
When Stock Falls, Delta drops. Buy Stock to neutralize.
When Stock Rises, Delta rises. Sell Stock.
Stabilizes the market (Mean Reversion).
**Short Gamma (Negative):** Sell Low, Buy High.
Destabilizes the market (Momentum).
"Chasing the market."

### 3.2 The Pin Risk
At expiration, if ATM.
Delta oscillates $0 \leftrightarrow 1$.
Hedger must buy/sell massive amounts.
Stock gets "Pinned" to strike because Long Gamma hedgers suppress moves.
Once pin breaks, massive move.

## IV. Strategic Applications

### 4.1 Front-Running the Hedge
End of Day (MOC).
Dealers must clean up Delta.
If Market is down 2% and Dealers are Short Gamma.
They MUST sell MOC.
Predictable selling pressure. "Get Short before the Close."

### 4.2 Shadow Gamma
Leveraged ETFs (2x Bull / 3x Bear).
Mathematically identical to a Constant Maturity Option.
They must rebalance at EOD.
Same dynamics as Short Gamma dealers.
Calculable flow via "Rebalance Calculators."

## V. Exercises

**Exercise 1 (Simulation):**
Simulate Short Straddle.
Hedge every 1% move.
Market crashes 10%.
Calculate total loss from "Selling Low."
Compare to Premium collected.
This is the "Realized Variance" cost.

**Exercise 2 (Band Width Optimization):**
Widen hedging bands implies lower Transaction Costs but higher Volatility Risk.
Optimize band width $\delta_{band} \propto (Cost \times \Gamma \times \sigma^2)^{1/3}$.
As costs rise, trade less.
As volatilty rises, trade less? No, trade *more*? Actually, trade less to avoid whip-saw? Complex optimization.

## VI. References
-   Whalley, A. & Wilmott, P. *An Asymptotic Analysis of an Optimal Hedging Strategy*.
-   Elton, E. *Hedging with transaction costs*.
