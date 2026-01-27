# Trailing Stop: Dynamic Risk Management

## I. Executive Summary

A Trailing Stop is an automated risk management algorithm that adjusts the Stop Loss level as the price moves in the trade's favor. It acts as a ratchet mechanism: it locks in profits (or reduces risk) but never loosens. The strategic goal is to solve the **Exit Dilemma**: "Do I take profit now and risking missing a trend, or hold and risk giving it back?" The Trailing Stop allows for infinite upside potential (Letting Winners Run) while enforcing a finite reversal limit.

## II. Formal Definitions

### Definition 2.1 (The Ratchet Function)
Let $S_t$ be the Stop price at time $t$.
Let $P_t$ be the Asset Price (High for Longs).
Let $\delta$ be the trailing distance.

For a Long Position:
$$S_t = \max(S_{t-1}, P_t - \delta)$$
*Crucial:* Using $\max$ ensures $S_t$ is monotonic non-decreasing. It can only go up.

## III. Methodologies

### 3.1 Fixed Distance (Simple)
$\delta = 20$ pips.
-   *Pros:* Easy to set.
-   *Cons:* Blind to volatility. Will likely suffocate the trade if volatility expands.

### 3.2 Volatility-Adjusted (Chandelier Stop)
$\delta = k \times ATR_n(t)$.
Typically $k=3, n=14$.
-   *Logic:* It places the stop outside the "Noise Zone." Price must make a statistically significant reversal ($3\sigma$) to trigger exit.

### 3.3 Structural Trail (Price Action)
Move stop manually to the most recent Swing Low (HL).
-   *Pros:* aligns with Dow Theory structure.
-   *Cons:* Requires manual management or complex object-recognition coding.

## IV. Strategic Applications

### 4.1 Breakeven Trigger
Many traders use a "Step" function.
1.  Fixed Stop initially.
2.  If Profit > $1R$, Move Stop to Breakeven.
3.  If Profit > $2R$, Start Trailing by $1R$.

### 4.2 Step vs Continuous
-   **Continuous:** Every tick up moves the stop up.
    -   *Risk:* Can be "wicked out" by micro-noise.
-   **Step:** Move stop only when price creates a new 10-pip block.
    -   *Risk:* Giving back slightly more profit.

## V. Exercises

**Exercise 1 (Optimization):**
You test a Trend Following strategy.
Stop A: Fixed Target at 50 pips. Win Rate 60%.
Stop B: Trailing Stop 20 pips. Win Rate 30%. Average Win 120 pips.
Calculate Expectancy for both. Which is better for a trend-following philosophy?

**Exercise 2 (The Whipsaw):**
Price moves up 19 pips. You trail at 20 pips.
Price drops 15 pips.
Price moves up 100 pips.
Did you survive?
Scenario B: Price moves up 21 pips. You trail at 20 pips. Stop moves +1 pip.
Price drops 15 pips.
Did you survive?

**Exercise 3 (Automation):**
Write the pseudocode for a "Parabolic SAR" style trailing stop that accelerates the closer price gets to a climax.

## VI. References
-   LeBeau, C. (2002). *Computer Analysis of the Futures Market*. (Introduced Chandelier Exit).
-   Wilder, J.W. (1978). *New Concepts in Technical Trading Systems*.
