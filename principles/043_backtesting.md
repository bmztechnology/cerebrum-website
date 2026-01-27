# Backtesting: Historical Simulation and Verification

## I. Executive Summary

Backtesting is the scientific process of applying a trading strategy to historical data to estimate its future performance. It is the bridge between a theoretical hypothesis and live capital deployment. Ideally, it provides a "proof of concept." However, without rigorous statistical controls, backtesting is prone to overfitting, look-ahead bias, and survivorship bias, often rendering the results purely illusory ("Optimization Bias"). As the quantitative adage goes: *"If you torture the data long enough, it will confess to anything."*

## II. Formal Definitions

### Definition 2.1 (The Simulation Loop)
For each time step $t$ in historical set $T$:
1.  **Data Ingestion:** Feed market state $S_t$ to Algorithm.
2.  **Signal Generation:** Algorithm outputs Vector $A_t$ (Buy/Sell/Hold).
3.  **Execution Simulation:** Calculate $P_{fill}$ based on assumed liquidity/slippage.
4.  **Portfolio Update:** Update Equity $E_t = E_{t-1} + PnL_t$.

### Definition 2.2 (Key Metrics)
-   **CAGR:** Compound Annual Growth Rate.
-   **Max Drawdown (MDD):** Peak-to-Valley decline.
-   **Sharpe Ratio:** $\frac{R_p - R_f}{\sigma_p}$.
-   **Expectancy:** $(Win\% \times AvgWin) - (Loss\% \times AvgLoss)$.

## III. Common Biases and Fallacies

### 3.1 Overfitting (Curve Fitting)
Creating a model with too many parameters (degrees of freedom) that memorizes the noise of the specific dataset rather than learning the signal.
-   *Symptom:* Great backtest, terrible live performance.
-   *Solution:* Out-of-Sample (OOS) testing and Walk-Forward Analysis.

### 3.2 Look-Ahead Bias
Using information at time $t$ that was not actually available until $t+1$.
-   *Example:* Calculating entry based on the `High` or `Close` of the *current* bar. In reality, you don't know the High until the bar closes.
-   *Correction:* Strategy must calculate signals on $Open_{t+1}$ using data from $Close_t$.

### 3.3 Survivorship Bias
Testing on a dataset of *currently* existing assets.
-   *Error:* Ignoring companies/pairs that went bankrupt or delisted during the test period.
-   *Result:* Artificially inflated returns.

## IV. Quality Control Methodologies

### 4.1 Walk-Forward Analysis (WFA)
A rolling window approach.
1.  **Optimize** parameters on Year 1 (In-Sample).
2.  **Test** fixed parameters on Year 2 (Out-of-Sample).
3.  **Roll** forward: Optimize Year 2, Test Year 3.
4.  Stitch OOS results together. This simulates the reality of periodic re-optimization.

### 4.2 Monte Carlo Simulation
Randomizing the order of trades to create 10,000 alternative equity curves.
-   *Purpose:* Evaluate the probability of Ruin.
-   *Insights:* "My backtest had a 10% drawdown, but 5% of Monte Carlo runs show a 40% drawdown."

### 4.3 Robustness Testing (Parameter Stability)
If $SMA(200)$ is profitable, then $SMA(195)$ and $SMA(205)$ should also be profitable. If profits collapse when you change a parameter by 2%, the strategy is overfitted (Brittle).

## V. Advanced Implementation Issues

### 5.1 Modeling Transaction Costs
Many strategies (especially Scalping) fail solely due to costs.
The simulation must deduce:
$$PnL_{net} = PnL_{gross} - (Spread + Commission + Slippage)$$
A robust backtest often assumes a "Worst Case" slippage model.

### 5.2 Tick vs Bar Data
-   **Bar Data (OHLC):** Fast, but misses intra-candle path. Did price hit Stop or Target first? (The "Peeking" problem).
-   **Tick Data:** Accurate, but computationally heavy. Essential for reliable testing of tight stops.

## VI. Exercises

**Exercise 1 (Bias Identification):**
An algorithm buys when the daily Close is higher than the Open. The code executes a Market Buy at the Open of the *same day* if condition met.
Identify the specific bias here. Why is this impossible in real life?

**Exercise 2 (Expectancy verification):**
Strategy Stats:
-   Win Rate: 40%
-   Avg Win: $500
-   Avg Loss: $200
-   Trades/Year: 100
a) Calculate Expectancy per trade.
b) Calculate Total Net Profit.
c) If Win Rate drops to 30%, is it still profitable?

**Exercise 3 (Optimization):**
You optimize a MACD strategy and find the perfect settings are (11, 23, 8). The neighboring settings (12, 26, 9) lose money.
Would you trade this system? Explain using the concept of "Parameter Stability Islands."

## VII. References
-   Pardo, R. (2008). *The Evaluation and Optimization of Trading Strategies*.
-   Aronson, D. (2006). *Evidence-Based Technical Analysis*.
-   Jansen, S. (2020). *Machine Learning for Algorithmic Trading*.
