# Market Impact Models Square Root Law

## I. Executive Summary

**Market Impact** is the cost paid to move the price. Empirical observation across all asset classes (Stocks, Bonds, Bitcoin) confirms the **Square Root Law**: Impact grows with the **Square Root** of the trade size relative to daily volume. This concave function implies that the first share is cheap, but the millionth share is very expensive. It is the physics governing **Capacity** in asset management.

## II. Formal Definitions

### Definition 2.1 (The Square Root Formula)
$$ \Delta P = Y \cdot \sigma \cdot \sqrt{\frac{Q}{V}} $$
$\Delta P$: Price change (Impact).
$Y$: Universal constant ($\approx 0.7 - 1.0$).
$\sigma$: Daily Volatility.
$Q$: Order Size.
$V$: Daily Volume.
Cost (in \$) = Size $\times \frac{\Delta P}{2} \propto Size^{3/2}$.
Result: Impact cost increases faster than size.

### Definition 2.2 (Temporary vs Permanent Impact)
Square Root Law estimates the *Temporary* impact (Slippage + Reversion).
Permanent Impact (Information) is generally considered Linear.
Empirically, the Square Root fits the *total* execution cost best.

## III. Theoretical Framework

### 3.1 Latent Liquidity Theory
Why Square Root?
Toth, Lemperiere, Bouchaud (2011).
Assumes Latent Liquidity (Order Book) is distributed linearly around value.
Digging into a linear density profile requires dealing with quadratic volume?
Derivation from first principles of "Meta-Order splitting."

### 3.2 Meta-Orders
A large parent order split into child orders.
Impact accumulates as child orders are executed.
Price reverts *after* the meta-order finishes.
The relaxation phase.
Impact is transient/elastic.

## IV. Strategic Applications

### 4.1 Capacity Planning
If a fund trades $1\%$ of ADV, cost is $X$.
If it trades $10\%$ of ADV, cost is $\sqrt{10} \times X \approx 3.16 X$ per share.
Total cost $\approx 31 X$.
Returns Decay rapidly.
Formula determines the "Maximum AUM" before Alpha is eaten by Impact.

### 4.2 Optimal Sizing
Trade-off:
Larger positions $\implies$ Higher Impact.
Smaller positions $\implies$ Fixed costs (Research time) dominate.
Impact models pinpoint the "Sweet Spot" for position sizing.

## V. Exercises

**Exercise 1 (Calibration):**
Collect data on 1000 executions of varying size.
Plot $Cost / \sigma$ vs $\sqrt{Q/V}$.
Should form a straight line.
The slope is the firm's specific "Y" factor (Execution Skill).

**Exercise 2 (The Bitcoin Test):**
Does it hold in Crypto?
Yes.
The law appears universal, independent of microstructure details (LOB vs AMM).
Suggests a fundamental law of supply/demand aggregation.

## VI. References
-   Barra. *Market Impact Model*.
-   Bouchaud, J. *Price Impact*.
