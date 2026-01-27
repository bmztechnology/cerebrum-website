# The Taylor Rule: Algorithmic Monetary Policy

## I. Executive Summary

The **Taylor Rule** (John Taylor, 1993) is a formula that prescribes the optimal Central Bank Interest Rate based on the Output Gap and the Inflation Gap. It is the baseline benchmark for "Neutral Policy." If the actual Fed Funds Rate is below the Taylor Rule rate, policy is "Loose" (Stimulative). If above, it is "Tight" (Restrictive).

## II. Formal Definitions

### Definition 2.1 (The Formula)
$$R_{target} = \pi + r^* + 0.5(\pi - \pi^*) + 0.5(y - y^*)$$
-   $\pi$: Current Inflation Rate.
-   $r^*$: Real Neutral Rate (Assumed 2%).
-   $\pi^*$: Target Inflation (2%).
-   $y - y^*$: Output Gap (GDP vs Potential GDP).

### Definition 2.2 (Example)
Inflation = 5%. Output Gap = 1% (Economy overheating).
$R = 5 + 2 + 0.5(5-2) + 0.5(1)$
$R = 7 + 1.5 + 0.5 = 9\%$.
If Fed Funds is 5% in this scenario, the Fed is "Behind the Curve" by 400bps.

## III. Theoretical Framework

### 3.1 r-star ($r^*$)
The theoretical interest rate that neither stimulates nor slows down the economy.
Since 2000, $r^*$ has fallen (Demographics, Tech).
Holston-Laubach-Williams (HLW) Model estimates $r^*$.
Currently estimated around 0.5% (Real).
So Neutral Nominal Rate $\approx 2.5\%$.

### 3.2 Inertial Taylor Rule
Central Banks don't jump from 0% to 9% overnight.
They "Smooth" the path.
$R_t = (1-\rho)R_{Taylor} + \rho R_{t-1}$.
Predicts the "Hiking Cycle" steps (25bps, 50bps).

## IV. Strategic Applications

### 4.1 Taylor Rule Deviation
Plot (Actual Rate - Taylor Rule Rate).
If Deviation is largely negative $\implies$ Asset Bubble forming (Money too cheap).
If Deviation is positive $\implies$ Recession Risk (Money too tight).

### 4.2 Forex valuation
Taylor Rule Differential Model.
$R_{US}^{Taylor} - R_{EU}^{Taylor}$.
Exchange rate usually tracks the *theoretical* differential better than the actual spot differential (because markets forward-look).

## V. Exercises

**Exercise 1 (The Great Inflation):**
In 1970s, Burns kept rates below Taylor Rule. Result: Hyperinflation.
Volcker raised rates well ABOVE Taylor Rule. Result: Inflation crushed.

**Exercise 2 (Post-Covid):**
In 2021, Inflation hit 7%. Taylor Rule demanded 10% rates.
Fed was at 0%.
Gap was historic.
Asset prices (Crypto, Tech) went parabolic (Bubble verified).
Then Fed hiked fast to catch up $\to$ Bubble popped.

## VI. References
-   Taylor, J.B. *Discretion versus policy rules in practice*.
-   Clarida, R., Gali, J., & Gertler, M. *The Science of Monetary Policy*.
