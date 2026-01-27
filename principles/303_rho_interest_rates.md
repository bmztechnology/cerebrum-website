# Rho Interest Rates: The Forgotten Greek

## I. Executive Summary

**Rho ($\rho$)** measures the sensitivity of Option Price to **Risk-Free Interest Rates ($r$)**. For years (2008-2021), Rho was ignored because rates were zero. In 2023 (Rates 5%), Rho became a massive driver. Calls are **Long Rho** (Substitute for buying stock, saving capital to earn interest). Puts are **Short Rho**.

## II. Formal Definitions

### Definition 2.1 (The Mechanism)
Buying a Call allows you to control 100 shares without paying $S$.
You keep $S$ in the bank earning $r$.
Higher $r$ $\implies$ Higher Interest Income $\implies$ Call is more valuable.
Conversely, Shorting stock (for Put replication) earns interest on cash proceeds.
Higher $r$ $\implies$ Shorting is lucrative $\implies$ Puts become cheaper? (Actually Puts fall as rates rise because PV of Strike drops).

### Definition 2.2 (Rho Equations)
$$ \rho_{call} = K T e^{-rT} N(d_2) $$
$$ \rho_{put} = -K T e^{-rT} N(-d_2) $$
Linear relationship with Time ($T$) and Strike ($K$).
LEAPS (2 year options) have huge Rho exposure.

## III. Theoretical Framework

### 3.1 The Cost of Carry
Forward Price $F = S e^{rT}$.
Higher Rates $\implies$ Higher Forward Price.
Call Price is centered on $F$, not $S$.
So Rates push Calls up and Puts down.
This explains the "Put-Call Parity disclocation" in high rate regimes.

### 3.2 Inflation Hedge
Calls are a natural inflation hedge.
Inflation usually drives Rates up.
Rates up drives Calls up.
Owning Calls protects against Monetary inflation better than owning Bonds (which crash when rates rise).

## IV. Strategic Applications

### 4.1 Early Exercise (Puts)
If you own deep ITM Puts.
You are "Short Synthetic Stock" + "Money in the Bank" (The Strike Price you will receive).
But you don't get the cash until expiry.
If Rates are 5%, waiting costs money.
You EXERCISE Early to get the cash and earn interest.
Rare case where American Options > European Options.

### 4.2 ZIRP vs Powell Regime
In ZIRP (0%), Box Spreads traded flat.
In Powell Regime (5%), Box Spreads trade at substantial discount to width.
A 100-wide Box trades at 95.
The 5 is the interest.

## V. Exercises

**Exercise 1 (LEAPS Pricing):**
Stock 100. Call Strike 100. 2 Year Expiry.
Rate 0%: Call = 10.
Rate 5%: Call = 15?
The interest on $100 for 2 years is $10+.
Call price must reflect this "funding benefit."

**Exercise 2 (FX Options):**
Global Rho ($r_{dom} - r_{for}$).
Garman-Kohlhagen Model.
You trade the *differential* in interest rates.
Carry Trade embedded in options prices.

## VI. References
-   Natenberg, S. *Option Volatility and Pricing*.
-   Hull, J.C. *Options, Futures, and Other Derivatives*.
