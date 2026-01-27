# Kyle 85 Market Depth Model

## I. Executive Summary

**Kyle (1985)** is the fundamental model of **Strategic Trading** with private information. It models a game between three players: **The Insider** (Informed), **The Noise Trader** (Random), and **The Market Maker** (Sets Price). The equilibrium defines **Market Depth** ($\lambda$) as the inverse of the Insider's aggressiveness. It proves that Insiders trade *gradually* to hide their information, and Market Depth is determined by the amount of Noise Trading available to camouflage them.

## II. Formal Definitions

### Definition 2.1 (The Price Function)
$P = E[V | \omega]$.
$\omega = x + u$.
$x$ = Insider trade size.
$u$ = Noise trade size.
MM observes total flow $\omega$ but cannot distinguish $x$ from $u$.
Linear Equilibrium: $P = P_0 + \lambda \omega$.
$\lambda$ (Kyle's Lambda) is the **Illiquidity** parameter. It measures how much Price moves per unit of Volume.

### Definition 2.2 (The Insider's Strategy)
Insider maximizes $E[(V - P) x]$.
Trade-off: Larger $x$ $\implies$ More profit per share, but moves price $P$ closer to $V$ (reducing margin).
Equilibrium solution: Insider trades $x = \beta (V - P_0)$.
Aggressiveness $\beta$ depends on the variance of noise $\sigma_u$.
More Noise $\implies$ Insider can trade more aggressively without moving price.

## III. Theoretical Framework

### 3.1 Continuous Auctions (Kyle vs Glosten-Milgrom)
Kyle models "Batch Auctions" (or continuous trading where orders accumulate).
Shows that information is incorporated into price *linearly* over time.
By the end of the trading period, all private information is revealed in the price ($P \to V$).

### 3.2 Infinite Depth?
If $\sigma_u \to \infty$ (Infinite Noise), then $\lambda \to 0$ (Perfect Liquidity).
Insiders can trade infinite size without impact.
Liquidity is essentially the "Subscription to Insider Information" paid by Noise Traders.
Noise Traders lose money to Insiders.
MM breaks even.

## IV. Strategic Applications

### 4.1 Cost of Trading
PMs use $\lambda$ to estimate impact.
Cost $= 0.5 \times \lambda \times Size^2$.
The cost is quadratic in size.
Splitting orders (Meta-orders) reduces $\lambda$ effective?
Kyle says no: The "Total Impact" is fixed by the Information Content. Splitting just delays the convergence.

### 4.2 Detecting Insider Flow
If $\lambda$ varies?
If $\lambda$ is high (Price moves easily), MM suspects informed flow.
If $\lambda$ is low (Price is resilient), MM suspects noise flow.
HFTs estimate real-time $\lambda$ to detect "Whales."

## V. Exercises

**Exercise 1 (The Camouflage):**
Insider wants to buy.
Waits for heavy selling volume (Noise) to "hide" the buy order.
Buying into the selling pressure.
Minimizes impact.

**Exercise 2 (Volatility relation):**
Kyle predicts Price Volatility $\sigma_P$ is constant over the interval?
Actually, volatility is driven by the arrival of information.
High vol $\implies$ High information flow.

## VI. References
-   Kyle, A. *Continuous Auctions and Insider Trading*.
-   Admati, A. & Pfleiderer, P. *A Theory of Intraday Patterns*.
