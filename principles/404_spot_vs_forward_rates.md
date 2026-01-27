# Spot vs Forward Rates: Bootstrapping

## I. Executive Summary

The **Spot Curve** (Zero Curve) represents the yield on Zero Coupon bonds. Most observed bonds are Coupon Bonds. **Bootstrapping** is the recursive process of extracting the Spot Curve from Coupon Bond prices. **Forward Rates** are physically implied break-even rates derived from the Spot Curve, representing the rate for borrowing/lending in the future.

## II. Formal Definitions

### Definition 2.1 (Bootstrapping Algorithm)
1.  1Y Bond (Zero): Price $\implies r_1$.
2.  2Y Bond (Coupon $C$): $P = \frac{C}{1+r_1} + \frac{100+C}{(1+r_2)^2}$.
    Since $r_1$ is known, solve for $r_2$.
3.  3Y Bond: Use $r_1, r_2$ to discount first coupons, solve for $r_3$.
Constructs the Term Structure $r(t)$.

### Definition 2.2 (Instantaneous Forward Rate)
$$ f(t) = r(t) + t \frac{\partial r(t)}{\partial t} $$
Forward rate lies *above* the Spot curve if Spot curve is upward sloping.
Forward rate *drives* the change in Discount Factor.
$P(T) = \exp( - \int_0^T f(u) du )$.

## III. Theoretical Framework

### 3.1 No Arbitrage Condition
If you can lock in a 1Y rate and a 2Y rate.
You can synthesize a loan starting in year 1 ending in year 2.
The rate on this synthetic loan MUST equal the Forward Rate.
Otherwise: Arbitrage.

### 3.2 Splines
Bootstrapping creates jagged curves if data is sparse.
Cubic Splines (Nelson-Siegel-Svensson) used to smooth the curve.
Central Banks publish NSS parameters daily.

## IV. Strategic Applications

### 4.1 Rolling Down the Curve
If Curve is Upward Sloping and Stable (Fwd rates not realized).
Buy 5Y bond yielding 4%.
Hold for 1 year. Becomes 4Y bond yielding 3%.
Price rises (Capital Gain).
Total Return > Yield.
Active bond strategy.

### 4.2 Forward Rate Agreements (FRA)
Derivatives that trade the Forward Rate directly.
"3x6 FRA" = Rate starting in 3 months, ending in 6 months.
Used to hedge future borrowing costs.

## V. Exercises

**Exercise 1 (The Crossing):**
Spot and Forward curves meet at $t=0$.
If Spot is flat, Forward is flat and equal.
If Spot rises, Forward is higher.
If Spot falls, Forward is lower.
Forward curve is the "Marginal Cost" curve.

**Exercise 2 (Negative Forwards):**
Can Forward rates be negative even if Spot rates are positive?
Yes, if Spot curve drops steeply enough.
Implies very strong deflationary expectation.

## VI. References
-   Hull, J. *Options, Futures, and Other Derivatives*.
-   Hagan, P., & West, G. *Interpolation Methods for Curve Construction*.
