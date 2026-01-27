# Target Redemption Forwards TARF: The Accumulator

## I. Executive Summary

**Target Redemption Forwards (TARFs)** are FX hedging products for corporates (Importers/Exporters). They offer a **subsidized exchange rate** (better than Forward) in exchange for a **Knock-Out** if profits reach a certain Target. However, if the market moves against the corporate, they are obligated to trade at the unfavorable rate, often with **leverage** (2x notional). "Accumulators" are similar equity variants ("I kill you later").

## II. Formal Definitions

### Definition 2.1 (The Construct)
-   **Strike:** Better than Market (e.g., EUR/USD 1.10 when Market is 1.08).
-   **Leverage:** If Spot < Strike, Buy $1M$ at Strike. If Spot > Strike, Sell $2M$ at Strike?
-   **Target Cap:** If total profit > $50,000, Structure terminates.

### Definition 2.2 (The Trap)
Upside is Capped (Target Knock-Out).
Downside is Unlimited (and often Leveraged).
Corporate treasurer thinks: "I get 1.10 rate guaranteed until I make $50k!"
Reality: "You sold deep OTM Puts to fund the subsidy."

## III. Theoretical Framework

### 3.1 Brazil/Mexico 2008
Corporates (Sadia, Aracruz) sold TARFs on USD.
Betting USD would NOT rise.
USD exploded (+50%).
Leverage kicked in (2x Notional).
Accumulated losses in billions.
Bankruptcies.

### 3.2 Pricing
Value = Zero at inception.
Long Strip of Subsidy Options vs Short Strip of Knock-In Puts.
The Target feature complicates valuation (Path dependent).
Monte Carlo required.

## IV. Strategic Applications

### 4.1 "Zero Cost" Collar?
Sold as "Zero Cost Hedging."
No premium upfront.
But the tail risk is massive.
True hedging should reduce risk, TARFs often increase it (by adding leverage).

### 4.2 Equity Accumulators (KODA)
"Knock-Out Discount Accumulator."
Buy stock daily at 90% of price.
If stock rises > 105%, Knock Out.
If stock crashes, obligated to buy at 90% (which is now above market).
"I Kill You Later."
Popular in Hong Kong Wealth Management.

## V. Exercises

**Exercise 1 (Duration Extension):**
If market moves against you (Losses), the Target is never reached.
The product stays alive for full maturity (e.g., 2 years).
Maximizing the pain period.
If market moves in favor (Profits), Target reached in 1 month.
Hedge disappears. You are unhedged for 23 months.

**Exercise 2 (Restructuring):**
When TARF blows up.
Bank restructures: "We lend you money to pay the loss, and extend the TARF for 10 years."
"Extend and Pretend."

## VI. References
-   Dodd-Frank. *Regulation of FX Derivatives*.
-   CME. *Case Studies in Derivatives Disasters*.
