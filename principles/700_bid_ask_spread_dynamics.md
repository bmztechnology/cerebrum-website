# Bid Ask Spread Dynamics

## I. Executive Summary

The **Bid-Ask Spread** is the cost of immediacy and the compensation for risk. It is composed of three components: **Order Processing Cost** (Fees/Ops), **Inventory Risk** (Holding a volatile asset), and **Adverse Selection** (Trading with someone smarter). Quantifying these components (Roll Model from 1984) allows traders to decompose transaction costs and estimate volatility from tick data.

## II. Formal Definitions

### Definition 2.1 (The Roll Model)
$P_t = P^* + c Q_t$.
$P_t$ = Observed Trade Price.
$P^*$ = True Fundamental Value.
$Q_t$ = Buy/Sell Indicator (+1 / -1).
$c$ = Half-Spread cost.
Derived: $Spread = 2 \sqrt{-\text{Cov}(\Delta P_t, \Delta P_{t-1})}$.
Spread can be estimated from the negative serial correlation of price changes (Bid-Ask bounce).

### Definition 2.2 (Kyle's Lambda - Market Impact)
$\Delta P = \lambda \times OrderFlow$.
$\lambda$ measures "Illiquidity" (slope of price response).
Spread is fixed cost. Impact is variable cost.

## III. Theoretical Framework

### 3.1 Inventory Control
Stoll (1978).
Market Maker wants inventory $I = 0$.
If $I > 0$ (Long), MM lowers Ask (to sell) and lowers Bid (to discourage buying).
"Skewing the quotes."
Spread dynamics are driven by MM inventory management.

### 3.2 Informed vs Uninformed Flow
Glosten-Milgrom (1985).
MM loses to Informed Traders (Insider).
MM wins from Uninformed Traders (Noise).
Spread must be wide enough that:
$Gain_{Uninformed} > Loss_{Informed}$.
If probability of Informed trading rises (Earnings release), Spread widens to infinity (Liquidity dries up).

## IV. Strategic Applications

### 4.1 Spread Tearing
In volatile markets, Spread widens.
Algo must "Cross the Spread" to exit?
Costly.
"Passive Execution": Placing a limit order *inside* the spread to get filled by a counter-party.
Saves the Spread cost.
Risk: Chase risk (Price runs away).

### 4.2 Tick Size Constraints
SEC Rule 612 (Sub-Penny Rule).
Stocks > \$1.00 must satisfy \$0.01 tick.
If Spread is naturally \$0.001 (High Liquidity, e.g., MSFT or SPY), the \$0.01 tick is artificial constraint.
result: Massive queues at the bid/ask.
The spread is "Constrained."

## V. Exercises

**Exercise 1 (The Bounce):**
Price: 10.00, 10.01, 10.00, 10.01, 10.00.
True Value: 10.005.
Volatility: 0 (Fundamental).
Measured Volatility: Positive (Due to bounce).
Roll Model filters this noise.

**Exercise 2 (Pre-News Widening):**
Watch spread 1 minute before Fed Announcement.
Widens from 1 tick to 10 ticks.
MMs pulling quotes to avoid Adverse Selection (The News).
Automated risk management.

## VI. References
-   Roll, R. *A Simple Implicit Measure of the Effective Bid-Ask Spread*.
-   Glosten, L. & Milgrom, P. *Bid, Ask and Transaction Prices in a Specialist Market*.
