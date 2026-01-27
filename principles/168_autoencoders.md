# Autoencoders: Anomaly Detection and Compression

## I. Executive Summary

An **Autoencoder** is a Neural Network trained to copy its input to its output ($x \to \hat{x}$). It forces data through a "Bottleneck" (Latent Space) in the middle. By restricting the bottleneck, the network must learn the *efficient latent representation* of the market (Compression). If it fails to reconstruct an input, that input is an **Anomaly** (Flash Crash or Unique Opportunity).

## II. Formal Definitions

### Definition 2.1 (Architecture)
1.  **Encoder:** $z = f(Wx + b)$. Maps Input $\mathbb{R}^n \to$ Latent $\mathbb{R}^d$ ($d < n$).
2.  **Bottleneck:** $z$. The compressed code.
3.  **Decoder:** $\hat{x} = g(W'z + b')$. Reconstructs Input.

### Definition 2.2 (Reconstruction Loss)
$$L = || x - \hat{x} ||^2$$

## III. Theoretical Framework

### 3.1 Non-Linear PCA
If the activation function is Linear, an Autoencoder is equivalent to PCA.
With ReLU/Tanh, it performs **Non-Linear Dimensionality Reduction**.
It learns curved manifolds (e.g., the Volatility Surface) better than PCA's flat planes.

### 3.2 Denoising Autoencoder
Train with noise: $Input = x + \text{GaussianNoise}$. $Target = x$.
The network learns to subtract noise.
Application: Feed noisy market data, get clean "True Price" out.

## IV. Strategic Applications

### 4.1 Crash Detection (Anomaly)
Train AE on "Normal" market conditions (2010-2019).
Run it live.
Compute Reconstruction Error $E = ||x - \hat{x}||$.
If $E > Threshold$: The market behavior is fundamentally new (Regime Shift / Crash).
Action: De-leverage immediately.

### 4.2 Synthetic Data Generation (VAE)
**Variational Autoencoders** learn the distribution of the latent space.
We can sample random $z \sim N(0,1)$ and decode it to generate *fake* market data.
Use this to stress-test algos on "scenes that haven't happened yet but could."

## V. Exercises

**Exercise 1 (Compression):**
Input: Option Chain (100 strikes).
Bottleneck: 2 neurons.
Network learns that the 100 prices really just depend on 2 factors: (ATM Volatility, Skew).
It "Discovers" the Black-Scholes parameters automatically.

**Exercise 2 (Deep vs Wide):**
Deep Autoencoders can learn hierarchical features (Option $\to$ Skew $\to$ Volatility $\to$ Fear).
Wide Autoencoders just memorize.

## VI. References
-   Hinton, G.E., & Salakhutdinov, R.R. *Reducing the Dimensionality of Data with Neural Networks*.
-   Kingma, D.P., & Welling, M. *Auto-Encoding Variational Bayes*.
