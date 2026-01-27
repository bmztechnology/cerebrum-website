# Convexity Hedging Gamma: Second Order

## I. Executive Summary

**Convexity Hedging** involves managing the non-linear risk of a fixed income portfolio. While Duration hedging works for small moves, large moves require **Gamma** (Convexity) adjustments. Market Makers who are short convexity (e.g., sold options or holding MBS) must buy bonds as yields fall and sell as yields rise, creating "Positive Feedback" loops that amplify volatility.

## II. Formal Definitions

### Definition 2.1 (Convexity Gap)
Asset Convexity - Liability Convexity.
If Gap < 0 (Short Convexity):
Risk of large moves.
Requires "Dynamic Hedging" (Rebalancing).
Cost of Rebalancing $\approx$ Option Premium.

### Definition 2.2 (Gamma Profile)
Long Option = Long Gamma = Long Convexity.
Short Option = Short Gamma = Short Convexity.
Bond Convexity is "Long Gamma" naturally.
MBS is "Short Gamma" (Negative Convexity).

## III. Theoretical Framework

### 3.1 The Rebalancing Cost
Short Convexity portfolio.
Rates Drop $\implies$ Duration decreases (Prepays). Liability Value Rises fast.
Hedge is too short. Buy Bonds (at High Price).
Rates Rise $\implies$ Duration extends. Liability Value Falls slowly.
Hedge is too long. Sell Bonds (at Low Price).
"Buy High, Sell Low."
The cumulative loss equals the theoretical value of the option sold.

### 3.2 Convexity Vortex
Mortgage hedging.
As rates pass through key levels (Refinancing wall), aggregate MBS duration extends/contracts rapidly.
Hedgers all trade same direction.
Volatility spikes.
"Vortex."

## IV. Strategic Applications

### 4.1 Buying Cheap Convexity
Long Term Zeroes (30Y STRIPS).
Max convexity per dollar of duration.
Efficient way to add curvature to a portfolio.

### 4.2 Selling Convexity for Yield
Callable Agencies.
Higher yield than Bullets.
Investor accepts negative convexity (capped upside) for carry.
Profitable in range-bound markets.

## V. Exercises

**Exercise 1 (Shadow Gamma):**
MBS Gamma depends on "Rate Path."
If rates drop then rise, prepayment decision is "Burned out."
Path dependent convexity.

**Exercise 2 (Delta-Gamma-Vega):**
Convexity hedge is a Delta-Gamma hedge.
Usually done with Options (Swaptions).
Buy Straddle = Buy Pure Convexity.
Hedge the bond convexity risk with Straddles.

## VI. References
-   Burghardt, G. *The Convexity Bias*.
-   Duarte, J. *Risk and Return in Fixed Income*.
