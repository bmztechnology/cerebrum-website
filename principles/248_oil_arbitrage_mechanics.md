# Oil Arbitrage Mechanics: Grades and Spreads

## I. Executive Summary

**Oil Arbitrage** exploits price adjustments between different locations (Geographical Arb) and different qualities (Quality Arb). Crude oil is not fungible. **Brent** (North Sea) and **WTI** (Texas) are the benchmarks, but hundreds of grades exist (Dubai, Urals, WCS). Arbitrage keeps global prices aligned, bounded by transport costs (Tankers/Pipelines).

## II. Formal Definitions

### Definition 2.1 (The Spread)
$$Spread = Price_{Dest} - Price_{Origin} - Freight$$
If Spread > 0, the arb window is open. Traders hire a tanker to move oil.
Example: Brent-WTI Spread.
If Brent = $85 and WTI = $80.
Spread = $5.
Cost to ship US $\to$ Europe = $3.
Profit = $2/bbl. Result: US exports explode.

### Definition 2.2 (Quality Adjustment)
-   **API Gravity:** Heavy vs Light. Light (>35 API) yields more gasoline. Heavy (<25 API) needs complex refining.
-   **Sulfur Content:** Sweet (<0.5%) vs Sour (>0.5%). Sour requires desulfurization.
Refiners pay a premium for Light-Sweet (easy to process).
Discount for Heavy-Sour (WCS, Maya).

## III. Theoretical Framework

### 3.1 The Contango Storage Play
Physical Arb in Time.
Spot Price = $50. Forward Price (1 year) = $60.
Cost of Storage = $5.
Trade: Buy Spot ($50). Rent Tank ($5). Sell Forward ($60). Profit = $5.
Risk-free.
Occurs during gluts (2020: WTI went negative because storage was full).

### 3.2 Floating Storage
When land tanks are full, traders charter VLCCs (Very Large Crude Carriers) to drift at sea acting as tanks.
Rates for VLCCs skyrocket.
Front-running tanker stocks (Frontline, Euronav) during Contango is a key macro play.

## IV. Strategic Applications

### 4.1 Canadian Differential (WCS)
Western Canadian Select (WCS) trades at a discount to WTI ($15-$30).
Why? Pipeline constraints (Keystone XL cancelled).
Oil is trapped in Alberta.
Rail transport is expensive.
Arb: Buy WCS, Sell WTI. Bet on pipeline completion (Trans Mountain).

### 4.2 Urals Discount (Sanctions)
Russian Urals traditionally traded near Brent.
Post-2022: Trades at $20 discount (Sanction risk + Insurance risk).
Indian Refiners buy Urals, refine it, sell Diesel to Europe.
Regulatory Arbitrage.

## V. Exercises

**Exercise 1 (Cushing, Oklahoma):**
The delivery point for WTI.
Landlocked.
If Cushing fills up, WTI crashes relative to Brent (Seaborne).
WTI is a "Local" price. Brent is the "Global" price.

**Exercise 2 (Mixing):**
Traders blend Heavy and Light oil to create a custom grade ("Cocktail") that matches a refinery's specific setup.
The "Blender's margin."

## VI. References
-   Fattouh, B. *The Economics of Crude Oil Trading*.
-   Yergin, D. *The Quest*.
