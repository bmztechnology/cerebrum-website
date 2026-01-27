# Inflation Swaps TIPS: Breakeven Geometry

## I. Executive Summary

**Inflation Swaps** (Zero Coupon Swaps) allow hedging of CPI risk. One party pays a Fixed Rate (Breakeven Inflation), and the other pays the Realized CPI growth. The market is derived from the spread between **Nominal Treasuries** and **TIPS (Treasury Inflation Protected Securities)**. This spread represents the **Breakeven Inflation Rate** + Liquidity Premium.

## II. Formal Definitions

### Definition 2.1 (ZCIIS - Zero Coupon Inflation Index Swap)
-   At Maturity $T$:
    -   Payer pays fixed $(1 + K)^T$.
    -   Receiver pays realized inflation Index $CPI_T / CPI_0$.
-   No interim coupons (usually). Lump sum at end.
-   $K$ is the market implied inflation rate.

### Definition 2.2 (The Fisher Equation)
$$ (1 + r_{nom}) = (1 + r_{real}) (1 + i_{expected}) + RiskPrem $$
Nominal Yield = Real Yield + Inflation Expectation.
TIPS Yield $\approx$ Real Yield.
Nominal - TIPS $\approx$ Inflation Expectation (Breakeven).

## III. Theoretical Framework

### 3.1 Seasonality
CPI is seasonal (Heating oil in winter, Travel in summer).
Inflation Swap curve is "jagged."
Fixing month matters.
Pricing requires a "Seasonality Adjusted" forward curve.

### 3.2 The Floor Option
TIPS have a floor (Principal cannot drop below Par if Deflation).
Nominal Treasuries don't have this.
Therefore, TIPS Breakeven includes the value of a Deflation Floor option.
In low inflation times, Breakevens overstate actual inflation expectations due to this option premium.

## IV. Strategic Applications

### 4.1 Pension Hedging (LDI)
Pension Liabilities are linked to inflation (COLA).
Assets are Nominal.
Risk: Inflation rises $\implies$ Liabilities explode.
Solution: Receive Inflation Swaps.
Demand from UK Pension funds drives the RPI swap market.

### 4.2 Relative Value
Buy TIPS / Short Nominal Treasuries.
Long "Breakevens."
Bet: Fed will liquefy debt (Inflation will rise > Market Pricing).
Carry Cost: You pay the nominal yield, receive real yield. Negative carry if inflation doesn't materialize.

## V. Exercises

**Exercise 1 (The Lag):**
CPI is published with a lag (Monthly).
Interpolation between reference months.
"Fixing lag" (e.g., 3 months lookback).
Understanding indexation mechanics is vital.

**Exercise 2 (Asset Swap Spread):**
TIPS are illiquid.
TIPS Asset Swaps (converting TIPS to Floater) often trade at spread to Nominal Asset Swaps.
"Liquidity Premium" of TIPS.

## VI. References
-   Deacon, M., et al. *Inflation-Indexed Securities*.
-   Barclays. *Inflation Products Guide*.
