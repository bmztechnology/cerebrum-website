# St Petersburg Paradox Expected Utility

## I. Executive Summary

The **St. Petersburg Paradox** (Bernoulli, 1738) challenges the idea that rational agents maximize **Expected Value** ($\sum p_i x_i$). A coin toss game with infinite expected value is offered, yet people will only pay \$2 to play it. This led to the invention of **Expected Utility Theory** (Diminishing Marginal Utility of Wealth) and later **Prospect Theory**.

## II. Formal Definitions

### Definition 2.1 (The Game)
Flip coin until Tails.
Payoff = $2^n$ where $n$ is number of Heads.
1 Head: \$2.
2 Heads: \$4.
3 Heads: \$8.
$EV = (1/2 \times 2) + (1/4 \times 4) + (1/8 \times 8) ... = 1 + 1 + 1 ... = \infty$.
Rational Price to enter = $\infty$.
Actual Price people pay = \$2 - \$10.

### Definition 2.2 (Resolution: Concave Utility)
If $U(W) = \ln(W)$, then $EU$ is finite.
The utility of winning \$1 Billion is not 1000x the utility of winning \$1 Million.
Risk Aversion explains the refusal to pay infinite sums.

## III. Theoretical Framework

### 3.1 Fat Tails
The paradox relies on the "Tail" (probability of 50 heads is non-zero).
In finance, expected value calculations often blow up due to Fat Tails (Infinity risk).
We ignore the tails in practice (Truncated Utility).
"I ignore the outcome where I own the whole GDP."

### 3.2 Ergodicity Economics
Ole Peters.
One path (Average of many players) = Infinity.
Time path (One player playing repeatedly) = Zero (Gambler's Ruin).
Wealth grows at Geometric Mean, not Arithmetic Mean.
Price should be based on Time Average, which is low.
Paradox solved: Doing something once vs doing it sequentially.

## IV. Strategic Applications

### 4.1 Position Sizing (Kelly Criterion)
Based on $\ln(W)$.
Maximizes Geometric Growth.
Avoids the risk of ruin implicit in the paradox.
"Betting your whole bankroll because EV is positive" is suicide.

### 4.2 Lottery Tickets
Inverse St. Petersburg.
People pay premium for small chance of infinite wealth.
Convex Utility in the "Life Changing" domain?
Hope function.

## V. Exercises

**Exercise 1 (Capping Liability):**
Insurance companies cap payouts.
Why? To avoid St. Petersburg scenarios (Infinite loss).
Finite resources require finite variance.

**Exercise 2 (The Martingale Strategy):**
Doubling down.
Theoretical win = 1 unit.
Theoretical risk = Infinite.
Why casinos have table limits (To break the martingale).

## VI. References
-   Bernoulli, D. *Exposition of a New Theory on the Measurement of Risk*.
-   Peters, O. *The Ergodicity Problem in Economics*.
