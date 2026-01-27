# Reverse Convertible Notes: Yield Enhancement

## I. Executive Summary

**Reverse Convertibles (RCs)** are structured notes that pay a **High Coupon** (e.g., 10-20%) significantly above the risk-free rate. In exchange, the investor effectively **Sells a Put Option** on the underlying stock. If the stock falls below a certain Barrier (Knock-In), the investor loses principal and receives the physical stock (which is worth less). The Coupon is simply the option premium disguised as yield.

## II. Formal Definitions

### Definition 2.1 (Payoff Profile)
-   **Coupon:** Paid regardless (usually).
-   **Principal:**
    -   If $S_{final} > K$ (or Barrier never crossed): Pay $100$.
    -   If $S_{final} < K$ (and Barrier crossed): Pay $100 \times (S_{final}/K)$ or deliver shares.
This is exactly dynamic of "Short Put."

### Definition 2.2 (The Barrier)
Usually "Down-and-In Put."
If Stock > 70% of initial, safe.
If Stock < 70% (Knock-In), you are long the stock from the strike price (100%).
Loss can be sudden.

## III. Theoretical Framework

### 3.1 Volatility Monetization
High Coupon comes from High Implied Volatility.
RCs are popular on Tech Stocks or Volatile Indices.
Investor View: "Market will go up, or sideways, or fall slightly."
Bank View: "Buying volatility cheap from retail."

### 3.2 Worst-Of Feature
"15% Coupon on AAPL, AMZN, and GOOG."
Payoff linked to the *worst* performer.
Selling a "Worst-Of Put."
Triple leverage on correlation.
Very dangerous in systemic crash.

## IV. Strategic Applications

### 4.1 Private Banking
Clients crave "Double Digit Yield" in low rate world.
RCs fill this demand.
Risks are often understated ("It's AAPL, it won't go bankrupt").
Risk is not bankruptcy, it's a 30% drawdown.

### 4.2 Auto-Call feature
Most RCs are Autocallable.
If Stock Rises, Note is called.
Investor gets Principal + Coupon.
"Game Over, Insert Coin."
Reinvestment Risk: You get cash back when market is high/vol is low (Yields drop).

## V. Exercises

**Exercise 1 (Breakeven Calculation):**
Coupon 12%. Barrier 70%.
Stock falls 25%.
Note pays 100 + 12 = 112.
Stock Investment would be 75.
RC outperforms.
Stock falls 35%.
Note pays 65 + 12 = 77.
Stock Investment would be 65.
RC outperforms by the coupon amount.

**Exercise 2 (The Gap):**
If Barrier is American (Continuous monitoring).
Intraday flash crash triggers Knock-In.
Stock recovers by close.
Too late. Principal protection lost.
European Barrier (Observation at expiry only) is safer.

## VI. References
-   Wall Street Journal. *The Yield Trap*.
-   SEC. *Investor Bulletin: Reverse Convertibles*.
