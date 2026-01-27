# Circuit Breakers and Trading Halts

## I. Executive Summary

**Circuit Breakers** are automated mechanisms to pause trading during extreme volatility, allowing market participants to **reset** (cool down) and allowing algorithms to **replenish liquidity**. They exist at the **Market Level** (MWCB - Market Wide Circuit Breakers) and **Single Stock Level** (LULD - Limit Up Limit Down). Critics argue they cause "Magnet Effects" where prices are drawn to the halt level.

## II. Formal Definitions

### Definition 2.1 (MWCB - Market Wide)
Based on S&P 500 Index.
**Level 1:** -7% drop (15 min pause).
**Level 2:** -13% drop (15 min pause).
**Level 3:** -20% drop (Market closes for the day).
Designed to prevent 1987-style endless crash.

### Definition 2.2 (LULD - Limit Up Limit Down)
Single stock bands.
Rolling 5-minute average price $P_{Ref}$.
Upper Band $= P_{Ref} \times (1 + 5\%)$.
Lower Band $= P_{Ref} \times (1 - 5\%)$.
If price trades at band for 15 seconds $\implies$ 5 min Halt.
Replaces old "Single Stock Circuit Breakers."

## III. Theoretical Framework

### 3.1 The Magnet Effect
Subrahmanyam (1994).
As price approaches the clear limit (e.g., -7%), traders panic.
"I must exit before the halt freezes my funds!"
Acceleration of selling *towards* the breaker.
The safety mechanism causes the crash to reach the target.

### 3.2 Liquidity Replenishment
Halt Auction.
During the 5-min PAUSE, traders can enter Limit Orders but no trades occur.
Builds the book.
Opens via Equilibrium Auction.
Usually results in price recovery (Mean Reversion) as rational buyers step in.

## IV. Strategic Applications

### 4.1 Trading the Reopen
Strategy: Buy the Halt?
If stock halted down 20% on "No News" (Fat Finger).
High probability of bounce on reopen.
If stock halted on "Bad News" (Bankrupt), it will gap down further.
Distinguishing "Microstructure Halt" vs "Fundamental Halt."

### 4.2 Straddle Execution
Volatility explodes.
Gamma traders are trapped.
Halts kill Gamma hedging (Cannot rebalance).
Short Gamma + Halt = Death.

## V. Exercises

**Exercise 1 (March 2020):**
MWCB triggered 4 times in 2 weeks.
Level 1 halt hit. Market stabilized?
Or kept falling?
Evidence suggested halts calmed the panic, allowing news assimilation.

**Exercise 2 (The GME Halts):**
GameStop halted dozens of times per day.
LULD halts.
Momentum traders used halts as "Rally points."
"Hold the line during the halt."
Social coordination around microstructure breaks.

## VI. References
-   SEC. *Limit Up-Limit Down Plan*.
-   Subrahmanyam, A. *Circuit Breakers and Market Volatility: A Theoretical Perspective*.
