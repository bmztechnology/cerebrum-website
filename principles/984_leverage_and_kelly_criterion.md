# Leverage and Kelly Criterion

## I. Executive Summary

**Leverage** magnifies returns and risks. The **Kelly Criterion** ($f^* = p - q/b$) calculates the mathematical **Optimal Bet Size** to maximize geometric growth and avoid ruin. The synthesis applies Kelly to modern portfolio construction, arguing that **Volatility Targeting** is a form of "Continuous Kelly" that allows for safe leverage application.

## II. Formal Definitions

### Definition 2.1 (The Kelly Formula)
Fraction to bet ($f$).
$p$ = Probability of Win.
$b$ = Odds (Win Amount / Loss Amount).
Example: Coin toss. Heads win \$2, Tails lose \$1.
$p=0.5$. $b=2$.
$f = 0.5 - (0.5/2) = 0.25$.
Bet 25% of bankroll.
Betting > 25% lowers growth rate (Risk of Ruin).
Betting < 25% lowers growth rate (Safe).
"Half Kelly" is industry standard (Safety margin).

### Definition 2.2 (Geometric vs Arithmetic Mean)
Leverage kills Geometric Mean (Compounding).
If you lose 50%, you need +100% to recover.
Kelly optimizes $\log(Wealth)$.
It minimizes the "Volatility Drag."

## III. Theoretical Framework

### 3.1 Shannon's Demon
Claude Shannon.
Rebalancing a volatile asset + cash with leverage.
Asset: +100%, -50%, +100%, -50% (Goes nowhere).
Portfolio: 50% Asset / 50% Cash. Rebalanced.
Result: Massive Growth.
"Pumping" volatility into returns.
Requires high volatility and uncorrelated assets.
Leverage enhances this effect.

### 3.2 The Leverage Lifecycle
Young: High Human Capital, Low Financial Capital.
Should use leverage (Mortgage, Margin) to buy stocks. (Ayres/Nalebuff).
Diversifying across time.
Old: Low Human Capital, High Financial Capital.
De-lever.
Standard advice (No leverage) is mathematically suboptimal for young savers.

## IV. Strategic Applications

### 4.1 Volatility Targeting
Fund targets 12% Volatility.
If VIX is low, leverage up to 1.5x.
If VIX is high, leverage down to 0.5x.
Keeps risk constant.
Used by Risk Parity and CTAs.
Mechanical deleveraging protects against "Left Tail" events (mostly).

### 4.2 The Margin Call Death Spiral
If leverage is static (e.g., maintain 2x).
Market drops 10%. Equity drops 20%.
Must sell assets to pay down loan to maintain 2x ratio? No, usually stable.
But if Maintenance Margin is hit $\implies$ Forced Liquidation.
Selling at the bottom.
Kelly assumes no "Forced Liquidation" threshold.
Reality has Margin Calls.
Must bet *under* Kelly to avoid this absorbing barrier.

## V. Exercises

**Exercise 1 (The Coin Flip):**
Edge: 60% win rate. Even odds.
Kelly = 20%.
Simulate betting 40% (Over-betting).
You eventually go bankrupt despite the edge.
Size matters more than Entry.

**Exercise 2 (Implicit Leverage):**
Bank stocks are levered 10:1 (Assets/Equity).
Real Estate is levered 5:1.
Tech stocks have operating leverage.
You might have more leverage than you think.

## VI. References
-   Poundstone, W. *Fortune's Formula*.
-   Thorp, E. *A Man for All Markets*.
