# Spoofing & Layering: The Illegal Arts

## I. Executive Summary

**Spoofing** is the act of placing orders with the intent to cancel them before execution. **Layering** is placing multiple spoof orders at different price levels to create a false appearance of market depth. While illegal (Dodd-Frank), these practices are rampant in crypto and unregulated markets, and subtle variations exist in registered markets. Detecting them is crucial for not getting baited.

## II. Formal Definitions

### Definition 2.1 (The Spoof Cycle)
1.  **Goal:** Sell at 100.02.
2.  **Action:** Place massive Buy orders at 100.00, 99.99, 99.98 (Layering).
3.  **Reaction:** Other Algos see "Huge Buying Pressure" (OBI > 0). They front-run and Buy at 100.01 and 100.02.
4.  **Execution:** The spoofer's Sell Limit at 100.02 gets filled by the baited Algos.
5.  **Cancel:** Spoofer cancels all Buy orders instantly.
6.  **Crash:** Support vanishes. Price drops. Baited Algos panic sell.

### Definition 2.2 (Regulatory Standard)
"Intent to cancel."
Hard to prove mentally.
Proven statistically: specific ratio of Orders-to-Trades (e.g., 5000:1) and high cancellation rate < 100ms.

## III. Theoretical Framework

### 3.1 Information Asymmetry
The Spoofer creates false information (Fake Supply/Demand).
Market efficiency relies on honest signals.
Spoofing breaks the "Price Discovery" mechanism.

### 3.2 Momentum Ignition
A variation.
Spoofer buys aggressively to trigger a rapid price rise.
Retails jump in (FOMO).
Spoofer sells into the FOMO.
This is "Pump and Dump" on a micro-second scale.

## IV. Strategic Applications

### 4.1 De-Spoofing Filters
Algo logic: "Ignore liquidity that has been alive for < 200ms."
"Ignore liquidity that moves *with* the spread (chasing)."
By filtering out the noise, you see the real book.

### 4.2 Counter-Attack
If you identify a Spoofer (e.g., a specific Order ID or behavior pattern).
When they Layer the Bid, you HIT the Bid immediately (Sell to them).
You force them to trade on their fake orders.
They hate this. They usually stop or widen out.

## V. Exercises

**Exercise 1 (Navinder Sarao):**
The Flash Crash trader.
He placed huge sell orders to push E-Mini down.
He never intended to trade them.
He made millions profiting on the small swings caused by the panic.
Caught because his algo cycle was too perfect/repetitive.

**Exercise 2 (Crypto):**
Unregulated exchanges.
"Wash Trading" (Trading with yourself) + Spoofing.
Volume is fake.
Strategy: Do not trade based on Order Book depth in Crypto. It is 90% fake. Trade based on executed prints only.

## VI. References
-   U.S. Department of Justice vs Navinder Sarao.
-   Cartea, A., et al. *Spoofing and Price Manipulation in Order Driven Markets*.
