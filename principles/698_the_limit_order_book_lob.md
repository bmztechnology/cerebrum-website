# The Limit Order Book LOB

## I. Executive Summary

**The Limit Order Book (LOB)** is the central data structure of modern financial markets. It represents the aggregate supply (**Ask**) and demand (**Bid**) at every price level. Unlike a "Quote Driven" market (Dealer phone market), the LOB is an "Order Driven" market where anonymous agents post liquidity. Understanding the shape, slope, and dynamics of the LOB is the foundation of **Microstructure**.

## II. Formal Definitions

### Definition 2.1 (The State of the Book)
At time $t$, the LOB is a set of outstanding limit orders $\{O_1, O_2, ...\}$.
**Bid Side:** $B_t(p)$ = Volume bounded to buy at price $p$. Sorted Descending. Best Bid = $\max(p)$ with $Vol > 0$.
**Ask Side:** $A_t(p)$ = Volume bounded to sell at price $p$. Sorted Ascending. Best Ask = $\min(p)$ with $Vol > 0$.
**Spread:** $S_t = \text{Best Ask}_t - \text{Best Bid}_t$.

### Definition 2.2 (Level 1, 2, 3 Data)
**Level 1:** Best Bid and Best Ask (Top of Book) + Last Price.
**Level 2:** Full depth (or top 10 levels) showing volume at each price.
**Level 3:** Granularity of *individual* orders (Queue position).
Level 3 is required to model "Queue Priority."

## III. Theoretical Framework

### 3.1 Liquidity Supply
Limit Orders provide liquidity (Maker).
Market Orders consume liquidity (Taker).
The LOB is the warehouse of liquidity.
A "Thick" book has high volume at Top of Book (Low impact cost).
A "Thin" book allows small market orders to sweep multiple levels (Slippage).

### 3.2 The Shape of the Book
Typically "V" shaped or Log-Normal.
Volume is concentrated near the spread and decays as price moves away.
"Humps" in the book often represent "Psychological Levels" (e.g., Round numbers like \$100.00).

## IV. Strategic Applications

### 4.1 Order Book Imbalance (OBI)
Predictive Alpha.
$OBI = \frac{Vol_{Bid} - Vol_{Ask}}{Vol_{Bid} + Vol_{Ask}}$.
If $Vol_{Bid} \gg Vol_{Ask}$, pressure is upward.
Prices tend to move in the direction of the imbalance (Supply/Demand law).
HFT strategies trade pure OBI.

### 4.2 Spoofing
Placing large Limit Orders on the Bid (to create appearance of demand) with intent to cancel before execution.
Illegal (Dodd-Frank).
Designed to trick OBI algos into buying, allowing the Spoofer to sell.
Pattern: Flash large size, price moves up, sell, cancel large size.

## V. Exercises

**Exercise 1 (Walking the Book):**
Calculate the VWAP of buying 10,000 shares.
Bid: 100 @ 10.00.
Ask: 500 @ 10.01, 1000 @ 10.02, 5000 @ 10.03, 5000 @ 10.04.
You sweep up to 10.04.
Your fills are worse than the "Best Ask."
This is "Impact Cost."

**Exercise 2 (The Spread Capture):**
Place Limit Buy at 10.00. Place Limit Sell at 10.01.
If both fill, you earn the spread.
Risk: "Adverse Selection."
The price moves to 9.00. You are filled on the Buy, but not the Sell.
Market Making is not free money; it is compensation for adverse selection risk.

## VI. References
-   Gould, M. *Limit Order Books*.
-   Bouchaud, J. *Trades, Quotes and Prices*.
