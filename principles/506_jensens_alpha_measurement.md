# Jensens Alpha Measurement: Absolute Excess

## I. Executive Summary

**Jensen's Alpha** ($\alpha$) quantifies the absolute excess return of a portfolio over its theoretical expected return predicted by the **CAPM**. Unlike ratios (Sharpe, Treynor), Alpha is an absolute number (e.g., +2.0%). It creates the distinction between **"Beta"** (Retun from market exposure) and **"Alpha"** (Return from manager skill/stock picking). A positive Alpha implies the manager has "beaten the market" on a risk-adjusted basis.

## II. Formal Definitions

### Definition 2.1 (The Regression)
Run linear regression:
$$ R_{p,t} - R_{f,t} = \alpha + \beta (R_{m,t} - R_{f,t}) + \epsilon_t $$
-   Intercept: **Alpha** ($\alpha$).
-   Slope: **Beta** ($\beta$).
-   Residual: Idiosyncratic risk ($\epsilon$).
If $\alpha$ is statistically significant ($t-stat > 2$), skill is present.

### Definition 2.2 (Multi-Factor Alpha)
CAPM Alpha (1-factor) often disappears when controlling for other factors (Fama-French).
"Small Cap" or "Value" bias might look like Alpha in CAPM.
True Alpha requires multifactor regression:
$R - R_f = \alpha + \beta_1 MKT + \beta_2 SMB + \beta_3 HML$.
Alpha is the residual return unexplained by *any* common factor.

## III. Theoretical Framework

### 3.1 Zero Sum Game
Sharpe's Arithmetic:
Before fees, The Market Alpha is Zero.
For every winner (+Alpha), there is a loser (-Alpha).
After fees, the Average Active Manager has Negative Alpha.
Passive Investing (Index) has Alpha $\approx$ 0 (minus tiny fee).
Therefore, Passive beats Average Active.

### 3.2 Alpha Decay
Alpha is finite and fleeting.
As Assets Under Management (AUM) grow, Alpha shrinks.
Berk & Green model: Managers capture the economic rents (fees) until Net Alpha to investor is zero.

## IV. Strategic Applications

### 4.1 Portable Alpha
Separate the decision of "Where to get Beta" (Index Futures) and "Where to get Alpha" (Market Neutral Hedge Fund).
$Return = Beta_{S\&P} + Alpha_{HedgeFund}$.

### 4.2 Manager Selection
Don't pay active fees for Beta.
"Closet Indexers" charge 1% for 0.99 Beta and 0 Alpha.
Result: Jensen's Alpha = -1% (Fees).
Pay for High Active Share, Idiosyncratic Variance, and Logic.

## V. Exercises

**Exercise 1 (Bull Market Bias):**
Manager holds High Beta (1.5) stocks.
Market up 20%.
Manager up 30%.
Claims Alpha = 10%?
CAPM calculation: Exp Return = $1.5 \times 20\% = 30\%$.
Actual = 30%.
Alpha = 0%.
Manager just added Beta, not skill.

**Exercise 2 (Timing Alpha):**
Jensen's measure assumes constant Beta.
If manager times market (Beta 1.5 in Upside, 0.5 in Downside).
Total return beats static benchmark.
Alpha detects this as "Average Excess Return."
Treynor-Mazuy model adds squared term to detect timing.

## VI. References
-   Jensen, M. *The Performance of Mutual Funds in the Period 1945-1964*.
-   Berk, J. & Green, R. *Mutual Fund Flows and Performance in Rational Markets*.
