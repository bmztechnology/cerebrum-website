# Glosten Milgrom Sequential Trade Model

## I. Executive Summary

The **Glosten-Milgrom (1985)** model explains the **Bid-Ask Spread** purely as a function of **Adverse Selection**. Unlike Inventory models (where spread manages risk), GM assumes risk-neutral Market Makers. The spread exists because MMs maximize zero profit: Losses to Informed Traders must be offset by Gains from Noise Traders. The spread is the "Information Cost" of the market.

## II. Formal Definitions

### Definition 2.1 (The Zero Profit Condition)
$Ask = E[V | \text{Buy Order Arrives}]$.
$Bid = E[V | \text{Sell Order Arrives}]$.
Buy Order could be Noise (Value $P_0$) or Insider (Value High).
Therefore $Ask > P_0$.
Sell Order could be Noise (Value $P_0$) or Insider (Value Low).
Therefore $Bid < P_0$.
Spread $= Ask - Bid$.

### Definition 2.2 (Bayesian Update)
With each trade, MM updates estimate of $V$.
Sequence: Buy, Buy, Buy.
MM prob(High Value) $\to$ 1.
Ask and Bid both move UP.
Spread remains wide until information is resolved, then narrows?
Actually, spread stays wide as long as asymmetry exists.

## III. Theoretical Framework

### 3.1 Market Shut-Down
If the percentage of Informed Traders ($\mu$) is too high.
The required Spread to break even becomes large.
If Spread > Valuation of Noise Traders, Noise Traders stop trading.
Liquidity evaporates completely.
"The Market for Lemons" (Akerlof) applied to microstructure.

### 3.2 The Role of Elasticity
Noise Traders look at spread. If wide, they reduce volume.
Informed Traders trade regardless of spread (if profit > spread).
Widening spread filters out Noise Traders *more* than Insiders, making the pool *more* toxic.
Negative feedback loop leading to crash.

## IV. Strategic Applications

### 4.1 Pre-Earnings Widening
MMs widen spread before earnings.
Why? $\mu$ (Informed probability) is high.
They don't know the news, but they know some people might.
Defensive pricing.

### 4.2 Sniffing Algorithms
HFTs ping to estimate $\mu$.
If response suggests Informed presence (Quote stuffing, high correlation), they widen quotes.
Modern GM model runs in microseconds.

## V. Exercises

**Exercise 1 (The Wide Spread Anomaly):**
Small cap stock.
Spread is 5%.
Why? Inventory risk?
Or fear of that *one* guy who knows the company is bankrupt?
Adverse selection is the primary driver of illiquidity in obscure assets.

**Exercise 2 (Simulation):**
Simulate GM.
Informed trader knows $V=11$.
Noise trades random.
MM updates quotes.
Watch price converge to 11.
The "Market" learns the private information through the trading process.

## VI. References
-   Glosten, L. & Milgrom, P. *Bid, Ask and Transaction Prices*.
-   Easley, D. *Time-Varying Arrival Rates of Informed and Uninformed Trades*.
