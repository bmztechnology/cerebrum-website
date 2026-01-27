# Put-Call Parity: The Law of No Arbitrage

## I. Executive Summary

**Put-Call Parity** is the fundamental no-arbitrage relationship between Call prices, Put prices, and the Underlying asset. It states that a portfolio of **Long Call + Short Put** is synthetically equivalent to **Long Stock + Short Bond (Borrowing)**. If this equation breaks, risk-free profit exists. It is the foundation of all option pricing including Black-Scholes.

## II. Formal Definitions

### Definition 2.1 (The Equation)
For European Options with same Strike ($K$) and Expiry ($T$):
$$C(t) - P(t) = S(t) - K e^{-r(T-t)}$$
-   $C$: Call Price.
-   $P$: Put Price.
-   $S$: Stock Price.
-   $K$: Strike Price.
-   $r$: Risk-free rate.
-   Assumption: No Dividends ($q=0$).

### Definition 2.2 (Synthetic Positions)
Rearranging the formula gives us synthetic equivalents:
-   **Synthetic Long Stock:** $S = C - P + K e^{-rt}$ (Buy Call, Sell Put, Invest Cash).
-   **Synthetic Short Stock:** $-S = P - C - K e^{-rt}$ (Buy Put, Sell Call).
-   **Conversion/Reversal:** Strategies to exploit parity deviations.

## III. Theoretical Framework

### 3.1 Arbitrage Mechanism
If $C - P > S - K e^{-rt}$:
The Call is too expensive relative to the Put.
1.  Sell Call ($+C$).
2.  Buy Put ($-P$).
3.  Buy Stock ($-S$).
4.  Borrow PV(K) ($+K e^{-rt}$).
Net Cashflow = Positive.
At Expiry $T$, the payoff is perfectly hedged to zero. Risk Free Profit.

### 3.2 Impact of Dividends
If stock pays dividend $D$.
Stock price drops by $D$ on Ex-Date.
Parity adjusts:
$$C - P = S - PV(D) - PV(K)$$
Early exercise of American Calls becomes rational right before Ex-Date to capture $D$.

## IV. Strategic Applications

### 4.1 The Box Spread
Long Call ($K_1$) + Short Put ($K_1$) + Short Call ($K_2$) + Long Put ($K_2$).
Result: A synthetic Zero Coupon Bond.
Payoff = $K_2 - K_1$ guaranteed.
Price should be $PV(K_2 - K_1)$.
If Price < PV, buy the box. (Lending at rate $>$ risk free).

### 4.2 Hard-to-Borrow (HTB) Stocks
If a stock is heavily shorted (HTB), borrowing costs are high.
Arbitrageurs short stock to hedge Puts.
Borrow cost makes Short Stock expensive.
Puts trade *above* Parity (Implied Vol of Puts > Calls).
Parity equation includes Borrow Rate ($r_b$).

## V. Exercises

**Exercise 1 (Violation Check):**
$S = 100$. $K = 100$. $r = 0\%$. $T = 1yr$.
$C = 10$. $P = 8$.
Does Parity hold?
$10 - 8 = 2$.
$100 - 100 = 0$.
No. $2 \neq 0$.
Call is overpriced. Sell Synthetic (Short Call, Long Put, Long Stock). Profit 2.

**Exercise 2 (Negative Rates):**
If $r < 0$.
$PV(K) > K$.
It is possible for American Puts to trade *below* intrinsic value? No, arbitrage.
But European Options can break intuition.

## VI. References
-   Stoll, H.R. *The Relationship Between Put and Call Option Prices*.
-   Merton, R.C. *Theory of Rational Option Pricing*.
