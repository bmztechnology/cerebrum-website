# Regret Theory in Trading

## I. Executive Summary

**Regret Theory** posits that utility depends not only on the realized outcome but also on the interaction between the realized outcome and the outcome that *could have been*. Investors fear **Regret** (realizing they made a mistake) more than they value the gain. This leads to **Herding** (Shared blame is less painful) and the **Disposition Effect** (Avoiding the regret of a realized loss).

## II. Formal Definitions

### Definition 2.1 (Regret Function)
$U(x, y) = V(x) + R(V(x) - V(y))$.
$x$: Realized outcome.
$y$: Foregone outcome.
$R(\cdot)$ is the regret function.
If $V(x) < V(y)$, $R$ is negative (Pain).
Max Regret: Selling Apple at \$10 and watching it go to \$200.

### Definition 2.2 (Errors of Omission vs Commission)
**Omission:** Doing nothing and losing (Missed opportunity).
**Commission:** Acting and losing.
Regret is stronger for Commission.
Result: Bias towards inaction (Status Quo).

## III. Theoretical Framework

### 3.1 Dividends and Regret
Shefrin & Statman (1984).
Spending dividends causes less regret than selling shares.
If you sell shares and the stock doubles $\implies$ Regret.
If you spend dividends and the stock doubles $\implies$ No Regret (You still own the shares).
Explains preference for cash flow.

### 3.2 Feedback Loops
Winning prevents regret $\implies$ Pride $\implies$ Overconfidence.
Losing causes regret $\implies$ Risk aversion or "Get Even" trading.
Regret minimization prevents rational Bayesian updating.

## IV. Strategic Applications

### 4.1 FOMO (Fear Of Missing Out)
Social Regret.
"My neighbor made money on Crypto."
$V(y)$ is the neighbor's return.
Drives bubbles.
Rational strategy: Disconnect from social signals (Hide PnL).

### 4.2 Systematic Rebalancing
Removes the regret of "Selling too early."
"The model made me do it."
Outsourcing agency reduces emotional burden.

## V. Exercises

**Exercise 1 (The Counterfactual):**
Trader logs usually show "Trade PnL."
They should show "Trade PnL vs Hold PnL."
Measuring the regret gap.
Did trading add value over doing nothing?

**Exercise 2 (Stop Loss Regret):**
Stopped out at bottom. Market rallies.
Maximum Regret.
Leads to removing stops next time.
Catastrophic adaptation.

## VI. References
-   Bell, D. E. *Regret in Decision Making*.
-   Loomes, G. & Sugden, R. *Regret Theory: An Alternative Theory of Rational Choice*.
