# Collateralized Loan Obligations CLO: LevLoans

## I. Executive Summary

**CLOs** are the engine of the Corporate Loan market. They securitize portfolios of **Leveraged Loans** (Senior Secured, Floating Rate). The structure is an **Arbitrage Vehicle**: The yield on the Loan Assets (Assets) > Cost of CLO Liabilities (AAA to BB bonds). The **CLO Equity** captures the arbitrage spread, offering potentially high (15-20%) returns but bearing the first loss and the risk of cash flow diversion.

## II. Formal Definitions

### Definition 2.1 (The Waterfall)
Interest Waterfall:
1.  Senior Fees / Expenses.
2.  AAA Interest.
3.  AA to BB Interest.
4.  **Equity Distribution.**
Principal Waterfall: Reinvested during **Reinvestment Period** (typically 5 years). After that, pays down Sequentially.

### Definition 2.2 (OC Tests)
Overcollateralization Ratio = Par Value of Assets / Par Value of Debt.
If Ratio < Target (e.g., 105%): **OC Test Failure.**
Consequence: Interest diverted from Equity (and Juniors) to pay down AAA Principal.
"Deleveraging the structure."
Protects Seniors. Dilutes Equity.

## III. Theoretical Framework

### 3.1 The Arbitrage
Spread on Loans: L + 400.
Weighted Average Cost of Debt (WACC): L + 180 (mostly AAA at L+130).
Net Margin: 220 bps.
Leverage: 10x (Equity is 10% of deal).
Equity Return $\approx 10 \times 2.2\% = 22\%$ minus defaults.

### 3.2 Default vs MTM
CLOs are **Cash Flow** structures, not Market Value structures.
If Loan Price drops to 80, CLO is fine (unlike a Repo margin call).
As long as Borrower pays interest and principal at maturity.
Allows CLOs to ride out volatility better than Mark-to-Market funds.
Only actual Defaults hurt the OC ratio.

## IV. Strategic Applications

### 4.1 CCC Buckets
Limit: Max 7.5% CCC assets.
If downgrades spike (Recession), CCC bucket overflows (> 7.5%).
Excess CCC marked at Market Value (e.g., 50) instead of Par inside OC Test.
Triggers OC Failure $\to$ Cash Trap.
Manager actively trades to avoid CCCs ("Par building" vs "Risk reduction").

### 4.2 CLO Equity "Optionality"
Equity has an option to Call (Refinance) the debt after Non-Call Period (2 years).
If Spreads tighten, refinance AAA from L+150 to L+110.
Boosts Equity return.
If Spreads widen, lock in cheap financing.
Positive convexity for Equity holder.

## V. Exercises

**Exercise 1 (Weighted Average Rating Factor - WARF):**
Quantitative metric of portfolio credit quality.
Manager constraints: WARF < 2800.
If Manager buys HY asset, WARF rises. Must sell something else.
Matrix constraints.

**Exercise 2 (Loan Floors):**
Loans often have LIBOR Floors (1%).
Bonds (Liabilities) do not.
If Rates < 1%. Asset = 1% + Spread. Liab = 0% + Spread.
Equity captures the Floor benefit.
Huge windfall in ZIRP era.

## VI. References
-   Standard & Poor's. *CLO Rating Criteria*.
-   Credit Suisse. *Leveraged Finance Guide*.
