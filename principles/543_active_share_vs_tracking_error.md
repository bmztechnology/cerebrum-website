# Active Share vs Tracking Error: Cloning

## I. Executive Summary

**Active Share** measures the percentage of portfolio holdings that differ from the benchmark (Composition). **Tracking Error** measures the volatility of the return difference (Performance). A high Active Share (>80%) combined with high Tracking Error indicates a conviction Stock Picker. High Active Share with Low Tracking Error indicates a "Diversified Stock Picker" (Sector Neutral). Low Active Share (<60%) indicates **Closet Indexing**, which destroys value after fees.

## II. Formal Definitions

### Definition 2.1 (Active Share Formula)
$$ ActiveShare = \frac{1}{2} \sum_{i=1}^N | w_{p,i} - w_{b,i} | $$
If Portfolio = Benchmark, Sum is 0. Active Share = 0%.
If Portfolio holds 0% overlap with Benchmark, Sum is 200%. Active Share = 100%.

### Definition 2.2 (The Matrix)
1.  **Concentrated Stock Picker:** High Active Share / High TE. (Warren Buffett).
2.  **Closet Indexer:** Low Active Share / Low TE. (Expensive Beta).
3.  **Factor Bets:** Low Active Share / High TE. (Leveraged Beta).
4.  **Diversified Stock Picker:** High Active Share / Low TE. (Quant Funds). They hold many stocks but weights differ significantly from index.

## III. Theoretical Framework

### 3.1 Fee Justification
Active Fee / Active Share = True Fee.
If Expense Ratio is 1% and Active Share is 20%.
Client pays 1% to get 20% active management.
Implied Fee on active portion = $1\% / 0.20 = 5\%$.
Extortionate.
If Active Share is 90%, Implied Fee is 1.1%. Reasonable.

### 3.2 Petajisto's Study
Funds with highest Active Share consistently outperform benchmark (before fees).
Closet Indexers consistently underperform.
Conclusion: Be active or be passive. Don't be in the middle.

## IV. Strategic Applications

### 4.1 Quant Funds
Quants often have Active Share of 80% but Tracking Error of 2%.
Why?
They hold 500 stocks, but weighting is based on Alpha (Value/Mom).
They constrain Sector/Factor exposure to match index.
Result: Pure Idiosyncratic Alpha.

### 4.2 Manager Selection
Filter: Active Share > 80%.
Eliminates 70% of the Mutual Fund universe.
Focus diligence on the remaining 30%.

## V. Exercises

**Exercise 1 (Small Cap):**
Active Share naturally higher in Small Cap.
Why?
Index is huge (2000 names). Manager holds 50.
Overlap is tiny.
Active Share threshold should be higher (90%+) for Small Cap managers.

**Exercise 2 (Cash):**
Holding Cash increases Active Share.
Is that skill?
No, it's a drag.
Adjust Active Share for Cash holdings.

## VI. References
-   Cremers, M. & Petajisto, A. *How Active is Your Fund Manager?*.
-   Frazzini, A. *Active Share and Manager Skill*.
