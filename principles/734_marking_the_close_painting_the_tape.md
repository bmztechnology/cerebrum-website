# Marking the Close Painting the Tape

## I. Executive Summary

**Marking the Close** is the manipulation of the closing price (the most important reference price) by executing aggressive orders in the final seconds of the session. **Painting the Tape** refers to creating a series of prints to give the impression of a price move. These strategies distort benchmarks (NAV, Settlement), triggering margin calls or performance bonuses based on artificial valuations.

## II. Formal Definitions

### Definition 2.1 (The Settlement Window)
Futures settle at VWAP of last 30 seconds (or 1 min).
Mutual Funds mark NAV at 4:00pm Close.
Manipulator goal: Ensure 4:00pm price is High (or Low).
Strategy: "Bang the Close."
Accumulate inventory all day. Dump (or Pump) execution at 3:59:50.

### Definition 2.2 (Painting the Tape)
Printing high prices on small size.
Execute 1 share at 10.05, 1 share at 10.10, 1 share at 10.15.
Chart looks like a rally.
Lures Momentum Algos.
Then sell large size at 10.15.
Cost: Spreads on small lots. Gain: Better exit on large lot.

## III. Theoretical Framework

### 3.1 Benchmark Manipulation
LIBOR, FX Fix (4pm London), ISDA Fix.
Banks colluded to move the Fix.
"I need the rate low." "I need it high."
They netted out and pushed the market.
Result: Billions in fines.

### 3.2 High Water Marks
Hedge Fund fees (2/20).
Performance fee depends on Year End NAV.
Incentive to "Mark up" the portfolio on Dec 31.
Illiquid assets are easiest to paint.

## IV. Strategic Applications

### 4.1 "Close on High"
Technical Analysis signal.
"Stock closed at highest tick."
Bullish?
Or just manipulation?
Volume analysis: If Close Vol is tiny but Price is High $\implies$ Suspect.

### 4.2 MOC Imbalance
NYSE publishes "Market On Close" imbalances at 3:50pm.
Traders front-run the imbalance.
If "buy side" imbalance is huge, price ramps into close.
Is this manipulation? No, it's transparency.
But adding to the imbalance *to create* the ramp is manipulation.

## V. Exercises

**Exercise 1 (Window Dressing):**
Quarter end.
Fund Managers buy "Winners" (NVIDIA) to show them in the quarterly report.
"See, I owned the hot stock."
Pushes prices up at quarter end.
Reverts next day.

**Exercise 2 (The Spike):**
Look at 1-minute chart.
Price is flat.
Last second spike of 2%.
Next morning Open is -2%.
Classic Marking the Close.

## VI. References
-   Kyle, A. & Viswanathan, S. *Price Manipulation in the Options Market*.
-   Comerton-Forde, C. & Putnins, T. *Measuring Closing Price Manipulation*.
