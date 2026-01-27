# Quote Convention: Semantics of Exchange

## I. Executive Summary

The Forex pricing convention is a standardized notation for expressing the relative value of two currencies. Misunderstanding this notation leads to "Fat Finger" errors (Buying when meaning to Sell). Unlike stocks ($Price = \$$), Forex is always a ratio ($A/B$). Every trade involves simultaneously buying one currency and selling another.

## II. Formal Definitions

### Definition 2.1 (The Pair)
Expressed as **Base / Quote** (or Base / Counter).
Example: **EUR / USD**.
-   **Base:** EUR. The Fixed Unit (1). The "direction" of the trade.
-   **Quote:** USD. The Variable Price. The "payment" currency.

### Definition 2.2 (Price Interpretation)
If $EUR/USD = 1.1050$:
**"1 Unit of Base (EUR) costs 1.1050 Units of Quote (USD)."**
-   **Long:** Buy Base, Sell Quote. (Expect Chart Up).
-   **Short:** Sell Base, Buy Quote. (Expect Chart Down).

### Definition 2.3 (Pip and Point)
-   **Pip:** "Percentage in Point." Usually the 4th decimal ($0.0001$).
    -   *Exception:* JPY pairs (2nd decimal, $0.01$).
-   **Point (Pipette):** The 5th decimal ($0.00001$). Precision pricing.

## III. Theoretical Framework

### 3.1 PnL Calculation Function
$$PnL = (Price_{exit} - Price_{entry}) \times Volume \times ContractSize$$
*Note:* The result is always denominated in the **Quote Currency**.
-   Trade EUR/USD $\to$ Profit in USD.
-   Trade USD/JPY $\to$ Profit in JPY.
-   *Conversion:* To get account currency, convert JPY profit back to USD at current rate.

### 3.2 Direct vs Indirect Quotes
-   **Direct:** Foreign Currency is Base ($EUR/USD$). Chart looks like the Foreign currency strength.
-   **Indirect:** Domestic (USD) is Base ($USD/JPY$). Chart looks like Domestic strength.

## IV. Strategic Implications

### 4.1 The Bid-Ask Matrix
The Quote is actually a tuple: **Bid / Ask**.
-   **Bid (1.1048):** Price Broker buys Base from you. (You Sell).
-   **Ask (1.1050):** Price Broker sells Base to you. (You Buy).
**Rule:** You always get the worse price. You buy high (Ask) and sell low (Bid).

### 4.2 Cross-Rate Arbitrage
If $A/B \times B/C \neq A/C$, triangular arbitrage exists.
Algos close this gap in microseconds.
Retail traders must trust the synthetics are accurate.

## V. Exercises

**Exercise 1 (Reading the Quote):**
Quote: GBP/USD = 1.2500 / 1.2502.
a) You want to Buy GBP. What price do you pay?
b) You want to Sell GBP. What price do you get?
c) What is the spread?

**Exercise 2 (PnL):**
Account: USD.
Trade: Short 1 Lot USD/CHF.
Entry: 0.9500. Exit: 0.9400.
Profit = 100 pips.
Calculate Profit in USD.
(Hint: $(0.9500-0.9400) \times 100,000 = 1,000 CHF$. Convert $1,000 CHF$ to USD at exit rate 0.9400).

**Exercise 3 (Logic):**
If the chart of USD/CAD is going UP, is the Canadian Dollar getting stronger or weaker?

## VII. References
-   Copeland, L. (2008). *Exchange Rates and International Finance*.
-   Reuters. *Foreign Exchange & Money Markets Convention*.
