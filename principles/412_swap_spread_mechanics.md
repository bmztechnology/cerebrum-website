# Swap Spread Mechanics: Libor vs Treasury

## I. Executive Summary

The **Swap Spread** is the difference between the Fixed Rate on an Interest Rate Swap and the Yield on a Treasury Bond of the same maturity. $Spread = SwapRate - TreasuryYield$. Historically positive (reflecting Bank Credit Risk > US Gov Risk), spreads can turn **Negative** due to balance sheet constraints, regulation, and supply/demand imbalances.

## II. Formal Definitions

### Definition 2.1 (The Components)
$$ SwapRate = RiskFree + CounterpartyRisk + LiquidityPremium $$
$$ TreasuryYield = RiskFree - ConvenienceYield $$
$$ Spread = Counterparty + Liquidity + Convenience $$
Convenience Yield of Treasuries (Safe Asset) lowers their yield, widening the spread.

### Definition 2.2 (Negative Spreads)
30Y Swap Spread is often negative.
Implies Banks can borrow cheaper than US Gov?
No. Implies Balance Sheet cost of holding Treasuries (Repo) is high.
Dealer constraints (SLR rule) make holding Treasuries expensive. Cash is preferred.
Swap (Off balance sheet) is cheaper instrument.

## III. Theoretical Framework

### 3.1 Paying the Spread (Hedging)
Corporate issues Bond at $T + 150$.
Wants to hedge to floating.
Pays Fixed on Swap (Receive Float).
Corporate is "Paying Spreads."
Heavy issuance pushes Swap Spreads OUT (Wider).

### 3.2 Receiving the Spread
Bank buys Treasury. Pays Fixed on Swap (Asset Swap).
Receives Float + Spread.
If Spread is tight/negative, Asset Swap yields $<$ Libor.
Unnatractive. Banks stop buying Treasuries.

## IV. Strategic Applications

### 4.1 Invoice Spread
Trading the spread between Futures (Invoice Price) and Swaps.
"Swap vs Future."
Arbitrage differences in financing rates.

### 4.2 Spread Widening/Tightening trade
Betting on supply.
Gov announces massive deficit $\implies$ Treasury Yields Up $\implies$ Spread Tights (or Negative?).
If Gov supply overwhelms dealer capacity, Treasuries trade "Cheap" to Swaps (Negative Spread).

## V. Exercises

**Exercise 1 (Flight to Quality):**
Crisis. Buy Treasuries. Yields Crash.
Bank Risk Rises. Swap Rates Stay High.
Spread Widens massively.
Classic crisis signal.

**Exercise 2 (CCP Impact):**
Central Clearing (LCH/CME) removed counterparty risk from Swaps.
Reduced the "Credit Premium" in Swaps.
Contributed to spreads tightening/Inverting.

## VI. References
-   Corb, H. *Interest Rate Swaps and Other Derivatives*.
-   Duffie, D. *Special Repo Rates*.
