# Leverage and Margin: Capital Efficiency

## I. Introduction

Leverage allows traders to control large positions with relatively small capital. While it amplifies potential returns, it equally amplifies risk, making proper understanding critical.

## II. Basic Definitions

### Definition 2.1 (Leverage)
$$Leverage = \frac{Position Value}{Margin Required}$$

Example: 100:1 leverage means $100,000 position with $1,000 margin.

### Definition 2.2 (Margin)
$$Margin = \frac{Position Value}{Leverage}$$

### Definition 2.3 (Margin Requirement)
$$MarginRequired = \frac{1}{Leverage} \times 100\%$$

| Leverage | Margin Required |
|----------|-----------------|
| 10:1 | 10% |
| 50:1 | 2% |
| 100:1 | 1% |
| 500:1 | 0.2% |

## III. Margin Calculations

### Definition 3.1 (Used Margin)
$$UsedMargin = \sum_{positions} \frac{PositionValue_i}{Leverage_i}$$

### Definition 3.2 (Free Margin)
$$FreeMargin = Equity - UsedMargin$$

### Definition 3.3 (Margin Level)
$$MarginLevel = \frac{Equity}{UsedMargin} \times 100\%$$

### 3.4 Margin Call & Stop Out
| Level | Event |
|-------|-------|
| 100% | Margin Call (warning) |
| 50-80% | Stop Out (forced closure) |

## IV. Leverage Effects

### Theorem 4.1 (Return Amplification)
$$Return_{leveraged} = Leverage \times Return_{unleveraged}$$

**Proof:**
Invest M with leverage L, position value = ML
If price moves by r: Profit = ML × r
Return = Profit/M = L × r ∎

### Theorem 4.2 (Risk Amplification)
$$\sigma_{leveraged} = Leverage \times \sigma_{unleveraged}$$

Risk scales equally with leverage.

### 4.3 Ruin Probability
$$P(Ruin) \uparrow \text{ as } Leverage \uparrow$$

Higher leverage → faster account depletion.

## V. Effective Leverage

### Definition 5.1 (Effective Leverage)
$$EffectiveLeverage = \frac{TotalExposure}{AccountEquity}$$

This is the actual risk amplification regardless of offered leverage.

### 5.2 Professional Guidelines
| Trader Type | Recommended Effective Leverage |
|-------------|-------------------------------|
| Conservative | < 2:1 |
| Moderate | 2-5:1 |
| Aggressive | 5-10:1 |
| Maximum | < 20:1 |

## VI. Comparative Analysis

### 6.1 Leverage vs Position Size
Two equivalent scenarios:
- 100:1 leverage, 1% of capacity = 1:1 effective
- 10:1 leverage, 10% of capacity = 1:1 effective

Effective leverage matters, not broker leverage.

### 6.2 Overnight Financing
Leveraged positions incur financing costs:
$$DailyCost = PositionValue \times \frac{InterestRate}{365}$$

## VII. Example Calculations

### Example 7.1
- Account: $10,000
- Position: 1 lot EUR/USD ($100,000)
- Broker leverage: 100:1

$$UsedMargin = \frac{100,000}{100} = \$1,000$$
$$EffectiveLeverage = \frac{100,000}{10,000} = 10:1$$
$$FreeMargin = 10,000 - 1,000 = \$9,000$$

### Example 7.2 (Margin Level)
If position moves -$2,000:
$$Equity = 10,000 - 2,000 = \$8,000$$
$$MarginLevel = \frac{8,000}{1,000} \times 100 = 800\%$$

## VIII. Exercises

**Exercise 1:** Calculate margin required for 2 lots USD/JPY at 50:1 leverage.

**Exercise 2:** Account $5,000, position $250,000, calculate effective leverage.

**Exercise 3:** At what loss does margin level hit 100% if Equity=$10,000, UsedMargin=$2,000?

**Exercise 4:** Prove that higher leverage doesn't change break-even price but changes dollar P/L.

## IX. References
- CME Group. Margin Handbook
- NFA. Forex Risk Disclosure
