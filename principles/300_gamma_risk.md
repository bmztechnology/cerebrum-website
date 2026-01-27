# Gamma Risk: The Convexity Engine

## I. Executive Summary

**Gamma ($\Gamma$)** measures the rate of change of Delta with respect to the Underlying Price. It is the **Second Derivative** of value ($V$) with respect to price ($S$). $\Gamma = \partial^2 V / \partial S^2$. Gamma represents the **curvature** of the PnL graph. Long Gamma means your PnL accelerates as you are right (Convexity). Short Gamma means your losses accelerate as you are wrong (Concavity / Blowing Up).

## II. Formal Definitions

### Definition 2.1 (The Accelerator)
-   $\Delta$: Speed (Miles per hour).
-   $\Gamma$: Acceleration (Miles per hour squared).
High Gamma $\implies$ Delta changes rapidly.
ATM Options near Expiry has MAXIMUM Gamma.
Deep ITM/OTM has nearly Zero Gamma (Linear behavior).

### Definition 2.2 (Long vs Short Gamma PnL)
-   **Long Option (Long Gamma):** You make money from Volatility. Hedge by selling High, buying Low (Scalping).
-   **Short Option (Short Gamma):** You lose money from Volatility. Hedge by buying High (Panic), selling Low (Panic). Rebalancing destroys equity.

## III. Theoretical Framework

### 3.1 Gamma Squeeze Mechanics
A "Meme Stock" rises. Retail buys OTM Calls.
Market Makers (MM) sell Calls $\to$ MM are Short Gamma.
Price rises. Delta rises.
MM must BUY stock to hedge.
Buying drives Price higher.
Price higher $\to$ Delta higher $\to$ MM Buys MORE.
Feedback loop until implied volatility prices out the move.

### 3.2 Shadow Gamma
Does Gamma exist between expiry?
Yes. It dictates Re-hedging frequency.
If Gamma is low, hedge once a day.
If Gamma is high (Expiry day), hedge every second. HFT speed required.

## IV. Strategic Applications

### 4.1 Gamma Scalping
Strategy: Long Straddle (Long Gamma).
Market moves Up. Delta becomes positive. Sell stock to Neutralize.
Market moves Down. Delta becomes negative. Buy stock to Neutralize.
Result: Buy Low, Sell High repeatedly.
Profit from Scalping > Theta Decay Cost?
If yes, profitable.

### 4.2 Suicide Risk (Short Straddle)
Selling Earnings Volatility.
Stock gaps 20%.
Delta goes $0 \to 1$ instantly.
Gamma was infinite.
Loss is theoretically unlimited using linear hedging models.
Real risk: Gap risk.

## V. Exercises

**Exercise 1 (The Pin):**
Stock is at 100 on Expiry Friday.
Open Interest at 100 Strike is huge.
Dealers are Short Gamma.
If price 100.01 $\to$ Buy.
If price 99.99 $\to$ Sell.
Dealers force the stock to stick to 100.
"Pinning the Strike."

**Exercise 2 (Gamma Rent):**
Theta is the rent you pay to rent the Gamma.
$\Theta \approx - \frac{1}{2} \sigma^2 S^2 \Gamma$.
There is no free lunch. High Gamma requires High Theta bill.

## VI. References
-   Sinclair, E. *Option Trading: Pricing and Volatility Strategies*.
-   Natenberg, S. *Option Volatility and Pricing*.
