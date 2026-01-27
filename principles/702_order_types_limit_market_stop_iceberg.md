# Order Types Limit Market Stop Iceberg

## I. Executive Summary

Exchanges support complex taxonomy of **Order Types** beyond Buy/Sell. Mastery of these types allows traders to express specific intent: **Limit** (Price guarantee, no fill guarantee), **Market** (Fill guarantee, no price guarantee), **Stop** (Trigger on price), and **Iceberg** (Hidden size). Exotic types like **IOC** (Immediate or Cancel) and **ISO** (Intermarket Sweep) enable sophisticated HFT and Reg NMS compliance.

## II. Formal Definitions

### Definition 2.1 (Passive vs Aggressive)
**Passive (Limit):** "Buy 100 @ 10.00." Adds liquidity. Earns Maker Rebate. Risk: Non-execution.
**Aggressive (Market):** "Buy 100 Now." Removes liquidity. Pays Taker Fee. Risk: Slippage.
**Marketable Limit:** "Buy 100 @ 10.05" (when Ask is 10.02). Acts as Market order up to a cap. Safety/Aggressive hybrid.

### Definition 2.2 (Conditional Orders)
**Stop Loss:** Becomes Market Order when Price $\le X$. (Slippage danger).
**Stop Limit:** Becomes Limit Order at $Y$ when Price $\le X$. (Non-fill danger).
**Trailing Stop:** $X$ moves up with price. Ratchet mechanism.

## III. Theoretical Framework

### 3.1 Hidden Liquidity (Icebergs / Reserve)
Display 100. Actual 10,000.
When 100 fills, reload 100.
Logic: Don't scare the market (Signaling risk).
Priority penalty: Refilled portion goes to *back* of queue (in most engines).
Trade-off: Stealth vs Priority.

### 3.2 Time in Force (TIF)
**Day:** Expires 4pm.
**GTC:** Good Till Cancel.
**IOC:** Immediate or Cancel (Fill what you can, kill the rest).
**FOK:** Fill or Kill (All or nothing).
HFTs use IOC extensively to probe liquidity (Ping).

## IV. Strategic Applications

### 4.1 ISO Orders (Intermarket Sweep Order)
Reg NMS Rule: You must route to Best Bid/Ask (NBBO).
ISO Flag: "I have already sent orders to other exchanges to clear the top. Let me buy your inferior price."
Allows "Sweeping the street" simultaneously without waiting for routing delays.
Critical for high speed taking.

### 4.2 The "Stop Hunt"
Market Makers see the density of Stops (via Level 3 or inference).
Price pushes into the cluster.
Stops trigger (become Market Sells).
Price crashes. MMs buy cheap.
Defensive Strategy: Use mental stops or wide stops.

## V. Exercises

**Exercise 1 (The Market-on-Close - MOC):**
Auctions closing mechanism.
Sending order to match at the official closing price.
Massive liquidity event ($>$10% of daily vol).
passive investing funds use this.

**Exercise 2 (Pegged Orders):**
"Peg to Midpoint."
Order floats automatically at $(Bid+Ask)/2$.
High prob of filling against dark flow.
Hidden price improvement.

## VI. References
-   Johnson, B. *Algorithmic Trading and DMA*.
-   Harris, L. *Trading and Exchanges*.
