# Profit Factor & Expectancy: Metrics of Edge

## I. Executive Summary

The Profit Factor is the fundamental metric of trading system efficiency. It answers the question: "For every dollar lost, how many dollars are gained?" While Win Rate (Accuracy) is often the obsession of novices, Profit Factor combines Accuracy and Payoff Ratio into a single number representing the robustness of the "Edge." A system can profit with a 90% win rate or a 10% win rate, provided the Profit Factor is $> 1.0$ (Net of costs).

## II. Formal Definitions

### Definition 2.1 (Profit Factor - PF)
$$PF = \frac{\sum_{i=1}^{N} GrossProfit_i}{\sum_{j=1}^{M} |GrossLoss_j|}$$
-   $PF < 1.0$: Failing System (Losing money).
-   $PF = 1.0$: Break-Even (Churning).
-   $PF > 1.5$: Good System.
-   $PF > 3.0$: Exceptional System (or Curve Fitted).

### Definition 2.2 (Mathematical Expectancy - E)
The expected average PnL per trade.
$$E = (P_{win} \times \bar{W}) - (P_{loss} \times \bar{L})$$
Where $P$ is probability and $\bar{W}, \bar{L}$ are average dollar amounts.

### Definition 2.3 (Payoff Ratio - R)
$$R = \frac{\bar{W}}{\bar{L}}$$

## III. Theoretical Framework: The Relationship Triangle

The relationship between Win Rate ($W\%$), Payoff Ratio ($R$), and Profit Factor is defined by the **Break-Even Equation**:
$$W_{req} = \frac{1}{1+R}$$
If $R=2$ (Winners are 2x Laters), you only need $W > 33.3\%$ to be profitable.
If $R=0.5$ (Scalping), you need $W > 66.6\%$.

**The Profit Factor can be approximated as:**
$$PF \approx \frac{W\% \times R}{(1-W\%)}$$

## IV. Analysis of Stability

### 4.1 The "Holy Grail" Fallacy
Traders seek High Win Rate + High R:R.
*Market Reality:* These are inversely correlated.
-   To get High R:R, you must hold for long targets $\implies$ Price often reverses $\implies$ Lower Win Rate.
-   To get High Win Rate, you must take small targets $\implies$ Lower R:R.
All viable strategies exist on the "Efficient Frontier" curve between these two variables.

### 4.2 Robustness of PF
A high Profit Factor derived from a few massive outliers is dangerous.
**Adjusted Profit Factor:** Remove the top 5% of moves. Does the PF stay > 1.0? If no, the strategy is a "Lottery Ticket" system, not a consistent alpha generator.

## V. Strategic Applications

### 5.1 System Optimization
When optimizing a strategy:
-   Don't maximize Net Profit (could be luck).
-   Maximize Profit Factor (Efficiency).
A strategy making \$10,000 with PF 2.0 is better than one making \$15,000 with PF 1.2 (which has massive variance and drawdown risk).

### 5.2 Portfolio Weighting
Allocate more capital to the strategy with the higher K-Ratio or Sharpe Ratio, which correlates with Profit Factor.

## VI. Exercises

**Exercise 1 (System Audit):**
System A: 100 trades. 40 Wins @ \$200. 60 Losses @ \$100.
System B: 100 trades. 90 Wins @ \$20. 10 Losses @ \$100.
a) Calculate Net Profit for both.
b) Calculate Profit Factor for both.
c) Which system is "safer"?

**Exercise 2 (Break-Even Analysis):**
You are a scalper targeting 5 pips with a 5 pip stop (R=1). Spread is 1 pip.
Effective Win = 4 pips. Effective Loss = 6 pips.
Effective $R = 4/6 = 0.66$.
What is the minimum Win Rate required to break even?
$$x = \frac{1}{1 + 0.66}$$

**Exercise 3 (Drawdown Implication):**
Why does a system with a Profit Factor of 1.2 inevitably suffer larger and longer drawdowns than a system with a Profit Factor of 2.5? Link this to the probability of consecutive loss streaks.

## VII. References
-   Vince, R. (1990). *Portfolio Management Formulas*.
-   Pardo, R. (2008). *The Evaluation and Optimization of Trading Strategies*.
-   Sharpe, W.F. (1994). *The Sharpe Ratio*.
