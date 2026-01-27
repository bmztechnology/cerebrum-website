# Brinson Fachler Attribution: Deconstruction

## I. Executive Summary

**Brinson-Fachler Attribution** decomposes the excess return of a portfolio relative to a benchmark into three components: **Allocation Effect** (Sector weighting), **Selection Effect** (Stock picking), and **Interaction Effect**. It answers the question: "Did the manager beat the S&P 500 by being in the right sectors (Tech) or by picking the right stocks within sectors (Nvidia vs Intel)?"

## II. Formal Definitions

### Definition 2.1 (The Equations)
Define:
-   $w_p, w_b$: Weights in Portfolio/Benchmark.
-   $R_p, R_b$: Returns in Portfolio/Benchmark.
1.  **Allocation ($A_i$):**
    $$ (w_{p,i} - w_{b,i}) \times (R_{b,i} - R_{TotalBenchmark}) $$
    Did you overweight a sector that beat the overall market?
2.  **Selection ($S_i$):**
    $$ w_{b,i} \times (R_{p,i} - R_{b,i}) $$
    Did your stocks beat the sector index?
3.  **Interaction ($I_i$):**
    $$ (w_{p,i} - w_{b,i}) \times (R_{p,i} - R_{b,i}) $$
    Did you overweight a sector AND pick winners in it?

### Definition 2.2 (Brinson-Hood-Beebower)
Simpler version. Combines Selection + Interaction into one "Selection" term.

## III. Theoretical Framework

### 3.1 The "Right" Benchmark
Attribution is meaningless without a valid benchmark.
If Portfolio holds Small Cap Value stocks, benchmarking against S&P 500 will show huge Allocation Effect (Small Cap premium) and Selection Effect (Value premium).
This is not skill, it's factor exposure.
Requires style-adjusted benchmark.

### 3.2 Multi-Period Smoothing
Arithmetic attribution (addable) vs Geometric attribution (compounding).
Linking daily attribution to monthly totals requires "Carino Smoothing" or "Menchero Smoothing" algorithms.
Arithmetic differences don't stack geometrically.

## IV. Strategic Applications

### 4.1 Manager Evaluation
Manager claims "Stock Picker" skill.
Attribution shows 90% of Alpha is form Allocation (Overweight Energy in 2022).
Selection Alpha is nearly zero.
Conclusion: Manager is a lucky Sector Rotator, not a Stock Picker.

### 4.2 Risk Management
If Selection Effect is consistently negative but Allocation is positive.
Constraint: Force manager to be Sector Neutral.
Make them focus on their weakness (Selection)? Or fire them?

## V. Exercises

**Exercise 1 (Calculation):**
Sector: Tech.
$w_p=30\%, w_b=20\%$. (Overweight 10%).
$R_{tech}=15\%, R_{mkt}=10\%$. (Tech outperformed 5%).
Allocation Effect = $0.10 \times (0.15 - 0.10)$? No.
Allocation = $0.10 \times (0.15 - 0.10) = 0.5\%$.
Contribution to Alpha.

**Exercise 2 (Cash Drag):**
Cash is a sector.
$w_{cash} > 0$. Benchmark $w_{cash} = 0$.
In Bull Market, Allocation to Cash is negative alpha.
Manager performance should be calculated on "Invested Capital" to isolate skill?
GIPS says no, Cash Drag is part of the performance.

## VI. References
-   Brinson, G., Hood, L., & Beebower, G. *Determinants of Portfolio Performance*.
-   Brinson, G. & Fachler, N. *Measuring Non-US Equity Portfolio Performance*.
