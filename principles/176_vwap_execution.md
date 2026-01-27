# VWAP Execution: The Institutional Algorithm

## I. Executive Summary

Institutions cannot just buy $100M of stock at market. They must slice the order over time to minimize impact. **VWAP (Volume Weighted Average Price)** is the benchmark. The VWAP Algorithm attempts to distribute the order according to the historical **Volume Profile** of the day—trading heavily when the market trades heavily, and lightly during lunch. Matching the market's rhythm makes the order "invisible."

## II. Formal Definitions

### Definition 2.1 (VWAP Benchmark)
$$P_{VWAP} = \frac{\sum P_i V_i}{\sum V_i}$$
Trader's Goal: Buy Price $< P_{VWAP}$.

### Definition 2.2 (The Schedule)
Let $u(t)$ be the historical fraction of daily volume executed by time $t$.
Total Order Size $X$.
At time $t$, target executed quantity: $x(t) = X \cdot u(t)$.
Trade size for next bin: $\Delta x = X(u(t+1) - u(t))$.

## III. Theoretical Framework

### 3.1 Static vs Dynamic
-   **Static VWAP:** Decides schedule at 9:30 AM based on 30-day average. Blind to today's news.
-   **Dynamic VWAP:** Updates schedule. If volume today is huge (News), speed up execution to participate in the liquidity.

### 3.2 Variance Calculation
VWAP minimizes **Tracking Error** (Variance from the average).
It does NOT minimize Cost (Price Impact).
A VWAP algo will happily buy at the High of the Day if that's where the volume is.

## IV. Strategic Applications

### 4.1 Guaranteed VWAP
Banks offer "Guaranteed VWAP" to clients.
The Bank takes the risk.
The Bank uses a slightly aggressive algo to beat the VWAP and keep the spread.
If the algo fails, the Bank pays the client the difference.

### 4.2 Predatory Algorithmic Trading
HFTs know the VWAP curve (U-shape: High at open, Low at lunch, High at close).
They know Institutional Algos *must* buy at 3:55 PM.
HFTs front-run the Close.
This is "Liquidity Detection."

## V. Exercises

**Exercise 1 (The Smile):**
Plot Volume vs Time of Day.
It looks like a Smile.
VWAP Algos mirrors this smile.
TWAP (Time Weighted) is a flat line.
Using TWAP during lunch is dangerous (Impact is high because liquidity is low).

**Exercise 2 (Deviation):**
You are behind schedule (Under-executed).
Price is rising.
Do you panic buy?
VWAP Logic: Yes. Catch up to the schedule.
Implementation Shortfall Logic: No. Wait for pullback.

## VI. References
-   Berkowitz, S.A., et al. *The Total Cost of Transactions on the NYSE*.
-   Kissell, R. *The Science of Algorithmic Trading and Portfolio Management*.
