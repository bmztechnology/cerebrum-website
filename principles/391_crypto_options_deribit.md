# Crypto Options Deribit: The Volatility Smile

## I. Executive Summary

**Crypto Options** (dominated by Deribit) exhibit unique volatility characteristics. Implied Volatility is structurally high (50-100%). The **Skew** is often positive (Calls > Puts) or U-shaped, unlike Equities (Puts > Calls). This reflects the asset class's "Crash Up" potential (FOMO) as well as "Crash Down" risk. Pricing usually follows **Black-scholes** but with manual overrides for fat tails.

## II. Formal Definitions

### Definition 2.1 (Inverse Options)
Contracts are margined in the Coin (BTC), not USD.
Payoff = $(Price - Strike) / Price$ (in BTC).
Non-linear payoff structure ("Quanto correction" built in?).
No, simpler: Values calculated in USD, converted to BTC.
Shorting Calls means you receive BTC premium. If BTC drops, you keep premium (which is worth less USD).
"Short Vega / Long Delta" correlation overlap.

### Definition 2.2 (DVol Index)
Crypto VIX.
Derived from option smile.
Trading DVol Futures allows pure volatility exposure.

## III. Theoretical Framework

### 3.1 The Skew Regime
-   **Bear Market:** Put Skew develops (Fear of zero).
-   **Bull Market:** Call Skew (FOMO). OTM Calls trade at 100% Vol.
-   **Stable Market:** Smile is steep (Kurtosis). Big moves likely, small moves unlikely.

### 3.2 Funding Rate Parity
$Forward = Spot \times e^{rt}$.
In Crypto, $r$ is the implied funding rate from Perps/Futures.
If Futures are 10% premium. Call prices are elevated. Put prices depressed.
Put-Call Parity uses Futures Price, not Spot Price.

## IV. Strategic Applications

### 4.1 Covered Call (Yield Enhancement)
Hold BTC. Sell OTM Call.
Collect Premium (High IV).
Risk: BTC goes to \$100k. You sell at \$40k.
Opportunity cost is massive in crypto.
"Picking up pennies in front of a rocket ship."

### 4.2 Gamma Squeeze
Dealers Short Calls.
Price Rises $\implies$ Dealers Short Gamma $\implies$ Buy Spot to hedge $\implies$ Price Rises.
Recursive loop.
Common in low liquidity Altcoins.

## V. Exercises

**Exercise 1 (DOV - Defi Option Vaults):**
Ribbon/Theta.
Automated Covered Call strategy.
Vault sells Calls every Friday.
Market Makers buy them cheap.
Compresses Volatility on Fridays.

**Exercise 2 (24/7 Trading):**
Theta decays 24/7.
Gamma risk is 24/7.
No "Market Close."
Algorithmic monitoring required.

## VI. References
-   Deribit. *Option Pricing Policy*.
-   Alexander, C. *Crypto-Asset Valuation*.
