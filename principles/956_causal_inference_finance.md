# Causal Inference in Finance

## I. Executive Summary

**Correlation is not Causation**. Machine Learning detects correlations (Rooster crows $\implies$ Sun rises). **Causal Inference** (Pearl) seeks the **Why** (Sun rises $\implies$ Rooster crows). In Finance, distinguishing between **Spurious Correlation** and **Structural Driver** is the key to **Robustness**. Strategies built on Causality survive regime shifts; correlations break.

## II. Formal Definitions

### Definition 2.1 (The Do-Calculus)
$P(Y | X)$: Probability of Y seeing X (Observation).
$P(Y | do(X))$: Probability of Y if I force X (Intervention).
In markets, we rarely "do" X (unless Central Bank).
We must infer $do(X)$ from observational data using structural models.
Counterfactuals: "What would Price be if Rates hadn't risen?"

### Definition 2.2 (Instrumental Variables)
To find causal effect of X on Y (with confounder Z).
Find Instrument I that affects X but not Z or Y directly.
Example: Effect of Market Depth on Volatility.
Instrument: Exchange outage (Exogenous shock to depth).
Allows measuring causality.

## III. Theoretical Framework

### 3.1 The Lucas Critique (AI Version)
Econometric models based on history fail when policy changes.
Because agents adapt.
Causal models model the *agents' decision process*, not just the historical output.
Invariant to distribution shifts.
The Holy Grail of Quant.

### 3.2 Directed Acyclic Graphs (DAGs)
Mapping the market.
Interest Rates $\to$ Housing $\to$ Construction Stocks.
Oil $\to$ Inflation $\to$ Rates.
Graph discovery algorithms.
Trading the "Causal Chain."
News hits node A $\to$ Propagates to B and C. Trade C before it hits.

## IV. Strategic Applications

### 4.1 Pairs Trading (Cointegration vs Causality)
Standard Pair: Coke/Pepsi. Correlation.
Causal Pair: Gold Miner / Gold Price.
Gold Price *causes* Miner profits.
Directional asymmetry.
If Gold moves, Miner moves.
If Miner moves, Gold doesn't care.
Lead-Lag relationships identified by Causality tests.

### 4.2 Factor Investing
Does "Low Volatility" cause "Outperformance"?
Or is it a proxy for "Distress likelihood"?
Understanding the causal mechanism prevents loading on "False Factors."

## V. Exercises

**Exercise 1 (The Ice Cream and Polio):**
Correlation: Ice Cream sales $\propto$ Polio cases.
Causal: Summer heat $\to$ Ice Cream. Summer heat $\to$ Polio (virus active).
Confounder: Temperature.
Finance is full of Ice Cream/Polio correlations.

**Exercise 2 (Granger Causality):**
Time-lagged correlation.
"X happens before Y consistently."
Weak causality, but useful for prediction.
True Causality requires a mechanism.

## VI. References
-   Pearl, J. *The Book of Why*.
-   Imbens, G. *Causal Inference*.
