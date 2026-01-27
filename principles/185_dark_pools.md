# Dark Pools: Trading in the Shadows

## I. Executive Summary

**Dark Pools** (ATS - Alternative Trading Systems) are private exchanges where the Order Book is not visible. Orders are matched anonymously, usually at the Mid-Price of the lit market (NBBO). They were designed for institutions to trade large blocks without moving the price. However, they have become a battlefield for HFTs seeking to prey on institutional flow.

## II. Formal Definitions

### Definition 2.1 (The Crossing Mechanism)
Lit Market: Bid 10.00, Ask 10.02.
Dark Pool match: 10.01.
Benefit: Buyer saves $0.01, Seller gains $0.01. (Spread Capture).
Cost: Execution Uncertainty. (No guarantee of fill).

### Definition 2.2 (Gaming Types)
-   **Ping:** Sending small IOC orders to find hidden variance.
-   **Toxic Exhaust:** HFTs send their "toxic" flow (flow they know is wrong) to Dark Pools to get out cheaply.

## III. Theoretical Framework

### 3.1 Toxicity Analysis
If you trade in a Dark Pool and price immediately moves against you, you were "Adversely Selected."
You traded with someone who knew more than you.
Metric: **Markout PnL**.
Calculate PnL of the trade 1 second, 1 minute, 5 minutes after fill.
If Post-Trade PnL is consistently negative, the Pool is toxic.

### 3.2 Logic of Non-Display
Why hide?
If I show "Buy 1M shares" on NASDAQ, the market runs away (Front-running).
Dark Pools allow "Iceberging" naturally.
But: If no one is there, you miss the trade.
Trade-off: Impact vs Probability of Execution.

## IV. Strategic Applications

### 4.1 Minimum Quantity (MinQty)
Protection mechanism.
"Only match me if the contra-side order is > 5,000 shares."
Blocks HFT "Ping" bots (who trade 100 shares).
Ensures you trade with other Institutions.

### 4.2 Dark Aggregators
Algorithms that split a parent order across 15 different Dark Pools.
They balance fill rates.
If Pool A fills fast, send more to A.
If Poo B never fills, stop polling B (latency waste).

## V. Exercises

**Exercise 1 (The Pareto Logic):**
10% of Pools have 90% of genuine liquidity.
The rest are "Zombies" or HFT traps.
Avoid routing to obscure pools just for "coverage."

**Exercise 2 (Mid-Point Check):**
Lit: 10.00 / 10.05.
Dark Fill: 10.04.
Is this good?
No. Mid is 10.025. You paid 10.04.
Some pools price off "Far Side" or allow slippage.
Always set Limit Price even in Dark Pools.

## VI. References
-   Mittal, H. *Are You Playing over a Toxic Pool?*.
-   SEC Regulation ATS.
