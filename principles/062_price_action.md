# Price Action: Behavioral Analysis of Candlesticks

## I. Executive Summary

Price Action is the discipline of making trading decisions based on the raw movement of price, unencumbered by lagging indicators (RSI, MACD, etc.). It assumes that price is the ultimate truth—the aggregate result of all market participants' beliefs. By analyzing the "Language of the Candles" (shape, size, closure, and sequence), a trader interprets the psychological state of the market (Panic, Greed, Indecision, Consensus) in real-time.

## II. Formal Definitions

### Definition 2.1 (The Candlestick Vector)
A candle $C_t$ is defined by vector parameters:
-   **Body ($|O-C|$):** Represents conviction. Large Body = High Conviction.
-   **Wick/Shadow ($H - \max(O,C)$ or $\min(O,C) - L$):** Represents rejection. Long Wick = Failed attempt.
-   **Close Position:** Where the session ended relative to the range.

### Definition 2.2 (Pinbar / Hammer)
A Reversal signal.
-   **Structure:** Small Body, Long Nose (Wick) sticking out $\ge 2 \times Body$.
-   **Psychology:** Bears pushed price down (Long Wick), but Bulls aggressively bought it back, forcing a close near the highs. Demand overcame Supply.

### Definition 2.3 (Engulfing Bar)
A Momentum signal.
-   **Structure:** Candle $t$ completely overlaps the range of Candle $t-1$. ($High_t > High_{t-1}$ and $Low_t < Low_{t-1}$ and Close supports new direction).
-   **Psychology:** Total overpowering of the previous group.

## III. Theoretical Framework

### 3.1 The Auction Theory
Price Action is simply the story of an auction.
-   **Moving Up:** Buyers are aggressive (hitting Ask), Sellers are passive (lifting Offer).
-   **Stalling (Doji):** Equilibrium. Value found.
-   **Rejection (Wick):** Price moved to an "Unfair Price" zone and was immediately sent back.

### 3.2 Context is King
A Pinbar is **meaningless** in a vacuum.
-   Pinbar at Resistance = Short Signal.
-   Pinbar in middle of nowhere = Noise.
**Formula:** Signal + Location = Trade.

## IV. Strategic Patterns (The "Big Three")

### 4.1 Inside Bar (The Coil)
-   **Pattern:** Candle $t$ is fully contained within Candle $t-1$.
-   **Meaning:** Consolidation, volatility compression.
-   **Trade:** Breakout of the Mother Bar ($t-1$).

### 4.2 Fakey (The Trap)
-   **Pattern:** Inside Bar $\to$ False Breakout $\to$ Reversal close.
-   **Meaning:** Stop hunt. Amateurs traped.
-   **Trade:** Fade the breakout.

### 4.3 Railroad Tracks (Tweezer Tops/Bottoms)
-   **Pattern:** Two long candles of opposite color. Up then Down.
-   **Meaning:** Impulse rejection. The market changed its mind instantly.

## V. Exercises

**Exercise 1 (Candle Anatomy):**
Draw a "Shooting Star."
-   Open: 100.
-   High: 110.
-   Low: 99.
-   Close: 100.
Explain the story: "Bulls tried to reach 110, failed completely, closed at open." Why is this bearish?

**Exercise 2 (Context):**
You see a huge Bullish Engulfing candle. But it closes right into a major Daily Resistance level.
Do you Buy? Why or why not? (Risk of "Buying into a Brick Wall").

**Exercise 3 (Signal Failure):**
Price forms a Pinbar at Support. You Buy.
The next candle immediately closes below the Pinbar's low.
What does this mean? (Market Ignored the buying pressure). What should you do? (Immediate Exit - The signal failed).

## VI. References
-   Nison, S. (1991). *Japanese Candlestick Charting Techniques*.
-   Brooks, A. (2011). *Trading Price Action Ranges*. (The definitive dense academic text on bar-by-bar analysis).
-   Bulkowski, T.N. (2008). *Encyclopedia of Candlestick Charts*.
