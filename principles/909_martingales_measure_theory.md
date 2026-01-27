# Martingales and Measure Theory Girsanov

## I. Executive Summary

A **Martingale** is a fair game: The best prediction of tomorrow's price is today's price. The **First Fundamental Theorem of Asset Pricing** states that if a market has No Arbitrage, there exists a **Risk Neutral Measure (Q)** under which the discounted asset price is a Martingale. This shifts calculation from the "Real World" (P-Measure) to a "Risk Neutral World" (Q-Measure), simplifying valuation.

## II. Formal Definitions

### Definition 2.1 (The Martingale Property)
$$ E_Q [ P_{t+1} | P_t ] = P_t $$
No drift?
In the Q-measure, all assets drift at the Risk-Free Rate $r$.
The "Risk Premium" disappears (is absorbed into the probability adjustment).
Real probabilities (P) are distorted to Risk-Neutral probabilities (Q) to account for risk aversion.

### Definition 2.2 (Girsanov Theorem)
The tool to change the measure from P to Q.
It shifts the drift of the Brownian Motion.
$dW^Q = dW^P + \lambda dt$.
$\lambda$ is the Market Price of Risk (Sharpe Ratio).
Changing the ruler to measure the distance.

## III. Theoretical Framework

### 3.1 Completeness (Second Fundamental Theorem)
If the market is Complete (Every payoff can be replicated), the Q-Measure is **Unique**.
One unique price for every option.
If Market Incomplete (Stochastic Vol, Jumps), there are **Infinite** Q-Measures.
Pricing becomes a range.
Traders "choose" a measure by calibration to market prices.

### 3.2 The Radon-Nikodym Derivative
The ratio of probabilities $\frac{dQ}{dP}$.
It represents the "State Price Density."
In bad states (Crash), Q-probability is high (Options expensive).
In good states, Q-probability is low.
The "Fear Gauge" mathematically defined.

## IV. Strategic Applications

### 4.1 Digital Option Pricing
Pays \$1 if $S_T > K$.
Value = $e^{-rt} \times Q(S_T > K)$.
The price of a digital option *is* the Risk Neutral Probability of the event.
Prediction Markets (Polymarket) trade digital options.
Their prices represent $Q$, not necessarily $P$.

### 4.2 Recovering Real Probabilities
Can we find $P$ from $Q$?
Ross Recovery Theorem.
If we observe Option prices (Q), can we infer the Real Return (P)?
Controversial.
Requires assumptions about utility functions.
Allows estimating the "True" expected return of the S&P 500 from VIX options.

## V. Exercises

**Exercise 1 (The Doubling Strategy):**
Betting strategy: Double bet after loss.
Martingale betting?
Eventually you win back losses.
Problem: Requires infinite capital.
With finite capital, probability of Ruin = 1.
"Local Martingale" vs "True Martingale."

**Exercise 2 (Negative Probabilities?):**
If arbitrage exists, Q-Measure does not exist (or has negative probabilities).
A negative probability implies a "Money Pump."
Mathematical proof of No Free Lunch.

## VI. References
-   Shreve, S. *Stochastic Calculus for Finance*.
-   Harrison & Kreps. *Martingales and Arbitrage*.
