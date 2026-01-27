# Yield Curve Bootstrapping: Constructing Zeroes

## I. Executive Summary

**Bootstrapping** is the iterative process of constructing a **Zero Coupon Yield Curve** from a set of market instruments (Deposits, Futures, Swaps). Since market instruments pay coupons, they are not "Zero" rates. We peel the onion: Use the 6M zero rate to price the first coupon of the 1Y bond, solve for the 1Y zero rate, and repeat.

## II. Formal Definitions

### Definition 2.1 (The Zero Rate)
$Z(t)$: The spot interest rate for a single cashflow at $t$.
$DF(t) = e^{-Z(t) \cdot t}$.
Market quotes Par Rates (Swap Rates), not Zero Rates.

### Definition 2.2 (The Hierarchy)
1.  **Short End (0-3M):** Cash Deposits / OIS.
2.  **Middle (3M-2Y):** Eurodollar/SOFR Futures (Convexity adjusted).
3.  **Long End (2Y-50Y):** Swap Rates.

## III. Theoretical Framework

### 3.1 The Iteration
Given $Z(0.5)$ is known.
Swap 1Y paying $S_1$ semiannually.
$100 = S_1/2 \cdot DF(0.5) + (100 + S_1/2) \cdot DF(1.0)$.
We know $S_1$ (Market) and $DF(0.5)$ (Bootstrapped).
Solve for $DF(1.0)$.
Then move to 1.5Y using $Z(0.5)$ and $Z(1.0)$.

### 3.2 Interpolation Methods
-   **Linear on Zero Rates:** Simple, but Forward rates have jumps.
-   **Log-Linear on DFs:** Smoothish.
-   **Cubic Spline / Monotone Convex:** Best practice. Ensures "Forward Rates" are positive and smooth. (Bad interpolation creates jagged forwards).

## IV. Strategic Applications

### 4.1 Curve Anomalies
If 7Y Swap Rate is mispriced inputs.
The bootstrap propagates the error to 8Y, 9Y...
"Multipoint arbitrage."
Smoothing algorithms detect outliers.

### 4.2 Discounting Shift
Bootstrapping a "Dual Curve."
Need to solve for Forward Rates (Libor) and Discount Factors (OIS) simultaneously.
Requires a system of equations solving for Basis interactions.

## V. Exercises

**Exercise 1 (The Futures Gap):**
Futures quote $100 - Rate$.
Quote = 96. Rate = 4%.
Is this the Forward Rate?
No. Futures imply daily margining (Convexity).
Forward Rate = Futures Rate - $0.5 \sigma^2 T^2$.
Must adjust before bootstrapping.

**Exercise 2 (Negative Rates):**
Bootstrapping works fine with negative rates.
Log-Linear interpolation of Discount Factors is safe ($e^{-rt}$ works for negative $r$).
Linear interpolation of Log(DF) is standard.

## VI. References
-   Hagan, P., & West, G. *Methods for Constructing a Yield Curve*.
-   Ametrano, F. *Smooth Interpolation of Yield Curves*.
