# PIN Model Probability of Informed Trading

## I. Executive Summary

The **PIN Model** (Easley, Kiefer, O'Hara, Paperman - EKOP, 1996) is the structural backbone of Microstructure empirics. It estimates the probability that a trade originates from an **Informed Trader** ($\mu$) versus a **Noise Trader** ($\epsilon$). By examining the **Order Imbalance** (Heavy Buying vs Balanced), the model extracts the **Information Content** of the trade flow. High PIN stocks have wider spreads and higher expected returns (Liquidity Premium).

## II. Formal Definitions

### Definition 2.1 (The Tree Model)
Nature chooses: News ($Event$) with prob $\alpha$, No News ($NoEvent$) with prob $1-\alpha$.
If Event: Good News ($\delta$) or Bad News ($1-\delta$).
Arrival Rates (Poisson):
**Informed ($\mu$):** Buy if Good, Sell if Bad.
**Uninformed ($\epsilon$):** Buy ($\epsilon_b$) and Sell ($\epsilon_s$) randomly.
Likelihood Maximization estimates parameters ($\alpha, \delta, \mu, \epsilon$).

### Definition 2.2 (PIN Formula)
$$ PIN = \frac{\alpha \mu}{\alpha \mu + \epsilon_b + \epsilon_s} $$
Numerator: Expected Number of Informed Trades.
Denominator: Total Expected Trades.
Ratio of "Signal" to "Total Flow."

## III. Theoretical Framework

### 3.1 Sequential Trade
If we see Buy, Buy, Buy...
Likelihood of "Good News" event rises.
Market Maker updates belief (Bayesian Learning).
Quotes shift up.
Spread widens (to protect against $\mu$).

### 3.2 Volume Anomaly
Does high volume mean low spread?
Standard Theory: Yes (scales economies).
PIN Theory: Not necessarily. If Volume is high because $\mu$ is high (Informed traders attacking), Spread widens.
Only "Noise Volume" reduces spreads.

## IV. Strategic Applications

### 4.1 Earnings Drift Prediction
Stocks with high PIN *before* earnings tend to have smaller post-earnings drift?
Actually, high PIN implies information is already leaking into price.
Low PIN implies the news will be a total surprise.

### 4.2 Corporate Finance
companies with High PIN have higher Cost of Capital.
Investors demand a premium to hold assets where they are "fleeced" by insiders.
Solution: Better Disclosure reduces $\alpha$ (Private Info) and lowers PIN $\implies$ Higher Stock Price.

## V. Exercises

**Exercise 1 (Estimation):**
Download tick data.
Count Buys/Sells per day for 30 days.
Fit EKOP parameters via Max Likelihood.
Calculate PIN.
Is PIN correlated with Bid-Ask Spread? (Should be Positive).

**Exercise 2 (The Flow Toxicity Link):**
VPIN is the high-frequency approximation of PIN.
PIN assumes constant parameters over the day.
VPIN allows parameters to vary tick-by-tick.
Better for HFT.

## VI. References
-   Easley, D., Kiefer, N., O'Hara, M. & Paperman, J. *Liquidity, Information, and Infrequently Traded Stocks*.
-   Vega, C. *Stock Price Reaction to Public and Private Information*.
