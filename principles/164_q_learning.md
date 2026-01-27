# Q-Learning: Temporal Difference Control

## I. Executive Summary

**Q-Learning** is a model-free RL algorithm. It learns a Quality Function $Q(s,a)$ which tells the agent: "If I am in State $S$ and take Action $A$, what is the total discounted reward I expect to get forever?" Once $Q$ is learned (via a Q-Table or Deep Q-Network), the optimal strategy is simply to pick the Action with the highest $Q$ value.

## II. Formal Definitions

### Definition 2.1 (The Q-Update Rule)
$$Q_{new}(s,a) = Q(s,a) + \alpha [R + \gamma \max Q(s', a') - Q(s,a)]$$
-   **Target:** $R + \gamma \max Q(s', a')$. (Realized reward + Best future guess).
-   **Error:** Target - Current Estimate.
-   We gently nudge $Q$ towards the Target.

### Definition 2.2 (Deep Q-Network DQN)
For markets, the State space is infinite (Price is continuous). A Q-Table is impossible.
Use a Neural Network to approximate the function: $Q(s,a) \approx NN(s)$.
Input: State. Output: Q-values for Buy/Sell/Hold.

## III. Theoretical Framework

### 3.1 Experience Replay
Markets are correlated time series.
Training a NN on sequential data ($S_t, S_{t+1}$) leads to overfitting (Catastrophic Forgetting).
*Solution:* Store transitions in a generic "Memory Buffer". Sample random batches to train. Breaking temporal correlation stabilizes the Math.

### 3.2 Target Network
The Target $Q$ changes every step. Chasing a moving target makes learning unstable.
*Solution:* Use a frozen copy of the network for Targets. Update it only every 1000 steps.

## IV. Strategic Applications

### 4.1 Market Making
State: Inventory, Bid-Ask Spread, Volatility.
Actions: Widen Spread, Tighten Spread, Skew Quote.
Reward: Profit - InventoryRisk.
DQN learns to widen spreads during high volatility (protection) and skew quotes to unload inventory.

### 4.2 Optimal Stopping (American Option)
Q-Learning naturally solves Optimal Stopping.
Action space: {Hold, Exercise}.
If $Q(s, Exercise) > Q(s, Hold)$, exercise.
It learns the Snell Envelope without needing the PDE.

## V. Exercises

**Exercise 1 (The Cliff):**
Agent walks near a cliff (Bankruptcy).
If $\epsilon$ (Randomness) is high, Q-Learning will learn to stay far away from the cliff (Safe path) because a random move might kill it.
SARSA (On-Policy) is safer than Q-Learning (Off-Policy) in risk-sensitive domains.

**Exercise 2 (Convergence):**
Does Q-Learning work in Non-Stationary markets?
No. It assumes transition probabilities $P(s'|s,a)$ are constant.
In changing regimes, you must keep Explore rate $\epsilon > 0$ or use Rolling Windows.

## VI. References
-   Watkins, C.J.C.H. *Learning from Delayed Rewards*.
-   Mnih, V. *Playing Atari with Deep Reinforcement Learning*.
