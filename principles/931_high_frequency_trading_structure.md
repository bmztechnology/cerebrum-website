# High Frequency Trading Structure HFT

## I. Executive Summary

**High Frequency Trading (HFT)** is the dominant microstructure (50%+ of volume). It is not "Investing"; it is **Technology Arms Race** for latency and **Market Making**. The synthesis reveals HFT as a **Tax on Liquidity**: HFTs provide spread (good) but extract **Adverse Selection** rents (bad) from informed traders. Key concepts: **Colocation**, **Flash Crashes**, and **Order Types**.

## II. Formal Definitions

### Definition 2.1 (Latency Arbitrage)
Price changes on Exchange A (Chicago).
Takes 4ms to reach Exchange B (NY).
HFT (Microwave link) sees change in 2ms.
Front-runs orders on Exchange B.
"Stale Quote Sniping."
Risk-free profit.
Tax on the slow.

### Definition 2.2 (Maker-Taker Model)
Exchanges pay HFTs to Post Limit Orders (Make Liquidity) - Rebate.
Exchanges charge Traders to Hit Orders (Take Liquidity) - Fee.
Net spread for HFT = Spread + Rebate.
Incentivizes tight spreads but creates "Rebate Arbitrage" and "Queue Jumping."

## III. Theoretical Framework

### 3.1 Adverse Selection (Micro)
HFT Market Maker posts bid.
If Informed Trader sells, HFT loses.
HFT detects "Toxic Flow" (VPIN).
Widens spread or cancels quotes (Fade).
Result: Liquidity vanishes exactly when needed (Crisis).
"Fair Weather Liquidity."

### 3.2 The Speed Limit (IEX)
IEX Exchange "Speed Bump" (Coil of fiber).
Slows everyone down by 350 microseconds.
Neutralizes Latency Arbitrage.
Market Maker can update quotes before the Sniper hits them.
Market structure solution to a tech problem.

## IV. Strategic Applications

### 4.1 Spoofing (Illegal)
Place massive Buy Order (visible) to create illusion of demand.
Algos react (Front-run).
Cancel Buy Order.
Sell into the Algos' buying.
"Layering."
Navinder Sarao (Flash Crash 2010).

### 4.2 Iceberg Detection
Institutional Algo ("Execution Algo") executes large order in small chunks (TWAP).
HFT Pattern Recognition detects the pattern.
"Sniffs out" the Iceberg.
Adjusts price against the Institution.
Stealth warfare.

## V. Exercises

**Exercise 1 (The Flash Crash 2010):**
Dow drops 1000 points in minutes.
Liquidity vacuum.
Stub Quotes (Stocks trading at \$0.01).
HFTs turned off to protect capital.
Fragility of automated markets.

**Exercise 2 (Colocation Fees):**
Exchanges charge millions for rack space next to the matching engine.
Exchange revenue shifted from "Trading Volume" to "Technology Access."
Rent seeking on physics (Speed of light).

## VI. References
-   Lewis, M. *Flash Boys*.
-   Arnuk, S. *Broken Markets*.
