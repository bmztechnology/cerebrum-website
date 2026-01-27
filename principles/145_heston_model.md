# Heston Model: Stochastic Volatility

## I. Executive Summary

Black-Scholes assumes Volatility ($\sigma$) is constant. It is not. Volatility itself is volatile, and it is negatively correlated with price (Crashes cause high vol). Steven Heston (1993) modeled Volatility as its own stochastic process (CIR process) coupled with the Price process. This closed-form solution explains the **Volatility Surface** and the **Skew**.

## II. Formal Definitions

### Definition 2.1 (System of Equations)
1.  Price: $dS_t = \mu S_t dt + \sqrt{v_t} S_t dW_t^S$
2.  Variance: $dv_t = \kappa (\theta - v_t) dt + \xi \sqrt{v_t} dW_t^v$
3.  Correlation: $E[dW_t^S dW_t^v] = \rho dt$

-   $v_t$: Instantaneous Variance.
-   $\kappa$: Reversion speed of variance.
-   $\theta$: Long run variance.
-   $\xi$: "Vol of Vol".
-   $\rho$: Correlation (-0.7 for equities).

## III. Theoretical Framework

### 3.1 The Feller Condition
For variance to stay positive, we need:
$$2\kappa\theta > \xi^2$$
If violated, variance hits 0 and gets stuck (Model failure).

### 3.2 Explaining the Skew
-   $\rho < 0$: When Price falls, Vol rises. This makes Puts expensive (Left Skew).
-   $\rho > 0$: When Price rises, Vol rises. (Commodities/Gold inverse skew).
Heston is the only analytic model that captures this organic behavior.

## IV. Strategic Applications

### 4.1 Volatility Arbitrage
If Heston Price > Market Price for OTM Puts.
Market is "Underpricing Skew."
Strategy: Buy OTM Puts, Delta Hedge.
Profit if Skew steepens.

### 4.2 Forward Volatility Trading
Heston predicts where Vol will be in the future ($\theta$).
If Current Vol ($v_t$) < Long Run Vol ($\theta$), buy VIX Futures.

## V. Exercises

**Exercise 1 (Impact of Rho):**
Set $\rho = 0$.
The Implied Vol curve is a Smile (Symmetric).
Set $\rho = -0.9$.
The curve is a Smirk (High Puts, Low Calls).
Equities behave like $\rho = -0.7$.

**Exercise 2 (Vol of Vol):**
Increase $\xi$.
The Tails of the distribution become fatter (Kurtosis).
Higher $\xi$ makes deep OTM options more expensive.

## VI. References
-   Heston, S.L. *A Closed-Form Solution for Options with Stochastic Volatility*.
-   Gatheral, J. *The Volatility Surface*.
