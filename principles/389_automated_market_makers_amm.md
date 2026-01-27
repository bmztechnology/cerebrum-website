# Automated Market Makers AMM: Constant Product

## I. Executive Summary

**Automated Market Makers (AMMs)** (Uniswap, SushiSwap) replace the Central Limit Order Book is a **Liquidity Pool**. Users deposit pairs of tokens (e.g., ETH/USDC). The price is determined algorithmically by the formula $x \cdot y = k$. This ensures liquidity is always available (at infinite price) but subjects Liquidity Providers (LPs) to **Impermanent Loss**.

## II. Formal Definitions

### Definition 2.1 (Constant Product Formula)
$$ x \cdot y = k $$
-   $x$: Quantity of Token A.
-   $y$: Quantity of Token B.
-   $k$: Constant.
Trader buys $dx$ (removes A from pool). Must add $dy$ (B to pool) to keep $k$ constant.
Price $P = y/x$.
Execution Price = $\frac{dy}{dx}$.

### Definition 2.2 (Impermanent Loss - IL)
Divergence Loss.
Value of holding tokens in Pool vs Holding them in Wallet.
If Price changes (Up or Down), Pool always underperforms Buy & Hold.
IL = $2 \sqrt{P_{ratio}} / (1+P_{ratio}) - 1$.
LPs profit only if **Fees > IL**.

## III. Theoretical Framework

### 3.1 Convexity of LP
LP position is equivalent to **Short Straddle**.
Short Volatility.
LPs want price to oscillate (generate fees) but return to start price (zero IL).
"Range Bound" strategy.

### 3.2 Concentrated Liquidity (Uniswap V3)
LPs provide liquidity only in range $[P_a, P_b]$.
Capital Efficiency increased 4000x.
But IL risk is also concentrated.
Becomes similar to selling a specific Put Spread / Call Spread.

## IV. Strategic Applications

### 4.1 Just-in-Time (JIT) Liquidity
MEV Bots detect huge buy order in mempool.
Add liquidity to the AMM right before the trade (at current price).
Capture the fee.
Remove liquidity immediately.
Passive LPs get $0 fees.
"Liquidity Sniping."

### 4.2 Arbitrage
Price on Uniswap lags Binance.
Arbitrageurs buy on Uni, Sell on Binance.
They pay fees to LPs.
LPs rely on Arbs to keep price efficient.

## V. Exercises

**Exercise 1 (Slippage):**
Trade size relative to Pool size.
Small pool $\implies$ Large dy/dx impact.
Price Impact is non-linear (High convexity).
Front-running bots exploit this (Sandwich attacks).

**Exercise 2 (Stable Swaps):**
Curve Finance. $x + y = k$ (Sum constant) for stablecoins.
Price invariant until pool becomes extremely unbalanced.
Low slippage for USDT/USDC trades.

## VI. References
-   Adams, H. *Uniswap Whitepaper*.
-   Angeris, G., et al. *Analysis of Uniswap Markets*.
