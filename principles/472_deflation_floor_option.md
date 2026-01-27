# Deflation Floor Option: Embedded Value

## I. Executive Summary

**TIPS** guarantee that at maturity, the investor receives the **Greater of** the Inflation-Adjusted Principal or the Original Par Value. This constitutes an embedded **Put Option on CPI** (Deflation Floor). In normal inflation ($>2\%$), the option is OTM (worthless). In deflationary/low inflation environments, the option gains value, distorting Real Yield and Breakeven calculations.

## II. Formal Definitions

### Definition 2.1 (The Payoff)
Maturity Payment = $Face \times \max(1, \frac{CPI_T}{CPI_0})$.
Floor effective if cumulative inflation is negative.
Recent issues (high CPI base) have 0 floor value.
Old seasoned issues (CPI base 100, current CPI 300) have deep OTM floors.

### Definition 2.2 (Stripping the Floor)
Investment banks typically value TIPS as:
$Price_{TIPS} = Price_{RealBond} + Price_{FloorOption}$.
Analysts strip the option value to find the "True" Real Yield (which might be higher).

## III. Theoretical Framework

### 3.1 Option Pricing (Black-Scholes on CPI?)
Modeling CPI as Geometric Brownian Motion.
Volatility of Inflation.
Option maturity = Bond maturity.
Long dated options (30Y) on Volatile asset are expensive.
2008: Deflation fears. Floor value surged.
2015: Oil crash. Floor value surged.

### 3.2 Par-Par Asset Swaps
Bank buys TIPS. Swaps to Float.
The Bank owns the Floor option.
Often underpriced by the market.
Cheap convexity.

## IV. Strategic Applications

### 4.1 On-the-Run vs Off-the-Run
New 5Y TIPS (Base CPI High). Floor is ATM (At the Money). Valuable.
Old 10Y TIPS (issued 5 years ago, now 5Y remaining). Base CPI Low. Floor is Deep OTM.
Arbitrage: Buy OTR / Sell Old.
Because OTR looks expensive (lower yield), but part of that price is the Option.

### 4.2 Deflation Hedge
In Deflation, Nominal Bonds rally.
TIPS Principal drops.
BUT, TIPS Price held up by Floor.
TIPS perform like Nominals near the floor.
Hybrid instrument.

## V. Exercises

**Exercise 1 (Negative Accrual):**
Daily index ratio drops.
Principal shrinks.
Coupon (calculated on Principal) shrinks.
Cash flow decreases.
But Maturity Par is safe.

**Exercise 2 (Inflation Caps):**
Opposite derivative.
Investors buy Inflation Caps (Cap at 5%).
Sold by Infrastructure projects paying inflation.
Market skyrocketed in 2022.

## VI. References
-   Fleckenstein, M. *The Deflation Option in TIPS*.
-   Grishchenko, O. *Inflation Risk Premium*.
