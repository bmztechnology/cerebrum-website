# Binary Options: Digital Payoffs

## I. Executive Summary

**Binary (Digital) Options** have a discontinuous payoff: **All-or-Nothing**. If $S > K$, pay $100. If $S < K$, pay $0. This creates extreme sensitivity near the strike. The **Delta** is approximately a **Dirac Delta Function** (Infinite at strike, Zero elsewhere). Dealers face massive **Pin Risk** and often charge wide spreads to cover the hedging difficulty.

## II. Formal Definitions

### Definition 2.1 (Payoff)
$$ V_{digital} = e^{-rT} \mathbb{I}_{S_T > K} $$
Payoff is essentially the risk-neutral probability of being ITM ($N(d_2)$).
Valuation is simple. Hedging is hell.

### Definition 2.2 (Replication)
Call Spread as proxy.
Long Call $K$. Short Call $K + \epsilon$.
As $\epsilon \to 0$, payoff approaches Binary.
Slope (Delta) approaches infinity.
Dealers hedge Binaries using tight Call Spreads.

## III. Theoretical Framework

### 3.1 The Gambling Aspect
Short-term Binaries (1 minute) are technically options, but practically gambling (Roobet/IQ Option).
Expectancy: Payout 80% on win. Loss 100% on loss.
House Edge: 10%+.
Not financial hedging instruments.

### 3.2 Barrier Digitals
"One Touch" option.
If Price touches barrier $H$ *anytime*, pay $100.
Payoff = $100 immediately (Rebate).
Used in structured products ("If Index > 100% of initial, pay coupon").

## IV. Strategic Applications

### 4.1 Event Trading (Binary Outcomes)
FDA Approval.
Stock will either double or halve.
Vanilla Options have high Vega (Vol Crush hurts you).
Binary Option pays $100 if stock is up $0.01.
Allows pure betting on *direction* regardless of *magnitude*.
(Prediction Markets: Polymarket).

### 4.2 Over-Hedging
Dealer sells Digital Call.
Hedges with Call Spread (Long $K$, Short $K+1$).
If Stock finishes at $K + 0.50$.
Digital Payout = $100.
Hedge Payout = $50.
Dealer loses $50.
Dealer must price this risk into the spread.

## V. Exercises

**Exercise 1 (Delta Hedge at Expiry):**
Spot = 100. Strike = 100. Payoff = $1M.
Time = 1 minute left.
If Spot = 100.01 $\to$ You pay $1M.
If Spot = 99.99 $\to$ You pay $0.
Delta oscillates between $0 and $1,000,000 shares equivalent.
Impossible to hedge physically.

**Exercise 2 (Negative Gamma):**
Short Digital = Short Gamma?
Actually, Gamma flips sign.
Long Call Spread is Long Gamma at $K$ and Short Gamma at $K+\epsilon$.
Gamma profile is a Sine Wave.

## VI. References
-   Reiner, E., & Rubinstein, M. *Unscrambling the Binary Code*.
-   Taleb, N.N. *Dynamic Hedging*.
