# NFT Financialization NFTFi

## I. Executive Summary

**NFTs** (Non-Fungible Tokens) originated as art/collectibles but are evolving into financial assets. **NFTFi** applies DeFi primitives to NFTs: **Lending** (NFT as collateral), **Fractionalization** (Splitting NFT into ERC-20s), and **Derivatives** (Perps on Floor Price). This unlocks the specific liquidity of the JPEG market, turning "Illiquid JPEGs" into "Liquid Capital."

## II. Formal Definitions

### Definition 2.1 (Floor Price)
The lowest Ask price in the collection.
Pseudo-Market Price.
Used as Oracle reference.
Problem: Floor NFTs are "Trash" tier. Rare NFTs are "God" tier.
Lending against Floor Price undervaluaties Rares.

### Definition 2.2 (Peer-to-Pool vs Peer-to-Peer Lending)
**P2P (NFTfi):** User lists NFT "Need 10 ETH loan." Lattice accepts. Term sheet.
**P2Pool (BendDAO):** User deposits NFT into pool. Borrows ETH instantly at 40% LTV.
Pool manages liquidation if Floor drops.
P2Pool scales better but relies on Oracle accuracy.

## III. Theoretical Framework

### 3.1 Financializing Culture
Art Pricing is subjective.
Finance requires objective pricing.
Tension.
"The Mona Lisa has no Mark-to-Market."
NFTFi forces a Mark-to-Market on culture, increasing volatility.

### 3.2 The Liquidation Spiral
Floor Price drops.
Loans executed on BendDAO trigger liquidation.
Auctions flood the market.
Floor Price drops further.
Feedback loop.
Bored Ape Yacht Club crash 2023.

## IV. Strategic Applications

### 4.1 Blur (The Financialized Marketplace)
Incentivized "Bidding" (Limit Orders) with tokens.
Created massive liquidity depth.
Allowed "Whales" to dump into the bids.
Short-term liquidity $\uparrow$, Long-term price $\downarrow$.
Market structure determines asset health.

### 4.2 Fractionalization
Breaking a Punk into 1000 tokens.
Allows poor users to own upside.
Reconstructs the asset? "Buyout Clause."
If someone bids for 100% of tokens, they claim the underlying.

## V. Exercises

**Exercise 1 (Wash Trading for Points):**
Blur farming.
Buy NFT $\to$ Sell NFT to self $\to$ Earn Points.
Volume 90% fake.
See Chapter 736.

**Exercise 2 (Pricing Rarity):**
Linear Regression on traits.
"Zombie" traint = +50 ETH.
"Hat" trait = +1 ETH.
Automated Valuation Models (AVMs) for lending.

## VI. References
-   Paradigm. *Floor Perps*.
-   Bankless. *The NFTFi Ecosystem*.
