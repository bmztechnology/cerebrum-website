# Momentum Ignition Algorithms

## I. Executive Summary

**Momentum Ignition** is a predatory strategy where a trader initiates a series of aggressive orders to **fabricate** a price trend, aiming to trigger other algorithms (Stop Losses, Trend Followers, Black Box models). Once the "Ignition" succeeds and the victim Algos rush in, the predator **reverses** position, selling into the artificially created liquidity. It is a modern form of "Pump and Dump" executed in milliseconds.

## II. Formal Definitions

### Definition 2.1 (The Ignition Phase)
Rapid bursts of Market Buys.
Absorbing Level 1, 2, 3 liquidity.
Goal: Create a "Impulse Candle" on the 1-second chart.
Trigger: Volatility breakout algos.

### Definition 2.2 (The Extraction Phase)
Price spikes due to Victims chasing the Impulse.
Predator places "Limit Sells" at the top.
Victims fill the Predator.
Price collapses (Mean Reversion) as momentum was fake (No news).

## III. Theoretical Framework

### 3.1 Reflexivity in Algos
Algos watch Price. Price is moved by Algos.
Feedback loop.
Ignition exploits the "Sensitivity" of the herd.
If the herd is "Nervous" (High VPIN, Low Depth), Ignition probability $\approx 100\%$.
If herd is "Calm" (High Depth), Ignition fails (Cost of buying > Profit from squeeze).

### 3.2 Detection Signatures
SEC MIDAS data.
Pattern: Buy, Buy, Buy (Price $\uparrow$), Sell, Sell (Price $\downarrow$).
Timeframe: < 500ms.
Volume ratio: Aggressive/Passive switch.

## IV. Strategic Applications

### 4.1 Stop Hunting
Cluster of Stops detected above resistance.
Ignition algo pushes price *just* through resistance.
Stops trigger (Market Buys).
Liquidity cascade.
Predator sells into the Stops.
"Running the stops."

### 4.2 Defense against Ignition
Execution Algo logic:
"If price spikes on low volume, do not chase."
"Wait for confirmation (Level 2 refill)."
"Fade the spike" (Contrarian).

## V. Exercises

**Exercise 1 (The Bart Simpson Pattern):**
Crypto chart logic.
Sharp spike up + Flat consolidation + Sharp spike down.
Looks like Bart Simpson's head.
Classic Ignition / Liquidation cycle.
Manipulated market structure.

**Exercise 2 (Cost-Benefit):**
Cost to ignite: Spread + Fees on initial buys.
Benefit: Slippage captured from victims.
Requires Victims > Cost.
Predators test the water. If no victims follow, they stop.

## VI. References
-   SEC. *Analysis of Momentum Ignition*.
-   Cartea, A. *Algorithmic Trading of Momentum*.
