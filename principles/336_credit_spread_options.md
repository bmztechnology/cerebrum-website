# Credit Spread Options: Volatility of Default

## I. Executive Summary

**Credit Spread Options (CSOs)** or **CDS Options** allow investors to speculate on or hedge the **Volatility** of credit spreads. A **Payer Swaption** gives the right to buy protection (Wide Spreads) at a fixed strike. A **Receiver Swaption** gives the right to sell protection. They are used to hedge "Blowout Risk" without paying the negative carry of a CDS.

## II. Formal Definitions

### Definition 2.1 (Payoff)
Option on Index (CDX).
Strike $K = 100$ bps.
Expiry $T$.
If $Spread_T > 100$: Payer Option ITM.
Value = PV of Annuity of $(Spread_T - 100)$.
Calculated using the "Risky DV01."

### Definition 2.2 (Credit Volatility)
What is the volatility of a Credit Spread?
Lognormal?
Spreads can jump massively (Jump diffusion).
Credit Vol is typically much higher than Equity Vol or Rate Vol.
Skew is steep (Upside strikes expensive).

## III. Theoretical Framework

### 3.1 Cancelable CDS
Buy CDS. Sell Receiver Swaption (Embedded).
Result: You have CDS, but if Spreads tighten, counterparty cancels it.
Lowers the premium paid.
"Callable Protection."

### 3.2 Conditional Probability
Option on Default?
No, Option on the Spread (Market view of default).
But deep OTM Payer Swaption effectively acts as "Crash Insurance."
Like an OTM Put on the S&P, but for Credit.

## IV. Strategic Applications

### 4.1 Hybrid Hedging
Bank emits bond. Wants to hedge against spread widening (Mark to Market loss).
Buy Payer Swaption on CDX.
If Crisis hits, Bond price falls, Swaption pays out.
Cheaper than shorting the CDX index (which costs carry).

### 4.2 LBO Candidates
XYZ spreads are 200 bps.
If LBO, spreads go to 500 bps.
Buy Call on Spread (Payer Option).
Limited loss (Premium) if LBO doesn't happen.
Huge gain if it does.

## V. Exercises

**Exercise 1 (The Knock-Out):**
Credit Switch.
Option to switch exposure from Name A to Name B.
Driven by correlation view.

**Exercise 2 (Negative Spreads?):**
Can spreads be negative? No.
Models use Lognormal or Shifted Lognormal.
Boundary at zero.
Unlike Rates (Normal model), Credit needs non-negativity.

## VI. References
-   Schonbucher, P.J. *Pricing Credit Options*.
-   Barclays. *The Credit Derivatives Handbook*.
