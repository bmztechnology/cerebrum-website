# Currency Pairs: Taxonomy of Global Capital

## I. Executive Summary

Forex instruments are categorized into distinct classes based on liquidity, volatility, and geopolitical correlations. Understanding these categories is essential for portfolio construction. A portfolio of EUR/USD, GBP/USD, and AUD/USD provides the illusion of diversification but possesses singular risk (Long USD). Each category requires adjusted risk management parameters (Stop Loss width, Leverage caps).

## II. The Major Pairs (The "G7")

The most liquid pairs, all involving the USD.
1.  **EUR/USD ("Fiber"):** The Titan. 30% of global volume. Lowest spread. Purest reflection of Global Risk On/Off.
2.  **USD/JPY ("Ninja"):** The Safe Haven proxy. Highly sensitive to US Treasury Yields.
3.  **GBP/USD ("Cable"):** Volatile, quirky. The "Gentleman's Gamble."
4.  **USD/CHF ("Swissy"):** Often inversely correlated to EUR/USD. Safe Haven.
5.  **AUD/USD ("Aussie"), USD/CAD ("Loonie"), NZD/USD ("Kiwi"):** The Commodity Block ("Comdolls").

*Characteristics:* Low Spreads ($\approx 1$ pip), High Stability, Mean Reverting intraday.

## III. The Minor Pairs (The Crosses)

Major currencies traded against each other *without* the USD.
Examples: **EUR/GBP, EUR/JPY, GBP/JPY ("The Beast"), AUD/JPY.**
-   **Calculation:** Synthetic derivation. $EURJPY = EURUSD \times USDJPY$.
-   **Characteristics:** Clearer trends. If USD is choppy, Crosses often trend.
-   **Volatility:** GBP/JPY can move 200 pips when GBP/USD moves 80.

## IV. The Exotic Pairs

Developing or Emerging Market currencies against Majors.
Examples: **USD/TRY (Turkey), USD/ZAR (South Africa), USD/MXN (Mexico).**
-   **Characteristics:**
    -   Extreme Spreads (50-100 pips).
    -   Swap-dominated (Carry Trade).
    -   Political Risk (Coups, Hyperinflation).
    -   **Fat Tails:** Prone to 10-20% gap moves overnight.

## V. Strategic Portfolio Construction

### 5.1 Correlation Matrix
Traders must ensure their exposure is not concentrated.
If $Corr(A, B) > 0.8$:
-   Risk must be halved on both.
-   Or trade only the one with the better technical setup.

### 5.2 Volatility Normalization
When trading Exotics, leverage must be reduced drastically.
-   Trade 1.0 Lot on EUR/USD.
-   Trade 0.1 Lot on USD/MXN.
(To equalize Dollar Risk per Daily ATR).

## VI. Exercises

**Exercise 1 (Synthetic Calculation):**
EUR/USD = 1.1000.
GBP/USD = 1.3000.
Calculate the implied EUR/GBP cross rate.
$$EUR/GBP = \frac{EUR/USD}{GBP/USD}$$

**Exercise 2 (Diversification):**
You are Long EUR/USD, Long AUD/USD, and Short USD/CAD.
Are you diversified?
(Hint: Analyze the USD delta of each position. You are effectively Short USD x3).

**Exercise 3 (Liquidity):**
Why does the spread on GBP/NZD widen massively at 21:00 GMT?
(Hint: Look at the trading sessions of London and Wellington).

## VII. References
-   Bank for International Settlements (BIS). *Triennial Survey of FX Turnover*.
-   Melvin, M. (2006). *International Money and Finance*.
