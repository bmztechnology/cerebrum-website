# Catastrophe Bonds Mechanics: Uncorrelated Yield

## I. Executive Summary

**Catastrophe Bonds (Cat Bonds)** are Insurance-Linked Securities (ILS) that transfer specific risks (e.g., Florida Hurricanes, Japanese Earthquakes) from insurers to capital market investors. They offer high yields and, critically, **Zero Correlation** to the broader financial markets (Stock market crashes do not cause hurricanes). However, they carry **Binary Tail Risk**: if the trigger event occurs, the principal is wiped out to pay claims.

## II. Formal Definitions

### Definition 2.1 (The Structure)
Sponsor (Insurer) pays premium to SPV.
Investors pay Principal to SPV.
SPV buys high-quality collateral (T-Bills).
SPV swaps the return.
If **No Trigger**: Investor gets Principal + Coupons (Premium + T-Bill yield).
If **Trigger**: Principal goes to Sponsor. Investor loses money.

### Definition 2.2 (Triggers)
1.  **Indemnity:** Based on actual losses of the Insurer (Moral Hazard risk).
2.  **Parametric:** Based on physical data (Wind speed > 150mph at Location X). Transparent, fast payout, no dispute.
3.  **Industry Loss:** Based on total industry loss estimate (PCS).

## III. Theoretical Framework

### 3.1 Uncorrelated Alpha
$Correlation(CatBond, S\&P500) \approx 0$.
A true diversifier.
During 2008 Financial Crisis, Cat Bonds were positive (no major hurricanes).
Only correlation is liquidity-driven (selling to cover margin calls elsewhere).

### 3.2 Expected Loss (EL) vs Spread
Spread = Multiple $\times$ EL.
Typical Multiplier: 2x to 4x.
If EL = 2% (1 in 50 year event), Spread might be 6-8%.
Investor demands premium for "Wrong Way Risk" (Binary outcome) and illiquidity.

## IV. Strategic Applications

### 4.1 Portfolio Efficiency
Adding 5% ILS to a pension fund.
Sharpe Ratio improves significantly due to lack of correlation.
The "Free Lunch" of diversification, assuming models are correct.

### 4.2 Climate Change Risk
Model Uncertainty.
Are historical probabilities (100-year storm) still valid?
Investors demand higher spreads for "Climate Risk Premium."
Short duration (1-3 years) allows repricing as climate data evolves.

## V. Exercises

**Exercise 1 (Parametric Basis Risk):**
Investor buys Parametric Bond (Wind Speed).
Hurricane destroys city but wind speed at sensor was 149mph (Trigger 150mph).
Bond safe. Insurer busted.
Basis risk is the mismatch between the Hedge and the Liability.

**Exercise 2 (Seasonality):**
Secondary market pricing.
Prices drop during Hurricane Season (Risk is live).
Prices rise after season ends (Coupons accrued, risk passed).
"Seasonality Trading."

## VI. References
-   Lane, M. *The Handbook of Insurance-Linked Securities*.
-   Cummins, J. D. *Cat Bonds and Other Risk-Linked Securities*.
