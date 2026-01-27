# Credit Curve Dynamics: Term Structure

## I. Executive Summary

The **Credit Curve** plots CDS Spreads against Maturity (1Y, 3Y, 5Y, 10Y). It reflects the market's expectation of default timing. A **Normal Curve** is upward sloping (Survival now is easy, future is uncertain). An **Inverted Curve** signals imminent distress (Default expected immediately; if they survive 1 year, they are likely safe).

## II. Formal Definitions

### Definition 2.1 (The Slope)
Slope 2s10s = Spread(10Y) - Spread(2Y).
Positive: Healthy environment. Risk premium increases with time.
Negative: Distress.
Flat: LBO risk? (Event risk equal at all horizons).

### Definition 2.2 (Decay/Roll-down)
In a steep curve (Normal), holding a 5Y CDS (Sell Protection) rolls down to a 4Y CDS.
Spread is lower.
Seller profits from both Carry (Coupons) and Capital Appreciation (Spread tightening due to simple passage of time).
"Riding the Credit Curve."

## III. Theoretical Framework

### 3.1 Jump to Default Intensity
Hazard Rate $\lambda(t)$.
Inverted $\implies$ $\lambda(t)$ starts high, decays to mean.
Upward $\implies$ $\lambda(t)$ starts low, reverts to mean.
Mean reversion of credit quality.

### 3.2 Relative Value Trades
Curve Flattener: Sell 10Y Protection / Buy 2Y Protection.
Bet: Distress will become imminent (Front end widens).
Curve Steepener: Sell 2Y Protection / Buy 10Y Protection.
Bet: Crisis averted, Long term structural issues remain.

## IV. Strategic Applications

### 4.1 LBO Defense
Company X is rumored for LBO.
LBO increases debt $\implies$ Rating Downgrade.
Effect hits all maturities, but usually Curve flattens (Short term risk jumps).
Buy Front End CDS to hedge execution risk.

### 4.2 The "Stub" Trade
Trading the very short Date CDS (6 months).
Often illiquid but extremely sensitive to earnings announcements or debt maturity walls.
If Company has a Bond Maturity in 3 months it can't pay.
6M CDS goes to Par.
5Y CDS might trade lower (assuming restructuring solves the problem).

## V. Exercises

**Exercise 1 (Burnout):**
Distressed name trades inverted for 2 years.
Never defaults.
Short Sellers pay massive carry costs.
Eventually give up.
Curve normalizes. Price rally.
"The Walking Dead" companies.

**Exercise 2 (Forward Spreads):**
Calculate 5Y Spread 5 Years Forward.
Does the market imply credit deterioration?
Usually yes (Credit curves are generally steeper than default history justifies).
Existence of Fwd Spread premium.

## VI. References
-   O'Kane, D. *The Link between Default Probabilities and Credit Spreads*.
-   Duffie, D. *Credit Spread Curves*.
