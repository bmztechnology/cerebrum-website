# Transaction Cost Analysis TCA: Slippage

## I. Executive Summary

**Transaction Cost Analysis (TCA)** measures the friction of executing trades. It decomposes the difference between the **Decision Price** (arrival) and the **Execution Price** into **Explicit Costs** (Commissions, Taxes) and **Implicit Costs** (Spread, Market Impact, Delay Cost). For institutional investors, Market Impact is often the dominant cost, eroding Alpha significantly. Algorithm selection (VWAP vs TWAP vs POV) aims to minimize this slippage.

## II. Formal Definitions

### Definition 2.1 (Implementation Shortfall - IS)
Paper Return - Actual Return.
$$ IS = (P_{paper} - P_{decision}) - (P_{executed} - P_{decision} - Commission) $$
Formula breaks down to:
-   **Delay Cost:** Price moved while waiting to trade.
-   **Market Impact:** My buying pushed price up.
-   **Opportunity Cost:** Part of order not filled (and price went up).

### Definition 2.2 (The Square Root Law)
Market Impact ($I$) model (Almgren-Chriss):
$$ I \propto \sigma \sqrt{\frac{Q}{V}} $$
-   $\sigma$: Volatility.
-   $Q$: Order Size.
-   $V$: Daily Volume.
Impact increases with square root of size.
Trading 1% of ADV is cheap. Trading 10% is expensive.

## III. Theoretical Framework

### 3.1 Liquidity Demanding vs Providing
-   **Market Order:** Demands liquidity. Pays Spread + Impact. Fast.
-   **Limit Order:** Provides liquidity. Earns Spread. Slow.
Risk: Adverse Selection (Limit order only filled when market moves against you).
"Toxic Fill."

### 3.2 Alpha Decay
High frequency alpha decays in seconds.
Must trade fast (Market Orders). High Cost.
Low frequency alpha decays in weeks.
Can trade slow (Limit Orders/VWAP). Low Cost.
Trade-off: Speed vs Cost.

## IV. Strategic Applications

### 4.1 VWAP vs TWAP
-   **VWAP (Volume Weighted):** Follows volume profile (U-shape). Trades more at Open/Close. Minimizes impact relative to average trade.
-   **TWAP (Time Weighted):** Linear. Slices evenly. Good for crypto/FX (24/7 markets).

### 4.2 Dark Pools
Trading off-exchange.
Zero pre-trade impact (Order not displayed).
Cross at Mid-Point (Save spread).
Risk: Gaming. HFTs pinging dark pools to detect order flow.

## V. Exercises

**Exercise 1 (Forex TCA):**
No centralized exchange. No volume tape.
TCA difficult.
Compare fill to Reuters Mid rate at timestamp.
Last Look rejection (Bank rejects trade if price moved).
"Phantom Liquidity."

**Exercise 2 (Post-Trade Analysis):**
Reviewing fills.
"Reversion": Price moves back after I finish buying?
If yes, I had temporary impact.
If no (Price stays up), I had permanent impact (Information leakage).

## VI. References
-   Perold, A. *The Implementation Shortfall*.
-   Kissell, R. *The Science of Algorithmic Trading and Portfolio Management*.
