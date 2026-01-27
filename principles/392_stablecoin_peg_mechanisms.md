# Stablecoin Peg Mechanisms: The Death Spiral

## I. Executive Summary

**Stablecoins** aim to maintain 1:1 parity with USD (or EUR). Strategies range from **Fiat-Collateralized** (USDT, USDC) to **Over-Collateralized Crypto** (DAI) to **Algorithmic** (UST/Luna). The Algorithmic model introduces the "Endogenous Collateral" risk, leading to the mathematical certainty of a **Death Spiral** if confidence evaporates.

## II. Formal Definitions

### Definition 2.1 (Fiat Backed)
Centralized.
Issuer holds \$1 USD in bank for every 1 Token issued.
Risk: Censorship (Blacklist), Bank Insolvency (SVB), Fraud (not actually backed).
Peg Mechanism: Arbitrage (Redemption window).

### Definition 2.2 (Algorithmic / Seigniorage Shares)
Two tokens: Stable (UST) and Volatile (Luna).
Burn \$1 Luna $\to$ Mint 1 UST.
Burn 1 UST $\to$ Mint \$1 Luna.
Peg relies on the market cap of Volatile token absorbing the supply expansion/contraction.

## III. Theoretical Framework

### 3.1 The Soros Attack (Death Spiral)
If Market Cap(Luna) < Market Cap(UST).
Bank Run scenario.
Users panic sell UST $\to$ Mint Luna $\to$ Sell Luna.
Luna Supply explodes ($\to \infty$).
Luna Price crashes ($\to 0$).
Cannot absorb the UST exit.
UST de-pegs.
Game Over. (Terra/Luna 2022).

### 3.2 The Dai Model (CDP)
Collateral Debt Position.
Deposit ETH. Mint Dai.
If ETH drops, Liquidate ETH to buy back Dai.
System shrinks.
Peg maintained by over-collateralization and liquidation.
Robust but capital inefficient.

## IV. Strategic Applications

### 4.1 The Curve 3pool
USDT / USDC / DAI pool.
Deepest liquidity for stable swaps.
"The Peg Defender."
If one coin de-pegs, LPs in the pool end up holding 100% of the bad coin.
"Toxic Flow."

### 4.2 Yield Farming
Protocols incentivize stablecoin liquidity with governance tokens.
"A 20% APR on a risk-free dollar?"
Usually Ponzi-nomics.
Anchor Protocol (20% on UST). Subsidized to grow network. Unsustainable.

## V. Exercises

**Exercise 1 (De-Peg Arbitrage):**
USDC de-pegged to 0.88 (SVB collapse).
Risk: Circle (Issuer) insolvent?
Arb: Buy at 0.88. Wait for redemption or guarantee.
Fed stepped in. Profit 12% in 3 days.

**Exercise 2 (Tether FUD):**
Persistent discount/premium on USDT.
Reflects regulatory risk perception.
Market chooses USDC/DAI for "Safety" and USDT for "Liquidity/Offshore."

## VI. References
-   Clements, R. *Built to Fail: The Inherent Fragility of Algorithmic Stablecoins*.
-   MakerDAO. *Whitepaper*.
