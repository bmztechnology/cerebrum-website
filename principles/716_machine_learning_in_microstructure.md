# Machine Learning in Microstructure

## I. Executive Summary

**Machine Learning (ML)** in Microstructure focuses on short-term prediction (Next Tick, Next Second). Unlike Fundamental ML (Predicting earnings), Microstructure ML uses **Order Book features** (OBI, Depth, Flow) to predict **Price Direction** or **Volatility**. Models like **LSTMs**, **CNNs** (on LOB images), and **Reinforcement Learning** (Execution optimization) are replacing simple linear regressions in HFT.

## II. Formal Definitions

### Definition 2.1 (Feature Engineering)
Inputs:
1. **OBI:** Imbalance at Level 1, 2, 3.
2. **OFI (Order Flow Imbalance):** Net flow of orders.
3. **Price Derivatives:** Velocity, Acceleration.
4. **Volume profile.**
Target: Mid-price change in $\Delta t$ seconds (Classification: Up, Down, Flat).

### Definition 2.2 (CNNs on LOB)
Treating the Order Book as an Image (Heatmap).
X-axis: Time. Y-axis: Price Levels. Color: Volume.
Convolutional Neural Networks (CNN) detect patterns (e.g., liquidity squeeze, layering) visually.
DeepLOB (Oxford).

## III. Theoretical Framework

### 3.1 Non-Linearity
Microstructure is non-linear.
Small imbalance might do nothing.
Huge imbalance might trigger avalanche.
Neural Nets capture these thresholds and interactions better than linear Logic/Stoikov models.

### 3.2 Overfitting Risk
High Frequency data is noisy (Low Signal-to-Noise).
ML models prone to memorizing noise.
Solution: Feature Importance pruning.
Regularization.
Purged K-Fold Cross Validation (Lopez de Prado) to prevent leakage.

## IV. Strategic Applications

### 4.1 Reinforcement Learning for Execution
Agent: Smart Router.
State: LOB, Spread, Inventory.
Action: Limit Buy, Market Buy, Wait.
Reward: -Implementation Shortfall.
The Agent learns "Patience" in calm markets and "Aggression" in moving markets via Q-Learning.
JP Morgan's LOXM.

### 4.2 Alpha Generation
Predicting the "Next Tick."
If Prob(Up) > 60%.
Join the Bid.
If Filled, immediate profit potential.
Requires ultra-low latency inference (FPGA implementation of Neural Nets).

## V. Exercises

**Exercise 1 (The Classification Problem):**
3-Class problem (Up, Down, Flat).
Classes are imbalanced (Market is Flat 90% of the time).
Model predicts "Flat" always $\implies$ 90% Accuracy.
Useless.
Need "Precision" on the Up/Down predictions. Cohen's Kappa.

**Exercise 2 (Feature Importance):**
Run Random Forest.
Result: OBI at Level 1 is #1 feature.
OBI at Level 10 is noise.
Confirms theory: Top of Book matters most.

## VI. References
-   Zhang, Z. *DeepLOB: Deep Convolutional Neural Networks for Limit Order Books*.
-   Kearns, M. *Machine Learning for Trading*.
