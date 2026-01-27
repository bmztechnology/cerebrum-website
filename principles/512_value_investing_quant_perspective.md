# Value Investing Quant Perspective: Cheapness

## I. Executive Summary

**Quantitative Value** differs from discretionary value (Buffett). It relies on systematic ratios like **Book-to-Market (HML)**, **Earnings Yield (E/P)**, **Cash Flow Yield (CF/P)**, and **EBITDA/EV**. The premise is Mean Reversion: cheap stocks are priced for disaster; if they only turn out "okay," they re-rate upwards. The primary peril is the **Value Trap** (cheap for a reason).

## II. Formal Definitions

### Definition 2.1 (The Value Spread)
Valuation of "Cheap" bucket vs "Expensive" bucket.
Historic Median Spread: Expensive P/E 20x, Cheap P/E 10x.
Spread = 10 pts.
Dot Com Bubble (2000): Expensive 50x, Cheap 8x. Spread = 42. (Best time to buy Value).
Covid (2020): Huge spread divergence again.

### Definition 2.2 (Composite Value)
Using one metric (P/B) is dangerous (Amazon P/B is huge, but it's not "expensive" relative to growth).
Quant funds use composites:
$Score = z(P/B) + z(P/E) + z(FCF/P)$.
Robustness.

## III. Theoretical Framework

### 3.1 Intangibles Problem
Book Value ignores Brand, IP, R&D.
Tech companies look "expensive" on P/B but "cheap" on P/E or Growth-Adjusted terms.
HML Factor (based on P/B) failed in 2010-2020 because it shorted Tech.
Modern Value metrics adjust for R&D capitalization.

### 3.2 Deep Value vs Relative Value
-   **Deep Value:** Buy the absolute cheapest stocks in the universe (often Dying industries).
-   **Relative Value:** Buy the cheapest stocks *within* a sector (Cheap Tech vs Expensive Tech).
Relative Value protects against sector bets (Shorting Tech / Long Energy).

## IV. Strategic Applications

### 4.1 The Value Trap
Stock down 50%. P/E looks low (using trailing earnings).
But Earnings are about to collapse.
Quant filter: **Distance to Default**, **Momentum** (Don't buy 52-week lows, wait for turn).

### 4.2 Systematic Alpha
AQR / Dimensional Fund Advisors (DFA).
Systematic tilt to Value.
Believe Value Premium is a risk premium (Compensation for holding scary assets).

## V. Exercises

**Exercise 1 (Growth Trap):**
Opposite. Expensive stocks priced for perfection.
Miss earnings by 1 penny $\implies$ Down 20%.
Shorting high-multiple growth is the other side of the Value trade.

**Exercise 2 (EBIT/EV):**
Acquirer's Multiple.
Enterprise Value (Debt + Equity) in denominator.
Neutralizes capital structure differences.
Better than P/E for leveraged comparisons.

## VI. References
-   Graham, B. & Dodd, D. *Security Analysis*.
-   Carlisle, T. *Deep Value*.
