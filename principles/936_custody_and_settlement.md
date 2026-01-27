# Custody and Settlement T+1

## I. Executive Summary

Trading is easy; **Settlement** is hard. Settlement is the actual exchange of Cash for Securities. The move from T+2 to **T+1** (Trade Date + 1 Day) reduces **Counterparty Risk** but increases **Operational Risk** (Global time zone mismatch). **Custodians** (BNY Mellon, State Street) hold the assets and process the "Corporate Actions" (Dividends, Splits).

## II. Formal Definitions

### Definition 2.1 (Delivery vs Payment - DVP)
Atomic swap.
Cash moves only if Securities move.
Eliminates "Herstatt Risk" (One side pays, other side goes bankrupt before paying).
Settled via DTCC (Equities) or Fedwire (Treasuries).

### Definition 2.2 (The Float)
In T+2, money sits for 2 days.
Custodians/Brokers earn interest.
In T+1, float vanishes.
Loss of revenue for the industry.
But frees up Capital (Lower Margin requirements at CCP).

## III. Theoretical Framework

### 3.1 The Blockchain Thesis
Why T+1? Why not T+0 (Atomic)?
Blockchain promises T+0.
Problem: Netting.
If everyone settles instantly, you need huge cash buffers.
T+1 allows "Netting" of thousands of trades into one payment at end of day.
Netting Efficiency vs Settlement Speed trade-off.

### 3.2 Segregation of Assets
Client assets must be segregated from Bank assets.
Lehman Rule.
If Broker fails, Client assets are safe.
Unless "Rehypothecated" (Lent out).
Then Client is an unsecured creditor.
Understanding "Fully Paid" vs "Margin" custody.

## IV. Strategic Applications

### 4.1 Fails to Deliver (FTD)
Short Seller borrows stock. sells it.
Must deliver stock to buyer.
If Lender recalls stock and Short cannot find another borrow.
"Fail."
Regulation SHO (Force Buy-In).
Naked Shorting = Intentional Fails?

### 4.2 Cross-Border FX impact of T+1
US moves to T+1. Europe stays T+2.
Asian Asset Manager buying US stocks.
Must execute FX trade to get Dollars.
Window to settle FX shrinks drastically.
"CLS Bank" cut-off times.
Liquidity crunch in FX at 4pm NY?

## V. Exercises

**Exercise 1 (GameStop T+2):**
Robinhood restricted trading not because it ran out of stock.
But because DTCC demanded massive Margin for T+2 settlement risk.
Volatility $\uparrow$ $\implies$ Margin $\uparrow$.
T+1 reduces this risk (shorter duration).

**Exercise 2 (Direct Registration - DRS):**
"Not your keys, not your crypto."
Equity version: "Pull shares from DTCC to Transfer Agent."
Removes shares from the lending pool.
Anti-shorting tactic.
Reduces liquidity.

## VI. References
-   DTCC. *T+1 Implementation Guide*.
-   Norman, P. *The Risk Controllers*.
