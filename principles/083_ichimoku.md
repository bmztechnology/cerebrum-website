# Ichimoku Kinko Hyo: Complete Trading System

## I. Introduction

Ichimoku Kinko Hyo ("one glance equilibrium chart") was developed by Japanese journalist Goichi Hosoda in the 1930s after 30 years of research. It provides a complete trading system with trend, momentum, and support/resistance in a single view.

## II. Component Definitions

### Definition 2.1 (Tenkan-sen - Conversion Line)
$$Tenkan = \frac{HH_9 + LL_9}{2}$$

Where HH_9 = Highest High over 9 periods, LL_9 = Lowest Low over 9 periods.

### Definition 2.2 (Kijun-sen - Base Line)
$$Kijun = \frac{HH_{26} + LL_{26}}{2}$$

### Definition 2.3 (Senkou Span A - Leading Span A)
$$SpanA = \frac{Tenkan + Kijun}{2} \text{ plotted 26 periods ahead}$$

### Definition 2.4 (Senkou Span B - Leading Span B)
$$SpanB = \frac{HH_{52} + LL_{52}}{2} \text{ plotted 26 periods ahead}$$

### Definition 2.5 (Kumo - Cloud)
The area between Span A and Span B:
$$Kumo = \{P : \min(SpanA, SpanB) \leq P \leq \max(SpanA, SpanB)\}$$

### Definition 2.6 (Chikou Span - Lagging Span)
$$Chikou = Close \text{ plotted 26 periods behind}$$

## III. Mathematical Properties

### Theorem 3.1 (Mid-Point Theory)
All Ichimoku lines are midpoints of ranges, not averages:
$$Line = \frac{Max + Min}{2} \neq \frac{\sum P_i}{n}$$

This makes them equilibrium levels rathen than trend-following indicators.

### Proposition 3.2 (Standard Parameters)
Hosoda's original parameters (9, 26, 52) correspond to:
- 9: 1.5 weeks (Japanese trading weeks had 6 days)
- 26: 1 month
- 52: 2 months

Modern adjustments: (7, 22, 44) for 5-day weeks, (10, 30, 60) alternative.

### Theorem 3.3 (Cloud Thickness)
$$CloudThickness = |SpanA - SpanB| \propto Volatility$$

Thick cloud = Strong S/R zone
Thin cloud = Weak S/R, potential breakout point

## IV. Trading Signals

### 4.1 Tenkan/Kijun Cross
**Bullish (Golden Cross):**
$$Tenkan_{t-1} < Kijun_{t-1} \land Tenkan_t > Kijun_t$$

**Bearish (Dead Cross):**
$$Tenkan_{t-1} > Kijun_{t-1} \land Tenkan_t < Kijun_t$$

**Signal Strength:**
| Cross Location | Strength |
|----------------|----------|
| Above cloud | Strong bullish |
| Inside cloud | Neutral |
| Below cloud | Weak bullish |

### 4.2 Price-Cloud Relationship
$$Trend = \begin{cases}
Bullish & P > \max(SpanA, SpanB) \\
Neutral & \min(SpanA, SpanB) < P < \max(SpanA, SpanB) \\
Bearish & P < \min(SpanA, SpanB)
\end{cases}$$

### 4.3 Chikou Span Confirmation
**Bullish confirmation:** Chikou > Price_{26 periods ago}
**Bearish confirmation:** Chikou < Price_{26 periods ago}

### 4.4 Kumo Twist
When Span A crosses Span B (future cloud twist):
$$SpanA_t > SpanB_t \land SpanA_{t-1} < SpanB_{t-1}$$

Indicates potential trend change 26 periods ahead.

## V. Complete Signal Checklist

### 5.1 Strong Bullish Signal (Score 5/5)
1. Price above cloud ✓
2. Tenkan above Kijun ✓
3. Chikou above price ✓
4. Future cloud is bullish (Span A > Span B) ✓
5. Price above Tenkan and Kijun ✓

### 5.2 Signal Quality Formula
$$SignalStrength = \sum_{i=1}^{5} s_i \in [0, 5]$$

Where s_i ∈ {0, 1} for each condition.

## VI. Strategic Applications

### 6.1 Entry Strategy
Enter long when:
$$P > Cloud \land TK_{cross\_bullish} \land Chikou_{confirmed}$$

### 6.2 Exit Strategy
Exit when:
- Price re-enters cloud
- Opposite TK cross
- Chikou breaks below price

### 6.3 Stop Loss Placement
Options:
1. Below Kijun-sen
2. Below opposite side of cloud
3. Below Tenkan-sen (tight)

## VII. Advanced Concepts

### 7.1 Wave Theory Integration
Hosoda identified price movements in waves:
- I, V, N, P, Y wave patterns
- Time theory: specific periods (9, 17, 26, 33, 42, 65, 76, 129)

### 7.2 Price Theory
Key calculation levels:
$$Target = High + \frac{High - Low}{2}$$ (N calculation)

### 7.3 Multiple Timeframe Analysis
Confirm signals across timeframes:
$$Confluence = \sum_{TF} Signal_{TF}$$

## VIII. Exercises

**Exercise 1:** Calculate Tenkan for HH=1.1200, LL=1.1100 over 9 periods.

**Exercise 2:** If Span A = 1.1150 and Span B = 1.1100, describe the cloud and its implications.

**Exercise 3:** Score a signal where: Price above cloud, Tenkan below Kijun, Chikou above price.

**Exercise 4:** Why might parameters need adjustment for different markets or timeframes?

## IX. References
- Hosoda, G. (1969). Ichimoku Kinko Hyo Studies
- Elliott, N. (2007). Ichimoku Charts
- Patel, M. (2010). Trading with Ichimoku Clouds
