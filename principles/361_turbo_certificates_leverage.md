# Turbo Certificates Leverage: Limited Recourse

## I. Executive Summary

**Turbo Certificates** (or Knock-Out Warrants/CBBCs) are leveraged delta-one products with a built-in **Stop Loss** (Barrier). They allow traders to get high leverage (e.g., 20x) with the risk limited to the initial investment (No Margin Calls). The "Turbo" is funded by the issuer, and the user pays a financing cost implicitly in the price or strike adjustment.

## II. Formal Definitions

### Definition 2.1 (The Price)
$$ P_{Turbo Call} = \frac{S - Strike}{Ratio} $$
-   **Strike (Financing Level):** The amount the issuer lends you.
-   **Barrier:** Usually equal to Strike (Turbo Best) or slightly above (Turbo Standard).
-   If $S$ hits Barrier, product expires worthless (or residual value paid).

### Definition 2.2 (Leverage)
$$ Leverage = \frac{S \times Ratio}{P_{Turbo}} $$
If S=100, Strike=90. Price=10.
Leverage = 10x.
If S moves to 101 (+1%), Price moves to 11 (+10%).
Leverage is dynamic. As price drops, Leverage increases $\to$ Risk increases.

## III. Theoretical Framework

### 3.1 Gap Risk Hedging
The Issuer is Long Strike (Lent money) and Short Barrier Option (Stop Loss).
If Market Gaps *through* the Strike.
Issuer cannot liquidate collateral.
Issuer takes the loss (Negative Equity).
Product price cannot go below zero (Limited Recourse).
Issuer charges a "Gap Risk Premium" in the financing spread to cover this.

### 3.2 Dividend Adjustment
Since Turbo is a funded position.
Dividends usually reduce the Financing Level (Strike).
Or passed through?
Standard: Strike is reduced by Dividend amount (Long Holder gets benefit of div via cheaper strike).

## IV. Strategic Applications

### 4.1 Day Trading
Turbos are preferred to Futures by retail in Europe/Asia.
No Margin Call anxiety.
High liquidity.
Tight spreads (Issuer competitive).
Tax advantages in some jurisdictions.

### 4.2 Hedging Portfolio
Long Stocks.
Buy Turbo Put (Strike > Current Price).
If Market falls, Turbo Put gains value (Leveraged).
If Market rises, Turbo Put knocks out (Small loss).
Cheap "Disaster Hedge."

## V. Exercises

**Exercise 1 (The Knock-Out Event):**
DAX Turbo Long. Barrier 15,000.
DAX hits 15,000.01.
Then 14,999.
Product terminates.
Even if DAX bounces to 16,000 one minute later.
Path dependency is brutal.

**Exercise 2 (Rollover):**
Open Ended Turbos (Mini-Futures).
Strike adjusts daily for Interest.
$K_{t+1} = K_t \times (1 + r \Delta t)$.
Holding for long term is expensive if rates are high.

## VI. References
-   Euronext. *Turbo Certificates Guide*.
-   Societe Generale. *Strike and Barrier Mechanics*.
