# Martingale Theory: Fair Games

## I. Executive Summary

A **Martingale** is a stochastic process where the best prediction of the future value is the current value. It represents a "Fair Game" with no arbitrage. The Fundamental Theorem of Asset Pricing states that "A market has no arbitrage if and only if there exists a measure $\mathbb{Q}$ under which discounted asset prices are Martingales."

## II. Formal Definitions

### Definition 2.1 (Discounted Martingale)
Process $M_t$ is a martingale (w.r.t filtration $\mathcal{F}_t$) if:
1.  $E[|M_t|] < \infty$.
2.  $E[M_{t+s} | \mathcal{F}_t] = M_t$ for all $s > 0$.

### Definition 2.2 (Sub/Super Martingales)
-   **Sub-Martingale:** $E[M_{t+s}] \ge M_t$ (Growing Trend / Positive Drift).
-   **Super-Martingale:** $E[M_{t+s}] \le M_t$ (Decaying Trend / Negative Drift).

## III. Theoretical Framework

### 3.1 No Free Lunch
If prices are Martingales (under $\mathbb{Q}$), you cannot systematically make money without taking risk.
Expected PnL = 0.
Any strategy claiming "Risk Free Alpha" violates the Martingale property.

### 3.2 Doob's Optional Stopping Theorem
If you play a fair game (Martingale) with a stopping strategy (e.g., "Stop when I win \$10"), can you beat the house?
Theorem: No.
$E[M_\tau] = M_0$.
The expected value at the stopping time $\tau$ is the starting value. (Assuming bounded bets/time).

## IV. Strategic Applications

### 4.1 Testing Algos
Run your algo on synthetic Martingale data (Random Walk).
If it makes money, it's overfitting (Luck).
Real alpha must come from exploiting Non-Martingale reality (Mean Reversion, Drift).

### 4.2 The Martingale Betting System
Doubling down on losses.
Why does it fail?
Because capital is finite. The process is bounded. Doob's theorem holds. You will eventually hit the "Gambler's Ruin" barrier before the win recovers the loss.

## V. Exercises

**Exercise 1 (Checking):**
$W_t$ (Brownian Motion) is a Martingale.
$W_t^2$ is NOT. ($E[W_t^2] = t$). It grows.
$W_t^2 - t$ IS a Martingale.
This allows us to price Variance Swaps.

**Exercise 2 (Futures):**
Futures price $F_t = E^\mathbb{Q}[S_T | \mathcal{F}_t]$.
Therefore, Futures prices ARE Martingales.
Stocks ($S_t$) are Sub-Martingales (they drift up with $r$).
Discounted Stocks ($e^{-rt}S_t$) are Martingales.

## VI. References
-   Williams, D. *Probability with Martingales*.
-   Harrison, J.M., & Pliska, S.R. *Martingales and Stochastic Integrals*.
