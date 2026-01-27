# Compound Interest: The Exponential Growth Function

## I. Executive Summary

Compound Interest is the mathematical engine of wealth accumulation. In trading, it refers to the process of reinvesting profits to generate further profits. Unlike "Simple Interest," where the capital base remains static, compounding allows the base to grow geometrically. Albert Einstein famously called it "the eighth wonder of the world." For a trader, understanding the exponential function is critical for setting realistic long-term goals and understanding the devastating impact of drawdown (negative compounding).

## II. Formal Definitions

### Definition 2.1 (Discrete Compounding)
Future Value ($FV$) of a principal ($P$) growing at rate $r$ per period for $n$ periods:
$$FV = P \times (1 + r)^n$$

### Definition 2.2 (Continuous Compounding)
As the frequency of compounding approaches infinity:
$$FV = P \times e^{rt}$$

### Definition 2.3 (Geometric Mean Return)
Since trading returns vary ($r_1, r_2, ...$), the true growth rate is not the arithmetic mean, but the geometric mean:
$$R_G = \left( \prod_{i=1}^{n} (1+r_i) \right)^{1/n} - 1$$
**Crucial Theorem:** Volatility drags down the Geometric Mean. $R_G \approx R_{arithmetic} - \frac{\sigma^2}{2}$.

## III. Theoretical Framework

### 3.1 The Rule of 72
A shortcut to estimate doubling time.
$$YearsToDouble \approx \frac{72}{r\%}$$
*Example:* At 6% per month (a good trader's target), an account doubles in $\frac{72}{6} = 12$ months.

### 3.2 Asymmetry of Compounding (The Drawdown Trap)
Positive and negative percentages do not cancel out.
$$ (1 - x) \times (1 + y) = 1 $$
$$ y = \frac{x}{1-x} $$
-   Loss of 10% requires Gain of 11.1% to recover.
-   Loss of 20% requires Gain of 25%.
-   Loss of 50% requires Gain of 100%.
-   Loss of 90% requires Gain of 900%.
**Conclusion:** Preserving capital is mathematically more important than growing it.

## IV. Strategic Applications

### 4.1 Fixed Fractional Position Sizing
To achieve compounding, you cannot trade fixed lot sizes (e.g., 1 lot per trade). You must trade a fixed *fraction* of equity (e.g., 2% Risk).
-   As Account Grows $\to$ Lot Size Grows $\to$ Profits Grow.
-   As Account Shrinks $\to$ Lot Size Shrinks $\to$ "Soft Landing."
This automates the compounding process.

### 4.2 Projecting Realistic Wealth
A trader with \$10,000 targeting 5% per month.
-   Year 1: $10k \times (1.05)^{12} = \$17,958$
-   Year 5: $10k \times (1.05)^{60} = \$186,791$
-   Year 10: $10k \times (1.05)^{120} = \$3,489,119$
*Reality Check:* Sustaining 5% monthly for 10 years without a blow-up is statistically improbable for humans (capacity constraints, psychological fatigue).

## V. Exercises

**Exercise 1 (The Penny Problem):**
Would you rather have \$1 million today, or a penny that doubles every day for 30 days?
Calculate the value of the penny on Day 30.
$$0.01 \times 2^{29}$$

**Exercise 2 (Volatility Drag):**
Trader A makes +10%, +10%, +10%, +10%.
Trader B makes +40%, -20%, +40%, -20%.
Both have the same Arithmetic Average (+10%).
Calculate the final value of \$100 for both. Explain why Trader B lags (Volatility Tax).

**Exercise 3 (Recovery):**
You lose 30% of your account.
Your strategy averages 2% return per month.
How many months will it take to recover to break-even?
Solve $(1 - 0.30) \times (1.02)^n = 1$.

## VI. References
-   Vince, R. (2009). *The Leverage Space Trading Model*.
-   Rotman, J. (1992). *The Nature of Growth*.
-   Kelly, J.L. (1956). *A New Interpretation of Information Rate*. (Origins of the Kelly Criterion).
