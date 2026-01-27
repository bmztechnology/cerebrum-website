# PIN Model: Probability of Informed Trading

## I. Executive Summary

The **PIN Model** (Easley, Kiefer, O'Hara, Paperman - EKOP) is the structural predecessor to VPIN. It uses the total number of Buys and Sells each day to estimate the probability that an "Information Event" (News) has occurred and the proportion of traders who know about it. It is a key metric for calculating **Structural Liquidity Risk**.

## II. Formal Definitions

### Definition 2.1 (Parameters)
-   $\alpha$: Probability of an Information Event (News).
-   $\delta$: Probability news is Bad (given event). ($1-\delta$ is Good).
-   $\mu$: Arrival rate of Informed Traders (only if event).
-   $\epsilon$: Arrival rate of Uninformed Traders (Noise).

### Definition 2.2 (Likelihood Function)
If Buys are huge and Sells are normal, it implies Good News ($\mu$ buys added to $\epsilon$ buys).
If Buys and Sells are both normal, implies No News ($\epsilon$ only).
We optimize parameters via Maximum Likelihood on trade counts $(B, S)$.

## III. Theoretical Framework

### 3.1 PIN Formula
$$PIN = \frac{\alpha \mu}{\alpha \mu + 2\epsilon}$$
Ratio of Informed Orders ($\alpha \mu$) to Total Orders.
High PIN $\implies$ High Asymmetric Information Risk.
Market Makers must widen spreads to $Spread = PIN \times (V_{high} - V_{low})$.

### 3.2 Sequential Trade Model
Unlike Kyle (a single batch auction), PIN assumes sequential trades.
Bayesian Learning: Every Buy increases the Market Maker's belief that "News is Good."
Every Sell increases belief "News is Bad."
Prices adjust gradually.

## IV. Strategic Applications

### 4.1 Stock Selection
Stocks with High PIN have higher expected returns.
Why? Investors demand a premium for holding assets where they are likely to be "sniped" by insiders.
Portfolio Strategy: Long High-PIN stocks (Risk Premium harvesting).

### 4.2 Corporate Finance
Companies with opaque disclosures have High PIN.
Stock price is lower (Cost of Capital higher).
Improving transparency lowers PIN and raises stock price.

## V. Exercises

**Exercise 1 (Estimation):**
Day 1: 500 Buys, 500 Sells. (Balanced. Noise).
Day 2: 900 Buys, 500 Sells. (Imbalance. Informed Buying).
Day 3: 500 Buys, 900 Sells. (Informed Selling).
PIN essentially counts how frequent Day 2 and 3 are relative to Day 1.

**Exercise 2 (Limit):**
If $\mu \to \infty$ (Insider has infinite money).
Market Maker cannot cope. Market shuts down (Halt).
This is why Circuit Breakers exist.

## VI. References
-   Easley, D., et al. *Liquidity, Information, and Infrequently Traded Stocks*.
-   O'Hara, M. *Market Microstructure Theory*.
