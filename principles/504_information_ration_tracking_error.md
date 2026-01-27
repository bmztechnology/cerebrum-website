# Information Ratio Tracking Error: Active Skill

## I. Executive Summary

The **Information Ratio (IR)** measures the skill of an active portfolio manager relative to a benchmark. It is the ratio of **Active Return (Alpha)** to **Active Risk (Tracking Error)**. Unlike Sharpe Ratio (which compares to cash), IR assesses consistency in beating the index. An IR of 0.5 is good; 1.0 is exceptional. It is the fundamental law of active management.

## II. Formal Definitions

### Definition 2.1 (Tracking Error - TE)
Standard Deviation of the difference returns.
$TE = \sigma(R_p - R_b)$.
$R_p$: Portfolio Return. $R_b$: Benchmark Return.
"Active Risk."
If a managed fund exactly replicates S&P 500, TE = 0.
If it takes big bets, TE is high (e.g., 5-10%).

### Definition 2.2 (Information Ratio)
$$ IR = \frac{E[R_p - R_b]}{TE} = \frac{\alpha}{\omega} $$
Manager A: Alpha 2%, TE 2%. IR = 1.0.
Manager B: Alpha 5%, TE 10%. IR = 0.5.
Manager A is more skillful (more return per unit of deviation).

## III. Theoretical Framework

### 3.1 Fundamental Law of Active Management
(Grinold & Kahn).
$$ IR \approx IC \times \sqrt{BR} $$
-   **IC (Information Coefficient):** Skill/Correlation of forecasts with outcomes. (Quality).
-   **BR (Breadth):** Number of independent bets per year. (Quantity).
To maximize IR: Improve forecasts (IC) or Trade more often/more markets (BR).
HFT: Low IC, Massive BR $\implies$ High IR.
Warren Buffett: High IC, Low BR $\implies$ High IR.

### 3.2 Constraints
Constraints (Long only, Sector caps) reduce the Transfer Coefficient (TC).
$IR = IC \times \sqrt{BR} \times TC$.
Constraints kill alpha.

## IV. Strategic Applications

### 4.1 Closet Indexing
Active Manager charges 1% fee.
Holds S&P 500 $\pm$ 0.1%.
TE approach 0. Alpha approach 0.
Cost > Alpha.
Negative IR (after fees).
Identify by low Active Share.

### 4.2 Portable Alpha
Generate Alpha in Small Caps (High IR).
Transfer it to S&P 500 using derivatives (Futures).
$Return = Return_{S\&P500} + Alpha_{SmallCap}$.
Decoupling Alpha generation from Beta exposure.

## V. Exercises

**Exercise 1 (Time Horizon):**
Does IR scale with time?
No, similar to Sharpe. Ratio of Return/Risk.
Stable metric.

**Exercise 2 (Negative Alpha):**
If $IR < 0$.
Consistent underperformance.
"Anti-Skill."
Invert the manager? (Cost of shorting/fees prevents this).

## VI. References
-   Grinold, R. & Kahn, R. *Active Portfolio Management*.
-   Menchero, J. *The Characteristics of the Information Ratio*.
