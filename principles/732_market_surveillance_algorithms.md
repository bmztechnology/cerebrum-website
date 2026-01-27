# Market Surveillance Algorithms

## I. Executive Summary

**Market Surveillance** uses Big Data and Pattern Recognition to detect abuse (Spoofing, Insider Trading, Manipulation). Exchanges (via SMARTS/Nasdaq Surveillance) and Regulators (SEC MIDAS) ingest billions of messages daily. The shift from **Rule-Based** (If price moves 10%, Alert) to **AI-Based** (Anomaly Detection, Clustering) allows detection of novel manipulative behaviors.

## II. Formal Definitions

### Definition 2.1 (The Consolidated Audit Trail - CAT)
US regulatory project.
Tracks *every* order from origination (Retail Broker) to execution (Exchange).
Links Customer ID to Order ID.
Eliminates "masked" trading.
Allows reconstruction of the entire market lifecycle.

### Definition 2.2 (Cross-Market Surveillance)
 manipulating Stock A (Equity) to profit in Option B (Derivatives).
Or manipulating Spot to profit in Futures.
Old surveillance watched one market.
Modern surveillance links Product IDs to find cross-asset manipulation (e.g., "Mini-Manipulation").

## III. Theoretical Framework

### 3.1 Pattern Recognition
**Spoofing:** High order count, low trade count, short duration, one-sided.
**Momentum Ignition:** Aggressive market buys followed by limit sells.
**Marking the Close:** Activity concentrated in last 60 seconds.
Algorithms flag these "Signatures."

### 3.2 False Positives
HFT generates massive noise.
Is a rapid cancel "Spoofing" or "Risk Management"?
Surveillance Analyst job: Filter the AI alerts.
"The Algo was just reacting to a latency spike."

## IV. Strategic Applications

### 4.1 Internal Surveillance
Hedge funds monitor their own traders.
To prevent rogue trading or regulatory fines.
"The Compliance Algo."
If a trader cancels 99% of orders, Compliance officer gets an email.

### 4.2 The "Unusual Whales"
Detecting Insider Trading via Options flow.
Algo: Order Size > Open Interest AND Implied Vol > Historical.
Flag: "Someone knows something."
Retail traders now use surveillance tools to piggyback on Insiders.

## V. Exercises

**Exercise 1 (Reconstructing the Book):**
Using CAT data to replay the Flash Crash.
"Who pulled liquidity first?"
"Who sold aggressive?"
Forensic attribution.

**Exercise 2 (Layering Detection):**
Visualizing the order book heatmap.
Human eye sees the "Layers."
Computer Vision (CNN) sees it too.
Auto-ban.

## VI. References
-   Cumming, D. *Exchange Trading Rules and Stock Market Liquidity*.
-   Nasdaq. *SMARTS Surveillance*.
