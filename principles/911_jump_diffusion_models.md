# Jump Diffusion Models Merton

## I. Executive Summary

Standard diffusion (Brownian Motion) cannot explain **Crashes** (Discontinuous moves). **Merton's Jump Diffusion** adds a **Poisson Process** (Jumps) to the diffusion. This generates **Fat Tails** (Skewness/Kurtosis) in the distribution. It explains why deep OTM Puts are expensive ("Crash protection premium") and breaks the Black-Scholes assumption of continuity.

## II. Formal Definitions

### Definition 2.1 (The Jump Process)
$$ dS = \mu S dt + \sigma S dW + (J-1) dN $$
$dW$: Continuous Wiggle (Normal).
$dN$: Jump Event (0 or 1). Poisson ($\lambda$).
$J$: Jump Size (Random magnitude).
When $dN=1$, Price jumps from $S$ to $S \times J$.
Gap Risk.

### Definition 2.2 (The Smile)
Black-Scholes predicts a Flat Implied Volatility surface.
Jump Diffusion predicts a "Smile" or "Smirk."
OTM Puts have high IV (pricing in the jump).
The distinct "Smirk" appeared after the 1987 Crash. The market learned about Jumps.

## III. Theoretical Framework

### 3.1 Hedging Failure
In Black-Scholes, you hedge continuously ($\Delta$).
In Jump Diffusion, hedging is impossible.
Price moves from 100 to 80 in zero time.
You cannot sell at 99, 98, 97...
You are "Gapped."
Gamma Hedging fails.
Requires buying OTM Puts (Static Hedge) to cover the Jump risk.

### 3.2 Total vs Idiosyncratic Variance
Diffusion = Systematic volatility.
Jump = Often Idiosyncratic (Earnings, Litigation, CEO fired) OR Systemic (War).
Diversification removes Idiosyncratic Jumps.
Does not remove Systemic Jumps.
Correlation goes to 1 during Jumps.

## IV. Strategic Applications

### 4.1 Event Arbitrage Pricing
Merger Arbitrage deals with Binary Jumps.
Deal succeeds: Price $\to$ \$50.
Deal fails: Price $\to$ \$30.
Bimodal distribution.
Cannot use Normal Distribution metrics (Sharpe).
Use Kelly Criterion for binary bets.

### 4.2 Calibration
Fit model parameters ($\sigma, \lambda, \mu_J, \sigma_J$) to Option Surface.
Inverse problem is ill-posed (Multiple solutions).
Traders often prefer Stochastic Volatility (Heston) over Jumps, or combine them (Bates Model).

## V. Exercises

**Exercise 1 (Stop Loss Gapping):**
Trader sets Stop Loss at 95.
Earnings released overnight.
Stock opens at 80.
Stop filled at 80 (Slippage = 15 points).
Model assuming continuous liquidity failed.
Risk Management must assume Jumps.

**Exercise 2 (The Poison Pill):**
Sudden corporate action.
Jump in governance structure?
Mathematical modeling of legal discontinuities.

## VI. References
-   Merton, R. *Option Pricing when Underlying Stock Returns are Discontinuous*.
-   Cont, R. *Financial Modelling with Jump Processes*.
