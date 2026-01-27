# Risk of Ruin: The Probability of Zero

## I. Executive Summary

Risk of Ruin (RoR) is the ultimate statistical boundary. It calculates the probability that a trading account will hit a specific "Ruin Point" (usually 0 or -50%) given a specific Win Rate, Payoff Ratio, and Risk Percentage per trade. The goal of every professional is to drive RoR to **statistical zero**. Any strategy with RoR > 0 will, given infinite time, go bankrupt ($P \to 1$ as $t \to \infty$).

## II. Formal Definitions

### Definition 2.1 (The RoR Formula)
For a strategy with Probability of Win $P$ and Payoff $R$:
$$RoR = \left( \frac{1 - Edge}{1 + Edge} \right)^U$$
Where $U$ is the number of units of risk in the account capital.
-   $U = \text{Account} / \text{RiskAmount}$.
-   If you risk 2%, $U = 50$.

### Definition 2.2 (Confidence Interval)
Even if theoretical RoR is 0, the *Sample* RoR might be high if the sample size is small.
"The market can remain irrational longer than you can remain solvent."

## III. Theoretical Framework

### 3.1 The Lever
The primary driver of RoR is **Position Size**.
-   Strategy: 50% Win, 2:1 Reward.
    -   Risk 1%: RoR $\approx 0\%$.
    -   Risk 10%: RoR $\approx 2.5\%$.
    -   Risk 25%: RoR $\approx 60\%$.
    -   Risk 50%: RoR = 100%.

### 3.2 Asymmetrical Leverage
As Drawdown increases, the "Effective Risk" increases if you don't scale down.
-   Account \$10,000. Risk \$1,000 (10%).
-   Loss. Account \$9,000. Risk \$1,000 (11.1%).
-   Loss. Account \$8,000. Risk \$1,000 (12.5%).
This positive feedback loop accelerates Ruin.

## IV. Strategic Applications

### 4.1 Fixed Fractional Betting
Always risk a *fixed %* of CURRENT equity, not starting equity.
This makes specific Ruin impossible (Zeno's Paradox), though effectively you can reach 'un-tradeable' small sums.

### 4.2 The "Uncle Point"
The level at which you stop trading to preserve psychology.
Commonly 20-25% drawdown.
Calculate RoR for the "Uncle Point," not just for zero.

## V. Exercises

**Exercise 1 (Sensitivity):**
Strategy: Win 40%, Payoff 2:1.
Edge is positive.
Calculate RoR for Risk=2% vs Risk=5%.
(RoR rises exponentially).

**Exercise 2 (Black Swan):**
Formula assumes standard distribution.
What if the Payoff on a Loss becomes -10R (Gap)?
How does this affect RoR? (Sizing must be reduced further to handle "Gap Risk").

**Exercise 3 (Capitalization):**
Why is being "Undercapitalized" a mathematical death sentence?
(Small account $\implies$ High Risk% to make meaningful money $\implies$ High RoR).

## VI. References
-   Balsara, N. (1992). *Money Management Strategies for Futures Factors*.
-   Vince, R. *Portfolio Management Formulas*.
