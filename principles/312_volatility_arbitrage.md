# Volatility Arbitrage: Delta Neutral Trading

## I. Executive Summary

**Volatility Arbitrage** is the practice of trading the spread between **Implied Volatility** (Price) and **Realized Volatility** (Movement). It involves buying an option (Long Vol) and **Delta Hedging** the directional risk continuously to isolate the Volatility component. If the stock moves more than the Implied Vol paid for, the Gamma trading profits exceed the Theta decay.

## II. Formal Definitions

### Definition 2.1 (PnL Equation)
$$ PnL \approx \frac{1}{2} \Gamma S^2 (\sigma_{realized}^2 - \sigma_{implied}^2) dt $$
-   If $\sigma_{realized} > \sigma_{implied}$: You Make Money (Long Vol).
-   If $\sigma_{realized} < \sigma_{implied}$: You Lose Money (Short Vol).
-   Gamma ($\Gamma$) acts as the leverage multiplier.

### Definition 2.2 (Delta Hedging Frequency)
-   **Continuous:** Impossible (Transaction costs).
-   **Daily:** Standard.
-   **Move-based:** Hedge every time Delta changes by 0.10.
Fixed-interval hedging vs Band-based hedging affects realized volatility capture.
"Path Dependency."

## III. Theoretical Framework

### 3.1 Rolling Delta
Buy Straddle. Stock 100.
Price goes to 105. Call gains Delta.
You are now Long Delta.
To remain Neutral, Sell Stock.
Price goes to 95. Put gains Negative Delta.
To remain Neutral, Buy Stock.
"Buy Low, Sell High." (Gamma Capture).

### 3.2 VRP Extraction
Since IV is usually > RV.
The standard trade is **Short Vol Arb**.
Sell Straddle. Delta Hedge.
Collect Theta. Pay Gamma.
Since Gamma bills are usually less than Theta income, profit is positive.
"Picking up pennies."

## IV. Strategic Applications

### 4.1 Earnings Arb
IV pumps to 100% before earnings.
Historical earnings move is 5% (RV $\approx$ 80%).
Spread exists. Sell the Straddle.
Hedge immediately after announcement.
Capturing the "Event Premium."

### 4.2 Gamma Squeeze Participation
If you identify a Gamma Squeeze.
Buy Calls.
Do NOT Delta Hedge initially (Ride the directional wave).
Once momentum stalls, Delta Hedge to lock in the Volatility profits.
Convert Directional PnL into Volatility PnL.

## V. Exercises

**Exercise 1 (Transaction Costs):**
Bid-Ask spread on stock and option.
If spreads are wide, Vol Arb is dead.
Only works in liquid markets (SPY, AAPL).
Slippage eats the $\sigma_{realized}$ edge.

**Exercise 2 (The Gap Risk):**
Short Vol Arb.
Stock is 100.
Overnight gaps to 80.
You couldn't hedge at 95, 90, 85.
You hedge at 80.
You sold low (Panic).
Massive loss.
Delta Hedging assumes continuous markets.

## VI. References
-   Sinclair, E. *Volatility Trading*.
-   Taleb, N.N. *Dynamic Hedging*.
