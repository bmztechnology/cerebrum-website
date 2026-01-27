# Caps Floors Collars: Floating Hedges

## I. Executive Summary

**Interest Rate Caps** are portfolios of call options (Caplets) on a floating rate index (LIBOR/SOFR). They limit the maximum interest rate paid by a borrower. **Floors** limit the minimum rate received. A **Collar** combines buying a Cap and selling a Floor to reduce the premium cost. These instruments are standard requirements in leveraged finance (LBO) deals to protect the borrower's DSCR.

## II. Formal Definitions

### Definition 2.1 (Caplet Payoff)
For each period $t$:
$$ Payoff = Notional \times \tau \times \max(L_t - K, 0) $$
-   $L_t$: LIBOR/SOFR rate.
-   $K$: Cap Strike (e.g., 5%).
-   $\tau$: Day count fraction.
Cap Price = Sum of prices of all Caplets (1 to $T$).

### Definition 2.2 (The Zero Cost Collar)
Borrower wants Cap at 6%. Premium is \$1M.
Too expensive.
Borrower sells Floor at 2%. Premium is \$1M.
Net Cost = 0.
Risk: If rates drop below 2%, Borrower pays Floor payoff (Interest floor).
Result: Rate is locked between 2% and 6%.

## III. Theoretical Framework

### 3.1 Volatility Smile
Caplets have strikes.
Smile (Volatility vs Strike) is pronounced.
Deep OTM Caps (Strike 10%) trade at high implied vols (Tail risk).
ATM Caps trace the flat vol.

### 3.2 Negative Rates
Floors at 0%.
In Europe, 0% Floor became ITM.
Lenders had to pay Borrowers?
Documentation crisis.
"Zero Floor" clauses inserted into loan docs.

## IV. Strategic Applications

### 4.1 Debt Covenants
Bank requires Borrower to hedge at least 50% of floating debt.
Borrower buys 2Y Cap.
Cheapest hedge structure.
Swap locks in rate (Delta 1). Cap allows participating in lower rates (Delta < 1).

### 4.2 Cap-Swaption Parity?
Is a Cap related to a Swaption?
A Cap is a strip of options on *Forward Rates*.
A Swaption is an option on a *Forward Swap Rate*.
Swap Rate $\approx$ Average of Forward Rates.
Correlation between forward rates matters.
If correlation = 1, Cap $\approx$ Swaption.

## V. Exercises

**Exercise 1 (Digital Cap):**
Binary payoff.
If LIBOR > 5%, Pays 1%.
Used in structured notes (Range Accruals).

**Exercise 2 (Knock-Out Cap):**
Cap disappears if rates go *too* high (e.g., 8%).
Cheaper premium.
"Up and Out."
Risky: You lose protection exactly when you need it most.

## VI. References
-   Hull, J. *Options, Futures, and Other Derivatives*.
-   ISDA. *Definitions for Interest Rate Derivatives*.
