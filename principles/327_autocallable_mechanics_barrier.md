# Autocallable Mechanics: The Yield Trap

## I. Executive Summary

**Autocallables** (Autocalls) are the dominant volume driver in global Exotic Options (especially in Korea/Japan/Europe). They offer a High Coupon (e.g., 10%) as long as the underlying doesn't crash (Barrier). If the underlying rises, the product "Autocalls" (Redeems early). If the underlying crashes (Knock-In), the investor loses principal. This structure makes dealers **Long Volatility** in bull markets and **Short Volatility** in crash markets, exacerbating sell-offs.

## II. Formal Definitions

### Definition 2.1 (Payoff Structure)
-   **Autocall Barrier (Upside):** If $S > 100\%$ on obs date, Product ends, pay 100 + Coupon.
-   **Coupon Barrier (Downside):** If $S > 70\%$, pay coupon.
-   **Knock-In Barrier (Deep Downside):** If $S < 50\%$ (KI), protection disappears.
-   **Final Payoff:** If KI touched and $S_T < 100$, investor gets shares (Loss).

### Definition 2.2 (The Dealer Position)
Dealer Sells Note $\implies$ Buys the structural option.
Dealer is **Long Dividend Risk**, **Long Correlation** (Worst-of), **Short Volatility** (at the wings).
Crucially, Dealer is **Long Gamma** near the Autocall level (wanting it to trigger) and **Short Gamma** near the Knock-In level (fearing the crash).

## III. Theoretical Framework

### 3.1 Peak Vegas
Autocalls create "Peak Vega" supply on the Vol Surface.
Dealers are structurally Long Vega from these products (Investors sold them volatility).
This depresses long-term Index Volatility.
Explains why Term Structure is usually Contango (abundance of Vol supply at back end).

### 3.2 The Crash Mechanics
Market falls $-30\%$. Approach Knock-In (50%).
Dealer Gamma flips from Long to Short.
Dealer must SELL futures to hedge.
Selling drives market down.
Triggers Knock-Ins.
Knock-In $\implies$ Put Option created. Deltas jump to 100%.
Dealer must SELL MORE.
Autocalls are "Market Accelerants" on the downside.

## IV. Strategic Applications

### 4.1 Korea ELS (Equity Linked Securities)
Korea is the largest Autocall market.
Huge exposure to HSCEI (China Tech Index).
When HSCEI crashed in 2015 and 2023.
Trillions of Won in margin calls.
Global banks (French banks) suffered massive hedging losses.

### 4.2 Step-Down Feature
To mitigate risk, "Step-Down" autocalls lower the barrier every 6 months.
95%, 90%, 85%...
Increases probability of early exit.
Decreases Coupon yield.

## V. Exercises

**Exercise 1 (Dividend Risk):**
Dealer is Long Dividends (If div calls, price drops, less likely to autocall, longer duration).
Actually, Dividends drop price $\implies$ Further from Autocall Barrier $\implies$ Maturity extends.
Autocalls define the "Dividend Swaps" market liquidity.

**Exercise 2 (Pricing the KI):**
Knock-In Put is a "Down-and-In Put."
Value is extremely sensitive to Volatility Skew.
If Skew steepens, KI Put value explodes.
Dealers are Short Skew.

## VI. References
-   Bossu, S. *Equity Derivatives and Hybrids*.
-   Bank of International Settlements. *Structured Products and buying-the-dip*.
