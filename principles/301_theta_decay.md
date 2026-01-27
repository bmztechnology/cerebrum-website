# Theta Decay: Entropy of Value

## I. Executive Summary

**Theta ($\Theta$)** measures the rate of change of the Option Price with respect to Time ($t$). It is the **Time Decay**. $\Theta = \partial V / \partial t$. Options are wasting assets; they lose value as expiry approaches (assuming spot/vol constant). Theta is "paid" by option buyers and "collected" by option sellers (The Insurance Premium).

## II. Formal Definitions

### Definition 2.1 (The Decay Curve)
Theta is NOT linear.
-   **Far Month (LEAPS):** Decay is slow/flat.
-   **Near Month (Weekly):** Decay accelerates.
-   **Expiry Week:** Decay is exponential cliff.
Square Root of Time rule: Value $\propto \sqrt{T}$.

### Definition 2.2 (Theta-Gamma Tradeoff)
"There is no free lunch."
If you sell an option to collect Theta (Income).
You are Short Gamma (Risk).
Theta is the compensation for bearing the risk of an explosive move.
PnL = Theta + Gamma(Realized Vol).
If Realized Vol > Implied Vol, Gamma losses > Theta gains.

## III. Theoretical Framework

### 3.1 The Weekend Effect
Markets close Friday, Open Monday.
2 days pass. Should options lose 2 days of Theta?
Market Makers usually discount "Trading Days" not "Calendar Days."
Otherwise, everyone would sell options Friday close and buy Monday open.
Reality: Volatility often marked up on Friday to offset Theta.

### 3.2 Intrinsic vs Extrinsic Value
-   Option Value = Intrinsic (Parity) + Extrinsic (Time Value).
-   Theta ONLY eats Extrinsic Value.
-   Deep ITM options have almost zero Theta.
-   ATM options have Max Theta.

## IV. Strategic Applications

### 4.1 The Iron Condor (Theta Strategy)
Sell OTM Call / Sell OTM Put. (Short Vol).
Buy wings for protection.
Goal: Spot Price stays in range.
PnL generated purely by Theta Decay entropy.
"Eating like a bird, pooping like an elephant" (Small steady gains, one massive loss).

### 4.2 Calendar Spreads
Sell Near Month Call (High Theta).
Buy Far Month Call (Low Theta).
Bias: Long Vol, Neutral Price.
Profit from the difference in decay rates.
Risk: Vega (Far month Vol drops).

## V. Exercises

**Exercise 1 (Earnings Crush):**
Option price drops 50% overnight after Earnings.
Is this Theta?
No. It is Vega (Vol Crush).
Theta is the predictable passage of time.
Vega is the changing expectation of magnitude.

**Exercise 2 (Negative Theta?):**
Can Theta be positive (Make money as time passes while owning option)?
Yes. Deep ITM European Puts in high rate environment.
Interest earned on Strike Cash > Put value decay.
Rare arbitrage condition.

## VI. References
-   Covel, M. *Trend Following* (Theta eating trend followers).
-   Passarelli, D. *Trading Option Greeks*.
