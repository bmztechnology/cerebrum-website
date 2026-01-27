# Support and Resistance: Market Microstructure Theory

## I. Fundamental Concepts

Support and resistance levels represent price zones where the balance between supply and demand shifts. These concepts form the foundation of price action analysis and are critical for understanding market dynamics.

## II. Formal Definitions

### Definition 2.1 (Support Level)
A support level S is a price where:
$$\lim_{P \to S^+} D(P) > \lim_{P \to S^+} S(P)$$

Where D(P) is demand and S(P) is supply at price P.

### Definition 2.2 (Resistance Level)
A resistance level R is a price where:
$$\lim_{P \to R^-} S(P) > \lim_{P \to R^-} D(P)$$

### Definition 2.3 (Strength Quantification)
The strength of a S/R level can be quantified as:
$$Strength(L) = n_{touches} \times \sum_{i} V_i \times TF_weight$$

Where:
- n_touches = Number of times price tested the level
- V_i = Volume at each touch
- TF_weight = Timeframe importance factor

## III. Types of Support and Resistance

### 3.1 Static Levels
**Horizontal S/R:**
- Previous swing highs/lows
- Round numbers (psychological levels)
- Historical significant levels

**Round Number Formula:**
$$RoundLevel_n = \lfloor P / 10^n \rfloor \times 10^n$$

### 3.2 Dynamic Levels
**Moving Averages:**
$$DynamicSR(t) = MA_n(t)$$

**Trend Lines:**
$$TrendLine(t) = mt + b$$

Where m is slope and b is intercept.

### 3.3 Calculated Levels
**Pivot Points:**
$$Pivot = \frac{H + L + C}{3}$$
$$R1 = 2 \times Pivot - L$$
$$S1 = 2 \times Pivot - H$$
$$R2 = Pivot + (H - L)$$
$$S2 = Pivot - (H - L)$$

## IV. Role Reversal Principle

### Theorem 4.1 (Polarity Principle)
When a support level S is broken, it becomes resistance:
$$P < S \Rightarrow S \text{ becomes resistance}$$

Conversely:
$$P > R \Rightarrow R \text{ becomes support}$$

### Proof (Market Psychology)
1. At support S, buyers entered long positions
2. When S breaks, longs are underwater
3. Any rally to S allows exit at break-even
4. This creates selling pressure at former S level ∎

## V. Volume Analysis at S/R

### Definition 5.1 (Volume Profile)
$$VP(P) = \sum_{t: P_t = P} V_t$$

High volume nodes indicate significant S/R zones.

### Theorem 5.1 (Volume Confirmation)
A S/R test is more significant if accompanied by high volume:
$$Significance \propto \frac{V_{test}}{V_{avg}}$$

## VI. Breakout Analysis

### Definition 6.1 (True Breakout)
A breakout is confirmed when:
1. Price closes beyond level
2. Volume exceeds average
3. Subsequent candle confirms direction

$$Breakout_R = (C_t > R) \land (V_t > 1.5 \times V_{avg}) \land (O_{t+1} > R)$$

### Definition 6.2 (False Breakout/Fakeout)
$$Fakeout_R = (H_t > R) \land (C_t < R)$$

Price penetrates but fails to hold.

### Theorem 6.1 (Fakeout Probability)
Empirically, the probability of fakeout increases with:
- Number of previous tests
- Distance above/below level
- Low volume

## VII. Mathematical Models

### 7.1 Order Flow Model
Supply/Demand at price P:
$$D(P) = D_0 e^{-\alpha(P - P_0)}$$
$$S(P) = S_0 e^{\beta(P - P_0)}$$

Equilibrium: D(P*) = S(P*)

### 7.2 Price Memory Model
The market "remembers" significant levels:
$$Memory(L, t) = \sum_{i: P_i \approx L} e^{-\lambda(t - t_i)} V_i$$

Levels decay in significance over time with half-life 1/λ.

## VIII. Confluence Zones

### Definition 8.1 (Confluence)
A confluence zone exists when multiple S/R factors align:
$$Confluence(P) = \{P : |Fib_i - P| < \epsilon \land |MA_j - P| < \epsilon \land ...\}$$

### Theorem 8.1 (Confluence Strength)
$$ConfluenceStrength = \sum_{i} w_i \times \mathbb{1}_{|Factor_i - P| < \epsilon}$$

Higher confluence = Higher probability of price reaction.

## IX. Trading Strategies

### 9.1 Bounce Trading
- Entry: At S/R level with confirmation
- Stop: Beyond S/R level
- Target: Next S/R level

### 9.2 Breakout Trading
- Entry: On confirmed break with pullback
- Stop: Below broken level
- Target: Measured move or next S/R

## X. Exercises

**Exercise 1:** Identify all pivot points for H=1.1200, L=1.1100, C=1.1150.

**Exercise 2:** Calculate the strength score for a level tested 4 times with volumes [1000, 1200, 800, 1500].

**Exercise 3:** Prove that round numbers at higher magnitudes (1.1000 vs 1.1250) are stronger S/R.

## XI. References
- Edwards, R.D. & Magee, J. (1948). Technical Analysis of Stock Trends
- Dalton, J. (1990). Mind Over Markets
