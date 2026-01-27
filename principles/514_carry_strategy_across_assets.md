# Carry Strategy Across Assets: Yield Harvesting

## I. Executive Summary

**Carry** is the return obtained from holding an asset assuming its prices remain unchanged. It is the "Yield" component (Interest, Dividend, Futures Roll). Global Carry strategies systematically go Long High-Yielding assets and Short Low-Yielding assets across Currencies (FX Carry), Bonds (Curve Carry/Term Structure), and Commodities (Roll Yield). Carry is a compensation for bearing **Liquidity and Crash Risk**.

## II. Formal Definitions

### Definition 2.1 (Generalized Carry)
$$ Carry = E[P_{t+1} | \text{No Change in Spot}] - P_t $$
-   **FX:** $i_{foreign} - i_{domestic}$. (Long MXN / Short JPY).
-   **Bonds:** Yield + Roll Down - Funding Cost.
-   **Commodities:** Backwardation (Spot > Future). Long Futures roll up to Spot.
-   **Equities:** Dividend Yield - Risk Free Rate (Dividend Swap Carry).

### Definition 2.2 (The Steamroller)
Sharpe Ratio of Carry is high (Line goes up steadily).
Skew is negative (Line drops vertically).
Carry crashes when volatility spikes and liquidity dries up.
"Picking up pennies in front of a steamroller."

## III. Theoretical Framework

### 3.1 Uncovered Interest Parity (UIP) Failure
Theory: High yield currency should depreciate to offset yield.
Reality: High yield currency often *appreciates* or stays stable (Forward Puzzle).
Carry traders exploit this failure.

### 3.2 Volatility Filter
Carry works best in Low Vol regimes.
Strategy:
If VIX < 20, 100% allocation to Carry.
If VIX > 20, 0% allocation (or reverse).
"Dynamic Carry."

## IV. Strategic Applications

### 4.1 The Yen Carry Trade
Borrow JPY (0%). Buy USD Treasuries or AUD bonds.
Funding source for the world.
When JPY strengthens (unwinds), global assets crash.
(See: 1998 LTCM, 2008, 2024?).

### 4.2 Commodity Backwardation
Oil futures often in backwardation (Scarcity).
Rolling Long Futures entails buying cheap back month, selling expensive front month.
Positive Roll Yield.
Buffett's favorite metric for commodity investing/hedging.

## V. Exercises

**Exercise 1 (Curve Carry):**
Steep Yield Curve.
Leveraged Long front-end bonds (2Y/5Y).
Earn Spread + Roll Down.
Carry trade on the Term Structure.

**Exercise 2 (Volatility Carry):**
Short VIX Futures.
VIX term structure usually Contango (Fut > Spot).
Shorting captures roll down.
Dangerous standard.

## VI. References
-   Koijen, R., et al. *Carry*.
-   Pedersen, L. *Efficiently Inefficient*.
