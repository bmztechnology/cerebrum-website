# Inflation Swaps ZCIIS: Derivatives

## I. Executive Summary

**Zero Coupon Inflation Swaps (ZCIIS)** are the primary derivative to trade inflation. One party pays **Fixed Rate**, the other pays **Cumulative Inflation** ($CPI_T / CPI_0 - 1$) at maturity. Unlike TIPS (which have bond math/duration), ZCIIS are pure inflation exposure. They are used by Pension Funds (LDI) to hedge inflation-linked liabilities and by Utilities to hedge revenue caps.

## II. Formal Definitions

### Definition 2.1 (Payoff)
Notional $N$.
Payer (Inflation Buyer): Pay Fixed Rate $K$. Rec Variable $CPI_{change}$.
Net Flow at Maturity $T$:
$$ N \times [ (\frac{CPI_T}{CPI_0} - 1) - ((1+K)^T - 1) ] $$
Usually compounded?
Standard Quote is the annualized Fixed Rate $K$ (e.g., 2.50%).

### Definition 2.2 (Year-on-Year Swaps)
Pay $CPI_{YoY}$ annually.
Not cumulative.
Used to hedge annual COLA adjustments.
Liquidity lower than ZCIIS.

## III. Theoretical Framework

### 3.1 Swap vs Cash Breakeven
$Swap \text{ } Rate > Cash \text{ } Breakeven$?
Usually spread is +20bps.
Why?
1.  **Fund Demand:** Pensions pay up for Swaps (don't want to use cash to buy TIPS).
2.  **Balance Sheet:** Banks charge capability cost.
3.  **Deflation Floor:** TIPS have floor. Swaps do not (usually). TIPS worth more $\implies$ Yield lower $\implies$ Breakeven wider?
Wait, TIPS Value higher (Floor) $\implies$ Real Yield Lower $\implies$ BEI Wider.
So Floor makes Cash BEI > Swap?
Actually, Supply/Demand dominates. Swap curve notoriously disconnected from Cash.

### 3.2 Inter-dealer Market
Broker market.
Traded in standard tenors (1Y to 30Y).
High correlation to TIPS.

## IV. Strategic Applications

### 4.1 LDI Hedging
Pension Liability: "Pay Retiree \$1000 + CPI".
Hedge: Buy ZCIIS. Rec CPI.
Perfect match.
TIPS are imperfect (Coupon reinvestment risk, duration mismatch).

### 4.2 Utility Hedging
UK Water companies.
Revenues linked to RPI.
If RPI falls, Revenue falls. Debt service constant.
Hedge: Pay RPI in swaps.
Massive market in UK.

## V. Exercises

**Exercise 1 (Seasonality in Swaps):**
1Y Tenor.
If buying in Jan (Start Low NSA, End High NSA).
Fair rate is higher.
If buying in July.
Fair rate is lower.
"Carry" in the swap curve.

**Exercise 2 (Forward Inflation):**
$5Y \times 5Y$ Forward Swap.
Implied by 5Y and 10Y ZCIIS.
Trade: Long 10Y / Short 5Y.
Betting on backend inflation.

## VI. References
-   Kerkhof, J. *Inflation Derivatives Explained*.
-   Barclays. *Inflation Products Guide*.
