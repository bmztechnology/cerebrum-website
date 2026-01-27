# US Treasury Market Structure: Liquidity

## I. Executive Summary

The **US Treasury Market** is the deepest and most liquid market in the world ($\$25T+$). It relies on a tiered structure: **Fed** $\leftrightarrow$ **Primary Dealers** $\leftrightarrow$ **Inter-dealer Brokers (IDB)** $\leftrightarrow$ **Clients**. The distinction between **On-the-Run** (newest issue) and **Off-the-Run** (older issues) drives liquidity premia. The **Repo Market** provides the plumbing for financing positions.

## II. Formal Definitions

### Definition 2.1 (On-the-Run Premium)
New 10Y Note trades at yield 4.00%.
Old 10Y Note (issued 3 months ago) trades at 4.05%.
Premium = 5bps.
Caused by supreme liquidity of OTR (used for hedging, benchmarking).
OTR rolls into Off-the-Run status over time (Liquidity drops).

### Definition 2.2 (Fails Charge)
If seller fails to deliver bond in Repo.
Penalty = $300 \text{ bps} - \text{Fed Funds}$? No.
Penalty: Seller receives effectively 0% interest on cash?
Specific penalty charge introduced to prevent chronic settlement failures in low rate environment.

## III. Theoretical Framework

### 3.1 Inter-Dealer Platforms
BrokerTec / eSpeed.
Central Limit Order Books (CLOB).
High Frequency Trading dominance (60%+ volume).
"Picosecond latency."

### 3.2 Flash Rally (Oct 15, 2014)
Liquidity evaporated instantly. 30bps move in minutes.
Revealed fragility of HFT liquidity provision.
"Phantom Liquidity" (Orders pulled when volatility spikes).

## IV. Strategic Applications

### 4.1 Basis Trade (Cash-Futures)
Hedge Funds arbitrage small price gaps between Cash Treasuries and Treasury Futures.
Leveraged 50x via Repo.
"Picking up nickels in front of a steamroller."
March 2020: Basis blew out. Fed had to intervene with \$1T QE.

### 4.2 Treasury General Account (TGA)
Govt's checking account at the Fed.
Tax day (April 15): Cash moves Bank Reserves $\to$ TGA.
Liquidity drain.
Spending: TGA $\to$ Bank Reserves.
Liquidity injection.
TGA balance volatility impacts Repo rates.

## V. Exercises

**Exercise 1 (Stripping):**
Dealers strip Coupons to create Zeroes.
Arbitrage: If $\sum Coupon + Principal > Bond Price$.
Create STRIPS.
Reverse: Reconstitute if Bond Price > Sum.

**Exercise 2 (Negative Rates):**
In Repo?
Yes, if collateral is scarce ("Special").
You lend cash at -1%. (Pay 1% to lend money, just to get the security).
Security is "Gold."

## VI. References
-   Fleming, M. *Market Structure and Liquidity in the U.S. Treasury Market*.
-   Duffie, D. *Still the World's Safe Haven?*
