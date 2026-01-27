# Flash Crashes and Liquidity Holes

## I. Executive Summary

A **Flash Crash** (e.g., May 6, 2010) is a sudden, extreme drop in asset price followed by a rapid recovery, all occurring within minutes. It is a failure of **Market Microstructure**, specifically the evaporation of **Liquidity**. When HFT Market Makers (who provide 80% of liquidity) turn off simultaneously due to risk parameters, the Order Book becomes a "Liquidity Hole," and prices freefall to find a clearing level.

## II. Formal Definitions

### Definition 2.1 (Hot Potato Effect)
HFTs pass inventory back and forth.
Volume is high, but "Net Liquidity" is low.
During stress, HFTs aggressively flatten positions.
Net Demand = -Infinity.
Everyone is a Seller. No Buyers.

### Definition 2.2 (Stub Quotes)
May 2010.
Prices hit \$0.01 (Stub Bids).
Market Makers posted bids at \$0.01 just to meet "Continuous Quoting" obligations, never expecting them to be hit.
When the book emptied, trades executed at \$0.01.
Accenture traded at \$0.01.

## III. Theoretical Framework

### 3.1 Toxic Feedback Loops
Algorithm A sells $\implies$ Volatility $\uparrow$.
Algorithm B detects Volatility $\implies$ Width $\uparrow$ / Size $\downarrow$ (Pulling liquidity).
Algorithm C detects lack of liquidity $\implies$ Panic Sells (Market Order).
Price crashes.
Cycle repeats at millisecond speed.

### 3.2 The Waddell & Reed Algorithm
The catalyst in 2010.
A large "Algo" (acting like a naive execution bot) sold E-Mini futures without regard for price/time.
Usually, a human trader would pause.
The Algo just kept selling into the hole.
"Automated Stupidity."

## IV. Strategic Applications

### 4.1 LULD (Limit Up Limit Down)
Regulatory fix.
Stock bands set at $\pm 5\%$.
If price hits band $\implies$ Pause trading (15 sec).
Allows humans to intervene / Algo logic to reset.
Replaces the old "Circuit Breakers."

### 4.2 Buying the Crash
"Stink Bids."
Leaving Limit Buys at -20% prices.
Structuring the portfolio to capture "Black Swan Liquidity Events."
Dangerous (Could be real news), but historically profitable in flash crashes.

## V. Exercises

**Exercise 1 (The ETF Dislocation):**
August 24, 2015.
Stocks opened... ETFs didn't?
Arb broke down.
ETFs traded at 30% discount to NAV.
Stop orders triggered at the lows.
Microstructure failure in the Opening Auction process.

**Exercise 2 (Knight Capital):**
Algo bug.
Bought High / Sold Low rapidly.
Lost \$440M in 45 minutes.
Microstructure risk can kill the firm.

## VI. References
-   CFTC/SEC. *Findings Regarding the Market Events of May 6, 2010*.
-   Easley, D. *The Microstructure of the "Flash Crash"*.
