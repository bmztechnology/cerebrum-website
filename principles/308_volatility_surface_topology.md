# Volatility Surface Topology: Mapping Fear

## I. Executive Summary

The **Volatility Surface** is a 3D plot of Implied Volatility against **Strike/Moneyness** (X-axis) and **Time to Expiry** (Y-axis). It is not flat (as BSM assumes). It typically exhibits a **Smile** or **Skew** (OTM Puts > ATM > OTM Calls) and a **Term Structure** (Long Term > Short Term). Traders act as "Geologists" mapping this terrain to find mispriced outcrops.

## II. Formal Definitions

### Definition 2.1 (The Skew - Moneyness)
Prior to 1987, the curve was flat.
After 1987, OTM Puts trade at premium.
Equation fit (Polynomial):
$\sigma(K) = a + b(S-K) + c(S-K)^2$.
"Smirk": Steep skew for Puts, flat for Calls (Equity Markets).
"Smile": Steep for both (FX Markets).

### Definition 2.2 (The Term Structure - Time)
Relationship between VIX (30 day), VIX3M (3 Month), VIX1Y (1 Year).
-   **Contango:** Short Vol < Long Vol. (Normal market).
-   **Backwardation:** Short Vol > Long Vol. (Crash/Crisis).
The curve "inverts" during panic.

## III. Theoretical Framework

### 3.1 Local Volatility Model (Dupire)
Dupire (1994) showed that if you have a complete surface of option prices, there is a unique deterministic volatility function $\sigma(S,t)$ that produces them.
$ \sigma_{loc}^2(K,T) = \frac{\partial C / \partial T}{...} $
Allows pricing Exotics consistent with the Smile.

### 3.2 Stochastic Volatility (Heston)
Assumes Volatility itself is a random process correlated with Price.
$\rho(S, \sigma) < 0$ (Leverage Effect).
When Stock drops, Vol rises.
Better fits the Skew than BSM.

## IV. Strategic Applications

### 4.1 Riding the Roll Down
In Contango, 1-Month Vol is 30% lower than 1-Year Vol.
You Buy the Calendar Spread.
Short 1M Vol (Sell expensive time decay relative to level?). No.
Strategy: Sell the "steep part" of the curve, Buy the "flat part."
Curve steepens at the front end.

### 4.2 Skew Arb
If 10% OTM Put IV is 40%.
If 10% OTM Call IV is 10%.
Massive Skew.
Risk Reversal: Buy Call / Sell Put.
You get Long Delta + Long Vega for "Zero Cost."
Betting on Skew flattening (Market Rally).

## V. Exercises

**Exercise 1 (Surface Arbitrage):**
If Month 1 Vol = 20%. Month 3 Vol = 18%. Month 2 Vol = 25%.
Butterfly spread in Time.
Buy M1, Sell 2x M2, Buy M3.
Arbitrage the "Kink" in the term structure.
Expect Mean Reversion.

**Exercise 2 (Earnings Tent):**
Term structure creates a "Tent" shape around earnings date.
The specific expiry capturing earnings has elevated Vol.
Weeks before/after are lower.
Trade: Buy the Earnings Expiry / Sell the surrounding weeks.

## VI. References
-   Dupire, B. *Pricing with a Smile*.
-   Heston, S.L. *A Closed-Form Solution for Options with Stochastic Volatility*.
