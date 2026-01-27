# Slippage Modeling: The Hidden Tax

## I. Executive Summary

**Slippage** is the difference between the decision price (Paper Portfolio) and the execution price (Real Portfolio). It is not random error; it is a function of Liquidity, Volatility, and Order Size. Professional quants model slippage explicitly to determine **Capacity**—the maximum capital a strategy can handle before alpha decays to zero.

## II. Formal Definitions

### Definition 2.1 (Implementation Shortfall - IS)
$$IS = \text{Dir} \times (P_{avg} - P_{decision}) + \text{Fees}$$
-   $P_{decision}$: Mid-price when the algo said "Buy".
-   $P_{avg}$: Average fill price.
-   IS captures both Slippage and Delay Cost.

### Definition 2.2 (The Square Root Law)
$$Cost(Q) = \sigma \cdot Q_{daily} \cdot \alpha \sqrt{\frac{Q}{Q_{daily}}}$$
Slippage increases with the *square root* of the participation rate.
Doubling your size increases per-share cost by $\approx 40\%$.

## III. Theoretical Framework

### 3.1 Decay of Alpha
Strategy Edge: $E[Ret]$.
Cost: $C(AUM)$.
Net Return $R = E[Ret] - C(AUM)$.
As AUM grows, $C(AUM)$ grows non-linearly.
At $AUM_{crit}$, $R=0$. This is the Capacity.

### 3.2 Slippage Components
1.  **Spread Cross**: Paying the spread (Instant cost).
2.  **Market Impact**: Your trade moves the price away (Temporary).
3.  **Information Leakage**: Your trade tells others to buy, moving price permanently.

## IV. Strategic Applications

### 4.1 Capacity Estimation
If Backtest Sharpe = 2.0 with Slippage=0.
Add Slippage Model ($1bp + 0.1bp \times Volume$).
If Sharpe drops to 0.5, the strategy is unscalable.
*Rule:* Always simulate rigid execution costs.

### 4.2 Trade Reject Logic
If Predicted Slippage > Expected Return of Trade, **Do Not Trade**.
Many retail algos fail because they take "valid signals" in illiquid conditions where the cost exceeds the profit potential.

## V. Exercises

**Exercise 1 (The $1B Problem):**
Fund A returns 20% on $10M.
Can it return 20% on $1B?
No. To move $1B, you become the market.
Slippage will eat 15%.
Net Return = 5%.

**Exercise 2 (Stop Loss Slippage):**
In backtest, Stop Loss fills at exactly 100.00.
In reality, if market is crashing, fill is 99.50.
Quantify "Slippage Risk" as a separate volatility component.

## VI. References
-   Perold, A.F. *The Implementation Shortfall: Paper versus Reality*.
-   Grinold, R., & Kahn, R. *Active Portfolio Management*.
