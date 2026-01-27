# Barrier Options: Knock-Out Geometry

## I. Executive Summary

**Barrier Options** are path-dependent derivatives that either activate (**Knock-In**) or terminate (**Knock-Out**) if the underlying asset touches a specific price level ($H$). They are cheaper than standard "Vanilla" options because their probability of payoff is lower. Hedging them is notoriously difficult due to **discontinuous Delta** at the barrier level.

## II. Formal Definitions

### Definition 2.1 (Types)
-   **Up-and-Out Call:** Like a normal Call, but if $S > H$, option dies (Worthless). "Rebate" might be paid.
-   **Down-and-In Put:** Option doesn't exist until $S < H$. Once touched, it becomes a valid Put.
-   **Double Barrier:** Upper and Lower bounds.

### Definition 2.2 (The Reflection Principle)
Solving BSM for Barriers involves Prob(Touching H) and Prob(Ending ITM).
Using the "Mirror Image" of Brownian Motion around the barrier.
Closed form solutions exist (Rubinstein-Reiner), but usually require Monte Carlo or PDE Grid pricing.

## III. Theoretical Framework

### 3.1 Discontinuous Greeks
Consider Down-and-Out Call. Strike 100. Barrier 95. Spot 96.
Option has value ($1).
If Spot goes to 94.99, Value $\to$ 0.
Delta is massive and positive.
Gamma changes sign abruptly.
Hedging requires "Static Replication" (buying a portfolio of Vanillas) rather than Dynamic Delta hedging which is impossible near the barrier.

### 3.2 Barrier Shifting
Dealers shift the barrier slightly to account for discrete monitoring (e.g., Daily Close vs Continuous).
$H_{adjusted} = H \pm 0.5826 \sigma \sqrt{dt}$.
To prevent "stopping hunting."

## IV. Strategic Applications

### 4.1 Cheap Directional Bets
You think EUR/USD goes up, but not above 1.15.
Buy Up-and-Out Call (Strike 1.05, Barrier 1.15).
Premium is 80% cheaper than Vanilla Call.
Risk: If it rallies TOO hard, you make zero.
"The perfect is the enemy of the good."

### 4.2 Knock-Out Discount
Corporate Hedging.
Airline needs to hedge Oil Rise.
Buys Call with Knock-Out at $150.
Rationale: "If Oil hits $150, the economy crashes, and I won't need the hedge anyway."
Reducing cost of carry.

## V. Exercises

**Exercise 1 (Reverse Knock-Out):**
Deep ITM Call with a Knock-Out near current price.
Acts like a "Digital Put" payoff profile.
Extremely high Delta leverage.

**Exercise 2 (The Death Zone):**
As Spot approaches Barrier.
Dealer is Short Gamma.
Must sell massively to hedge.
Once Barrier breaks, Dealer must buy back massively.
Barrier events cause market flash crashes/rallies (Stop runs).

## VI. References
-   Taleb, N.N. *Dynamic Hedging* (Barrier Hedging Section).
-   Carr, P. *Static Hedging of Barrier Options*.
