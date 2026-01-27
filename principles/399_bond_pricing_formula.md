# Bond Pricing Formula: Clean vs Dirty

## I. Executive Summary

**Bond Pricing** is the discounted sum of future cash flows (Coupons + Principal). Ideally, $P = \sum C \times DF_t + Face \times DF_T$. However, in secondary markets, bonds trade at a **Clean Price** (excluding Accrued Interest) to avoid price jumps on coupon dates. The actual cash paid is the **Dirty Price** (Clean + Accrued).

## II. Formal Definitions

### Definition 2.1 (The Formula)
$$ P_{dirty} = \sum_{i=1}^{n} \frac{C}{(1+y)^{t_i}} + \frac{Face}{(1+y)^{T}} $$
-   $C$: Coupon Payment.
-   $y$: Yield to Maturity.
-   $t_i$: Time to cashflow (in years).

### Definition 2.2 (Accrued Interest)
Interest earned since last coupon.
$AI = Coupon \times \frac{DaysSinceLast}{DaysInPeriod}$.
$P_{clean} = P_{dirty} - AI$.
Bloomberg screens show Clean Price.
Settlement requires Dirty Price.

## III. Theoretical Framework

### 3.1 Pull to Par
As a bond approaches maturity, its price converges to Par (100).
Premium Bond (Price > 100): Price falls over time.
Discount Bond (Price < 100): Price rises over time.
"Amortization of Premium/Discount."

### 3.2 Price-Yield Relationship
Convex relationship.
Price falls when Yield rises.
Non-linear.
At very low yields, price sensitivity (Duration) is higher.

## IV. Strategic Applications

### 4.1 The Coupon Effect
High Coupon bonds have lower Duration (Cashflow is returned earlier).
Zero Coupon bonds have Max Duration ($D=T$).
In rising rate environment, traders prefer High Coupon bonds (Less sensitive).

### 4.2 Stripping
Separating Coupons (IO) from Principal (PO).
Creates Zero Coupon bonds from a Coupon bond.
"Treasury STRIPS."
Allows precise matching of liabilities.

## V. Exercises

**Exercise 1 (Sawtooth Pattern):**
Dirty Price chart looks like a sawtooth.
Rises daily by accrued interest.
Drops instantly by Coupon Amount on payment date.
Clean Price smooths this out.

**Exercise 2 (Negative Yield Pricing):**
If $y < 0$.
Price > Sum of Cashflows.
You pay \$105 to get back \$100.
Guaranteed loss (nominal).
Rational if holding cash costs -1% (Storage/Fees).

## VI. References
-   Choudhry, M. *The Bond and Money Markets*.
-   Veronesi, P. *Fixed Income Securities*.
