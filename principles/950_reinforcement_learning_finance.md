# Reinforcement Learning in Finance

## I. Executive Summary

**Reinforcement Learning (RL)** differs from Supervised Learning (Prediction). It is about **Action** (Control). An Agent interacts with an Environment (The Market), takes Actions (Buy/Sell/Hold), and receives Rewards (P&L). It learns a **Policy** ($\pi$) to maximize cumulative reward. This is the closest math to **"How a Trader Thinks."**

## II. Formal Definitions

### Definition 2.1 (The MDP Tuple)
State ($S_t$): Price history, Portfolio weight, Balance.
Action ($A_t$): Buy 10, Sell 10, Do Nothing.
Reward ($R_t$): Change in Net Worth (or Sharpe Ratio).
Next State ($S_{t+1}$): Market moves.
Goal: Maximize $\sum \gamma^t R_t$.
Gamma ($\gamma$): Discount factor (Patience).

### Definition 2.2 (The Exploration-Exploitation Dilemma)
Exploit: Do what worked before (Buy Dip).
Explore: Try something new (Short Rally).
Agents must explore to learn, but exploring loses money.
Epsilon-Greedy strategy.
In Finance, Exploration is costly.
"Off-Policy Learning" allows learning from historical data without losing real money.

## III. Theoretical Framework

### 3.1 Q-Learning vs Policy Gradient
Q-Learning: Learns the *value* of being in a state (Value Function).
Policy Gradient: Learns the *action map* directly.
Financial markets are noisy.
Policy Gradient (PPO) generally works better for continuous actions (Allocation %).

### 3.2 The Simulator Problem
RL needs millions of episodes to learn.
Reality only happens once.
Must build a realistic Market Simulator.
If Simulator is simplistic (Gaussian), Agent learns to exploit the simulator, fails in reality ("Sim-to-Real Gap").
Data Augmentation (GANs) used to generate synthetic crash scenarios.

## IV. Strategic Applications

### 4.1 Portfolio Rebalancing
State: Transaction Costs, Covariance Matrix, Current Weights.
Action: Rebalance trades.
Reward: Risk-Adjusted Return net of fees.
RL discovers strategies like "Wait until deviation > threshold" (Smart Rebalancing) without being told hard rules.

### 4.2 Hedging Derivatives
Deep Hedging (JP Morgan).
Standard Black-Scholes hedging assumes continuous trading/no costs.
RL hedging learns to hedge *coarsely* to save transaction costs while staying within risk limits.
Outperforms Delta Hedging in volatile/illiquid markets.

## V. Exercises

**Exercise 1 (The Greedy Agent):**
Agent discovers "Martingale" strategy (Double down on losses).
Works great in training (High Sharpe).
Blows up in test (Ruin).
Reward function must penalize Drawdowns heavily to prevent this.

**Exercise 2 (Multi-Agent RL):**
Simulate a market with 1000 AI agents.
Some momentum, some mean reversion.
Emergent phenomena (Herding, Crashes) arise from their interaction.
Agent-Based Modeling (ABM) on steroids.

## VI. References
-   Sutton, R. & Barto, A. *Reinforcement Learning: An Introduction*.
-   Ritter, G. *Machine Learning for Trading*.
