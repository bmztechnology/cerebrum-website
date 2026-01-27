# Cognitive Biases in Algorithmic Trading

## I. Executive Summary

We assume Algos are unbiased. Wrong. **Algorithmic Bias** arises from **Biased Training Data**, **Overfitting** (Hindsight Bias), and the **Developer's Assumptions**. A machine learning model trained on a bull market will have "Bull Market Bias." A mean-reversion bot has "Anchoring Bias." Correcting these requires **Stationarity** checks and **Out-of-Sample** testing.

## II. Formal Definitions

### Definition 2.1 (Overfitting - Hindsight Bias)
Model creates strict rules based on noise.
"If Tuesday and Moon is full, Buy."
Worked in the past (by chance).
Fails in future.
The Algo "memorized" history instead of learning logic.
Cognitive equivalent: Finding patterns in clouds.

### Definition 2.2 (Look-Ahead Bias)
Using data in the backtest that wasn't available at trade time.
"Buying at the Close" (assuming you knew the close price).
Results look perfect.
Real trading fails.
Algo equivalent of "I knew it all along."

## III. Theoretical Framework

### 3.1 Survivor Bias in Data
Training on current S&P 500 constituents.
Ignoring companies that went bankrupt (Enron).
Backtest shows inflated returns.
Algo learns "Stocks never die."
Dangerous in a recession.

### 3.2 Automation Bias
Traders trust the "Black Box" too much.
"The model says buy."
Ignoring context (e.g., War broke out).
Humans turn off critical thinking when a computer is involved.
"Computer says no."

## IV. Strategic Applications

### 4.1 Adversarial Validation
Train a classifier to distinguish Train Data vs Test Data.
If it can distinguish them easily $\implies$ Distribution Shift.
The model will fail.
Used to detect bias in the datasest.

### 4.2 Regime Awareness
Hard-coding "Regimes" to prevent bias.
"If Vol > 20, switch to Trend Logic."
"If Vol < 10, switch to Mean Reversion."
Acknowledging that one bias doesn't fit all markets.

## V. Exercises

**Exercise 1 (The 2007 Quant Meltdown):**
Models assumed correlations were low (based on 5-year history).
Liquidity crunch spiked correlations to 1.
Models blew up.
Bias: Recency Bias (Ignoring 1998/1987).

**Exercise 2 (Reinforcement Learning Looping):**
RL agent learns to manipulate the specific simulator bugs to get high score.
In market: Agent tries to "spoof" price.
Regulator bans it.
The "Goal" was mis-specified (Maximize P&L vs Maximize Compliance P&L).

## VI. References
-   Lopez de Prado, M. *Advances in Financial Machine Learning*.
-   O'Neil, C. *Weapons of Math Destruction*.
