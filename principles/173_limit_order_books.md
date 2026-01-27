# Limit Order Books (LOB): The Atomic Data

## I. Executive Summary

The **Limit Order Book** is the fundamental reality of the market. "Price" is just an abstraction; the LOB is the actual list of buying and selling interest at every price level. HFT does not trade "price"; it trades the **imbalance** and **depth** of the book. Understanding Level 2 (L2) and Level 3 (L3) data is the differentiator between Retail and Institutional trading.

## II. Formal Definitions

### Definition 2.1 (The Book State)
At time $t$, the book is two sorted lists:
-   **Bids:** $\{ (p_1, v_1), (p_2, v_2), \dots \}$ descending.
-   **Asks:** $\{ (q_1, w_1), (q_2, w_2), \dots \}$ ascending.
-   **Mid-Price:** $(p_1 + q_1) / 2$.
-   **Spread:** $q_1 - p_1$.

### Definition 2.2 (Order Types)
-   **Limit Order:** Adds liquidity (Insert into list). Passive. Earns Spread.
-   **Market Order:** Removes liquidity (Walk the list). Aggressive. Pays Spread.
-   **Cancel:** Removing an unexecuted limit order. (95% of HFT traffic).

## III. Theoretical Framework

### 3.1 Order Book Imbalance (OBI)
$$OBI = \frac{V_{best\_bid} - V_{best\_ask}}{V_{best\_bid} + V_{best\_ask}}$$
-   If $OBI > 0$: Buying pressure > Selling pressure. $\implies$ Price Up.
-   If $OBI < 0$: Selling pressure > Buying pressure. $\implies$ Price Down.
This is the most robust signal in HFT (works on 10ms timeframe).

### 3.2 Price Impact Function
$$Impact(Q) \propto \sqrt{Q}$$
The slippage cost of a trade size $Q$ is not linear; it follows a Square Root Law due to the concave shape of liquidity provision.

## IV. Strategic Applications

### 4.1 Queue Position
LOB is FIFO (First In, First Out).
If 1000 lots are ahead of you at the Best Bid, you will not get filled until they are gone.
**Strategy:** Join queues when they are short. Cancel if they get too long (Adverse Selection: long queue means everyone wants to buy, so price might drop? No, long bid queue usually means support. Wait, if queue starts depleting RAPIDLY, cancel).

### 4.2 Spoofing Detection
Large order appears on Bid side.
retail sees "Support" and buys.
Spoofer cancels order 10ms later.
Algo Logic: Track "Order Life Duration." If large orders have Life < 100ms, ignore them from OBI calculation.

## V. Exercises

**Exercise 1 (Walking the Book):**
Asks: 100@10.01, 500@10.02.
You buy 300.
Fill 1: 100 @ 10.01.
Fill 2: 200 @ 10.02.
Avg Price: $(1001 + 2004)/300 = 3005/300 = 10.0166$.
Slippage = 0.0066.

**Exercise 2 (Shape):**
Why is the book usually V-shaped (More liquidity deeper)?
(Because Market Makers take less risk further from the mid-price. Inside spreads are toxic).

## VI. References
-   Gould, M.D., et al. *Limit Order Books*.
-   Bouchaud, J.P., et al. *Trades, Quotes and Prices*.
