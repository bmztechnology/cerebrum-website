# Lookback Options: Hindsight is 20/20

## I. Executive Summary

**Lookback Options** allow the holder to buy at the **Minimum** price or sell at the **Maximum** price observed during the option's life. They eliminate market timing risk ("Buying the absolute bottom"). However, they are the **most expensive** options in existence, usually costing 2-3x a vanilla option, as they effectively contain a "floating strike" that optimizes itself.

## II. Formal Definitions

### Definition 2.1 (Floating Strike)
Call Payoff: $\max(S_T - S_{min}, 0)$.
You get to buy at the lowest price history offered.
Put Payoff: $\max(S_{max} - S_T, 0)$.
You get to sell at the top.

### Definition 2.2 (Fixed Strike)
Call Payoff: $\max(S_{max} - K, 0)$.
Payoff depends on the high water mark, relative to a fixed strike.
Used in Executive Compensation?
"You get the max price the stock hit this year."

## III. Theoretical Framework

### 3.1 Pricing (Goldman-Sosin-Gatto)
Requires monitoring the extremum (Max/Min) of a Brownian Motion.
Distribution of the maximum of a random walk.
Formula involves Normal CDFs but is complex.
Vega is extremely high (Vol increases the range of Max/Min significantly).

### 3.2 The "Regret" Premium
Lookbacks minimize regret.
Human psychology hates missing the top.
Premium paid is the "Price of psychological comfort."
Institutional investors rarely use them (Too expensive).
Retail Structured Products use them ("Best of" funds).

## IV. Strategic Applications

### 4.1 Trend Following Enhancement
Buy Lookback Straddle.
If market trends, you catch the *entire* move from exact bottom to exact top?
No, from exact bottom to *current* close.
If market reverses, the "Max" locks in the high.
A Lookback Put protects gains automatically without a trailing stop.

### 4.2 Perfect Hedge?
You want to buy Oil.
Fear buying at the top.
Buy Lookback Call.
Guaranteed to buy at the lowest price of the year.
Cost: The premium is huge.
Net Cost = Lowest Price + Huge Premium $\approx$ Average Price.
Usually better to just DCA (Dollar Cost Average).

## V. Exercises

**Exercise 1 (Discrete Monitoring):**
Continuous Lookback > Daily Lookback > Monthly Lookback.
The more frequent the sampling, the better the Min/Max.
Dealers sell "Monthly Lookbacks" to cheapen the premium.

**Exercise 2 (Gamma profile):**
As new High is made.
Call value increases tick-for-tick.
Delta = 1?
Not exactly, because S_max also moves.
Lookback hedging involves holding options that replicate the extremum density.

## VI. References
-   Goldman, M.B., Sosin, H.B., & Gatto, M.A. *Path Dependent Options: Buy at the Low, Sell at the High*.
-   Conze, A., & Viswanathan, R. *Path Dependent Options: The Case of Lookback Options*.
