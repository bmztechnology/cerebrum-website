# Decentralized Exchanges AMM Logic

## I. Executive Summary

**Decentralized Exchanges (DEXs)** like Uniswap replace the centralized Limit Order Book (LOB) with **Automated Market Makers (AMMs)**. Instead of matching buyers and sellers, users trade against a **Liquidity Pool** governed by a constant product formula ($x \cdot y = k$). This democratizes market making but introduces **Impermanent Loss** and **Slippage** distinct from traditional finance.

## II. Formal Definitions

### Definition 2.1 (The Constant Product Formula)
$$ x \cdot y = k $$
$x$: Reserve of Token A (ETH).
$y$: Reserve of Token B (USDC).
$k$: Constant.
To buy $\Delta x$ from the pool, you must deposit $\Delta y$ such that $(x - \Delta x)(y + \Delta y) = k$.
Price $P = y/x$.
As you buy A, $x \downarrow \implies P \uparrow$.

### Definition 2.2 (Impermanent Loss - IL)
Divergence Loss.
Liquidity Provider (LP) deposits A and B.
If Price of A explodes (Moon).
Pool sells A (Early) and buys B to maintain ratio.
LP ends up with almost no A and lots of B.
Value of LP < Value of HODL.
"Selling the winner on the way up."

## III. Theoretical Framework

### 3.1 Concentrated Liquidity (Uniswap V3)
V2: Liquidity spread from $0$ to $\infty$. Inefficient.
V3: LPs choose a range $[P_{min}, P_{max}]$.
Liquidity is essentially a "Limit Order" over a range.
Up to 4000x capital efficiency.
Risk: If price exits range, LP earns 0 fees and holds 100% of the loser asset.

### 3.2 LOB vs AMM
LOB: Active MMs update quotes.
AMM: Passive LPs set it and forget it (mostly).
Arb traders keep AMM price in line with CEX (Centralized Exchange).
AMM relies on Arbitrageurs for price discovery.

## IV. Strategic Applications

### 4.1 Just-in-Time (JIT) Liquidity
MEV Strategy.
Detect large buy in Mempool.
Add massive liquidity to the pool *before* the trade (Concentrated).
Earn the Fee.
Remove liquidity *after* the trade.
Sandwiching the fee revenue.

### 4.2 Curve Wars
Stablecoin AMM (Curve).
Formula $x+y=k$ (for stable) + $x \cdot y = k$ (for wings).
Minimizes slippage for pegged assets.
Protocols fight ("Bribe") to direct emissions to their pools.
Meta-governance game.

## V. Exercises

**Exercise 1 (Slippage Calculation):**
Pool: 10 ETH, 10,000 USDC. $P = 1000$. $k = 100,000$.
Buy 1 ETH.
New Pool state: 9 ETH.
$9 \cdot y_{new} = 100,000 \implies y_{new} = 11,111.11$.
Cost = $11,111.11 - 10,000 = 1,111.11$ USDC.
Avg Price = 1,111.11.
Spot Price starts 1000, ends 1,234.
Heavy Impact.

**Exercise 2 (Arb Opportunity):**
Uniswap ETH = 2000. Binance ETH = 2010.
Buy Uniswap / Sell Binance.
Gas fees determine the threshold of profitability.

## VI. References
-   Adams, H. *Uniswap Whitepaper*.
-   Angeris, G. *An analysis of Uniswap markets*.
