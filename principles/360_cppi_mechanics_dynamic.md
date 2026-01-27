# CPPI Mechanics Dynamic: Portfolio Insurance

## I. Executive Summary

**Constant Proportion Portfolio Insurance (CPPI)** is a dynamic trading strategy used to guarantee capital protection while participating in upside. Unlike PPNs (which use Options), CPPI allocates between a **Risky Asset** (Equity) and a **Safe Asset** (Cash/Bonds) algorithmically. As Portfolio Value rises, allocation to Risky Asset increases (Leverage). If Value falls, allocation shifts to Safe Asset. It mimics the Delta profile of a Call Option.

## II. Formal Definitions

### Definition 2.1 (The Formula)
$$ Exposure = Multiplier \times (Assets - Floor) $$
-   **Floor:** PV of the Guarantee (Bond Floor).
-   **Cushion:** $Assets - Floor$.
-   **Multiplier ($m$):** Risk aggression (usually 3 to 5).
If Cushion is Positive, buy $m \times Cushion$ in Stocks.
If Cushion $\to$ 0, Stocks $\to$ 0 (Cash Lock).

### Definition 2.2 (Cash Lock Risk)
If the Risky Asset crashes so fast that the Cushion hits zero before you can rebalance.
The Portfolio goes 100% Cash.
"Monetized."
You get your principal back at maturity, but zero upside forever.
"The CPPI Trap."

## III. Theoretical Framework

### 3.1 Gap Risk
CPPI works in continuous time (Black Scholes world).
In real markets, prices Gap.
If Stock drops $1/m$, the Cushion is wiped out instantly.
For $m=5$, a 20% drop wipes you out.
Banks hedge this "Gap Risk" by buying Gap Options or charging hefty fees.

### 3.2 Pro-Cyclicality
CPPI buys when market is up ("Momentum").
Sells when market is down ("Panic").
If CPPI funds are large size, they *cause* volatility.
1987 Crash: "Portfolio Insurance" (early CPPI) caused the meltdown via automated selling.

## IV. Strategic Applications

### 4.1 Funds of Funds
CPPI used to lend on Hedge Fund portfolios.
"Leverage Facility."
If HF NAV drops, Bank forces de-leveraging.
Death Spiral.

### 4.2 Retail "Click Funds"
Guaranteed products in Europe.
Underlying engine is CPPI.
If market drops in year 1, fund "Cash Locks."
Investors angry they miss the recovery in Year 3.
"Individual CPPI" (iCPPI) tailored to specific investor timelines.

## V. Exercises

**Exercise 1 (Multiplier Calculation):**
Fund 100. Floor 90. Cushion 10.
Multiplier 5.
Equity Exposure = 50. Bond = 50.
Stock drops 10%. Equity becomes 45.
Fund Value = 95. Cushion = 5.
New Exposure = $5 \times 5 = 25$.
Must sell 20 units of Stock.
"Sell Low."

**Exercise 2 (Re-risking):**
Some CPPIs have a mechanism to "Re-risk" (Buy back in) if volatility drops.
Helps avoid the permanent Cash Lock.

## VI. References
-   Black, F., & Jones, R. *Simplifying Portfolio Insurance*.
-   Perold, A. *Constant Proportion Portfolio Insurance*.
