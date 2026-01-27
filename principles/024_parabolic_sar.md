# Parabolic SAR: Stop and Reverse

## I. Executive Summary

The Parabolic SAR (Stop and Reverse), developed by Welles Wilder, is a trend-following indicator designed to determine the precise exit point of a trade. Unlike indicators that smooth price (MA) or oscillate (RSI), the SAR provides a specific price point. If the market touches this point, the trend is considered dead, and the position should be reversed. The indicator plots a curve (dots) that accelerates as the trend matures, creating a "Parabolic" shape that locks in profits.

## II. Formal Definitions

### Definition 2.1 (The SAR Formula)
For an Uptrend:
$$SAR_{t+1} = SAR_t + \alpha (EP - SAR_t)$$
Where:
-   $SAR_t$: Current Stop value.
-   $EP$ (Extreme Point): The Highest High reached in the current trend so far.
-   $\alpha$ (Acceleration Factor): Starts at 0.02. Increases by 0.02 every time a new EP is reached. Max limit 0.20.

### Definition 2.2 (The Flip)
If $Low_{t+1} < SAR_{t+1}$:
-   Trend is now Down.
-   New $SAR$ starts at the recent High ($EP$).
-   $\alpha$ resets to 0.02.

## III. Theoretical Framework

### 3.1 Time Decay of Risk
The SAR rises even if price goes sideways.
Price is flat $\implies$ $SAR_t$ moves closer to Price.
This enforces the **Time-Stop** concept: "If the trend doesn't continue, get out." The SAR effectively chases the price, tightening the noose on the position.

### 3.2 The Acceleration Factor ($\alpha$)
The adaptive nature of $\alpha$ allows the SAR to give the trade room at the beginning ($0.02$) but become aggressive ($0.20$) at the end (Climax). This aligns with the "Theta" of a trend (Climax is usually followed by crash).

## IV. Strategic Applications

### 4.1 Trailing Stop
Use SAR purely as a trailing stop for a MA crossover system.
-   Enter on MA Cross.
-   Exit on SAR touch.
*Benefit:* Removes emotion from the exit.

### 4.2 The "Three Dot" Reversal
Don't trade the first dot (often a false flip).
Wait for 3 consecutive dots in the new direction to confirm trend stability.

### 4.3 Filtering
**Never** use SAR in a ranging market. It will get "chopped" to death (buy top, sell bottom).
Filter: Use ADX. Only use SAR if $ADX > 25$.

## V. Exercises

**Exercise 1 (Calculation):**
Uptrend. $SAR = 100$. $EP = 110$. $\alpha = 0.02$.
Calculate $SAR_{next}$.
$$100 + 0.02(110-100) = 100 + 0.2 = 100.2$$
Price rallies to 115. $\alpha$ becomes 0.04.
Calculate $SAR_{next}$.
$$100.2 + 0.04(115-100.2) = 100.2 + 0.592 = 100.792$$
Notice the acceleration.

**Exercise 2 (Critique):**
Why is the max $\alpha$ capped at 0.20?
(If it went to 1.0, the stop would instantly jump to the High, guaranteeing a stop-out on a single tick pullback).

**Exercise 3 (Visual):**
Draw a robust trend vs a weak trend.
Robust: Price stays well above dots.
Weak: Dots encroach on price candles constantly.

## VI. References
-   Wilder, J.W. (1978). *New Concepts in Technical Trading Systems*.
-   LeBeau, C. *Computer Analysis*.
