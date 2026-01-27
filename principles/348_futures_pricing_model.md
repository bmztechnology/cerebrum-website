# Futures Pricing Model: Cost of Carry

## I. Executive Summary

**Futures Pricing** is determined by the principle of **No Arbitrage**. The Theoretical Futures Price is simply the Spot Price adjusted for the "Cost of Carry" (Interest, Storage, Insurance) and "Benefits of Carry" (Dividends, Convenience Yields). If the Market Price deviates from the Theoretical Price, arbitrageurs force it back in line via **Cash-and-Carry Arbitrage**.

## II. Formal Definitions

### Definition 2.1 (The Formula)
$$ F_0 = S_0 e^{(r - q + u - y)T} $$
-   $r$: Risk-free interest rate (Cost of money).
-   $q$: Dividend yield (Benefit of holding asset).
-   $u$: Storage cost (Cost of holding asset - Commodities).
-   $y$: Convenience yield (Benefit of physical possession - Shortage).

### Definition 2.2 (Contango vs Backwardation)
-   **Contango ($F > S$):** Cost of Carry is positive ($r+u > q+y$). Normal for Gold, Corn.
-   **Backwardation ($F < S$):** Benefit of Carry is dominant ($y > r+u$). Normal for Oil in shortage, or High Dividend Stocks.

## III. Theoretical Framework

### 3.1 Cash-and-Carry Arbitrage
If $F > S e^{rT}$ (Futures too expensive).
1.  Borrow Cash at $r$.
2.  Buy Spot $S$.
3.  Short Future $F$.
4.  Store asset.
5.  At Expiry, Deliver Asset against Short Future.
6.  Profit = $F - S e^{rT} > 0$. Risk Free.

### 3.2 Reverse Cash-and-Carry
If $F < S e^{rT}$ (Futures too cheap).
1.  Short Stock $S$ (Invest proceeds at $r$).
2.  Buy Future $F$.
3.  At Expiry, take delivery to cover Short.
Constraint: Short Selling requires borrowing the asset (Repo cost).

## IV. Strategic Applications

### 4.1 Implied Repo Rate
Traders solve the equation for $r$.
$r_{implied} = \frac{1}{T} \ln(F/S)$.
If $r_{implied} > r_{market}$, buy the basis.
If $r_{implied} < r_{market}$, sell the basis.

### 4.2 Dividend Arbitrage
Liquidity is low in Single Stock Futures (SSFs).
Pricing model depends heavily on **Discrete Dividends**.
$F = S - PV(D) + CostOfCarry$.
If Market expects Dividend Cut, Future trades lower.
Arb funds trade the dividend expectation via Futures.

## V. Exercises

**Exercise 1 (Negative Oil Prices 2020):**
Storage Cost ($u$) went to Infinity.
Tanks were full.
Cost to hold oil was higher than value of oil.
$F = S + u$.
If $u$ is massive, $S$ can be negative while $F$ is positive?
Actually, Future went negative first because expiry required Physical Delivery into full tanks.

**Exercise 2 (Gold Basis):**
Gold $F > S$. Always.
Why? $u$ is small. $q$ is 0. $y$ is 0. $r$ is positive.
$F = S e^{rT}$.
Gold Futures curve is simply the Interest Rate curve.

## VI. References
-   Hull, J.C. *Options, Futures, and Other Derivatives*.
-   Geman, H. *Commodities and Commodity Derivatives*.
