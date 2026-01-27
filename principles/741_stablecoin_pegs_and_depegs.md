# Stablecoin Pegs and Depegs

## I. Executive Summary

**Stablecoins** (USDT, USDC, DAI) are the lifeblood of crypto, providing a fiat bridge. Their primary mandate is maintaining the **Peg ($1.00)**. Mechanisms vary: **Fiat-Collateralized** (Reserves), **Crypto-Collateralized** (Over-collateralized debt), and **Algorithmic** (Endogenous collateral). **Depegs** occur when confidence evaporates or collateral fails, triggering "Bank Runs."

## II. Formal Definitions

### Definition 2.1 (Collateral Ratios)
**Fiat (USDC):** 1:1. Backed by T-Bills/Cash in bank. Risk: Censorship / Bank insolvency (SVB).
**Crypto (DAI):** 1:1.5. Backed by ETH/WBTC. Risk: Cascade liquidation of collateral.
**Algo (UST):** Backed by "Seigniorage Share" (LUNA). Risk: Death Spiral.

### Definition 2.2 (The Bank Run model)
Diamond-Dybvig.
If everyone redeems, creates liquidity crunch.
For Algo stables:
If Price < 1, Arb buys Stable, Redeems for Volatile token. Sells Volatile token.
Selling Volatile token crashes its price.
Confidence creates the value. Loss of confidence destroys it to zero.

## III. Theoretical Framework

### 3.1 The Impossible Trinity (Crypto Edition)
1. Stability (Peg).
2. Capital Efficiency (No over-collateralization).
3. Decentralization.
Choose 2.
USDC: Stability + Capital Efficiency (Centralized).
DAI: Stability + Decentralization (Inefficient).
UST: Efficiency + Decentralization (Failed Stability).

### 3.2 Curve Pools (3pool)
Liquidity venue for stables.
Imbalance in 3pool (e.g., USDT > 50%) signals market fear of USDT.
Depeg usually predicted by Curve imbalance first.

## IV. Strategic Applications

### 4.1 The Depeg Trade
Shorting USDT when it trades at $0.999?
Risk/Reward skewed. Max gain 100% (if zero). Max loss limited.
Buying depegged USDC (at $0.88 during SVB crisis)?
Betting on recovery.
High stakes distress trading.

### 4.2 Yield Farming Risks
Yields on stables are usually risk-free rate + premium.
If Yield is 20% (Anchor Protocol), the premium is likely "Tail Risk" of the protocol blowing up.
"Picking up pennies in front of a steamroller."

## V. Exercises

**Exercise 1 (Terra Luna):**
$1 UST minted by burning $1 LUNA.
If LUNA market cap < UST market cap.
Insolvency.
The run happened when the "backing" became smaller than the liabilities.

**Exercise 2 (Tether Truthers):**
Is USDT backed?
Markets trade it at $1.00 regardless.
Lindy Effect.
"Too Big To Fail" in crypto ecosystem?

## VI. References
-   Klages-Mundt, A. *Stablecoins 2.0*.
-   Clements, R. *Built to Fail: The Inherent Fragility of Algorithmic Stablecoins*.
