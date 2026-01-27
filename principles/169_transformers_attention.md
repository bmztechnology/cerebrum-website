# Transformer Models: Attention is All You Need

## I. Executive Summary

The **Transformer** (2017) rendered LSTMs obsolete. By using **Self-Attention**, it processes the entire sequence of price history in parallel, rather than step-by-step. It calculates how much "Attention" every time step should pay to every other time step. In finance, this allows the model to instantly correlate a price drop today with a specific Fed announcement 3 months ago, ignoring the noise in between.

## II. Formal Definitions

### Definition 2.1 (Self-Attention)
$$Attention(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right) V$$
-   **Query ($Q$):** What I am looking for (Current state).
-   **Key ($K$):** What I contain (History states).
-   **Value ($V$):** The information content.
The dot product $QK^T$ measures similarity. We read data $V$ from similar history $K$.

### Definition 2.2 (Multi-Head Attention)
Run 8 Attention heads in parallel.
Head 1 looks for Trend.
Head 2 looks for Volatility.
Head 3 looks for Seasonality.
Concatenate results.

## III. Theoretical Framework

### 3.1 Positional Encoding
Transformers have no native concept of "Order" (unlike RNNs).
We must add a sine/cosine wave to the input embeddings so the model knows that $t=100$ is after $t=1$.
$$PE(pos, 2i) = \sin(pos / 10000^{2i/d})$$

### 3.2 Global Receptive Field
LSTM receptive field decays over time ($O(N)$).
Transformer receptive field is infinite/global ($O(1)$ path length).
Any point can talk to any point directly.
Perfect for detecting remote causal triggers (e.g., Yield Curve Inversion 18 months ago causing Recession today).

## IV. Strategic Applications

### 4.1 Time-Series Transformers (TST)
Replace Word Embeddings with Price/Volume Embeddings.
Predict next candle.
*Advantage:* handling limit order book snapshots (LOB) as "Sentences" of orders.

### 4.2 Cross-Attention (Multi-Modal)
History = Price Series (Query).
Context = News Headlines (Key/Value).
The model uses Price context to Query relevant News.
"Why did price drop?" $\to$ Attends to "CEO Resigns" headline.

## V. Exercises

**Exercise 1 (Sequence Length):**
Self-Attention is $O(N^2)$ complexity.
If Sequence = 10 years of minutes (N huge). Memory explodes.
Solution: Sliding Window Attention or Linear Attention (Linformer).

**Exercise 2 (Stationarity):**
Transformers are powerful memorizers.
If you train on non-stationary prices, they memorize the 2020 Bull Run.
Must train on Returns or Rank-normalized data to force generalization.

## VI. References
-   Vaswani, A., et al. *Attention Is All You Need*.
-   Lim, B., et al. *Temporal Fusion Transformers for Interpretable Multi-horizon Time Series Forecasting*.
