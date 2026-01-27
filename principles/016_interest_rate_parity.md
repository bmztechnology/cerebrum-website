# Interest Rate Parity: Fundamental Forex Theory

## I. Introduction

Interest Rate Parity (IRP) is a fundamental concept linking currency exchange rates to interest rate differentials between countries. It forms the theoretical foundation for forward pricing and carry trade analysis.

## II. Covered Interest Rate Parity (CIRP)

### Definition 2.1 (Forward Premium/Discount)
$$ForwardPremium = \frac{F - S}{S}$$

Where F = Forward rate, S = Spot rate.

### Theorem 2.1 (Covered Interest Rate Parity)
$$\frac{F}{S} = \frac{1 + r_d}{1 + r_f}$$

Where:
- r_d = Domestic interest rate
- r_f = Foreign interest rate

### Proof (No-Arbitrage Argument)
Consider two investment strategies:
1. Invest domestically at r_d
2. Convert to foreign, invest at r_f, hedge back via forward

No-arbitrage requires equal returns:
$$1 + r_d = S \cdot (1 + r_f) \cdot \frac{1}{F}$$

Solving: F/S = (1 + r_d)/(1 + r_f) ∎

### Corollary 2.1 (Forward Points Formula)
$$F - S = S \cdot \frac{r_d - r_f}{1 + r_f} \approx S(r_d - r_f)$$

For small rates.

## III. Uncovered Interest Rate Parity (UIRP)

### Definition 3.1 (Expected Spot Rate)
$$E[S_{t+1}] = S_t \cdot \frac{1 + r_d}{1 + r_f}$$

### Theorem 3.1 (UIRP)
Under risk neutrality:
$$E[\Delta S] = r_d - r_f$$

Expected currency depreciation equals interest rate differential.

### 3.2 Empirical Violations
UIRP often fails empirically due to:
1. Risk premiums
2. Market inefficiencies
3. Liquidity preferences
4. Central bank intervention

## IV. Carry Trade Analysis

### Definition 4.1 (Carry Trade)
Borrow in low-interest currency, invest in high-interest currency:
$$CarryReturn = r_{high} - r_{low} - Exchange\_Rate\_Change$$

### Theorem 4.1 (Carry Trade Profitability)
If UIRP holds exactly, carry trade returns are zero:
$$E[CarryReturn] = (r_{high} - r_{low}) - E[\Delta S] = 0$$

### 4.2 Forward Rate Bias Puzzle
Empirically:
$$E[\Delta S] < r_d - r_f$$

High-yield currencies depreciate less than predicted, making carry trades profitable on average.

### 4.3 Risk Considerations
Carry trade risk:
$$\sigma_{CarryReturn} = \sigma_{FX} >> r_{high} - r_{low}$$

FX volatility dominates interest differential.

## V. Interest Rate Differential Trading

### 5.1 Central Bank Policy Impact
Higher rates → Capital inflow → Currency appreciation

$$\Delta S \propto -\Delta(r_d - r_f)$$ (simplified)

### 5.2 Expectations Theory
Currency moves reflect expected future rate changes:
$$S = f(E[r_{t+1}], E[r_{t+2}], ...)$$

### 5.3 Swap Points Calculation
Daily swap rate:
$$Swap = \frac{(r_{base} - r_{quote}) \times Notional}{365 \times 100}$$

## VI. Practical Applications

### 6.1 Identifying Carry Pairs
| Pair | Rate Differential | Carry Direction |
|------|-------------------|-----------------|
| AUD/JPY | High (AUD) - Low (JPY) | Long |
| NZD/CHF | High (NZD) - Low (CHF) | Long |
| USD/JPY | Moderate (USD) - Low (JPY) | Long |

### 6.2 Swap Trading Strategy
Hold positions earning positive swaps:
$$Daily Swap Profit = SwapPoints \times LotSize$$

### 6.3 Central Bank Calendar Trading
Trade around rate decisions:
1. Hawkish surprise → Long that currency
2. Dovish surprise → Short that currency

## VII. Mathematical Models

### 7.1 Real Interest Rate Parity
$$r_{real,d} - r_{real,f} = E[\Delta S_{real}]$$

Where real rate = nominal rate - expected inflation.

### 7.2 Taylor Rule for Central Banks
$$r = r^* + \pi + 0.5(\pi - \pi^*) + 0.5(Y - Y^*)$$

Predicting central bank actions via economic variables.

## VIII. Exercises

**Exercise 1:** If USD rate is 5%, EUR rate is 2%, and spot EUR/USD is 1.1000, calculate the 1-year forward.

**Exercise 2:** An AUD/JPY carry trade yields 3% interest differential. If AUD depreciates 5%, what is the total return?

**Exercise 3:** Prove that under CIRP, the forward rate is an unbiased predictor of future spot rate.

**Exercise 4:** Calculate daily swap for 1 lot EUR/USD if rates are EUR 3%, USD 5%.

## IX. References
- Bekaert, G. & Hodrick, R. (2009). International Financial Management
- Burnside, C. et al. (2011). Carry Trade and Momentum
- Fama, E. (1984). Forward and Spot Exchange Rates
