# DAO Governance and Treasuries

## I. Executive Summary

**Decentralized Autonomous Organizations (DAOs)** manage protocols using smart contracts and token voting. They are "Internet Native Corporations." The **Treasury** (protocol revenue) is controlled by the **Governance Token**. Governance models range from **Direct Democracy** (1 Token = 1 Vote) to **Delegated Governance** and **Vote Escrow** (veTokenomics).

## II. Formal Definitions

### Definition 2.1 (The Governance Attack)
Attacker borrows 10M Gov Tokens (Flash Loan).
Passes malicious proposal: "Send Treasury to Me."
Executes proposal.
Returns Loan.
Prevention: **Time Delays** (Timelock) and **Flash Loan protection** (Vote check at previous block).

### Definition 2.2 (veTokenomics)
Vote Escrow (Curve Finance).
Lock token for 4 years $\to$ get 1 `veCRV`.
Lock for 1 year $\to$ get 0.25 `veCRV`.
Aligns voting power with long-term commitment.
Reduces "Mercenary Capital" voting.

## III. Theoretical Framework

### 3.1 The Principal-Agent Problem in DAOs
Token holders (Principals) vs Core Team (Agents).
Holders want Yield. Team wants Growth/Salary.
Voter Apathy: < 5% of tokens vote.
Allows "Whales" to dictate outcomes.

### 3.2 Rage Quit
Moloch DAO mechanism.
If you disagree with a vote result, you can "Rage Quit" (redeem your share of the treasury) *before* the proposal executes.
Prevents "Tyranny of the Majority."
Non-coercive governance.

## IV. Strategic Applications

### 4.1 Treasury Diversification
DAO Treasury usually holds 100% Native Token.
Risk: If Native Token crashes, Treasury purchasing power vanishes.
Strategy: Swap 20% of Native Token for USDC (Stable).
Requires Governance Vote (Controversial: "Why are you selling our token? Do you lack faith?").

### 4.2 Meta-Governance
DAO A buys tokens of DAO B.
DAO A votes in DAO B's proposals to benefit DAO A.
"Political Capital" became an asset class.

## V. Exercises

**Exercise 1 (The ConstitutionDAO):**
Crowdfunded $40M to buy the US Constitution.
Game Theory failure: Everyone knew their max bid.
Auctioneer (Griffin) bid slightly higher.
DAO lost.
Public transparency is a disadvantage in auctions.

**Exercise 2 (Delegation):**
Small holders delegate votes to "Professional Delegates" (Students, VCs).
Delegates gain "Soft Power."
Lobbying in crypto.

## VI. References
-   Vitalik Buterin. *Moving beyond coin voting governance*.
-   Hasu. *The 3 stages of DAO evolution*.
