# Optimal Stopping Theory: The American Option

## I. Executive Summary

When is the best time to stop?
To sell the stock? To exercise the option? To hire the candidate?
**Optimal Stopping Theory** solves the problem of maximizing reward when the decision must be made sequentially without foresight. In finance, this is the mathematics of **American Options** (Exercise anytime) and **Swing Trading** (Exit strategy).

## II. Formal Definitions

### Definition 2.1 (The Snell Envelope)
The smallest Super-Martingale that dominates the payoff process $X_n$.
$U_n = \max(X_n, E[U_{n+1} | \mathcal{F}_n])$.
-   $X_n$: Payoff if we stop now.
-   $E[U_{n+1}]$: Expected value if we continue.
Stop when $X_n = U_n$ (Current Payoff = Continuation Value).

### Definition 2.2 (The Optimal Time $\tau^*$)
$\tau^* = \min \{ n : X_n \ge U_n \}$.

## III. Theoretical Framework

### 3.1 American vs European
European Option: Wait until $T$.
American Option: Choose $\tau \in [0, T]$.
Value(American) = $\sup_{\tau} E[e^{-r\tau} Payoff_\tau]$.
This is always $\ge$ Value(European).
The "Premium" is the value of the stopping right.

### 3.2 The Secretary Problem
Interview $N$ candidates. Must hire immediately or reject forever.
Strategy: Reject the first $N/e$ (37%). Then hire the first one better than the best of the rejected group.
This maximizes probability of getting the absolute best.

## IV. Strategic Applications

### 4.1 Execution Algorithms (TWAP/VWAP)
You need to buy 1M shares today.
Do you buy now? Or wait for better price?
Optimal Stopping models (Almgren-Chriss) balance **Alpha Decay** (Waiting costs money as price drifts) vs **Impact** (Buying now spikes price).

### 4.2 Signal Exit
You are Long. Indicator is overbought.
Do you Sell? Or wait for "Higher High"?
Snell Envelope logic:
Calculate $E[\text{Future High}]$.
If $Current > E[\text{Future}] - \text{Risk}$, Stop (Sell).
If not, Continue.

## V. Exercises

**Exercise 1 (Dividend):**
Call Option on Non-Dividend stock.
Ideally, never exercise early. Why?
(Because you lose the time value and insurance. Better to sell the option than exercise).
Call Option on Dividend stock.
Exercise early if $Dividend > \text{PutPrice} + \text{Interest}$.
This is a boundary condition in Optimal Stopping.

**Exercise 2 (Psychology):**
"Cutting Winners Short."
Retail traders stop too early ($X_n < E[U_{n+1}]$).
They value "Certainty" of $X_n$ over the "Expectation" of $U_{n+1}$.
Optimal Stopping requires Risk Neutrality.

## VI. References
-   Peskir, G., & Shiryaev, A. *Optimal Stopping and Free-Boundary Problems*.
-   Ferguson, T.S. *Who Solved the Secretary Problem?*.
