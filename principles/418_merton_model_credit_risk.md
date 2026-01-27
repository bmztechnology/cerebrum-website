# Merton Model Credit Risk: Structural

## I. Executive Summary

The **Merton Model** (1974) treats corporate equity as a **Call Option** on the firm's assets. The Strike Price is the Face Value of the Debt. If Asset Value < Debt, equity is worthless (Limited Liability). This structural approach links **Equity Volatility** directly to **Credit Spreads**.

## II. Formal Definitions

### Definition 2.1 (The Construct)
-   $V_A$: Value of Assets.
-   $V_E$: Value of Equity.
-   $D$: Face Value of Zero Coupon Bond maturing at $T$.
-   $\sigma_A$: Volatility of Assets.
$$ V_E = Call(V_A, D, r, \sigma_A, T) $$
Equity holders have the "Option to Default" (Put option).

### Definition 2.2 (Distance to Default - DD)
$$ DD = \frac{\ln(V_A/D) + (\mu - 0.5\sigma_A^2)T}{\sigma_A \sqrt{T}} $$
Number of standard deviations asset value must drop to trigger default.
Probability of Default $PD = N(-DD)$.

## III. Theoretical Framework

### 3.1 Implied Volatility
Credit Spreads widen when Equity Volatility rises.
Relationship is non-linear.
For high leverage firms (Assets $\approx$ Debt), Delta $\approx 1$. Equity trades like the Asset.
For low leverage firms (Assets $\gg$ Debt), Delta $\approx 1$, but Probability of exercise (Default) is tiny.

### 3.2 KMV Model (Moody's)
Commercial implementation of Merton.
Uses "Expected Default Frequency" (EDF).
More accurate than Agency Ratings which lag the market.
Merton model reacts instantly to stock price drops.

## IV. Strategic Applications

### 4.1 Capital Structure Arbitrage
Long Bond / Short Stock.
If company levers up (Buyback), Stock rises, Bond falls.
If company delevers (Equity issuance), Stock falls, Bond rises.
Detailed hedging of the "Correlation" between the two layers of capital.

### 4.2 Assessing Bank Risk
Regulators use structural models to assess bank solvency.
If Market Cap of Bank drops, Implied Asset Value drops.
Signal of hidden losses on the loan book.

## V. Exercises

**Exercise 1 (The Volatility Skew):**
Deep OTM Puts on the stock are proxy for Default probability.
If OTM Puts serve as "insurance," their price creates the CDS spread.
"Equity-Credit Link."

**Exercise 2 (Debt maturity):**
Merton assumes 1 bullet bond.
Real firms have rolling debt towers.
Short term debt rollover risk is the true default trigger.
Merton underestimates default risk for firms with liquidity walls.

## VI. References
-   Merton, R.C. *On the Pricing of Corporate Debt*.
-   Sundaresan, S. *Fixed Income Markets and Their Derivatives*.
