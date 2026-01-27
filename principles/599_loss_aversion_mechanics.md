# Loss Aversion Mechanics

## I. Executive Summary

**Loss Aversion** is the specific component of Prospect Theory stating that "losses loom larger than gains." Empirical studies suggest the pain of a loss is roughly **2.0 to 2.5 times** the pleasure of an equivalent gain ($ \lambda \approx 2.25 $). This asymmetry drives **Risk Premium** (stocks must yield high returns to compensate for the emotional trauma of crashes) and **Trading Paralysis**.

## II. Formal Definitions

### Definition 2.1 (The Asymmetry Ratio)
$$ \frac{\partial U}{\partial Loss} \approx 2.25 \times \frac{\partial U}{\partial Gain} $$
To accept a 50/50 coin flip, the payoff must be:
Heads: Win \$200.
Tails: Lose \$100.
If payoff is \$110/\$100, rational agents play, humans refuse.

### Definition 2.2 (Myopic Loss Aversion)
Benartzi and Thaler (1995).
Combination of Loss Aversion + Frequent Evaluation.
If you check your portfolio daily, you see losses 46% of the time. Painful.
If you check annually, you see losses 10% of the time. Less painful.
Conclusion: Checking less often leads to higher equity allocation.

## III. Theoretical Framework

### 3.1 The Equity Risk Premium Puzzle
Standard economics (Mehra & Prescott) cannot explain why stocks outperform bonds by 6%.
Implies implausibly high risk aversion coefficients ($\gamma = 30$).
Myopic Loss Aversion solves it: Investors are not risk averse, they are loss averse and check too often.

### 3.2 Sunk Cost Fallacy
"I can't sell now, I've put so much time/money into this trade."
Loss Aversion makes realizing the loss (Sunk Cost) psychologically impossible.
Rational agent: "Sunk costs are irrelevant. maximize future utility."

## IV. Strategic Applications

### 4.1 Stop Loss Psychology
Stop loss forces the realization of loss.
Painful.
Traders widen stops to avoid the pain ("It will come back").
Solution: Hard coded stops at the server level. Remove the decision.

### 4.2 The "Get-Even-itis"
Trading larger size to recoup losses quickly.
Martingale betting.
Driven by the desire to reset the mental account to zero (Reference Point).
Usually leads to ruin.

## V. Exercises

**Exercise 1 (The Endowment Effect interaction):**
You demand more to sell a mug than you would pay to buy it.
Why? Selling feels like a Loss. Buying is just a Gain.
Loss Aversion underpins the Endowment Effect.

**Exercise 2 (Framing Rebates):**
"Surcharge for Credit Card" (Loss) vs "Cash Discount" (Gain).
Consumers hate the surcharge.
Merchants use framing to steer behavior.

## VI. References
-   Tversky, A. & Kahneman, D. *Loss Aversion in Riskless Choice*.
-   Benartzi, S. & Thaler, R. *Myopic Loss Aversion and the Equity Premium Puzzle*.
