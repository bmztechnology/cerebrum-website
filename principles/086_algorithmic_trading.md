# Algorithmic Trading: Quantitative Execution

## I. Executive Summary

Algorithmic Trading ("Algo" or "Black Box") is the use of computer programs to execute a defined set of instructions for placing a trade. It removes human emotion and cognitive bias. Modern markets are 70-80% algorithmic. Studying algos involves understanding the **Alpha** (Strategy logic), **Execution** (Slippage minimization), and **Infrastructure** (Latency).

## II. Formal Definitions

### Definition 2.1 (The Algo Function)
$$T(t) = f(P_t, V_t, I_t, \theta)$$
Where Trade $T$ is a function of Price, Volume, Indicators, and Parameters $\theta$.

### Definition 2.2 (Backtesting)
Running the function $f$ on historical data $H$ to estimate Expected Value $E$.
-   **In-Sample:** Data used to train/optimize parameters.
-   **Out-of-Sample:** Unseen data used to validate.
-   **Overfitting:** When $R^2_{in} \gg R^2_{out}$. The model memorized the noise.

## III. Strategy Classifications

### 3.1 Mean Reversion (Statistical Arbitrage)
"If Price deviates from Mean by $X\sigma$, Fade."
-   *Assumption:* Markets are efficient/stationary.
-   *Risk:* Momentum kills Mean Reversion (The "Steamroller").

### 3.2 Momentum / Trend Following
"If Price breaks High($N$), Buy."
-   *Assumption:* Trends persist (Fat Tails).
-   *Risk:* Range-bound chop (Bleeding slowly).

### 3.3 HFT (High Frequency)
Latency arbitrage (Front-running, Rebate harvesting).
-   Holding time: Microseconds.
-   *Barrier:* Needs FPGA hardware and Co-location. Not for retail.

## IV. Strategic Applications (Retail Algo)

### 4.1 Expert Advisors (EAs in MT5)
Coded in MQL5 or Python.
Structure:
1.  **OnInit():** Setup indicators.
2.  **OnTick():** Check Logic on every price update.
    -   `if (RSI < 30 && Close > MA) OrderSend(OP_BUY);`
3.  **OnDeinit():** Clean up.

### 4.2 Optimization (Genetic Algorithms)
Finding the best parameters (e.g., MA Period, Stop Loss).
-   *Danger:* Curve Fitting. "Optimizing" a Strategy 10,000 times will find a lucky combination that made millions in the past but will fail tomorrow.
-   *Solution:* Walk-Forward Optimization.

## V. Exercises

**Exercise 1 (Logic Flow):**
Pseudocode a simple crossover bot.
`Fast = EMA(10); Slow = EMA(50);`
`if (Fast[1] < Slow[1] and Fast[0] > Slow[0]): Buy.`
`if (Fast[1] > Slow[1] and Fast[0] < Slow[0]): Sell.`
What is the flaw? (Does not check for Filters/Spreads/Time of Day).

**Exercise 2 (Robustness):**
Strategy A wins 100% of trades over 1 month.
Strategy B wins 55% of trades over 10 years.
Which is better? (B. A is likely a toxic "Martingale" or grid without stops).

**Exercise 3 (Slippage):**
Your backtest says profit \$1000.
Real trading says loss -\$200.
Why?
(Tick data quality, Spread variance, Execution latency).

## VI. References
-   Pardo, R. *The Evaluation and Optimization of Trading Strategies*.
-   Carver, R. *Systematic Trading*.
-   Chan, E. *Quantitative Trading*.
