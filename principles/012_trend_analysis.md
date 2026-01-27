# Trend Analysis: Mathematical Trend Identification

## I. Definition of Trend

A trend represents the general direction of price movement over time. Identifying trends is fundamental to profitable trading as it allows traders to align with market momentum.

## II. Formal Trend Definitions

### Definition 2.1 (Uptrend - Dow Theory)
An uptrend exists when:
$$H_i > H_{i-1} \land L_i > L_{i-1}$$

Higher highs AND higher lows.

### Definition 2.2 (Downtrend - Dow Theory)
A downtrend exists when:
$$H_i < H_{i-1} \land L_i < L_{i-1}$$

Lower highs AND lower lows.

### Definition 2.3 (Sideways/Range)
$$|H_{max} - H_{min}| < \epsilon \land |L_{max} - L_{min}| < \epsilon$$

Price contained within horizontal bounds.

## III. Trend Measurement Methods

### 3.1 Linear Regression

**Trend Line:**
$$\hat{P}_t = \beta_0 + \beta_1 t$$

Where:
$$\beta_1 = \frac{\sum(t_i - \bar{t})(P_i - \bar{P})}{\sum(t_i - \bar{t})^2}$$

$$\beta_0 = \bar{P} - \beta_1 \bar{t}$$

**Interpretation:**
- β₁ > 0 → Uptrend
- β₁ < 0 → Downtrend
- β₁ ≈ 0 → Sideways

### 3.2 Moving Average Slope

**Trend Direction:**
$$Trend = sign\left(\frac{dMA_n}{dt}\right) \approx sign(MA_n(t) - MA_n(t-k))$$

### 3.3 Higher Timeframe Confirmation

$$TrendStrength = \sum_{TF} w_{TF} \times Trend_{TF}$$

Where TF ∈ {1H, 4H, Daily, Weekly}.

## IV. Average Directional Index (ADX)

### Definition 4.1 (Directional Movement)
$$+DM = H_t - H_{t-1} \text{ if } H_t - H_{t-1} > L_{t-1} - L_t \text{ else } 0$$
$$-DM = L_{t-1} - L_t \text{ if } L_{t-1} - L_t > H_t - H_{t-1} \text{ else } 0$$

### Definition 4.2 (Directional Indicators)
$$+DI = 100 \times \frac{EMA_n(+DM)}{ATR_n}$$
$$-DI = 100 \times \frac{EMA_n(-DM)}{ATR_n}$$

### Definition 4.3 (ADX)
$$DX = 100 \times \frac{|+DI - -DI|}{+DI + -DI}$$
$$ADX = EMA_n(DX)$$

### Interpretation
| ADX Value | Trend Strength |
|-----------|----------------|
| 0-20 | Weak/No trend |
| 20-40 | Moderate trend |
| 40-60 | Strong trend |
| 60-100 | Very strong trend |

## V. Trend Line Construction

### 5.1 Uptrend Line
Connect two or more swing lows:
$$TrendLine(t) = L_1 + \frac{L_2 - L_1}{t_2 - t_1}(t - t_1)$$

### 5.2 Downtrend Line
Connect two or more swing highs:
$$TrendLine(t) = H_1 + \frac{H_2 - H_1}{t_2 - t_1}(t - t_1)$$

### 5.3 Validity Criteria
- Minimum 2 touches (3+ preferred)
- Angle between 20° and 60°
- No penetrations (or brief penetrations only)

## VI. Trend Channels

### Definition 6.1 (Trend Channel)
Parallel lines containing price action:
$$Upper = TrendLine + k$$
$$Lower = TrendLine - k$$

Where k is the average distance to the primary trend line.

### 6.2 Channel Trading
- Buy at lower channel boundary in uptrend
- Sell at upper channel boundary in downtrend
- Breakout signals potential trend acceleration

## VII. Mathematical Trend Filters

### 7.1 Price vs Moving Average
$$TrendFilter = sign(P_t - MA_n(t))$$

### 7.2 Moving Average Cross
$$TrendFilter = sign(MA_{fast}(t) - MA_{slow}(t))$$

### 7.3 Donchian Channel
$$Upper_n = \max_{i=0}^{n-1}(H_{t-i})$$
$$Lower_n = \min_{i=0}^{n-1}(L_{t-i})$$

Breakout above Upper → Uptrend initiation
Breakout below Lower → Downtrend initiation

## VIII. Trend Reversals

### 8.1 Reversal Signals
1. Break of trend line
2. Lower high in uptrend / Higher low in downtrend
3. Moving average cross
4. Divergence on momentum indicators

### 8.2 Trend Exhaustion Model
$$Exhaustion = f(ADX_{declining}, Divergence, Volume_{declining})$$

## IX. Exercises

**Exercise 1:** Calculate the slope of linear regression for prices [100, 102, 101, 104, 106].

**Exercise 2:** Given +DI=25, -DI=15, calculate DX.

**Exercise 3:** Draw trend lines for swing lows at (1, 100), (5, 102), (10, 105).

**Exercise 4:** Prove that in a perfect uptrend with constant slope, ADX approaches 100.

## X. References
- Edwards, R.D. & Magee, J. (1948). Technical Analysis of Stock Trends
- Wilder, J.W. (1978). New Concepts in Technical Trading Systems
- Murphy, J.J. (1999). Technical Analysis of the Financial Markets
