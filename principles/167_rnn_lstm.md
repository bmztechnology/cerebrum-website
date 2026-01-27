# Recurrent Neural Networks (LSTM/GRU): Sequence Memory

## I. Executive Summary

Standard Neural Nets (FeedForward) assume inputs are independent. Financial data is sequential; Today depends on Yesterday. **Recurrent Neural Networks (RNNs)** have loops, allowing information to persist. The **Long Short-Term Memory (LSTM)** architecture solves the "Short term memory" problem of classic RNNs, allowing the model to learn trends and dependencies that span hundreds of trading days.

## II. Formal Definitions

### Definition 2.1 (RNN Cell)
$h_t = \tanh(W x_t + U h_{t-1} + b)$.
Output depends on Input $x_t$ and Hidden State $h_{t-1}$ (Memory).

### Definition 2.2 (LSTM Gates)
Controls the flow of information.
1.  **Forget Gate ($f_t$):** What to delete from memory? (e.g., Old Trend ended).
2.  **Input Gate ($i_t$):** What new info to store? (e.g., News shock).
3.  **Output Gate ($o_t$):** What to tell the next layer?
$$C_t = f_t C_{t-1} + i_t \tilde{C}_t$$
$C_t$ is the Cell State (Long Term Memory Highway).

## III. Theoretical Framework

### 3.1 Vanishing Gradient Solution
In standard RNN, gradients multiply ($W^t$). If $W<1$, gradient vanishes. Memory dies.
In LSTM, the Cell State $C_t$ has an additive update (+).
Gradients flow back through the (+) highway without decaying.
Allows learning "Yearly Seasonality" from daily data.

### 3.2 GRU (Gated Recurrent Unit)
Simplified LSTM. Merges Forget and Input gates.
Faster to train. Often performs equally well on financial noise.

## IV. Strategic Applications

### 4.1 Sequence-to-Sequence (Seq2Seq)
Input: Sequence of last 30 closes.
Encoder: Compresses into Vector $v$.
Decoder: Unpacks $v$ into Forecast of next 5 closes.
Used for multi-step path prediction.

### 4.2 Volatility Forecasting
LSTM can take raw squared returns $r^2$ as input and learn the GARCH decay pattern automatically, without enforcing the rigid parameter structure of GARCH. Often beats GARCH in high-vol regimes.

## V. Exercises

**Exercise 1 (Stationarity):**
Can you update LSTM with raw prices [100, 101, ... 5000]?
No. As price leaves the training range [0, 200], the Tanh activation saturates.
Must feed **Log Returns** or **Differenced** data.

**Exercise 2 (Lookback):**
Lookback Window $T$.
If $T=10$, model only sees 2 weeks.
If $T=252$, model sees a year.
Tradeoff: Noise vs Context.
Usually, $T=60$ (Quarter) is a sweet spot for Daily data.

## VI. References
-   Hochreiter, S., & Schmidhuber, J. *Long Short-Term Memory*.
-   Chung, J. *Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling*.
