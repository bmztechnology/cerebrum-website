# Clearing Houses CCPs

## I. Executive Summary

**Central Counterparties (CCPs)** were mandated by Dodd-Frank to clear OTC Derivatives (Swaps). They eliminate **Bilateral Counterparty Risk** by standing in the middle ("Buyer to every Seller, Seller to every Buyer"). They rely on a **Default Waterfall** (Margin $\to$ Default Fund $\to$ Equity). The synthesis highlights CCPs as the new **Single Points of Failure** (Too Big to Fail Nodes).

## II. Formal Definitions

### Definition 2.1 (Novation)
Trade: Hedge Fund A buys Swap from Bank B.
Novated to CCP.
Hedge Fund A buys from CCP.
CCP buys from Bank B.
A and B no longer care about each other's creditworthiness.
They only care about the CCP.

### Definition 2.2 (The Waterfall)
If Member Defaults:
1. Defaulter's Initial Margin (IM).
2. Defaulter's Default Fund Contribution.
3. CCP's Skin in the Game (Equity).
4. **Mutualized Default Fund** (Other Members' money).
5. Rights of Assessment (Ask members for more).
6. Tear Up (Partial default).
Step 4 is the Contagion Step.

## III. Theoretical Framework

### 3.1 Netting Efficiency
Bilateral: A owes B 100. B owes C 100. C owes A 100. Gross exposure = 300.
Multilateral (CCP): Net exposure = 0.
CCP reduces total Liquidity requirements.
But concentrates Risk.

### 3.2 Procyclicality of Margin
In volatility, CCP models (VaR) demand more Initial Margin.
"Margin Call from Hell."
Liquidity drain exactly when liquidity is scarce.
CCP acts as a destablizer in stress.
Fed often has to lend against the collateral to stop the spiral.

## IV. Strategic Applications

### 4.1 Compression Trades
TriOptima.
Tearing up offsetting trades to reduce Notional.
Lowers capital charges (G-SIB score).
Operational efficiency.

### 4.2 Basis Trade (Cleared vs Uncleared)
Uncleared Margin Rules (UMR) require high margin for bilateral trades.
Cleared trades have standard margin.
Price difference?
Usually negligible now as most flow is cleared.
Legacy trades live in the "Uncleared" world (Zombie books).

## V. Exercises

**Exercise 1 (Nasdaq Clearing Default):**
Einar Aas (Norwegian Trader).
Sold massive Puts on Power offering.
Market moved.
Margin Call > His Liquidity.
Defaulted.
Blew through Waterfall. Member banks had to refill the fund.
Proof that CCP risk is real.

**Exercise 2 (Resolution Regimes):**
If CME fails, what happens?
Government bailout?
Or "Variation Margin Gains Haircutting" (VMGH)?
(Winners don't get paid fully).
The "Bail-In" of the derivatives market.

## VI. References
-   Duffie, D. *Plumbing of the Financial System*.
-   Pirrong, C. *The Economics of CCPs*.
