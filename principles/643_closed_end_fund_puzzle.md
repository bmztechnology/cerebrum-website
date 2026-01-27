# Closed End Fund Puzzle

## I. Executive Summary

**Closed-End Funds (CEFs)** issue a fixed number of shares that trade on an exchange. The puzzle is that `Price` rarely equals `Net Asset Value (NAV)`. CEFs typically IPO at a premium, trade at a substantial **Discount** (10-20%), and the discount narrows upon announcement of liquidation. Standard finance cannot explain why \$1 of assets sells for \$0.80.

## II. Formal Definitions

### Definition 2.1 (The Discount)
$$ Discount = \frac{NAV - Price}{NAV} $$
If NAV = \100, Price = \$85, Discount = 15%.
This implies you can buy the portfolio for 85 cents on the dollar.
Dividend Yield is effectively boosted: $Yield_{Price} > Yield_{NAV}$.

### Definition 2.2 (Investor Sentiment Theory)
Lee, Shleifer, Thaler (1991).
CEFs are held by Retail Investors (Noise Traders).
Discount reflects **Retail Sentiment Risk**.
When retail is bearish, discount widens.
Rational institutions cannot arbitrage it (no mechanism to force open-ending).
The discount is a measure of "Small Investor Pessimism."

## III. Theoretical Framework

### 3.1 Agency Costs
Manager fees consume value.
Is the discount just the PV of future fees?
Calculation: $PV(Fees) \approx 10\%$.
Explains some, but not the volatility of the discount.

### 3.2 Limits to Arbitrage
You cannot exchange shares for assets (Closed).
You must wait for liquidation.
"Noise Trader Risk": The discount might widen to 30% before it closes.
Arbitrageur could go bust waiting for convergence.

## IV. Strategic Applications

### 4.1 Activist Arbitrage
Boaz Weinstein (Saba Capital).
Buy 10% of CEF trading at 20% discount.
Launch proxy fight to fire manager or convert to Open-End Fund (ETF).
Force gap closure.
"Structural Alpha."

### 4.2 Mean Reversion
Buy when Discount > 20% (Z-score -2).
Sell when Discount < 5% (Z-score 0).
Trading the sentiment cycle.

## V. Exercises

**Exercise 1 (IPO Premium):**
CEFs sold at IPO include a 5% commission.
Investors pay \$1.05 for \$1.00 of assets.
1 year later, it trades at \$0.90.
Why buy at IPO?
Salesmanship (Broker incentives).

**Exercise 2 (Illiquid Assets):**
CEFs hold Muni Bonds or Loans.
NAV might be "Stale" (Mark-to-Model).
Market Price might be the "True" price.
Discount is actually a Liquidity Premium.

## VI. References
-   Lee, C., Shleifer, A. & Thaler, R. *Investor Sentiment and the Closed-End Fund Puzzle*.
-   Pontiff, J. *Closed-End Fund Premia and Returns*.
