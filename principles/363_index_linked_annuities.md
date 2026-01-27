# Index Linked Annuities: Point-to-Point

## I. Executive Summary

**Fixed Index Annuities (FIAs)** and **Registered Index Linked Annuities (RILAs)** act as retirement vehicles that link interest credits to an equity index (S&P 500) with protection. They use specific **Crediting Methods** (Point-to-Point, Monthly Sum, Averaging) combined with **Caps**, **floors**, and **Participation Rates** to define the payoff. The embedded derivatives are usually Call Spreads or Asian Options.

## II. Formal Definitions

### Definition 2.1 (Annual Point-to-Point)
Credit = $\min(\max(S_T/S_0 - 1, 0), Cap) \times PartRate$.
-   **Floor:** 0% (Principal protected).
-   **Cap:** e.g., 5%.
-   **PartRate:** 100%.
If S&P up 20%, you get 5%.
If S&P down 20%, you get 0%.

### Definition 2.2 (Monthly Sum)
Sum of monthly capped returns.
Jan: +3% (Cap 2%). Credit +2%.
Feb: -5%. Credit -5%.
...
Total sum can be negative? Usually floored at 0% annually.
Volatile months hurt the sum.

## III. Theoretical Framework

### 3.1 Option Budget
Life Co takes premium. Invests in Bonds (Yield 4%).
Expenses/Profit = 1%.
Option Budget = 3%.
Buys Call Spreads (Strike 100%, Short Strike 105%).
Cost approaches 3%.
The Cap is determined by the option budget.
High Rates $\implies$ High Budget $\implies$ High Caps (Attractive).

### 3.2 The Buffer (RILA)
Instead of 0% Floor, RILA offers "Buffer -10%."
Investor eats first 10% loss? No, usually *protected* against first 10%? Or protected *down to* -10%?
-   **Buffer:** Protected against first X% loss.
-   **Floor:** Max loss is limited to X%.
Allows for higher Caps (Upside) because Options are cheaper.

## IV. Strategic Applications

### 4.1 Retirement Income
Sequence of Returns Risk.
Retiree fears crash in year 1.
FIA guarantees 0% loss.
Trades upside potential for sleep.

### 4.2 Complexity Arbitrage
Insurers design complex crediting methods ("Sunrise", "Lookback", "Volatility Control").
Hard for retail to value.
Often the "Theoretical Value" is lower than a simple index fund.
Marketing sells the "Dream."

## V. Exercises

**Exercise 1 (Dividend Drag):**
FIAs link to "Price Return" index (SPX), not "Total Return" (SPTR).
Dividends excluded.
Over 10 years, 2% dividends compounded is massive.
Hidden cost of the annuity.

**Exercise 2 (Volatility Control Index):**
"S&P 500 Risk Control 5% Index."
Delivers S&P exposure but deleverages if Vol > 5%.
Reduces option cost for Insurer drastically.
Often uncapped, but the underlying index performance is muted by cash allocation.

## VI. References
-   NAIC. *Buyer's Guide for Deferred Annuities*.
-   Marrion, J. *Index Annuities*.
