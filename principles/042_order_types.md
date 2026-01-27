# Order Types: Mechanics of Exchange Interaction

## I. Executive Summary

The interaction between a trader and the market (the Exchange or ECN) is mediated through **Orders**. An order is a set of instructions defining *what*, *how much*, and *when* to trade. Professional trading requires a mastery of order types not just to enter positions, but to manage liquidity, minimize slippage, and hide intentions (Iceberg orders). The two fundamental atomic limits of the market are Price and Time; every order trades off certainty in one for uncertainty in the other.

## II. Formal Definitions

### Definition 2.1 (Market Order)
An instruction to execute immediately at the best available current price.
-   **Priority:** Time (Immediate).
-   **Certainty:** Execution (Yes), Price (No).
-   **Aggression:** Takes Liquidity (Crosses the spread).
-   **Cost:** Spread + Slippage + Commission.

### Definition 2.2 (Limit Order)
An instruction to execute only at a specified price $P_{limit}$ or better.
-   **Priority:** Price.
-   **Certainty:** Price (Yes), Execution (No).
-   **Passivity:** Adds Liquidity (Sits on the book).
-   **Reward:** Often earns a rebate (Maker fee < Taker fee).

### Definition 2.3 (Stop Order)
An instruction to become a **Market Order** once a specific price trigger $P_{stop}$ is touched.
-   **Usage:** Protection (Stop Loss) or Momentum Entry (Stop Entry).

## III. The Order Book (Level 2) Mechanics

The Central Limit Order Book (CLOB) is a queue of Limit Orders sorted by Price then Time.

### 3.1 FIFO (First-In, First-Out)
If Agent A places a Limit Buy at 1.1000 at $t=1$, and Agent B places the same order at $t=2$, Agent A must be filled completely before Agent B receives any shares.

### 3.2 Slippage Dynamics
A large Market Order of size $Q$ "walks the book."
$$AveragePrice = \frac{\sum P_i V_i}{Q}$$
This mechanical reality means Market Orders have a variable cost function depending on market depth.

## IV. Advanced Order Types (Algorithmic)

### 4.1 Stop-Limit
"Trigger at $P_{stop}$, but do not fill worse than $P_{limit}$."
-   **Risk:** If the market gaps over the limit, the order is skipped, leaving the position unprotected.
-   **Use:** Entering breakouts where paying too high destroys the R:R.

### 4.2 OCO (One Cancels the Other)
A pair of conditional orders (e.g., Take Profit Limit and Stop Loss Stop). If one executes, the other is automatically cancelled. Essential for unsupervised trade management.

### 4.3 Iceberg Orders
Dividing a large "Parent" size $Q$ into small "Visible" chunks $q$. When $q$ is filled, a new $q$ is reloaded from the hidden reserve.
-   **Purpose:** To prevent moving the market (signaling high demand).
-   **Detection:** High volume printing at a single price level without the price moving or the visible size changing.

## V. Strategic Execution

### 5.1 Crossing the Spread (Taking)
Use Market Orders when:
-   The "Alpha" (Signal) is time-sensitive (News, Breakout).
-   The cost of missing the trade > Cost of spread.

### 5.2 Resting Orders (Making)
Use Limit Orders when:
-   Trading Mean Reversion (catching a falling knife).
-   Closing positions (Take Profit).
-   The market is illiquid (Spread is wide).

### 5.3 Trailing Stops
A dynamic Stop Order that follows price by a fixed distance $\delta$.
$$P_{stop}(t) = \max(P_{stop}(t-1), High(t) - \delta)$$
Locks in profits without capping upside (letting winners run).

## VI. Exercises

**Exercise 1 (Slippage Calculation):**
Order Book:
-   Offer 1.0500: 10 Lots
-   Offer 1.0502: 20 Lots
-   Offer 1.0505: 50 Lots
You send a Market Buy for 50 Lots.
a) Calculate the Weighted Average Fill Price.
b) Calculate the Slippage relative to the Best Ask (1.0500).

**Exercise 2 (Stop Logic):**
Why is a "Sell Stop" placed *below* the current market price, while a "Sell Limit" is placed *above*? Explain the conditional logic of each.

**Exercise 3 (Risk):**
During a "Flash Crash," price drops from 100 to 80 in 1 second. You had a Stop Loss at 95.
a) At what price are you likely filled?
b) If you had used a Stop-Limit (Stop 95, Limit 94), what would have happened? Which outcome is worse?

## VII. References
-   Harris, L. (2003). *Trading and Exchanges: Market Microstructure for Practitioners*.
-   Johnson, B. (2010). *Algorithmic Trading and DMA*.
-   Interactive Brokers. *Order Types Guide*.
