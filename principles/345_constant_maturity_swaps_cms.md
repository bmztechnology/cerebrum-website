# Constant Maturity Swaps CMS: Yield Curve Options

## I. Executive Summary

A **Constant Maturity Swap (CMS)** is a swap where the floating leg is set periodically to a **Long Term Swap Rate** (e.g., 10Y Swap Rate) rather than a short term rate (3M LIBOR). This allows investors to take a view on the **Curve Slope** or hedge long-duration liabilities with short-term resets. Pricing requires complex **Convexity Adjustments** because the Forward CMS rate $\neq$ Forward Swap Rate.

## II. Formal Definitions

### Definition 2.1 (Payoff)
-   Leg 1: Pays Libor + Spread.
-   Leg 2: Pays 10Y Swap Rate (fixed at the reset date).
Duration: 5 Years.
Every quarter, you look at the 10Y Rate and pay that.
You are effectively "Rolling" a 10Y bond every 3 months.

### Definition 2.2 (The Convexity Adjustment)
A standard swap rate $S$ is the par rate of a bond.
$S = \frac{1 - DF_n}{\sum DF}$.
This is a non-linear function of the Yield Curve.
$E[S_{future}] \neq S_{forward}$.
Jensen's Inequality.
Adjustment usually adds value to the CMS leg.
Depends on Volatility of Long Rates.

## III. Theoretical Framework

### 3.1 CMS Spread Options
Option on (10Y Rate - 2Y Rate).
Slope Steepener.
Popular with Insurance companies (Hunt for Yield).
"If curve stays steep, I make 10% coupon."
Short volatility of the curve slope.

### 3.2 Replication
CMS Rate can be replicated by a portfolio of Swaptions.
"Static Replication" formula (Carr-Madan).
Integral over the strike range.
CMS pricing is essentially Swaption Smile integration.

## IV. Strategic Applications

### 4.1 Steepener Note
Structured note for retail.
Pays $Leverage \times (CMS10 - CMS2) $.
If Curve inverts (Recession), Coupon = 0.
Very popular in 2005-2007.
Disaster in 2008 (Curve flattened/inverted, liquidity famously vanished).

### 4.2 Hedging Mortgage Convexity
MBS duration extends when rates rise (Negative Convexity).
CMS swaps can hedge this extension risk.

## V. Exercises

**Exercise 1 (The Rate Cut):**
Rates Cut $\implies$ Front end drops. Long end sticky. Curve Steepens.
CMS Steepener Holder wins.
CMS 10Y payer (vs Libor) wins?
Libor drops, CMS10 drops less. Receives net. Good.

**Exercise 2 (Infinite Variance):**
Standard Log-normal models (Black) break down for CMS Spread options (spread can be negative).
Normal Model (Bachelier) required.

## VI. References
-   Hagan, P. *Convexity Adjustments for Constant Maturities*.
-   Mercurio, F. *Libor Market Models with Stochastic Volatility*.
