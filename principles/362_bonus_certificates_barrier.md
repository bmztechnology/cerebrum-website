# Bonus Certificates Barrier: The Down-and-Out Put

## I. Executive Summary

**Bonus Certificates** provide an equity-like upside but replace the downside risk with a conditional buffer. As long as the stock strictly stays above a **Barrier** (e.g., 70% of initial), the investor receives a **Bonus** payment (e.g., 110%) or the stock performance, whichever is higher. If the Barrier is breached, the product converts to the stock (1:1 downside).

## II. Formal Definitions

### Definition 2.1 (Construction)
Bonus Cert = Long Stock + Long Down-and-Out Put.
-   **Long Stock:** Standard delta 1.
-   **Long D&O Put:** Strike = Bonus Level. Barrier = Barrier Level.
-   If Barrier not touched: Put pays $\max(Bonus - S, 0)$. Total = $S + Bonus - S = Bonus$ (Floor).
-   If Barrier touched: Put dies. Total = $S$ (Stock).

### Definition 2.2 (Scenario)
-   Spot 100.
-   Barrier 75.
-   Bonus 120.
-   If Spot ends at 105 (No touch): Pay 120. (Outperform).
-   If Spot ends at 130 (No touch): Pay 130. (Participate).
-   If Spot hits 70, ends at 90: Pay 90. (Loss).

## III. Theoretical Framework

### 3.1 Dividends
Investor gives up Dividends.
The PV of Dividends + Price of D&O Put is used to fund the structure.
High Dividend stocks allow for deeper Barriers or higher Bonus Levels.

### 3.2 Volatility Impact
D&O Put is sensitive to Vol.
Implied Vol up $\implies$ Probability of hitting barrier up $\implies$ Put Value Down $\implies$ Cert Value Down.
Paradox: Market crashes (Vol up), Certificate falls *faster* than stock (Delta > 1).
"Barrier Anxiety."

## IV. Strategic Applications

### 4.1 Sideways Markets
Best performance in flat markets.
Stock 0%. Bonus Cert +20%.
"Yield extraction" from volatility.

### 4.2 Recovery Plays
Stock crashed 40%.
Buy Bonus Cert with Barrier additional 30% lower.
High probability of payout.
Capturing the "Rebound" or "Stabilization."

## V. Exercises

**Exercise 1 (Intraday Breach):**
Barrier is usually continuous.
Flash crash touches 74.99.
Bonus mechanism shattered.
Product trades like the stock (minus dividends) from then on.
"The Certificate is broken."

**Exercise 2 (Pricing the D&O):**
Near the barrier, Gamma is massive.
Issuer must sell stock aggressively to hedge the dying Put.
Accelerates the selloff toward the barrier.
After barrier breaks, Issuer buys back.

## VI. References
-   Hernandez, R. *Bonus Certificates: Structure and Pricing*.
-   UBS. *KeyInvest Product Guide*.
