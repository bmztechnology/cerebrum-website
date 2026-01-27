# Storage and Convenience Yield Economics

## I. Executive Summary

**Storage** is the bridge between time periods in commodity markets. It transforms a perishable good (electricity - hard to store) or bulky good (oil) into a financial asset. The **Convenience Yield** is the "Shadow Price" of having inventory on hand to prevent a stock-out. It behaves like a **Dividend Yield** paid to physical holders, but unlike a cash dividend, it is **state-dependent** and volatile.

## II. Formal Definitions

### Definition 2.1 (Convenience Yield $y$)
Derived from Futures pricing:
$$ y = r + u - \frac{\ln(F/S)}{T} $$
If Stocks are low, a factory might pay a premium to buy Spot copper *now* rather than wait for cheaper Futures delivery, to avoid shutting down the line.
This premium is $y$.
$y$ is non-linear and convex with respect to scarcity.

### Definition 2.2 (Virtural Storage)
Buying a "Time Spread" (Long Near / Short Far).
Proxy for owning physical storage.
Profits if spreads widen (Contango deepens).
Losses if spreads invert (Backwardation).

## III. Theoretical Framework

### 3.1 Non-Negativity of Inventory
You cannot have negative physical inventory.
You can have negative financial position (Short).
Stock-out boundary: Inventory $\to$ 0. Spot Price $\to$ $\infty$.
Volatility spikes as Inventory drops (Samuelson Effect).
Vol of Spot > Vol of Futures.

### 3.2 Seasonality
Natural Gas.
Store in Summer (Inject). Withers in Winter (Withdraw).
Price curve has "Winter Hump."
Storage operators arbitrage the seasonal spread.
"Park and Loan" strategies.

## IV. Strategic Applications

### 4.1 Leasing Gold
Central Bank leases Gold to Bullion Bank.
Lease Rate (GOFO).
Gold Forward Rate = LIBOR - GOFO.
If Lease Rate spikes, implies physical shortage in London.
Early warning of gold rally.

### 4.2 The Tanker Trade
Charter a VLCC (Super-tanker).
Fill with 2M barrels of Oil.
Anchor offshore.
Sell Futures.
Floating storage arbitrage.
Only works when Contango > Charter Rate + Insurance.

## V. Exercises

**Exercise 1 (The Zinc Gamble):**
LME Warehouses.
Glencore cancels warrants (Takes metal out of 'Available').
Queues form to withdraw.
Premium "Free on Truck" rises.
Convenience Yield spike manufactured by optimizing queue logistics.

**Exercise 2 (Batteries as Storage):**
Electricity Markets.
Battery charges at \$0 (Solar noon). Discharges at \$200 (Evening peak).
Arbitraging the intraday spread.
Storage *creates* convergence between Noon and Evening prices.

## VI. References
-   Brennan, M. *The Theory of Storage*.
-   Pirrong, C. *The Economics of Commodity Trading Firms*.
