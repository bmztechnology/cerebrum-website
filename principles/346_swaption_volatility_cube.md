# Swaption Volatility Cube: The SABR Model

## I. Executive Summary

A **Swaption** is an option to enter a Swap. The pricing requires a **Volatility Cube** because volatility depends on three dimensions: **Expiry** (of the option), **Tenor** (of the underlying swap), and **Strike**. The industry standard for modeling this surface is the **SABR Model** (Stochastic Alpha Beta Rho), which captures the "Smile" and the dynamic behavior of the "Backbone."

## II. Formal Definitions

### Definition 2.1 (Dimensions)
1.  **Expiry:** 1M, 1Y, 5Y ... (When the option dies).
2.  **Tenor:** 2Y, 5Y, 10Y, 30Y ... (Length of the swap entered).
    -   "5 into 10" (5y10y): 5Y Option on 10Y Swap.
3.  **Strike:** ATM, OTM (Moneyness).

### Definition 2.2 (SABR Parameters)
-   $\alpha$: Volatility level (Atm Vol).
-   $\beta$: Backbone (0 = Normal, 1 = Lognormal). Relation between Rate level and Vol.
-   $\rho$: Skew (Correlation between Rate and Vol).
-   $\nu$ (Vol of Vol): Smile Convexity.
Fits the market smile perfectly.

## III. Theoretical Framework

### 3.1 Cash vs Physical Settlement
-   **Physical:** You enter the swap.
-   **Cash:** You get the PV of the swap.
-   *The Conundrum:* The "Cash Annuity" used in settlement is different from the "Physical Annuity."
-   Requires "Cash Settlement Adjustment" in the model.

### 3.2 The Backbone
If Rates rise, does Volatility rise?
-   Log-normal ($\beta=1$): Yes (Constant % vol $\implies$ Higher absolute vol).
-   Normal ($\beta=0$): No (Constant absolute vol).
-   CEV ($\beta=0.5$): Mixed.
Market usually acts like $\beta \approx 0.5$.

## IV. Strategic Applications

### 4.1 Bermudan Calibration
To price a Bermudan Swaption (Callable on many dates).
You need the *entire* Vol Cube (Correlation between different forward rates).
Calibrating 2-Factor Hull-White models to the Swaption Cube is the "Holy Grail" of Quant IT.

### 4.2 Grid Pricing
Pricing a 10x10 grid of Swaptions.
Finding the "Sweet Spot."
e.g., Short 1y10y Vol, Long 5y5y Vol.
Vol Curve trading.

## V. Exercises

**Exercise 1 (Zero Rates Issue):**
Shifted SABR.
Standard SABR fails at Negative Rates ($Rate^\beta$ undefined).
Shift Rate: $R' = R + Shift$ (e.g., +2%).
Model works again.

**Exercise 2 (ATM Straddle):**
Swaption Straddle is the purest trade on Rate Volatility.
Used to hedge Mortgage Servicing Rights (MSR).
MSR portfolio is Short Vega (Prepayment risk).
Buy Swaption Straddle (Long Vega).

## VI. References
-   Hagan, P., et al. *Managing Smile Risk (The SABR Paper)*.
-   Rebonato, R. *Modern Pricing of Interest-Rate Derivatives*.
