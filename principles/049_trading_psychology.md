# Trading Psychology: Behavioral Finance and Cognitive Biases

## I. Executive Summary

Trading Psychology is the study of human mental states and their impact on financial decision-making. While Classical Economic Theory assumes agents are "Rational Utility Maximizers" (Homo Economicus), empirical evidence proves that traders are prone to systematic cognitive errors driven by evolutionary biology. Understanding these biases is not merely therapeutic; it is a risk management necessity. A robust algorithmic strategy will fail if the operator intervenes due to Fear or Greed.

## II. Theoretical Framework: Prospect Theory

Developed by Kahneman and Tversky (1979), Prospect Theory challenges Expected Utility Theory.

### 2.1 The Value Function ($v$)
$$v(x) = \begin{cases} x^\alpha & \text{if } x \ge 0 \\ -\lambda(-x)^\beta & \text{if } x < 0 \end{cases}$$
Where $\lambda > 1$ (typically $\approx 2.25$).
**Implication:** Losses hurt roughly twice as much as equivalent gains feel good ("Loss Aversion").

### 2.2 Asymmetry of Risk Preferences
-   **In Domain of Gains:** Humans are **Risk Averse**. They take sure profits early to avoid the risk of losing them. (Selling Winners too soon).
-   **In Domain of Losses:** Humans are **Risk Seeking**. They hold onto losing trades hoping for a breakeven, risking larger losses to avoid the pain of realizing a small one. (Holding Losers too long).

## III. Key Cognitive Biases

### 3.1 Confirmation Bias
The tendency to search for, interpret, and recall information that confirms one's pre-existing hypothesis.
*Scenario:* A trader believes EUR/USD is Bullish. He ignores the 5 Bearish indicators and focuses on the single Bullish divergence.

### 3.2 Recency Bias
Giving disproportionate weight to recent events.
*Scenario:* After a winning streak, a trader becomes overconfident (Hot Hand Fallacy) and increases position size, usually right before the mean reversion occurs.

### 3.3 The Endowment Effect
As soon as a trader opens a position, they value it more highly than before they owned it. "My trade" becomes part of their ego/identity. Closing it feels like an admission of personal failure.

## IV. Neurochemistry of Trading

### 4.1 Dopamine (The Reward Prediction Error)
Dopamine is released not when we win, but when we *anticipate* a win. The thrill of the "setup" drives overtrading.
-   **Addiction Loop:** Variable Reinforcement (Random Rewards) is the most addictive schedule known to psychology (Skinner Box). The market is a giant slot machine.

### 4.2 Cortisol (The Stress Response)
Chronic trading stress elevates cortisol.
**Effects:**
-   Impairs the Prefrontal Cortex (Rational planning).
-   Enhances the Amygdala (Fight or Flight).
*Result:* Under stress, traders revert to primitive, reactive behaviors (Panic Selling).

## V. Practical Mitigation Strategies

### 5.1 The "Checklist" Protocol
To bypass the emotional Amygdala, force the brain to engage the logical Prefrontal Cortex by physically ticking off valid conditions before every trade.
*Rule:* No tick, no trade.

### 5.2 Mechanical Sizing
Remove the decision of "How much?" from the heat of the moment.
$$size = f(Account, Volatility)$$ (Fixed Formula).

### 5.3 Mindfulness and Metacognition
The practice of observing one's own thoughts ("I am feeling an urge to revenge trade") without acting on them.

## VI. Exercises

**Exercise 1 (Prospect Theory Application):**
Scenario A: Sure gain of $500.
Scenario B: 50% chance of $1000, 50% chance of $0.
Scenario C: Sure loss of $500.
Scenario D: 50% chance of -$1000, 50% chance of $0.
According to Prospect Theory, which options do most traders choose? Which choices maximize long-term geometric growth (Kelly)?

**Exercise 2 (Bias Identification):**
A trader exits a winning trade at +10 pips because "it felt like resistance." The price then runs +100 pips. The next day, he enters a trade, it goes -10 pips, and he holds it because "it will come back." It goes to -50.
Identify the specific biases at play in both actions.

**Exercise 3 (Journaling):**
Create a "Emotional Journal" structure. Why is it important to record *feelings* at the moment of entry, not just price data?

## VII. References
-   Kahneman, D., & Tversky, A. (1979). *Prospect Theory: An Analysis of Decision under Risk*.
-   Steenbarger, B. (2002). *The Psychology of Trading*.
-   Douglas, M. (2000). *Trading in the Zone*.
