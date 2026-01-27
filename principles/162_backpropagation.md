# Backpropagation: The Chain Rule Engine

## I. Executive Summary

How does a Neural Network learn? It makes a guess, measures the error, and attributes blame to each weight in the network. **Backpropagation** (Backprop) is the algorithm that efficiently computes the gradient of the Loss Function with respect to every weight by applying the **Chain Rule** of Calculus recursively from the output layer backwards. It is the engine of the AI revolution.

## II. Formal Definitions

### Definition 2.1 (The Chain Rule)
If $y = f(u)$ and $u = g(x)$, then:
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

### Definition 2.2 (Backprop Algorithm)
1.  **Forward Pass:** Compute $\hat{y}$. Calculate Loss $L$.
2.  **Backward Pass:**
    Compute $\delta^L = \nabla_a L \odot \sigma'(z^L)$.
    Propagate error $\delta^{l} = ((W^{l+1})^T \delta^{l+1}) \odot \sigma'(z^l)$.
    Compute Gradients $\frac{\partial L}{\partial w} = \delta^l (a^{l-1})^T$.
3.  **Update:** $w \leftarrow w - \alpha \frac{\partial L}{\partial w}$.

## III. Theoretical Framework

### 3.1 Vanishing Gradient Problem
In Deep Networks, gradients satisfy multiple terms $\le 1$ (e.g., Sigmoid derivative max is 0.25).
$0.25 \times 0.25 \times 0.25 \dots \to 0$.
Early layers stop learning.
*Solution:* ReLU (derivative 1) and Residual Connections (ResNet).

### 3.2 Computational Graph
Frameworks like PyTorch/TensorFlow build a graph.
Nodes = Operations. Edges = Tensors.
Automatic Differentiation (Autograd) handles the chain rule automatically.
This democratized AI.

## IV. Strategic Applications

### 4.1 Recurrent Neural Networks (BPTT)
Backpropagation Through Time.
Unroll the RNN loops into a deep feedforward net.
Apply Backprop.
Used to train LSTMs on time series sequences.

### 4.2 Reinforcement Learning (Policy Gradient)
Backpropagate the "Reward" signal to update the Policy Network.
"The trade made \$100. Increase the probability of the actions that led to this."

## V. Exercises

**Exercise 1 (Manual Backprop):**
$f(x,y,z) = (x+y)z$.
$q = x+y \implies f = qz$.
$\frac{\partial f}{\partial z} = q$.
$\frac{\partial f}{\partial q} = z$.
$\frac{\partial q}{\partial x} = 1$.
$\frac{\partial f}{\partial x} = \frac{\partial f}{\partial q} \frac{\partial q}{\partial x} = z \cdot 1 = z$.
The gradient of x depends on z. (Interaction).

**Exercise 2 (Batch Size):**
Stochastic Gradient Descent (Batch=1): Noisy gradients.
Full Batch: Accurate but memory heavy.
Mini-Batch (32-256): Best of both worlds.

## VI. References
-   Rumelhart, D.E., Hinton, G.E., & Williams, R.J. *Learning Representations by Back-propagating Errors*.
-   LeCun, Y. *Efficient BackProp*.
