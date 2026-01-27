# Trading Sessions: Global Liquidity Cycles and Chronobiology

## I. Executive Summary

The Forex market operates 24 hours a day, 5 days a week, but it is not a uniform continuum. It is a fragmented network of exchanges and liquidity pools (London, New York, Tokyo, Sydney) that hand off activity in a cyclical manner. Understanding **Trading Sessions** is the study of market chronobiology—knowing *when* liquidity enters the system, *when* volatility peaks, and *when* specific currency pairs are statistically most likely to trend or consolidate. Smart money does not trade random hours; it trades liquidity.

## II. The Three Major Centers

The market is generally divided into three major sessions, corresponding to the business hours of major financial hubs.

### 2.1 The Asian Session (Tokyo/Sydney)
-   **Time (approx):** 23:00 - 08:00 GMT.
-   **Characteristics:** Lower liquidity, lower volatility.
-   **Key Pairs:** AUD/USD, USD/JPY, NZD/USD.
-   **Behavior:** Often acts as a consolidation phase for the preceding NY move. Range-trading strategies work best here ("Asian Box").

### 2.2 The London Session (European)
-   **Time (approx):** 07:00 - 16:00 GMT.
-   **Characteristics:** Highest liquidity deepness (~35-40% of daily volume). The "Engine Room" of Forex.
-   **Key Pairs:** EUR/USD, GBP/USD, EUR/GBP, USD/CHF.
-   **Behavior:** Trend initiation. The "London Breakout" is a classic phenomenon where the bounds of the Asian session are shattered effectively.

### 2.3 The New York Session (North American)
-   **Time (approx):** 12:00 - 21:00 GMT.
-   **Characteristics:** High volatility, especially during news releases (8:30 AM EST).
-   **Key Pairs:** All Majors, specifically USD crosses.
-   **Behavior:** Can continue the London trend or violently reverse it (V-shape).

## III. Theoretical Framework: Liquidity Overlaps

The interaction between sessions creates specific liquidity profiles.

### 3.1 The "Power Overlap" (London + New York)
-   **Window:** 12:00 GMT - 16:00 GMT.
-   **Dynamics:** Both European and American banks are open. Transaction volume peaks.
-   **Implication:** Spreads are tightest (Standard Deviation of Spread is lowest). Breakouts are most statistically valid during this window due to the sheer volume supporting the move.
-   **Algorithmic Concept:** VWAP (Volume Weighted Average Price) strategies are heavily active here.

### 3.2 The Tokyo-London Handoff
-   **Window:** 07:00 GMT - 08:00 GMT.
-   **Dynamics:** Asia closes, Europe opens.
-   **Implication:** Often sees a "Fakeout" (Judas Swing). Price moves against the intended daily direction to grab liquidity before the real London trend begins.

## IV. Statistical Variance by Hour

Academic studies (e.g., Dacorogna et al.) show that intraday volatility follows a distinct "M-shape" or "Double Hump" distribution.

$$Vol(t) \propto \sum Activity(Centers_{open})$$

1.  **Peak 1:** London Open.
2.  **Peak 2:** NY Open / London Overlap.
3.  **Trough:** Sydney/Tokyo Inter-session (21:00 - 23:00 GMT) - The "Dead Zone."

**Implication:** Placing tight stops during the Dead Zone is safe; placing them during the Overlap is suicide (noise will stop you out).

## V. Strategic Applications

### 5.1 The Asian Range Breakout
**Algorithm:**
1.  Define High ($H_{Asia}$) and Low ($L_{Asia}$) between 00:00 and 07:00 GMT.
2.  Wait for London Open (07:00 - 08:00).
3.  Enter on breakout of $H_{Asia}$ or $L_{Asia}$ with volume confirmation.
4.  Target: Projected Average Daily Range (ADR).

### 5.2 Session Flow Trading
-   **If London Trend is Up:**
    -   Expect NY to pull back initially (profit taking from London morning), then resume Up.
-   **If London Trend is Exhausted (Parabolic):**
    -   Expect NY to reverse/consolidate.

### 5.3 Friday Close
-   **19:00 - 21:00 GMT Friday:** Low liquidity + Profit taking.
-   **Risk:** Weird, irrational moves. Spreads widen massively.
-   **Rule:** Close all intraday positions before 18:00 GMT Friday to avoid Weekend Gap risk.

## VI. Case Studies

### 6.1 The "London Fix" (16:00 GMT)
Global benchmark rates are set at the 4 PM London Fix. Massive rebalancing flows from pension funds and corporations occur here.
*Scenario:* Price is quiet all day, then explodes at 15:55 GMT unrelated to news.
*Cause:* Month-end rebalancing model flows.

### 6.2 The Post-FOMC Hangover
After a Wednesday 19:00 GMT FOMC (Federal Reserve) meeting, the Asian session often stays completely flat as the market digests the statement, pushing the volatility realization to the London Open the next day.

## VII. Exercises

**Exercise 1 (Time Conversion):**
You are in New York (EST). You want to trade the "London Breakout." What local time must you wake up? If DST (Daylight Savings) shifts in the UK but not US, how does your schedule change?

**Exercise 2 (Liquidity Analysis):**
Why is the EUR/JPY pair ("The Beast") most volatile during the overlap of London and Asia (07:00-08:00)? Explain the cross-rate flows (EUR/USD + USD/JPY).

**Exercise 3 (Strategy Design):**
Design a "Dead Zone" Scalper.
-   Target Time: 21:00 - 23:00 GMT.
-   Indicator: Bollinger Bands.
-   Thesis: Mean Reversion works due to lack of new information.
-   Risk: What major event could ruin this strategy during these hours? (Hint: Geopolitics or Monday opens).

## VIII. References
-   Dacorogna, M.M., et al. (2001). *An Introduction to High-Frequency Finance*.
-   Lien, K. (2006). *Day Trading and Swing Trading the Currency Market*.
-   Bank for International Settlements (BIS). *Triennial Central Bank Survey*.
