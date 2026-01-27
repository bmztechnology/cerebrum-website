# Treynor Ratio Beta Risk: Systematic

## I. Executive Summary

The **Treynor Ratio** measures excess return per unit of **Systematic Risk (Beta)**, rather than Total Risk (Volatility). It implies that idiosyncratic risk should be diversified away, so the investor should only care about Beta-adjusted performance. It is particularly useful for evaluating sub-portfolios that will be part of a larger, diversified master portfolio.

## II. Formal Definitions

### Definition 2.1 (The Equation)
$$ T = \frac{R_p - R_f}{\beta_p} $$
-   $\beta_p$: Portfolio Beta relative to Market.
Units: "Excess Return per unit of Beta."
Market Portfolio Treynor: $(R_m - R_f) / 1 = Market Risk Premium$.

### Definition 2.2 (Comparison with Sharpe)
Portfolio A: High Return, High Vol (Idiosyncratic), Low Beta.
Sharpe: Low (punished by High Vol).
Treynor: High (rewarded for Low Beta).
If Portfolio A is your *only* holding, use Sharpe (Idiosyncratic risk hurts you).
If Portfolio A is 5% of a diversified fund, use Treynor (Idiosyncratic risk washes out).

## III. Theoretical Framework

### 3.1 SML Slope
Treynor Ratio is geometrically the slope of the line connecting the Risk Free Rate and the Portfolio on the Beta/Return graph (SML).
Steeper slope = Better performance.

### 3.2 Assumptions
Assumes Market Portfolio is efficient.
Assumes Beta is constant.
If Beta varies (Market Timing), Treynor Ratio misleads.
(Manager lowers Beta in crash, raises in boom $\implies$ Average Beta might be low, Returns high $\implies$ Huge Treynor).
Detects Timing Skill? Or stability?

## IV. Strategic Applications

### 4.1 Sector Funds
Evaluating a Utility Fund (Low Beta).
Its absolute return is low.
Sharpe might be low.
Treynor might be high (It delivers good return *for its risk level*).
Useful for comparing disparate sectors (Tech vs Utilities).

### 4.2 Leverage
If Treynor > Market Risk Premium.
You can leverage the portfolio to equal Market Beta (1.0).
The leveraged portfolio will outperform the Market.
$R_{lev} - R_f = \beta_{target} \times T$.

## V. Exercises

**Exercise 1 (Negative Beta):**
Put option fund. $\beta = -5$.
Excess Return might be negative (Cost of insurance).
$T = Negative / Negative = Positive$?
Math breakdown.
Treynor not meaningful for negative beta assets (unless adjusted interpretation).

**Exercise 2 (R-Squared):**
If $R^2$ (Correlation to market) is low.
Beta is low.
Treynor might be high.
But implies high diversification benefit.

## VI. References
-   Treynor, J. *How to Rate Management of Investment Funds*.
-   Reilly, F. *Investment Analysis*.
