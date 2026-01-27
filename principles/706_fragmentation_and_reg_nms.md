# Fragmentation and Reg NMS

## I. Executive Summary

**Market Fragmentation** is the splitting of liquidity across multiple venues (NYSE, NASDAQ, BATS, Dark Pools). In the US, **Regulation NMS** (National Market System) mandates that brokers must route orders to the venue with the **Best Price** (Order Protection Rule). This created a unified "Virtual Market" from fragmented components, but introduced massive technological complexity and latency dependencies.

## II. Formal Definitions

### Definition 2.1 (NBBO - National Best Bid and Offer)
NBBO = Max(Bid from all Exchanges) | Min(Ask from all Exchanges).
The SIP (Securities Information Processor) calculates this.
But the SIP is slow.
HFTs calculate "Direct Feed NBBO" faster.
Different views of NBBO create arbitrage.

### Definition 2.2 (Protected Quotes)
Rule 611.
You cannot "Trade Through" a better price on another exchange.
If NYSE has 10.00 ask and BATS has 10.01 ask.
You cannot buy BATS at 10.01 until you clear NYSE at 10.00.
Exceptions: ISO Orders.

## III. Theoretical Framework

### 3.1 Competition for Order Flow
Exchanges compete not on price (Price is bound by NBBO), but on **Speed** and **Fees**.
"Maker-Taker" (Standard) vs "Taker-Maker" (Inverted).
Inverted venues pay Takers to route there.
Attracts retail flow.

### 3.2 Complexity Costs
Fragmentation requires Smart Order Routers (SOR).
Increases "Search Costs" for liquidity.
Increases "Phantom Liquidity" (Same MM quoting on 10 exchanges; if hit on one, they cancel all).
Does fragmentation lowering spreads offset the technology cost? Debate.

## IV. Strategic Applications

### 4.1 Venue Analysis
Where are you getting filled?
"I got filled on EDGX."
Why? EDGX is a Maker-Taker exchange.
"I got filled on BYX."
BYX is Inverted.
Understanding the fee schedule of the venue explains the fill quality.

### 4.2 Locked and Crossed Markets
**Locked:** Bid (NYSE) = Ask (BATS). Spread = 0.
**Crossed:** Bid (NYSE) > Ask (BATS). Spread < 0 (Arbitrage).
Reg NMS forbids locking/crossing for display.
Occurs momentarily due to latency.

## V. Exercises

**Exercise 1 (The ISO Exception):**
A big sweep.
"I am sending orders to everyone simultaneously."
Allows bypassing the Trade Through rule logic because the router promises it is satisfying the obligations.

**Exercise 2 (Exchange Outages):**
If NYSE goes down.
Trading continues on NASDAQ/BATS.
Redundancy value of fragmentation.
(Unlike single-point-of-failure monopoly).

## VI. References
-   SEC. *Regulation NMS*.
-   O'Hara, M. *Market Microstructure Theory*.
