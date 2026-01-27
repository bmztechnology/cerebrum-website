# Tail Risk Hedging: Buying the Crash

## I. Executive Summary

**Tail Risk Hedging** (Universa/Spitznagel) aims to profit from **Black Swan** events (3-sigma+ moves). The strategy involves consistently buying deep OTM Puts (or VIX Calls). This positions the portfolio to have **Positive Convexity**. While it suffers "Bleed" (small losses) during normal markets (98% of the time), the massive payoff during a crash (1000%+) compensates for years of losses and allows for "Strategic Rebalancing" (buying cheap stocks with hedge profits).

## II. Formal Definitions

### Definition 2.1 (The Payoff Profile)
Hockey Stick Graph.
-   Flat loss (Cost of Premium) for small moves.
-   Vertical gain for extreme moves.
Convexity: $\frac{\partial^2 PnL}{\partial S^2} > 0$.
The goal is not just "insurance," but "Alpha generation via rebalancing."

### Definition 2.2 (Cost of Carry)
The annual drag on the portfolio.
Target: 1-2% of AUM per year.
If you spend 5% per year, you will bleed to death before the crash comes.
"The Art is in the cheapness of the hedge."

## III. Theoretical Framework

### 3.1 Monetization
When do you sell the hedge?
A: When Implied Volatility spikes and the Put becomes ITM.
The Put converts from Vega/Gamma (Explosive) to Delta (Linear).
Sell the Option (Capture the Extrinsic + Intrinsic).
Buy the S&P 500 (which is down 30%).
Switch from "Crisis Alpha" to "Recovery Beta."

### 3.2 OTM vs ATM
ATM Puts are expensive (High Theta). Good for 5-10% corrections.
OTM Puts (30% OTM) are cheap (Low Theta). Useless for corrections. Gold for Crashes.
Tail Hedging targets the OTM Put.

## IV. Strategic Applications

### 4.1 The 1x2 Ratio Put Spread
Buy 1 ATM Put. Sell 2 OTM Puts? NO. That is Short Tail Risk.
**Backspread:** Sell 1 ATM Put. Buy 2 OTM Puts.
Fund the Tail Hedge by selling the body.
Cost $\approx$ Zero.
Risk: Market falls slightly (ATM Put loses, OTM Puts don't kick in).
Gain: Market crashes (OTM Puts explode).

### 4.2 VIX Call Ladders
Buy VIX Call 20. Sell VIX Call 30. Buy VIX Call 50.
Structuring a low-cost entry to capture the "Vol of Vol" explosion.

## V. Exercises

**Exercise 1 (March 2020):**
Universa made 3600% return.
Offset the losses of the entire equity portfolio.
Clients were flat for the year in Q1, while market was down 20%.
Psychological advantage: You don't panic sell stocks at the bottom.

**Exercise 2 (Bleed Management):**
Using "Vanna" trades (selling Vol during rallies) to subsidize the purchase of Puts.
If done correctly, Carry = 0.
"Free Lottery Ticket."

## VI. References
-   Spitznagel, M. *The Dao of Capital*.
-   Bhansali, V. *Tail Risk Hedging*.
