# Basis Trading Cash Futures Arbitrage

## I. Executive Summary

**Basis Trading** exploits the price difference between the **Cash Bond** and the **Bond Future**. The "Basis" is the cost of carry. Hedge Funds (like LTCM or modern Multi-Strats) put on massive **Long Basis** positions (Long Cheap Basis / Short Expensive Futures) to capture small mispricings (1-2 ticks). This activity keeps the Futures market tethered to Spot but creates massive **leverage risks**.

## II. Formal Definitions

### Definition 2.1 (The Basis)
$$ Basis = P_{Cash} - (P_{Futures} \times CF) $$
CF = Conversion Factor (to adjust for bond coupons).
**Gross Basis:** Theoretically the cost of carry (Repo - Coupon).
**Net Basis:** Basis - Carry. Should be Zero.
If Net Basis < 0 (Futures expensive), Arb open.

### Definition 2.2 (The Cheapest to Deliver - CTD)
Futures contract allows delivery of *any* eligible bond (e.g., 15-25 year maturity).
Short Seller chooses the "Cheapest" bond to deliver.
The Future tracks the CTD bond.
Switch option: If CTD changes, the Future price drops.

## III. Theoretical Framework

### 3.1 Leverage Dynamics
Basis spread is tiny (e.g., 2/32nds).
To make money, Funds lever 50x-100x via Repo.
Buy Bond $\to$ Repo it out $\to$ Buy more Bond.
Short Future (no capital, just margin).
"Picking up nickels in front of a bulldozer."

### 3.2 The Deleveraging cycle
March 2020.
Vol spiked $\implies$ Futures margin calls $\uparrow$.
Funds had to sell Cash Bonds to meet margin.
Selling Cash Bonds $\implies$ Basis widened (Cash crashed relative to Futures).
Widening Basis $\implies$ More losses.
Fed had to buy Cash Bonds to stop the cycle.

## IV. Strategic Applications

### 4.1 Short Basis (The CTD Play)
Short Cash / Long Future.
Betting that the Basis is "Rich."
Or betting on the "Switch Option."
High convexity trade.

### 4.2 Treasury Basis
Differences between 10Y Note and a synthetic basket of off-the-run 10Y bonds.
Relative value trading along the curve.

## V. Exercises

**Exercise 1 (Conversion Factor Math):**
Bond 6% Coupon.
Future Standard 6% Coupon.
CF $\approx$ 1.0.
Bond 2% Coupon.
CF < 1.0.
The math normalizes the price, but convexity differences remain.

**Exercise 2 (Implied Repo Rate):**
Calculate IRR of the trade: Buy Bond, Short Future, Deliver.
If IRR > Actual Repo Rate $\implies$ Profit.
"Cash and Carry" arbitrage.

## VI. References
-   Burghardt, G. *The Treasury Bond Basis*.
-   Barth, M. *Cash-Futures Arbitrage*.
