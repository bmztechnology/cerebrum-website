# Cliquet Options: The Ratchet Mechanism

## I. Executive Summary

**Cliquet Options** (Ratchet Options) are a series of forward-starting options where the strike price resets periodically (e.g., annually) to the current spot price. They offer protection against timing while locking in gains. Common in **Equity Linked Annuities**, they allow the pitch: "Stock market upside, no downside, annual reset."

## II. Formal Definitions

### Definition 2.1 (Payoff)
Sum of caps and floors on periodic returns.
$$ Payoff = \sum_{i=1}^{N} \max(\min(R_i, Cap), Floor) $$
-   $R_i$: Return in period $i$ ($S_i / S_{i-1} - 1$).
-   Floor: Usually 0% (Capital Protection).
-   Cap: Usually 8-10%.
If market goes +20%, you get 10%.
If market goes -20%, you get 0%.
Next year, strike resets.

### Definition 2.2 (Forward Skew Risk)
Pricing depends on the *future* Implied Volatility Surface.
Specifically, the Skew 1 year from now.
Dealers are Short Forward Skew.
If Skew steepens in future, Dealer loses.
Hedge: Trade Variance Swaps or Forward Starting Options.

## III. Theoretical Framework

### 3.1 Napoleon Options
A variation of Cliquet.
Payoff involves the MINIMUM return observed?
Or "Best of" performance.
Extremely complex path dependency.
Requires Monte Carlo.

### 3.2 The Cost of Guarantee
To fund the 0% Floor, the Cap must be low.
High Rates $\implies$ Higher Cap (More interest income to buy options).
Low Rates $\implies$ Low Cap (Product becomes unattractive).
Cliquets died in ZIRP era. Reborn in 2023.

## IV. Strategic Applications

### 4.1 Retail "Structured Products"
Banks package Cliquets into notes.
"Accumulators."
Fees are hidden in the pricing of the Option.
Usually, the "Fair Value" is 95% of Notional. Bank takes 5% upfront.

### 4.2 Volatility Filtering
Cliquets perform best in Volatile but Sideways markets (Choppy).
Year 1: +10% (Cap). Gain 10%.
Year 2: -20% (Floor). Gain 0%.
Year 3: +10% (Cap). Gain 10%.
Total: +20%.
Buy-and-Hold S&P: $1.1 \times 0.8 \times 1.1 = 0.968$. (-3%).
Cliquet outperforms Buy-and-Hold due to "Locking in" gains (Ratchet).
Outperforms in "W-shaped" recoveries.

## V. Exercises

**Exercise 1 (Reset Risk):**
Dealer sells 5-year Cliquet.
Year 1 Vol is low. Strike resets.
Year 2 Crisis. Vol explodes.
Dealer is Short Vega on the forward options.
Massive loss if not hedged with long-dated Vegas.

**Exercise 2 (Deflation):**
If market trends down slowly (-2% per year).
Cliquet pays 0% every year.
Principal returned.
Investor loses Real Value (Inflation).
Cliquet protects Nominal, not Real capital.

## VI. References
-   Wilmott, P. *Cliquet Options and Volatility Models*.
-   Gatheral, J. *The Volatility Surface* (Forward Skew section).
