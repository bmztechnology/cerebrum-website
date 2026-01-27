# Risk Parity Strategy: All Weather

## I. Executive Summary

**Risk Parity** allocates capital such that each asset class contributes equally to the total portfolio risk ($Risk Contribution$). Traditional 60/40 Equity/Bond portfolios are dominated by Equity risk (90% of variance comes from the 60% equity). Risk Parity solves this by **Leveraging** low-volatility assets (Bonds) so their risk impact equals that of high-volatility assets (Equities). The result is a portfolio robust to different economic regimes (Growth/Inflation).

## II. Formal Definitions

### Definition 2.1 (Marginal Risk Contribution - MRC)
$$ MRC_i = \frac{\partial \sigma_p}{\partial w_i} = \frac{(\Sigma w)_i}{\sigma_p} $$
Total Risk Contribution $TRC_i = w_i \times MRC_i$.
Goal: $TRC_{Stocks} = TRC_{Bonds} = TRC_{Commodities}$.

### Definition 2.2 (Inverse Volatility Weighting)
Simplified Risk Parity (assuming zero correlation).
$w_i \propto \frac{1}{\sigma_i}$.
If Stocks Vol = 20%, Bonds Vol = 5% (4:1 ratio).
Weights: Stocks 20%, Bonds 80%.
Total Risk is balanced.
But Return is low?
Leverage the Whole Portfolio 2x or 3x to hit target return (e.g., 10%).

## III. Theoretical Framework

### 3.1 The Economic Regimes (Bridgewater All Weather)
1.  **Growth Rising:** Stocks/Copper.
2.  **Growth Falling:** Nominal Bonds/ILBs.
3.  **Inflation Rising:** TIPS/Gold/Commodities.
4.  **Inflation Falling:** Nominal Bonds/Stocks.
Risk Parity holds assets for *all* regimes. 60/40 mainly bets on Growth Rising/Inflation Falling.

### 3.2 Leverage Risk
Critics: "Risk Parity just swaps Equity Risk for Leverage Risk (Interest Rate Risk)."
If Bond Yields rise (Rates up), Leverage cost rises AND Bond prices fall.
Bad scenario: 2022 (Stocks Down, Bonds Down, Rates Up).
Risk Parity funds suffered double digit drawdowns.

## IV. Strategic Applications

### 4.1 Volatility Targeting
Fund targets 10% Vol.
If realized vol drops, Increase Leverage.
If realized vol spikes, De-Lever.
Mechanical response.
Can cause "Flash Crashes" if all Risk Parity funds sell simultaneously.

### 4.2 Correlation Assumptions
True Risk Parity optimization accounts for correlations.
Bonds/Stocks usually negatively correlated.
If correlation flips positive (Inflation regime), Risk Parity math breaks (Risk is underestimated).

## V. Exercises

**Exercise 1 (Sharpe Parity):**
If Sharpe Ratios are equal across assets.
Risk Parity = Tangency Portfolio (Max Sharpe).
Leveraging it moves up the Security Market Line.
If Sharpe Ratios unequal (Stocks > Bonds), Risk Parity underperforms MPT.

**Exercise 2 (Commodities):**
Why include?
Inflation hedge.
Often High Volatility.
Small weight in Risk Parity (due to Inverse Vol), but significant Risk Contribution.

## VI. References
-   Dalio, R. *The All Weather Story*.
-   Asness, C. *Risk Parity: Why We Lever*.
