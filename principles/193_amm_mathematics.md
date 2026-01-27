# AMM Mathematics: The Equation of Liquidity

## I. Executive Summary

**Automated Market Makers (AMMs)** replace the traditional Limit Order Book with a deterministic formula known as the **Constant Product Formula** ($x \cdot y = k$). This innovation allows "lazy" liquidity provision: users just deposit assets, and the smart contract calculates the price based on the ratio of reserves. Understanding the convexity of this curve is key to DeFi arbitrage.

## II. Formal Definitions

### Definition 2.1 (Constant Product Formula)
$$x \cdot y = k$$
-   $x$: Reserve of Token A (e.g., ETH).
-   $y$: Reserve of Token B (e.g., USDC).
-   $k$: Constant invariant (liquidity depth).
The price of A in terms of B is the tangent slope: $P = y/x$.

### Definition 2.2 (Swap Execution)
Trader inputs $\Delta x$ (sells A).
Contract must output $\Delta y$ (buys B) such that:
$$(x + \Delta x)(y - \Delta y) = k$$
Derived Output: $\Delta y = \frac{y \Delta x}{x + \Delta x}$.

## III. Theoretical Framework

### 3.1 Slippage on AMMs
Slippage is strictly defined by the curve.
Small trade: Linear approx $P = y/x$.
Large trade: Moves along the hyperbola. Price worsens exponentially.
Unlike Order Books (where slippage depends on holes in the book), AMM slippage is continuous and predictable.

### 3.2 Concentrated Liquidity (Uniswap V3)
Instead of providing liquidity from $P \in (0, \infty)$, LPs provide liquidity only in range $[P_{min}, P_{max}]$.
This amplifies Capital Efficiency ($virtual\_liquidity$).
Math: The curve acts like a much larger $k$ curve, but shifted.

## IV. Strategic Applications

### 4.1 Arbitrage Enforcement
If Binance Price of ETH is 2000 and Uniswap Price is 1900.
Arb bot buys on Uniswap (increasing $x$, decreasing $y$, raising $P$) until $P_{uni} = P_{binance}$.
AMMs rely on Arbs to stay in sync with reality.

### 4.2 Pool Selection
High Volatility pairs in V2 (Full range) are safer.
Stable pairs (USDC/USDT) in V3 (Concentrated tick range 0.99-1.01).
Wrong selection = 100% loss of efficiency.

## V. Exercises

**Exercise 1 (Impact):**
Pool: 10 ETH, 20,000 USDC. ($P=2000$). $k=200,000$.
Buy 1 ETH. (Add 1 ETH to pool).
New $x = 11$.
New $y = 200,000 / 11 = 18,181.81$.
Output = $20,000 - 18,181.81 = 1,818.18$ USDC.
Effective Price = 1,818.18 / 1 = 1818.
Spot Price moved from 2000 to 1818? No, wait.
You SOLD ETH. (Input ETH). Price dropped. Correct.

**Exercise 2 (Path Independence):**
Trading 10 ETH in one go vs trading 1 ETH ten times.
On an AMM, 1 big trade pays MORE fees/slippage than 10 small trades?
No. Path independent (ignoring fees).
But with 0.3% fee, 1 big trade is better? No, fees are % of volume.
Difference is slippage. 1 big trade moves price huge. 10 small trades allow Arbs to correct price in between.

## VI. References
-   Adams, H., et al. *Uniswap v2 Core*.
-   Angeris, G., & Chitra, T. *Improved Price Oracles: Constant Function Market Makers*.
