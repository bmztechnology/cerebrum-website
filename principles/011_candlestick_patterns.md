# Candlestick Patterns: Statistical Pattern Recognition

## I. Historical Background

Japanese candlestick charting originated in 18th century Japan, developed by rice trader Munehisa Homma. Steve Nison introduced this methodology to the Western world in 1991.

## II. Candlestick Anatomy

### Definition 2.1 (Candlestick Components)
A candlestick consists of:
- **Body:** |Open - Close|
- **Upper Shadow:** High - max(Open, Close)
- **Lower Shadow:** min(Open, Close) - Low

### Definition 2.2 (Body Types)
- **Bullish (White/Green):** Close > Open
- **Bearish (Black/Red):** Close < Open
- **Doji:** |Close - Open| < ε (typically < 0.1% of range)

## III. Single Candlestick Patterns

### 3.1 Doji Patterns

**Definition (Standard Doji):**
$$Doji: |C - O| < 0.1 \times (H - L)$$

**Types:**
| Doji Type | Upper Shadow | Lower Shadow | Signal |
|-----------|--------------|--------------|--------|
| Standard | Equal | Equal | Indecision |
| Dragonfly | None | Long | Bullish reversal |
| Gravestone | Long | None | Bearish reversal |
| Long-legged | Long | Long | High volatility |

### 3.2 Hammer and Hanging Man

**Definition (Hammer/Hanging Man):**
$$LowerShadow \geq 2 \times |Body|$$
$$UpperShadow \approx 0$$

- **Hammer:** Appears after downtrend → Bullish reversal
- **Hanging Man:** Appears after uptrend → Bearish reversal

### 3.3 Marubozu

**Definition:**
$$Marubozu: UpperShadow = LowerShadow = 0$$

Full control by bulls (bullish) or bears (bearish).

## IV. Double Candlestick Patterns

### 4.1 Engulfing Patterns

**Bullish Engulfing:**
$$Body_2 > 0 \land Body_1 < 0 \land O_2 < C_1 \land C_2 > O_1$$

**Bearish Engulfing:**
$$Body_2 < 0 \land Body_1 > 0 \land O_2 > C_1 \land C_2 < O_1$$

### 4.2 Harami

**Definition (Harami = "Pregnant"):**
The second candle's body is contained within the first candle's body:
$$\min(O_1, C_1) < \min(O_2, C_2) < \max(O_2, C_2) < \max(O_1, C_1)$$

### 4.3 Piercing Line / Dark Cloud Cover

**Piercing Line (Bullish):**
$$O_2 < L_1 \land C_2 > (O_1 + C_1)/2 \land C_2 < O_1$$

**Dark Cloud Cover (Bearish):**
$$O_2 > H_1 \land C_2 < (O_1 + C_1)/2 \land C_2 > O_1$$

## V. Triple Candlestick Patterns

### 5.1 Morning Star / Evening Star

**Morning Star (Bullish):**
1. Long bearish candle
2. Small body (gap down)
3. Long bullish candle closing into first candle

**Evening Star (Bearish):**
1. Long bullish candle
2. Small body (gap up)
3. Long bearish candle closing into first candle

### 5.2 Three White Soldiers / Three Black Crows

**Three White Soldiers:**
$$\forall i \in \{1,2,3\}: C_i > O_i \land C_i > C_{i-1} \land O_i > O_{i-1}$$

**Three Black Crows:**
$$\forall i \in \{1,2,3\}: C_i < O_i \land C_i < C_{i-1} \land O_i < O_{i-1}$$

## VI. Statistical Analysis

### 6.1 Pattern Success Rates (Bulkowski Research)
| Pattern | Bullish | Bearish | Success Rate |
|---------|---------|---------|--------------|
| Engulfing | 63% | 79% | High |
| Hammer | 60% | - | Moderate |
| Morning Star | 78% | - | High |
| Doji | 51% | 51% | Low |

### 6.2 Significance Factors
Pattern reliability increases with:
1. Higher timeframes
2. Volume confirmation
3. Location at S/R levels
4. Trend context

## VII. Quantitative Pattern Detection

### Algorithm 7.1 (Hammer Detection)
```
function isHammer(O, H, L, C):
    body = |C - O|
    lower_shadow = min(O, C) - L
    upper_shadow = H - max(O, C)
    range = H - L
    
    return (lower_shadow >= 2 * body) AND 
           (upper_shadow < 0.1 * range) AND
           (body > 0.1 * range)
```

### Algorithm 7.2 (Engulfing Detection)
```
function isBullishEngulfing(candle1, candle2):
    return (candle1.C < candle1.O) AND       // bearish first
           (candle2.C > candle2.O) AND       // bullish second
           (candle2.O < candle1.C) AND       // opens below close
           (candle2.C > candle1.O)           // closes above open
```

## VIII. Exercises

**Exercise 1:** Classify the following candle: O=100, H=102, L=95, C=101.

**Exercise 2:** Write pseudocode to detect an Evening Star pattern.

**Exercise 3:** Given 500 historical engulfing patterns with 62% success rate, is this statistically significant at α=0.05?

**Exercise 4:** Calculate the expected value of trading every hammer at S/R with 60% success and 2:1 R:R.

## IX. References
- Nison, S. (1991). Japanese Candlestick Charting Techniques
- Bulkowski, T. (2008). Encyclopedia of Candlestick Charts
- Morris, G. (2006). Candlestick Charting Explained
