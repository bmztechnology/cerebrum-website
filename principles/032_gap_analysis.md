# Gap Analysis: Discontinuous Market Structures

## I. Introduction

A price gap represents a discontinuity in the price function $P(t)$, occurring when the market opens at a price significantly different from the previous close, with no trading activity in the intermediate range. Gaps provide critical information about the balance of supply and demand and the conviction of market participants.

## II. Formal Definitions

### Definition 2.1 (Price Gap)
Let $H_t, L_t$ be the High and Low of period $t$. A gap occurs if:
$$L_t > H_{t-1} \quad \text{(Up Gap)}$$
$$H_t < L_{t-1} \quad \text{(Down Gap)}$$

### Definition 2.2 (Gap Size)
$$Size_{up} = L_t - H_{t-1}$$
$$Size_{down} = L_{t-1} - H_t$$

## III. Classification of Gaps

Technicians classify gaps into four distinct categories based on context and volume:

### 3.1 Common Gap (Area Gap)
-   **Context:** Occurs within a trading range or congestion zone.
-   **Volume:** Low.
-   **Implication:** Usually filled quickly. No significant directional value.

### 3.2 Breakaway Gap
-   **Context:** Occurs at the breakout of a consolidation pattern (e.g., Triangle, Box).
-   **Volume:** High (Explosive).
-   **Implication:** Signals the start of a new trend. Often acts as new Support/Resistance. **Rarely filled immediately.**

### 3.3 Runaway Gap (Measuring Gap)
-   **Context:** Occurs in the middle of a strong trend.
-   **Implication:** Signals trend continuation. Used to project price targets.
-   **Measurement:** The distance from the trend start to the gap is often equal to the distance from the gap to the trend end.

### 3.4 Exhaustion Gap
-   **Context:** Occurs at the end of a trend, often marked by hysteria/capitulation.
-   **Volume:** Extremely High (Climax).
-   **Confirmation:** Followed by a reversal candle or "Island Reversal."
-   **Implication:** Signals trend termination.

## IV. Theoretical Framework: The "Gap Fill"

### 4.1 Mean Reversion Hypothesis
The common belief is that "all gaps get filled."
$$P\{\exists t > t_{gap} : P(t) \in [H_{t-1}, L_t]\} \to 1 \text{ as } t \to \infty$$
While theoretically true for random walks, in practical trading horizons, Breakaway and Runaway gaps may not fill for months or years.

### 4.2 Island Reversal Pattern
A potent reversal pattern isolated by gaps on both sides.
1. Trend (Up).
2. Gap Up.
3. Consolidation (The Island).
4. Gap Down.
**Signal:** Immediate trend reversal.

## V. Trading Strategies

### 5.1 Fading the Gap (Common/Exhaustion)
Strategy: Assume the gap is an overreaction.
-   **Condition:** Price opens with gap but fails to make new highs (for Up Gap) in the first 15-30 mins.
-   **Entry:** Sell limit at gap fill start.
-   **Target:** Previous Close.

### 5.2 Trading the Gap (Breakaway/Runaway)
Strategy: Assume the gap represents new information.
-   **Condition:** High volume breakout.
-   **Entry:** Buy on a retest of the gap origin (the gap acts as Support).
-   **Stop Loss:** Below the gap fill (if it enters the gap significantly, the thesis is invalid).

## VI. Exercises

**Exercise 1:** A stock closes at $50. It opens the next day at $55 and closes at $56.
a) Calculate the gap size.
b) If this occurred exiting a 3-month rectangle pattern on 2x average volume, classify the gap.

**Exercise 2:** Explain the psychological difference between a Breakaway Gap and an Exhaustion Gap. Why does high volume accompany both, but with different outcomes?

**Exercise 3:** "The market abhors a vacuum." Critically analyze this saying in the context of liquidity providers filling orders in a gap zone.

## VII. References
-   Edwards, R.D., & Magee, J. (1948). *Technical Analysis of Stock Trends*.
-   Bulkowski, T.N. (2000). *Encyclopedia of Chart Patterns*.
