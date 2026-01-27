# Liquidity Risk Measurement: The Illusion

## I. Executive Summary

**Liquidity Risk** is the risk of being unable to exit a position within a desired timeframe without significantly impacting the price. It comes in two forms: **Market Liquidity Risk** (Bid-Ask wideness/Depth) and **Funding Liquidity Risk** (Unable to roll debt/margin). Standard risk models (VaR) often assume perfect liquidity (instant exit at mid-price), leading to the "Liquidity Illusion."

## II. Formal Definitions

### Definition 2.1 (Liquidity Adjusted VaR)
$LVaR = VaR + LiquidityCost$.
$Cost = \frac{1}{2} (BidAsk) + MarketImpact$.
Market Impact $\propto \sqrt{\frac{Size}{Volume}}$.
For large positions, Impact dominates.

### Definition 2.2 (Days to Liquidate)
$DTL = \frac{Position Size}{Daily Volume \times Participation Rate}$.
If you own 10% of daily volume.
Participation Rate limit 20% (to avoid crashing price).
$DTL = 0.5 Day$.
If market freezes (Volume -90%), DTL explodes to 5 days.

## III. Theoretical Framework

### 3.1 Liquidity Spirals
Brunnermeier & Pedersen.
Funding Liquidity $\leftrightarrow$ Market Liquidity.
Traders lose funding $\implies$ Fire Sale assets $\implies$ Market Liquidity dries up $\implies$ Margins increase $\implies$ More funding loss.
Vicious cycle.

### 3.2 The Bid-Ask Bounce
Geometric Brownian Motion assumes continuous trading.
In reality, price bounces between Bid and Ask.
Roll Measure (covariance of adjacent price changes) estimates spread from close-to-close data.
$Spread \approx 2\sqrt{-Cov(\Delta P_t, \Delta P_{t-1})}$.

## IV. Strategic Applications

### 4.1 Liquidity Tiering
Classify assets:
Tier 1: US Treasuries, G10 FX (1 day).
Tier 2: Large Cap Stocks (2 days).
Tier 3: High Yield Bonds (5-10 days).
Tier 4: Private Equity (Years).
Match Asset Liquidity to Liability Liquidity (Redemption terms).

### 4.2 Redemption Gates
Real Estate Funds (BREIT).
Limit withdrawals to 5% per quarter.
Prevents fire sale of illiquid buildings.
Protects remaining investors.

## V. Exercises

**Exercise 1 (Gap Risk):**
Market closes. Bad news. Opens -10%.
Stop loss order ("Sell at -2%") executed at -10%.
Liquidity vanished in the gap.
VaR assumes continuous trading.

**Exercise 2 (Cost of Liquidity):**
Liquid assets (Treasuries) yield less. "Liquidity Premium."
Illiquid assets (Private Credit) yield more. "Illiquidity Premium."
Investors harvest the premium but bear the risk of being locked in.

## VI. References
-   Amihud, Y. *Illiquidity and Stock Returns*.
-   Brunnermeier, M. *Deciphering the Liquidity and Credit Crunch*.
