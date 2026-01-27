# Long Short Equity Fundamental: Stock Picking

## I. Executive Summary

**Long/Short Equity** is the classic Hedge Fund strategy. It involves taking long positions in undervalued stocks (Alpha Long) and short positions in overvalued stocks (Alpha Short). The goal is to isolate **Idiosyncratic Risk** (stock-specific performance) by hedging out **Market Risk** (Beta). A "Market Neutral" (Beta = 0) portfolio theoretically generates pure alpha regardless of market direction.

## II. Formal Definitions

### Definition 2.1 (Gross vs Net Exposure)
Long Book: \$100M.
Short Book: \$60M.
**Gross Exposure:** \$160M (Leverage).
**Net Exposure:** \$40M (Directionality).
Net Long Bias: 40%.
Market Neutral: Net Exposure $\approx$ 0%.

### Definition 2.2 (The Fundamental Equation)
$Return = \beta(R_{market}) + \alpha_{long} - \alpha_{short} - Costs$.
Short Alpha is harder to generate (Markets drift up).
Most L/S funds are "130/30" (130% Long, 30% Short).

## III. Theoretical Framework

### 3.1 Valuation Disconnect
Efficient Market Hypothesis (EMH) says price = value.
L/S managers believe markets are inefficient.
Behavioral biases, institutional constraints, or lack of coverage create mispricing.
Rigorous bottom-up modeling (DCF) identifies "Intrinsic Value."

### 3.2 The Short Rebate
Holding cash from short sale earns interest (Short Rebate).
Historically significant component of returns.
In zero rate environment, shorting became expensive (Borrow cost > Rebate).

## IV. Strategic Applications

### 4.1 Pair Trading (Sector Neutral)
Buy Coke / Short Pepsi.
Removes Sector Beta and Consumer Staple Beta.
Betting purely on Coke outperforming Pepsi.
Mean Reversion or Fundamental Divergence?

### 4.2 The "Best Ideas" Portfolio
High Conviction.
Concentrated positions (10-20 names).
High volatility, high tracking error.
"Tiger Cubs" style (Julian Robertson).

## V. Exercises

**Exercise 1 (Beta Adjusting):**
Stock A Beta = 1.5. Stock B Beta = 0.5.
Long \$1M Stock A.
How much Stock B to short for neutrality?
Need \$3M Short B ($1.5 \times 1 = 0.5 \times 3$).
Dollar Neutrality $\neq$ Beta Neutrality.

**Exercise 2 (Short Squeeze Risk management):**
Limit position sizing on high short interest names.
"Crowdedness" factor.
If days-to-cover > 10, Avoid.

## VI. References
-   Grinold, R. & Kahn, R. *Active Portfolio Management*.
-   Jones, A. W. *The Hedged Fund Model*.
