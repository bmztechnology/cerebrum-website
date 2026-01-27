# Trend Following Managed Futures CTA: Crisis Alpha

## I. Executive Summary

**Commodity Trading Advisors (CTAs)** typically employ **Trend Following** strategies across global futures markets (Equities, Bonds, FX, Commodities). The core logic is: "Cut losers short, let winners run." Because trends often emerge during prolonged crises (e.g., 2008 Short Stocks/Long Bonds/Long Gold), CTAs exhibit **Crisis Alpha** (positive return when stocks crash), providing valuable diversification properties.

## II. Formal Definitions

### Definition 2.1 (The Signal)
Time Series Momentum.
$MA_{short} > MA_{long} \implies$ Long.
$MA_{short} < MA_{long} \implies$ Short.
Volatility targeting: Size position inversely to volatility.
If Vol doubles, Position halves. (Keeps risk constant).

### Definition 2.2 (Diversification Benefit)
CTAs trade 100+ markets.
Correlation(CTA, Stocks) $\approx$ 0 (Long term).
Correlation(CTA, Stocks | Crash) $\approx$ Negative.
Why? Crashes are trends.
CTA latches onto the downtrend.

## III. Theoretical Framework

### 3.1 Convexity
Trend Following is Long Option (Straddle) profile.
Small losses in choppy markets (Whipsaw = Option Premium).
Large gains in extended trends (In-the-money).
Positive Skewness.

### 3.2 The Smile
CTA performance vs Equities creates a "Smile."
Stocks Up Big: CTA Up (Long Trend).
Stocks Down Big: CTA Up (Short Trend).
Stocks Flat: CTA Down (Whipsaw/Bleed).
The enemy of Trend Following is Mean Reversion (Choppy market).

## IV. Strategic Applications

### 4.1 Portfolio Construction
Add 20% CTA to 60/40 Portfolio.
Reduces Max Drawdown significantly.
Smoothes the equity curve.
Cost: In a long Bull Market (2010-2019), CTA drags performance (0% return).
"Insurance Premium."

### 4.2 Speed
Fast Trend (Days): Harder to execute, high cost, but reacts fast to crashes.
Slow Trend (Months): High capacity, low cost, but late to the party (might miss the bottom).
Diversified CTAs mix speeds.

## V. Exercises

**Exercise 1 (The Whipsaw):**
Market goes up 5%, Signal buys.
Market drops 5%, Signal sells.
Market goes up 5%...
Capital destruction.
Regime filter needed.

**Exercise 2 (Carry vs Trend):**
Carry: Short Volatility.
Trend: Long Volatility.
Perfect blend?
Yes, "Trend + Carry" is a classic quant finish.

## VI. References
-   Bhardwaj, G. *The Performance of CTAs*.
-   Greyserman, A. & Kaminski, K. *Trend Following with Managed Futures*.
