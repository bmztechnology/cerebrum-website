# Commission Costs: The Friction of Turnover

## I. Executive Summary

Commissions and Spreads constitute the "Friction" of the market mechanism. In Physics, friction opposes motion; in Finance, costs oppose compounding. Taking 10 trades a day with high costs is mathematically equivalent to swimming upstream. Understanding the **Break-Even Win Rate** inclusive of commissions is the first step in Strategy Development.

## II. Formal Definitions

### Definition 2.1 (Total Cost of Trade - TCT)
$$TCT = (Spread \times PipValue) + (Commission_{RoundTurn})$$
*Example:* EUR/USD. Spread 0.2 pips (\$2). Comm \$7/lot.
$TCT = \$2 + \$7 = \$9$ per lot.

### Definition 2.2 (Cost-to-Profit Ratio)
$$\gamma = \frac{TCT}{AvgProfit}$$
If $\gamma > 20\%$, the strategy is likely unsustainable.

## III. Theoretical Framework

### 3.1 The ECN vs Market Maker Model
-   **ECN (Electronic Communication Network):**
    -   Spread: Variable (can be 0).
    -   Commission: Fixed (e.g., \$3.50 per side).
    -   *Best for:* Scalpers using Limit Orders inside the spread.
-   **Market Maker (STP/Dealing Desk):**
    -   Spread: Fixed/Marked-up (e.g., 1.5 pips).
    -   Commission: \$0.
    -   *Best for:* Swing Traders (Simplicity) or News Traders (Fixed spreads during volatility).

### 3.2 The Impact of Turnover
Strategy A: 1 Trade/Week. Target 100 pips. Cost 1 pip. Cost ratio 1%.
Strategy B: 100 Trades/Week. Target 5 pips. Cost 1 pip. Cost ratio 20%.
*Theorem:* High Frequency trading requires exponentially higher Edge to overcome linear Cost accumulation.

## IV. Strategic Applications

### 4.1 IB (Introducing Broker) Rebates
Professional traders sign up via IBs to get "Cashback" on commissions (e.g., \$2 back per lot).
This can turn a Break-Even system into a Profitable one purely through rebate arb.

### 4.2 Minimum Efficiency Scale
"Never trade for less than 10 pips."
This rule ensures that transaction costs remain negligible (Strategy A).

## V. Exercises

**Exercise 1 (Audit):**
You trade 1000 Lots a year. Comm is \$7/lot.
Total Cost = \$7,000.
Your Net Profit is \$5,000.
What is your Gross Profit? (\$12,000).
Who made more money, you or the broker?
What does this suggest about your trading frequency?

**Exercise 2 (Spread Analysis):**
Broker A: Spread 1.0 pip. Comm \$0.
Broker B: Spread 0.1 pip. Comm \$7/lot.
For a Scalper targeting 3 pips, which is better?
(Hint: 1 pip = \$10. Broker A cost = \$10. Broker B cost = \$1 + \$7 = \$8. Broker B is cheaper).

**Exercise 3 (Execution):**
Why do Commissions matter less for a Position Trader holding for 3 months? (Swap matters more).

## VI. References
-   Harris, L. (2003). *Trading and Exchanges*.
-   Kissell, R. (2013). *The Science of Algorithmic Trading*.
