# Put Call Parity Microstructure

## I. Executive Summary

**Put-Call Parity** ($C - P = S - K e^{-rt}$) is the iron law of derivatives. In microstructure, this equality creates massive **Synthetic Liquidity**. A Market Maker doesn't need to find a buyer for a Call; they can sell the Call, buy the Put, and short the Stock (Conversion). This **Triangular Tightness** ensures that liquidity in one leg propagates to all others.

## II. Formal Definitions

### Definition 2.1 (The Synthetic Spot)
From Parity: $S_{syn} = C - P + K e^{-rt}$.
If Actual Spot $S_{act} > S_{syn}$, Arb:
Buy Synthetic (Buy C, Sell P, Borrow Cash). Sell Actual.
Profit = $S_{act} - S_{syn}$.
High Frequency Arbs keep $S_{act} \approx S_{syn}$.

### Definition 2.2 (The Box Spread)
Four options: Long Call ($K_1$), Short Call ($K_2$), Long Put ($K_2$), Short Put ($K_1$).
Payoff is constant ($K_2 - K_1$).
Risk-free loan.
Used to "Lend/Borrow" cash in the options market (implied interest rate).
Often trades at "Negative Spread" (Arbitrage?) No, pricing in cost of capital.

## III. Theoretical Framework

### 3.1 Hard-to-Borrow (HTB) Dynamics
If Stock is HTB (Short interest high).
Borrow cost $r_{borrow}$ explodes.
Parity equation shifts: $C - P = S - PV(Divs) - PV(Borrow Cost)$.
Puts trade *above* theoretical value.
Calls trade *below*.
The "Reverse Conversion" arb drives this.

### 3.2 Dividend Risk
Early exercise of Calls to capture dividend.
Breaks parity for American Options.
Microstructure effect: Day before Ex-Div, Calls trade at parity minus dividend boundaries.
 Algo wars to capture "Dividend Scraps."

## IV. Strategic Applications

### 4.1 Slingshot Liquidity
Providing liquidity in Illiquid Stocks using Liquid Options? No.
Providing liquidity in Illiquid Options using Liquid Stocks.
"I will make markets on this leap option because I can hedge it instantly with the stock."
Liquidity transfers from Liquid $\to$ Illiquid via Parity.

### 4.2 Conversion/Reversal Arbitrage
**Conversion:** Long Stock + Long Put + Short Call. (Synthetic Long Put).
**Reversal:** Short Stock + Short Put + Long Call. (Synthetic Long Call).
Market Makers use these to manage inventory delta without taking directional risk.

## V. Exercises

**Exercise 1 (The Pinning Mechanics):**
Approaching Expiration. Strike $K$.
Open Interest is large.
Longs exercise Calls $\to$ Buy Stock.
Shorts are assigned $\to$ Sell Stock.
Parity forces the Stock to converge to $K$ to minimize exercise regret?
Or Max Pain theory.

**Exercise 2 (Executions):**
Execution algorithms rarely trade a "Leg" in isolation.
They trade "The Package."
Using Complex Order Books (COB) on exchanges (ISE, CBOE).
"Buy the Straddle."
Exchange guarantees simultaneous fill.

## VI. References
-   Stoll, H. *The Relationship Between Put and Call Option Prices*.
-   Battalio, R. *Put-Call Parity Violations*.
