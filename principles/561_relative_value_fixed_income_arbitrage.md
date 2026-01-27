# Relative Value Fixed Income Arbitrage

## I. Executive Summary

**Relative Value (RV) Fixed Income** exploits tiny pricing anomalies between related fixed income instruments. These relationships are mathematically governed (e.g., Bond vs Future, On-the-run vs Off-the-run). The strategy uses massive leverage (10x-50x) to turn small spreads (basis points) into double-digit returns. It is often described as "picking up nickels in front of a steamroller" due to **Tail Risk** (LTCM 1998).

## II. Formal Definitions

### Definition 2.1 (The Yield Curve Trade)
Butterfly trade.
Long 2Y, Short 5Y, Long 10Y.
Betting on curvature (5Y yield is too high relative to wings).
Duration Neutral. Cash Neutral.

### Definition 2.2 (Swap Spread)
Spread between Treasury Yield and Swap Rate.
Ideally Swap > Treasury (Counterparty risk).
If Swap < Treasury (Negative Swap Spread), imply balance sheet constraints at banks.
RV traders bet on normalization.

## III. Theoretical Framework

### 3.1 No-Arbitrage Principle
Law of One Price.
Cash Bond + Repo $\approx$ Futures Contract.
If they diverge $\implies$ Basis Trade.
Sell the expensive one, buy the cheap one.
"Cash-Futures Basis."

### 3.2 The Role of Repo
Leverage is essential.
Traders finance the Long Bond in the Repo market.
Risk: **Funding Liquidity Risk**.
If Repo haircuts rise or funding dries up, the trade dies (Margin Call), even if the convergence logic is correct.

## IV. Strategic Applications

### 4.1 On-the-Run vs Off-the-Run
On-the-Run (newest) Treasury is most liquid. Taxes a premium (yields less).
Off-the-Run (issued 3 months ago) is less liquid. Yields more.
Trade: Short On-the-Run / Buy Off-the-Run.
Capture the liquidity premium as the On-the-Run ages.

### 4.2 Inflation Breakeven Arb
TIPS vs Nominal Treasuries vs Inflation Swaps.
Extract the "Asset Swap Spread" of TIPS.
If TIPS are "too cheap" relative to Swaps (Asset Swap Spread > 0).
Buy TIPS, Pay Fixed on Swap.

## V. Exercises

**Exercise 1 (Negative Carry):**
Some convergence trades have negative carry while waiting.
Must weigh Convergence Alpha vs Carry Cost.
"Time to Convergence."

**Exercise 2 (LTCM 1998):**
Market panic. Flight to quality.
Liquidity premium exploded. On-the-run bonds skyrocketed. Off-the-run crashed.
Spread widened instead of narrowing.
Leverage killed the fund before mean reversion occurred.

## VI. References
-   Tuckman, B. *Fixed Income Securities*.
-   Duarte, J., Longstaff, F. & Yu, F. *Risk and Return in Fixed Income Arbitrage*.
