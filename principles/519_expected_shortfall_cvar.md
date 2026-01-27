# Expected Shortfall CVaR: Tail Loss

## I. Executive Summary

**Expected Shortfall (ES)**, also known as **Conditional VaR (CVaR)**, measures the *average* loss conditional on the loss exceeding the VaR threshold. Unlike VaR (which asks "How bad can it get?"), ES asks *"If it gets bad, how much will I lose?"* It addresses VaR's lack of subadditivity and captures the shape of the tail. Basel III ("Fundamental Review of the Trading Book") shifted regulatory capital rules from VaR to ES.

## II. Formal Definitions

### Definition 2.1 (The Equation)
$$ ES_{\alpha} = E[ L | L > VaR_{\alpha} ] $$
Average of the worst $\alpha\%$ of scenarios.
-   VaR tells you the *start* of the tail.
-   ES tells you the *weight* of the tail.
Two portfolios can have same VaR (\$1M).
Portfolio A (Normal tail): ES = \$1.2M.
Portfolio B (Fat tail - Short Puts): ES = \$10M.
ES identifies Portfolio B as riskier.

### Definition 2.2 (Coherence)
ES is a Coherent Risk Measure.
Satisfies Subadditivity: $ES(A+B) \le ES(A) + ES(B)$.
Always rewards diversification.

## III. Theoretical Framework

### 3.1 Estimation Difficulty
VaR looks at one point (95th percentile).
ES averages the tail (95th to 100th).
Requires more data to be stable.
Single outlier can skew ES massively (VaR is robust to outliers beyond the threshold).

### 3.2 Spectral Risk Measures
Generalization.
Weighted average of quantiles.
ES weights all tail quantiles equally.
Other measures might weight the extreme tail (99.9%) more heavily (Risk Aversion).

## IV. Strategic Applications

### 4.1 Optimization
Mean-ES Optimization instead of Mean-Variance.
Optimizes portfolio to minimize tail risk.
Result: Lower allocation to Short Volatility strategies (High Yield, Options).
Higher allocation to Tail Hedges (Gold, Long Vol).

### 4.2 Insurance Capital
Solvency II uses VaR (99.5%).
Swiss Solvency Test uses ES (99%).
ES is considered more prudent for insurers holding catastrophe risk.

## V. Exercises

**Exercise 1 (The Switch):**
Bank moves from VaR to ES.
Capital requirement goes Up.
Especially for Credit Trading/Securitization desks (Fat tails).
Liquid products (FX) impact is smaller.

**Exercise 2 (Backtesting):**
Backtesting VaR is easy (Hit/Miss binomial).
Backtesting ES is hard (Comparing realized average to predicted average).
Acetone/Z-test methods.

## VI. References
-   Artzner, P. *Coherent Measures of Risk*.
-   Basel Committee. *Minimum Capital Requirements for Market Risk*.
