# Time Value Money TVM: The Discount Factor

## I. Executive Summary

**Time Value of Money (TVM)** is the foundational axiom of finance: A dollar today is worth more than a dollar tomorrow. This concept is quantified via **Discount Factors** and **Compounding**. In Fixed Income, precision regarding Day Count Conventions and Compounding Frequencies is critical, as small errors compound into large pricing discrepancies.

## II. Formal Definitions

### Definition 2.1 (Present Value)
$$ PV = \frac{FV}{(1 + r/n)^{n \times t}} $$
-   $r$: Annual Interest Rate.
-   $n$: Compounding frequency (1=Annual, 2=Semi-Annual, $\infty$=Continuous).
-   **Discount Factor ($DF$):** $DF(t) = \frac{1}{(1 + r)^t}$ or $e^{-rt}$.
$PV = FV \times DF(t)$.

### Definition 2.2 (Continuous Compounding)
Limit as $n \to \infty$.
$FV = PV e^{rt}$.
Standard in derivatives pricing theories (Black-Scholes).
Bond markets usually use discrete (Semi-Annual) compounding.

## III. Theoretical Framework

### 3.1 Day Count Conventions
How do we calculate $t$?
-   **ACT/ACT:** Actual days / Actual days in year. (Treasuries).
-   **30/360:** Assume 30 day months. (Corporates).
-   **ACT/360:** Actual days / 360. (Money Markets).
Ambiguity in "Year Fraction" is a major source of litigation and error.

### 3.2 The Zero Curve
A single rate $r$ doesn't exist.
There is a specific rate $r_t$ for every maturity $t$.
$DF(t) = e^{-r_t t}$.
The set of all $r_t$ forms the Zero Coupon Yield Curve.

## IV. Strategic Applications

### 4.1 Net Present Value (NPV)
Decision rule:
$NPV = \sum \frac{CF_t}{(1+r)^t} - Cost$.
If $NPV > 0$, project adds value.
Bond Pricing is simply calculating the NPV of coupons + principal.

### 4.2 Deflation
If rates are negative ($r < 0$).
$DF(t) > 1$.
Money tomorrow is worth *more* than money today.
Time value is reversed.
Happened in Europe/Japan (2014-2022).

## V. Exercises

**Exercise 1 (The Rule of 72):**
Doubling time $\approx 72 / r$.
If rate is 6%, money doubles in 12 years.
Simple mental math for TVM.

**Exercise 2 (Frequency):**
Rate 10%.
Annual Compounding: $(1.10)^1 = 1.10$.
Semi-Annual: $(1.05)^2 = 1.1025$.
Continuous: $e^{0.10} = 1.10517$.
Lenders prefer higher frequency. Borrowers prefer lower.

## VI. References
-   Fabozzi, F. *The Handbook of Fixed Income Securities*.
-   Tuckman, B. *Fixed Income Securities*.
