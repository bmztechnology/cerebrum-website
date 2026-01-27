# Swap Rates: The Cost of Carry

## I. Executive Summary

Swap Rates (or Rollover) represent the interest rate differential between the two currencies in a Forex pair. Unlike futures where cost of carry is priced into the contract, spot Forex positions held past 17:00 EST (New York Close) are subject to a daily interest adjustment. This can be a **cost** (Negative Swap) or a **rebate** (Positive Swap). Understanding Swap is critical for long-term Position Trading, as negative swap can erode the entire profit margin of a trade over months ("The Silent Killer").

## II. Formal Definitions

### Definition 2.1 (Tom-Next Rollover)
Foreign exchange is unsettled. To avoid physical delivery of currency, open positions are closed at EOD and re-opened at the new Spot rate adjusted for interest.
The cost/credit is:
$$Swap = (r_{Long} - r_{Short}) \times Notional \times \frac{1}{365}$$
Where $r$ is the benchmark Central Bank rate.

### Definition 2.2 (Triple Swap Wednesday)
Because spot FX settles T+2, a position held on Wednesday rolls to Thursday, which settles Monday. Thus, Wednesday rollover accounts for the weekend (Sat + Sun).
*Rule:* Swap is $3\times$ on Wednesday.

## III. Theoretical Framework

### 3.1 Interest Rate Parity (IRP)
Theory states that the currency with the higher interest rate should depreciate just enough to offset the yield advantage, preventing risk-free arbitrage.
$$F = S \times \frac{1 + r_d}{1 + r_f}$$
*Reality:* In the short/medium term, IRP fails. Higher yielding currencies often *appreciate* due to capital inflows (The Carry Trade).

### 3.2 The Carry Trade
A strategy designed to harvest positive swap.
-   **Long:** High Yield (e.g., TRY, MXN, AUD).
-   **Short:** Low Yield (e.g., JPY, CHF).
-   **Profit:** $Gain = PriceAppreciation + AccumulatedSwap$.
-   **Risk:** "Going up by the stairs, down by the elevator." When value unwinds, the currency crash often wipes out years of interest income.

## IV. Strategic Applications

### 4.1 Filter for Swing Trading
Never hold a trade with negative swap for more than 2 weeks unless momentum is extreme.
-   **Long:** Audit if $r_{base} > r_{quote}$.
-   **Short:** Audit if $r_{quote} > r_{base}$.

### 4.2 "Swap Hunting" (Arbitrage)
Some brokers settle swap at different times or rates.
-   *Strategy:* Hedge a position across two brokers (Long EURUSD on A, Short EURUSD on B).
-   *Condition:* $Swap_{Long}(A) + Swap_{Short}(B) > Spread + Comm$.
-   *Status:* Rare and often banned by brokers ("Abusive Trading").

## V. Exercises

**Exercise 1 (Calculation):**
Position: 1 Lot (100,000 units) Long USD/JPY.
USD Rate: 5.0%. JPY Rate: -0.1%. Broker Markup: 0.5%.
Calculate the daily Swap income in USD.
(Note: Annual diff = 5.1% - 0.5% markup = 4.6%).

**Exercise 2 (Risk Analysis):**
You are Short EUR/TRY (Short Euro, Long Lira).
Lira pays 20% interest.
Price is flat.
Why is this position dangerous despite the massive daily payout? (Hint: Inflation and Currency Debasement risk).

**Exercise 3 (Calendar):**
Why do you pay 3 days of swap on Wednesday but 1 day on Friday?
Explain the T+2 settlement logic.

## VI. References
-   Bilson, J.F. (1981). *The Speculative Efficiency Hypothesis*.
-   Burnside, C., et al. (2006). *The Returns to Currency Speculation*.
-   Gyntelberg, J. (2019). *The Global Carry Trade*. (BIS Paper).
