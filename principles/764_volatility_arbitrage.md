# Volatility Arbitrage

## I. Executive Summary

**Volatility Arbitrage** is the practice of exploiting pricing discrepancies between the **Implied Volatility** (Option Price) and the **Realized Volatility** (Future movement), or between different points on the **Vol Surface**. Unlike directional trading, it aims to be **Delta Neutral**. It extracts the "Variance Risk Premium" (VRP)—the tendency of Implied Vol to structurally exceed Realized Vol (Insurance Premium).

## II. Formal Definitions

### Definition 2.1 (The Variance Rate Swap)
Payoff at $T$: $N \times (\sigma_{realized}^2 - K_{strike}^2)$.
If you Sell Volatility ($K = 20\%$) and Realized is $15\%$.
Profit = $N \times (400 - 225) = N \times 175$.
Pure play on the spread.

### Definition 2.2 (Delta Neutral Straddle)
Sell ATM Straddle. Hedge Delta daily.
Profit = Premium Received - Hedging Costs.
If Hedging Costs (Realized Vol) < Premium (Implied Vol), Profit.
The retail version of the Variance Swap.

## III. Theoretical Framework

### 3.1 VRP Existence
Why is Implied > Realized?
1. **Risk Aversion:** Investors pay premium to hedge crashes.
2. **Capital Constraints:** Selling Vol blows up in tails (picking up pennies vs steamroller). Requires capital.
3. **Behavioral:** Loss aversion makes insurance expensive.

### 3.2 Term Structure Arb
$\sigma_{1m}$ vs $\sigma_{3m}$.
Typically Contango (Long term > Short term).
If Short term spikes > Long term (Inversion).
Arb: Sell Short term / Buy Long term?
Betting on "Mean Reversion of the Curve."
Risk: The inversion persists (e.g., 2008).

## IV. Strategic Applications

### 4.1 Iron Condors / Flys
selling wings to capture VRP.
High probability of profit.
Negative skew (One loss wipes out 10 wins).
Managing the "Exit" is the whole game.

### 4.2 Relative Value Vol
Implied Vol of AAPL vs Implied Vol of MSFT.
Spread usually bounded.
If AAPL Vol explodes spreads (Earnings?), Sell AAPL Vol / Buy MSFT Vol.
"Pairs Trading" for Volatility.

## V. Exercises

**Exercise 1 (Earnings Crush):**
Buy Straddle before earnings?
Implied Vol is 100%.
Stock moves 5%.
Realized Vol is 50%.
Loss.
"Vol Crush" post-earnings.

**Exercise 2 (The Harvest):**
Systematic Short Vol Strategy.
Sharpe Ratio 2.0.
Drawdown -60%.
Is it Arb? Or just taking Tail Risk?
True Arb is risk-free. This is Risk Premium Harvesting.

## VI. References
-   Carr, P. & Madan, D. *Towards a Theory of Volatility Trading*.
-   Hafner, R. *Volatility Arbitrage*.
