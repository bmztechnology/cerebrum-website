# Natural Language Processing (NLP): Sentiment Analysis

## I. Executive Summary

Markets move on news ("Powell speaks," "War declared"). Numerical models (Price/Vol) are blind to this until the move happens. **NLP** allows algos to read Reuters, Twitter, and SEC filings, quantifying "Sentiment" into a tradable signal. Modern Transformers (BERT, GPT) understand context, sarcasm, and nuance, far surpassing simple Keyword counting.

## II. Formal Definitions

### Definition 2.1 (Word Embeddings)
Mapping words to vectors in $\mathbb{R}^n$.
$King - Man + Woman \approx Queen$.
-   **Word2Vec:** Static embeddings.
-   **Contextual (BERT):** The vector for "Bank" in "Bank of America" is different from "River Bank."

### Definition 2.2 (Sentiment Score)
$S \in [-1, 1]$.
-   -1: Extremely Bearish/Fearful.
-   0: Neutral.
-   +1: Extremely Bullish/Greedy.

## III. Theoretical Framework

### 3.1 The Transformer Architecture (Attention)
$Attention(Q, K, V) = softmax(\frac{QK^T}{\sqrt{d_k}})V$.
Mechanism that allows the model to "focus" on specific words (e.g., "Missed earnings") while ignoring noise ("Company reported").
Dominates LSTM for text processing.

### 3.2 Named Entity Recognition (NER)
Identifying *who* the news is about.
"Apple sues Samsung."
Entity 1: AAPL (Actor). Entity 2: SSNLF (Target).
Sentiment flows from Actor to Target.

## IV. Strategic Applications

### 4.1 Earnings Call Analysis
Parse the CEO's speech vs CFO's speech.
-   Measure "Vagueness" (Complex words, passive voice).
-   High Vagueness + Negative Sentiment $\implies$ Short signal. (Management is hiding something).

### 4.2 Twitter/X Momentum
Filter for "\$TICKER". Remove Bots.
Calculate Velocity of mention volume.
If Volume spikes AND Sentiment is positive $\implies$ Retail Pump (Meme Stock). Join for 1 hour, then fade.

## V. Exercises

**Exercise 1 (Ambiguity):**
"The unexpected loss was smaller than feared."
Keyword "Loss" = Negative.
Keyword "Feared" = Negative.
Bag-of-Words Model: Very Negative.
Human/BERT: Bullish (Relief).
Context is Key.

**Exercise 2 (Latency):**
News Algos trade in microseconds.
If you parse news in Python (100ms), you are too late.
You provide liquidity to the fastest reader.
Use NLP for *daily* or *hourly* strategy, not news scaping arbitrage unless you have FPGA.

## VI. References
-   Vaswani, A. *Attention Is All You Need*.
-   Loughran, T., & McDonald, B. *When Is a Liability Not a Liability? Textual Analysis, Dictionaries, and 10-Ks*.
