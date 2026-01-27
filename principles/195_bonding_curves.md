# Bonding Curves: Algorithmic Pricing

## I. Executive Summary

A **Bonding Curve** is a smart contract that issues tokens by buying them back or selling them according to a mathematical price function. It effectively acts as an automated central bank with 100% reserves. As people buy, the price rises; as they sell, the price falls. This standardizes "Early Adopter Rewards" and "Liquidity Provision" into a single mechanism.

## II. Formal Definitions

### Definition 2.1 (The Curve)
Price $P$ is a function of Supply $S$.
$$P = f(S)$$
Amount of Collateral (Reserve) $R$ needed to mint $S$ tokens is the integral:
$$R = \int_0^S f(x) dx$$

### Definition 2.2 (Curve Types)
-   **Linear:** $P = mS$. (Price doubles as supply doubles).
-   **Exponential:** $P = e^{kS}$. (Price explosions, favored for speculative coins).
-   **Sigmoid:** S-Curve. (Slow start, rapid adoption phase, stabilization).

## III. Theoretical Framework

### 3.1 Continuous Tokens
Tokens are minted on demand.
There is no ICO. No Pre-mine.
Liquidity is guaranteed. The contract will ALWAYS buy back the token at the current curve price.
You can never be "stuck" with a bag (unless price is near zero).

### 3.2 Front-Running Validation
Since the price is deterministic ($P=f(S)$), if I see a Buy Transaction in the mempool:
I know $S$ will increase $\to$ $P$ will increase.
I buy first.
Bonding Curves are highly susceptible to MEV.

## IV. Strategic Applications

### 4.1 Community Tokens
Influence tokens.
Early fans buy cheap. As community grows, price rises.
If early fans leave (Sell), price crashes, punishing latecomers.
Incentivizes "Diamond Hands."

### 4.2 Dynamic Fees
Applying bonding curves to transaction fees.
Protocol usage high $\to$ Cost of usage rises.
Prevents spam (Ethereum EIP-1559 Base Fee is essentially a bonding curve on block space).

## V. Exercises

**Exercise 1 (Reserve Ratio):**
Linear Curve $P=S$.
Supply 10. Price 10.
Market Cap = $10 \times 10 = 100$.
Reserve = $\int_0^{10} x dx = [x^2/2] = 50$.
Reserve Ratio = 50%.
Linear curves always have 50% backing.

**Exercise 2 (Arbitrage):**
Secondary market (Exchange) price > Curve Price.
Arb: Mint from Curve (Deposit collateral), Sell on Exchange.
Secondary market price < Curve Price.
Arb: Buy on Exchange, Burn on Curve (Withdraw collateral).
Keeps price pegged to the Curve.

## VI. References
-   Zargham, M., et al. *Foundations of Cryptoeconomic Systems*.
-   Titcomb, B. *Bonding Curves Explained*.
