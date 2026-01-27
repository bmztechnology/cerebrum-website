# Synthetic CDO Squared: Leverage on Leverage

## I. Executive Summary

A **Synthetic CDO** does not hold actual bonds; it holds **CDS portfolios** (selling protection). It is a pure credit risk transfer machine. A **CDO Squared ($CDO^2$)** is a CDO where the underlying assets are *tranches of other CDOs*. This creates **double leverage** and extreme correlation sensitivity. It was the "Weapon of Mass Destruction" that amplified the Subprime Crisis.

## II. Formal Definitions

### Definition 2.1 (Synthetic Structure)
SPV sells Notes to Investors.
SPV takes Cash and buys Treasuries (Collateral).
SPV sells CDS on 100 companies.
If Default: SPV sells Treasuries to pay CDS counterparty. Investor loses principal.
If No Default: Investor gets Treasury Yield + CDS Premiums.

### Definition 2.2 (The Square Logic)
Inner CDOs (Mezzanine tranches of MBS).
Outer CDO buys these Mezz tranches.
If Housing prices dip 10%:
$\to$ Subprime defaults rise.
$\to$ Inner Mezz tranches wiped out (0 recovery).
$\to$ Outer CDO holds 100% defaulted assets.
$\to$ Outer CDO AAA tranche wiped out.
AAA rated paper turned to zero overnight.

## III. Theoretical Framework

### 3.1 Correlation Leverage
$CDO^2$ is a "Correlation of Correlations" bet.
Sensitivity is exponential.
Small errors in correlation assumptions lead to 100% pricing errors.
"Modelling the tail of the tail."

### 3.2 The Magnification Effect
\$100M of Subprime Bonds.
Put into CDOs. Creates \$80M AAA, \$20M Mezz.
\$20M Mezz put into CDO^2. Creates \$15M AAA, \$5M Equity.
Total AAA created: \$95M on \$100M of junk?
Alchemy. Relied on uncorrelated defaults.

## IV. Strategic Applications

### 4.1 Bespoke Tranches
Hedge Fund wants to Short specific subprime bonds.
Bank builds a Synthetic CDO referencing those bonds.
Bank buys the CDS protection (Short).
Bank sells the CDO Liability to a pension fund (Long).
The "Abacus" trade (Goldman Sachs).
Short side selects the "worst" assets. Long side is the patsy.

### 4.2 Index Tranches (CDX)
Standardized Synthetic CDOs.
Trade on CDX.IG and CDX.HY.
Liquid, transparent.
Used for hedging macro credit risk.
"Buying the Equity Tranche of CDX.HY" = Leveraged Long Credit.

## V. Exercises

**Exercise 1 (Thickness):**
Standard Tranche 0-3% (Equity).
Thin tranche $\implies$ Binary outcome.
Either 0% loss or 100% loss.
Digital risk profile.

**Exercise 2 (Counterparty Chain):**
The Synthetic CDO relies on the protection *buyer* (Bank) paying premiums.
And the SPV (Collateral) paying out defaults.
If Collateral was invested in Lehman paper?
Structural failure.

## VI. References
-   Rajan, U., et al. *The Failure of Models that Predict Failure: Distance, Correlation and Conflicts of Interest*.
-   Tett, G. *Fool's Gold*.
