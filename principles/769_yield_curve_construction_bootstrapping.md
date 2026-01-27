# Yield Curve Construction Bootstrapping

## I. Executive Summary

The **Yield Curve** is the fundamental pricing object in finance. It is not directly observed; it is **Constructed** from a mix of Deposit Rates, Futures, Swaps, and Bonds. The process involves **Bootstrapping** (iteratively solving zero-coupon rates) and **Spline Interpolation** (smoothing). Mis-pricing the curve leads to arbitrage across millions of instruments.

## II. Formal Definitions

### Definition 2.1 (The Bootstrap)
Goal: Find Zero Rates $z(t)$.
Input: Par Bond Coupons $C$.
1Y Bond (Par): $100 = \frac{100+C_1}{1+z_1} \implies$ Solve $z_1$.
2Y Bond (Par): $100 = \frac{C_2}{1+z_1} + \frac{100+C_2}{(1+z_2)^2}$.
Use $z_1$ to solve $z_2$.
Repeat.

### Definition 2.2 (Swap Curve vs Treasury Curve)
**Treasury:** Risk-free? (Govt backed).
**Swap (SOFR/LIBOR):** Interbank risk (or Secured Overnight).
Spread = Swap Rate - Treasury Rate (Swap Spread).
Measure of Balance Sheet cost / Credit Risk.

## III. Theoretical Framework

### 3.1 Interpolation Methods
Between the 2Y and 5Y points, what is the 3.5Y rate?
Linear Interpolation on yields? Bad (Kinks in forward rates).
Cubic Spline? Better.
Monotone Convex Spline (Hagan-West).
Microstructure arbitrageurs look for "Kinks" caused by bad spline choices in bond pricing engines.

### 3.2 The Tenor Basis
3M LIBOR vs 6M LIBOR.
Historically, Spread $\approx$ 0.
Post-2008, Spread is large (Credit/Liquidity risk).
Single Curve framework died.
Now Multi-Curve framework (Discounting curve $\neq$ Projection curve).

## IV. Strategic Applications

### 4.1 Curve Steepeners/Flatteners
**Steepener:** Buy Short End / Sell Long End.
Betting that Fed cuts rates (Front end drops).
**Flattener:** Sell Short End / Buy Long End.
Betting on Inflation/Hikes.
Capitalizing on the "Shape" dynamics.

### 4.2 Butterfly Trades
Buy 2Y, Sell 5Y, Buy 10Y.
Betting against the "Curvature."
If curve humps (5Y yields high), the Fly captures the reversion to linearity.

## V. Exercises

**Exercise 1 (Negative Rates):**
In 2020, Yields < 0.
Bootstrapping algorithms crashed (Log of negative number).
Systems had to be patched to "Shifted Lognormal" models.
Infrastructure fragility.

**Exercise 2 (Rolling Down the Curve):**
Yield Curve is upward sloping.
Buy 5Y bond at 4%.
Wait 1 year. It becomes a 4Y bond.
Yield at 4Y is 3.5%.
Price rises due to yield drop.
"Roll Down" return > Coupon return.

## VI. References
-   Hagan, P. & West, G. *Interpolation Methods for Curve Construction*.
-   Fabozzi, F. *The Handbook of Fixed Income Securities*.
