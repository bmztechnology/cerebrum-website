# Eurodollar Futures Rates: The Curve

## I. Executive Summary

**Eurodollar Futures** (CME) tracked the 3-Month LIBOR rate on USD deposits held outside the US. For decades, they were the world's most liquid interest rate contract, defining the forward curve out to 10 years. With the death of LIBOR, they have transitioned to **SOFR Futures**, but the mechanics of **Packs**, **Bundles**, and **Convexity Bias** remain the standard for short-term rate trading.

## II. Formal Definitions

### Definition 2.1 (Contract Design)
Price = $100 - Rate$.
Quote 96.00 $\implies$ Rate 4.00%.
$DV01 = \$25$ per basis point (per contract).
Expires quarterly (March, June, Sept, Dec).
Settles to Spot LIBOR (now SOFR).

### Definition 2.2 (Packs and Bundles)
-   **Pack:** Simultaneous purchase of 4 consecutive contracts (1 year strip). White (Yr 1), Red (Yr 2), Green (Yr 3), Blue (Yr 4), Gold (Yr 5).
-   **Bundle:** Simultaneous purchase of multi-year strips.
Allows trading the "2 Year Rate" using futures.

## III. Theoretical Framework

### 3.1 Convexity Bias
Futures are margined daily. Forwards are not.
If rates rise, Short Futures makes money. Receives cash margin. Can reinvest at higher rates.
Long Futures loses money. Pays cash. Must borrow at higher rates.
Short holder has advantage.
Futures Rate > Forward Rate.
Bias increases with volatility and maturity ($Bias \approx 0.5 \sigma^2 T^2$).

### 3.2 The Strip Curve
Building the yield curve from ED futures.
Must adjust for Convexity Bias.
The primary input for Swap pricing models.

## IV. Strategic Applications

### 4.1 Ted Spread
Treasury Bill vs Eurodollar (LIBOR).
Spread = Credit Risk of Banks.
Widens in crisis.
Trading ED vs T-Bill Futures.

### 4.2 Curve Steepeners
Long White Pack / Short Green Pack.
Betting on 1Y-3Y spread widening.
Highly leveraged.

## V. Exercises

**Exercise 1 (Transition to SOFR):**
3M SOFR Futures vs 3M Eurodollar Futures.
SOFR is risk-free. Eurodollar has credit risk.
Spread between them was fixed/settled during LIBOR cessation.

**Exercise 2 (Serial Months):**
Front months have serials (Jan, Feb).
Liquidity is poor.
Smart money trades the Quarterlies (IMM Dates).

## VI. References
-   Burghardt, G. *The Eurodollar Futures and Options Handbook*.
-   CME Group. *SOFR Futures Contract Specs*.
