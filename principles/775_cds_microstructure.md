# CDS Microstructure and default

## I. Executive Summary

**Credit Default Swaps (CDS)** are insurance contracts against default. Microstructure involves **Single Names** (Apple CDS) and **Indices** (CDX IG, iTraxx). The market is highly concentrated among major dealers. Pricing is driven by **hazard rates** and **recovery rates**. The **CDS-Bond Basis** connects the derivative to the cash bond, creating arbitrage opportunities.

## II. Formal Definitions

### Definition 2.1 (The Standard Contract)
"Big Bang" Protocol (2009).
Resulted in standardized coupons (100bps or 500bps).
Upfront payment adjusts for the difference between Market Spread and Coupon.
Standardized QUarterly Expiries (Mar, Jun, Sep, Dec).
Improved liquidity.

### Definition 2.2 (The Credit Event)
Determined by ISDA Determinations Committee.
Bankruptcy, Failure to Pay, Restructuring.
If Event triggers: Auction held to determine Recovery Rate ($R$).
Protection Seller pays $(1 - R)$ to Buyer.

## III. Theoretical Framework

### 3.1 Capital Structure Arbitrage
Going Long Equity / Buying CDS?
If Company leverages up (LBO). Equity up, Credit down (CDS up).
Win/Win?
Or Short Equity / Sell CDS?
Betting on Mean Reversion of the firm's value.
Merton Model links Equity Volatility to Credit Spread.

### 3.2 The Negative Basis Trade
Bond Yields > CDS Spread + Risk Free.
Basis < 0.
Arb: Buy Bond, Buy CDS protection.
Risk-free yield pickup?
Risks:
1. Repo cost of bond rises.
2. Counterparty risk on CDS.
3. Bond defaults but ISDA says "Not a trigger" (orphan risk).

## IV. Strategic Applications

### 4.1 Signaling
CDS spreads lead Earnings?
Insider hedging via CDS.
"Credit leads Equity."
If CDS widens while Stock rallies $\implies$ Short Stock.
Credit analysts see balance sheet rot first.

### 4.2 Index Skew
CDX Index trades tighter than sum of constituents?
Implied Correlation trades.
Buying the Index Protection (Cheap) vs Selling Single Name Protection (Expensive).
Betting on systemic stability vs idiosyncratic rot.

## V. Exercises

**Exercise 1 (The Greek Crisis):**
Holders of Greek Bonds bought CDS.
EU negotiated "Voluntary Bail-in" (Haircut).
ISDA ruled "Voluntary" $\neq$ Default.
CDS didn't pay.
Hedges failed.
Legal microstructure matters.

**Exercise 2 (Curve Trades):**
Buy 1Y Protection, Sell 5Y Protection.
Betting on immediate survival but long term doom?
Or capitalizing on inverted credit curves (Distress).

## VI. References
-   Duffie, D. *Credit Swap Valuation*.
-   O'Kane, D. *Modelling Single Name and Multi-name Credit Derivatives*.
