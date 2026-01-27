# Stochastic Calculus Revisited Itos Lemma 2.0

## I. Executive Summary

**Stochastic Calculus** allows us to model randomness. Ordinary calculus ($dx$) assumes smooth curves. Markets are jagged ($dW$). **Ito's Lemma** is the Chain Rule for jagged paths. It reveals that **Volatility Creates Drift**: the average value of a function of a random variable is different from the function of the average. This **Convexity Bias** is the hidden engine of option pricing and leveraged ETFs.

## II. Formal Definitions

### Definition 2.1 (The Taylor Series Expansion)
Standard: $df = \frac{\partial f}{\partial x} dx + \frac{1}{2} \frac{\partial^2 f}{\partial x^2} (dx)^2$.
In Standard Calculus, $(dx)^2 \to 0$.
In Stochastic Calculus, $(dx)^2 \not\to 0$. It becomes $dt$.
$$ df = \frac{\partial f}{\partial S} dS + \frac{\partial f}{\partial t} dt + \frac{1}{2} \sigma^2 S^2 \frac{\partial^2 f}{\partial S^2} dt $$
The term $\frac{1}{2} \sigma^2$ is the **It0 Correction**.

### Definition 2.2 (Geometric Brownian Motion)
$dS = \mu S dt + \sigma S dW$.
Why Geometric? Because markets have limited liability (Price > 0).
The logarithm of Price $\ln(S)$ follows a Normal Distribution.
Price $S$ follows a Lognormal Distribution.
Skewed to the right. (Unlimited upside, limited downside).

## III. Theoretical Framework

### 3.1 Volatility Drag (The Tax)
If you lose 50%, you need 100% to get back to even.
$Accumulated Return \approx Average Return - \frac{1}{2} Variance$.
High Volatility reduces the Compound Growth Rate (CAGR).
Ito's Lemma proves this mathematically.
To maximize wealth, you must minimize Variance (Kelly Criterion).

### 3.2 Leverage Decay
Leveraged ETF (3x Bull).
Daily rebalancing.
If Market is flat but volatile (+10%, -10%).
Base: 100 $\to$ 110 $\to$ 99. (-1%).
3x ETF: 100 $\to$ 130 $\to$ 91. (-9%).
The 3x Leverage magnified the Volatility Drag.
"Path Dependence."

## IV. Strategic Applications

### 4.1 Gamma Trading
Gamma is the second derivative $\frac{\partial^2 C}{\partial S^2}$.
It is the "Convexity" term in Ito's Lemma.
Long Gamma $\implies$ You profit from Volatility squared.
Market Maker hedges Delta (linear) to isolate and harvest Gamma (curvature).

### 4.2 Shannon's Demon
Parrondo's Paradox.
Two losing games can be combined to make a winning game *if* you rebalance.
Volatility Pumping.
Rebalancing between Cash and Volatile Asset generates a "Rebalancing Bonus" equal to the Ito Correction.
Source of return: Randomness itself.

## V. Exercises

**Exercise 1 (The Log Contract):**
A contract that pays $\ln(S_T)$.
Its Delta is $1/S$. Its Gamma is $-1/S^2$.
It allows trading pure Variance.
Variance Swaps are constructed using a portfolio of Options to replicate this Log Contract.

**Exercise 2 (Black-Scholes Derivation):**
Black-Scholes is just a solution to the Heat Equation derived from Ito's Lemma.
It assumes $\sigma$ is constant.
It fails because $\sigma$ is stochastic (Vol of Vol).
Stochastic Volatility Models (Heston) apply Ito's Lemma to Volatility itself.

## VI. References
-   Oksendal, B. *Stochastic Differential Equations*.
-   Taleb, N. *Dynamic Hedging*.
