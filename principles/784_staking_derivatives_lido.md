# Staking Derivatives Lido and EigenLayer

## I. Executive Summary

**Liquid Staking Derivatives (LSDs)** (e.g., stETH) tokenize staked assets, allowing users to earn **Validation Yield** while retaining **Liquidity**. This unlocks the capital efficiency of Proof-of-Stake. **Restaking** (EigenLayer) extends this by allowing staked ETH to secure *other* protocols (Oracles, Bridges), creating **Leveraged Yield** but also **Leveraged Slashing Risk**.

## II. Formal Definitions

### Definition 2.1 (The Rebase vs Receipt Token)
**Rebase (stETH):** Balance increases daily in wallet. Exchange rate 1:1. Hard for DeFi integrations.
**Receipt (wstETH/rETH):** Balance constant. Exchange rate increases. Value accrues in price. Better for DeFi collateral.

### Definition 2.2 (Slashing Risk)
Validator acts maliciously (Double Sign).
Network confiscates 1 ETH.
Pool loses value.
Socialized loss among all stETH holders.
LSD Protocol must vet Node Operators to minimize this.

## III. Theoretical Framework

### 3.1 Centralization Vector
Lido controls 30% of ETH stake.
Governance Attack?
If Lido upgrades contract to malicious code, they control network consensus.
"Dual Governance" (Stakers + Holders) proposed to mitigate.

### 3.2 The Discount to NAV
stETH is not ETH. It is a claim on ETH withdrawals.
Before withdrawals were enabled (Shanghai), stETH traded at 0.95 ETH (Liquidity Discount).
Now arbitrage keeps it near 1.0.
Arbitrage bounds: Spread < Withdrawal Wait Time Cost.

## IV. Strategic Applications

### 4.1 Recursive Staking
Deposit stETH into Aave.
Borrow ETH.
Buy stETH.
Repeat.
Leverage the Yield Spread (Staking Yield > Borrow Cost).
"Looping."
Risk: Depeg event $\to$ Liquidation.

### 4.2 Restaking Economics
ETH is the "Pristine Collateral" of crypto trust.
EigenLayer rents this trust.
AVS (Actively Validated Service) pays rent.
ETH Staker gets: Base Yield + AVS Yield.
"Generalized Security Market."

## V. Exercises

**Exercise 1 (The Decoupling):**
June 2022 (Celsius Collapse).
Celsius forced to sell stETH.
Price dropped to 0.93.
Liquidity dried up in Curve pool.
Did the protocol break? No, just liquidity crisis.
Value returned to 1.0 after withdrawals enabled.

**Exercise 2 (Validator Monopoly):**
If one LSD has > 33% stake.
Can halt the chain (Liveness failure).
If > 66%, can finalize bad blocks.
Ethereum community enforces "Self-Limit" on Lido?

## VI. References
-   Lido. *The Liquid Staking Primer*.
-   EigenLayer. *The Restaking Whitepaper*.
