# Bond Spreads Z-Spread: Relative Value

## I. Executive Summary

**Bond Spreads** measure the risk premium of a corporate bond over a risk-free benchmark. While **Nominal Spread (G-Spread)** simply compares YTMs, the **Z-Spread (Zero Volatility)** uses the entire zero curve to measure the constant spread added to every spot rate to match the price. The **OAS (Option Adjusted Spread)** further adjusts for embedded options (Call/Put), isolating the pure Credit Spread.

## II. Formal Definitions

### Definition 2.1 (Z-Spread)
Solve for $S$:
$$ Price = \sum \frac{CF_t}{(1 + r_{spot\_t} + S)^t} $$
Uses the Treasury Spot Curve ($r_{spot\_t}$).
$S$ is the "static spread" required to discount cashflows to Price.
Better than G-Spread because it accounts for term structure.

### Definition 2.2 (OAS)
$$ ZSpread = OAS + OptionCost $$
For Callable Bond: OptionCost > 0 (Issuer owns call).
$OAS < ZSpread$.
OAS is the spread "stripped" of the call option value.
Allows comparison between Callable and Non-Callable bonds.

## III. Theoretical Framework

### 3.1 I-Spread
Spread vs Swap Curve (Interpolated).
Better benchmark for Banks (who fund at Libor/Swap rates).
Treasury yields can be distorted by Flight to Quality or Scarcity (Repo special).
Swap curve is "pure" interbank credit curve.

### 3.2 Asset Swap Spread (ASW)
Price of a bundle: Buy Bond + Pay Fixed/Receive Float Swap.
Converts fixed bond into floating exposure (Libor + Spread).
Arbitrageurs look for high ASW.

## IV. Strategic Applications

### 4.1 Rich/Cheap Analysis
Plot OAS vs Duration or Rating.
Identify outliers.
Bond with high OAS relative to peers is "Cheap." (Buy).
Bond with low OAS is "Rich." (Sell).

### 4.2 The CDS Basis
Difference between Bond Spread (Cash) and CDS Spread (Synthetic).
Basis = CDS - BondSpread.
Usually close to 0.
If Basis > 0: CDS expensive. Buy Bond / Buy Protection?
If Basis < 0: Bond cheap. "Negative Basis Trade." Buy Bond / Buy Protection. Lock in risk-free spread.
(Wait, Negative Basis means Bond Spread > CDS. So Buy Bond / Buy CDS allows arbitrage).

## V. Exercises

**Exercise 1 (Callable Trap):**
High Yield Bond looks cheap (High Yield).
But it's callable.
OAS might be tight.
You are paid yield for taking Call Risk (not Credit Risk).
If rates fall, you lose bond.

**Exercise 2 (G-Spread Error):**
Yield Curve steep.
Bond 10Y. Benchmark 10Y.
If bond has high coupons, Duration is 8Y.
Matching against 10Y Gov is wrong duration match.
Z-Spread handles this correct cashflow discounting.

## VI. References
-   O'Kane, D. *Modelling Single Name and Multi-name Credit Derivatives*.
-   Fabozzi, F. *The Handbook of Fixed Income Securities*.
