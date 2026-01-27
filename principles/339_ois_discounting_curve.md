# OIS Discounting Curve: The Risk Free Reality

## I. Executive Summary

**Overnight Index Swaps (OIS)** trade the difference between a Fixed Rate and the geometric average of the overnight rate (Fed Funds or EONIA/ESTR). Since 2008, OIS has replaced LIBOR as the **Risk-Free Discount Curve** for collateralized derivatives, acknowledging that interbank lending (LIBOR) contains credit risk, whereas overnight collateralized lending is virtually risk-free.

## II. Formal Definitions

### Definition 2.1 (The Payoff)
Floating Leg pays compounded overnight rate:
$$ Rate = \prod_{i=1}^{N} (1 + r_i \frac{d_i}{360}) - 1 $$
Fixed Leg pays $K$.
Payment at maturity (usually < 1 year).

### Definition 2.2 (LIBOR-OIS Spread)
Spread = 3M LIBOR - 3M OIS Swap Rate.
Measures "Interbank Credit Risk" + "Liquidity Premium."
Normal: 10-20 bps.
2008 Crisis: 300 bps.
Indicator of banking system stress.

## III. Theoretical Framework

### 3.1 Collateral Standard (CSA)
Derivatives are collateralized daily with Cash.
Interest on Cash Collateral is the Overnight Rate (Fed Funds).
Therefore, the "Funding Cost" of a derivative is Fed Funds.
Therefore, Discount Rate must be Fed Funds (OIS).
Using LIBOR to discount is incorrect because you don't fund at LIBOR.

### 3.2 Curve Construction
OIS Curve is bootstrapped from:
1.  FF Futures / ESTR Futures (Short end).
2.  OIS Swaps (Long end).
Used to PV essentially all Global Derivatives ledgers ($500 Trillion).

## IV. Strategic Applications

### 4.1 Central Bank Policy Betting
Fed Funds Futures / OIS are the purest bet on Fed Hikes/Cuts.
"Market pricing 3 cuts by December."
Derived from OIS forwards.

### 4.2 CSA Discounting Switch
Banks switched from Libor discounting to OIS in 2012.
Caused massive MTM shifts.
Big Bang Protocol.
Banks paid/received compensation for the valuation change.

## V. Exercises

**Exercise 1 (Turn of Year):**
Overnight rates spike on Dec 31 (Balance sheet window dressing).
OIS curve shows a "kink" at year-end.
Arbitrageurs sell the turn.

**Exercise 2 (Negative OIS):**
EUR OIS (EONIA) was negative for years.
Fixed Payer pays -0.5%. (Receives 0.5%).
Floating Payer receives -0.5% (Pays 0.5%).
Mechanics handle negative numbers seamlessly.

## VI. References
-   Hull, J.C., & White, A. *LIBOR vs. OIS: The Derivatives Discounting Dilemma*.
-   Big Bang Protocol. *ISDA 2013*.
