# Matching Engines FIFO vs Pro Rata

## I. Executive Summary

The **Matching Engine** is the core software logic of an exchange (e.g., NASDAQ, CME) that pairs Buy and Sell orders. The algorithm used to prioritize orders determines the **Microstructure Strategy** required to win. The two dominant algorithms are **Price-Time Priority (FIFO)** (Equity markets) and **Pro-Rata** (Futures/Rates markets).

## II. Formal Definitions

### Definition 2.1 (Price-Time Priority / FIFO)
Rule 1: Price. (Highest Buy / Lowest Sell wins).
Rule 2: Time. (First In, First Out).
If Agent A bids 10.00 at 9:00am and Agent B bids 10.00 at 9:01am.
Incoming Sell matches Agent A first.
**Game:** Speed. You must be at the front of the queue. Latency is everything.

### Definition 2.2 (Pro-Rata Priority)
Rule 1: Price.
Rule 2: Size (Proportional).
If Agent A bids 10 lots and Agent B bids 90 lots (Total 100).
Incoming Sell of 10 lots.
Agent A gets 1 lot (10%). Agent B gets 9 lots (90%).
**Game:** Size. Time doesn't matter (as much). You must post massive size to get a fill.

## III. Theoretical Framework

### 3.1 The Speed Arms Race (FIFO)
In FIFO, being 2nd is the same as being last (Winner Take All for that liquidity packet).
Drives investment in Microwaves/FPGA.
Encourages small order sizes (to be agile).

### 3.2 Quote Stuffing (Pro-Rata)
In Pro-Rata, traders strictly "Over-Size" their orders.
"I want 10 contracts, so I bid for 100." (Assuming 10% fill rate).
If fill rate changes to 100%, trader is "Over-filled" (Toxic).
Creates "Phantom Liquidity" in the book.
The visible depth is 10x the real interest.

## IV. Strategic Applications

### 4.1 Joining the Queue
In FIFO: Check "Queue Position."
If there are 100,000 shares ahead of you, don't join. You will never get filled before price moves away.
"Queue Jumping" (Improving price by 1 tick) resets your time, but puts you first.
Pennying (Front-running by 0.01).

### 4.2 Lead-Lag Markets
CME (Pro-Rata) vs Cash Treasuries (FIFO?).
Arbitrage between markets with different matching logic requires complex state management.
"I got filled on the Leg A (FIFO) but missed Leg B (Pro-Rata)."
Legging risk.

## V. Exercises

**Exercise 1 (The Cancel Game):**
In Pro-Rata, what happens if a big player cancels?
Your share of the "Pro-Rata" pie increases instantly.
You might suddenly get over-filled.
Sudden toxicity.

**Exercise 2 (Maker-Taker Fee Sensitivity):**
Matching engines often couple Priority with Fees.
"Taker pays 30 mils, Maker gets 20 mils."
This subsidizes the Maker to join the FIFO queue early.

## VI. References
-   Janecek, K. *Matching Engines in Modern Financial Exchanges*.
-   CME Group. *Matching Algorithm Documentation*.
