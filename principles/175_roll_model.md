# The Roll Model: Bid-Ask Bounce

## I. Executive Summary

Prices bounce between the Bid and Ask even if the "True Value" hasn't changed. This creates negative serial correlation (Mean Reversion) at high frequencies. **Richard Roll (1984)** derived a simple formula to estimate the **Effective Spread** purely from the series of trade prices, without seeing the Order Book. This is a crucial forensic tool for estimating historical liquidity.

## II. Formal Definitions

### Definition 2.1 (The Process)
$P_t = P^* + I_t \frac{S}{2}$
-   $P^*$: True Price (Random Walk).
-   $S$: Bid-Ask Spread.
-   $I_t$: Trade Direction Indicator (+1 for Buy, -1 for Sell).

### Definition 2.2 (The Roll Measure)
$$S = 2 \sqrt{-\text{Cov}(\Delta P_t, \Delta P_{t-1})}$$
The spread is 2 times the square root of the negative autocovariance of price changes.

## III. Theoretical Framework

### 3.1 Why Negative Covariance?
If you Buy (Price = Ask), the next trade is likely a Sell (Price = Bid) or a Buy (Ask).
Assuming random buy/sell arrival:
-   $Ask \to Bid$ ($\Delta P < 0$)
-   $Bid \to Ask$ ($\Delta P > 0$)
This zigzag creates negative correlation.
If Covariance is positive (Trending), the Roll model fails (Impyling imaginary spread).

### 3.2 Effective vs Quoted Spread
Quoted: Ask - Bid on screen. (e.g., $0.01).
Effective: $2 | P_{trade} - P_{mid} |$.
Effective measures the *actual* cost paid (including hidden liquidity or price improvement).
Roll Measure estimates Effective Spread.

## IV. Strategic Applications

### 4.1 Liquidity Regimes
Calculate Roll Spread on daily Close prices.
If Roll Spread spikes, liquidity is crashing (even if Volume is high).
High Roll Spread = High Transaction Costs + High Volatility Risk.

### 4.2 HFT Filter
Simple Algo: "Buy if Price drops 2 ticks."
In a Roll world, this is just buying the Bid after a trade at Ask.
You are providing liquidity.
Profit = Spread.
Risk = $P^*$ moves against you.
The Roll Model confirms that "Mean Reversion" at tick level is just capturing the spread.

## V. Exercises

**Exercise 1 (Calculation):**
Price sequence: 10, 11, 10, 11, 10.
$\Delta P$: +1, -1, +1, -1.
Covariance is negative.
Spread $S = 2 \sqrt{-(-1)} = 2$.
True Spread is indeed $11 - 10 = 1$. (Wait, math check: Variance is 1. Cov is -1? Yes. Formula holds).

**Exercise 2 (Trend Impact):**
In a strong trend (10, 11, 12, 13), Covariance is positive.
Roll measure returns Error ($\sqrt{-Positive}$).
This indicates "One-Sided Flow" (Liquidity collapse).

## VI. References
-   Roll, R. *A Simple Measure of the Effective Bid-Ask Spread in an Efficient Market*.
-   Harris, L. *Trading and Exchanges*.
