# Capital Asset Pricing Model CAPM: Beta

## I. Executive Summary

**CAPM** (Sharpe, Lintner) builds on MPT to define the relationship between Risk and Expected Return. It separates risk into **Systematic (Beta)** and **Idiosyncratic (Alpha)**. Investors are only compensated for Systematic Risk, as Idiosyncratic Risk can be diversified away. The model concludes that the **Market Portfolio** is the only optimal portfolio of risky assets.

## II. Formal Definitions

### Definition 2.1 (The Equation)
$$ E[R_i] = R_f + \beta_i (E[R_m] - R_f) $$
-   $R_f$: Risk-Free Rate.
-   $R_m$: Market Return.
-   $(E[R_m] - R_f)$: Market Risk Premium (Equity Risk Premium).
-   $\beta_i$: Sensitivity of asset $i$ to Market.

### Definition 2.2 (Beta Calculation)
$$ \beta_i = \frac{Cov(R_i, R_m)}{Var(R_m)} = \rho_{i,m} \frac{\sigma_i}{\sigma_m} $$
If stock moves 2% when Market moves 1%, $\beta = 2$ (High Beta).
If stock moves 0.5%, $\beta = 0.5$ (Low Vol).

## III. Theoretical Framework

### 3.1 Capital Market Line (CML)
Line connecting Risk-Free Asset and Market Portfolio.
Sharpe Ratio is the slope.
All rational investors should hold a mix of $R_f$ and $M$ along this line.
Leverage allows moving up the line (Borrow at $R_f$, invest $>100\%$ in $M$).

### 3.2 Security Market Line (SML)
Plot of $E[R]$ vs $\beta$.
If asset lies *above* the SML, it is **Undervalued** (Alpha > 0).
If *below*, Overvalued.

## IV. Strategic Applications

### 4.1 Cost of Capital (WACC)
Corporate Finance uses CAPM to calculate Cost of Equity ($K_e$).
Inputs: Yield on 10Y Treasury + Beta($\approx 1$) $\times$ ERP ($\approx 5\%$).
Crucial for DCF valuation.

### 4.2 Beta Arbitrage (Low Vol Anomaly)
Empirically, Low Beta stocks earn *higher* risk-adjusted returns than High Beta stocks.
Contradicts CAPM (SML is too flat).
Why? Leverage constraints. Investors who want high return bid up High Beta stocks (overpricing them) because they can't leverage Low Beta stocks.
Strategy: Long Low Beta / Short High Beta.

## V. Exercises

**Exercise 1 (Negative Beta):**
Gold or Put Options.
$\beta < 0$.
Required Return < $R_f$?
Yes, Insurance value. Investors accept low/negative return for hedging properties.

**Exercise 2 (Unlevered Beta):**
Comparing companies with different debt levels.
Unlever Beta to strip financial risk.
$\beta_u = \frac{\beta_L}{1 + (1-t)D/E}$.
Pure business risk.

## VI. References
-   Sharpe, W. *Capital Asset Prices*.
-   Fama, E. & French, K. *The Cross-Section of Expected Stock Returns*.
