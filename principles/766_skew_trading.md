# Skew Trading

## I. Executive Summary

**Skew Trading** involves betting on the **Shape** of the Volatility Surface. The **Smirk** (Puts > Calls) reflects the market's crash fear. Traders trade the **Risk Reversal** (Long Call / Short Put) or spreads to exploit "Steep" or "Flat" skew. Skew is a barometer of **Tail Risk**.

## II. Formal Definitions

### Definition 2.1 (Skew Parameter)
$Skew = \sigma_{90\% Put} - \sigma_{110\% Call}$.
Normal Equity Markets: Skew > 0 (Puts expensive).
Commodities: Skew can be negative (Calls expensive, e.g., Gold Up-Crash risk).
FX: Skew flips with currency pair direction.

### Definition 2.2 (Risk Reversal RR)
Strategy: Buy 25-Delta Call, Sell 25-Delta Put.
Pure bet on the Skew flattening (or inversion).
Delta Neutralized?
Usually specificied as "Delta Neutral Risk Reversal" (DNRR).
Any spot move is hedged, isolating the Vol difference.

## III. Theoretical Framework

### 3.1 Sticky Strike vs Sticky Delta
**Sticky Strike:** Vol stays fixed at Strike $K$. If $S$ moves, the Vol at that fixed $K$ is constant.
**Sticky Delta:** Vol stays fixed at Delta (Moneyness). If $S$ moves, the Vol curve shifts with it.
Evidence supports Sticky Delta (ATM vol "floats" with spot).
Skew trading relies on correct model assumption.

### 3.2 The Leverage Effect
Why downside skew?
Equity drops $\implies$ Debt/Equity ratio rises $\implies$ Riskier $\implies$ Vol rises.
Also "Panic" psychology.
The Skew steepens in bear markets.

## IV. Strategic Applications

### 4.1 Collars
Protective Collar: Buy Put, Sell Call.
Financing the protection.
If Skew is steep, Call is cheap (doesn't pay much), Put is expensive. Costly collar.
If Skew is flat, Collar is cheap.
Best time to hedge: When Skew is flat (Complacency).

### 4.2 Vertical Spread Arbitrage
If Skew is *too* steep.
Sell OTM Put (Rich). Buy deeper OTM Put (Cheap?).
Wait, if Skew is steep, deeper OTM is *richer*.
Buy ATM Put. Sell OTM Put. (Put Spread).
Capturing the "roll down the skew."

## V. Exercises

**Exercise 1 (Skew Index):**
CBOE SKEW Index.
Measures tail risk relative to ATM.
SKEW > 150 $\implies$ Black Swan pricing is extreme.
Does it predict crashes?
Reliability is debated.

**Exercise 2 (Commodity Skew):**
Oil Skew vs Gold Skew.
Oil Puts usually expensive (Recession risk? Or Supply Glut?).
Gold Calls expensive (Safe Haven rush?).
Understanding the fundamental driver of the asset's "Crash" direction.

## VI. References
-   Xing, Y. *Smirk Profiles and expected returns*.
-   Mix, S. *Trading the Volatility Skew*.
