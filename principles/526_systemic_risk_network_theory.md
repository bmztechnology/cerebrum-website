# Systemic Risk Network Theory: Contagion

## I. Executive Summary

**Systemic Risk** is the risk of collapse of the entire financial system or market, as opposed to idiosyncratic risk. It is modeled using **Network Theory**, viewing institutions as **Nodes** and exposures as **Edges**. "Too Big To Fail" (TBTF) evolves into "Too Connected To Fail." Failures propagate through **Interconnectedness**, **Common Asset Exposures** (Fire Sales), and **Information Contagion** (Bank Runs).

## II. Formal Definitions

### Definition 2.1 (Network Topology)
-   **Core-Periphery:** Big Dealers connected to everyone. Small banks connected only to Core. Highly robust to random failure, fragile to targeted attack on Core.
-   **Scale-Free:** Hubs exist.
-   **Financial Contagion:** Default of Node A causes Default of Node B via counterparty loss.

### Definition 2.2 (CoVaR)
Conditional VaR of the System given that Institution $i$ is in distress.
$\Delta CoVaR_i = CoVaR(System|i \text{ distressed}) - CoVaR(System|i \text{ median})$.
Measures the systemic contribution of a bank.
Used to identify SIFIs (Systemically Important Financial Institutions).

## III. Theoretical Framework

### 3.1 Fire Sale Externalities
Bank A deleverages. Sells MBS.
MBS Price falls.
Bank B (Common Exposure) marks MBS down.
Bank B Equity falls. Margin Call.
Bank B sells MBS.
Vicious spiral affecting all holders, even those perfectly healthy.

### 3.2 Information Contagion
SVB fails.
Are other Regional Banks owning similar assets?
Depositors don't know detailed balance sheets.
"Run on the Sector."
Rational inattention.

## IV. Strategic Applications

### 4.1 Macroprudential Regulation
Basel III G-SIB surcharges.
Taxing size and interconnectedness.
Central Clearing (CCPs) simplifies the network to a Star topology (Hub and Spoke).
Risk: If CCP fails? "Single Point of Failure."

### 4.2 Circuit Breakers
Halting trading to stop the algos.
Breaks the feedback loop.
Restores information symmetry (auctions).

## V. Exercises

**Exercise 1 (Cascade Model):**
Watts model.
Threshold rule: If $k$ neighbors fail, I fail.
Small shock can trigger global cascade if network is in "Critical State."

**Exercise 2 (Diversification as Systemic Risk):**
If every bank diversifies perfectly (holds Market Portfolio).
Every bank has identical exposure.
They all fail together in a market crash.
Homogeneity increases systemic fragility.

## VI. References
-   Haldane, A. *Rethinking the Financial Network*.
-   Acemoglu, D. *Systemic Risk and Stability in Financial Networks*.
