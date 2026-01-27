# Negative Interest Rate Policy: Sub-Zero Economics

## I. Executive Summary

**Negative Interest Rate Policy (NIRP)** (EU, Japan, Swiss) upended financial mathematics. It charges depositors for holding cash. It forces fixed income models (BSM) to abandon Lognormality (since $\ln(-r)$ is undefined) in favor of **Normal (Bachelier)** or **Displaced Diffusion** models. It creates bizarre incentives like "Subsidy for Borrowing" (TLTRO) and taxes on banking reserves.

## II. Formal Definitions

### Definition 2.1 (Mechanics)
Central Bank Deposit Rate: -0.50%.
Commercial Banks hold reserves at CB. Pay 50bps/year.
Pass through to Corporates/Retail?
Usually gated. Retail at 0%. Corporates at -0.4%.
Banks eat the margin compression.

### Definition 2.2 (Tiering)
To save banks, CBs exempt a portion of reserves.
Tier 1: 0%.
Tier 2 (Excess): -0.5%.
Reduces the tax burden while maintaining the marginal rate signal.

## III. Theoretical Framework

### 3.1 The Zero Lower Bound (ZLB) Fallacy
Economists thought Rates > 0.
Physical Cash (0% yield) creates arbitrage.
Why pay -0.5% when you can put banknotes in a vault?
Cost of Storage/Insurance/Transport $\approx$ 50-75 bps.
The "Effective Lower Bound" (ELB) is around -0.75%.

### 3.2 Asset Pricing Implications
-   **Bonds:** Trade at Price > Par + Sum of Coupons. Guaranteed nominal loss if held to maturity. Germany Bunds yielded -0.6%.
-   **Options:** Call > Stock? No.
-   **DCF:** Discount factors $> 1$. Future cash is worth *more* than present cash. Time value of money inverted.

## IV. Strategic Applications

### 4.1 Carry Trade Funding
Borrow EUR at -0.5%.
Invest in USD at +2.0%.
Hedge FX? Forward points will imply the differential (EUR/USD Fwd premium).
If CIP holds, no free lunch.
If XCCY Basis widens, opportunity exists.

### 4.2 Corporate Issuance
LVMH issues bond at -0.1%.
Investors pay LVMH to lend them money.
Why? safer than Bank Deposit (-0.5%).
"Less Negative" is the new "Positive."

## V. Exercises

**Exercise 1 (Bachelier Model):**
Call Price $C = (F-K) N(d) + \sigma \sqrt{T} n(d)$.
Arithmetic Brownian Motion.
Allows Rates to go anywhere ($-\infty$ to $+\infty$).
Became the standard quoting convention (Normal Vol / "Basis Point Vol").

**Exercise 2 (Gold):**
Gold pays 0%.
In NIRP, 0% is High Yield.
Opportunity cost of holding gold is negative (You save money by not holding bonds).
Strong Bullish driver for zero-yielding assets.

## VI. References
-   Bachelier, L. *Théorie de la Spéculation*.
-   ECB. *Negative rates and the transmission of monetary policy*.
