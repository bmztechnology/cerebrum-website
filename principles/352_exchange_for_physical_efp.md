# Exchange for Physical EFP: Off-Exchange Liquidity

## I. Executive Summary

**Exchange for Physical (EFP)** is a mechanism allowing two parties to swap a **Futures position** for an equivalent **Physical/OTC position** simultaneously. It is an "Off-Exchange" transaction reported to the exchange. EFPs are the bridge between the Futures Market and the Spot Market, allowing massive liquidity transfer without slippage on the order book.

## II. Formal Definitions

### Definition 2.1 (The Trade)
-   **Buyer:** Buys Physical, Sells Futures. (Long Basis).
-   **Seller:** Sells Physical, Buys Futures. (Short Basis).
-   Price: The basis spread.
Reported to CME/ICE as a block trade.

### Definition 2.2 (Applications)
1.  **ETF Creation/Redemption:** AP creates ETF shares (Physical basket) and hedges with Futures. Exchanges the block via EFP to close hedge.
2.  **Commodity Delivery:** Miller wants wheat. Elevator has wheat. Instead of going through delivery process, they do an EFP. Miller gets wheat, Elevator gets Futures (hedge).

## III. Theoretical Framework

### 3.1 Liquidity Bridge
Futures market is liquid. Spot market might be illiquid.
EFP allows a Spot trader to "source liquidity" from Futures.
Execute in Futures (easy).
Swap Futures for Spot (EFP) with a market maker.
Zero slippage impact on Spot order book.

### 3.2 Regulatory view
CFTC monitors EFPs closely.
"Wash Sales?"
Must have bona fide physical exposure change.
Cannot be a paper shuffle only.

## IV. Strategic Applications

### 4.1 Index Arbitrage Exit
Arb fund buys 500 stocks / Sells Futures.
To unwind:
Option A: Sell stocks on NYSE / Buy Futures on CME. (Market Impact).
Option B: Find a Benchmarker (Pension Fund) who wants stocks. Do EFP.
Fund gives Stocks to Pension. Pension gives Futures to Fund.
Clean exit.

### 4.2 Forex EFP
Spot FX vs FX Futures.
Used by Prime Brokers to net down exposures.
"Exchange for Risk" (EFR).

## V. Exercises

**Exercise 1 (Pricing the EFP):**
EFP Price = Theoretical Basis.
If spread is 10. EFP trades at 10.
If EFP trades at 12?
Then Futures are cheap. Buy Futures, Do EFP (Sell Futures/Buy Spot) at 12. Net = Buy Spot at Base - 2.
Arbitrage keeps EFP tightly bound.

**Exercise 2 (Futures Expiry):**
Most Open Interest closes via Roll or Cash.
Remaining Physical traders use EFP to settle before Last Trading Day.
Only < 1% goes to actual delivery.

## VI. References
-   CME Group. *Exchange for Physical (EFP) Transactions*.
-   CFTC. *Rule 538 Exchange for Related Positions*.
