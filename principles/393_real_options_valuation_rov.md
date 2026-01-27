# Real Options Valuation ROV: Business Strategy

## I. Executive Summary

**Real Options Valuation (ROV)** applies option pricing theory (Black-Scholes, Binomial Trees) to **Real Assets** (Projects, R&D, Mines) rather than financial assets. It captures the value of **Managerial Flexibility**—the right, but not the obligation, to Expand, Defer, Abandon, or Switch operations in response to market uncertainty. ROV usually generates higher valuations than DCF (Discounted Cash Flow) because DCF ignores the value of flexibility.

## II. Formal Definitions

### Definition 2.1 (Mapping)
-   **Underlying ($S$):** PV of expected cash flows.
-   **Strike ($K$):** Investment cost (CAPEX).
-   **Maturity ($T$):** Time until opportunity expires (Patent life).
-   **Volatility ($\sigma$):** Uncertainty of project cash flows.
-   **Option:** The right to invest. (Call Option).
$NPV = S - K$.
$ROV = Call(S, K, \sigma, T)$.
$ROV \ge NPV$. Value of waiting > 0.

### Definition 2.2 (Types)
-   **Option to Expand:** Call Option.
-   **Option to Abandon:** Put Option (Liquidation value = Strike).
-   **Option to Defer:** American Call.
-   **Compound Option:** R&D phases (Option to buy an option).

## III. Theoretical Framework

### 3.1 Volatility is Good
In DCF, uncertainty increases the discount rate $\implies$ Lower Value.
In ROV, uncertainty increases option value $\implies$ Higher Value.
Explains why VCs invest in high-risk startups (High Vol = High Option Value).
Limited downside (Initial investment), unlimited upside.

### 3.2 Dynamic Programming
Real Options are continuous decisions.
Requires nice Bellman Equation formulation.
Backward induction from the end of the project lifecycle.

## IV. Strategic Applications

### 4.1 Oil Exploration
License to drill = OTM Call Option.
Strike = Cost of Drilling platform.
Underlying = Value of Oil Field.
If Oil Price < \$50, don't drill (Option expires worthless). Loss = License fee.
If Oil Price > \$100, drill.
Standard DCF might say "NPV Negative" at current oil price.
ROV says "Positive Value" (Time value of waiting for price spike).

### 4.2 Pharma R&D
Phase 1 $\to$ Phase 2 $\to$ Phase 3.
Series of compound options.
Success in Phase 1 gives the "Option" to pay for Phase 2.
Failure $\implies$ Abandon (Cut losses).
Modelling the "Kill" decision adds massive value vs assuming "Sunk Cost."

## V. Exercises

**Exercise 1 (The Wait):**
Interest rates rise.
Call Option value?
Usually increases (Rho).
But in Real Options, higher rate discounts the future cash flows ($S$) heavily.
Net effect usually negative for ROV.

**Exercise 2 (Strategic Growth Value):**
Amazon operating at loss for years.
Building "Options to Expand" into Cloud (AWS), Logistics, Media.
Stock price reflected the ROV Portfolio, not the DCF of book sales.

## VI. References
-   Dixit, A., & Pindyck, R. *Investment Under Uncertainty*.
-   Trigeorgis, L. *Real Options*.
