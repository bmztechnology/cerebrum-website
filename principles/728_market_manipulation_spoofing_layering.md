# Market Manipulation Spoofing and Layering

## I. Executive Summary

**Market Manipulation** involves artificially affecting the supply or demand of a security to deceive other participants. **Spoofing** (placing non-bona fide orders to create false depth) and **Layering** (placing multiple non-bona fide orders at different price levels) are illegal strategies defined by the **Dodd-Frank Act**. They exploit the **Visual Bias** of traders and the **Imbalance Logic** of algorithms.

## II. Formal Definitions

### Definition 2.1 (Spoofing)
Traders A wants to Sell at 10.05.
Current Bid: 10.00. Ask: 10.05.
A places massive Buy order at 10.00 (or 10.01).
Other Algos detect "Buy Pressure" and front-run, raising the Bid to 10.04.
A sells to them at 10.04 (Improvement).
A cancels the massive Buy order.
Key Element: **Intent to Cancel** before execution.

### Definition 2.2 (Layering)
A variation of spoofing.
Placing Buy orders at 10.00, 9.99, 9.98, 9.97.
Creating the appearance of a "Wall of Liquidity."
Induces others to buy.
Executor sells into the induced momentum.
Cancels all layers.

## III. Theoretical Framework

### 3.1 Signal Corruption
Microstructure models (Kyle, Glosten) assume Order Flow = Information.
Spoofing injects **False Information**.
It breaks the efficiency of the LOB as a price discovery mechanism.
The "Data" becomes a lie.

### 3.2 The Navinder Sarao Case (Flash Crash)
Sarao used a custom algo ("The Dynamic Layering Algo").
Placed \$200M of Sell orders on E-Mini S&P to push price down.
Cancelled 99% of them without trading.
Allegedly contributed to the 2010 Flash Crash.
Demonstrated that one guy in a bedroom can move global markets via leverage acting on LOB perception.

## IV. Strategic Applications

### 4.1 Detection (Surveillance)
Ratio of Orders to Trades (O/T Ratio).
If O/T > 100:1 ? Suspicious.
If Cancel Time < 500ms ? Suspicious.
Machine Learning models now flag "Cancel Sequences" that correlate with price moves.

### 4.2 Defense
"Fade the Book."
If liquidity looks too good to be true (Massive size appearing instantly), assume it is fake.
Real liquidity builds slowly.
Spoof liquidity appears instantly.

## V. Exercises

**Exercise 1 (The Vacuum Test):**
Spoofer puts 5000 lots on Bid.
You Hit the bid with 10 lots.
Spoofer cancels the remaining 4990 instantly.
"Vacuum."
Price crashes through.

**Exercise 2 (Momentum Ignition):**
Aggressively buying (Trading, not spoofing) to trigger stops.
Is it manipulation?
Gray area. "Banging the Close."
If you buy with intent to sell at a higher price *caused* by your buying, it is manipulation.

## VI. References
-   CFTC. *Antidisruptive Practices Authority*.
-   Cartea, A. & Wang, S. *Spoofing and Price Manipulation in Order Driven Markets*.
