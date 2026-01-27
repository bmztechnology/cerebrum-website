# Vector Autoregression (VAR): Interconnected Markets

## I. Executive Summary

Univariate ARIMA models one asset in isolation. But markets are a web; S&P 500 affects Bond Yields, which affect USD, which affects Oil. **Vector Autoregression (VAR)** generalizes AR models to vectors of variables. It allows us to analyze **shocks transmission** and **granger causality** across the entire financial ecosystem.

## II. Formal Definitions

### Definition 2.1 (VAR(p))
Let $Y_t$ be a $(k \times 1)$ vector of variables.
$$Y_t = c + A_1 Y_{t-1} + A_2 Y_{t-2} + \dots + A_p Y_{t-p} + \epsilon_t$$
Where $A_i$ are $(k \times k)$ coefficient matrices.

### Definition 2.2 (Impulse Response Function - IRF)
Traces the effect of a one-time shock to one of the innovations ($\epsilon_{i,t}$) on current and future values of the endogenous variables.
"If Oil (Var 1) jumps 10%, how does Airline stocks (Var 2) react over the next 10 days?"

## III. Theoretical Framework

### 3.1 Structural VAR (SVAR)
Standard VAR assumes errors are uncorrelated. SVAR imposes economic theory (restrictions) to identify structural shocks.
e.g., "Fed Rate Hikes affect Inflation with a lag, but Inflation affects Fed Rates immediately."

### 3.2 The Curse of Dimensionality
Parameters = $k + p k^2$.
If you model 500 S&P stocks with 12 lags:
$500 + 12(250,000) = 3,000,500$ parameters.
Overfitting is guaranteed unless using Lasso/Ridge regularization (Sparse VAR).

## IV. Strategic Applications

### 4.1 Macro Trading (Global Macro)
Input Vector: [Diff(GDP), Diff(CPI), Diff(Rates), Diff(SPX)].
Run IRF.
Shock: "Unexpected 1% Inflation spike."
IRF Output: Rates +50bps, SPX -2%, USD +1%.
Action: Short SPX and Long USD.

### 4.2 Lead-Lag Detection
Granger Causality Test within VAR.
Does $X$ cause $Y$?
If coefficients $A_{yx}$ are significantly non-zero, then past $X$ helps predict $Y$.
Strategy: Watch $X$. When $X$ moves, trade $Y$ immediately (Latency Arb).

## V. Exercises

**Exercise 1 (Matrix Multiplication):**
Vector $Y = [Oil, Airlines]^T$.
$A_1 = \begin{bmatrix} 0.9 & 0 \\ -0.5 & 0.8 \end{bmatrix}$.
Oil follows AR(1): $Oil_t = 0.9 Oil_{t-1}$.
Airlines follows: $Air_t = -0.5 Oil_{t-1} + 0.8 Air_{t-1}$.
Interpretation: Previous Oil price NEGATIVELY impacts current Airline price (-0.5).

**Exercise 2 (Ordering):**
Cholesky Decomposition forces an ordering of shocks.
Why does it matter if we list Oil before Equity or vice versa?
(It determines who reacts to whom "instantly" within time $t$. Usually list most exogenous [Macro] first).

## VI. References
-   Sims, C. (1980). *Macroeconomics and Reality*.
-   Lütkepohl, H. *New Introduction to Multiple Time Series Analysis*.
