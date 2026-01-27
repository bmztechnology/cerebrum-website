# Taylor Series: Approximating Reality

## I. Executive Summary

In finance, exact functions are often too complex to compute (or unknown). **Taylor Series** allows us to approximate *any* smooth function as a polynomial sum of its derivatives. This is the logic behind "Duration and Convexity" in bonds and "Delta-Gamma-Speed" in options. It simplifies the non-linear world into manageable linear (and quadratic) components.

## II. Formal Definitions

### Definition 2.1 (Taylor Series)
For a smooth function $f(x)$ near point $a$:
$$f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots$$
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n$$

### Definition 2.2 (Maclaurin Series)
Special case where expansion point $a=0$.

## III. Theoretical Framework

### 3.1 First Order Approximation (Linear)
$f(x) \approx f(a) + f'(a)(x-a)$.
-   *Bond Math:* Price $\approx$ OldPrice - Duration $\times$ YieldChange.
-   *Option Math:* Price $\approx$ OldPrice - Delta $\times$ PriceChange.
-   Valid only for *tiny* moves.

### 3.2 Second Order Approximation (Quadratic)
$f(x) \approx f(a) + f'(a)(x-a) + 0.5 f''(a)(x-a)^2$.
-   *Bond Math:* Adds **Convexity**.
-   *Option Math:* Adds **Gamma**.
-   Captures the curvature. Necessary for large moves.

## IV. Strategic Applications

### 4.1 Gamma Rent
The Taylor expansion proves why Short Gamma blows up.
PnL $\approx \Delta (\delta S) + \frac{1}{2} \Gamma (\delta S)^2$.
If $\Gamma$ is negative (Short Option), limits acts as a squaring of distance.
A 10% move ($0.1^2 = 0.01$) hurts.
A 20% move ($0.2^2 = 0.04$) hurts **4x** more, not 2x more.
This geometric explosion of risk is why strict stress testing is required.

### 4.2 Portfolio Stress Testing
Instead of recalculating complex pricing models for 1000 assets, banks use Taylor approximations (Delta-Gamma Vectors) to estimate VaR instantly.
$\Delta P \approx \sum \Delta_i dS_i + \frac{1}{2} \sum \Gamma_{ii} dS_i^2$.

## V. Exercises

**Exercise 1 (Bond Convexity):**
Bond Sensitivity: $P' = -10$ (Duration). $P'' = 100$ (Convexity).
Yield rises 1% ($0.01$).
Linear prediction: $-10 \times 0.01 = -0.10$ (Loss 10%).
Quadratic prediction: $-0.10 + 0.5(100)(0.0001) = -0.10 + 0.005 = -9.5\%$.
The Convexity *saved* you 0.5%.

**Exercise 2 (Truncation Error):**
When does Taylor fail?
(When the move $(x-a)$ is large. The higher order terms [Speed, Color, Charm] become significant. In a crash, Gamma models fail, and you need full re-pricing).

## VI. References
-   Fabozzi, F. *Bond Markets, Analysis, and Strategies*.
-   Taleb, N.N. *Dynamic Hedging*.
