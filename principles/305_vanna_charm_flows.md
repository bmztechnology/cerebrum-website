# Vanna Charm Flows: Second Order Greeks

## I. Executive Summary

**Vanna** ($\partial \Delta / \partial \sigma$) and **Charm** ($\partial \Delta / \partial t$) are second-order Greeks that dictate **Market Maker Hedging Flows**. They explain mysterious market movements, particularly around monthly expiry (OpEx). Understanding these flows allows traders to front-run the mechanical hedging of massive dealer inventories.

## II. Formal Definitions

### Definition 2.1 (Vanna - Volatility's Pull on Delta)
Sensitivity of Delta to Vol Changes.
If Dealers are Short Puts (Positive Vanna).
As Volatility Drops $\to$ Delta Drops (Put becomes less likely to be ITM).
Dealers BUY futures to reduce hedge.
**Feedback Loop:** Vol Drop $\to$ Dealer Buy $\to$ Market Up $\to$ Vol Drop.
Explains the slow grind up on low vol.

### Definition 2.2 (Charm - Time's Pull on Delta)
Sensitivity of Delta to Time Decay.
"Delta Decay."
OTM Options lose Delta as time passes.
Dealers Short OTM Puts must BUY back hedges as time passes effectively shrinking the put exposure.
Results in "Charm Flows" buying into the close each day.

## III. Theoretical Framework

### 3.1 The OpEx Window
Options Expiration (3rd Friday).
Open Interest (OI) Vanishes.
Gamma/Vanna/Charm exposure resets.
"The pinned stock is released."
Post-OpEx often sees Trend Changes / Volatility release.

### 3.2 Dealer Positioning (GEX)
Gamma Exposure (GEX) Index.
-   **Positive GEX:** Dealers are Long Gamma. They fade moves (Buy dips, Sell Rips). Volatility suppression.
-   **Negative GEX:** Dealers are Short Gamma. They chase moves (Sell dips, Buy rips). Liquidity Air Pockets. Crash risk.

## IV. Strategic Applications

### 4.1 Trading the "Window of Weakness"
Most equity inflows happen 1st-15th of month (401k flows).
Option Flows supports market.
After OpEx (20th-30th), Flows disappear.
Window for Correction.
Bearish strategies best deployed post-OpEx.

### 4.2 Predicting Intraday Reversals
If Dealers are Long Gamma (Pinning).
Market moves +1%. Dealers Sell. Market stalls.
Market moves -1%. Dealers Buy. Market bounces.
Mean reverting day trading strategy.

## V. Exercises

**Exercise 1 (The Vanna Squeeze):**
Market Falls. Implied Vol Rises.
Vanna increases Short Put Delta.
Dealers must Sell Futures massively.
Short Squeeze in reverse.
Accelerates the crash.

**Exercise 2 (Charm into Weekend):**
Dealers don't want weekend decay risk?
Charm flows accelerate Friday afternoon.
Buying back hedges for Monday open.
"Friday Rally" phenomenon.

## VI. References
-   Perkins, J. *The structural impacts of options hedging*.
-   SqueezeMetrics. *The GEX Whitepaper*.
