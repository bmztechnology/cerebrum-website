# ETF Arbitrage Structural Alpha

## I. Executive Summary

**ETF Arbitrage** ensures that Exchange Traded Funds trade near their **Net Asset Value (NAV)**. Authorized Participants (APs) create and redeem shares to capture the spread between the ETF Price and the **Basket Price**. This structural arbitrage is the engine of the ETF ecosystem but exposes the market to **Liquidity Mismatches** (e.g., Bond ETFs trading liquidly while underlying bonds are frozen).

## II. Formal Definitions

### Definition 2.1 (Creation / Redemption Mechanism)
**Premium:** $P_{ETF} > NAV$. AP buys Basket (Underlying), exchanges for ETF shares (Creation), Sells ETF. Profit $\approx P-NAV$. Pushes $P_{ETF}$ down.
**Discount:** $P_{ETF} < NAV$. AP buys ETF, exchanges for Basket (Redemption), Sells Basket. Pushes $P_{ETF}$ up.
Happens continuously (HFT) or End-of-Day.

### Definition 2.2 (The Index Effect)
When APs buy the Basket to create shares, they systematically pump the underlying stocks.
"Passive investing affects Active prices."
Wurgler (2010): "Index Inclusion" causes stocks to move more with the Index (Comovement) and less with fundamentals.

## III. Theoretical Framework

### 3.1 Limits to Arbitrage in ETFs
Bond ETFs (HYG/LQD).
Basket contains 1000 illiquid bonds.
ETF is highly liquid.
In a crash, ETF price drops 5%. Bonds haven't traded yet.
Is the ETF "wrong" (Discount)? Or is the ETF the "Price Discovery" leading the stale bonds?
Evidence suggests ETF leads. APs dare not arbitrage because they can't sell the bonds.

### 3.2 Operational Risk
Hard-to-borrow stocks in the basket.
If Short Interest is high, AP cannot short the basket to hedge creation.
Arbitrage mechanism breaks.
ETF trades at persistent Premium/Discount (e.g., GBTC Bitcoin Trust before conversion).

## IV. Strategic Applications

### 4.1 Statistical ETF Arb
Trading related ETFs (XLE vs OIH).
Energy Select vs Oil Services.
Cointegrated pairs.
Betting on the spread between Sector and Sub-sector.

### 4.2 Predicting Rebalancing
Index rebalance dates (Russell Reconstitution).
Predicting which stocks enter/exit.
Front-running the ETF flows.
Usually priced in weeks in advance.

## V. Exercises

**Exercise 1 (The Flash Crash Role):**
May 2010.
Arb broke.
APs stepped away.
ETFs fell 90% while stocks fell 5%.
Demonstrates that Liquidity is assumed, not guaranteed.

**Exercise 2 (Synthetic Short):**
Shorting a stock that is hard to borrow by Shorting the ETF + Buying the rest of the basket?
Expensive but possible.
ETF liquidity provides a "backdoor" to short restricted assets.

## VI. References
-   Ben-David, I. *Do ETFs Increase Volatility?*.
-   Petajisto, A. *The Index Premium and its Hidden Cost*.
