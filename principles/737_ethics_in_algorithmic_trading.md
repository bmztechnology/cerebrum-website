# Ethics in Algorithmic Trading

## I. Executive Summary

**Ethics in Algo Trading** addresses the moral dilemmas arising from automation. Does HFT provide liquidity or extract rents? Is it ethical to front-run institutional orders using latency? Are **Black Box** AI models accountable for crashes? As code becomes law, the **Ethical Calibration** of algorithms becomes a central governance challenge.

## II. Formal Definitions

### Definition 2.1 (Fairness in Microstructure)
**Equal Access:** Does everyone have the same data? (No, HFT pays for Colocation).
**Equal Outcome:** No.
**Rawlsian View:** Is the market arrangement to the benefit of the least advantaged (Retail)?
Pro-HFT: Spreads are tighter for Retail.
Anti-HFT: Retail enters a rigged casino.

### Definition 2.2 (The Runaway Tram Problem)
Algo detects crash.
Option A: Pull liquidity (Save the Firm, Crash the Market).
Option B: Provide liquidity (Bankrupt the Firm, Save the Market).
Fiduciary duty to investors says A.
Social duty to market says B.
Regulators enforce B via "Market Maker Obligations."

## III. Theoretical Framework

### 3.1 Predatory Algorithms
"Adaptive Aggressive" algos.
Targeting vulnerable distressed traders.
Is this "Efficient Price Discovery" or "Bullying"?
Ethics of exploiting a Fat Finger error.
Exchanges often bust trades that are "Clearly Erroneous," imposing an ethical guardrail.

### 3.2 AI Bias
Lending Algos (Fintech).
Training on historical data (Redlining).
Algo denies loans to minorities.
"I'm just math."
Math encodes history's bias.
Ethical AI requires "Fairness Constraints."

## IV. Strategic Applications

### 4.1 Responsible Coding
Kill Switches.
Testing environments.
"Do No Harm."
Knight Capital failure was an ethical failure of diligence / deployment procedure.

### 4.2 Transparency
Explainable AI (XAI).
"Why did you deny the loan?"
"Why did you sell huge size?"
Black Box "Because Neural Net said so" is unacceptable in regulated finance.

## V. Exercises

**Exercise 1 (The Free Option):**
Broker platform glitches. Price is stale.
You can arbitrage it for risk-free profit.
Ethical?
Legal: Often "Unjust Enrichment."
Broker will claw it back.

**Exercise 2 (Front Running vs Anticipation):**
Front Running: Using *private* client info. (Illegal/Unethical).
Anticipation: Using *public* tape info to predict flow. (Legal/Smart).
The line is thin (e.g., Identifying a specific client's algo footprint).

## VI. References
-   Angel, J. & McCabe, D. *Fairness in Financial Markets*.
-   O'Neil, C. *Weapons of Math Destruction*.
