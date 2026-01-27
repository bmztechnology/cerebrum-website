# Algorithmic Stablecoin Failure Modes

## I. Executive Summary

**Algorithmic Stablecoins** attempt to maintain a peg without 1:1 remote collateral, relying instead on **Endogenous Demand** and **Seigniorage** mechanics (e.g., Mint/Burn with a volatile pair). They are famously fragile. Failure modes include the **Death Spiral** (confidence collapse), **Bank Runs** (liquidity drain), and **Oracle Attacks**. History (Basis Cash, Iron Finance, UST) suggests they are inherently unstable over long horizons.

## II. Formal Definitions

### Definition 2.1 (Seigniorage Shares)
Two tokens: Stable ($S$) and Volatile ($V$).
If $S > \$1$, burn $V$, mint $S$. (Profitable arbitrage, expands supply).
If $S < \$1$, burn $S$, mint $V$. (Profitable arbitrage, contracts supply).
Problem: When $S < \$1$, you mint $V$.
If $V$ price crashes (due to dilution), you must mint *exponentially more* $V$ to pay for the $S$.
Hyperinflation of $V$. "Death Spiral."

### Definition 2.2 (Fractional Algo)
Frax Model.
80% USDC (Hard Collateral) + 20% FXS (Algo).
If confidence drops, FXS portion goes to zero, but USDC remains.
Floor is $0.80.
Better stability than Pure Algo.

## III. Theoretical Framework

### 3.1 Reflexivity
Soros again.
Confidence drives Price. Price drives Confidence.
In Algo stables, backing is "Future Growth."
If Growth stops, Backing vanishes.
A Ponzi scheme? Or "Bootstrap phase"?
Debatable until it collapses.

### 3.2 PVP Geometry
During a depeg.
Game: "Exit before the collateral runs out."
Nash Equilibrium: Panic Sell immediately.
Unlike USDC (where patience works if reserves are real), in Algo, patience is death.

## IV. Strategic Applications

### 4.1 The Short Squeeze Setup
Algo stables rely on shorts getting squeezed to restore peg?
No, usually they rely on "Whales" defending.
LFG (Luna Foundation Guard) bought BTC to back UST.
Sold BTC during crash.
Failed to stop the run.
Market cap of Volatile token MUST > Supply of Stable token.

### 4.2 Iron Finance (Titan)
Mark Cuban rug pull.
Oracle delay.
Price of Titan crashed.
Oracle said Titan was high.
Arb printer minted infinite Titan.
Price $\to$ 0.

## V. Exercises

**Exercise 1 (Calculating the Spiral):**
UST Supply: 10B. LUNA Mcap: 30B. (Safe).
UST Supply: 18B. LUNA Mcap: 10B. (Danger).
Flippening.
Once Liabilities > Assets, the run is mathematically rational.

**Exercise 2 (Delta Neutral Yield?):**
Anchor Protocol paid 20% on UST.
Mirror Protocol allowed Delta Neutral farming.
Yield was subsidized by the VCs to bootstrap usage.
When subsidies stopped, the "Mercenary Capital" fled, triggering the spiral.

## VI. References
-   Clements, R. *Built to Fail*.
-   Frax Finance. *Fractional Algorithmic Stability*.
