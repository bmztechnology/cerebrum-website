# Gradient Descent: The Learning Algorithm

## I. Executive Summary

Gradient Descent is the optimization algorithm used to train Machine Learning models (Neural Networks, Linear Regression). It minimizes a **Loss Function** (Error) by iteratively moving in the direction of steepest descent (negative gradient). In Trading, it is used to optimize strategy parameters and fit predictive models to historical data.

## II. Formal Definitions

### Definition 2.1 (Update Rule)
To find $\theta$ that minimizes $J(\theta)$:
$$\theta_{new} = \theta_{old} - \alpha \nabla J(\theta)$$
-   $\theta$: Parameters (Weights).
-   $\alpha$: Learning Rate (Step size).
-   $\nabla J$: Gradient of Loss.

### Definition 2.2 (Cost Functions $J$)
-   **MSE (Regression):** $\frac{1}{N} \sum (y - \hat{y})^2$.
-   **Sharpe Loss (Trading):** $- \frac{E[R]}{\sigma_R}$. (Minimize negative Sharpe).

## III. Theoretical Framework

### 3.1 Convexity vs Non-Convexity
-   **Convex (Bowl):** Gradient Descent guarantees finding Global Minimum (e.g., Logistic Regression).
-   **Non-Convex (Mountains):** Neural Nets have many Local Minima. The algorithm might get stuck in a suboptimal valley.
    -   *Solvers:* Momentum, RMSProp, Adam help jump out of local minima.

### 3.2 The Learning Rate ($\alpha$)
-   **Too Small:** Converges forever.
-   **Too Large:** Overshoots and diverges (Exploding Gradient).
-   *Decay:* Reduce $\alpha$ over time to "settle" into the minimum.

## IV. Strategic Applications

### 4.1 Strategy Optimization
Parameter Search (Stop Loss, Take Profit, MA Length).
Instead of Brute Force (Grid Search), calculate the gradient of the PnL with respect to the Stop Loss.
Move the Stop Loss in the direction that increases PnL.
*Warning:* PnL surfaces are seemingly non-differentiable (discrete steps). Requires approximations or "Soft" PnL functions.

### 4.2 Neural Networks for Alpha
Deep Learning tries to map Inputs (Order Book state) to Output (Next Price Tick).
Backpropagation is simply the Chain Rule of Calculus applied to calculate $\nabla J$ for Gradient Descent.

## V. Exercises

**Exercise 1 (Manual Step):**
$J(\theta) = \theta^2$. (Min at 0).
Current $\theta = 10$. Gradient $2\theta = 20$.
$\alpha = 0.1$.
Update: $\theta = 10 - 0.1(20) = 8$.
Update: $\theta = 8 - 0.1(16) = 6.4$.
It converges towards 0.

**Exercise 2 (Momentum):**
Why use Momentum?
If the gradient is noisy (Stochastic), momentum acts as a Moving Average filter, keeping the descent smooth and directed.

## VI. References
-   Goodfellow, I., Bengio, Y., Courville, A. *Deep Learning*.
-   Ng, A. *Machine Learning Course Notes*.
