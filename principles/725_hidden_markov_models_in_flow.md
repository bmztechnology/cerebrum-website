# Hidden Markov Models in Flow

## I. Executive Summary

**Hidden Markov Models (HMM)** assume that the market is in an unobservable "State" (e.g., Bull, Bear, Sideways / Toxic, Benign) that emits observable symbols (Price changes, Volume, Trade signs). By training an HMM on order flow (Level 3 data), traders can infer the **Hidden State** probability in real-time. This is the mathematical formalism for "Reading the Tape."

## II. Formal Definitions

### Definition 2.1 (Evaluation and Decoding)
**States ($S$):** {Accumulation, Distribution, Chop}.
**Observations ($O$):** {Uptick, Downtick, Large Buy, Large Sell}.
**Transition Matrix ($A$):** Prob($S_t \to S_{t+1}$).
**Emission Matrix ($B$):** Prob($O_k | S_j$).
**Viterbi Algorithm:** Find the most likely sequence of states given observtions.
**Forward Algorithm:** Find probability of current state.

### Definition 2.2 (Regime Switching)
Simple HMM with 2 states: Low Volatility (Noise) and High Volatility (Trend).
If $P(\text{Trend} | \text{Data}) > 0.8$, Trend Following Algo activates.
If $P(\text{Noise} | \text{Data}) > 0.8$, Mean Reversion Algo activates.
Dynamic strategy switching.

## III. Theoretical Framework

### 3.1 Informed vs Noise States
State 1: Informed Buying (Slippage high, Directional).
State 2: Informed Selling.
State 3: Noise (Low slippage, Reverting).
HMM detects state 1/2 faster than simple Moving Averages.
Because it uses *multiple* feature emissions (Volume + Price + Duration).

### 3.2 Baum-Welch Training
Unsupervised learning.
algorithm learns the matrices $A$ and $B$ from history.
It "discovers" that there are distinct regimes without being told "This is a bull market."
Often finds regimes human labeling misses (e.g., "High Volatility Chop").

## IV. Strategic Applications

### 4.1 Order Book Dynamics
State: "Liquidity Replenishment" vs "Liquidity Depletion."
If State = Depletion, and Buy Order comes $\implies$ Price Impact High.
Strategy: Don't provide liquidity in Depletion state.

### 4.2 Lead-Lag HMM
Modeling the relationship between Futures and Spot.
State: Futures Lead vs Spot Lead.
Usually Futures lead.
But sometimes (Short Squeeze in Spot), Spot leads.
HMM detects the causality inversion.

## V. Exercises

**Exercise 1 (Simulated Regime):**
Generate data from 2 Gaussian distributions ($\mu_1, \sigma_1$) and ($\mu_2, \sigma_2$).
Feed to HMM.
See if it recovers the parameters and state sequence.
Apply to SPY intra-day returns.

**Exercise 2 (Latency of Detection):**
How many ticks to realize state changed?
Trade-off: Fast detection = False Positives. Slow detection = Missed Move.
HMM provides a probability metric ($0 \to 1$ smooth) rather than binary switch, allowing position scaling.

## VI. References
-   Rabiner, L. *A Tutorial on Hidden Markov Models*.
-   Idvall, P. *Algorithmic Trading using HMM*.
