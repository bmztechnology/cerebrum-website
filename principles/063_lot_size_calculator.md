# Position Sizing: The Mathematics of Survival

## I. Executive Summary

Position Sizing (or Money Management) is the most critical variable in any trading system. It determines "How Much" to trade. While the entry signal determines *probability* (Win Rate), position sizing determines *payoff* (Geometric Growth) and *survival* (Risk of Ruin). A winning strategy with poor sizing will lead to bankruptcy (Gambler's Ruin), while a mediocre strategy with perfect sizing can generate a fortune (Anti-Martingale). The goal is to maximize the Compound Growth Rate (CAGR) while minimizing the probability of a Drawdown $>\delta$.

## II. Formal Definitions

### Definition 2.1 (The Core Formula)
$$Units = \frac{AccountRisk(\$)}{TradeRisk(per\_unit)}$$
Where:
-   $AccountRisk(\$) = Equity \times Risk\%$.
-   $TradeRisk(per\_unit) = |Entry - StopLoss| \times ValuePerPoint$.

### Definition 2.2 (Risk of Ruin - RoR)
The probability that equity drops to a "Ruin point" (e.g., 0).
For a system with Edge $E$ and Sizing $f$:
If $f$ is too high (Over-leveraged), $RoR \to 1$.

## III. Sizing Models

### 3.1 Fixed Lot (Amateur)
"I trade 1 lot per trade."
-   *Flaw:* Does not account for Stop Loss distance. A 100 pip stop risk is 10x the risk of a 10 pip stop. Leads to inconsistent volatility.

### 3.2 Fixed Percentage Risk (Standard)
"I risk 1% of my account per trade."
$$Risk\$ = \$100,000 \times 0.01 = \$1,000$$
-   *Scenario A (Stop 20 pips):* $\$1,000 / (20 \times \$10) = 5 Lots$.
-   *Scenario B (Stop 100 pips):* $\$1,000 / (100 \times \$10) = 1 Lot$.
-   *Advantage:* Standardizes risk. Losing either trade costs exactly the same ($1,000).

### 3.3 The Kelly Criterion (Theoretical Optimum)
Determines the optimal fraction $f^*$ to bet to maximize growth.
$$f^* = \frac{W - (1-W)}{R} = \frac{Edge}{Odds}$$
*Example:* Win 60%, R=1.
$f^* = (0.60 - 0.40)/1 = 0.20$ (Risk 20% per trade!).
*Danger:* Full Kelly is wildly volatile. Practitioners use **Half-Kelly** ($f^*/2$) to reduce variance by 75% while only reducing growth by 25%.

## IV. The Calculation Algorithm (Forex Specific)

1.  **Input:**
    -   Account Equity ($E$): \$10,000
    -   Risk % ($R_p$): 2%
    -   Pair: EUR/USD
    -   Entry: 1.1050
    -   Stop Loss: 1.1030 (20 pips)
2.  **Determine $ Amt $:**
    -   $Risk\$ = 10,000 \times 0.02 = \$200$.
3.  **Determine Stop Distance:**
    -   $D = 20$ pips.
4.  **Calculate Pip Value Needed:**
    -   $Value/Pip = \$200 / 20 = \$10/pip$.
5.  **Convert to Units:**
    -   1 Standard Lot (100k) $\approx$ \$10/pip.
    -   Size = 1.0 Lots.

## V. Advanced Nuances

### 5.1 Correlation Risk Adjustment
If you risk 2% on EUR/USD and 2% on GBP/USD (Correlation 0.9), you are actually risking 4% on "Short USD."
*Rule:* Divide risk by number of correlated positions.

### 5.2 Volatility Sizing (Turtle Trading)
Size based on ATR.
$$N = ATR$$
Dollar Risk = $C \times N$.
Adjust units so that a $1N$ move equals 1% equity.

## VI. Exercises

**Exercise 1 (Calculation):**
Account: \$50,000. Risk: 1%.
Pair: GBP/JPY. (Pip Value of 1 Lot $\approx$ \$9.00).
Stop Loss: 50 pips.
Calculate maximum Lot Size.
($Risk = 500$. $Risk/Trade = 50 \times 9 \times Lots$. Solve for Lots).

**Exercise 2 (Kelly Criterion):**
Strategy Stats: Win 50%, Payoff 2:1.
Calculate Full Kelly \%.
Would you trade Full Kelly? Why not? (Drawdown).

**Exercise 3 (Correction):**
You have computed a size of 5.38 Lots.
Your broker only allows 0.1 increments.
Do you round up to 5.4 or down to 5.3?
(Always round **down** to stay inside risk limits).

## VII. References
-   Kelly, J.L. (1956). *A New Interpretation of Information Rate*.
-   Tharp, V. (1998). *Definitive Guide to Position Sizing*.
-   Vince, R. (1995). *The New Money Management*.
