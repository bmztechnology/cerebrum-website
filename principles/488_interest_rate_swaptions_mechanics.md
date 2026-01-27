# Interest Rate Swaptions Mechanics: Volatility

## I. Executive Summary

A **Swaption** gives the holder the right (but not the obligation) to enter into an Interest Rate Swap at a specified fixed rate (Strike) on a future date. They are the primary instrument for trading **Interest Rate Volatility**. A **Payer Swaption** (Right to Pay Fixed) protects against rising rates (Call on yields). A **Receiver Swaption** (Right to Receive Fixed) protects against falling rates (Put on yields).

## II. Formal Definitions

### Definition 2.1 (The Contract)
-   **Expiry:** 1 Year. (Option life).
-   **Tenor:** 10 Years. (Underlying swap life).
-   **Structure:** "1y10y Swaption."
-   **Strike:** 4.00%.
-   **Payoff:** $\max(0, SwapRate_T - Strike) \times PV01$.
If 10Y Swap Rate in 1 year is 5.00%, Payer Swaption is ITM by 100bps.
Valued as annuity of 100bps for 10 years.

### Definition 2.2 (Settlement)
-   **Physical:** Two parties enter the actual swap.
-   **Cash:** Seller pays Buyer the PV of the In-the-Money amount. (Most common for speculators).

## III. Theoretical Framework

### 3.1 Black Model
Modified Black-Scholes for Forward Rates.
Input: Forward Swap Rate, Volatility (Log-normal or Normal), Time to Expiry.
Output: Swaption Premium.
Market quotes Prices in "Normal Volatility" basis points (e.g., 90 Nvol).

### 3.2 The Volatility Cube
Volatility depends on:
1.  Expiry (Alpha).
2.  Tenor (Beta).
3.  Strike (Skew).
The Surface is a 3D Cube.
Short Tenor / Short Expiry = Gamma bucket.
Long Tenor / Long Expiry = Vega bucket.

## IV. Strategic Applications

### 4.1 Mortgage Hedging
Fannie Mae mortgage portfolio behaves like a Short Receiver Swaption (Prepayment option).
To hedge, Fannie Mae *buys* Receiver Swaptions? No, they buy Payer Swaptions?
No, Prepayment = Short Call on Bond = Short Put on Yield.
To hedge Short Put, you Buy Put.
Fannie buys Receiver Swaptions to replace the convexity lost to homeowners.

### 4.2 Callable Bond issuance
Issuer sells Callable Bond.
Equivalent to: Sell Bullet Bond + Buy Receiver Swaption (from Investor).
Issuer sells the Receiver Swaption to a Bank to monetize the option premium (lower coupon).

## V. Exercises

**Exercise 1 (Straddle):**
Buy 1y10y Payer + Buy 1y10y Receiver.
Straddle on rates.
Betting that 10Y rates will move drastically (Up OR Down) in next year.
Long Volatility.

**Exercise 2 (Bermudan vs European):**
European: Exercise only at expiry.
Bermudan: Exercise on multiple dates.
Swaptions usually European.
Bermudans used in Callable structures.

## VI. References
-   Rebonato, R. *Swaptions and Caps*.
-   Brigo, D. *Interest Rate Models*.
