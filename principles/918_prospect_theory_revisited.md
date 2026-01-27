# Prospect Theory Revisited

## I. Executive Summary

**Prospect Theory** (Kahneman & Tversky) completely overturned Expected Utility Theory. It establishes that humans value **Gains and Losses Asymmetrically** (Loss Aversion) and evaluate outcomes relative to a **Reference Point** (not absolute wealth). The **S-Shaped Value Function** explains why traders cut winners early (Risk Averse in gains) and ride losers (Risk Seeking in losses).

## II. Formal Definitions

### Definition 2.1 (The Value Function)
$$ V(x) = \begin{cases} x^\alpha & \text{if } x \ge 0 \\ -\lambda(-x)^\beta & \text{if } x < 0 \end{cases} $$
$\lambda \approx 2.25$: Losses hurt 2.25x more than gains feel good.
$\alpha, \beta < 1$: Diminishing sensitivity.
Convex in losses (Risk Seeking). Concave in gains (Risk Averse).
This creates the **Disposition Effect**.

### Definition 2.2 (Probability Weighting)
We over-weight small probabilities (Lottery tickets, OTM Options).
Waist-weight moderate probabilities.
Under-weight high probabilities.
Explains the "Skewness Preference" in markets (Overpricing of tail risk protection and moonshots).

## III. Theoretical Framework

### 3.1 The Disposition Effect
Trader A buys stock at 100. Price $\to$ 110.
"I'm up 10. Feels good. Lock it in." (Risk Averse).
Trader B buys stock at 100. Price $\to$ 90.
"I'm down 10. If I sell, the pain is real. If I hold, it might come back." (Risk Seeking).
Result: Traders sell winners and hold losers.
Momentum exists because winners are sold too slowly?

### 3.2 Framing Effects
The "Reference Point" determines the frame.
If you bought at 100, and it's at 90, you are in "Loss Frame."
If you bought at 80, and it's at 90, you are in "Gain Frame."
Same price (90). Totally different behavior.
Re-anchoring (marking to market daily) is the only cure.

## IV. Strategic Applications

### 4.1 Algorithmic vs Human
Algos have $\lambda = 1$ (Loss Neutral).
They don't feel pain.
They exploit humans who are puking positions at the bottom (Max Pain).
"Predatory Algo" targets the mental stop-loss levels of human crowd.

### 4.2 Structuring Products
Capital Protected Notes.
"95% Principal Protection + Upside of S&P."
Appeals to Loss Aversion ($\lambda$).
Investors pay a premium for the "No Loss" guarantee, even if Expected Return is lower than a balanced portfolio.

## V. Exercises

**Exercise 1 (The Break-Even Fallacy):**
"I'll sell when it gets back to my entry price."
Reference point bias.
Market doesn't know your entry price.
Rational decision: Is it a buy or sell *now*?
Sunk Cost Fallacy.

**Exercise 2 (House Money Effect):**
After a big win, traders take *more* risk.
"Playing with House Money."
Reference point shifts up.
Losses don't hurt as much until gains are wiped out.
Explains bubbles late-stage acceleration.

## VI. References
-   Kahneman, D. & Tversky, A. *Prospect Theory: An Analysis of Decision under Risk*.
-   Barberis, N. *Psychology of Stock Markets*.
