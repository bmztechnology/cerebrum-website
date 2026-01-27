# Derivatives: Rates of Change and The Greeks

## I. Executive Summary

The **Derivative** is the heart of quantitative finance. It measures the sensitivity of a function's output to changes in its input. In Markets, we rarely care about the absolute price; we care about *how the price changes* relative to Time, Volatility, or Interest Rates. These sensitivities are the **Greeks** (Delta, Gamma, Theta, Vega). Without derivatives, risk management is impossible.

## II. Formal Definitions

### Definition 2.1 (The Derivative)
$$f'(x) = \frac{df}{dx} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### Definition 2.2 (Taylor Expansion Approximation)
For small changes $\Delta x$:
$$f(x + \Delta x) \approx f(x) + f'(x)\Delta x + \frac{1}{2}f''(x)(\Delta x)^2$$
*Finance Translation:*
$$NewPrice \approx OldPrice + Delta(\Delta S) + \frac{1}{2}Gamma(\Delta S)^2$$

## III. Theoretical Framework

### 3.1 The Greeks (Partial Derivatives)
Let Option Price $V = V(S, t, \sigma, r)$.
1.  **Delta ($\Delta = \frac{\partial V}{\partial S}$):** Speed. How much Option Value changes for \$1 move in Stock.
2.  **Gamma ($\Gamma = \frac{\partial^2 V}{\partial S^2}$):** Acceleration. How much Delta changes for \$1 move in Stock.
3.  **Theta ($\Theta = \frac{\partial V}{\partial t}$):** Time Decay. How much Value is lost per day.
4.  **Vega ($\nu = \frac{\partial V}{\partial \sigma}$):** Volatility Sensitivity.

### 3.2 Convexity (The Second Derivative)
Linear instruments (Futures/Spot) have 0 Convexity ($f''(x) = 0$).
Non-linear instruments (Options) have Positive Convexity ($f''(x) > 0$).
*Benefit:* With positive convexity, you make more when you are right than you lose when you are wrong (for the same size move).

## IV. Strategic Applications

### 4.1 Delta Neutral Hedging
You sold a Call Option (Short Volatility).
Delta is -0.50.
To generally hedge, you must Buy 0.50 shares of the underlying.
$$\text{Portfolio Delta} = -0.50 + 0.50 = 0$$
Now, small price moves do not affect PnL. You profit purely from Theta (Time Decay).

### 4.2 Gamma Scalping
If you are Long Options (Long Gamma), your Delta increases as price rises (you get longer) and decreases as price falls (you get shorter).
*Strategy:* Buy Low, Sell High automatically.
As stock oscillates, you continually adjust your hedge to lock in profits.

## V. Exercises

**Exercise 1 (Differentiation):**
Payoff $y = x^2$ (convex).
Slope at $x=10$ is $2x = 20$.
Slope at $x=11$ is $2x = 22$.
If price moves from 10 to 11, you gain.
Payoff $y = \sqrt{x}$ (concave).
Slope at $x=100$ is $\frac{1}{2\sqrt{100}} = 0.05$.
Slope at $x=101$ is smaller.
Concavity (Short Gamma) hurts you in trends.

**Exercise 2 (Theta vs Gamma):**
The "Rent" for Long Gamma is Theta.
$$Theta \approx -\frac{1}{2}\sigma^2 S^2 Gamma$$
To have positive convexity (Gamma), you must bleed money daily (Theta).
There is no free lunch in physics or finance.

## VI. References
-   Hull, J. *Options, Futures, and Other Derivatives*.
-   Taleb, N.N. *Dynamic Hedging*.
