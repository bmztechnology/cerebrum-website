# Currency Strength Analysis: Relative Valuation Models

## I. Executive Summary

Currency Strength Analysis moves beyond the study of a single pair (e.g., EUR/USD) to evaluate the intrinsic strength of a currency (e.g., EUR) against a basket of peers. In Forex, every trade is relative—long one asset and short another. Identifying which currency is objectively strong and which is weak allows a trader to construct high-probability pairings (Strong vs. Weak) rather than trading two strong or two weak currencies against each other, which results in consolidation.

## II. Theoretical Framework

### 2.1 The Concept of the "Numeraire"
In traditional finance, assets are valued against a fixed numeraire (Usually USD).
$$Price_{Apple} = \frac{Value_{Apple}}{Value_{USD}}$$
In Forex, there is no single numeraire. A "Price" is simply an exchange ratio:
$$R_{A/B} = \frac{Value_A}{Value_B}$$

### 2.2 The Basket Model (Indexation)
To isolate $Value_A$, we construct an index $I_A$ as the geometric mean of its exchange rates against $N$ liquid peers.

**Definition 2.1 (Currency Index):**
$$I_{EUR} = \sqrt[N]{ \prod_{i=1}^{N} R_{EUR/i} }$$
Where $i \in \{USD, JPY, GBP, CHF, AUD, CAD, NZD\}$.

This removes the idiosyncratic noise of the counter-currency. If EUR/USD falls but EUR/GBP and EUR/JPY rise, the Index shows that EUR is actually strengthening, and the EUR/USD drop is driven by USD strength, not EUR weakness.

## III. Calculation Methodologies

### 3.1 Use of Weighting
Professional indices (like the DXY - Dollar Index) use trade-weighted baskets based on economic volume.
$$DXY = 50.14(EURUSD)^{-0.576} \times (USDJPY)^{0.136} \times (GBPUSD)^{-0.119} \dots$$

### 3.2 ROC-Based Strength (Momentum)
A dynamic approach for traders is ranking currencies by their Rate of Change (ROC) over a specific dataframe (e.g., 24 hours).
$$Score_A = \sum_{j \neq A} ROC(R_{A/j})$$
*Example:* If EUR is up against 6 out of 7 majors, it has a Strength Score of 6/7.

## IV. Strategic Applications

### 4.1 Pairing Selection (The Edge)
**Theorem:** The highest probability trend comes from Longing the Strongest ($C_{max}$) and Shorting the Weakest ($C_{min}$).

**Algorithm:**
1.  Calculate Strength Matrix $S$ for 8 majors.
2.  Identify $Top = \max(S)$ and $Bottom = \min(S)$.
3.  Trade Pair $Top/Bottom$.
    *   *Scenario:* If GBP is strongest and JPY is weakest, the GBP/JPY cross will trend cleaner and faster than GBP/USD (if USD is neutral).

### 4.2 Divergence Trading
If EUR/USD is consistently rising, but the EUR Index is falling:
*Interpretation:* The rise is purely due to USD collapse.
*Action:* Look for a better pair to exploit USD weakness (perhaps AUD/USD if AUD Index is rising).

### 4.3 Reversion to Mean
Relative strength is cyclical. A currency cannot outperform its peers indefinitely due to Purchasing Power Parity (PPP).
*Signal:* If a currency's Z-score differs by $> 2\sigma$ from its 20-day mean strength, look for a reversal.

## V. Exercises

**Exercise 1 (Matrix Construction):**
Given the following 1-day percentage changes:
-   EUR/USD: +0.5%
-   GBP/USD: +0.2%
-   USD/JPY: +0.1%
-   EUR/GBP: (Calculate this).
Without data for the others, which currency is performing best relative to the USD? Which is performing worst? Construct a relative ranking (1st, 2nd, 3rd).

**Exercise 2 (Mathematical Derivation):**
Show that $\ln(EUR/GBP) = \ln(EUR/USD) - \ln(GBP/USD)$.
How does this logarithmic property simplify the calculation of basket indices?

**Exercise 3 (Scenario Analysis):**
The Commodity Currencies (AUD, CAD, NZD) are all strengthening simultaneously against the Safe Havens (USD, JPY, CHF).
What macroeconomic environment does this suggest? (Risk-On/Risk-Off). How should you position your portfolio?

## VI. References
-   DXY Index Methodology (ICE Futures U.S.).
-   Lien, K. (2006). *Day Trading and Swing Trading the Currency Market*.
-   Sharpe, W.F. (1963). *A Simplified Model for Portfolio Analysis*.
