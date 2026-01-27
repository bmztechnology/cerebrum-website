# Money Flow: Order Flow Analysis

## I. Introduction

Money Flow indicators attempt to measure buying and selling pressure by incorporating both price and volume. They help identify accumulation (buying) and distribution (selling) phases.

## II. Money Flow Index (MFI)

### Definition 2.1 (Typical Price)
$$TP = \frac{H + L + C}{3}$$

### Definition 2.2 (Raw Money Flow)
$$RMF = TP \times Volume$$

### Definition 2.3 (Money Flow Direction)
$$MF_{positive} = \sum_{i: TP_i > TP_{i-1}} RMF_i$$
$$MF_{negative} = \sum_{i: TP_i < TP_{i-1}} RMF_i$$

### Definition 2.4 (Money Flow Ratio)
$$MFR = \frac{MF_{positive}}{MF_{negative}}$$

### Definition 2.5 (Money Flow Index)
$$MFI = 100 - \frac{100}{1 + MFR}$$

### Theorem 2.1 (MFI Bounds)
$$0 \leq MFI \leq 100$$

MFI is bounded like RSI.

## III. Chaikin Money Flow (CMF)

### Definition 3.1 (Close Location Value)
$$CLV = \frac{(C - L) - (H - C)}{H - L} = \frac{2C - H - L}{H - L}$$

### Theorem 3.1 (CLV Bounds)
$$-1 \leq CLV \leq 1$$

- CLV = +1: Close at High
- CLV = -1: Close at Low
- CLV = 0: Close at midpoint

### Definition 3.2 (Chaikin Money Flow)
$$CMF_n = \frac{\sum_{i=1}^{n} CLV_i \times V_i}{\sum_{i=1}^{n} V_i}$$

### 3.3 Interpretation
| CMF Value | Signal |
|-----------|--------|
| > 0 | Buying pressure (accumulation) |
| < 0 | Selling pressure (distribution) |

## IV. Accumulation/Distribution

### Definition 4.1 (A/D Line)
$$AD_t = AD_{t-1} + CLV_t \times V_t$$

Cumulative sum of money flow.

### 4.2 Trading Signals
**Bullish:** A/D rising while price falling (accumulation divergence)
**Bearish:** A/D falling while price rising (distribution divergence)

## V. Exercises

**Exercise 1:** Calculate CLV for H=102, L=98, C=101.

**Exercise 2:** If positive MF = $5M, negative MF = $2M over 14 periods, calculate MFI.

**Exercise 3:** Why is volume important in money flow calculations?

## VI. References
- Chaikin, M. (1994). Quantitative Approach to Stock Selection
- Arms, R. (1996). Volume Cycles in the Stock Market
