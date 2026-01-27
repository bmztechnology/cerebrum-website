# Quanto Options: Correlation Risk

## I. Executive Summary

**Quanto (Quantity Adjusting) Options** allow an investor to gain exposure to a foreign asset (e.g., Nikkei 225) but with the payoff denominated in domestic currency (e.g., USD) at a **fixed exchange rate**. This eliminates FX risk for the investor but transfers a complex **Correlation Risk** ($\rho_{Equity, FX}$) to the dealer.

## II. Formal Definitions

### Definition 2.1 (Payoff)
Nikkei (JPY) returns 10%.
Quanto USD Investor gets 10% in USD.
Usually: $Payoff = Notional_{USD} \times \frac{S_T - K}{S_0}$.
The FX rate used is effectively "1.0" fixed forever.

### Definition 2.2 (The Drift Adjustment)
In BSM, the drift of the asset is adjusted by the covariance of the asset and the currency.
$\mu_{quanto} = r_{dom} - q - \rho \sigma_S \sigma_{FX}$.
If Correlation is positive (Stock Up $\implies$ FX Up), the Quanto drift is *lower*.
Cost of hedging the FX exposure as the asset value grows.

## III. Theoretical Framework

### 3.1 The Hedging Nightmare
Dealer is Short Quanto Call.
1.  **Delta Hedge:** Buy Nikkei Futures (JPY).
2.  **FX Hedge:** Sell JPY / Buy USD.
Problem: The amount of JPY to Sell depends on the value of the Nikkei.
If Nikkei doubles, Dealer needs to hedge 2x the FX.
Dealer is **Short Correlation** (Cross-Gamma).
If Nikkei Rallies AND JPY Rallies (Positive Correlation), Dealer loses.

### 3.2 Quanto Adjustment (Dividend)
Often used in Crypto perps (BitMEX Inverse Futures).
Collateral in BTC. PnL in USD.
"Quanto Correction" creates a bias in the funding rate.

## IV. Strategic Applications

### 4.1 Emerging Markets
US Investor wants Brazil Stocks (EWZ).
EWZ is essentially a Quanto? No, EWZ is unhedged (ADR).
If BRL crashes, EWZ crashes.
True Quanto: Synthetic Note paying Ibovespa return in USD.
Expensive due to Brazil's high interest rates and Vol.

### 4.2 Commodities
Gold is priced in USD.
European investor wants Gold exposure in EUR.
"Gold Quanto EUR."
Hedges the USD/EUR risk.
Key: Gold/USD correlation is negative.
Quanto drift adjustment makes this option cheaper/more expensive depending entirely on correlation parameter.

## V. Exercises

**Exercise 1 (Crypto Inverse perp):**
Price = $10,000. Long 1 BTC.
Price $\to$ $20,000.
Profit = $10,000 (0.5 BTC).
Total Equity = 1.5 BTC = $30,000.
Return = 300%? No. $10k to $30k is 200%.
This non-linearity is a Quanto effect (Collateral is the asset).

**Exercise 2 (Correlation Blowup):**
Dealer assumes $\rho = 0$. Prices Quanto cheaply.
Crisis hits. Asset drops. Currency crashes. $\rho \to 1$.
Dealer hedged wrong amount.
Quanto book blowups are common in FX desks.

## VI. References
-   Derman, E., et al. *The Valuing of Options on Foreign Assets*.
-   Wystup, U. *FX Options and Structured Products*.
