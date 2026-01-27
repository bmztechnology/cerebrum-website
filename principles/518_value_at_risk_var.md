# Value at Risk VaR: The Yardstick

## I. Executive Summary

**Value at Risk (VaR)** is the standard industry metric for market risk. It answers the question: *"What is the minimum loss I expect to exceed with a given probability (e.g., 5%) over a given horizon (e.g., 1 day)?"* While universal (used by Basel II/III), it is criticized for ignoring the magnitude of losses *beyond* the threshold (Tail Risk) and assuming normal distributions.

## II. Formal Definitions

### Definition 2.1 (The Metric)
$VaR_{\alpha} (X) = - \inf \{ x \in \mathbb{R} : P(X \le x) > \alpha \}$.
-   **Confidence Level ($1-\alpha$):** 99% (Basel) or 95% (RiskMetrics).
-   **Horizon:** 1 Day (Trading) or 10 Days (Capital).
Example: 1-Day 95% VaR is \$1M.
Means: On 1 out of 20 days (5%), we expect to lose *more* than \$1M.

### Definition 2.2 (Calculation Methods)
1.  **Parametric (Variance-Covariance):** Assumes normal distribution. $VaR = \sigma \times 1.65$. Fast but dangerous (fat tails).
2.  **Historical Simulation:** Replay last 500 days. Rank outcomes. Take the 25th worst. Captures empirical tails.
3.  **Monte Carlo:** Simulate 10,000 paths using stochastic models. Most flexible/expensive.

## III. Theoretical Framework

### 3.1 Subadditivity Failure
VaR is not a **Coherent** risk measure.
$VaR(A + B) > VaR(A) + VaR(B)$ is possible.
Diversification can *increase* VaR in non-normal distributions (e.g., owning two different catastrophic bonds).
Violates intuition that diversification reduces risk.

### 3.2 The "VaR Break"
When a loss > VaR occurs.
Backtesting counts exceptions.
If 99% VaR is breached 5 times in 100 days (5% rate), the model is flawed.
Regulators punish banks (multiplier on capital charge) for too many breaks.

## IV. Strategic Applications

### 4.1 Capital Limits
Trader Desk Limit: \$5M VaR.
Forces trader to reduce size or hedge volatility.
If correlations spike, VaR spikes, trader must sell.
Pro-cyclical feedback loop (2008).

### 4.2 Initial Margin
Clearing Houses (CCP) use VaR to set margins.
"Historical VaR with a stress period."
Ensures the losing party can pay up 99% of the time.

## V. Exercises

**Exercise 1 (Parametric vs Historical):**
In quiet markets, Parametric VaR is low.
Historical VaR "remembers" the crash 2 years ago.
Historical is stickier.

**Exercise 2 (Square Root of Time):**
$VaR_{10day} \approx VaR_{1day} \times \sqrt{10}$.
Assumes independence of daily returns.
If returns are autocorrelated (Trend), this underestimates risk.

## VI. References
-   Jorion, P. *Value at Risk*.
-   Duffie, D. & Pan, J. *An Overview of Value at Risk*.
