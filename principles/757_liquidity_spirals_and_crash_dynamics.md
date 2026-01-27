# Liquidity Spirals and Crash Dynamics

## I. Executive Summary

**Liquidity Spirals** (Brunnermeier & Pedersen) explain how small shocks amplify into systemic crashes through the feedback loop of **Market Liquidity** (Ease of trading) and **Funding Liquidity** (Ease of borrowing). When asset prices drop, margins rise, forcing de-leveraging. De-leveraging consumes Market Liquidity, dropping prices further, increasing margins again. The **Correlation** becomes 1.0, and the LOB evaporates.

## II. Formal Definitions

### Definition 2.1 (The Spiral Loop)
1. Shock: Asset Price $\downarrow$.
2. Margin Call: Haircut $\uparrow$.
3. Forced Sale: Sell Asset.
4. Impact: Price $\downarrow \downarrow$.
5. Contagion: Traders sell *other* assets to meet margin.
6. Systemic: All correlations $\to$ 1.

### Definition 2.2 (Predatory Trading)
Traders who know a "Diffressed Seller" must liquidate.
They sell *ahead* of the liquidation (Front-running).
Driving price down further.
Triggering the liquidation at worse prices.
Profiting from the spiral.

## III. Theoretical Framework

### 3.1 Market Make Withdrawal
MMs face Funding constraints too.
Volatility $\uparrow$ $\implies$ VAR $\uparrow$ $\implies$ Risk Manager cuts MM limits.
MMs widen spreads / reduce depth.
Liquidity vanishes exactly when it is needed most.
"Liquidity is a fair-weather friend."

### 3.2 Super-Exponential Growth
During a bubble, price grows Super-Exponentially (Sornette).
During a crash, price collapses Super-Exponentially.
Log-Periodic Power Laws (LPPL).
Signatures of Criticality.

## IV. Strategic Applications

### 4.1 Cash is the Option
In a spiral, "Cash" has infinite option value.
The ability to buy distressed assets at -50%.
Buffett Strategy: Hoard cash during calm. Buy during Spirals.
Providing Liquidity when price is infinite.

### 4.2 Circuit Breakers (Revisited)
Do they stop the spiral?
Yes, by breaking the feedback loop.
Giving time for "Funding Liquidity" (Cash transfers) to arrive.
Allowing MMs to recalibrate.

## V. Exercises

**Exercise 1 (The Quant Quake 2007):**
Market Neutral funds lost 20% in 3 days.
Why?
One fund liquidated.
Prices of "Longs" fell. Prices of "Shorts" rose.
Other funds held same positions (Crowding).
They got margin called.
Spiral ensued in a specific "Factor" (Value).
Market index was flat. Invisible crash.

**Exercise 2 (2020 Covid Crash):**
Treasury Market (UST) illiquidity.
The safest asset in the world had no bids.
Why?
Risk Parity funds dumping Treasuries to cover Equity losses.
Fed had to step in as "Dealer of Last Resort."

## VI. References
-   Brunnermeier, M. & Pedersen, L. *Market Liquidity and Funding Liquidity*.
-   Sornette, D. *Why Stock Markets Crash*.
