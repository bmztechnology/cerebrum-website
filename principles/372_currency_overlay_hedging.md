# Currency Overlay Hedging: FX Risk Management

## I. Executive Summary

**Currency Overlay** separates the currency decision from the asset decision in international portfolios. If a US investor buys Nestle (Swiss), they own Nestle Stock + CHF/USD exposure. A **Passive Overlay** hedges 100% of the FX risk (Short CHF) to isolate stock return. An **Active Overlay** manages the FX exposure dynamically (0% to 100% hedge) to generate alpha from currency moves.

## II. Formal Definitions

### Definition 2.1 (The Unhedged Return)
$$ R_{total} \approx R_{asset} + R_{fx} + (R_{asset} \times R_{fx}) $$
FX volatility adds to total portfolio volatility.
Correlation between Asset and FX matters.
(Japan: Nikkei Up when JPY Down. Negative correlation. Natural hedge).

### Definition 2.2 (The Hedge)
Sell 1M CHF Forward vs USD.
Roll monthly.
Payoff = $S_{old} - S_{new} + ForwardPoints$.
Forward Points = Interest Rate Differential ($r_{usd} - r_{chf}$).
Currently $r_{usd} > r_{chf}$. Shorting CHF pays positive carry.
"Hedging pays you."

## III. Theoretical Framework

### 3.1 Interest Rate Parity
Cost of Hedging = $r_{dom} - r_{for}$.
If Foreign Rates > Domestic, Hedging costs money.
If Foreign Rates < Domestic, Hedging earns yield.
For US Investors (High rates), hedging Euro/Yen is profitable yield enhancement.

### 3.2 Strategic Hedging Ratio
Optimal Hedge Ratio ($h$).
Minimize Variance of Portfolio.
$h^* = \rho \frac{\sigma_{asset}}{\sigma_{fx}}$.
If $\rho = 0$, hedge 100%? No, hedge 100% eliminates FX vol, leaving Asset vol.
Usually, a 50% hedge is the "Regret Minimization" benchmark.

## IV. Strategic Applications

### 4.1 Proxy Hedging
Need to hedge Korean Won (Illiquid/NDF cost).
Short AUD instead? (Proxy).
High correlation between AUD and EM Asia.
Cheaper carry. Liquid.
Risk: Breakdown in correlation (Idiosyncratic AUD event).

### 4.2 Carry Trade Filter
Active Overlay managers use Carry signals.
If Currency has high carry, don't hedge (Keep exposure).
If Currency has negative carry, hedge 100%.
Simple rule enhances returns over long run.

## V. Exercises

**Exercise 1 (Cash Drag):**
Forward contracts settle.
If Currency rises (Hedge loses), manager must pay cash variation margin.
Requires keeping cash buffer.
Drag on performance.

**Exercise 2 (Over-Hedging):**
Asset value drops 10%.
Hedge is still 100% of original value.
You are now "Over-hedged" (Short FX).
Must rebalance hedge quantity.

## VI. References
-   Jorion, P. *Value at Risk*.
-   Record, N. *Currency Overlay*.
