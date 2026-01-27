# Volatility Smile Behavioral Explanation

## I. Executive Summary

The **Volatility Smile** (Smirk) is the pattern where Out-of-the-Money (OTM) Puts have higher Implied Volatility than At-the-Money (ATM) options. It appeared after the **1987 Crash**. Before 1987, the curve was flat (Black-Scholes world). The Smile represents the market's **Crash Phobia** (Behavioral bias towards tail risk) and the high demand for downside protection irrespective of statistical probability.

## II. Formal Definitions

### Definition 2.1 (Implied Volatility Skew)
$$ IV_{Put} \gg IV_{Call} $$
Black-Scholes assumes Log-Normal distribution (Symmetric).
Market prices a Fat Left Tail (Non-Normal).
Traders pay premium for "Lottery Tickets" (Upside calls)? No, they pay premium for "Fire Insurance" (Downside puts).

### Definition 2.2 (The 1987 Structural Break)
Oct 19, 1987: -22% in one day.
20-sigma event.
Trauma imprinted on the market psyche.
Market makers realized "Jumps happen."
Prices adjusted permanently to overprice the left tail.

## III. Theoretical Framework

### 3.1 Probability Weighting Function
Prospect Theory.
People overweight small probabilities of catastrophic loss.
They pay 20 vol for a 1-delta put (Statistically worth 5 vol).
Selling these puts generates "Variance Risk Premium."

### 3.2 Heterogeneity
Institutional Hedgers (Pension Funds) are insensitive to price. They *must* hedge.
Buying puts at any cost.
Market Makers sell the puts and charge a massive premium for taking the "Gap Risk."

## IV. Strategic Applications

### 4.1 Risk Reversals
Signal of Sentiment.
Buy Call / Sell Put.
If Put is massively expensive, Skew is steep $\implies$ Extreme Fear.
Contrarian Buy signal? Or smart money knowing something?

### 4.2 Selling the Smile
Iron Condors.
Selling OTM Puts and OTM Calls.
Collecting the "Insurance Premium."
"Picking up pennies in front of a steamroller."
Works 99% of time. Blows up 1% (1987/2008/2020).

## V. Exercises

**Exercise 1 (Put-Call Parity violation?):**
No.
Parity holds ($C - P = S - Ke^{-rt}$).
But $IV$ differs.
You cannot arb the smile with the underlying. You must arb it with other options (Volatility Surface arb).

**Exercise 2 (Vanna / Volga):**
Greeks describing sensitivity to Volatility.
Market Makers hedging the Smile (Vanna: dDelta/dVol).
Creates feedback loops that exacerbate crashes.

## VI. References
-   Rubinstein, M. *Implied Binomial Trees*.
-   Derman, E. *The Volatility Smile*.
