# Roll Down Carry: Riding the Curve

## I. Executive Summary

**Rolling Down the Yield Curve** is an active bond strategy that exploits an upward-sloping term structure. By purchasing a bond and holding it as it ages (shortens in maturity), the investor realizes a capital gain because the yield falls (assuming the curve is stable). Total Return = Yield Income + **Roll Down Return**.

## II. Formal Definitions

### Definition 2.1 (Roll Down Calculation)
-   Buy 5Y Bond at Yield 4.0%. Price 100.
-   Hold for 1 year.
-   Becomes 4Y Bond.
-   Current 4Y Yield on curve is 3.5%.
-   Sell at 3.5%. Price $\approx 100 + Duration \times 0.5\%$.
-   Capital Gain $\approx 2\%$.
-   Total Return $4\% + 2\% = 6\%$.

### Definition 2.2 (Steepness Requirements)
Works best at the steepest part of the curve (usually 3Y-7Y sector).
Does not work on Flat or Inverted curve (Roll down is zero or negative).

## III. Theoretical Framework

### 3.1 Forward Rate Expectation
Roll Down profits only if **Forward Rates are not realized**.
Market pricing (Forwards) implies rates *will* rise to offset the roll down.
$Forward \text{ } Yield \approx Spot + Roll$.
If Spot stays constant, you beat the Forward prediction.
Betting against the Efficient Market Hypothesis (Pure Expectations).

### 3.2 Duration Drift
As bond ages, Duration falls.
To maintain constant risk profile, Manager must sell the 4Y and buy a new 5Y.
"Constant Maturity Strategy."

## IV. Strategic Applications

### 4.1 Front End Carry
2Y rates 1%. 3Y rates 1.5%.
Buy 3Y. 6 months later it yields 1.25%.
High Sharpe Ratio strategy in "Low Volatility / Normal Curve" regime.
"Picking up pennies."

### 4.2 Extension Trades
Extension risk.
If rates rise (Curve shifts up), the Capital Loss from rates rising > Capital Gain from Roll Down.
Requires "Stable or Falling" rate environment.

## V. Exercises

**Exercise 1 (The Break-Even):**
How much can rates rise before Roll Down profit is wiped out?
$BreakEven \text{ } Rise = \frac{Roll \text{ } Yield}{Duration}$.
"Cushion."

**Exercise 2 (Negative Roll):**
Inverted Curve.
Buy 5Y at 4%.
Becomes 4Y at 4.5%.
Price drops.
Negative Roll Down.
Must hold to maturity to get par.

## VI. References
-   Ilmanen, A. *Expected Returns*.
-   Garbade, K. *Fixed Income Analytics*.
