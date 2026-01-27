# DeFi Lending Protocols: Overcollateralization

## I. Executive Summary

**DeFi Lending** (Aave, Compound) allows permissionless borrowing and lending. Unlike banks (Credit Scores), DeFi relies on **Overcollateralization** (e.g., Deposit \$150 ETH to borrow \$100 USDC). Interest rates are determined dynamically by **Utilization Rates** (Supply/Demand). **Flash Loans** allow uncollateralized borrowing valid only within a single transaction block.

## II. Formal Definitions

### Definition 2.1 (Health Factor)
$$ HF = \frac{\sum Collateral \times LiquidationThreshold}{\sum Borrows} $$
If $HF < 1.0$: Position is liquidated.
Liquidator repays debt, seizes collateral + **Liquidation Bonus** (e.g., 5%).

### Definition 2.2 (Interest Rate Model)
$$ R_t = R_0 + \frac{U_t}{U_{optimal}} R_{slope1} + \dots $$
-   $U_t$: Utilization (Borrows / Supply).
-   Below optimal $U$, rates are low (linear).
-   Above optimal $U$ (e.g., 90%), rates spike exponentially (100% APR) to force repayment.

## III. Theoretical Framework

### 3.1 Flash Loans
Borrow \$100M $\to$ Arbitrage $\to$ Repay \$100M + Fee.
All in one atomic transaction.
If repay fails, transaction reverts (Loan never happened).
Risk-free for lender.
Enables democratization of arbitrage (Capital no longer a barrier).

### 3.2 Recursive Lending (Looping)
Deposit ETH. Borrow USDC. Sell USDC for ETH. Deposit ETH.
Leverage Long ETH.
Increases Supply and Borrow numbers artificially.
"Yield Farming" with leverage.
Risk: Liquidation cascade wipes out equity instantly.

## IV. Strategic Applications

### 4.1 Shorting Tokens
To Short Token X:
1.  Deposit Stablecoin (Collateral).
2.  Borrow Token X.
3.  Sell Token X for Stablecoin on DEX.
Wait for drop. Buy back X. Repay loan.
DeFi protocols are the "Repo Market" of Crypto.

### 4.2 Governance Attacks
Borrow large amount of Governance Token (UNI/COMP) via Flash Loan.
Pass a malicious proposal (e.g., Empty Treasury).
Execute. Repay loan.
Protocols now implement "Flash Loan protection" (Time delays on voting).

## V. Exercises

**Exercise 1 (Oracle Failure):**
Price of Collateral comes from Oracle (Chainlink).
If Oracle manipulated (Flash Loan attack on Uniswap pool used as oracle).
Protocol thinks Price is high. Use fake collateral to borrow real assets.
"Price Manipulation Exploit."

**Exercise 2 (Bad Debt):**
If Price drops 50% in 1 minute.
Liquidators cannot sell fast enough.
Collateral Value < Debt Value.
Protocol insolvent (Bad Debt).
Safety Module (Staked AAVE) slashed to cover deficit.

## VI. References
-   Aave. *Protocol Whitepaper*.
-   Gudgeon, L., et al. *DeFi Protocols for Loanable Funds*.
