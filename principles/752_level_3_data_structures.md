# Level 3 Data Structures

## I. Executive Summary

**Level 3 Data** (TotalView, OpenBook) provides the granular details of **every individual order** in the book, inclusive of its **Queue Position** and **Order ID**. Unlike Level 2 (which aggregates volume by price), Level 3 allows reconstruction of the **Execution Priority**. This is essential for estimating **Fill Probabilities** and detecting **Hidden Liquidity**.

## II. Formal Definitions

### Definition 2.1 (The Packet Structure)
Message: `AddOrder(ID=123, Price=10.00, Size=100, Time=t)`.
Message: `CancelOrder(ID=123)`.
Message: `ExecuteOrder(ID=123, Size=50)`.
State: A list of active Order Objects.
L2 is the `groupby(Price).sum()` of L3.

### Definition 2.2 (Queue Priority)
FIFO (First In First Out).
Order A (100 lots) arrives at $t=1$.
Order B (100 lots) arrives at $t=2$.
Total L2 = 200 lots.
Market Sell of 150 lots arrives.
L2 says "200 lots available, you fill."
L3 says "Order A fills 100. Order B fills 50. Order B remains 50."
Knowing you are Order B is critical.

## III. Theoretical Framework

### 3.1 Estimated Position in Queue (EPIQ)
If you don't have L3 data (Retail), you must model EPIQ.
"I joined the bid when volume was 5000. Now volume is 4000. Am I filled?"
Maybe the 1000 cancelations were *behind* you.
L3 removes this uncertainty. You know exactly where you are.

### 3.2 Order Lifecycle Tracking
Tracking specific Order IDs over time.
"Order 555 modifies price 100 times."
Algo fingerprinting.
Identifying a "Pging Algo" or a "Pegged Order" by its behavior ID.

## IV. Strategic Applications

### 4.1 Join Detection
If you join the Bid and suddenly 10,000 lots join *behind* you.
Bullish.
You simulate a "Free Option."
If price goes up, you profit.
If price goes down, the 10,000 lots protect you (they get hit first, you cancel).
Requires L3 to know the volume is *behind* you.

### 4.2 Cancellation Games
In L3, you see *who* cancels.
Did the Order at the *front* cancel? (Weak support).
Did the Order at the *back* cancel? (Noise).
Front-of-queue cancels are significant bearish signals (Pulling the rug).

## V. Exercises

**Exercise 1 (The Mkt-Limit Hybrid):**
Submit a Limit order.
Monitor L3 queue.
If Queue ahead of you drops to 0 (You are front), stay.
If Queue ahead stays large and Price is ticking away, Cancel and Cross Spread (Aggress).
Dynamic aggression.

**Exercise 2 (Data Volume):**
L3 data is massive (Terabytes/day).
Processing challenge.
Need FPGA or optimized C++ structure (Binary Trees) to maintain the book state in real-time.
Python `pandas` is too slow.

## VI. References
-   NASDAQ. *TotalView Data Feed Specification*.
-   Cartea, A. *Reconstructing the LOB*.
