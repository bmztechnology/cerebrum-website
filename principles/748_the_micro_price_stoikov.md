# The Micro Price Stoikov

## I. Executive Summary

The **Mid Price** ($ \frac{Bid+Ask}{2} $) is a noisy estimator of fair value because it ignores the **Imbalance** in the Order Book. The **Micro-Price** (Stoikov, 2017) is a theoretical "Fair Value" adjusted for the probability of the next price move being a tick up or a tick down based on LOB depth. It is a superior signal for HFT market making and execution.

## II. Formal Definitions

### Definition 2.1 (The Imbalance $I$)
$$ I = \frac{V_b}{V_b + V_a} $$
$V_b$: Volume at Best Bid.
$V_a$: Volume at Best Ask.
If $V_b = 900, V_a = 100 \implies I = 0.9$.
Pressure is up.

### Definition 2.2 (The Micro-Price Formula)
$$ P_{micro} = P_{mid} + \text{Spread} \times g(I) $$
Where $g(I)$ is an adjustment function derived from the Markov chain of price moves.
Approximation: $P_{micro} \approx P_{ask} \cdot I + P_{bid} \cdot (1-I)$.
If $I=0.5$, $P_{micro} = Mid$.
If $I=1.0$, $P_{micro} = Ask$.
The price "leans" towards the heavy side.

## III. Theoretical Framework

### 3.1 Markov Chain Model
State: Imbalance $I_t$.
Transitions: $I_t \to I_{t+1}$ or Price Move.
The model calculates the expected *future* mid-price given the *current* state of the book.
Result: The Micro-Price anticipates the next tick.

### 3.2 Lead-Lag Effect
Micro-Price leads Mid-Price.
If Micro-Price crosses the spread (e.g., $P_{micro} > Ask$), a price jump is imminent.
HFTs use this to "Cross the spread" aggressively before the price moves.

## IV. Strategic Applications

### 4.1 Market Making Skew
Instead of centering quotes around Mid Price, center around Micro-Price.
If $I=0.9$ (Buying pressure), Micro-Price moves up.
MM raises Bid (to capture volume) and raises Ask (to avoid selling cheap).
Reduces Adverse Selection.

### 4.2 Execution Algo Logic
"Don't Buy if $P_{micro} < P_{mid}$."
Wait for the imbalance to mean revert.
"Buy Aggressively if $P_{micro} > P_{mid} + \text{Threshold}$."
The book is about to crumble (Liquidity hole).

## V. Exercises

**Exercise 1 (Visualizing the Drift):**
Plot $P_{mid}$ and $P_{micro}$ on a 1-second chart.
Observe that $P_{micro}$ is smoother and reacts *before* the discrete tick jump of $P_{mid}$.
The "Continuous" fair value.

**Exercise 2 (The Illusion of Stability):**
Mid Price is stable.
But $V_a$ is shrinking rapidly (Cancelations).
$P_{micro}$ starts rising.
Trader using only Mid Price is blind.
Trader using Micro-Price sees the spoof/cancel.

## VI. References
-   Stoikov, S. *The Micro-Price: A High Frequency Estimator of Future Prices*.
-   Lehalle, C. *Limit Order Book reconstruction*.
