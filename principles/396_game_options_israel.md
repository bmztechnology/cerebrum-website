# Game Options Israel: Game Theory Derivatives

## I. Executive Summary

**Game Options** (or Israeli Options) are contracts where **Both** the buyer and the seller have exercise rights. The Buyer can exercise (Call) at any time. The Seller can cancel (Call back/Put) at any time, usually paying a penalty. The price is determined by the **Nash Equilibrium** of a stopping game (Dynkin Game).

## II. Formal Definitions

### Definition 2.1 (Payoffs)
-   Buyer Exercise ($t$): Pays $X_t$. Receives Asset.
-   Seller Cancel ($\tau$): Forces Buyer to take $Y_t$ (Penalty > Value).
-   Value $V = \inf_{\tau} \sup_{t} E[Payoff]$.
Saddle point problem.

### Definition 2.2 (Convertible Bonds)
Most common example.
-   **Holder:** Can Convert to Stock (Call).
-   **Issuer:** Can Call the Bond (Force redemption/conversion).
The Issuer calls the bond to force the Holder to convert early (killing the optionality).
Optimal strategy: Call as soon as Conversion Value > Call Price.

## III. Theoretical Framework

### 3.1 Dynkin Games
Stochastic games with stopping times.
Value lies between the intrinsic value and the penalty value.
The "Exercise Region" and "Cancellation Region" partition the state space.
In between: "Continuation Region."

### 3.2 Kifer's Theorem
Proved existence of unique value and saddle point for Game Options.
Foundation of the math (2000).

## IV. Strategic Applications

### 4.1 Employee Stock Options (ESO)
Employee can Exercise (Quit and buy stock).
Company can Cancel (Fire employee?). Not exactly.
But Real Asset Joint Ventures often have "Buy/Sell" clauses (Shotgun Clause).
Partner A names a price. Partner B must either Buy A or Sell to A at that price.
Fair division game.

### 4.2 Swing Options (Energy)
Utility can take Gas between Min and Max daily volume.
Pipeline can interrupt supply (Force Majeure) or penalty pricing.
Game interplay between consumption and supply constraints.

## V. Exercises

**Exercise 1 (The Penalty):**
If Penalty is infinite $\implies$ Standard American Option.
If Penalty is zero $\implies$ Seller cancels immediately $\implies$ Value = Intrinsic.
Price is strictly bounded.

**Exercise 2 (Put-Call Symmetry):**
Game Options often exhibit symmetry properties absent in standard options.
Used for model verification.

## VI. References
-   Kifer, Y. *Game Options*.
-   Kyprianou, A. *Some Calculations for Israeli Options*.
