# The Private Market Valuation Lag

## I. Executive Summary

**Private Market Assets** (PE, VC, Real Estate) are not marked-to-market daily. They are appraised quarterly or annually. This creates a **Volatility Laundering** effect: Private assets appear to have Sharpe Ratios of 3.0 because the price line is smoothed. However, this creates a **Valuation Lag** (6-12 months) relative to Public Markets.

## II. Formal Definitions

### Definition 2.1 (Smoothing Bias)
Public Market drops 20% in Q1.
Private Fund reports NAV flat ($0\%$).
Manager argues: "We don't need to sell, so the drop isn't real for us."
Autocorrelation of returns is high.
$NAV_t = 0.5 \times Market_t + 0.5 \times NAV_{t-1}$.

### Definition 2.2 (The Denominator Effect)
Pension Fund Allocation: 50% Stocks, 50% PE.
Stocks crash 50%.
Portfolio: 25% Stocks, 50% PE (Total 75%).
PE Allocation is now $50/75 = 66\%$.
Overweight PE.
Pension Fund *must* sell PE (at the bottom? or at the fake high NAV?).
Or stop making new PE commitments.

## III. Theoretical Framework

### 3.1 Return Stacking
Why do LPs love PE?
Because it doesn't mark down.
"Accounting Alpha."
Allows CIOs to sleep at night.
Reduces reported portfolio volatility.
Real economic volatility is the same as public markets (Beta exposure), just hidden.

### 3.2 Determining Fair Value (ASC 820)
Level 3 Assets.
Valuation "unobservable."
Use Discounted Cash Flow (DCF).
Manager has discretion on Discount Rate.
If rates rise, Manager should lower valuation.
But Manager assumes "Exit Multiples" will remain high?
Optimism bias.

## IV. Strategic Applications

### 4.1 The Convergence Lag
Public markets dictate the exit price.
If IPO market is dead, VC valuations *must* come down eventually.
Lag: 9-18 months.
Arbitrage:
1. Publics drop.
2. Short Listed PE firms (Blackstone/KKR)?
3. Wait for marks to adjust.

### 4.2 Pricing Secondaries
Secondary buyers don't believe the NAV.
"Fund NAV is 100. S&P is down 20%. I bid 70."
Market clears at the *implied* real price.
Discounts widen during the Lag period.

## V. Exercises

**Exercise 1 (Tiger Global):**
2022. Public tech stocks crushed.
Tiger wrote down private portfolio.
But not as much as Nasdaq?
LPs unhappy with "mark-to-myth."

**Exercise 2 (Real Estate Cap Rates):**
Rates rose 500bps.
Cap Rates should rise. Property values should fall 30%.
Appraisers slow to adjust. "No comparable sales."
Transaction volume freezes.
Price discovery happens only when forced sellers emerge.

## VI. References
-   Cliff Asness. *Vol Laundering*.
-   FASB. *Topic 820: Fair Value Measurement*.
