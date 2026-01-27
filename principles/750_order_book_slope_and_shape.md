# Order Book Slope and Shape

## I. Executive Summary

The **Shape** of the Limit Order Book (LOB) is rarely flat. It exhibits curvature (convex or concave) that determines the **Price Elasticity** of the asset. The **Slope** of the book (Rate at which volume accumulates as price moves away from mid) defines the **Resilience** to shocks. Using the Shape/Slope as a feature improves Volatility forecasting and execution logic.

## II. Formal Definitions

### Definition 2.1 (The Density Function $\rho(p)$)
$\rho(p) d p$: Volume available in price interval $(p, p+dp)$.
Standard assumption: $\rho(p)$ is constant (Block shaped book).
Reality: $\rho(p)$ increases with distance from mid (V-Shape).
Log-Normal distribution of Limit Orders.

### Definition 2.2 (The Slope Estimate)
Fit a line to Cumulative Depth $D(p)$.
$D(p) = \alpha \ln(p - P_{mid}) + \beta$.
Or Linear: $D(p) = k (p - P_{mid})$. $k$ is the Slope.
Steep Slope $\implies$ High Liquidity (Price won't move much).
Flat Slope $\implies$ Low Liquidity (Price will jump).

## III. Theoretical Framework

### 3.1 Relative Value of Depth
1000 shares at Level 1 is worth more than 1000 shares at Level 10.
Why?
Level 1 is "Immediate." Level 10 is "Conditional."
The Slope quantifies the "Cost of Immediacy."
Steep slope = Cheap immediacy.

### 3.2 Regime Changes
**Normal:** V-Shape.
**Pre-Crash:** Book becomes Flat (Liquidity evaporation).
**Support/Resistance:** Hump Shape (Massive liquidity at round number).
The Shape is the topology of the market battlefield.

## IV. Strategic Applications

### 4.1 Sweeping Logic
If Slope is Steep: Market Order is safe (Low Impact).
If Slope is Flat: Limit Order is mandatory (High Impact).
Dynamic Order Types based on Slope.

### 4.2 Predicting Volatility
Standard Volatility ($\sigma$) measures past price moves.
Book Slope measures *potential* future price moves.
Flat Slope predicts High Volatility *before* it happens.
"The walls are thin."

## V. Exercises

**Exercise 1 (The Skewed Slope):**
Bid Slope is Steep ($k_B = 1000$).
Ask Slope is Flat ($k_A = 100$).
Asymmetric Liquidity.
Price is easy to push Up, hard to push Down.
Bullish structure.

**Exercise 2 (Fitting the Power Law):**
Empirical regularity.
$D(\Delta p) \propto (\Delta p)^{\gamma}$.
Usually $\gamma < 1$.
Market Depth grows sub-linearly.

## VI. References
-   Bouchaud, J. *Order Book Dynamics*.
-   Gould, M. *The Limit Order Book as a Queueing System*.
