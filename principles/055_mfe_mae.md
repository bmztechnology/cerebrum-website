# Maximum Favorable/Adverse Excursion (MFE/MAE): Trade Analytics

## I. Executive Summary

MFE (Maximum Favorable Excursion) and MAE (Maximum Adverse Excursion) are the "black box" flight recorders of trading. They record the extreme high and low price reached during the life of a trade relative to the entry price. Analyzing these metrics enables the transition from "Intuitive Trading" to "Optimized Trading" by scientifically answering where Stop Losses and Take Profits should be placed to maximize Expectancy.

## II. Formal Definitions

For a **Long** trade entered at $P_{entry}$:
### Definition 2.1 (MAE - Pain)
$$MAE = \min(P_{low}, P_{entry}) - P_{entry}$$
(Usually expressed as negative pips or dollars).
*Interpretation:* The deepest drawdown the trade endured before closing.

### Definition 2.2 (MFE - Potential)
$$MFE = \max(P_{high}, P_{entry}) - P_{entry}$$
*Interpretation:* The maximum profit that *could* have been realized at the perfect top.

## III. The "Perfect Trade" Graph

Plotting MAE (x-axis) vs MFE (y-axis) for 100 historical trades reveals clusters.

### 3.1 The Stop Loss Cluster (MAE Analysis)
-   If 90% of **Winning Trades** have an MAE of less than -15 pips...
-   And you are using a Stop Loss of -50 pips...
-   **Conclusion:** You are taking 35 pips of unnecessary risk. Most trades that go beyond -15 will turn out to be losers anyway.
-   **Optimization:** Tighten stop to -20 pips. Result: Risk decreases, Position Size increases, ROI explodes.

### 3.2 The Take Profit Cluster (MFE Analysis)
-   If you consistently exit at +30 pips...
-   But the average MFE of your winners is +70 pips...
-   **Conclusion:** You are "leaving money on the table."
-   **Optimization:** Extend target to +60 pips or employ a Trailing Stop to capture the "fat tail."

## IV. Efficiency Ratios

### 4.1 Entry Efficiency
$$E_{entry} = \frac{MFE}{MFE + |MAE|}$$
(Did you buy the exact bottom? If $MAE \approx 0$, efficiency is high).

### 4.2 Exit Efficiency
$$E_{exit} = \frac{RealizedProfit}{MFE}$$
(Did you sell the exact top? If $Profit \approx MFE$, efficiency is high).
*Rule of Thumb:* $E_{exit} > 0.6$ is widely considered professional excellence. Chasing 1.0 leads to greed and missed exits.

## V. Strategic Applications

### 5.1 The "Free Ride" Analysis
Look at trades where Price reached $+1R$ (MFE > Risk).
How many of those turned back and hit the Stop Loss?
If the number is high (> 30%), implement a **Break-Even Rule**:
"Move Stop to Entry when Price hits +1R."

### 5.2 Volatility Normalization
Don't use raw pips for analysis. Use R-multiples or ATR-units.
$MAE_{norm} = MAE / ATR_{entry}$.
This filters out the noise of changing market volatility.

## VI. Exercises

**Exercise 1 (Optimization):**
Dataset of 10 Winners:
MAEs: -5, -8, -12, -4, -20, -6, -2, -15, -7, -3.
Current Stop: -50.
a) If you tighten the stop to -10, how many winners do you lose? (2 trades: -12, -20).
b) Is it worth it? Compare the cost of losing 2 winners vs the benefit of 5x larger position size on the other 8.

**Exercise 2 (Psychology):**
Why do most novice traders have high Exit Efficiency on Losers (they get out at the very bottom) and low Exit Efficiency on Winners (they sell too early)?
(Reference: Prospect Theory).

**Exercise 3 (Coding):**
Pseudocode a backtest loop that calculates MFE/MAE.
`for bar in trade_duration: max_p = max(max_p, bar.high)`...

## VII. References
-   Sweeney, J. (1996). *Campaign Trading: Give Yourself the Edge*. (Originator of measurement).
-   Davey, K. (2014). *Building Winning Algorithmic Trading Systems*.
