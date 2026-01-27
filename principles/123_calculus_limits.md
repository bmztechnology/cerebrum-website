# Calculus I: Limits and Continuity in High Frequency

## I. Executive Summary

Calculus is the mathematics of change. In finance, where prices change continuously (or distinctively at microsecond intervals), calculus provides the language to describe velocity (returns), acceleration (momentum), and accumulated value (profit). The concept of the **Limit** is the foundation of all calculus, defining how we model instantaneous events in a discrete world. In High Frequency Trading (HFT), the "Limit" as $t \to 0$ represents the microstructure reality where slippage and latency dominate.

## II. Formal Definitions

### Definition 2.1 (The Limit)
Let $f(x)$ be defined on an open interval containing $c$ (except possibly at $c$). We say:
$$\lim_{x \to c} f(x) = L$$
if for every $\epsilon > 0$, there exists a $\delta > 0$ such that:
$$0 < |x - c| < \delta \implies |f(x) - L| < \epsilon$$
*Interpretation:* We can get $f(x)$ arbitrarily close to $L$ by making $x$ sufficiently close to $c$.

### Definition 2.2 (Continuity)
A function is continuous at $c$ if:
1.  $f(c)$ is defined.
2.  $\lim_{x \to c} f(x)$ exists.
3.  $\lim_{x \to c} f(x) = f(c)$.
*Financial Reality:* Asset prices are **Discontinuous** (Jump Processes). They gap continuously. Calculus assumes continuity, which is why "Gap Risk" breaks Blackshore-Scholes models.

## III. Theoretical Framework

### 3.1 The Microstructure Limit ($t \to 0$)
In continuous time finance, we assume we can trade at any instant $dt$.
In reality, the market is discrete (ticks).
The limit $\lim_{\Delta t \to 0} \frac{\Delta P}{\Delta t}$ assumes infinite liquidity.
When this limit fails (Liquidity Vacuum), mathematical models crash (Flash Crash 2010).

### 3.2 Asymptotic Analysis (Big O Notation)
Used to analyze Algo Complexity.
-   $O(1)$: Constant Time (Lookup Table). Ideal for HFT.
-   $O(N)$: Linear Time (Looping through prices).
-   $O(N^2)$: Quadratic (Correlation Matrix of $N$ assets). Too slow for real-time arbitrage on large baskets.

## IV. Strategic Applications

### 4.1 Order Book Density
We define Liquidity $L(p)$ as a continuous function of price.
Volume to execute trade size $S$:
$$S = \int_{P_{best}}^{P_{fill}} L(p) dp$$
If $L(p)$ is thin (Limit $\to 0$), $P_{fill}$ moves far away (Slippage).

### 4.2 The "Derivative" of Price
Price $P(t)$.
Velocity $P'(t) = \text{Return}$.
Acceleration $P''(t) = \text{Momentum}$.
Jerk $P'''(t) = \text{Change in Momentum (Reversal Signal)}$.
Traders who trade raw Price are Level 0.
Traders who trade Returns are Level 1.
Traders who trade Momentum are Level 2.

## V. Exercises

**Exercise 1 (The Limits of Arbitrage):**
Arb profit $\pi(t) = |P_A(t) - P_B(t)| - Cost$.
As volatility $\sigma \to \infty$, Spread $\to \infty$. 
But as $\sigma \to \infty$, Execution Risk also $\to \infty$.
Calculate $\lim_{\sigma \to \infty} \text{SharpeRatio}$.
(It approaches 0 because the denominator (Risk) grows faster than the Numerator (Spread) due to slippage).

**Exercise 2 (Continuity):**
Why is the "Stop Loss" order mathematically flawed?
(It assumes the price function $P(t)$ is continuous and will pass through your Stop Price $K$. In a Gap, $P(t)$ jumps from $K+1$ to $K-10$ without ever touching $K$. The Order fills at $K-10$.)

## VI. References
-   Spivak, M. *Calculus*.
-   Apostol, T. *Calculus Vol. 1*.
-   Leach, T. *Mathematics for Finance*.
