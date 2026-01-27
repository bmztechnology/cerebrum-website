# Volatility Surface Microstructure

## I. Executive Summary

The **Volatility Surface** is usually modeled using macro-option data (Black-Scholes Implied Volatility). However, in **Microstructure**, the surface helps quantify the Cost of Liquidity. Market Makers price options based on their inventory and the "Local Volatility" of the order book. The shape of the **Smile** (Skew) is directly related to the **Jump Risk** inherent in liquidity holes.

## II. Formal Definitions

### Definition 2.1 (Local Volatility in the LOB)
Price diffusion is not constant.
$\sigma(S, t)$ depends on the Order Book density at price $S$.
If the book is thin at $S=95$, $\sigma(95)$ is high (Price moves fast through air).
If the book is thick at $S=100$, $\sigma(100)$ is low.
Microstructure explains the "Smile" as the inverse of Market Depth.

### Definition 2.2 (The Skew and Crash Risk)
Puts trade at a premium to Calls.
Why? Downside liquidity is more fragile (Panic selling removes bids).
Upside liquidity is robust (Limit sells appear).
The Skew is a pricing of the asymmetry in the LOB's resilience.

## III. Theoretical Framework

### 3.1 Stochastic Volatility Models (Heston)
Assume $\sigma$ is a random process.
In Microstructure, $\sigma$ is driven by **Order Flow**.
Heavy selling $\implies$ $\sigma \uparrow$.
This creates a feedback loop: Volatility widens spreads $\implies$ Reduces Liquidity $\implies$ Increases Volatility.

### 3.2 VIX vs Realized Micro-Vol
VIX = 30-day expectation.
Realized Micro-Vol = Tick-by-tick variance.
HFTs arbitrage the difference using Gamma Scalping.
If Micro-Vol > VIX implied vol, HFT buys options and scalps the underlying gamma.

## IV. Strategic Applications

### 4.1 Quote Width Calibration
MM sets spread $\delta = \gamma \sigma^2$.
Which $\sigma$?
Using the "Instantaneous Volatility" estimated from the last 1 minute of ticks.
Adaptive spreads based on microstructure realized vol.

### 4.2 Pinning
Option Expiration (OpEx).
Market Makers with large Gamma positions hedge.
If price nears strike, hedging flow opposes price movement (Sell rallies, Buy dips).
Pins the stock to the strike.
Understanding Open Interest $\implies$ Predicting Microstructure behavior.

## V. Exercises

**Exercise 1 (The Smile Construction):**
Plot Implied Vol vs Strike.
Overlay with Market Depth vs Price.
Correlation: Low Depth $\approx$ High Volatility.
Liquidity explains the premium.

**Exercise 2 (Gamma Trap):**
Near expiration, Short Gamma traders accelerate volatility.
Long Gamma traders suppress it.
Identifying who dominates the flow determines if the market will be pinned or explode.

## VI. References
-   Gatheral, J. *The Volatility Surface*.
-   Cont, R. *Price Dynamics in a Markovian Limit Order Market*.
