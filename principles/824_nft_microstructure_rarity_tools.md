# NFT Microstructure Rarity and Wash Trading

## I. Executive Summary

**NFTs** (Non-Fungible Tokens) apply crypto microstructure to digital collectibles. Features include **Rarity Sniping** (Ranking traits mathematically), **Wash Trading** (to harvest marketplace rewards like BLUR), and **Royalty Wars** (enforcing creator fees). The market moves from **OpenSea** (Retail/Visual) to **Blur** (Pro/Order Book), commoditizing the non-fungible.

## II. Formal Definitions

### Definition 2.1 (Rarity Score)
$$ Score = \sum \frac{1}{Trait Frequency} $$
CryptoPunk with "Alien" skin (0.01%) $\implies$ High Score.
Rarity Tools / Sniper bots calculate this effectively instantly on reveal.
Bot buys "Rare" listed at "Floor" price.
Arbitrage: Intrinsic Value vs Mispriced Listing.

### Definition 2.2 (Wash Trading for Incentives)
Blur Airdrop: Points for Volume.
User A sells NFT to User B (Self) for 100 ETH. B sells back.
Volume = 200 ETH. Fees = 0 (if 0 fee marketplace).
Result: Fake volume dominates.
Price Discovery is noisy.

## III. Theoretical Framework

### 3.1 Floor Price Mechanics
"The Floor" = Lowest Ask.
Support level.
"Sweeping the Floor": Buying 50 items to raise the Floor Price.
Momentum Signal.
If Floor is thin (few listings), price can gap up easily.

### 3.2 Royalty Enforcement
On-chain royalties (EIP-2981) are not enforceable at protocol level (mostly).
Marketplaces (OpenSea) enforced them socially.
Blur bypassed them (0% royalty).
Race to the bottom on fees.
Creators starve $\implies$ Supply quality drops?

## IV. Strategic Applications

### 4.1 NFTfi (Lending)
Using NFT as collateral.
BendDAO / Blur Blend.
"Buy Now, Pay Later."
Leverage enters the NFT market.
Liquidation risk: If Floor drops, NFT auctioned.
Cascades (See Chapter 786).

### 4.2 Vampire Attack
LooksRare vs OpenSea.
"List here, get tokens."
Liquidity vampire.
Microstructure competition via token incentives.

## V. Exercises

**Exercise 1 (The Reveal Trade):**
Buy unrevealed Art.
Wait for metadata reveal.
If Rare $\to$ Sell at Premium.
If Common $\to$ Dump at Floor.
"Gacha" mechanics.

**Exercise 2 (Pudgy Penguins):**
IP Licensing.
NFT is a ticket to sell physical toys.
Reverse linkage: Digital $\to$ Physical value.
Floor price reflects "Business Equity" not just art.

## VI. References
-   Vitalik Buterin. *The most important scarce resource is legitimacy*.
-   Blur. *Blend Whitepaper*.
