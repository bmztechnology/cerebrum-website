# Bond Market Microstructure OTC vs RFQ

## I. Executive Summary

Unlike equities (Central Limit Order Book), the **Bond Market** is primarily **Over-The-Counter (OTC)**. Liquidity is fragmented across dealers. The dominant protocol is **Request for Quote (RFQ)**, where a client asks 3-5 dealers for a price. Electronic platforms (MarketAxess, Tradeweb) are hybridizing the model, introducing "All-to-All" trading, but the **Dealer Balance Sheet** remains the ultimate source of liquidity.

## II. Formal Definitions

### Definition 2.1 (RFQ Mechanism)
Client wants to Sell \$10M Corp Bonds.
Selects 5 Dealers. Sends RFQ.
Dealers have 2 minutes to respond (or stream prices).
Client sees:
Dealer A: 98.50
Dealer B: 98.55
Dealer C: No Bid.
Client hits Dealer B.
Information Leakage: Dealer A and C know the client is selling (Winner's Curse?).

### Definition 2.2 (Inventory Risk)
In Stocks, HFT holds for seconds.
In Bonds, Dealers hold for Days/Weeks.
Inventory Cost = Value $\times$ Volatility $\times$ Holding Period.
Since 2008 (Volcker Rule), Dealer Inventory is down 90%.
Liquidity is now "Agency" (Match buyer and seller) rather than "Principal" (Warehousing).

## III. Theoretical Framework

### 3.1 Search Frictions
Duffie et al.
Bond market is a search market.
You have to "Phone around" to find the bond.
Price Dispersion: Same bond trades at 98.00 and 99.00 on the same day.
Why? Different search paths.
No NBBO (National Best Bid Offer).

### 3.2 The Run
A "Run" is a list of indicative prices dealers send to clients every morning.
"Here is where I *think* I would trade."
Not binding.
When you try to trade the Run, the Dealer says "Market moved, sorry."
Ghost Liquidity.

## IV. Strategic Applications

### 4.1 Portfolio Trading
Packaging 500 bonds into one basket.
Client asks Dealer for a price on the whole basket.
Dealer prices the "Beta" of the basket, not individual bonds.
Allows moving massive size efficiently.
ETF Creation/Redemption drives this flow.

### 4.2 Automated Trading (Algo Credit)
If Size < \$1M and Bond is Liquid (IG).
Algo Auto-Quotes the RFQ relative to Benchmark Curve.
Spread = Z-Spread + Liquidity Premium.
Removing humans from small tickets.

## V. Exercises

**Exercise 1 (The TRACE Tape):**
US Corp Bond trades must be reported to TRACE within 15 mins.
Analyze TRACE data.
Delayed transparency.
Does it help? Yes, reduces Price Dispersion.

**Exercise 2 (The Liquidity Premium):**
On-the-Run (New) 10Y Treasury yield: 4.00%.
Off-the-Run (Old) 10Y Treasury yield: 4.05%.
The 5bps difference is purely the price of Liquidity (On-the-Run is more liquid).
Trade: Short On-the-Run / Long Off-the-Run.
Capture the convergence as On-the-Run ages.

## VI. References
-   Duffie, D. *OTC Markets*.
-   O'Hara, M. *Market Microstructure Theory*.
