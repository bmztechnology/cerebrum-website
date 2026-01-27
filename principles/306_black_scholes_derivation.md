# Black Scholes Derivation: The Heat Equation

## I. Executive Summary

The **Black-Scholes-Merton (BSM)** model (1973) solved the problem of option pricing by constructing a risk-free hedge portfolio and invoking the **No Arbitrage** principle. Mathematically, it transforms the stochastic process of stock prices (Geometric Brownian Motion) into a partial differential equation (PDE) identical to the **Heat Equation** in thermodynamics. It won the Nobel Prize, despite its flawed assumption of constant volatility.

## II. Formal Definitions

### Definition 2.1 (Geometric Brownian Motion)
$$ dS = \mu S dt + \sigma S dZ $$
-   $\mu$: Drift.
-   $\sigma$: Volatility.
-   $dZ$: Wiener Process (Random Walk).
Key: Returns are Lognormal. Prices are not negative.

### Definition 2.2 (The BSM PDE)
By Itō's Lemma:
$$ \frac{\partial V}{\partial t} + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} + r S \frac{\partial V}{\partial S} - r V = 0 $$
Terms: Theta + Gamma + Delta contribution - Interest cost = 0.
Basically: Your PnL from Time + Volatility + Direction must equal risk-free rate.

## III. Theoretical Framework

### 3.1 Assumptions (The Flaws)
1.  **Constant Volatility:** False (Vol is stochastic/clusters).
2.  **Continuous Trading:** False (Market Gaps/Overnight).
3.  **No Transaction Costs:** False (Bid/Ask spread).
4.  **Log-Normal Distribution:** False (Fat Tails/Black Swans).
Why use it? It provides a robust *Delta* for hedging. Using the wrong Vol in the right model is better than no model.

### 3.2 Dynamic Replication
The model proves that an Option is redundant.
You can replicate a Call perfectly by being Long $\Delta$ shares and Short Bonds.
Therefore, the Call Price is just the cost of this replication strategy.

## IV. Strategic Applications

### 4.1 The Volatility Surface (The Patch)
Because BSM assumes constant Vol, but markets have skew.
Traders simply use *different* Vols for different strikes.
They "fudge" the model inputs to match market prices.
The Model is used as a standard "Language" to communicate prices as Vols.

### 4.2 Risk Management
Using BSM to calculate VaR (Value at Risk).
Dangerous.
"Model Risk."
LTCM blew up because they believed the model's probability outputs (10-sigma events shouldn't happen).
Use BSM for Greeks, not for Prophecy.

## V. Exercises

**Exercise 1 (Solving the PDE):**
Boundary conditions:
$V(S, T) = \max(S-K, 0)$.
Solution yields the $N(d_1)$ and $N(d_2)$ formula.
It maps the diffusing probability mass of the stock price ending up ITM.

**Exercise 2 (Put-Call Parity derivation):**
BSM satisfies Put-Call Parity automatically.
If you plug in Call formula and Put formula, they sum to $S - Ke^{-rt}$.
Consistency check.

## VI. References
-   Black, F., & Scholes, M. *The Pricing of Options and Corporate Liabilities*.
-   Haug, E.G. *The Complete Guide to Option Pricing Formulas*.
