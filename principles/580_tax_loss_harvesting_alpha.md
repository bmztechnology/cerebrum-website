# Tax Loss Harvesting Alpha

## I. Executive Summary

**Tax Loss Harvesting (TLH)** is a systematic strategy to realize losses in a portfolio to offset capital gains, thereby reducing the client's tax liability. This "Tax Alpha" can add 0.5% to 1.0% in after-tax returns annually. It involves selling a loser and immediately buying a **Correlated Substitute** to maintain market exposure while booking the tax asset.

## II. Formal Definitions

### Definition 2.1 (Wash Sale Rule)
IRS Rule: Cannot deduct loss if "Substantially Identical" security is bought within 30 days.
Strategy:
Sell Coca-Cola (Loss).
Buy Pepsi (Substitute).
Maintains "Consumer Staples" exposure.
Or: Sell S&P 500 ETF (SPY) $\to$ Buy Russell 1000 ETF (IWB).

### Definition 2.2 (Tax Alpha)
$Alpha_{tax} = (TaxRate \times HarvestedLoss) / AUM$.
Deferral value: Paying tax in 20 years is better than paying today.
Step-up basis at death makes deferral permanent.

## III. Theoretical Framework

### 3.1 Volatility Usage
High volatility creates more harvesting opportunities.
2020 Crash was a "Harvesting Bonanza."
Direct Indexing (owning 500 stocks instead of ETF) maximizes TLH.
Dispersion: Even if Index is flat, some stocks are down. Harvest them.

### 3.2 Asset Location
Low Tax assets (Muni Bonds, Stocks) in Taxable Accounts.
High Tax assets (High Yield, REITs) in IRAs/401ks.
Optimizing *where* assets sit leads to higher net wealth.

## IV. Strategic Applications

### 4.1 Direct Indexing
Software eats the ETF.
Wealthfront / Parametric.
Buy S&P 500 one by one.
Harvest losses on individual names daily.
Beats ETF structure by 50-100bps after tax.

### 4.2 Charitable Giving
Donate "Highly Appreciated Stock" to charity.
Avoid Capital Gains Tax.
Deduct fair market value.
Better than donating cash.

## V. Exercises

**Exercise 1 (Tracking Error):**
Substitute basket tracks the sold asset?
Risk of drift.
Optimizer must constrain tracking error while maximizing harvested losses.

**Exercise 2 (Basis Reset):**
Eventually, portfolio basis becomes very low.
No more losses to harvest.
"Lock-in" effect.
Strategy value decays over time unless new cash is added.

## VI. References
-   Arnott, R. *The Tax Efficiency of Active Management*.
-   Kitces, M. *Evaluating the Tax Deferral and Tax Bracket Arbitrage Value of Tax Loss Harvesting*.
