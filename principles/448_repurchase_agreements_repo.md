# Repurchase Agreements Repo: The Engine

## I. Executive Summary

**Repo** is a collateralized loan. A borrower sells a security (Collateral) to a lender with an agreement to buy it back later at a higher price. The difference is the **Repo Rate**. It is the primary means by which banks and hedge funds finance their trading books. The distinction between **General Collateral (GC)** (Any Treasury) and **Specials** (Specific CUSIPs) drives rates.

## II. Formal Definitions

### Definition 2.1 (The Transaction)
-   **Start Leg (t=0):** Borrower gives Bond. Lender gives Cash (\$98).
-   **End Leg (t=1):** Borrower returns Cash + Interest (\$98 + \$0.01). Lender returns Bond.
-   **Haircut (Margin):** Value of Bond (\$100) - Cash Lent (\$98) = 2% Haircut. Protects lender against bond price drops.

### Definition 2.2 (Specials)
If a specific bond is in high demand (Short sellers need to borrow it), the Repo Rate for that bond drops (maybe to 0% or negative).
"Trading Special."
The lender of the cash (who gets the bond) accepts a low yield because the *bond* is the valuable asset.

## III. Theoretical Framework

### 3.1 Leverage Creation
Hedge Fund buys \$100 Treasury.
Repos it out for \$98 cash.
Buys another \$98 Treasury.
Repos it out...
Theoretical Leverage = $1/Haircut$.
If Haircut = 2%, Leverage = 50x.
If Haircut rises to 5% (Crisis), fund must de-lever (Fire sales).

### 3.2 Counterparty Risk
Repo is "Safe" because it's collateralized.
But if Counterparty defaults AND Collateral value crashes (Correlation), Lender loses.
Lehman Brothers 2008: Repo market pulled back haircuts, causing the run.

## IV. Strategic Applications

### 4.1 Cash Management
Corporates with excess cash buy Reverse Repo (Lend Cash).
Safe, short term yield.
Better than uninsured bank deposits.

### 4.2 Matched Book
Dealer borrows cash at 4.0% (Repo). Lends cash at 4.1% (Reverse Repo).
Captures the spread.
Maintains market liquidity.

## V. Exercises

**Exercise 1 (Negative Repo):**
If Repo Rate = -1%.
Borrower *pays* lender interest to lend cash?
Yes. Because the Borrower is effectively "Buying" the bond borrowing service.
Implicitly: Bond Borrow Fee = Risk Free Rate - Repo Rate.

**Exercise 2 (Rehypothecation):**
UK law allows Prime Broker to re-use client collateral.
US law limits it (140% of debit balance).
Creates "Money Multiplier" in shadow banking.

## VI. References
-   Gorton, G. *Slapped by the Invisible Hand*.
-   Stigum, M. *The Money Market*.
