# Volume Analysis: Market Conviction Theory

## I. Introduction

Volume represents the number of contracts or lots traded in a given period. It measures market participation and conviction behind price movements, providing crucial confirmation for technical analysis.

## II. Basic Volume Concepts

### Definition 2.1 (Volume)
$$V_t = \sum_{trades \in period(t)} Quantity_i$$

### Definition 2.2 (Tick Volume in Forex)
In forex (decentralized), tick volume approximates true volume:
$$TickVolume_t = Count(PriceChanges_t)$$

Studies show ~90% correlation with actual interbank volume.

### Definition 2.3 (Dollar Volume)
$$DollarVolume = V_t \times P_t$$

Represents total value traded.

## III. Volume-Price Relationships

### 3.1 Classic Interpretation
| Price | Volume | Interpretation |
|-------|--------|----------------|
| ↑ | ↑ | Strong uptrend (confirmed) |
| ↑ | ↓ | Weak uptrend (distribution) |
| ↓ | ↑ | Strong downtrend (confirmed) |
| ↓ | ↓ | Weak downtrend (lack of sellers) |

### Theorem 3.1 (Volume Precedes Price)
$$\frac{d^2V}{dt^2} < 0 \Rightarrow P \text{ near reversal}$$

Volume often peaks before price extremes.

### 3.2 Breakout Confirmation
$$ValidBreakout \iff V_{breakout} > k \times \bar{V}$$

Typically k ≥ 1.5 (50% above average).

## IV. Volume Indicators

### Definition 4.1 (On-Balance Volume - OBV)
$$OBV_t = OBV_{t-1} + \begin{cases}
V_t & \text{if } C_t > C_{t-1} \\
-V_t & \text{if } C_t < C_{t-1} \\
0 & \text{if } C_t = C_{t-1}
\end{cases}$$

OBV is a cumulative indicator reflecting money flow direction.

### Definition 4.2 (Volume Weighted Average Price - VWAP)
$$VWAP = \frac{\sum_{i=1}^{n} P_i \times V_i}{\sum_{i=1}^{n} V_i}$$

VWAP acts as institutional benchmark.

### Definition 4.3 (Accumulation/Distribution Line)
$$CLV = \frac{(C - L) - (H - C)}{H - L}$$
$$AD_t = AD_{t-1} + CLV_t \times V_t$$

### Definition 4.4 (Money Flow Index - MFI)
$$TypicalPrice = \frac{H + L + C}{3}$$
$$RawMoneyFlow = TP \times V$$
$$MoneyFlowRatio = \frac{\sum PositiveFlow_n}{\sum NegativeFlow_n}$$
$$MFI = 100 - \frac{100}{1 + MFR}$$

MFI is "RSI with volume weighting."

### Definition 4.5 (Chaikin Money Flow - CMF)
$$CMF_n = \frac{\sum_{i=1}^{n} CLV_i \times V_i}{\sum_{i=1}^{n} V_i}$$

## V. Volume Profile Analysis

### Definition 5.1 (Volume Profile)
Distribution of volume by price level:
$$VP(P) = \sum_{t: P_t \in [P-\delta, P+\delta]} V_t$$

### Definition 5.2 (Point of Control - POC)
$$POC = \arg\max_P VP(P)$$

Price level with highest volume concentration.

### Definition 5.3 (Value Area)
Range containing 70% of volume:
$$VA = [VAL, VAH] : \int_{VAL}^{VAH} VP(P) dP = 0.7 \int VP(P) dP$$

### 5.4 Trading Implications
- **High Volume Node (HVN):** Acts as S/R, price tends to consolidate
- **Low Volume Node (LVN):** Price moves quickly through, weak S/R
- **POC:** Strongest S/R level of the range

## VI. Volume Patterns

### 6.1 Climax Volume
Extreme volume at price extreme:
$$V_t > \mu_V + 3\sigma_V$$

Often signals exhaustion and potential reversal.

### 6.2 Dry-Up Volume
Volume contraction during pullback:
$$V_{pullback} << V_{trend}$$

Healthy correction with intact trend.

### 6.3 Volume Divergence
Price makes new high/low but volume doesn't confirm:
$$P_2 > P_1 \land V_2 < V_1$$

Warning of weakening trend.

## VII. Statistical Analysis

### 7.1 Volume Normalization
$$NormalizedV_t = \frac{V_t - \bar{V}}{\sigma_V}$$

Allows comparison across different periods/assets.

### 7.2 Relative Volume
$$RVOL = \frac{V_t}{\bar{V}_{same\_time\_period}}$$

Compares to typical volume for that time of day/week.

## VIII. Exercises

**Exercise 1:** Calculate OBV for the sequence:
C = [100, 102, 101, 103, 102]
V = [1000, 1200, 800, 1500, 900]

**Exercise 2:** Compute VWAP for P = [100, 101, 102], V = [1000, 2000, 1500].

**Exercise 3:** Explain why volume typically decreases during consolidation.

**Exercise 4:** Design a volume-based entry filter requiring 50% above average volume.

## IX. References
- Granville, J. (1963). New Key to Stock Market Profits
- Blau, W. (1995). Volume-Weighted RSI
- Dalton, J. (1990). Mind Over Markets
