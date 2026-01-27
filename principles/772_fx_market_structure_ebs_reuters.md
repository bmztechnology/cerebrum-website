# FX Market Structure EBS and Reuters

## I. Executive Summary

The **Foreign Exchange (FX)** market is the largest in the world (\$7T/day). It is decentralized. Historically, liquidity concentrated on two primary venues: **EBS** (EUR/USD, USD/JPY) and **Reuters** (GBP/USD, AUD/USD). Today, liquidity is fragmented across ECNs (Currenex, Hotspot) and Single Dealer Platforms. The microstructure is characterized by **Last Look** and **Flash Events** driven by non-binding liquidity.

## II. Formal Definitions

### Definition 2.1 (Primary vs Secondary Venues)
**Primary (Interbank):** EBS/Reuters. Tight interactions between Top Tier Banks. Minimum credit requirements. "The Reference Price."
**Secondary (Client):** Multi-dealer platforms. "Recycled Liquidity."
HFTs arb the latency between Primary quote and Secondary quote.

### Definition 2.2 (The Fixing)
WM/Reuters 4pm Fix.
Benchmark rate used by global corporations.
Banks aggregate orders to trade *at* the fix.
Scandal: Banks colluding to push the Fix price (sharing info in chat rooms).
Result: Widening of Fix window (to 5 mins) to dilute impact.

## III. Theoretical Framework

### 3.1 Information Asymmetry in FX
Banks see Customer Flow (Macro hedge funds, Corporates).
"Flow Trading" alpha.
If Toyota sells \$1B USD/JPY $\implies$ Long term supply.
Bank holds the risk and works it out slowly? Or dumps it on EBS?
Market Impact management is the core skill.

### 3.2 Non-Binding Quotes
Most FX quotes are "Subject to Confirmation."
Last Look (see Chapter 779).
Creates phantom depth.
Prices on screen are not necessarily executable.

## IV. Strategic Applications

### 4.1 Triangular Arbitrage
EUR/USD, USD/JPY, EUR/JPY.
$Rate(EUR/JPY) = Rate(EUR/USD) \times Rate(USD/JPY)$.
If inequality: Risk-free profit.
HFTs close this in microseconds.
Now mostly a latency game.

### 4.2 Icebergs in FX
Reserve Managers (Central Banks) trade huge size.
Buying EUR to defend currency.
They use Algo Execution (TWAP/Iceberg) on EBS.
Detecting a Central Bank iceberg is the "Holy Grail" of FX momentum trading.

## V. Exercises

**Exercise 1 (Switzerland 2015):**
SNB unpegged EUR/CHF.
Price dropped 30% in seconds.
EBS liquidity 0.
Negative balances at retail brokers.
Risk of "Gap" events in 24/5 markets.

**Exercise 2 (Turnover Analysis):**
London Open (3am NY) and NY Open (8am NY) are peak liquidity.
Asian session (Tokyo) is thin.
Spreads vary by time of day 10x.
Algo logic: "Widen spreads in Asian session."

## VI. References
-   Osler, C. *Microstructure of the Foreign Exchange Market*.
-   Lyons, R. *The Microstructure Approach to Exchange Rates*.
