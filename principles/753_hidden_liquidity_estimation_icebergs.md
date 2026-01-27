# Hidden Liquidity Estimation Icebergs

## I. Executive Summary

**Hidden Liquidity** (Iceberg Orders, Dark Orders) constitutes a significant portion of available depth (often > 25%). Traders use hidden orders to minimize **Signaling Risk**. Estimating hidden liquidity is crucial for **Smart Order Routing** (SOR) and calculating true **Market Impact**. Detection relies on analyzing **Trade-to-Quote** discrepancies and **Refill Patterns**.

## II. Formal Definitions

### Definition 2.1 (The Iceberg Model)
Total Size $Q_{total}$.
Display Size $Q_{display}$ (e.g., 100).
When $Q_{display}$ is consumed by trades, the exchange engine immediately (or after random delay) refills another 100 from $Q_{remain} = Q_{total} - Q_{display}$.
The tape shows: Trade 100 @ 10.00. Quote stays 100 @ 10.00.
Inference: Iceberg detected.

### Definition 2.2 (The Hidden Volume Estimates $V_{hidden}$)
$V_{est} = \alpha \times V_{visible}$.
$\alpha$ varies by asset and time.
During "Accumulation" phases, $\alpha$ is high (Whales hiding bids).
During "Panic," $\alpha$ is low (Everyone wants out now).

## III. Theoretical Framework

### 3.1 Probability of Hidden
Bouchaud et al.
Probability of hidden liquidity at the best quote depends on the spread size and volatility.
Order Size clustering.
If trade size is exactly equal to BBO size, and price doesn't move $\implies$ 100% prob of Iceberg.

### 3.2 Dark Pool Feed Leakage
Some exchanges offer "Flash Orders" or indications of interest that hint at dark depth.
Reg NMS mostly squashed this.
Now, detection is purely statistical based on L3 interactions.

## IV. Strategic Applications

### 4.1 Pinging for Size
Send IOC Buy 200.
Visible Ask 100.
If Filled 200 @ 10.00 $\implies$ Hidden Liquidity exists.
If Filled 100 @ 10.00 and 100 @ 10.01 $\implies$ No Hidden.
Costly information gathering.

### 4.2 Probing with Passive
Place a Limit Buy *just in front* of a suspected Iceberg.
"Pennying the Iceberg."
The Iceberg acts as a "Backstop."
You capture the spread. If price drops, the Iceberg buys (you sell to him for scratch).
Ideal low-risk strategy.

## V. Exercises

**Exercise 1 (The Refill Rate):**
Watch a support level.
1000 lots trade.
Bid size refreshes instantly to 500 every time it drops below 100.
Algorithmic Iceberg (Synthetic).
Trader is managing the display size dynamically.

**Exercise 2 (Total Size Prediction):**
A statistical distribution (Power Law) governs parent order sizes.
If you detect an Iceberg that has already traded 5000 shares, what is expected remaining?
Conditional Expectation of Power Law tail.
Result: "The longer it lasts, the bigger it likely is" (Lindy).

## VI. References
-   Frey, S. & Sandas, P. *The Impact of Hidden Liquidity in Limit Order Books*.
-   Esser, A. *Detection of Hidden Orders*.
