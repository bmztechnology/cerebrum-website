# Perpetual Swaps Funding: The Funding Rate

## I. Executive Summary

The **Perpetual Swap (Perp)** is a crypto-native derivative that has no expiry date. Instead of expiring to spot, price is anchored to the Spot Index via a **Funding Rate** mechanism. If Perp Price > Spot Price, **Longs pay Shorts** (Funding is positive). If Perp < Spot, Shorts pay Longs. This incentivizes arbitrageurs to keep the price aligned.

## II. Formal Definitions

### Definition 2.1 (Funding Formula)
$$ FundingRate = Clamp(MA( \frac{Perp - Index}{Index} ), -0.05\%, 0.05\%) + InterestRate $$
Paid every 8 hours.
If Rate = 0.01% (Standard state): Longs pay 0.03% per day (10% APR) to Shorts.
If Rate = -0.01%: Shorts pay Longs.

### Definition 2.2 (Liquidation)
Users trade with High Leverage (up to 100x).
**Maintenance Margin:** e.g., 0.5%.
If Margin < Maintenance $\implies$ **Liquidation Engine** takes over.
Sells position into the order book.
Insurance Fund covers the "Bankruptcy Price" slippage.

## III. Theoretical Framework

### 3.1 Basis convergence
Unlike Futures (converge at $T$), Perps converge continuously.
Funding Rate $\approx \frac{d}{dt} (Basis)$.
High funding implies high basis.
Traders "Farm the Funding" (Cash and Carry without expiry).

### 3.2 Systemic Risk
Liquidation Cascades.
Longs liquidated $\implies$ Sell Pressure $\implies$ Price drops $\implies$ More Longs liquidated.
Funding Rate goes negative (Shorts pay Longs) to encourage buyers to step in.
Without Circuit Breakers, price can go to zero in seconds (Flash Crash).

## IV. Strategic Applications

### 4.1 Delta Neutral Income
Buy 1 BTC Spot.
Short 1 BTC Perp (1x Leverage).
Delta = 0.
PnL = Funding Income.
Yields 10-30% APR in bull markets.
Risk: Exchange risk (FTX) or Smart Contract risk.

### 4.2 The "Squeeze"
If Funding is Negative (-0.1%), Shorts are paying huge interest.
Crowded Short trade.
Longs buy to force price up.
Shorts forced to close (Buy back) $\implies$ Price rockets $\implies$ More shorts liquidated.
"Short Squeeze."

## V. Exercises

**Exercise 1 (Predicted Funding):**
Exchanges publish "Predicted Funding" for next interval.
Arb bots trade the prediction.
Buying 1 minute before funding to capture negative rate?
Pricing adjusts instantly to account for the incoming cashflow.

**Exercise 2 (Cross Margin):**
Using unrealized profit in ETH position to fund margin for BTC position.
Correlation = 1 assumption.
If Correlation breaks, both liquidated.

## VI. References
-   BitMEX. *Perpetual Contracts Guide*.
-   Hayes, A. *The invention of the Perpetual Swap*.
