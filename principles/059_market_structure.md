# Market Structure: The Anatomy of Trend

## I. Executive Summary

Market Structure is the mapping of the auction process. It provides the "context" within which all other indicators operate. A moving average cross has zero meaning without reference to structure. Structure tells us *who* is in control (Buyers or Sellers), *where* they are likely to defend their positions, and *when* that control has shifted. Analyzing structure is essentially analyzing the series of Peak (High) and Trough (Low) vertices in the price function $P(t)$.

## II. Formal Definitions

### Definition 2.1 (Swing High - SH)
A local maximum at time $t$ such that:
$$P_t > P_{t-k} \dots P_{t+k}$$
Ideally, a fractal formation where the center candle High is higher than the surrounding $N$ candles.

### Definition 2.2 (Market State Vectors)
1.  **Bullish Trend ($T_{up}$):** A sequence where $High_{t+1} > High_t$ and $Low_{t+1} > Low_t$. (HH + HL).
2.  **Bearish Trend ($T_{down}$):** A sequence where $High_{t+1} < High_t$ and $Low_{t+1} < Low_t$. (LH + LL).
3.  **Consolidation ($T_{range}$):** A sequence where Highs and Lows are contained within boundaries $[P_{min}, P_{max}]$.

### Definition 2.3 (Break of Structure - BOS)
The moment price violates a significant structural pivot in the direction of the trend.
-   **Uptrend:** Price closes above previous HH.
-   **Implication:** Continuation of the regime.

### Definition 2.4 (Change of Character - CHoCH)
The moment price violates a pivot *against* the trend.
-   **Uptrend:** Price closes below the most recent Higher Low (HL).
-   **Implication:** Potential regime shift (Trend Reversal).

## III. Theoretical Framework: Dow Theory

Charles Dow (1884) laid the axioms of structure:
1.  **The Accumulation Phase:** Smart money buying from distressed retail. Structure looks like a Range/Bottom.
2.  **The Markup Phase (Participation):** The Trend (HH/HL sequence). Trend followers enter.
3.  **The Distribution Phase:** Smart money selling to late retail. Structure looks like a Range/Top.

### 3.1 The Fractal Nature
Structure exists on all timeframes.
A "Trend" on D1 is composed of multiple Market Structures on H1.
$$Trend_{D1} = \sum Structure_{H1}$$
**Analysis Rule:** Trade the direction of the Higher Timeframe (HTF) structure, executing on the Lower Timeframe (LTF) structure.

## IV. Strategic Applications

### 4.1 The Swing Failure Pattern (SFP)
A liquidity trap.
1.  Price pushes above a previous Swing High.
2.  **Failure:** Price fails to close above it and reverses back into the range.
3.  **Signal:** Bearish Reversal. The Breakout was "Fake" (Liquidity Grab).

### 4.2 The "Retest" Entry
Never chase the BOS.
1.  Identify BOS (New HH).
2.  Wait for Price to return to the origin of the move (The "Order Block" or "Demand Zone" created at the HL).
3.  Enter on rejection.
*Probability:* Entering at structure tests offers the highest Risk:Reward because your stop is defined (Just below the low).

## V. Advanced Concepts

### 5.1 Strong pivots vs Weak Pivots
-   **Strong Low:** A Low that caused a Break of Structure (New High). Smart money *defended* this low to push price higher. **Expect it to hold.**
-   **Weak Low:** A Low that failed to make a New High. It indicates weak demand. **Expect it to be broken.**

### 5.2 Premium & Discount
Divide the current trading range (Swing Low to Swing High) into 50%.
-   **Premium (>50%):** Only look for Short setups.
-   **Discount (<50%):** Only look for Long setups.
*Rule:* Never buy in Premium. Never sell in Discount.

## VI. Exercises

**Exercise 1 (Mapping):**
Given a sequence of price pivots: 10, 15, 12, 18, 14, 20.
a) Label each as HH, HL, LH, or LL.
b) Is the trend Bullish or Bearish?
c) If the next move is to 13, what structural event just happened? (CHoCH).

**Exercise 2 (Fractal Strategy):**
You see a Bullish Structure on H4.
You see a Bearish Structure on M15.
a) Is this a contradiction?
b) What is the M15 likely doing relative to the H4? (Pullback).
c) When should you buy? (Wait for M15 to CHoCH bullish).

**Exercise 3 (Logic):**
Why do "Weak Lows" (Lows that failed to break highs) act as "Magnets" for price? (Hint: Stop Loss clusters).

## VII. References
-   Dow, C. (Editorials in WSJ). *Dow Theory*.
-   Wyckoff, R.D. (1930s). *The Richard D. Wyckoff Method of Trading and Investing in Stocks*.
-   Murphy, J.J. (1999). *Technical Analysis of the Financial Markets*.
