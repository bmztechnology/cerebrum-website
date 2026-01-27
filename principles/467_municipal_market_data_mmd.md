# Municipal Market Data MMD: The Benchmark

## I. Executive Summary

The **MMD Curve** (Thomson Reuters Municipal Market Data) is the AAA Municipal Yield Curve benchmark. It represents the "High Grade" tax-exempt yield for each maturity (1Y to 30Y). Munis are quoted as a **Spread to MMD** (e.g., MMD + 25bps). The relationship between the MMD Curve and the Treasury Curve (**M/T Ratio**) is the primary valuation metric for the asset class.

## II. Formal Definitions

### Definition 2.1 (The Curve Construction)
Survey based? Transaction based?
Proprietary algorithm aggregating AAA trade data (Pre-2008).
Now more data-driven (MSRB TRACE data).
Slopes are steeper than Treasury curve (Liquidity segmentation).

### Definition 2.2 (The Ratio)
$$ Ratio = \frac{\text{MMD Yield}}{\text{Treasury Yield}} $$
10Y MMD = 2.50%. 10Y UST = 3.00%.
Ratio = 83%.
Fair Value? Calculation: $1 - TaxRate$?
If Tax=30%, Fair Ratio = 70%.
Why 83%? Liquidity premium + inefficiency + structural supply.

## III. Theoretical Framework

### 3.1 Technicals
**Supply:** Seasonality (June/July redemptions, Autumn issuance).
**Demand:** January Effect (Reinvestment).
**Funds:** Weekly flows (Lipper).
MMD moves on "Flows" more than "Fundamentals."

### 3.2 Spot vs Curve
Unlike Treasuries (liquid at all points), Munis trade sporadically.
Matrix Pricing: Interpolating the yield of a non-traded bond using MMD + Spread.
Crucial for NAV calculation.

## IV. Strategic Applications

### 4.1 Tax Loss Harvesting
Dec/Jan seasonality.
Selling losers depresses MMD (Yields rise).
Buying opportunity.

### 4.2 Ratio Trading
Hedge Fund: Long Munis / Short Treasuries.
Betting on Ratio compression (Mean reversion).
Risk: 2008 or 2020. Ratio spikes to 200% (Munis crash, Treasuries rally).
Basis trade blow-up.

## V. Exercises

**Exercise 1 (Call Option Premium):**
Most Munis Callable at 10 years.
Treasuries are Non-Callable.
MMD Yield includes the value of the Call Option sold by issuer?
No, MMD is usually "Callable par bond" yield? Or "Yield to Worst"?
Important distinction. MMD 5% bond is Callable. UST is Bullet.
Spread implies volatility cost.

**Exercise 2 (BVAL):**
Bloomberg Valuation (BVAL) curve competing with MMD.
More algorithmic.
Benchmarking wars.

## VI. References
-   Kalotay, A. *The Structure of Municipal Yields*.
-   Thomson Reuters. *MMD Methodology*.
