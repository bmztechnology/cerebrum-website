# Neural Networks: The Universal Approximator

## I. Executive Summary

Biological neurons fire when input signals exceed a threshold. Artificial **Neural Networks (ANN)** mimic this. A Multilayer Perceptron (MLP) consists of layers of nodes connected by weights and non-linear activation functions. The **Universal Approximation Theorem** proves that a Neural Network with one hidden layer can approximate *any* continuous function (given enough neurons). This makes them the ultimate "Black Box" for modeling the chaotic pricing function of financial markets.

## II. Formal Definitions

### Definition 2.1 ( The Neuron / Perceptron)
$$y = \sigma( \sum w_i x_i + b )$$
-   $w_i$: Weights (Synaptic strength).
-   $b$: Bias (Threshold).
-   $\sigma$: Activation Function (Sigmoid, ReLU, Tanh).

### Definition 2.2 (Attacking Linearity)
Without $\sigma$, a Neural Net is just Linear Regression ($W_2(W_1 x) = W_{new} x$).
The non-linearity $\sigma$ allows the network to bend and fold the decision boundary to fit complex data manifolds.

## III. Theoretical Framework

### 3.1 Activation Functions
-   **Sigmoid ($1 / (1+e^{-x})$):** squashes to [0,1]. Good for probability. Vanishing Gradient problem.
-   **ReLU ($\max(0,x)$):** Standard for Hidden Layers. Prevents gradient vanish. Fast.
-   **Tanh:** [-1, 1]. Zero-centered.

### 3.2 Deep Learning Implications
"Deep" means many hidden layers.
Layer 1 learns simple edges (Trends).
Layer 2 learns shapes (Head and Shoulders).
Layer 3 learns objects (Market Regimes).
Hierarchical feature extraction.

## IV. Strategic Applications

### 4.1 Price Prediction (Regression)
Inputs: Order Book (L2 data).
Hidden Layers: [128, 64, 32].
Output: Price 10ms ahead.
HFT firms use simple Feed-Forward Nets on FPGA hardware for nanosecond inference.

### 4.2 Probability Estimation (Classification)
Output Layer: Softmax.
Returns probabilities: [Up: 0.6, Down: 0.3, Flat: 0.1].
Trade only if Confidence > Threshold.

## V. Exercises

**Exercise 1 (XOR Problem):**
Linear model cannot solve XOR (0,0->0, 0,1->1, 1,0->1, 1,1->0).
Neural Net with 1 hidden layer (2 neurons) solves it easily.
Markets are full of XOR traps (e.g., Good News is Bullish, UNLESS Inflation is High).

**Exercise 2 (Degrees of Freedom):**
A network with 1000 parameters trained on 500 data points will have 0 training error.
And 100% test error.
Rule of Thumb: Need 10x samples per parameter.

## VI. References
-   Rosenblatt, F. *The Perceptron*.
-   Hornik, K. *Multilayer Feedforward Networks are Universal Approximators*.
