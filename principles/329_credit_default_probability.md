# Credit Default Probability: Hazard Rates

## I. Executive Summary

Modeling **Default Probability** is the core of Credit Pricing. We use **Hazard Rates ($\lambda$)**, which represent the instantaneous conditional probability of default given survival up to time $t$. The spread of a bond (Credit Spread) is directly proportional to this hazard rate and the expected Loss Given Default.

## II. Formal Definitions

### Definition 2.1 (The Poisson Process)
Default is a "Jump to Default" event.
Arrival rate $\lambda$.
Survival Probability $P(t) = e^{-\lambda t}$ (assuming const $\lambda$).
Probability of Default before $t$: $PD(t) = 1 - e^{-\lambda t}$.

### Definition 2.2 (The Triangle Approximation)
$$ Spread \approx \lambda \times LGD $$
If Spread = 200 bps (0.02).
LGD = 60% (Recovery 40%).
$\lambda = 0.02 / 0.60 = 0.0333$.
Implied Default probability $\approx$ 3.3% per year.

## III. Theoretical Framework

### 3.1 Structural Models (Merton)
Default happens if Asset Value ($V$) < Debt ($D$) at maturity.
Equity is a Call Option on Assets.
Default Prob = Prob($V_T < D$).
Uses Volatility of Assets to predict default.
Good for firm-specific analysis.

### 3.2 Reduced Form Models (Jarrow-Turnbull)
Agnostic to firm assets.
Default is an exogenous random process calibrated to market spreads.
Used for pricing derivatives.
"The market knows best."

## IV. Strategic Applications

### 4.1 Spread Decomposition
Spread = Expected Loss + Liquidity Premium + Risk Premium.
High Yield spreads (500 bps) often imply default rates (5%) higher than historical average (3%).
The difference is the Risk Premium (Compensation for variance of default losses).
"Harvesting the Credit Risk Premium."

### 4.2 Curve Steepness
If Hazard Rate is increasing with time?
Short term survival is likely. Long term is doomed.
Upward sloping credit curve.
If Hazard Rate is decreasing?
"If they make it through next year, they are safe."
Inverted curve (Distressed issuer).

## V. Exercises

**Exercise 1 (Extracting Probabilities):**
CDS 1Y = 100 bps. CDS 2Y = 150 bps.
Bootstrap the marginal probability of default in Year 2.
Forward Hazard Rate.

**Exercise 2 (Merton's d2):**
Distance to Default (DtD).
(Asset Value - Default Point) / (Asset Vol).
Standard deviations to bankruptcy.
Used by KMV rating agency.

## VI. References
-   Merton, R.C. *On the Pricing of Corporate Debt*.
-   Schonbucher, P.J. *Credit Derivatives Pricing Models*.
