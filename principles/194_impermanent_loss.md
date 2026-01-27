# Impermanent Loss: The Cost of Liquidity

## I. Executive Summary

**Impermanent Loss (IL)** is the opportunity cost of holding tokens in an AMM Liquidity Pool versus holding them in a wallet (HODL). It occurs when the price ratio of the deposited tokens changes. It is called "impermament" because if the price returns to the original entry ratio, the loss disappears. However, if the divergence is permanent, the loss becomes realized.

## II. Formal Definitions

### Definition 2.1 (Portfolio Value)
-   $V_{hold}$: Value if held ($50\% A, 50\% B$).
-   $V_{pool}$: Value of LP Token (share of the pool).
$$IL = \frac{V_{pool} - V_{hold}}{V_{hold}}$$

### Definition 2.2 (The IL Formula)
For a standard $x \cdot y = k$ pool, if price changes by ratio $r = P_{new} / P_{entry}$:
$$IL(r) = \frac{2 \sqrt{r}}{1+r} - 1$$
This value is ALWAYS negative (or zero if $r=1$). You cannot profit from IL itself.

## III. Theoretical Framework

### 3.1 Derivatives Equivalent
Providing Liquidity is mathematically equivalent to:
**Short Straddle** (Short Put + Short Call).
You profit from Fees (Theta).
You lose from Volatility (Gamma).
If price stays stable ($r=1$), you keep fees and no loss.
If price explodes ($r=5$), you sold your upside early.

### 3.2 IL vs Fees
Profit = Fees Earned - IL.
To be profitable, the trading volume (Fees) must be high enough to compensate for the volatility (IL).
Metrics: "Fee APY" vs "IL APR".

## IV. Strategic Applications

### 4.1 Delta Hedging
Since LP = Short Gamma.
You can Hedge by Longing Options on Deribit.
Or by borrowing the volatile asset to deposit (Delta Neutral Farming).

### 4.2 Stable LP
Providing LP for USDC/DAI.
$r \approx 1$ always.
IL is near zero.
Risk: PEG break (Smart Contract Risk), not Price Risk.

## V. Exercises

**Exercise 1 (The 50% Drop):**
ETH drops 50% ($r=0.5$).
$IL = (2 \sqrt{0.5} / 1.5) - 1 = (1.414 / 1.5) - 1 = 0.942 - 1 = -5.7\%$.
You lost 50% on asset value + 5.7% extra relative to holding.
Total Loss is compounded.

**Exercise 2 (The 5x Pump):**
ETH pumps 500% ($r=5$).
$IL = (2 \sqrt{5} / 6) - 1 = (4.47 / 6) - 1 = 0.745 - 1 = -25.5\%$.
You missed out on 25% of the gains compared to just holding.
LPing in a Bull Market is expensive.

## VI. References
-   Pintail. *Uniswap: A Good Deal for Liquidity Providers?*.
-   Loesch, S., et al. *Impermanent Loss in Uniswap v3*.
