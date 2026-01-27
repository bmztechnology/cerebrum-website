# Flash Loan Dynamics

## I. Executive Summary

**Flash Loans** are uncollateralized loans that must be borrowed and repaid within the **same atomic transaction**. If repayment fails, the entire transaction reverts (as if it never happened). This democratizes arbitrage (no capital needed) but enables **Flash Loan Attacks** (Oracle manipulation, Governance exploits). It is a unique financial primitive with no TradFi analog.

## II. Formal Definitions

### Definition 2.1 (The Atomic Check)
Function `borrow(amount)`:
1. Send `amount` to User.
2. User executes code (Arb, Swap, Hack).
3. Check `balance` of Pool.
4. If `balance < amount + fee`, REVERT.
The lender verifies solvency *at the end* of the tick.

### Definition 2.2 (Capital Efficiency)
TradFi Arb: Need $10M to arb a 0.1\% spread ($10k profit).
DeFi Flash Loan: Borrow $10M for $9 fee.
Execute Arb. Profit $10k.
Return $10M.
ROE = $10k / $9 = Infinite.
Democratizes MEV.

## III. Theoretical Framework

### 3.1 Risk vs Atomicity
Lender risk is Zero (Code guarantees return).
Borrower risk is Gas (If arb fails, you pay gas).
Systemic Risk: Flash Loans magnify attacks.
An exploiter with $0 can attack a protocol requiring $100M capital to break.
"Leverage without insolvency risk."

### 3.2 Price Manipulation Cost
Cost to move price = Slippage.
With Flash Loan, capital is unlimited.
Attacker can move price of token X by 50% on Uniswap to manipulate an Oracle reading on a Lending Protocol.
Cost: Fees + Slippage.
Profit: Draining the Lending Protocol.

## IV. Strategic Applications

### 4.1 Collateral Swap
User has ETH collateral on Aave. Wants to switch to WBTC.
Standard: Repay Loan $\to$ Withdraw ETH $\to$ Sell ETH $\to$ Buy WBTC $\to$ Deposit $\to$ Borrow. (Needs capital).
Flash Loan: Borrow ETH $\to$ Repay Loan $\to$ Withdraw original ETH $\to$ Swap to WBTC $\to$ Deposit $\to$ Borrow New Loan $\to$ Repay Flash Loan.
One click.

### 4.2 Liquidations
Liquidator needs $1M to pay off bad debt and seize collateral.
Uses Flash Loan.
Seizes collateral.
Sells collateral on DEX.
Repays Flash Loan.
Keeps profit.
Liquidations are powered by Flash Loans.

## V. Exercises

**Exercise 1 (The Reentrancy Guard):**
Flash loans interact with reentrancy.
Ensure `balance` check is robust.
Some protocols ban Flash Loans (e.g., "Cannot borrow and trade in same block").
Ineffective (Attacker uses 2 contracts).

**Exercise 2 (The bZx Attack):**
First major Flash Loan hack (2020).
Borrowed ETH. Pumped WBTC price.
Drained bZx protocol.
Revealed the danger of Spot Price Oracles.

## VI. References
-   Aave. *Flash Loan Whitepaper*.
-   Qin, K. *Attacking the DeFi Ecosystem with Flash Loans*.
