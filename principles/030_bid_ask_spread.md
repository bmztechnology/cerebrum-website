# Market Microstructure: The Bid-Ask Spread

## I. Introduction

The Bid-Ask Spread is the fundamental unit of transaction cost and a primary measure of market liquidity. It represents the divergence between the highest price a buyer is willing to pay (Bid) and the lowest price a seller is willing to accept (Ask). In Forex markets, understanding the spread is critical for analyzing transaction costs, especially for high-frequency strategies.

## II. Formal Definitions

### Definition 2.1 (Quote)
At any time $t$, the market quote is a tuple $(P_B(t), P_A(t))$ such that:
$$P_B(t) < P_A(t)$$
Where $P_B$ is the Bid price and $P_A$ is the Ask price.

### Definition 2.2 (Spread)
The absolute spread $S(t)$ is defined as:
$$S(t) = P_A(t) - P_B(t)$$

### Definition 2.3 (Relative Spread)
To compare liquidity across assets with different unit prices, we use the relative spread:
$$S_{rel}(t) = \frac{S(t)}{P_{mid}(t)} \times 10^-4 \quad \text{(in basis points)}$$
Where $P_{mid}(t) = \frac{P_A(t) + P_B(t)}{2}$.

## III. Theoretical Framework: Components of the Spread

According to Stoll (1978) and subsequent microstructure models, the spread is composed of three costs borne by the market maker:

### 3.1 Order Processing Costs ($C_{op}$)
Fixed costs of maintaining infrastructure, exchange fees, and clearing costs.

### 3.2 Inventory Holding Costs ($C_{inv}$)
The risk premium for holding a non-zero inventory position. A market maker buying at Bid must hold the asset until a buyer arrives at Ask. During this time, the price may move against them.

### 3.3 Adverse Selection Costs ($C_{as}$)
The risk of trading with an "informed" trader. If a trader buys aggressively, they may possess private information suggesting the price will rise. The market maker loses on this trade and widens the spread to compensate for this informational asymmetry.

Total Spread Model:
$$S = C_{op} + C_{inv} + C_{as}$$

## IV. Market Dynamics

### 4.1 Liquidity Regimes
-   **Liquid Market:** High volume, low volatility $\implies$ Tight Spread (Approaches $C_{op}$).
-   **Illiquid Market:** Low volume or information shock $\implies$ Wide Spread (Dominance of $C_{inv}$ and $C_{as}$).

### 4.2 Variable Spreads in Forex
Unlike futures (often fixed tick spread), Forex ECN spreads float.
-   **News Events:** Spread widens significantly (e.g., from 0.5 pips to 10.0 pips) during NFP or Rate Decisions due to uncertainty (Adverse Selection risk).
-   **Rollover (22:00 GMT):** Spreads widen due to lack of liquidity as banking centers switch.

## V. Strategic Implications

### 5.1 Cost of Round Trip
The cost to open and close a position of size $L$ (lots) is:
$$Cost = L \times S(t) \times V_{pip}$$
Where $V_{pip}$ is the value per pip.

### 5.2 Scalping Feasibility
For a strategy with average profit $\mu$ per trade:
-   If $\mu \le S_{avg}$, the strategy has negative expectancy regardless of accuracy.
-   Scalpers typically require $S < 0.1 \cdot \mu$.

## VI. Exercises

**Exercise 1:** A pair is quoted at 1.1050 / 1.1052.
a) Calculate the spread in pips.
b) Calculate the cost in USD to trade 1 standard lot (100,000 units).

**Exercise 2:** Explain why the spread widens *before* a major news announcement, even if no trading volume has occurred yet. Connect your answer to the Adverse Selection component ($C_{as}$).

**Exercise 3:** A market maker observes a consistent flow of Buy orders despite no news. How should they adjust their quotes ($P_B, P_A$) to manage their Inventory Risk ($C_{inv}$)?

## VII. References
-   Stoll, H.R. (1978). *The Supply of Dealer Services in Securities Markets*. Journal of Finance.
-   Glosten, L.R., & Milgrom, P.R. (1985). *Bid, ask and transaction prices in a specialist market with heterogeneously informed traders*.
-   Harris, L. (2003). *Trading and Exchanges: Market Microstructure for Practitioners*.
