# Liquidity Risk Models LVaR

## I. Executive Summary

**Liquidity Value at Risk (LVaR)** extends the standard VaR metric to account for **Liquidity Risk**. Standard VaR assumes you can liquidate $\$1B$ instantly at the Mid Price. In reality, liquidating $\$1B$ incurs **Market Impact** (Slippage) and takes time (Time to Liquidation). LVaR quantifies the additional loss due to the cost of exiting the position under stressed liquidity conditions.

## II. Formal Definitions

### Definition 2.1 (Exogenous vs Endogenous Liquidity Risk)
**Exogenous:** The spread widens due to market crash (Systemic).
**Endogenous:** The spread widens because *you* are selling (Idiosyncratic Impact).
LVaR includes the Endogenous component:
$$ LVaR = VaR_{Market} + Cost_{Liquidation}(Size) $$

### Definition 2.2 (Time-Adjusted VaR)
If daily volume is $V$, and Position is $P$.
Days to liquidate $T = P / (\alpha V)$ where $\alpha$ is participation rate (e.g., 10%).
VaR scales with $\sqrt{T}$.
A position that takes 10 days to exit has $\sqrt{10} \approx 3.16$ times the risk of a 1-day position.

## III. Theoretical Framework

### 3.1 Bangia et al (1999) Model
$LVaR = [ \mu - z_\alpha \sigma ] \times P - [ Spread_{mean} + z_\alpha \sigma_{Spread} ] \times P$.
Adds a "Spread Risk" component.
We might lose money because price drops ($\sigma$) AND because spreads blow out ($\sigma_{Spread}$).
During crises, correlation($\text{Price}, \text{Liquidity}$) $\approx 1$. (Price drops, Liquidity vanishes).

### 3.2 Almgren-Chriss Optimization
Trade-off:
Sell Fast $\implies$ High Impact Cost, Low Market Risk.
Sell Slow $\implies$ Low Impact Cost, High Market Risk.
LVaR curve helps select the optimal liquidation horizon to minimize total loss.

## IV. Strategic Applications

### 4.1 Haircuts and Margin
Clearing houses (CCP) use LVaR to set margin.
Illiquid stocks require 50% margin. Liquid stocks 15%.
If a stock becomes illiquid, margin requirement spikes $\implies$ Forced Liquidation $\implies$ Crash.
Liquidity Spirals.

### 4.2 Fund Capacity
Calculating the AUM cap.
"If we double AUM, our LVaR exceeds our drawdown limit."
Strategy stops scaling.
Hard Cap implementation.

## V. Exercises

**Exercise 1 (The Fire Sale):**
Calculate LVaR for a Hedge Fund with $\$10B$ in Small Caps.
Assume liquidation must happen in 1 day (Redemptions).
Impact cost could be 20-30%.
LVaR is massive compared to standard VaR.
Explains why funds gate redemptions.

**Exercise 2 (Bid-Ask Spread Volatility):**
Plot the Std Dev of the Spread over time.
During 2020 crash, spreads widened by 10x.
LVaR model using "Average Spread" failed.
Must use "Stressed Spread."

## VI. References
-   Bangia, A. *Modeling Liquidity Risk*.
-   Jarrow, R. & Subramanian, A. *The Liquidity Discount*.
