# Scalping: High-Frequency Micro-Structure Trading

## I. Executive Summary

Scalping is a specialized, ultra-short-term trading methodology aimed at profiting from small price changes. Scalpers act as pseudo-market makers, exploiting the bid-ask spread and imbalances in order flow. Unlike Swing traders who hold for gains of 100+ pips, scalpers target 5-10 pips (or ticks) but repeat the process dozens or hundreds of times per session. It relies heavily on **latency**, **liquidity**, and **execution speed** rather than fundamental valuation.

## II. Theoretical Framework

### 2.1 The Law of Large Numbers
A scalper does not care about any single outcome.
$$E[Profit] = N \times (Win\% \times AvgWin - Loss\% \times AvgLoss - Costs)$$
As $N \to \infty$ (high volume), the actual profit converges to Expected Value.
The key is strictly minimizing the Variance of outcomes (tight stops).

### 2.2 Market Microstructure Theory
Scalpers do not trade "charts"; they trade the **Order Book**.
-   **Order Flow:** The stream of hitting bids/offers.
-   **tick-by-tick:** Analysis of every single transaction.
-   **Inventory Risk:** Scalpers hate holding positions. The longer you hold, the more "Gamma" (movement risk) you accumulate. Ideally, Hold Time $\to 0$.

## III. Core Mechanics & Requirements

### 3.1 The Cost Hurdle
Since profit targets are tiny (e.g., 5 pips), transaction costs are the primary enemy.
$$Net = Gross - (Spread + Commission)$$
If Spread + Comm = 1.5 pips, and Target = 3 pips, you need 50% of your move just to break even ("Spread Burden").
*Requirement:* Trading only extremely liquid pairs (EUR/USD, USD/JPY) during peak sessions (London/NY).

### 3.2 Execution Technologies
-   **One-Click Trading:** Essential.
-   **DOM (Depth of Market):** Ladder interface to see limit orders.
-   **Low Latency:** VPS near the exchange server (< 20ms ping).

## IV. Strategic Methodologies

### 4.1 Order Flow Scalping (Tape Reading)
Watching the Time & Sales.
-   **Signal:** A sudden acceleration of "Green" prints (Buying) clearing out the Offer levels.
-   **Action:** Jump on the momentum (ride the wake).
-   **Exit:** As soon as the buying prints slow down or "Red" prints appear.

### 4.2 Spread Scalping (Market Making)
Placing Limit Orders on both sides.
-   Bid at 1.1000, Offer at 1.1001.
-   Goal: Get filled on both, pocket the spread diff.
-   Risk: "Toxic Flow" (The market runs over your limit order and keeps going).

### 4.3 Breakout Scalping (M1/M5)
Prices consolidate in a micro-box.
-   **Signal:** M1 candle closes outside box.
-   **Entry:** Stop Entry (Instant).
-   **Target:** 5-10 pips (Momentum impulse).
-   **Stop:** 3-5 pips (Back inside box).

## V. Psychological Dynamics

### 5.1 The "Tilt"
Scalping is high-tensity. A string of 3 rapid losses (taking 2 mins) can cause an emotional breakdown ("Revenge Trading").
*Rule:* "3 Strikes and You're Out." If 3 losers in a row, stop trading for the hour.

### 5.2 Fatigue
Concentration degrades after 60-90 minutes.
*Protocol:* Scalp only specific windows (e.g., 08:00 - 10:00 London Open).

## VI. Exercises

**Exercise 1 (The Spread Impact):**
Strategy A: Target 50 pips, Stop 25 pips. Spread 2 pips.
Strategy B: Target 5 pips, Stop 3 pips. Spread 2 pips.
Calculate the "Cost Drag" (Spread / Target) for both.
Why is Strategy B statistically much harder to sustain?

**Exercise 2 (Probability Flow):**
You observe a "level" at 1.0500 with 500 lots on the Bid.
Sellers are hitting it: 50, 20, 100, 50...
The Bid size counts down: 450, 430, 330, 280...
What happens when size $\to$ 0? (The "Pop"). How do you trade this? (The Breakout).

**Exercise 3 (Risk of Ruin):**
Scalper X wins 90% of trades (+5 pips).
But on the 10% losers, he "holds and hopes" for break-even, averaging -50 pips loss.
Calculate Expectancy. Is this trader survivable?

## VII. References
-   Volman, B. (2011). *Forex Price Action Scalping*.
-   Harris, L. (2003). *Trading and Exchanges*.
-   Aldridge, I. (2013). *High-Frequency Trading*.
