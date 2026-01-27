# The Greeks Deep Dive

## I. Executive Summary

The Greeks are the **Sensitivities** of the option price to market parameters. In Microstructure, we move beyond textbook definitions to **Operational Greeks**. How does Delta change when the Order Book thins? How does Vega react to a flash crash? Understanding the "Shadow Greeks" (Vanna, Volga, Charm) is essential for risk-managing dynamic portfolios.

## II. Formal Definitions

### Definition 2.1 (First Order)
**Delta ($\Delta$):** $\partial V / \partial S$. Local linear risk.
**Vega ($\nu$):** $\partial V / \partial \sigma$. Volatility exposure.
**Theta ($\Theta$):** $\partial V / \partial t$. Time decay (The rent paid for Gamma).
**Rho ($\rho$):** Interest rate risk (Critical in high rate environments).

### Definition 2.2 (Second Order - The Convexity)
**Gamma ($\Gamma$):** $\partial^2 V / \partial S^2$. The change in Delta. The "Acceleration" of risk.
**Vanna:** $\partial^2 V / \partial S \partial \sigma$. Change in Delta vs Vol.
**Volga (Vomma):** $\partial^2 V / \partial \sigma^2$. Convexity of Volatility.
**Charm:** $\partial \Delta / \partial t$. Delta decay over time.

## III. Theoretical Framework

### 3.1 Gamma is the Cost of Hedging
Delta Neutral portfolio.
Stock moves $\Delta S$.
New Delta $\neq 0$.
Must trade $\Gamma \times (\Delta S)^2$ shares to re-hedge.
Trading incurs spread/impact costs.
Therefore, Long Gamma = Paying Theta to avoid Trading Costs?
No, Long Gamma = Paying Theta to *profit* from large moves.
Short Gamma = Collecting Theta to *pay* for hedging costs.

### 3.2 Sticker Shock
If Vol rises, Vega profits.
But if Vol rises, Spread usually widens.
Liquidity cost acts as a "Negative Vega" (Shadow Greek).
Mark-to-Market profit might be illusory if you can't exit.

## IV. Strategic Applications

### 4.1 Charm Trading
Friday expiration.
Charm (Delta decay) is maximum.
OTM Calls lose Delta rapidly as time passes.
Dealers who are Short OTM Calls must *Buy Back* their Short Stock hedges.
"Charm Flows" support the market into the weekend?

### 4.2 Vanna Squeeze
Market drops. Vol rises (Skew).
Short Puts (Short Vanna).
As Vol $\uparrow$, Put Delta becomes *more negative*.
Dealers sell more stock.
Feedback loop: Drop $\to$ Vol Up $\to$ Sell Stock $\to$ Drop.

## V. Exercises

**Exercise 1 (Gamma Profiling):**
Plot Aggregate Dealer Gamma vs Price.
"Zero Gamma" level (Flip point).
Above level: Positive Gamma (Dealers suppress vol).
Below level: Negative Gamma (Dealers amplify vol).
Predicting intraday volatility regimes.

**Exercise 2 (Theta Burn):**
Theta is not linear.
At-the-money options decay fastest in last 3 weeks.
Far OTM options decay slowly.
Structuring "Calendars" to exploit differential decay.

## VI. References
-   Taleb, N. *Dynamic Hedging*.
-   Natenberg, S. *Option Volatility and Pricing*.
