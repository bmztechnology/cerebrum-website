# Prospect Theory Utility Function

## I. Executive Summary

**Prospect Theory**, developed by Kahneman and Tversky (1979), challenged Expected Utility Theory (EUT) by demonstrating that human decision-making under risk is not rational. The core finding is that utility is defined over **Gains and Losses** relative to a reference point, not total wealth. The value function is **Concave for Gains** (Risk Averse) and **Convex for Losses** (Risk Seeking), explaining why traders cut winners early and ride losers.

## II. Formal Definitions

### Definition 2.1 (The Value Function)
$$ V(x) = \begin{cases} x^\alpha & \text{if } x \ge 0 \\ -\lambda(-x)^\beta & \text{if } x < 0 \end{cases} $$
Where:
$x$ = Change in wealth relative to reference point.
$\lambda > 1$ = Coefficient of Loss Aversion (typically 2.25).
$\alpha, \beta < 1$ = Diminishing sensitivity (typically 0.88).

### Definition 2.2 (Certainty Effect)
People overweight outcomes that are considered certain relative to outcomes that are merely probable.
Prefer \$3,000 for sure over 80% chance of \$4,000.
(Expected Value: \$3,000 vs \$3,200. Rational choice is the gamble).

## III. Theoretical Framework

### 3.1 Fourfold Pattern of Risk Preferences
1.  **High Probability Gain:** Risk Averse (Take the profit).
2.  **Low Probability Gain:** Risk Seeking (Lottery tickets).
3.  **High Probability Loss:** Risk Seeking (Doubling down to avoid realized loss).
4.  **Low Probability Loss:** Risk Averse (Buying Insurance).

### 3.2 Probability Weighting
People do not use objective probabilities $p$. They use decision weights $w(p)$.
Small probabilities are overweighted ($w(p) > p$ for small $p$).
Large probabilities are underweighted ($w(p) < p$ for large $p$).
Explains "Long Shot Bias."

## IV. Strategic Applications

### 4.1 The Disposal Effect
The tendency to sell winners too soon (Lock in gain, risk averse).
The tendency to hold losers too long (Hope for recovery, risk seeking).
Algo Strategy: Momentum (Buy winners, Sell losers) systematically exploits this human bias.

### 4.2 Reference Point Dependence
$Ref = EntryPrice$? Or $Ref = HighWaterMark$?
Traders often reset reference point psychologically.
"I'm barely down from my entry" (ignoring that the stock was up 20% yesterday).
Anchoring on the high leads to "House Money Effect."

## V. Exercises

**Exercise 1 (Calculating Utility):**
Gamble A: 50% chance of +\$1000, 50% chance of -\$1000.
EUT (Log wealth) says don't take it.
Prospect Theory says don't take it (Loss looms larger).
Gamble B: 50% chance of -\$1000, 50% chance of -\$2000 vs 100% chance of -\$1500.
Prospect Theory predicts choosing the Gamble (seeking to avoid the sure loss).

**Exercise 2 (Framing):**
"90% Survival Rate" vs "10% Mortality Rate."
Doctors choose surgery more often in the first frame.
Financial Products: "Capital Protected Note" vs "out-of-the-money Call."

## VI. References
-   Kahneman, D. & Tversky, A. *Prospect Theory: An Analysis of Decision under Risk*.
-   Barberis, N. *Prospect Theory and Asset Prices*.
