# Portable Alpha Strategies: Derivatives Overlay

## I. Executive Summary

**Portable Alpha** involves separating **Beta** (Market Exposure) from **Alpha** (Manager Skill). An investor gains Beta exposure cheaply using derivatives (Futures/Swaps) and uses the remaining cash collateral to invest in an Alpha-generating strategy (Hedge Fund). This allows the "Porting" of Alpha from one asset class onto the Beta of another.

## II. Formal Definitions

### Definition 2.1 (The Decomposition)
$Return = Beta_{S\&P500} + Alpha_{HedgeFund}$.
Traditional: Sell stocks to buy Hedge Fund. Loses Beta.
Portable Alpha: Keep Stocks (via Futures), Buy Hedge Fund (via Cash Collateral).

### Definition 2.2 (The Overlay)
Capital \$100M.
1.  Buy \$100M S&P 500 Futures (Margin requirement \$5M).
2.  Invest \$95M Cash in Market Neutral Hedge Fund.
Total Exposure: \$100M Stocks + \$95M Hedge Fund.
Leverage: $\approx 2x$.

## III. Theoretical Framework

### 3.1 Unbundling Returns
Why pay "2 and 20" for a Long/Short fund that is 80% correlated to S&P?
Pay 2 bps for S&P Futures.
Pay "2 and 20" only for the pure Alpha manager.
Efficiency in fee spend.

### 3.2 The Zero Sum Game
Alpha is zero sum. Beta is positive sum (Risk Premium).
Portable Alpha assumes you found positive Alpha.
If Alpha is negative, you underperform the index leveraged.

## IV. Strategic Applications

### 4.1 Liability Driven Investing (LDI)
Pension Fund needs Duration (Long Bonds).
But needs Return (Equities).
Solution: Get Duration via Swaps (Overlay). Invest Cash in High Return Assets (Equities / Alts).
"Portable Beta" on top of Alpha assets.

### 4.2 Crisis Performance
2008 Problem.
Futures dropped (Margin Call).
Hedge Funds dropped (Liquidity Trap).
Investor forced to sell Hedge Funds at the bottom to meet Futures margin.
Liquidity management is key.

## V. Exercises

**Exercise 1 (Cost of Carry):**
Futures price implies interest rate (SOFR).
Alpha strategy must beat Cash Rate (SOFR) to add value.
$Excess Return = Alpha_{fund} - BorrowCost$.

**Exercise 2 (Tracking Error):**
Futures track index perfectly.
No "Manager Drift" in the Beta component.
Purest way to get asset class exposure.

## VI. References
-   Qian, E. *Portable Alpha updates*.
-   PIMCO *Portable Alpha: Philosophy and Process*.
