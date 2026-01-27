# News Trading: Event-Driven Arbitrage

## I. Executive Summary

News Trading focuses on capturing the extreme volatility injected into the market by the release of scheduled macroeconomic data (e.g., NFP, CPI, GDP). Unlike technical trading, which assumes "Price reflects all information," News Trading exploits the **re-pricing mechanism** occurring when new information enters the system. It is a game of speed (Latency Arbitrage) and interpretation (Macro Analysis).

## II. The Tiered Event Structure

### Tier 1: The "Movers" (Global Impact)
-   **US Non-Farm Payrolls (NFP):** The King. 1st Friday of Month. Measures US employment health.
-   **Central Bank Rate Decisions (FOMC, ECB):** Direct change to cost of money.
-   **CPI (Inflation):** Dictates future Rate decisions.

### Tier 2: The "Shakers" (Local Impact)
-   GDP Releases.
-   Retail Sales.
-   PMI (Purchasing Managers Index).

### Tier 3: Noise
-   Trade Balance (usually).
-   Weekly Jobless Claims.

## III. Theoretical Framework

### 3.1 The Surprise Factor ($\Delta$)
The market does not move based on the *actual* number, but on the *deviation* from the Consensus Forecast.
$$\Delta = Actual - Forecast$$
-   **Scenario A:** Forecast +200k jobs. Actual +200k. $\Delta = 0$. Price: Flat/Whipsaw.
-   **Scenario B:** Forecast +200k. Actual +300k. $\Delta = +50\%$. Price: Explosion (USD Up).

### 3.2 Liquidity Evaporation
1 minute before NFP, Market Makers pull their liquidity (widen spreads) to protect against toxic flow.
Spread widens from 0.5 to 10.0 pips.
**Risk:** Slippage. A Stop Loss at 1.1000 might fill at 1.0950.

## IV. Strategic Methodologies

### 4.1 The Straddle (Bracket Strategy)
Place Buy Stop above High and Sell Stop below Low of the pre-news range (M1).
-   *Thesis:* Volatility will push price hard in *one* direction.
-   *Risk:* The "Head Fake." Price spikes up (triggers Buy), then crashes down (triggers Stop).

### 4.2 The "Fade" (Mean Reversion)
Wait for the initial spike (The Knee-Jerk Reaction).
If the move is technically unsupported (hits resistance), fade it.
-   *Thesis:* Algos overreacted to a headline number, but the details (revisions) were weak.

### 4.3 Post-News Drift
Wait 15 minutes. Let the spread normalize and the "Smart Money" choose a direction.
Trade the breakout of the 15-minute range.
-   *Reliability:* Highest. Capture the institutional flow for the rest of the day.

## V. Exercises

**Exercise 1 (Scenario Analysis):**
US CPI Forecast: 3.0%.
Actual: 3.5%.
Interpretation: Inflation is Hot. Fed must Hike rates.
Reaction:
a) USD? (Up - Yields rise).
b) Gold? (Down - Strong Dollar/Yields hurt non-yielding assets).
c) S&P 500? (Down - Rates hurt valuations).

**Exercise 2 (Slippage Math):**
You hold a Full Lot (100k) into NFP.
Spread widens to 20 pips.
Price gaps 50 pips against you.
Your Stop Loss was at -10 pips.
Where do you fill? (-50 pips).
Calculate Loss: $50 \times \$10 = \$500$. (5x your intended risk).
*Lesson:* Never hold unguarded positions into Tier 1 news.

**Exercise 3 (Algo Logic):**
Why do HFTs buy *before* the news appears on your Bloomberg terminal?
(Machine Readable News feeds connect directly to exchange servers in microseconds).

## VI. References
-   Lien, K. (2006). *Day Trading the Currency Market*.
-   Boyd, I. *Fundamental Analysis for Forex*.
-   Forex Factory (Economic Calendar definitions).
