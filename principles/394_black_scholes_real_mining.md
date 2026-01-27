# Black Scholes Real Mining: The Gold Mine

## I. Executive Summary

Valuing a **Mine** (Gold, Copper, Oil) is a classic Real Option application. A mine is not a fixed stream of cash flows; it is a **Call Option on the Commodity** with a **Strike Price equal to the Extraction Cost**. If prices fall below cost, the mine shuts down (Maintenance Mode). If prices rise, production ramps up. The "Operating Leverage" is the Option Delta.

## II. Formal Definitions

### Definition 2.1 (The Brennan-Schwartz Model)
Two stochastic factors: Slot Price ($S$) and Convenience Yield ($\delta$).
Mine Value $V(S, Q)$ where $Q$ is remaining inventory.
PDE approach to solve for optimal extraction rate $q^*$.

### Definition 2.2 (Simple View)
Mine = Portfolio of European Calls with maturities $T_1, T_2 \dots T_{life}$.
Strike = Marginal Cost of Production (MCP).
If $S_t < MCP$, Cashflow = 0 (Shut in).
If $S_t > MCP$, Cashflow = $S_t - MCP$.
Total Value = $\sum Price(Call_i)$.

## III. Theoretical Framework

### 3.1 Mean Reversion
Commodities are mean reverting.
Black-Scholes assumes Geometric Brownian Motion (Random Walk).
Using BSM overvalues long-term options on mean-reverting assets.
Models must be adjusted (Schwartz 97 1-Factor model).

### 3.2 The Maintenance Cost
Shutting down is not free. Reopening is expensive.
"Switching Costs."
Hysteresis: Mine stays open even at small loss to avoid restart costs.
Mine stays closed even at small profit to avoid shutdown costs later.
Wide "No-Action Region."

## IV. Strategic Applications

### 4.1 Junior Miners
Exploration companies are pure "out-of-the-money" options.
High Leverage to gold price.
Gold +10% $\implies$ Stocks +30%.
Gold -10% $\implies$ Stocks -50%.
Volatility plays.

### 4.2 Hedging
Should a Gold Mine hedge production?
Shareholders buy the stock *for* the gold exposure.
If Mine sells Futures (Hedges), they convert the Option to a Bond.
Usually, hedging is only done to secure debt financing (Project Finance).

## V. Exercises

**Exercise 1 (Finite Reserve):**
Extraction reduces $Q$.
Option is "Exercising into extinction."
Early exercise (Production) destroys the "Time Value" of the remaining inventory.
Tradeoff: Cash now vs Option Value later.

**Exercise 2 (Cost Inflation):**
Extraction Cost ($K$) is not constant.
Energy costs (Oil) rise.
Correlation between Gold Price and Oil Price (Input).
Spread Option (Gold minus Oil).

## VI. References
-   Brennan, M., & Schwartz, E. *Evaluating Natural Resource Investments*.
-   Schwartz, E. *The Stochastic Behavior of Commodity Prices*.
