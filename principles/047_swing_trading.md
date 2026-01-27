# Swing Trading: Capturing Multi-Day Moves

## I. Executive Summary

Swing Trading is a medium-term trading style that attempts to capture a portion of a market move (a "swing") over a period of a few days to several weeks. It sits between the high-frequency noise of Scalping/Day Trading and the macroeconomic patience of Position Trading. Swing traders rely primarily on Technical Analysis (Price Action, Momentum) to define entries and fundamental context to define bias. The essential skill is identifying the "meat of the move"—the middle 60% of a trend—and ignoring the tops and bottoms.

## II. Formal Definitions

### Definition 2.1 (The Swing)
A price vector connecting a significant Local Low ($L_t$) to a Local High ($H_{t+k}$), or vice versa.
$$Swing_{amplitude} = |P_{extreme2} - P_{extreme1}|$$
$$Swing_{duration} = T_{extreme2} - T_{extreme1}$$

### Definition 2.2 (Trend Structure)
-   **Uptrend:** Sequence of Higher Highs ($HH$) and Higher Lows ($HL$).
-   **Downtrend:** Sequence of Lower Lows ($LL$) and Lower Highs ($LH$).

## III. Theoretical Framework

### 3.1 Timeframe Fracture
Swing traders exploit the **Fractal Market Hypothesis**.
While HFTs dominate the millisecond scale and Institutions dominate the monthly scale, the "Daily" scale creates predictable waves driven by:
1.  **Fund Flows:** Accumulation/Distribution over days.
2.  **Overnight Risk:** Day traders closing positions creates close-price anomalies.
3.  **Weekly Cycles:** Monday opening range vs Friday close.

### 3.2 The Elasticity Trap
Swing trading often targets "Pullbacks" (Mean Reversion within a Trend).
-   Price moves away from value (Impulse).
-   Price yields to profit taking (Correction/Pullback).
-   Price resumes trend (Swings leg).
*Physics:* The pullback stores potential energy. The swing releases it as kinetic energy.

## IV. Strategic Implementation

### 4.1 "Buy the Dip" (Trend Following)
1.  **Identify Trend:** Daily Chart. SMA(50) slope > 0.
2.  **Wait for Correction:** Price drops to a "Value Zone."
    -   Fibonacci Retracement (38.2% - 61.8%).
    -   Previous Resistance turned Support.
    -   Dynamic Support (EMA 20).
3.  **Trigger:** lower Timeframe (H4 or H1) reversal pattern (e.g., Bullish Engulfing).
4.  **Target:** Previous Swing High ($0\%$) or Extension ($127\%$).

### 4.2 "Fade the Rally" (Counter-Trend)
Trading range-bound markets.
1.  Identify a clear box channel.
2.  Wait for price to hit the top rail.
3.  Look for exhaustion (divergence).
4.  Short targeting the mid-point or bottom rail.

### 4.3 Risk Management (The 2% Rule)
Since holding periods are long, overnight gaps are a risk.
-   **Stop Loss:** Wide enough to breathe (ATR-based). $Stop = 2 \times ATR(14)$.
-   **Position Size:** Adjusted so that hitting the wide stop only loses 1-2% of equity.

## V. Psychological Dynamics

### 5.1 Patience vs Fear
-   **Entry:** Requires patience to wait for the pullback (Missing Out).
-   **Holding:** Requires discipline to hold through intra-day noise ("Red" days within a Green week).
-   **Gap Anxiety:** The fear of waking up to a huge loss due to overnight news.

## VI. Exercises

**Exercise 1 (Trade Planning):**
Trend is Up.
High: 1.2000. Low of move: 1.1000.
Price corrects 50% to 1.1500.
Stop Loss placed at 1.1400. Target at 1.2000.
a) Calculate Risk (pips) and Reward (pips).
b) Calculate R:R Ratio.
c) If volatility increases, should you widen stop? If so, what must you do to position size?

**Exercise 2 (Fractals):**
Explain "Multi-Timeframe Analysis."
If the Daily chart is Bullish, but the H4 chart is Bearish, what phase of the swing is occurring? (Hint: Correction). When does the alignment happen?

**Exercise 3 (Gap Risk):**
You hold a Long EUR/USD swing position over the weekend.
Elections in France are Sunday.
How do you hedge this binary risk? Options? Closing? Reducing size?

## VII. References
-   Alan Farley. *The Master Swing Trader*.
-   Minervini, M. *Trade Like a Stock Market Wizard*.
-   Wyckoff, R.D. *Studies in Tape Reading*.
