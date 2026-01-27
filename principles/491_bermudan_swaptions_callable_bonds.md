# Bermudan Swaptions Callable Bonds: Multi-Exercise

## I. Executive Summary

A **Bermudan Swaption** allows the holder to enter into a swap on any one of a set of specified dates (e.g., every coupon date). This structure is embedded in **Callable Bonds** (Issuer has the right to Call/Redeem the bond on any anniversary). Pricing requires **Tree Models** (Hull-White) or Monte Carlo methods because the decision to exercise depends on the future state of interest rates and the value of remaining options.

## II. Formal Definitions

### Definition 2.1 (European vs American vs Bermudan)
-   **European:** Exercise only at expiry $T$.
-   **American:** Exercise anytime $0$ to $T$.
-   **Bermudan:** Exercise on discrete set dates $\{t_1, t_2, ... t_n\}$.
Like the island Bermuda is between Europe and America.

### Definition 2.2 (Callable Bond Structure)
Issuer sells Bond.
Issuer buys Bermudan Receiver Swaption (Call Option on Bond price).
Coupon paid to investor is higher than non-callable debt.
Spread = Option Premium amortized.

## III. Theoretical Framework

### 3.1 Optimal Exercise Boundary
At each node of the tree:
Compare *Immediate Exercise Value* vs *Continuation Value* (Hold the option).
If Value of Call > Value of Bond, Issuer Calls.
Refinancing Logic: Call if current rates < coupon rates.

### 3.2 Mean Reversion Parameter ("a")
Hull-White Model key input.
Speed of mean reversion.
High $a$ $\implies$ Rates stay near mean $\implies$ Low Volatility $\implies$ Low Option Value.
Low $a$ $\implies$ Rates wander $\implies$ High Volatility $\implies$ High Option Value.
Traders calibrate $a$ to match prices of European Swaption diagonal.

## IV. Strategic Applications

### 4.1 Zero Coupon Callable (Zero Callables)
30 Year Zero. Callable every 5 years.
Huge duration. Huge convexity.
Popular with Insurance companies (yield enhancement) and Hedge Funds (Gamma trading).
"Prisoner's Dilemma": If rates rise, bond is not called. You are stuck with a 30Y Zero losing value fast. "Extension Risk."

### 4.2 Agency Callables
Fannie/Freddie issue Callables.
They use the optionality to hedge their mortgage portfolio (which has prepayment risk).
They construct a "Perfect Hedge" by matching the Bermudan Call (Liability side) with the Prepayment Option (Asset side).

## V. Exercises

**Exercise 1 (Negative Convexity):**
For the Investor, Callable Bond has negative convexity.
Price rises limited (capped at Call Price).
Price falls unlimited.
Yield must justify this asymmetry.

**Exercise 2 (Lockout Period):**
"10NC5"
10 Year Maturity. Non-Callable for 5 years.
Bermudan option starts at year 5.
Cheaper option (shorter expiry window) $\implies$ Lower yield pickup.

## VI. References
-   Andersen, L. *Interest Rate Modeling in Three Volumes*.
-   Tuckman, B. *Fixed Income Securities*.
