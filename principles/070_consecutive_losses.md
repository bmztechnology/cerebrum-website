# Consecutive Losses: Analyzing Drawdown Clusters

## I. Executive Summary

Traders often model Win Rate as a generic probability (e.g., 50%). However, randomness is not uniform; it is "clumpy." A system with 50% accuracy will experience streaks of 10 consecutive losses purely by chance. Understanding the mathematics of **Consecutive Losses** is vital for determining capital adequacy (Bankroll Management) and psychological resilience. It answers: "Is this run of losses a broken system, or just normal statistical variance?"

## II. Formal Definitions

### Definition 2.1 (Probability of Streak)
For a system with Win Rate $W$ and Loss Rate $L = 1-W$.
Probability of losing $n$ trades in a row:
$$P(n) = L^n$$
Over a series of $N$ trades, the expected maximum losing streak ($MLS$) is approximately:
$$E[MLS] \approx \frac{-\ln(N)}{\ln(L)}$$

## III. Theoretical Framework

### 3.1 The Gambler's Fallacy
"I have lost 5 times in a row, surely the next one is a win."
**False.** The coin has no memory. The probability is still $L$.
Betting larger after a streak is surefire ruin.

### 3.2 Recovery Geometry
Ideally, after a streak, the account should be able to recover.
If a streak of 10 losses at 2% risk causes a 20% drawdown...
Recovery requires 25%. This is manageable.
If risking 10%... Drawdown is 100% (Ruin).

## IV. Strategic Applications

### 4.1 The "Stop Trading" Rule
Many firms have a hard circuit breaker.
"If Max Drawdown > 15%, trading is halted."
The Strategy is sent to the "Incubator" for re-evaluation.

### 4.2 Monte Carlo Simulation
Run 10,000 simulations of 1,000 trades.
Distribution of Streaks:
-   Average Max Streak: 6.
-   99th Percentile Max Streak: 14.
**Planning:** You must capitalize your account to survive the 99th percentile event (14 losses).

## V. Exercises

**Exercise 1 (Math):**
Win Rate = 60% ($L=0.4$).
In a sample of 100 trades.
What is the probability of seeing at least one streak of 4 losses?
(It is surprisingly high).

**Exercise 2 (Capitalization):**
You have \$10,000. Risk \$100 (1%).
System has 40% Win Rate.
Is it possible to lose 20 times in a row?
Calculate $0.6^{20}$.
If it happens, you lose \$2,000 (20%). Are you still in the game?
Now assume Risk \$1,000 (10%). Outcome?

**Exercise 3 (Psychology):**
How does a losing streak affect "Recency Bias"? How does it lead to "Strategy Hopping"?

## VI. References
-   Feller, W. (1968). *An Introduction to Probability Theory*.
-   Ralph Vince. *The Mathematics of Money Management*.
