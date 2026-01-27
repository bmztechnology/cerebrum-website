# Flash Crash Mechanics: When Liquidity Evaporates

## I. Executive Summary

A **Flash Crash** is a rapid, deep fall in asset prices followed by a rapid recovery, caused not by fundamental news but by a liquidity vacuum in the microstructure. The 2010 Crash (Dow -9%) proved that HFT liquidity is "phantom"—it disappears exactly when it is needed most. Understanding the interplay of **HFT Withdrawal**, **Stub Quotes**, and **Inter-market Feedback Loops** is vital for survival.

## II. Formal Definitions

### Definition 2.1 (Liquidity Crisis)
A state where the Limit Order Book has $0$ depth near the mid-price.
$\text{Spread} \to \infty$.
Market Orders "eat" through the entire book, hitting absurd prices ($0.01).

### Definition 2.2 (Stub Quotes)
Market Makers are legally required to maintain a quote.
To avoid risk, they post quotes at \$0.01 (Bid) and \$100,000 (Ask).
In a crash, these are the valid best bids.
Algos hitting these triggers catastrophic PnL.

## III. Theoretical Framework

### 3.1 The Hot Potato Effect
HFTs generally end the day flat.
If HFT A buys 1000 lots, it must sell them to HFT B.
In a high-vol spike, High inventories accumulate.
Constraint: Risk Limits.
HFT A stops buying. HFT B stops buying.
Everyone tries to sell simultaneously. Result: Vertical drop.

### 3.2 LULD (Limit Up Limit Down)
Regulatory fix.
If Price deviates $>5\%$ in 5 minutes, Pause Trading for 15 seconds.
Allows humans to step in and refill the book.
Solving the "Algorithmic Loop."

## IV. Strategic Applications

### 4.1 Crash-Resilient Algos
Logic: "If $Spread > 3 \times AvgSpread$, Pause."
Logic: "If $Correlation(Assets) \to 1$, Switch to Cash."
Surviving a crash is about recognizing the regime (HMM State 3) and unplugging.

### 4.2 Buying the Dip
Rare opportunity.
Place "Stink Bids" at $-20\%$ price.
If a Flash Crash brings price to you, you buy at incredible discount.
Reversion is usually < 10 minutes.
Strategy: "Sniper."

## V. Exercises

**Exercise 1 (2010 Case):**
Waddell & Reed sold 75,000 E-Minis ($4B) using an aggressive algorithm (Percentage of Volume).
As price dropped, Volume spiked.
Algo sold FASTER because Volume increased.
Feedback loop.
Lesson: Volume-based sensing can be suicidal in a crash.

**Exercise 2 (Stop Loss):**
Market Orders Stops are dangerous.
Price 100. Gap to 50.
Stop triggers Market sell. Filled at 0.01.
Use **Stop Limit** orders (Stop 95, Limit 90). Better to hold the bag than sell at 0.01.

## VI. References
-   CFTC/SEC. *Findings Regarding the Market Events of May 6, 2010*.
-   Kirilenko, A., et al. *The Flash Crash: High Frequency Trading in an Electronic Market*.
