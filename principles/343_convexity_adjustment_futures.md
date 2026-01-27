# Convexity Adjustment Futures: The Tail Bias

## I. Executive Summary

**Eurodollar/SOFR Futures** and **Forward Rate Agreements (FRAs)** both lock in forward interest rates. However, Futures are **margined daily**, while FRAs are settled once at maturity. This difference creates a **Convexity Bias**: Futures holders benefit from correlation between Rates and Margins. Therefore, Futures Rates are consistently **higher** than FRA rates.

## II. Formal Definitions

### Definition 2.1 (The Mechanism)
-   **Long Future:** Rates Drop $\implies$ Price Up $\implies$ Receive Margin Cash immediately.
-   Rates usually drop in recessions (when Cash is valuable).
-   **Short Future:** Rates Rise $\implies$ Price Down $\implies$ Pay Margin Cash immediately.
-   Rates usually rise in booms (when funding is easy).
-   Result: Long Futures has positive correlation with funding needs. Preferable to FRA.
-   "Futures are better than Forwards."

### Definition 2.2 (The Formula)
$$ Rate_{Future} \approx Rate_{Forward} + \frac{1}{2} \sigma^2 T_1 T_2 $$
-   $\sigma$: Volatility of rates.
-   $T$: Time to maturity.
Adjustment grows with $T^2$ and $\sigma^2$.
For 1-year contract: Negligible (2 bps).
For 5-year contract: Massive (50 bps).

## III. Theoretical Framework

### 3.1 Model Dependency (Hull-White)
To calculate exact convexity, you need a Term Structure Model.
Depends on Mean Reversion speed.
The deeper in the curve, the larger the gap between Futures curve and OIS/Libor curve.

### 3.2 Trading the Bias
If Volatility spikes.
Convexity Adjustment increases.
Futures rates should rise relative to Swaps.
Spread trade: Long Futures / Pay Swap.
Pure Vega play on the short end.

## IV. Strategic Applications

### 4.1 Curve Construction
Neglecting Convexity leads to pricing errors.
Bootstrapping process must subtract the adjustment from Futures quotes to get the true Forward Rate.
Bloomberg "CVX" function.

### 4.2 SOFR Futures
SOFR Futures (CME) have same dynamic.
Actually 1M SOFR and 3M SOFR futures differ in convexity profiles due to averaging mechanics.

## V. Exercises

**Exercise 1 (Zero Volatility):**
If $\sigma = 0$.
Futures = Forwards.
No daily variance to compound.
Determinism makes margining timing irrelevant ( PV(Cash) is same).

**Exercise 2 (Inverted Correlation):**
What if Rates Drop $\implies$ Cash is useless? (Stagflation?).
Convexity could flip?
Usually, money is always preferred sooner than later.

## VI. References
-   Gupta, A. *Convexity Adjustment of Eurodollar Futures*.
-   Kirikos, G. *Convexity Conundrums*.
