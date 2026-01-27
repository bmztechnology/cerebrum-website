# Electricity Markets: The Merit Order

## I. Executive Summary

**Electricity Markets** (Wholesale Power) clear auctions every 5 minutes. The **Merit Order Effect** dictates that the cheapest sources (Wind/Solar - Marginal Cost $\approx$ 0) run first, followed by Nuclear, Coal, and finally Gas (Peakers). The *marginal* unit sets the clearing price for *everyone*. This creates extreme volatility and negative pricing events when renewables oversupply.

## II. Formal Definitions

### Definition 2.1 (Pay-as-Clear)
If demand is 100 MW.
Wind supplies 50 MW at $0.
Coal supplies 40 MW at $30.
Gas supplies 10 MW at $80.
**Everyone** gets paid $80.
Gas sets the price.
This is why Green Energy bills rose when Gas prices spiked in 2022 (Marginal Pricing design).

### Definition 2.2 (The Duck Curve)
Solar produces peak energy at noon. Demand peaks at 7pm.
Net Load curve looks like a Duck.
Result:
Noon: Prices crash (Negative).
Sunset: "Ramp" needs massive fast gas generation. Prices spike.
Battery Storage arbitrage opportunity (Buy Noon, Sell Sunset).

## III. Theoretical Framework

### 3.1 Capacity Markets vs Energy Only
-   **Energy Only (Texas ERCOT):** You only get paid for MWh produced. Prone to scarcity spikes ($9000/MWh). Incentivizes reliability via high price.
-   **Capacity Market (PJM - East US):** You get paid to *exist* and be ready. "Missing Money" problem solved. Low volatility.

### 3.2 LCOE (Levelized Cost of Energy)
Misleading metric.
Wind LCOE is cheap.
But "Value Adjusted LCOE" is high because wind blows when you don't need it (Deflationary value).
Intermittency cost is externalized to the grid.

## IV. Strategic Applications

### 4.1 Spark Spread vs Dark Spread
-   **Spark Spread:** Profit to burn Gas $\to$ Power.
-   **Dark Spread:** Profit to burn Coal $\to$ Power.
Trader monitors the Fuel Switch capability.

### 4.2 Virtual Power Plants (VPP)
Aggregating 10,000 home batteries (Powerwalls).
Bidding them into the wholesale markets as a single unit.
Demand Response (getting paid to turn off AC).
The Grid Edge revolution.

## V. Exercises

**Exercise 1 (California Negative Prices):**
Spring days. Sun + Hydro high.
Prices go to -$20/MWh.
Arizona pays California to stop sending power.
If you have a battery, you get paid to charge.

**Exercise 2 (Texas Freeze 2021):**
Gas pipes froze. Wind froze.
Supply collapse. Demand Record.
Price capped at $9,000/MWh for days.
Retailers went bankrupt.
Grid physics: Supply MUST equal Demand essentially instantly. Or Blackout.

## VI. References
-   Stoft, S. *Power System Economics*.
-   FERC. *Energy Market Primers*.
