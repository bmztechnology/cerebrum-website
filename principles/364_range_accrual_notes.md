# Range Accrual Notes: Time to Range

## I. Executive Summary

**Range Accrual Notes** pay a high coupon for every day the underlying asset (LIBOR, FX, Equity) stays within a specified **Range** (Lower Barrier < S < Upper Barrier). If the asset exits the range, accrual stops for those days. This product allows investors to express a view on **Low Volatility** or **Side-ways Markets**.

## II. Formal Definitions

### Definition 2.1 (Payoff Formula)
$$ Coupon = Rate \times \frac{n}{N} $$
-   $N$: Total days in period.
-   $n$: Number of days inside range.
-   Range: e.g., 0% < LIBOR < 6%.

### Definition 2.2 (Digital Strip)
Range Accrual = Portfolio of **Digital Options** (Binary).
For every day, Short Digital Call (Upper Strike) and Long Digital Call (Lower Strike).
Or simplified: "Betting on the corridor."

## III. Theoretical Framework

### 3.1 Volatility Selling
Investor is Short Volatility.
If Vol increases, range exit probability increases ($n \downarrow$).
Coupon drops.
Product value drops.

### 3.2 Correlation (Multi-Asset)
"Dual Range Accrual."
CMS10 > 2% AND S&P > 2000.
Requires *both* conditions.
Sensitive to Correlation.
If Rates Up and Stocks Down (Negative Correlation), conditions rarely met together.
Payoff drops.

## IV. Strategic Applications

### 4.1 Steepener Range
"Accrues if CMS30 - CMS2 > 0 (Positive Curve)."
Betting against Inversion.
Very popular trade ("The Curve is always normal").
When curve inverts (2006, 2019, 2022), coupon goes to zero.
"Widowmaker."

### 4.2 Inflation Ranger
Accrues if CPI < 3%.
"Betting on Transitory Inflation".
If Inflation holds at 4%, Note pays zero.
Principal usually protected, but opportunity cost (Yield) is lost.

## V. Exercises

**Exercise 1 (Bermudan Component):**
Issuer often has the right to Call the note (Callable Range Accrual).
If Market stays in range (Note paying high coupon), Issuer Calls it to refinance.
If Market exits range (Note paying zero), Issuer keeps it alive.
Negative Convexity for Investor.

**Exercise 2 (Libor Fixing Risk):**
Daily observation.
Fixing risk on specific days?
Actually, range accruals are smoothed (average over 90 days).
Less susceptible to daily manipulation than Barriers.

## VI. References
-   Das, S. *Structured Products Volume 1*.
-   Nomura. *Range Accrual Pricing*.
