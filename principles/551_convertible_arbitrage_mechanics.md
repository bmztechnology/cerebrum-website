# Convertible Arbitrage Mechanics: Cheap Vol

## I. Executive Summary

**Convertible Arbitrage** involves buying a Convertible Bond (CB) and shorting the underlying Stock. The CB is a hybrid: **Bond + Call Option**. The arbitrageur strips the components: they hold the Bond (Credit/Yield) and the Call (Volatility), while hedging the Equity Delta by shorting stock. Creating a "Delta Neutral" position allows the arb to profit from **Cheap Volatility** (if the option is underpriced) or **Gamma Trading**.

## II. Formal Definitions

### Definition 2.1 (The Hedge Ratio)
Delta $\Delta$.
Buy \$1M Face Value CB (Conversion Ratio 10 shares).
If Delta is 0.5 (At the money), Effective exposure = 5 shares.
Short 5 shares.
Net Equity Exposure = 0.

### Definition 2.2 (Gamma Trading)
Stock Rises $\implies$ Delta rises (0.5 to 0.6).
Arb is now "Long" (Position became longer).
To re-hedge: Sell more stock (at high price).
Stock Falls $\implies$ Delta falls (0.5 to 0.4).
Arb is "Short".
To re-hedge: Buy back stock (at low price).
"Buy Low, Sell High" systematically.
Scalping Gamma.

## III. Theoretical Framework

### 3.1 Credit Spread
Arb is Long Bond. Exposed to Issuer Credit.
If Credit Spreads widen $\implies$ CB Price falls.
Hedge: Buy CDS?
Or rely on "Correlation Hedge" (Stock falls when Credit widens, short stock profits).
2008 Crisis: Short bans made stock hedging impossible. CB Arb funds collapsed.

### 3.2 Underpricing
Why are CBs cheap?
Issuers accept lower coupon to sell vol cheaply.
Investors (Long Only) don't value the vol correctly.
Hedge Funds provide the liquidity to bridge the gap.

## IV. Strategic Applications

### 4.1 Death Spiral
Distressed issuer.
Arb buys CB, shorts stock.
Short pressure drives stock down.
Credit worsens. Arb shorts more stock.
Feedback loop drives company to zero.
"Toxic Convertibles."

### 4.2 Volatility Surface
Stocks don't have long-dated listed options (5 years).
CB implies a 5-year option.
Only way to trade long-dated single name vol.

## V. Exercises

**Exercise 1 (Rate Sensitivity):**
Rho.
Long Bond $\implies$ Rates Up, Price Down.
Long Call $\implies$ Rates Up, Price Up.
Partial offset.
Usually duration is low (short dated CBs).

**Exercise 2 (Dividend Protection):**
Does the CB adjust conversion ratio for dividends?
If no, Short Stock pays dividend (Arb loses).
Must deduct PV(Divs) from valuation.

## VI. References
-   Calamos, N. *Convertible Arbitrage*.
-   Hutchinson, M. *Convertible Bonds*.
