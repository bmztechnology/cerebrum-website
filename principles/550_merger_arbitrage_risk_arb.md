# Merger Arbitrage Risk Arb: Deal Spread

## I. Executive Summary

**Merger Arbitrage** involves buying the stock of a Target company after an acquisition is announced, betting that the deal will close at the declared price. The stock typically trades at a discount to the deal price (The **Spread**) to account for **Regulatory Risk** (Antitrust), **Financing Risk**, or **Walking Away Risk**. The strategy essentially sells "Disaster Insurance" on the deal.

## II. Formal Definitions

### Definition 2.1 (Cash Deal)
Bid: \$100 Cash.
Target Price: \$98.
Profit: \$2.
Return: $\$2 / \$98 \approx 2\%$.
If Deal closes in 3 months: Annualized $\approx 8\%$.
Risk: Deal breaks, price falls to pre-announcement (\$70).
Loss: \$28.
Asymmetric: Win small often, lose big rarely. (Short Put profile).

### Definition 2.2 (Stock Deal)
Bid: 0.5 shares of Acquirer.
Strategy: buy 1 Target, Short 0.5 Acquirer.
Locks in the spread regardless of Acquirer's stock moves.
"Spread Trade."

## III. Theoretical Framework

### 3.1 Binary Outcomes
Deal Success (1): Payout Spread.
Deal Fail (0): Payout Break Price.
Market Probability $P$ implied by spread.
$Price = P \times DealPrice + (1-P) \times BreakPrice$.
Arb profits if $P_{market} < P_{true}$.
(Market overestimates antitrust risk).

### 3.2 Beta Analysis
Merger Arb has low Beta to S&P 500 (0.1 to 0.2).
But High Beta to "Market Crashes."
In a crash, deals break (Financing dries up, MAC clauses triggered).
Correlations spike in tails.

## IV. Strategic Applications

### 4.1 Bidding Wars
Upside Option.
If Interloper bids \$110.
Arb makes huge profit.
"Long Volatility" component (rare).

### 4.2 Regulatory Environment
FTC / DOJ stance (e.g., Lina Khan).
Aggressive antitrust $\implies$ Spreads widen (Arb opportunities yield more).
But Break Rates increase.
Alpha comes from predicting court outcomes (MSFT / Activision).

## V. Exercises

**Exercise 1 (The Collar):**
Deal terms: "0.5 shares if Acquirer < \$100, 0.6 if Acquirer < \$80."
Fixed Value collar.
Hedging requires dynamic ratio adjustment (Gamma trading).

**Exercise 2 (Dividends):**
Who keeps the dividend during pendency?
Terms of Agreement.
Usually Target assumes no new dividends?
Or if allowed, Price adjusts?
Spread calculation must account for dividends/carry.

## VI. References
-   Mitchell, M. & Pulvino, T. *Characteristics of Risk and Return in Risk Arbitrage*.
-   Cornelli, F. *Risk Arbitrage in Takeovers*.
