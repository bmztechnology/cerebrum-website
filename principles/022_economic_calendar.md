# Economic Calendar Trading: Fundamental Events

## I. Introduction

Economic data releases and central bank announcements cause significant market volatility. Understanding and trading around these events is essential for comprehensive forex analysis.

## II. Major Economic Indicators

### 2.1 Employment Data
**Non-Farm Payrolls (NFP)** - USA
- Release: First Friday of month
- Impact: USD, global risk sentiment
- Volatility: 50-100+ pips

$$Impact \propto |Actual - Forecast|$$

### 2.2 Inflation Data
**Consumer Price Index (CPI)**
- Core CPI excludes food and energy
- Central bank primary target
- Impact on interest rate expectations

### 2.3 GDP
**Gross Domestic Product**
- Quarterly release
- Measures economic output
- Advance, Preliminary, Final readings

### 2.4 Central Bank Decisions
**FOMC (Fed), ECB, BoE, BoJ**
- Interest rate decisions
- Forward guidance
- Asset purchase programs

## III. Impact Classification

### Table 3.1 (Event Importance)
| Level | Typical Movement | Examples |
|-------|------------------|----------|
| High | 50-150+ pips | NFP, FOMC, CPI |
| Medium | 20-50 pips | Retail Sales, PMI |
| Low | 5-20 pips | Trade Balance, Permits |

### 3.2 Surprise Model
$$Surprise = \frac{Actual - Forecast}{Historical\ Standard\ Deviation}$$

Standardized surprise allows cross-country comparison.

### Theorem 3.1 (Market Reaction)
$$\Delta Price \approx \beta \times Surprise$$

Where β is the currency sensitivity to that indicator.

## IV. Trading Strategies

### 4.1 Pre-Event Positioning
Trade the expectation:
- If consensus expects hawkish → Long before release
- Risk: Wrong expectation = loss

### 4.2 Straddle Strategy
Buy volatility before event:
- Place pending orders both directions
$$Buy Stop = Current + k \times ATR$$
$$Sell Stop = Current - k \times ATR$$

Cancel non-triggered order after breakout.

### 4.3 Fade the Spike
After initial over-reaction:
$$Fade if |Spike| > 2 \times Typical\ Reaction$$

Wait for reversal signal, trade back to mean.

### 4.4 News Trading Avoidance
Risk management approach:
- Close positions before major events
- Reduce leverage
- Widen stops

## V. Economic Calendar Components

### 5.1 Release Schedule
| Time Zone | Major Sources |
|-----------|---------------|
| Tokyo | 0:00-2:00 GMT |
| London | 7:00-10:00 GMT |
| New York | 12:30-16:00 GMT |

### 5.2 Data Providers
- Bloomberg, Reuters
- Forex Factory, Investing.com
- Official government sources

## VI. Central Bank Analysis

### 6.1 Hawkish vs Dovish
**Hawkish:** Concerned about inflation → higher rates → currency appreciation
**Dovish:** Concerned about growth → lower rates → currency depreciation

### 6.2 Dot Plot (Fed)
Individual FOMC member rate projections:
$$Median\ Dot \approx Expected\ Peak\ Rate$$

### 6.3 Forward Guidance
Central bank communication about future policy:
- "Considerable time" → Rates stay low
- "Gradual" → Slow tightening
- "Data dependent" → Uncertain path

## VII. Quantitative Analysis

### 7.1 Event Study Methodology
1. Define event window [-1 day, +1 day]
2. Calculate abnormal returns
3. Test statistical significance

$$AR_t = R_t - E[R_t]$$

### 7.2 Regression Analysis
$$\Delta FX = \alpha + \beta_1 \times Surprise_{NFP} + \beta_2 \times Surprise_{CPI} + \epsilon$$

Estimate currency sensitivity to each indicator.

## VIII. Exercises

**Exercise 1:** NFP forecast 200K, actual 280K, historical σ = 50K. Calculate surprise.

**Exercise 2:** If EUR/USD drops 60 pips on hawkish Fed statement, what happens to USD/JPY likely?

**Exercise 3:** Design a straddle trade setup for upcoming CPI with ATR = 30 pips.

**Exercise 4:** Why might initial spike reverse after major news?

## IX. References
- Andersen, T.G. et al. (2003). Micro Effects of Macro Announcements
- Evans, M.D.D. & Lyons, R.K. (2005). Do Currency Markets Absorb News Quickly?
