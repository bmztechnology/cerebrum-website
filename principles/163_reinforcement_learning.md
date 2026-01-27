# Reinforcement Learning (RL): The Agent

## I. Executive Summary

Supervised Learning predicts values (Price) from static data. **Reinforcement Learning** learns optimal **Actions** (Buy/Sell) by interacting with an environment. It is the closest AI paradigm to a human trader. The Agent explores the market, receives Rewards (PnL), and updates its Policy to maximize long-term cumulative return (Value Function).

## II. Formal Definitions

### Definition 2.1 (Markov Decision Process - MDP)
The math of the environment.
-   **State ($S_t$):** Current market condition (Price, Vol, Holdings).
-   **Action ($A_t$):** Buy, Sell, Hold.
-   **Reward ($R_{t+1}$):** PnL - TransactionCost.
-   **Transition ($P$):** Probability that market moves to $S_{t+1}$ given $A_t$.

### Definition 2.2 (The Bellman Equation)
The recursive definition of value.
$$V(s) = \max_a \left( R(s,a) + \gamma \sum P(s'|s,a) V(s') \right)$$
-   $V(s)$: Value of being in state $s$.
-   $\gamma$: Discount factor (patience).

## III. Theoretical Framework

### 3.1 Exploration vs Exploitation
-   **Exploration:** Determining if a new strategy works (Random actions). Costly in the short term.
-   **Exploitation:** Betting heavily on what works.
*Epsilon-Greedy Strategy:* 10% of time, try something random. 90% of time, do the best known thing.

### 3.2 Credit Assignment Problem
You Buy at $t=1$. Sell at $t=100$. Profit $50.
Which action was responsible? The Buy? The Hold at $t=50$?
RL algorithms (Eligibility Traces) solve this by propagating reward back through time.

## IV. Strategic Applications

### 4.1 Portfolio Rebalancing
State: Weights of 10 assets.
Action: Rebalance vector.
Reward: Sharpe Ratio of portfolio over next month.
RL learns to reduce turnover (Trading Cost) automatically because High Turnover reduces Reward.

### 4.2 Order Execution
State: Order Book Depth, Time remaining.
Action: Limit Order price or Market Order.
Reward: VWAP Slippage.
Deep RL (AlphaGo style) beats human traders by learning subtle microstructure manipulations.

## V. Exercises

**Exercise 1 (Reward Hacking):**
If Reward = Unrealized PnL.
The Agent learns to holds losers forever (never realizes loss) and sells winners immediately.
*Result:* Massive Drawdown.
*Fix:* Reward must include Mark-to-Market changes + Penalty for Drawdown.

**Exercise 2 (Discount Factor):**
$\gamma = 0$: Agent is greedy/myopic. Maximizes next tick PnL. (Scalper).
$\gamma = 0.99$: Agent is patient. Holds for trends. (Swing Trader).

## VI. References
-   Sutton, R.S., & Barto, A.G. *Reinforcement Learning: An Introduction*.
-   Mnih, V. *Human-level control through deep reinforcement learning*.
