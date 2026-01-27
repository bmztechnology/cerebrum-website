# Pairs Trading: Cointegration and Market Neutrality

## I. Executive Summary

Pairs Trading is a market-neutral statistical arbitrage strategy that involves matching a long position in one asset with a short position in a related asset. The core thesis is that the two assets share a fundamental equilibrium relationship. If they diverge, the spread between them is mean-reverting. Unlike simple correlation (which breaks down), Pairs Trading relies on **Cointegration**, a stronger statistical bond. This strategy hedges out market risk (Beta), isolating the idiosyncratic alpha of the convergence.

## II. Formal Definitions

### Definition 2.1 (The Spread)
For two assets $X$ (e.g., EUR/USD) and $Y$ (e.g., GBP/USD) with prices $P_X$ and $P_Y$:
$$Spread_t = \ln(P_{Y,t}) - \beta \ln(P_{X,t})$$
Where $\beta$ is the hedge ratio.

### Definition 2.2 (Cointegration - Engle-Granger)
Two non-stationary series $X_t, Y_t \sim I(1)$ are cointegrated if there exists a linear combination:
$$Z_t = Y_t - \beta X_t$$
Such that $Z_t \sim I(0)$ (Stationary).
*Translation:* The individual prices wander randomly, but the "rope" tying them together has a fixed length.

## III. Theoretical Framework

### 3.1 Correlation vs Cointegration
-   **Correlation:** Measure of short-term co-movement. "Do they move up together today?"
    -   *Risk:* Two assets can be highly correlated but drift apart indefinitely (e.g., S&P 500 and Dow Jones over 50 years). A spread trade would blow up.
-   **Cointegration:** Measure of long-term equilibrium. "Is the distance between them bounded?"
    -   *Safety:* If cointegrated, the spread *must* return to the mean (mathematically verified).

### 3.2 The Hedge Ratio ($\beta$)
We calculate $\beta$ using Ordinary Least Squares (OLS) regression:
$$P_Y = \alpha + \beta P_X + \epsilon$$
$\beta$ tells us how many units of $X$ to short for every unit of $Y$ long to imply a dollar-neutral portfolio.

## IV. Strategy Algorithm

### 4.1 Selection
Identify pairs with fundamental links (Same region, same commodity link).
-   AUD/USD vs NZD/USD (Oceania).
-   Brent Crude vs WTI Crude.
-   Gold vs Silver.

### 4.2 Testing
Run the **Augmented Dickey-Fuller (ADF)** test on the residuals of the spread.
-   Hypothesis $H_0$: Spread is Non-Stationary (Random Walk).
-   Hypothesis $H_1$: Spread is Stationary (Mean Reverting).
If $p < 0.05$, reject $H_0$. The pair is tradable.

### 4.3 Execution
Calculate Z-Score of the current Spread.
$$Z = \frac{Spread_t - \mu}{\sigma}$$
-   **Open:** If $Z > 2.0$: Short $Y$, Long $\beta X$. (Bet on convergence).
-   **Close:** If $Z \approx 0$.
-   **Stop:** If $Z > 4.0$ (Breakdown of relationship).

## V. Advanced Models

### 5.1 The Kalman Filter
A dynamic state-space model that updates the Hedge Ratio ($\beta_t$) in real-time.
-   *Advantage:* Adapts to structural shifts in the market (e.g., one country raises rates), preventing false signals from a static OLS model.

### 5.2 Copulas
Modeling the dependence structure of the tails. Cointegration assumes linear dependence; Copulas allow for non-linear relationships (e.g., assets correlate more during crashes than during rallies).

## VI. Exercises

**Exercise 1 (Hedge Ratio):**
You want to trade Gold ($2000) vs Silver ($25).
Regression shows $P_{Gold} = 80 \times P_{Silver} + \epsilon$.
a) What is the Hedge Ratio $\beta$?
b) If you buy 1 lot of Gold (100 oz), how many oz of Silver should you short?
c) Calculate the net dollar exposure.

**Exercise 2 (Scenario):**
You are pairs trading Coca-Cola (KO) vs Pepsi (PEP).
KO announces a massive lawsuit (bad news). KO stock crashes 10%. PEP stays flat.
The spread widens to 4 sigmas.
Is this a mean-reverting opportunity or a fundamental break? Explain "Idiosyncratic Risk" vs "Systematic Risk" in this context.

**Exercise 3 (Forex Triangulation):**
Verify that trading EUR/USD vs GBP/USD is mathematically identical to trading the cross EUR/GBP directly. Why might a pairs trader prefer the two-leg structure? (Hint: Liquidity management or variable weighting).

## VII. References
-   Engle, R.F., & Granger, C.W.J. (1987). *Co-integration and Error Correction*. Econometrica.
-   Vidyamurthy, G. (2004). *Pairs Trading: Quantitative Methods and Analysis*.
-   Ehrman, D.S. (2006). *The Handbook of Pairs Trading*.
