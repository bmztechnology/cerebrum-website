# Dual Currency Deposits: FX Yield

## I. Executive Summary

A **Dual Currency Deposit (DCD)** is a short-term deposit paying a high interest rate. The Depositor selects a **Base Currency** and an **Alternate Currency**. The Bank has the right to repay the Principal + Interest in the *Alternate Currency* at a pre-agreed Strike Rate. It is essentially a **Covered Call** strategy (or Short Put) embedded in a bank account.

## II. Formal Definitions

### Definition 2.1 (The Flows)
-   Deposit $1M USD.
-   Tenor: 1 Month.
-   Yield: 10% p.a. (Market rates 1%).
-   Strike: EUR/USD 1.05 (Current 1.07).
-   **If EUR/USD > 1.05:** Repay $1M + Interest in USD.
-   **If EUR/USD < 1.05:** Repay converted amount in EUR at 1.05.
-   Depositor receives EUR when EUR is weak.

### Definition 2.2 (Option View)
Customer = Long Cash + Short Put (Strike 1.05).
Premium received = The Extra Yield (9%).
Customer takes downside FX risk.

## III. Theoretical Framework

### 3.1 Moneyness
Usually "Out of the Money" strike to make conversion less likely.
Closer strike $\implies$ Higher Yield (More risk).
Yield is directly proportional to Implied Volatility of the FX pair.

### 3.2 Suitability
Suitable for Corporates who *need* the alternate currency?
"If I get converted to EUR, I'll just use it to pay my European suppliers."
"Target Buying."
Unsuitable for pure savers who cannot handle FX volatility.

## IV. Strategic Applications

### 4.1 Carry Trade Lite
Japanese Retail (Mrs. Watanabe).
Deposit JPY. Alternate AUD or NZD.
Strike far OTM.
Take the yield pickup.
If JPY strengthens massively (flash crash), converted to depreciating AUD.

### 4.2 Liquidity Trap
DCDs lock up cash for the term (e.g., 1 month).
Cannot withdraw early without penalty (Break cost = Option repurchase cost).
If liquidity is needed during crisis, break costs are huge.

## V. Exercises

**Exercise 1 (Conversion Calculation):**
Deposit \$100k. Strike 1.00 USD/CAD. Yield 12%. 1 Month.
Spot ends at 1.10 (CAD strengthens).
Bank pays USD.
Spot ends at 0.90 (CAD weakens).
Bank pays CAD. \$100k / 1.00 = 100k CAD.
Value of 100k CAD in USD = \$90k.
Loss of 10% Principal.

**Exercise 2 (Terminology):**
"Premium Currency" vs "Alternate Currency."
Always clear which currency is the risk.

## VI. References
-   Wystup, U. *FX Options and Structured Products*.
-   Citibank. *Dual Currency Investment Guide*.
