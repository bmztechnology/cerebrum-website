# Portfolio Heat: Aggregated Exposure Limits

## I. Executive Summary

Portfolio Heat measures the total percentage of account equity currently at risk across all open positions. It is the aggregate "Value at Risk." While Individual Position Sizing protects against a single bad trade, Portfolio Heat limits protect against a **Systemic Correlation Event** (e.g., USD Flash Crash) where all open positions hit their stops simultaneously.

## II. Formal Definitions

### Definition 2.1 (Total Heat)
$$Heat = \sum_{i=1}^{N} Risk\%_i$$
Example:
-   Long EUR/USD (1% Risk).
-   Short USD/CHF (1% Risk).
-   Long GBP/USD (1% Risk).
-   Total Heat = 3%.

### Definition 2.2 (The 6% Rule)
Classical Risk Management axiom (Alexander Elder):
"Total Heat should never exceed 6%."
If you have 6 open trades at 1% risk, you are "Maxed Out." You cannot open a new trade, even if the setup is perfect, without closing an existing one.

## III. Theoretical Framework

### 3.1 Correlation Clusters
If inputs are correlated (Risk On/Risk Off), separate trades act as one giant trade.
In the example above, EUR/USD Long, USD/CHF Short, and GBP/USD Long are virtually the same bet (Short USD).
True Heat is 3%.
If entries were uncorrelated (e.g., Long Corn, Short EUR/USD, Long IBM), the probability of simultaneous failure is lower ($\le 3\%$).

### 3.2 Leverage vs Heat
-   **Leverage:** Ratio of Notional Value to Equity (e.g., 20:1).
-   **Heat:** Ratio of Stop-Loss Distance Value to Equity.
You can have High Leverage but Low Heat (Tight Stops).
You can have Low Leverage but High Heat (No Stops).

## IV. Strategic Applications

### 4.1 Decremental Heat
As the account enters Drawdown, the Max Heat limit should contract.
-   At High Water Mark: Max Heat 6%.
-   At -5% DD: Max Heat 4%.
-   At -10% DD: Max Heat 2%.
This acts as a "Circuit Breaker" to prevent rage trading.

### 4.2 Sector Limits
-   Max Risk on USD pairs: 3%.
-   Max Risk on JPY pairs: 2%.
-   Max Risk on Crypto: 1%.
Ensures diversification.

## V. Exercises

**Exercise 1 (Calculation):**
Account \$100,000.
Position A Risk: \$1,000.
Position B Risk: \$2,000.
Position C Risk: \$500.
a) Calculate Portfolio Heat %.
b) Can you open a new trade with 2% risk if your limit is 6%?

**Exercise 2 (Scenario):**
You have 10 open positions, each 0.5% risk. Total Heat 5%.
A surprise War breaks out.
All non-USD pairs gapping down.
Because you were Long 10 different Crosses, you get stopped out on all 10.
Loss = 5% + Slippage.
Is this acceptable? (Yes, 5% is a "bad day," not a bankruptcy. 20 positions at 2% = 40% loss = Disaster).

**Exercise 3 (Management):**
You are at Max Heat. A "Grade A+" setup appears. What do you do?
(Close the weakest existing position to free up Heat for the new superior one).

## VI. References
-   Elder, A. (1993). *Trading for a Living*.
-   Vince, R. *The Handbook of Portfolio Mathematics*.
