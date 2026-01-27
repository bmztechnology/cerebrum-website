# Break Even: The Psychology of Zero

## I. Executive Summary

Moving a Stop Loss to Break Even (BE) is one of the most popular defensive tactics in trading. It involves adjusting the risk parameter to the Entry Price once the trade is sufficiently profitable. The psychological objective is "Free Risk" ("House Money"). However, mathematically, aggressive BE tactics often destroy Expectancy. A trade that returns to entry is not necessarily a failure; it may be re-testing liquidity before the main impulse.

## II. Formal Definitions

### Definition 2.1 (BE Point)
$$P_{BE} = P_{entry} \pm \frac{Commissions + Swap}{PipValue}$$
*Note:* A true Break Even must cover costs, otherwise a stop-out is a small loss.

### Definition 2.2 (Premature Termination)
The probability $P(Touch)$ that price revisits $P_{entry}$ given it has reached $P_{entry} + \Delta$.
If $P(Touch)$ is high (e.g., 60%), moving to BE guarantees being stopped out of a viable trade.

## III. Theoretical Framework

### 3.1 The "Free Lunch" Fallacy
Traders feel relief at BE. "I can't lose."
But trading is about **Maximizing Gains**, not just minimizing losses.
If moving to BE reduces your Win Rate by 20% but only reduces Avg Loss by 5%, the net result is negative.

### 3.2 Structural Validation
The only logical place for a Stop Loss is where the trade thesis is **Invalidated**.
-   When you enter, invalidation is below the Low.
-   Just because price moved up 10 pips does *not* mean the invalidation point has changed.
-   **Rule:** Only move to BE if a *new* structure (Higher Low) has formed to Protect the entry.

## IV. Strategic Applications

### 4.1 The "+1R" Rule
Common compromise: Move to BE only after price has traveled $1 \times Risk$.
-   This allows room for the trade to breathe during the initial "chop."

### 4.2 Partial Close (Scaling Out)
Instead of moving Stop to BE (which kills the trade), close 50% of the position at $1R$.
-   Result: You have banked profit. The remaining half can breathe. If it stops out at original loss, you are effectively Break Even on the net PnL.
-   *Superior Math:* Keeps the "Optionality" of the position alive.

## V. Exercises

**Exercise 1 (Math Check):**
Strategy Risk: \$100. Target: \$300. Win Rate: 50%.
Scenario A: Never Move to BE.
Scenario B: Move to BE at $+\$50$.
Stats B: Win Rate drops to 30%. Loss Rate drops to 30% (40% are BE).
Calculate Expectancy for A and B. Which is higher?

**Exercise 2 (Cost Analysis):**
You move stop to Entry ($1.1000$).
Swap was -\$10. Comm was -\$7.
Price hits 1.1000.
What is your PnL? (It is negative).
Where should the stop have been?

**Exercise 3 (re-Entry):**
You are stopped at BE. Price immediately rallies 100 pips.
Do you re-enter?
What psychological barrier prevents re-entry? (Regret).

## VI. References
-   Van Tharp, R. *Super Trader*.
-   Weissman, R.L. *Mechanical Trading Systems*.
