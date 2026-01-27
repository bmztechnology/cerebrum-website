# Basis Trading: Cash Futures Arbitrage

## I. Executive Summary

**Basis Trading** captures the spread between the **Spot Price (Cash)** and the **Futures Price**. The Basis ($F - S$) must converge to zero at expiry. Traders exploit deviations from this convergence path. **Long Basis** (Long Spot / Short Future) profits if Basis narrows (or converges). **Short Basis** (Short Spot / Long Future) profits if Basis widens (rare strategy).

## II. Formal Definitions

### Definition 2.1 (The Convergence)
At $t=T$, $F_T = S_T$.
If $F_T > S_T$, you buy Spot, sell Future, deliver immediately for free money.
Exceptions: Physical delivery bottlenecks (Squeeze).

### Definition 2.2 (Gross vs Net Basis)
-   **Gross Basis:** $F - S$.
-   **Net Basis:** $F - (S + CostOfCarry)$.
-   The theoretical arbitrage is on the *Net Basis*.
-   If Net Basis > Transaction Costs, Arbitrage is open.

## III. Theoretical Framework

### 3.1 The Treasury Basis Trade
Hedge Funds (Long Term Capital Management, Citadel).
Treasury Futures often trade "Cheap" relative to CTD Bonds.
Strategy: Buy Bond / Short Future.
Leverage 50x.
Risk: "Repo Risk" (Cost of financing the bond rises).
Risk: "Squeeze Risk" (Future rises relative to bond).

### 3.2 Crypto Basis (Contango)
Bitcoin Futures usually trade at annualized premium (10-20%) in bull markets.
"Cash and Carry."
Buy BTC Spot. Short BTC Future.
Lock in 20% risk-free yield.
Why? Market is leverage-hungry. Longs pay Shorts.
You provide the leverage.

## IV. Strategic Applications

### 4.1 Index Arbitrage (Program Trading)
S&P 500 Futures vs 500 Stocks.
If Futures > Fair Value: "Buy Program." (Buy Stocks / Sell Futures).
If Futures < Fair Value: "Sell Program." (Sell Stocks / Buy Futures).
Keeps the indexes synchronized.
HFTs do this in microseconds.

### 4.2 The "Roll" Risk
Basis trades usually require rolling the Future at expiry.
Risk: The "Roll Spread" might be unfavorable.
If you are Short Futures in Backwardation, rolling costs money.

## V. Exercises

**Exercise 1 (Limit Moves):**
Futures have "Limit Up/Down" (e.g., 5%). Stocks do not.
If Futures lock Limit Down.
Arbitrage breaks. You cannot Sell Futures.
Spot market crashes as arbs dump stock to hedge the "stuck" futures.

**Exercise 2 (Squeeze):**
Volkswagen 2008.
Shorts needed to buy stock to deliver.
No stock available.
Spot went to infinity. Futures lagged.
Basis explosion.

## VI. References
-   Duffie, D. *Special Repo Rates*.
-   Tuckman, B. *Fixed Income Securities*.
