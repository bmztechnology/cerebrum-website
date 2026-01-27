# Curve Trading Steepener: 2s 10s Spread

## I. Executive Summary

**Steepener Trades** bet that the spread between Long Term (10Y) and Short Term (2Y) rates will widen. This occurs when the Fed Cuts rates (Bull Steepener) or Inflation expectations rise (Bear Steepener). The trade involves being Long the Short end (2Y) and Short the Long end (10Y), weighted by **DV01** to be duration neutral.

## II. Formal Definitions

### Definition 2.1 (The Ratios)
-   $DV01_{2Y} \approx 200$.
-   $DV01_{10Y} \approx 800$.
-   Hedge Ratio: $4:1$.
-   Buy \$400M 2Y Notes. Sell \$100M 10Y Notes.
-   Net PV $\approx$ \$0. Net Duration $\approx$ 0.
-   PnL depends solely on Yield Spread $\Delta (y_{10} - y_2)$.

### Definition 2.2 (Carry)
Steepener generally has **Negative Carry**.
Short 10Y (Pay high coupon). Long 2Y (Receive low coupon).
You pay the spread to hold the position.
"Cost of Carry."
Trade must work fast enough to overcome bleed.

## III. Theoretical Framework

### 3.1 Cycle Timing
-   **Recession:** Slopes invert (sell steepener?). No, slope *re-steepens* before recession ends as market anticipates cuts. Best time for Bull Steepener is *peak* rates.
-   **Recovery:** Curve is steep.
-   **Expansion:** Fed hikes. Curve flattens (Bear Flattener).

### 3.2 Convexity Bias
Steepener is Short Convexity?
Depends on specific bond selection.
If Volatility increases, PnL might suffer relative to pure spread math.

## IV. Strategic Applications

### 4.1 The Widowmaker (Short JGBs)
Not a steepener, but related curve trade.
In Japan, curve was flat/low for decades.
Steepeners died waiting for inflation.

### 4.2 Flattener
Betting on Hike Cycle.
Short 2Y / Long 10Y.
Positive Carry (Receive High, Pay Low).
"Carry Trade" on the curve.
Very crowded in 2024.

## V. Exercises

**Exercise 1 (The Inversion):**
Spread goes negative (-50 bps).
You put on Steepener.
Spread goes back to +100 bps.
Gain of 150 bps $\times$ Duration Leverage.
Massive PnL.

**Exercise 2 (Repo Financing):**
Trade is done via Repo.
Borrow 2Y bond cash (Repo rate).
Short 10Y bond (Reverse Repo).
Net PnL sensitive to Repo Rate differentials (Specialness).

## VI. References
-   Tuckman, B. *Fixed Income Securities*.
-   Dugger, R. *The Treasury Spread Trade*.
