# Breakeven Inflation Rate: The Spread

## I. Executive Summary

The **Breakeven Inflation Rate** is the difference between Nominal Treasury Yields and TIPS Real Yields of the same maturity. It represents the market's expectation of average future inflation. $Nominal = Real + Breakeven$. It technically includes an **Inflation Risk Premium** (Long Nominal / Short TIPS) and a **Liquidity Premium** (Short Nominal / Long TIPS).

## II. Formal Definitions

### Definition 2.1 (Spread Formulation)
$$ BEI = Y_{Nominal} - Y_{TIPS} $$
10Y Nominal 4.0%.
10Y TIPS 1.7%.
10Y Breakeven = 2.3%.
Market is indifferent if CPI averages 2.3%.
If CPI > 2.3%: TIPS outperform.
If CPI < 2.3%: Nominals outperform.

### Definition 2.2 (5Y5Y Forward)
5-Year Inflation, 5 Years from now.
Fed's favorite metric.
Strips out short-term noise (Oil spikes).
Measures "Anchoring" of expectations.

## III. Theoretical Framework

### 3.1 Components of BEI
$BEI = E[\pi] + RiskPrem_{\pi} - LiqPrem_{TIPS}$.
-   $E[\pi]$: True expectation.
-   $RiskPrem_{\pi}$: Compensation for uncertainty (Positive).
-   $LiqPrem_{TIPS}$: TIPS are illiquid (Negative).
In 2008, Liquidity Premium exploded. TIPS yields spiked to 3%. BEI went to *negative* 2% (Implied Deflation).
Irrational pricing driven by forced selling of TIPS.

### 3.2 Oil Correlation
Breakevens correlate 80% with Oil prices in short run.
Long BEI / Short Oil is a specific "relative value" trade separating expectations from commodity spot moves.

## IV. Strategic Applications

### 4.1 TIPS-Treasury Arb
Nominal Bond + Inflation Swap vs TIPS.
Synthetic TIPS.
Arbitrage the difference between Cash Breakevens and Swap Breakevens.

### 4.2 Curve Trades
Steepener in Real Rates vs Steepener in Nominal Rates.
Can bet on "Inflation Curve" steepening (Short term high, Long term low).

## V. Exercises

**Exercise 1 (Tax Distortion):**
Nominal coupons fully taxed.
TIPS phantom income taxed.
Breakeven calculation implies a tax assumption?
Usually ignored in gross trading, but vital for taxable investor.

**Exercise 2 (Fed Target):**
Fed targets PCE (Personal Consumption Expenditures).
TIPS link to CPI.
CPI usually > PCE by 30bps (Medical/Housing weight differences).
Fed target 2.0% PCE $\approx$ 2.3% CPI Breakeven.

## VI. References
-   Pimco. *Understanding Breakevens*.
-   Federal Reserve. *TIPS Liquidity and Breakeven Inflation*.
