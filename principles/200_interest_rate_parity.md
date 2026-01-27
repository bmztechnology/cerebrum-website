# Interest Rate Parity (IRP): The Forex Anchor

## I. Executive Summary

**Interest Rate Parity** is the "No Arbitrage" condition connecting Interest Rates and Exchange Rates. It states that the difference in interest rates between two countries is equal to the expected change in exchange rates (Forward Premium). If US Rates are 5% and Japan Rates are 0%, the USD *should* depreciate by 5% to equalize returns. In reality, it doesn't (The Carry Trade), leading to the biggest anomaly in finance.

## II. Formal Definitions

### Definition 2.1 (Covered Interest Parity - CIP)
Guaranteed by Arbitrage (using Forwards).
$$(1+i_d) = \frac{F}{S} (1+i_f)$$
-   $i_d$: Domestic Rate.
-   $i_f$: Foreign Rate.
-   $S$: Spot Rate.
-   $F$: Forward Rate.
Using a Forward contract locks in the 5% differential.

### Definition 2.2 (Uncovered Interest Parity - UIP)
Theoretical expectation.
$$E[\Delta S] \approx i_f - i_d$$
Expected Spot should move to offset the yield advantage.
*Empirical Failure:* High Yield currencies tend to APPRECIATE (Carry Trade), violating UIP.

## III. Theoretical Framework

### 3.1 The Carry Trade
Borrow low-yield currency (JPY).
Buy high-yield currency (MXN).
Profit = Interest Differential.
Risk: Exchange Rate crash (USD/JPY spikes or MXN crashes).
"Picking up pennies in front of a steamroller."

### 3.2 Cross-Currency Basis
Post-2008, CIP broke.
Banks demanded a premium to lend Dollars.
The "Basis" is the deviation from CIP.
Negative Basis $\implies$ Dollar Shortage.
If EUR/USD Basis is -50bps, you pay a premium to swap EUR for USD.

## IV. Strategic Applications

### 4.1 Forward Pricing
Forex Brokers calculate Swap Points (Overnight financing) using CIP logic.
If you are Long USD/JPY (Long USD 5%, Short JPY 0%), the broker *pays* you the swap.
If you are Short USD/JPY, you *pay* the swap.
Long-term positions MUST align with positive Carry.

### 4.2 Basis Arb
Sophisticated trade.
Spot-Future arbitrage using the CIP deviation.
Risk-free profit for banks with balance sheet capacity.

## V. Exercises

**Exercise 1 (Calculation):**
US Rate 5%. EU Rate 3%.
Spot EUR/USD 1.1000.
1 Year Forward?
$F = 1.1000 \times (1.03 / 1.05) \approx 1.0790$.
The Forward Rate "prices in" the USD strength? No, it prices in the math to prevent arbitrage. It is strictly mechanical.

**Exercise 2 (The Unwind):**
Carry Trade unwinds are violent.
When Volatility spikes, Carry Traders close positions.
Sell MXN, Buy back JPY.
Result: JPY skyrockets (Safe Haven).
Correlation: JPY Strength = S&P 500 Crash.

## VI. References
-   Levi, M. *International Finance*.
-   Borio, C., et al. (BIS). *Covered interest parity lost*.
