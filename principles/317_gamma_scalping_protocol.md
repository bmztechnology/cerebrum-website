# Gamma Scalping Protocol: Monetizing Volatility

## I. Executive Summary

**Gamma Scalping** is the active management of a Long Volatility position (Straddle/Strangle) to offset Time Decay (Theta). By continually **re-hedging** the Delta exposure back to neutral (Buying Low, Selling High), the trader extracts realized volatility from the market. The goal is for the scalping profits to exceed the daily Theta bill.

## II. Formal Definitions

### Definition 2.1 (The Scalp Loop)
1.  Start: Long Straddle. Delta = 0.
2.  Market Rises. Delta becomes +10. PnL Positive (Option gain > Delta lag).
3.  Action: Sell 10 shares. Delta $\to$ 0. Lock in profit.
4.  Market Falls (back to start). Delta becomes -10.
5.  Action: Buy 10 shares. Delta $\to$ 0. Lock in profit.
Result: You own the same option, but have cash in bank from the stock flip.

### Definition 2.2 (Scalping Threshold)
When to hedge?
-   **Too often:** Transaction costs eat profit.
-   **Too rare:** Delta exposure gets too large (Directional risk).
-   **Zakamouline's Optimal Band:** Hedge when $\Delta H = (3/2 \cdot e \cdot C / \Gamma)^{1/3}$.
Balance between Transaction Cost ($C$) and Gamma risk.

## III. Theoretical Framework

### 3.1 Gamma vs Theta
$$ Profit = 0.5 \Gamma (\Delta S)^2 - \Theta \Delta t $$
For profit > 0, we need $(\Delta S)^2 > 2 \Theta dt / \Gamma$.
The stock must move *enough* to cover the rent.
Implied Volatility predicts the Break-even move.
If Stock moves MORE than IV predicts, Scalping is profitable.

### 3.2 Path Dependency
Scalping makes money on *Volatile* paths irrespective of direction.
Straddle: 100 $\to$ 200. (Make Money).
Straddle: 100 $\to$ 150 $\to$ 50 $\to$ 100. (Option PnL = 0. Scalping PnL = Massive).
Scalping monetizes the "wiggles."

## IV. Strategic Applications

### 4.1 Reverse Scalping (Short Gamma)
Short Option position.
Market moves. Delta grows against you.
You must Hedge to stop the pain.
Buy High / Sell Low.
Locking in losses.
Hope that Theta Income > Hedging Losses.
"Defense" strategy.

### 4.2 Liquidity Provision
Gamma Scalpers provide liquidity.
They place limit orders to Buy (below) and Sell (above).
They stabilize the market... until they run out of capacity.

## V. Exercises

**Exercise 1 (The Holiday Crush):**
Theta pays every day (calendar).
Gamma opportunity exists only when market is open (trading).
Long Holidays (Christmas) are bad for Gamma Scalpers.
Theta bills pile up with no scalping revenue.

**Exercise 2 (Earnings Announcement):**
Stock gaps 10%.
Massive Gamma profit (Convex).
You hedge ONCE after the gap.
Capture the entire move.
Scalping logic works for Gaps too (Discrete hedging).

## VI. References
-   Sinclair, E. *Option Trading: Pricing and Volatility Strategies*.
-   Baird, A. *The Option Trader's Hedge Fund*.
