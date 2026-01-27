# Flash Loans: Arbitrage Without Capital

## I. Executive Summary

**Flash Loans** allow a trader to borrow infinite capital (limited only by pool size) without collateral, provided the loan is repaid *within the same transaction block*. If the repayment fails, the entire transaction reverts (as if it never happened). This democratizes arbitrage: a teenager with $10 for gas fees can execute a $100M arbitrage trade.

## II. Formal Definitions

### Definition 2.1 (Atomic Transaction)
In Ethereum, a transaction is an atomic unit of code execution.
State $S_0 \to$ Execution $\to$ State $S_1$.
Flash Loan logic:
1.  Borrow 1000 ETH from Aave.
2.  Execute Code (Arb, Liquidation, Swap).
3.  Check Balance.
4.  IF Balance >= 1000 ETH + Fee: Repay. Success.
5.  ELSE: Error "REVERT".

### Definition 2.2 (The Fee)
Protocols charge a small fee (e.g., 0.09% on Aave).
Profit Condition: Arbitrage Spread > Flash Loan Fee + Gas.

## III. Theoretical Framework

### 3.1 Market Efficiency
Flash Loans force instant market efficiency.
If Uniswap ETH is $1900 and SushiSwap ETH is $2000.
Anyone can borrow $100M, Buy Uni, Sell Sushi, Repay.
The price gap closes instantly.
Oracles become harder to manipulate (because Arbs correct them instantly).

### 3.2 Governance Attacks
Borrow 50% of governance tokens ($MKR, $COMP).
Pass a malicious proposal (e.g., "Give me the treasury").
Vote.
Return tokens.
All in 1 block.
Defense: "Flash Loan Resistance" (delay snapshots).

## IV. Strategic Applications

### 4.1 Collateral Swap
You have a loan in Aave (Collateral BTC, Debt USDC).
You want to switch Collateral to ETH.
Manual: Repay debt (need cash), Withdraw BTC, Buy ETH, Deposit ETH, Borrow USDC.
Flash Loan: Borrow USDC -> Repay Debt -> Withdraw BTC -> Swap to ETH -> Deposit ETH -> Borrow USDC -> Repay Flash Loan.
All 1 click. Zero capital needed.

### 4.2 Liquidations
Searching for underwater loans (LTV > Threshold).
Flash borrow debt amount -> Liquidate borrower -> Get Collateral (bonus) -> Swap Collateral to Debt asset -> Repay Flash Loan -> Keep profit.
Highly competitive bot war.

## V. Exercises

**Exercise 1 (Profit Calc):**
Arb Opportunity: 0.5% spread.
Loan Fee: 0.09%. Gas: 0.10%.
Net Margin: 0.31%.
On $10M Loan = $31,000 profit. Risk Free (except gas).
Risk: "block Stuffing" (Miner Front-running).

**Exercise 2 (Reentrancy):**
Flash Loans often expose Reentrancy bugs.
Borrow money -> Call vulnerable contract function -> Vulnerable contract calls back -> You drain it.
The "Hack" vector of DeFi.

## VI. References
-   Aave V2 Whitepaper / Developer Docs.
-   Qin, K., et al. *Attacking the DeFi Ecosystem with Flash Loans for Fun and Profit*.
