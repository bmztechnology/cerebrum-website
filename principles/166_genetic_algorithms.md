# Genetic Algorithms (GA): Evolutionary Optimization

## I. Executive Summary

When the search space is non-differentiable (discrete rules like "Moving Average length 20 or 50"), Gradient Descent fails. **Genetic Algorithms** mimic Darwinian evolution. We create a population of random strategies (Genes), test them (Survival of the Fittest), and breed the winners (Crossover/Mutation). Over generations, the population converges to an optimal strategy without ever knowing the gradient.

## II. Formal Definitions

### Definition 2.1 (Chromosome)
A vector representing strategy parameters.
$C = [MA\_Slow=200, MA\_Fast=50, RSI\_Thresh=30, StopLoss=50]$.

### Definition 2.2 (Fitness Function)
The objective to maximize.
$Fitness(C) = \text{SharpeRatio}(C) - \text{Penalty} \times \text{Drawdown}$.

## III. Theoretical Framework

### 3.1 Selection Mechanisms
-   **Roulette Wheel:** Probability of breeding $\propto$ Fitness.
-   **Tournament:** Pick 2 random. Better one breeds. (Preserves diversity).

### 3.2 Crossover and Mutation
-   **Crossover:** Combine Mom[1:2] and Dad[3:4]. Mixes good traits.
-   **Mutation:** Randomly flip a bit (Switch MA type). Prevents getting stuck in local optima.

## IV. Strategic Applications

### 4.1 Feature Selection
You have 100 features. Which subset of 10 is best?
There are $\binom{100}{10}$ combinations (Trillions).
GA finds a near-optimal subset in minutes.
Gene = Binary mask [1, 0, 0, 1...].

### 4.2 Symbolic Regression (Genetic Programming)
Instead of optimizing numbers, optimize *Formulas*.
Gene: `(Price - MA(50)) / Volatility`.
GP evolves mathematical expressions. This is how "Alpha 101" formulas are discovered by machines.

## V. Exercises

**Exercise 1 (Overfitting):**
A GA will eventually find a "Lucky" gene that perfectly fits the history noise.
*Solution:* Walk-Forward Optimization.
Train Gen 1-10 on Year 1.
Test Survivors on Year 2.
Breed Survivors on Year 2.
Test on Year 3.
This evolves "Robustness", not just "Fit."

**Exercise 2 (Diversity):**
If population converges too fast (all genes identical), evolution stops.
Increase Mutation Rate to force exploration of new ideas.

## VI. References
-   Holland, J.H. *Adaptation in Natural and Artificial Systems*.
-   Koza, J.R. *Genetic Programming: On the Programming of Computers by Means of Natural Selection*.
