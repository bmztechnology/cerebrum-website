# Bayesian Inference Updating Priors

## I. Executive Summary

**Frequentist Statistics** (p-values) assumes fixed parameters and random data. **Bayesian Statistics** assumes random parameters and fixed data. In Finance, where regimes change constantly, Bayesianism is superior. It models **Learning**: starting with a **Prior Belief** and updating it with **New Evidence** (Likelihood) to form a **Posterior Belief**.

## II. Formal Definitions

### Definition 2.1 (Bayes Rule)
$$ P(\text{Hypothesis} | \text{Data}) = \frac{P(\text{Data} | \text{Hypothesis}) \times P(\text{Hypothesis})}{P(\text{Data})} $$
Posterior $\propto$ Likelihood $\times$ Prior.
Hypothesis: "We are in a Bull Market."
Data: "S&P up 1% today."
Update probability of Bull Market.

### Definition 2.2 (Conjugate Priors)
Mathematical convenience.
If Prior is Beta distribution, and Data is Binomial, Posterior is Beta.
Allows rapid updating without complex integration.
Used in Algo Trading (Bandit Problems).

## III. Theoretical Framework

### 3.1 The Black-Litterman Model
CAPM gives "Equilibrium Returns" (Prior).
Investor has "Views" (Likelihood).
Examples: "I think Tech will beat Energy by 5%."
Model blends Prior and Views based on confidence.
Result: Posterior Portfolio.
Standard quantitative portfolio construction technique.

### 3.2 Regime Switching (Hidden Markov Model)
State: Low Vol or High Vol (Unobserved).
Data: Daily Returns.
Bayesian Filter (Kalman Filter) estimates probability of being in High Vol state.
$P(S_t = High | R_1 \dots R_t)$.
Traders adjust leverage based on this probability.

## IV. Strategic Applications

### 4.1 Kelly Criterion (Bayesian Version)
Unknown Edge.
Don't bet Full Kelly based on sample mean.
Bet based on the *predictive distribution* of the next trade.
"Parameter Uncertainty" reduces bet size.
Prevents "Gambler's Ruin" due to overconfidence.

### 4.2 Entropy Coding
Coding Theory.
You need fewer bits to encode an event if you predicted it with high probability.
Market Moves $\approx$ Information Surprise.
Bayesian Trader minimizes "Surprise" (Log Loss).

## V. Exercises

**Exercise 1 (The Monty Hall Problem):**
3 Doors.
Car behind one.
You pick Door 1. Host opens Door 3 (Goat).
Switch to Door 2?
Yes. Probability doubles (1/3 to 2/3).
Bayesian update based on Host's constraint (Host cannot open your door or the car door).

**Exercise 2 (Earnings Drift):**
Stock jumps on earnings.
Drifts for 3 months.
Why?
Investors define Prior (Old earnings).
Update slowly (Conservatism bias).
Bayesian approach: Update faster than the market.

## VI. References
-   Jaynes, E.T. *Probability Theory: The Logic of Science*.
-   Meucci, A. *Risk and Asset Allocation*.
