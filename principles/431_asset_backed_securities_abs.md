# Asset Backed Securities ABS: Consumer Credit

## I. Executive Summary

**ABS** securitize non-mortgage assets like **Auto Loans**, **Credit Card Receivables**, and **Student Loans**. Unlike MBS (Prepayment risk), ABS focus on **Credit Risk**. Structures use **Credit Enhancement** (Overcollateralization, Subordination, Reserve Accounts) to achieve AAA ratings for the senior tranches, even if the underlying assets are Subprime.

## II. Formal Definitions

### Definition 2.1 (Amortizing vs Revolving)
-   **Amortizing (Auto):** Finite life. Principal pays down monthly. Pool shrinks.
-   **Revolving (Credit Card):** Master Trust. New charges replenish the pool. "Revolving Period" (Interest only) followed by "Amortization Period" (Paydown).
-   **Early Amortization Event:** If defaults spike, Revolving period stops. Investors get paid out immediately.

### Definition 2.2 (Credit Enhancement)
-   **Subordination:** Junior tranches eat losses first.
-   **Overcollateralization (OC):** Assets \$110. Bonds \$100. \$10 equity cushion.
-   **Excess Spread:** Asset Yield (10%) - Bond Coupon (4%) - Fees (1%) = 5% Excess.
Excess spread accumulates in a Reserve Account to cover future losses.

## III. Theoretical Framework

### 3.1 Loss Curves
Default Timing matters.
Auto Loans: Defaults peak in months 6-18. (Lemon effect).
Student Loans: Defaults peak after graduation grace periods.
ABS models use "Timing Curves" (SDA - Standard Default Assumption).

### 3.2 Granularity
ABS pools are highly granular (100,000 auto loans).
Law of Large Numbers applies.
Idiosyncratic risk vanishes.
Systemic risk (Unemployment) remains.

## IV. Strategic Applications

### 4.1 Whole Loan Sales vs Securitization
Lender choice:
1. Sell loans to Hedge Fund (Whole Loan). Fast, clean exit.
2. Securitize. Retain the bottom 5% (Skin in the game). Get cheap funding for 95%.
Securitization offers lower cost of funds (AAA execution).

### 4.2 Subprime Auto
Deep subprime (APR 20%).
Securitized. Senior bonds yield 5%.
Equity tranche yields 20%+.
Risk: Used Car Prices.
Recovery Rate depends on auction value of repossessed cars.
Manheim Index correlation.

## V. Exercises

**Exercise 1 (Delinquency Triggers):**
Deal documents.
If 60+ Day Delinquency > 5%.
OC Target Trap increases.
Excess spread is diverted to pay down Senior Principle (Turbo).
Juniors get starved of cash.

**Exercise 2 (Prepays in ABS):**
Auto loans do prepay (Trade-in car).
Voluntary prepay is good (Credit upgrade).
Involuntary prepay (Total loss/Theft) is neutral (Insurance pays).
Prepayment risk is less critical/correlated than in MBS.

## VI. References
-   Standard & Poor's. *Rating Methodology for ABS*.
-   Moody's. *Auto Loan ABS*.
