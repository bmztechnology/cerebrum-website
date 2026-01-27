# Linear Regression: The Line of Best Fit

## I. Executive Summary

Linear Regression is the "Hello World" of quantitative finance. It models the relationship between a dependent variable $Y$ (e.g., AAPL returns) and independent variables $X$ (e.g., S&P 500 returns). Its primary output, Beta ($\beta$), is the standard measure of systematic risk.

## II. Formal Definitions

### Definition 2.1 (Simple Linear Model)
$$Y_i = \alpha + \beta X_i + \epsilon_i$$
-   $\alpha$ (Alpha): Intercept. The return not explained by $X$.
-   $\beta$ (Beta): Slope. Sensitivity to $X$.
-   $\epsilon$ (Error): Residual noise.

### Definition 2.2 (Ordinary Least Squares - OLS)
The method to find $\hat{\alpha}$ and $\hat{\beta}$ by minimizing the Sum of Squared Errors (SSE).
$$SSE = \sum (Y_i - (\hat{\alpha} + \hat{\beta}X_i))^2$$

## III. Theoretical Framework

### 3.1 Assumptions (Gauss-Markov)
For OLS to be valid (BLUE - Best Linear Unbiased Estimator):
1.  Linearity.
2.  Homoscedasticity (Variance of errors is constant).
3.  No Autocorrelation (Errors are independent).
4.  Normality of Errors.
*Reality Check:* Financial data violates #2 (Volatility Clusters) and #4 (Fat Tails) frequently.

### 3.2 R-Squared ($R^2$)
Measures "Goodness of Fit."
$$R^2 = 1 - \frac{SSE}{SST}$$
-   $R^2 = 1$: Perfect prediction.
-   $R^2 = 0$: Useless.
In finance, low $R^2$ is common. (e.g., Multi-factor models often have $R^2 < 0.3$).

## IV. Strategic Applications

### 4.1 Alpha Generation
Traders seek "Jensen's Alpha."
$$Return = RiskFree + \beta(MarketReturn) + \text{Alpha}$$
If your strategy returns 15% but market did 15% and your Beta is 1.0, your Alpha is 0. You added no value.
True skill is generating return orthogonal to the market.

### 4.2 Moving Linear Regression (Slope Indicator)
Instead of a Moving Average, plot the *Slope* of the regression line over the last $N$ bars.
-   Slope > Threshold: Strong Trend.
-   Slope $\approx$ 0: Range.

## V. Exercises

**Exercise 1 (Calculation):**
$Cov(X,Y) = 0.05$. $Var(X) = 0.04$.
$\beta = Cov/Var = 0.05/0.04 = 1.25$.
If Market moves 1%, Asset moves 1.25%.

**Exercise 2 (Residual Analysis):**
You run a regression. The residuals ($\epsilon$) show a "Fan" shape (small errors at start, huge errors at end).
What OLS assumption is violated? (Homoscedasticity. This is Heteroscedasticity).
Solution? (Use Robust Standard Errors or GARCH).

## VI. References
-   Draper, N.R., & Smith, H. *Applied Regression Analysis*.
-   Ang, A. *Asset Management*.
