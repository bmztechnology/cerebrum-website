# Value at Risk (VaR): Probabilistic Loss Modeling

## I. Executive Summary

Value at Risk (VaR) is the industry-standard metric for quantifying the level of financial risk within a firm, portfolio, or position over a specific time frame. It answers a single, critical question: *"What is my maximum expected loss with X% confidence over the next N days?"* While criticized for its failure to predict "Black Swans" (Tail Risk), it remains the primary regulatory requirement (Basel III) for bank capital adequacy. For a trader, VaR transforms vague "risk" into a concrete dollar number.

## II. Formal Definitions

### Definition 2.1 (VaR)
For a confidence level $\alpha \in (0, 1)$ (e.g., 95% or 99%) and a time horizon $t$:
$$P(Loss > VaR_{\alpha}) = 1 - \alpha$$
*Translation:* There is a $(1-\alpha)$ probability that the loss will exceed the VaR figure.
Example: VaR (95%, 1 Day) = \$10,000.
Means: "We are 95% sure we won't lose more than \$10,000 tomorrow." (Or: Expect to lose > \$10,000 one day every month).

## III. Calculation Methodologies

### 3.1 Variance-Covariance Method (Parametric)
Assumes returns are Normally Distributed.
$$VaR = PositionValue \times Z_{\alpha} \times \sigma \times \sqrt{t}$$
-   $Z_{95\%} = 1.645$
-   $Z_{99\%} = 2.33$
*Pros:* Easy to calculate.
*Cons:* Fails if returns are non-normal (fat tails).

### 3.2 Historical Simulation
Ranking actual past returns from worst to best.
1.  Collect 500 days of PnL data.
2.  Sort them.
3.  The 95% VaR is the 25th worst day (5% of 500).
*Pros:* Captures actual market quirks (skewness).
*Cons:* "Driving forward looking in the rear-view mirror."

### 3.3 Monte Carlo Simulation
Generating 10,000 random potential future price paths using geometric Brownian motion (or jump-diffusion).
$$VaR = \text{Percentile}(SimulatedPnL, 1-\alpha)$$
*Pros:* Most robust. Handles options (gamma) well.
*Cons:* Computationally expensive. Model risk.

## IV. Conditional VaR (Expected Shortfall)

VaR tells you the *threshold* of the tail, but not *how bad* the tail is.
**Expected Shortfall (ES):**
$$ES_{\alpha} = E[Loss | Loss > VaR_{\alpha}]$$
"If we DO breach the VaR limit, what is the average loss?"
*Strategic Importance:* ES is superior for tail-risk hedging.

## V. Strategic Applications

### 5.1 Leverage Limits
Bank Risk Managers set limits based on VaR.
"Trader A has a \$1M Daily VaR limit."
If Market Volatility ($\sigma$) doubles, Trader A must cut his Position Size by 50% to stay within the \$1M limit.
*Market Effect:* This mechanical selling explains why selling accelerates during crashes (Volatility Feedback Loop).

### 5.2 Position Sizing
Retail Application:
"I want my 99% 1-Day Risk to be no more than 2% of equity."
Size = $\frac{0.02 \times Equity}{2.33 \times \sigma_{daily} \times Price}$

## VI. Exercises

**Exercise 1 (Parametric Calculation):**
Portfolio: \$100,000.
Daily Volatility ($\sigma$): 1.5%.
Confidence: 95% ($Z=1.65$).
a) Calculate 1-Day VaR.
b) Calculate 10-Day VaR ($\sqrt{10}$).

**Exercise 2 (Critique):**
In 2008, many banks had low VaR numbers right before the crash. Why?
(Hint: Lookback periods. If the last 2 years were calm, $\sigma$ is low, making VaR artificially low).

**Exercise 3 (Portfolio Diversification):**
Asset A VaR = \$100. Asset B VaR = \$100.
Correaltion $\rho = 0$.
The Portfolio VaR is NOT \$200. It is $\sqrt{100^2 + 100^2}$. Calculate it.
Explain the "Diversification Benefit" in dollar terms.

## VII. References
-   Jorion, P. (2006). *Value at Risk: The New Benchmark for Managing Financial Risk*.
-   Taleb, N.N. (1997). *Dynamic Hedging*. (A strong critique of VaR).
-   Basel Committee on Banking Supervision (BCBS) IV.
