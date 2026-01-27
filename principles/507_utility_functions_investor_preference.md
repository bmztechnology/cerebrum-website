# Utility Functions Investor Preference: Satisfaction

## I. Executive Summary

**Utility Functions** bridge the gap between financial math (Risk/Return) and human satisfaction. They quantify **Risk Aversion**. Rational investors usually exhibit **Decreasing Marginal Utility of Wealth** (Logarithmic or Power Utility). The goal of portfolio construction is not to maximize Return, but to maximize **Expected Utility**. This explains why investors insure against losses (concave utility) and hold cash.

## II. Formal Definitions

### Definition 2.1 (Mean-Variance Utility)
Approximation for quadratic utility:
$$ U = E[R] - \frac{1}{2} \lambda \sigma^2 $$
-   $E[R]$: Expected Return (Good).
-   $\sigma^2$: Variance (Bad).
-   $\lambda$: Coefficient of Risk Aversion.
    -   $\lambda \approx 3$: Typical investor.
    -   $\lambda > 10$: Conservative.
    -   $\lambda = 0$: Risk Neutral (maximize return only).

### Definition 2.2 (Indifference Curves)
Curves in Risk/Return space where Utility is constant.
Slope represents the "Price of Risk" the investor is willing to pay.
Optimization: Find tangency of Indifference Curve to Efficient Frontier.

## III. Theoretical Framework

### 3.1 CRRA (Constant Relative Risk Aversion)
Power Utility: $U(W) = \frac{W^{1-\gamma}}{1-\gamma}$.
Implies % allocation to risky assets is constant as Wealth grows.
(Rich person invests same % in stocks as poor person?).
Empirically debated. (DRRA: Decreasing Relative Risk Aversion - Rich take more risk?).

### 3.2 Certainty Equivalent
The guaranteed amount of cash $C$ that gives the same Utility as the risky gamble.
$U(C) = E[U(W)]$.
$Risk Prem = E[W] - C$.
The amount you would pay to avoid the risk.

## IV. Strategic Applications

### 4.1 Insurance
Why buy put options (negative expected value)?
Because Utility of Wealth drops faster in a crash (Marginal utility of last dollar is high when you are poor).
Insurance increases Expected Utility even if it decreases Expected Wealth.

### 4.2 Kelly Criterion
Log Utility ($U = \ln W$).
Maximizes Long Term Growth Rate (Geometric Mean).
Kelly Bet size = $Edge / Odds$.
Warning: Kelly creates massive volatility.
Standard investors maximize Utility with "Half Kelly" to sleep at night.

## V. Exercises

**Exercise 1 (Prospect Theory):**
Utility function is S-shaped.
Concave for Gains (Risk Averse).
Convex for Losses (Risk Seeking - "Double or Nothing").
Explains why traders hold losers too long (Seeking to recover) and sell winners too early.
Violates classical Utility Theory.

**Exercise 2 (Lambda Calibration):**
If Equity Premium = 5% and Vol = 20% (Var 0.04).
Allocation = 60%.
Implied $\lambda$?
Euler equation solution.
Revealed preference.

## VI. References
-   Von Neumann, J. & Morgenstern, O. *Theory of Games and Economic Behavior*.
-   Merton, R. *Lifetime Portfolio Selection under Uncertainty*.
