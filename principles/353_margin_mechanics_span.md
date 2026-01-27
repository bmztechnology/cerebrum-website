# Margin Mechanics SPAN: Leverage Algebra

## I. Executive Summary

Futures Exchanges use **SPAN (Standard Portfolio Analysis of Risk)** to calculate margin requirements. Unlike Equity Margin (Reg T, 50% fixed), SPAN is **risk-based**. It simulates portfolio losses under 16 scenarios (Price Up/Down, Vol Up/Down). The Margin is set to cover the **One-Day Value at Risk (VaR)** (e.g., 99% confidence). This allows for massive leverage (20x-100x) but subjects traders to **Variation Margin** calls.

## II. Formal Definitions

### Definition 2.1 (Margin Types)
-   **Initial Margin:** Collateral required to open trace (e.g., $5,000 for $100,000 contract). Held at Clearing House.
-   **Maintenance Margin:** Lower threshold (e.g., $4,000).
-   **Variation Margin (VM):** Daily PnL settlement. If account < Maintenance, must top up to *Initial*.

### Definition 2.2 (SPAN Scanning)
Simulates:
1.  Price $\pm$ Range.
2.  Vol $\pm$ Range.
3.  Extreme moves (Cover 3 sigma).
4.  Inter-month spreads.
5.  Inter-commodity credits (e.g., Long Gold / Short Silver offset).
Result: The worst-case loss is the margin.

## III. Theoretical Framework

### 3.1 Leverage Ratio
Capital Efficiency = Notional / Margin.
S&P 500 Future (ES): Notional $200k. Margin $12k. Leverage $\approx$ 16x.
10Y Treasury (ZN): Leverage $\approx$ 50x.
Currencies (6E): Leverage $\approx$ 30x.
Increases as Volatility Drops (Margins are dynamic).

### 3.2 Liquidity Spirals
Market Crashes $\implies$ Volatility Spikes.
SPAN recalculates $\implies$ Initial Margin Doubles.
Traders get Margin Called.
Must Sell positions to raise cash.
Selling crashes market further.
"Procyclicality of Margins."

## IV. Strategic Applications

### 4.1 Cross-Margining
Holding Offsetting positions at same Clearing House (CME).
Long Crude / Short Gasoline.
Scanning Risk considers the correlation.
Margin reduction (Credit) of 40-70%.
Increases ROE.

### 4.2 FCM Risk Management
Futures Commission Merchants (Brokers) often charge *more* than SPAN.
"House Margin."
To protect themselves from client blowups (e.g., OptionSellers.com).
Understanding the difference between Exchange Min and Broker Min.

## V. Exercises

**Exercise 1 (The Call):**
Account $10,000. Initial $5,000. Maint $4,000.
Lose $6,500.
Balance $3,500. (< $4,000).
Call Amount?
Must go back to $5,000.
Deposit $1,500.

**Exercise 2 (Negative Equity):**
Swiss Franc Event 2015.
Gap move exceeded Margin held.
Clients went negative.
Brokers (FXCM) absorbed the loss $\implies$ Insolvency.
Futures Clearing Houses (CCP) mutualize this risk via "Guaranty Fund."

## VI. References
-   CME Group. *SPAN Methodology*.
-   Brunnermeier, M.K. *Deciphering the Liquidity and Credit Crunch*.
