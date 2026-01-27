# Wash Trading and Churning

## I. Executive Summary

**Wash Trading** is the practice of buying and selling the same asset simultaneously (or quickly) to create artificial **Volume** and **Activity**. It involves no change in beneficial ownership. **Churning** is excessive trading by a broker to generate **Commissions**. Both corrupt the data: Wash trading inflates liquidity (luring victims), while Churning erodes client capital.

## II. Formal Definitions

### Definition 2.1 (Wash Trade Mechanics)
Trader A (Account 1) Sells 100 @ 10.00.
Trader A (Account 2) Buys 100 @ 10.00.
Net Result: Flat position. Cost: Fees.
Gain: Volume prints on tape.
Why? To trigger "Volume Algos" or getting ranked higher on CoinMarketCap (Crypto).

### Definition 2.2 (Churning)
Metrics:
**Turnover Ratio:** Annual Purchases / Avg Equity.
**Cost-to-Equity:** Commissions / Avg Equity.
If Turnover > 6 (Portfolio replaced 6x/year) and Strategy is "Long Term Value," it is Churning.
Legal Test: "Control" (Broker controls account) + "Excessive" (relative to objectives).

## III. Theoretical Framework

### 3.1 The Crypto Epidemic
Bitwise Report (2019).
95% of Bitcoin Spot Volume was fake (Wash).
Exchanges incentivized to show high volume to get Listing Fees.
"Fake it till you make it."
Distorts all liquidity metrics (Slippage looks low, but is real high).

### 3.2 Tax Loss Harvesting vs Wash Sale
**Legal:** Sell Loser, Buy different correlation asset. (Harvest Loss).
**Illegal Wash Sale:** Sell Loser, Buy *same* asset within 30 days.
IRS disallows the loss deduction.
Not "Market Manipulation" per se, but "Tax Avoidance" rule.

## IV. Strategic Applications

### 4.1 Detecting Self-Trades
Exchange prevention.
"Self-Match Prevention" (SMP) keys.
If Buy Order ID (Firm A) matches Sell Order ID (Firm A).
Engine cancels one or both.
Prevents accidental wash trading by HFT algos.

### 4.2 Volume weighted metrics
Traders ignore exchanges with high Wash ratios.
"Real Volume" filters.
If Spread is \$0.01 but Vol is \$1B, and Price doesn't move? Suspicious.
Gilet-Arrneaux tests.

## V. Exercises

**Exercise 1 (NFT Wash):**
Sold NFT to myself for \$1M.
Now the "Floor Price" is history of \$1M.
Lure a sucker to buy for \$500k ("50% Discount").
Classic Wash Trading fraud in illiquid assets.

**Exercise 2 (The Commission Grind):**
Broker executes 50 trades a day for a grandmother.
Account curve: Down linear (Fees).
Market curve: Up.
Fiduciary breach.

## VI. References
-   Aggarwal, R. & Wu, G. *Stock Market Manipulations*.
-   Aloosh, A. *Fake Volume in Crypto Markets*.
