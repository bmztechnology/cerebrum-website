# Dispersion Trading

## I. Executive Summary

**Dispersion Trading** is a correlation trade. It typically involves **Selling Index Options** (Short Index Vol) and **Buying Constituent Options** (Long Single Stock Vol). The thesis: The Index is "dampened" by decorrelation ($\sigma_{Index} < \sum w_i \sigma_{Stock}$), but the market often overprices Index Vol relative to Components. Or conversely, buying cheap Index Vol and selling expensive Stock Vol.

## II. Formal Definitions

### Definition 2.1 (Implied Correlation $\rho_{imp}$)
Derived from variances:
$\sigma_{Index}^2 = \sum w_i^2 \sigma_i^2 + \sum_{i \neq j} w_i w_j \sigma_i \sigma_j \rho_{ij}$.
If we know $\sigma_{Index}$ and all $\sigma_i$, we can solve for average $\rho$.
If prices imply $\rho = 0.8$, but historical $\rho = 0.4$.
Index Vol is expensive. Short Index, Long Components.

### Definition 2.2 (The Trade Structure)
Leg 1: Short SPX Straddle.
Leg 2: Long AAPL, MSFT, GOOG, AMZN Straddles (weighted).
Gamma Neutral at inception.
Profit source: Index doesn't move (Correlated stocks cancel out), but individual stocks move wildly (Earnings/Idiosyncratic).

## III. Theoretical Framework

### 3.1 The Correlation Risk Premium
Index Options are used for hedging portfolios. High Demand $\implies$ High Price.
Single Stock Options used for speculation.
Dispersion harvests the "Hedging Premium" embedded in the Index.

### 3.2 Dirty Dispersion
Instead of buying *all* 500 stocks, buy the top 10.
"Tracking Error" introduces risk.
If small caps move but big caps don't, the hedge fails.

## IV. Strategic Applications

### 4.1 Earnings Season
Individual stocks move a lot (High Idiosyncratic variance).
Index moves little (Averaging effect).
Realized Correlation drops.
Ideal for Dispersion (Long Stock Vol / Short Index Vol).

### 4.2 Crisis Correlation
During crash, $\rho \to 1$.
Dispersion trade (Short Index Vol) loses.
Because Index Vol explodes *faster* than Stock Vol (as correlation spikes).
Risk Management: Buy deep OTM Index Calls to cap correlation risk.

## V. Exercises

**Exercise 1 (The Correlation Index):**
CBOE Implied Correlation Index (CORH, ICJ).
Track it.
Low levels (0.2) $\implies$ Stocks moving independently.
High levels (0.8) $\implies$ Macro driven market.
Mean reverison trade?

**Exercise 2 (Basket Options):**
Pricing a basket of 5 tech stocks.
If Bank prices it using historic correlation.
And you think correlation will break.
Arb the bank's quote.

## VI. References
-   Driscoll, G. *Dispersion Trading*.
-   Marshall, C. *Correlation Trading*.
