# Vega Sensitivity: The Volatility Asset

## I. Executive Summary

**Vega ($\nu$)** measures the sensitivity of Option Price to changes in **Implied Volatility ($\sigma$)**. Unlike other Greeks, Vega is not a Greek letter (it's a star), symbolizing its distinct nature. It represents exposure to the *market's changing perception of risk*. Long-dated options have high Vega; short-dated options have low Vega.

## II. Formal Definitions

### Definition 2.1 (Vega Calculation)
$$ \nu = \frac{\partial V}{\partial \sigma} $$
If Stock = 100, Option = 5.00, Vega = 0.20.
If Vol rises 1% (e.g., 20% $\to$ 21%).
Option Price $\to$ 5.20.
Vega is highest for ATM options (where uncertainty is max).

### Definition 2.2 (Vonna - Vol of Vol)
Second Derivative: $\partial \nu / \partial \sigma$.
Convexity of Volatility.
In a crash, Volatility doesn't just go up; it explodes continuously.
Short Vega strategies (Iron Condors) suffer form negative Vonna convexity.

## III. Theoretical Framework

### 3.1 Term Structure of Volatility
-   **Contango:** Near term Vol < Long term Vol (Normal).
-   **Backwardation:** Near term Vol > Long term Vol (Panic/Earnings).
Vega strategies often involve trading the curve.
Sell Near Term (High Vol) / Buy Long Term (Low Vol).

### 3.2 Volatility Clustering (Mandelbrot)
Vol is auto-correlated.
High Vol today $\implies$ High Vol tomorrow.
Vega shocks persist.
Mean Reversion is a slow force; Clustering is a fast force.

## IV. Strategic Applications

### 4.1 "Buying the Dip" in Vol
VIX Spikes to 30.
Do you sell Vol?
Danger: It can go to 80 (2008/2020).
Selling Vega in a crash is "picking up pennies in front of a steamroller."
Better to Buy Skew (Puts).

### 4.2 Calendar Spread (Vega Play)
Long Vega trade.
Buy Back Month (Higher Vega). Sell Front Month (Lower Vega).
If Vol rises generally, Back Month gains more $ value than Front Month loses.
Bullish Volatility strategy.

## V. Exercises

**Exercise 1 (IV Crush):**
Pre-Earnings IV = 100%.
Option Price = $10.
Post-Earnings IV = 50%.
Stock moves exactly expected amount ($10).
Option Value should be Intrinsic?
Extrinsic evaporates.
Trader loses money despite getting direction right.
"Vega'd."

**Exercise 2 (Bond Vega):**
MOVE Index (Treasury Volatility).
When Rates are moving, Bond Options (Swaptions) get expensive.
Mortgage Hedging (Convexity) acts as a forced buyer of Volatility, driving Vega higher.

## VI. References
-   Gatheral, J. *The Volatility Surface*.
-   Bennett, C. *Trading Volatility*.
