# Scaling In and Out: Dynamic Exposure Management

## I. Executive Summary

Scaling is the art of varying position size during the life of a trade. It moves beyond the binary "All-In / All-Out" approach. Scaling **IN** (Pyramiding) allows a trader to maximize geometric growth on winning trend trades. Scaling **OUT** (Partial Profits) smoothens the equity curve and psychologically secures the "Win." However, scaling increases complexity and introduces new risks (raising the Average Entry Price).

## II. Formal Definitions

### Definition 2.1 (Scaling In - Pyramiding)
Adding to a position as it moves in favor.
-   $Entry_1$: 1.1000 (1 Lot).
-   $Entry_2$: 1.1050 (0.5 Lots).
-   **New Average Price:** Weighted Average.
    $$P_{avg} = \frac{P_1 V_1 + P_2 V_2}{V_1 + V_2}$$
*Risk:* If price retraces to $P_{avg}$, the entire profit is erased.

### Definition 2.2 (Scaling Out - Harvesting)
Closing a fraction $\lambda$ of the position at Target $T_1$.
$$Realized = \lambda \times Volume \times (T_1 - Entry)$$
*Benefit:* Finances the risk of the remainder.

## III. Theoretical Framework

### 3.1 Martingale vs Anti-Martingale
-   **Martingale:** Scaling In on **Losers** (Averaging Down).
    -   *Logic:* "It must come back."
    -   *Result:* Catastrophic Ruin. Risk increases as probability decreases.
-   **Anti-Martingale:** Scaling In on **Winners**.
    -   *Logic:* "Trend is confirmed."
    -   *Result:* Geometric Growth. Risk is financed by open profit.

### 3.2 The Breakeven Constraint
When Scaling In, the Stop Loss *must* be moved to lock in the risk of the new unit.
**Rule:** Total Risk on new total position $\le$ Original Risk.

## IV. Strategic Applications

### 4.1 The 3-Tier Exit
-   **Tier 1 (1/3):** Scalp Target (e.g., +20 pips). Move Stop to BE.
    -   *Goal:* Pay for the trade.
-   **Tier 2 (1/3):** Swing Target (e.g., Structure High).
    -   *Goal:* Bank income.
-   **Tier 3 (1/3):** Moon Bag (No Target, Trail Stop).
    -   *Goal:* Catch the Black Swan trend.

### 4.2 Aggressive Pyramiding
1.  Enter 1% Risk. Market moves $+1R$.
2.  Move Stop to BE. Risk is now 0.
3.  Enter new position 1% Risk using the "Free" equity.
4.  Repeat.
*Potential:* Turning a 10% move into a 50% equity gain.

## V. Exercises

**Exercise 1 (Average Price):**
Buy 1 Lot at 100.
Buy 1 Lot at 110.
Buy 2 Lots at 120.
Calculate Average Entry.
If Price drops to 114, is the net position winning or losing?

**Exercise 2 (Risk Dynamics):**
You scale in. Average Price rises from 1.10 to 1.12.
Market price is 1.13.
A small pullback to 1.11 occurs.
If you had a single entry at 1.10, you are still green.
With the pyramid, you are red.
Discuss the psychological difficulty of "turning a winner into a loser" via scaling.

**Exercise 3 (Martingale critique):**
Why do brokers love clients who "Average Down"?

## VI. References
-   Vince, R. *The Leverage Space Trading Model*.
-   Van Tharp, R. *Definitive Guide to Position Sizing*.
