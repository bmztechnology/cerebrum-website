# Convertible Arbitrage Delta Neutral Volatility

## I. Executive Summary

**Convertible Arbitrage** involves buying a **Convertible Bond** (Bond + Call Option) and shorting the underlying **Equity** to hedge the Delta. The result is a position that isolates the **Volatility** (Vega) and the **Credit Spread**. It is a **Gamma** strategy (profits from large moves) combined with positive Carry (Bond Yield > Stock Dividend).

## II. Formal Definitions

### Definition 2.1 (The Package)
Convertible Bond (CB) = Straight Bond + Call Option on Stock.
Price = Investment Value (Bond) + Conversion Value (Option).
Strategy: Long CB + Short Stock (Hedge Ratio $\Delta$).
Net position is Delta Neutral.

### Definition 2.2 (Gamma Trading)
Stock rises $\to$ Delta increases. You are now Long. Sell Stock to re-hedge. Profit.
Stock falls $\to$ Delta decreases. You are now Short. Buy Stock to re-hedge. Profit.
Scalping Gamma.
Profitable as long as: Realized Volatility > Implied Volatility paid for the Option.

## III. Theoretical Framework

### 3.1 Credit vs Volatility
If Stock crashes heavily:
Option value $\to$ 0.
Bond value dominates.
But if Credit Spreads widen (Default fear), Bond value drops too.
Correlation equals 1 in a crash.
"Convertible Arb Funds blew up in 2008."
Hedging Credit Risk via CDS is required.

### 3.2 Cheap Options
Issuers (Startups/Tesla) issue Converts to get lower interest rates.
They sell volatility cheap.
Arbs buy the cheap volatility.
Monetizing the issuer's underpricing of their own variance.

## IV. Strategic Applications

### 4.1 Death Spiral Convertibles
Toxic financing.
Option allows conversion at discount to *market price*.
As holder converts and sells, price drops.
Conversion ratio increases (more shares).
More selling.
Price $\to$ 0.
Predatory Microstructure.

### 4.2 Busting the Trade
Stock borrow becomes hard.
Short squeeze.
Arb cannot maintain short hedge.
Forced to buy back stock / sell bond.
Losses.

## V. Exercises

**Exercise 1 (Negative Gamma?):**
Rare.
Usually Long Gamma.
But if Convertible is "Mandatory," dynamics change.

**Exercise 2 (OAS - Option Adjusted Spread):**
Metric to value the bond portion.
Is the credit spread attractive relative to straight bonds?
If yes, buy.

## VI. References
-   Calamos, N. *Convertible Arbitrage*.
-   Noddings, T. *The Convertible Bond Handbook*.
