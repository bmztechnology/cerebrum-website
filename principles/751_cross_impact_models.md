# Cross Impact Models

## I. Executive Summary

**Cross Impact** measures how trading Asset A affects the price of Asset B. In a correlated universe (e.g., Tech Stocks, ETFs), liquidity is "Common." A large Sell order in SPY consumes liquidity in AAPL, MSFT, and NVDA due to **Arbitrageurs** propagating the pressure. Ignoring Cross Impact leads to underestimating transaction costs in portfolio transitions.

## II. Formal Definitions

### Definition 2.1 (The Cross-Impact Matrix)
$\Lambda_{ij} = \frac{\partial P_i}{\partial Q_j}$.
Change in Price of $i$ per unit volume of $j$.
Diagonal ($\Lambda_{ii}$) is Self-Impact.
Off-Diagonal ($\Lambda_{ij}$) is Cross-Impact.
Usually $\Lambda_{ij} \propto \text{Correlation}_{ij} \times \sqrt{\Lambda_{ii} \Lambda_{jj}}$.

### Definition 2.2 (Eigen-Liquidity)
Decompose the matrix $\Lambda$ into Eigenvectors.
First Eigenmode: "Market Mode" (Everything moves together).
Trading a basket aligned with the Market Mode has Maximum Impact (Moving the whole market).
Trading a Market Neutral basket (Long A / Short B) has Low Impact (Arbitrageurs provide liquidity).

## III. Theoretical Framework

### 3.1 The Mechanism
Trader Sells SPY Aggressively $\implies$ SPY Price Drops.
HFT Arb sees SPY Cheap / AAPL Expensive.
HFT Sells AAPL / Buys SPY.
AAPL Price Drops.
The liquidity demand transferred from SPY to AAPL via the HFT.

### 3.2 "Too Big to Hide"
If you trade huge size in a component, the Index will move.
If you trade huge size in the Index, the components will move.
There is nowhere to hide liquidity demand in a highly coupled featurespace.

## IV. Strategic Applications

### 4.1 Optimal Portfolio Execution
Don't execute names independently.
Execute the **Factors**.
If reducing Tech exposure: Sell AAPL, MSFT, GOOGL simultaneously.
Account for the fact that selling AAPL will lower MSFT's price *before* you sell MSFT.
Sequential ordering matters.

### 4.2 Statistical Arbitrage Alpha
Predicting A's move based on B's flow (OFI).
Signal: Heavy Selling in XOM (Exxon).
Trade: Short CVX (Chevron) immediately.
Cross-Impact precedes Cross-Correlation.

## V. Exercises

**Exercise 1 (The ETF Lead):**
XLF (Financials) prints massive sell blocks.
JPM and BAC haven't moved yet.
Short JPM.
The liquidity shock transmits from ETF $\to$ Constituent.

**Exercise 2 (Eigen-Portfolio Cost):**
Calculate cost of trading "Systematic" risk vs "Idiosyncratic" risk.
Systematic liquidity is expensive (Square root of sum).
Idiosyncratic liquidity is cheaper (Diversified impact).

## VI. References
-   Schneider, M. & Lillo, F. *Cross-Impact and Liquidity*.
-   Bouchaud, J. *Multivariate Price Impact*.
