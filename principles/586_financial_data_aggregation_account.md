# Financial Data Aggregation Account

## I. Executive Summary

 **Data Aggregation** (Screen Scraping, APIs) allows advisors to see the client's **Whole Balance Sheet** (Held-Away Assets). Technologies like **Plaid** and **Yodlee** connect disparate bank/brokerage accounts into a unified dashboard. This holistic view is essential for true Wealth Management, enabling accurate Risk Analysis and Cash Flow planning.

## II. Formal Definitions

### Definition 2.1 (Held-Away Assets)
Assets not managed by the advisor (e.g., 401k, Spouse's account, Checking).
Often 50% of client wealth.
Advisor "Blind Spot."

### Definition 2.2 (Screen Scraping vs API)
**Scraping:** Fragile. Logs in as user, reads HTML. Breaks when bank changes website. Security risk (sharing passwords).
**Open Banking API (PSD2):** Secure token exchange. Reliable. Industry standard.

## III. Theoretical Framework

### 3.1 Data Enrichment
Raw transaction: "Starbucks 12345."
Enriched: Category "Coffee," Merchant "Starbucks," Geo "New York."
Enables PFM (Personal Financial Management) insights.
"You spent \$500 on coffee last month."

### 3.2 Privacy & Ownership
Who owns the data? The Bank? The Client? The Aggregator?
GDPR (Europe) / CCPA (California).
Client right to port data.

## IV. Strategic Applications

### 4.1 Holistic Planning
Advisor sees 401k is 100% Cash.
Advises client to fix it (even if not paid on those assets).
Builds trust. "Household Level Rebalancing."

### 4.2 Lending Decisions
Instant mortgage approval based on aggregated cash flow data.
"Cash flow underwriting" instead of FICO score?

## V. Exercises

**Exercise 1 (Credential Stuffing):**
Risk of centralized aggregators being hacked.
"Honeypot" of banking credentials.
Move to OAuth (Token) is critical security upgrade.

**Exercise 2 (Categorization Error):**
Algorithm thinks "Home Depot" is "Utility" not "Discretionary."
Budgeting models fail.
Human verification still needed.

## VI. References
-   Brainard, L. *Financial Data Access and Security*.
-   Plaid / Yodlee Technical Documentation.
