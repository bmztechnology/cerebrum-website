# Vanna Volga Flow

## I. Executive Summary

**Vanna** (Sensitivity of Delta to Vol) and **Volga** (Sensitivity of Vega to Vol) are second-order Greeks that drive **Flow dynamics** in stressed markets. **Vanna Flow** creates feedback loops between Spot and Volatility (e.g., Spot Down $\to$ Vol Up $\to$ Dealer Short Sells). **Volga Flow** explains the pricing of "Wings" (Tail Risk) and why Implied Volatility surfaces convexity explodes during crises.

## II. Formal Definitions

### Definition 2.1 (Vanna $\frac{\partial \Delta}{\partial \sigma}$)
Positive Vanna: If Vol $\uparrow$, Delta $\uparrow$.
Negative Vanna: If Vol $\uparrow$, Delta $\downarrow$.
A Short Put has Positive Delta, but Negative Vanna.
As Vol rises (Crash), the Delta of the Short Put decreases (becomes less positive/more negative).
Dealer must sell stock to hedge.

### Definition 2.2 (Volga $\frac{\partial \nu}{\partial \sigma}$)
Convexity of Vega.
Long Straddle has Positive Volga.
If Vol rises, your Vega increases. You get "Longer Vol" as Vol goes up.
The "Gamma of Volatility."
Dealers use Volga to hedge the "Vol of Vol" risk in the wings.

## III. Theoretical Framework

### 3.1 The Vanna-Volga Method
Pricing Exotics (e.g., One-Touch, Barriers).
BS Model assumes constant Vol. Wrong.
Vanna-Volga method adds distinct premiums for the Vanna risk and Volga risk.
Price = BS Price + $w_1$ (Vanna Cost) + $w_2$ (Volga Cost).
Industry standard for FX Options.

### 3.2 The Feedback Loop
Market Crash ($S \downarrow$) $\implies$ Vol $\uparrow$ (Leverage effect).
Dealers (Short Puts) $\implies$ Short Vanna.
Vanna effect $\implies$ Sell Futures.
Selling Futures $\implies$ $S \downarrow \downarrow$.
The loop that creates Fat Tails.

## IV. Strategic Applications

### 4.1 Positioning Analysis
CFTC Report: Dealers are "Short Vanna."
Warning signal.
Any volatility spike will trigger mechanical selling.
"The market is fragile."

### 4.2 Trading the Skew
If Dealer community is "Long Volga" (They own wings).
They will suppress Vol of Vol.
Wings will be cheap.
Buy OTM Calls/Puts.

## V. Exercises

**Exercise 1 (The Spot-Vol Correlation):**
Plot Correlation(Spot, Vol).
Usually -0.7.
If Vanna flows dominate, Correlation $\to$ -0.95.
If Correlation breaks (Spot Up, Vol Up), usually a Short Squeeze in Calls (Call Vanna driving buying).

**Exercise 2 (FX Markets):**
USD/JPY. risk reversals.
Pricing depends heavily on Vanna.
25-delta Risk Reversal quotes the Vanna premium.

## VI. References
-   Castagna, A. *FX Options and Smile Risk*.
-   Wystup, U. *Vanna-Volga Pricing*.
