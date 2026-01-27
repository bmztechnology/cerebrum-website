# Option Assignment Risk: Pin Risk & Dividends

## I. Executive Summary

**Assignment Risk** is the danger that an Option Seller is forced to fulfill their obligation (Buy/Sell stock) unexpectedly. While rare for OTM options, it becomes a critical threat for ITM American Options near Expiry or Dividends. **Pin Risk** occurs when the stock closes exactly at the strike, leaving the seller unsure if they will be assigned, potentially leading to massive unhedged exposure over the weekend.

## II. Formal Definitions

### Definition 2.1 (American Style Exercise)
Can be exercised ANY time before expiry.
Rational Exercise:
1.  **Calls:** Only right before Ex-Dividend date (if Dividend > Put Price/Interest cost).
2.  **Puts:** Deep ITM (Interest rate arbitrage).
If you are Short these options, you have "Assignment Risk."

### Definition 2.2 (Pin Risk)
Short Call Strike 100.
Stock closes Friday at 100.00.
After Hours moves to 100.05.
Counterparty exercises.
You wake up Monday Short 100 shares.
Stock opens Monday at 105.
You lost $500 per contract unexpectedly. (Gap risk).

## III. Theoretical Framework

### 3.1 Dividend Risk Strategy
Short Call. Stock pays $0.50 dividend.
Put price is $0.10.
Parity: Call has less extrinsic value than Dividend.
Arbitrageur *will* exercise call to capture dividend.
You (Seller) are assigned Short Stock. You *owe* the dividend ($0.50).
Loss = Dividend amount.
Check ex-dates religously.

### 3.2 Contra-Exercise
Usually, you want to exercise ITM options.
But if you don't have cash to buy the stock?
Retail brokers might "Do Not Exercise" (DNE) automatically.
Or they might liquidate the option at 3:55 PM (Force close).
Broker rules dictate the risk.

## IV. Strategic Applications

### 4.1 Closing Early
"Gamma is the risk of movement; Pin is the risk of uncertainty."
Professional traders NEVER take a position to expiration.
Close or Roll at 10 cents or 1 day prior.
The rewards (last penny of Theta) do not justify the Assignment Risk.

### 4.2 The "Wheel" Strategy (Risk)
Selling Cash Secured Puts to get assigned.
Here, Assignment is the *Goal*.
Risk: You get assigned on a falling knife (Stock goes to zero).
Assignment is not "free money," it is "catching a falling sword."

## V. Exercises

**Exercise 1 (The Tesla Short Squeeze 2020):**
Retail bought massive OTM Calls.
Exercised them? No. Sold them.
But Market Makers hedged by buying stock.
If they had exercised, MM would have had to deliver stock (Short squeeze).
Cash settlement vs Physical settlement.

**Exercise 2 (After Hours Games):**
Short Put 50. Stock closes 50.50. Safe?
News at 4:30 PM: CEO fired. Stock falls to 45.
Owner of Put sends "Exercise Notice" by 5:30 PM cutoff.
You are assigned at 50. Stock is 45.
You thought you were safe.
"The Option doesn't end when the bell rings."

## VI. References
-   CBOE. *Equity Options Product Specifications*.
-   McMillan, L.G. *Options as a Strategic Investment*.
