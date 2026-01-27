# Gamma Scalping Strategies

## I. Executive Summary

**Gamma Scalping** is the monetization of Long Gamma. By owning options (Long Vol) and dynamically delta hedging, a trader generates profits from the "Buy Low, Sell High" rebalancing activity. The goal is for the **Scalping P&L** to exceed the **Theta Bill** (Time Decay). It is purely a trade on **Realized Volatility** vs **Implied Volatility**.

## II. Formal Definitions

### Definition 2.1 (The P&L Equation)
$$ P\&L \approx \frac{1}{2} \Gamma S^2 (\sigma_{realized}^2 - \sigma_{implied}^2) \Delta t $$
If $\sigma_{realized} > \sigma_{implied}$, profit.
If $\sigma_{realized} < \sigma_{implied}$, loss (Theta eats you).
Every hedge locks in a small profit ("Scalp").

### Definition 2.2 (Scalping Frequency)
Trade-off:
Scalp every tick? Impact costs eat profit.
Scalp once a day? Miss the intraday volatility.
Optimal Strategy: Scalp when the accumulated moves cover the spread.

## III. Theoretical Framework

### 3.1 The Variance Swap Link
Gamma Scalping is a manual Variance Swap.
A Variance Swap pays pure $(\sigma_{real}^2 - \sigma_{imp}^2)$.
Scalping approximates this, but path dependent.
Buying a Straddle + Scalping = "Trading Volatility."

### 3.2 Reverse Scalping
Short Gamma position.
"Sell High, Buy Low" (Pain).
But you collect Theta.
Hope the market stays flat.
If market moves, you "bleed" money rebalancing.

## IV. Strategic Applications

### 4.1 Event Volatility
Earnings Announcement.
Gap Risk.
Cannot scalp the gap (Discrete jump).
Gamma models fail on jumps.
Need to "Pre-hedge" or use options specific to jump risk (e.g., OTM wings).

### 4.2 The "Smile" Trade
Buying OTM Puts (High Implied). Scalping them?
Hard to win because Implied is so high.
Buying ATM Straddle (Lower Implied). Scalping.
Easier to beat the hurdle.

## V. Exercises

**Exercise 1 (The Perfect Day):**
Stock opens 100.
Goes to 102. (Sell delta).
Goes to 98. (Buy delta + Buy profit).
Closes at 100.
Net Delta P&L: Huge.
Change in Price: 0.
Gamma Scalper loves "Choppy" markets.

**Exercise 2 (The Trend Day):**
Stock goes 100 $\to$ 101 $\to$ 102 $\to$ 103.
Scalper Sells at 101, Sells at 102, Sells at 103.
Selling too early.
Market keeps running.
Gamma profit is positive, but you are effectively "Legging out" of the upside.

## VI. References
-   Bennett, C. *Trading Volatility*.
-   Sinclair, E. *Volatility Trading*.
