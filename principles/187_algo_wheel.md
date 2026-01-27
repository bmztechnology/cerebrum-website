# Algo Wheel: The Optimization of Execution

## I. Executive Summary

The **Algo Wheel** is an automated workflow used by Buy-Side desks to route orders to different brokers based on data-driven performance metrics rather than relationships. It is A/B testing for execution. The Wheel randomizes order flow (controlling for difficulty) to Brokers A, B, and C, measures their TCA performance, and allocates future market share to the winner.

## II. Formal Definitions

### Definition 2.1 (The Protocol)
1.  **bucket Orders:** Group incoming orders by Difficulty (e.g., "Liquid/Low Vol", "Illiquid/High Vol").
2.  **Random Assignment:** Within a bucket, assign 30% to Broker X, 30% to Y, 30% to Z.
3.  **Measurement:** Calculate IS (Implementation Shortfall) for each.
4.  **Reweighting:** Next month, give Broker X 50% if they had lowest IS.

### Definition 2.2 (Biases)
-   **Easy-Trade Bias:** Giving Broker A only AAPL and Broker B only Small Caps will make A look better.
-   **Timing Bias:** Broker A executed in the morning (Low Vol), B in the afternoon (High Vol).
The Wheel MUST ensure "Randomized Controlled Trial" (RCT) conditions.

## III. Theoretical Framework

### 3.1 Multi-Armed Bandit Problem
The Algo Wheel is a Reinforcement Learning problem (Exploration vs Exploitation).
-   **Exploit:** Send flow to the best current broker.
-   **Explore:** Send some flow to bad brokers to see if they improved.
Goal: Minimize cumulative regret (Total Trading Cost).

### 3.2 Performance Attribution
Did the trade fail because the Broker is bad, or because the Market crashed?
TCA uses "Market Adjusted Cost."
$$Cost_{adj} = Cost_{raw} - \beta \times MarketMove$$
The Wheel evaluates $Cost_{adj}$.

## IV. Strategic Applications

### 4.1 Custom Algos
Brokers fight for Wheel share by building "Custom Logic" for the client.
"If Spread > 2 ticks, use Dark Pool. If Spread = 1 tick, use Lit."
The Wheel objectively validates if this custom logic adds value.

### 4.2 Negotiation Leverage
"Your VWAP algo underperformed Goldman by 3bps last quarter. Fix it or your allocation drops to 5%."
Transforms Execution from a "Service" to a "Commodity" with strict SLAs.

## V. Exercises

**Exercise 1 (Sample Size):**
Broker A wins on 5 trades.
Is A better?
No. Statistical significance requires hundreds of trades.
Wheel cycles are usually Monthly or Quarterly.

**Exercise 2 (The Reset):**
Broker B changes their Smart Order Router code.
They ask for a "Reset."
The Wheel puts them back in "Probation" bucket (small flow) to re-prove competence.

## VI. References
-   Multi-Armed Bandit Algorithms (Sutton & Barto).
-   Industry Whitepapers (Virtu, Joli).
