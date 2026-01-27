# Pip Value Calculation: Currency Mathematics

## I. Introduction

Understanding pip value is fundamental to forex trading. A pip (percentage in point) represents the smallest standard price movement, and its monetary value varies based on position size, currency pair, and account currency.

## II. Basic Definitions

### Definition 2.1 (Pip)
For most currency pairs:
$$1 \text{ pip} = 0.0001$$

For JPY pairs:
$$1 \text{ pip} = 0.01$$

### Definition 2.2 (Pipette/Point)
A pipette is 1/10 of a pip:
$$1 \text{ pipette} = 0.00001 \text{ (or 0.001 for JPY)}$$

### Definition 2.3 (Lot Sizes)
| Lot Type | Units | Symbol |
|----------|-------|--------|
| Standard | 100,000 | 1.0 |
| Mini | 10,000 | 0.1 |
| Micro | 1,000 | 0.01 |
| Nano | 100 | 0.001 |

## III. Pip Value Formulas

### Case 1: Account Currency = Quote Currency
$$PipValue = \frac{OnePip \times LotSize}{1}$$

**Example (EUR/USD, USD account):**
$$PipValue = 0.0001 \times 100,000 = \$10 \text{ per standard lot}$$

### Case 2: Account Currency = Base Currency
$$PipValue = \frac{OnePip \times LotSize}{ExchangeRate}$$

**Example (USD/CHF @ 0.9200, USD account):**
$$PipValue = \frac{0.0001 \times 100,000}{0.9200} = \$10.87$$

### Case 3: Account Currency ≠ Base or Quote
$$PipValue = \frac{OnePip \times LotSize}{QuoteCurrency/AccountCurrency Rate}$$

## IV. General Formula

### Theorem 4.1 (Universal Pip Value Formula)
$$PipValue_{AccountCurrency} = \frac{OnePip \times LotSize \times AccountCurrency/QuoteCurrency Rate}{1}$$

If Quote = Account Currency, the rate = 1.

### Example 4.1 (GBP/JPY, EUR account)
- Position: 1 mini lot (10,000 units)
- GBP/JPY = 165.00
- EUR/JPY = 157.00

$$PipValue = \frac{0.01 \times 10,000}{157.00} = €0.637 \text{ per pip}$$

## V. Quick Reference Tables

### 5.1 Standard Pip Values (USD Account, 1 Standard Lot)
| Pair | Pip Value |
|------|-----------|
| EUR/USD | $10.00 |
| GBP/USD | $10.00 |
| USD/JPY | ~$9.09 (at 110.00) |
| USD/CHF | ~$10.87 (at 0.92) |
| AUD/USD | $10.00 |

### 5.2 Fractional Lot Conversion
$$PipValue_{fractional} = PipValue_{standard} \times LotFraction$$

## VI. Position Size from Pip Value

### Theorem 6.1 (Position Size Formula)
$$LotSize = \frac{RiskAmount}{StopLossPips \times PipValue_{perStandardLot}}$$

### Example 6.1
- Account: $10,000
- Risk: 2% = $200
- Stop Loss: 40 pips
- Pip Value: $10 (EUR/USD)

$$LotSize = \frac{200}{40 \times 10} = 0.5 \text{ standard lots}$$

## VII. Profit/Loss Calculation

### Theorem 7.1 (P/L Formula)
$$P/L = Pips Gained \times PipValue \times LotSize_{in lots}$$

### Example 7.1
- Trade: Buy 0.3 lots EUR/USD
- Entry: 1.1000, Exit: 1.1075
- Pips: 75
- Pip Value: $10 per standard lot

$$P/L = 75 \times 10 \times 0.3 = \$225$$

## VIII. Currency Conversion Effects

### 8.1 Floating Pip Value
For cross pairs, pip value changes as exchange rates fluctuate:
$$\frac{dPipValue}{dRate} \neq 0$$

### 8.2 Hedge Consideration
When pip value currency differs from account currency, P/L is also affected by that exchange rate movement.

## IX. Exercises

**Exercise 1:** Calculate pip value for 0.5 lots USD/CAD at 1.2500 (USD account).

**Exercise 2:** What position size gives exactly $5 per pip on GBP/USD?

**Exercise 3:** Calculate P/L for selling 2 mini lots EUR/GBP from 0.8650 to 0.8590 (GBP account).

**Exercise 4:** Derive the breakeven rate movement to cover a 2 pip spread on 1 lot EUR/USD.

## X. References
- Forex Academy. Currency Value Calculations
- BIS (2019). Triennial Central Bank Survey
