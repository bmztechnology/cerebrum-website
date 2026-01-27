# Non Deliverable Forwards NDF: Offshore FX

## I. Executive Summary

**Non-Deliverable Forwards (NDFs)** are derivatives used to trade currencies with **Capital Controls** (CNY, INR, BRL, KRW) offshore. Since the currency cannot be physically delivered (restricted convertibility), the contract is **Cash Settled in USD**. The NDF rate reflects the offshore market's expectation of the currency, often deviating from the onshore controlled rate.

## II. Formal Definitions

### Definition 2.1 (Settlement)
Buy 1M USD/BRL NDF at Strike 5.00.
Fixing Date (Expiry).
Spot Rate (PTAX) = 5.20.
Difference = 0.20 BRL per USD.
Payment = $1M \times 0.20 / 5.20$ (Converted to USD).
Winner receives USD. Loser pays USD. BRL never touched.

### Definition 2.2 (Pricing)
$F_{NDF} = S \times \frac{1+r_{BRL\_implied}}{1+r_{USD}}$.
$r_{BRL\_implied}$ is the offshore yield.
Often higher than onshore yield due to "Convertibility Risk premium."

## III. Theoretical Framework

### 3.1 Onshore vs Offshore Gap
CNY (Onshore) vs CNH (Offshore).
CNY managed by PBOC (Fixing band).
CNH floats freely in HK/London.
Gap between CNY and CNH represents capital flight pressure.
NDFs trade closer to CNH.

### 3.2 Fixing Risk
Settlement depends on an official "Fixing Rate."
Central Banks can manipulate the Fixing to burn speculators.
"Fixing Scandal."
Traders fear the Central Bank acting on Fixing Day.

## IV. Strategic Applications

### 4.1 Emerging Market Hedging
US Corp has factory in Brazil.
Revenues in BRL. Can't repatriate easily.
Hedge via NDF.
If BRL crashes, NDF pays out USD. Offsets asset loss.

### 4.2 Carry Trade
Long high-yielding currency (INR) via NDF.
Receive implied yield spread.
Risk: Currency devaluation wipes out yield.
"Picking up pennies in front of a steamroller" (FX edition).

## V. Exercises

**Exercise 1 (The Real Plan):**
Brazil Real NDFs priced in massive devaluation.
Government stabilized currency.
Shorts squeezed.
NDF curve moved from steep Contango to flat.

**Exercise 2 (Settlement Date):**
Fixing is T-2.
A lot can happen in 2 days.
But since it settles in USD, payment is usually T+2.
Standard FX spot convention.

## VI. References
-   Lipscomb, L. *An Overview of Non-Deliverable Foreign Exchange Markets*.
-   EMTA. *Template Terms for NDFs*.
